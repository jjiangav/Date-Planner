import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import {
  dateInfo,
  walkStops,
  transitOptions,
  canaryWharfStops,
  checklist,
} from './itinerary';

const TARGET_DATE = new Date('2026-08-28T22:00:00+01:00');
const STORAGE_KEY = 'thames-night-walk-checklist';

function useCountdown(target) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, done: diff === 0 };
}

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function Stars() {
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 4,
      })),
    []
  );

  return (
    <div className="stars" aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className="star"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function Hud() {
  const now = useClock();
  const time = now.toLocaleTimeString('en-GB', { hour12: false });

  return (
    <div className="hud" aria-hidden="true">
      <div className="hud-left">
        <span className="hud-rec">
          <span className="hud-rec-dot" /> REC
        </span>
        <span className="hud-sep">·</span>
        <span>NIGHT MODE</span>
      </div>
      <div className="hud-right">
        <span>ISO 3200</span>
        <span className="hud-sep">·</span>
        <span>f/2.8</span>
        <span className="hud-sep">·</span>
        <span>1/15s</span>
        <span className="hud-sep">·</span>
        <span>{time}</span>
        <span className="hud-sep">·</span>
        <span>🔋87%</span>
      </div>
    </div>
  );
}

function Countdown() {
  const { days, hours, minutes, seconds, done } = useCountdown(TARGET_DATE);

  if (done) {
    return <p className="countdown-live">📸 It's happening tonight — have the best walk.</p>;
  }

  return (
    <div className="countdown">
      <span className="countdown-caption">SHUTTER OPENS IN</span>
      <div className="countdown-lcd">
        {[
          ['days', days],
          ['hrs', hours],
          ['min', minutes],
          ['sec', seconds],
        ].map(([label, value]) => (
          <div className="countdown-unit" key={label}>
            <span className="countdown-value">{String(value).padStart(2, '0')}</span>
            <span className="countdown-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Timeline({ stops }) {
  return (
    <ol className="timeline">
      {stops.map((stop, i) => (
        <li className="timeline-item" key={stop.title}>
          <div className="timeline-marker">
            <span className="timeline-dot" />
            {i !== stops.length - 1 && <span className="timeline-line" />}
          </div>
          <div className="timeline-card">
            <span className="sprockets" aria-hidden="true" />
            <div className="timeline-card-head">
              <span className="frame-number">FRAME {String(i + 1).padStart(2, '0')}</span>
              <span className="timeline-time">{stop.time}</span>
            </div>
            <h3>{stop.title}</h3>
            <p>{stop.blurb}</p>
            {stop.tip && (
              <p className="timeline-tip">
                <span aria-hidden="true">📸</span> {stop.tip}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

function Checklist({ items }) {
  const [checked, setChecked] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return saved;
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      // ignore write failures (private mode, storage disabled, etc.)
    }
  }, [checked]);

  const toggle = (item) => setChecked((c) => ({ ...c, [item]: !c[item] }));

  return (
    <ul className="checklist">
      {items.map((item) => (
        <li key={item}>
          <label className="checklist-item">
            <input
              type="checkbox"
              checked={!!checked[item]}
              onChange={() => toggle(item)}
            />
            <span className={checked[item] ? 'checked' : ''}>{item}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div className="page">
      <Stars />
      <Hud />

      <header className="hero">
        <div className="viewfinder">
          <span className="af-bracket af-tl" />
          <span className="af-bracket af-tr" />
          <span className="af-bracket af-bl" />
          <span className="af-bracket af-br" />
          <span className="grid-line grid-v1" />
          <span className="grid-line grid-v2" />
          <span className="grid-line grid-h1" />
          <span className="grid-line grid-h2" />

          <div className="monogram" aria-hidden="true">
            <span>JJ</span>
            <span className="monogram-amp">+</span>
            <span>ZZ</span>
          </div>
          <p className="eyebrow">A photo walk, mapped out for us 📸</p>
          <h1>Thames Night Photography Walk</h1>
          <p className="subtitle">
            {dateInfo.day}, {dateInfo.date} · starting {dateInfo.startTime}
          </p>
          <p className="hero-blurb">
            Westminster → South Bank → Tower Bridge, then off to Canary Wharf
            to chase skyscrapers. Cameras charged, comfy shoes on.
          </p>
          <Countdown />
        </div>
      </header>

      <main>
        <section className="section">
          <h2><span className="section-tag">▸ SHOOTING MODE</span>The Walk</h2>
          <p className="section-lead">
            Fully dark by 10, so we're leaning into long exposures and city
            lights instead of chasing sunset color. Rough pace below — no
            need to rush, the whole point is stopping often.
          </p>
          <Timeline stops={walkStops} />
        </section>

        <section className="section">
          <h2><span className="section-tag">▸ TRANSPORT</span>Getting to Canary Wharf</h2>
          <p className="section-lead">
            From Tower Bridge, a few ways to cross over for round two:
          </p>
          <div className="cards-grid">
            {transitOptions.map((opt) => (
              <div className="option-card" key={opt.name}>
                <span className="option-icon" aria-hidden="true">
                  {opt.icon}
                </span>
                <h3>{opt.name}</h3>
                <p>{opt.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2><span className="section-tag">▸ LOCATION 02</span>Canary Wharf</h2>
          <p className="section-lead">Round two — skyscrapers and still water.</p>
          <div className="cards-grid">
            {canaryWharfStops.map((stop) => (
              <div className="option-card" key={stop.title}>
                <h3>{stop.title}</h3>
                <p>{stop.blurb}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2><span className="section-tag">▸ GEAR CHECK</span>Before We Go</h2>
          <Checklist items={checklist} />
        </section>
      </main>

      <footer className="footer">
        <span className="aperture" aria-hidden="true" />
        <p>JJ + ZZ — can't wait for Friday.</p>
      </footer>
    </div>
  );
}

export default App;
