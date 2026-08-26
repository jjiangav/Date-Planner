import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import RouteMap from './RouteMap';
import { content } from './itinerary';

const TARGET_DATE = new Date('2026-08-28T22:00:00+01:00');
const STORAGE_KEY = 'thames-night-walk-checklist';
const LANG_KEY = 'thames-night-walk-lang';

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

function useLanguage() {
  const [lang, setLangState] = useState('en');
  const [showGate, setShowGate] = useState(false);

  useEffect(() => {
    let stored = null;
    try {
      stored = localStorage.getItem(LANG_KEY);
    } catch {
      // ignore read failures (private mode, storage disabled, etc.)
    }
    if (stored === 'en' || stored === 'zh') {
      setLangState(stored);
    } else {
      setShowGate(true);
    }
  }, []);

  const setLang = (value) => {
    setLangState(value);
    setShowGate(false);
    try {
      localStorage.setItem(LANG_KEY, value);
    } catch {
      // ignore write failures
    }
  };

  return { lang, setLang, showGate };
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

function Hud({ lang, onToggleLang }) {
  const now = useClock();
  const time = now.toLocaleTimeString('en-GB', { hour12: false });

  return (
    <div className="hud">
      <div className="hud-left" aria-hidden="true">
        <span className="hud-rec">
          <span className="hud-rec-dot" /> REC
        </span>
        <span className="hud-sep">·</span>
        <span>NIGHT MODE</span>
      </div>
      <div className="hud-right">
        <span aria-hidden="true">ISO 3200</span>
        <span className="hud-sep" aria-hidden="true">·</span>
        <span aria-hidden="true">f/2.8</span>
        <span className="hud-sep" aria-hidden="true">·</span>
        <span aria-hidden="true">1/15s</span>
        <span className="hud-sep" aria-hidden="true">·</span>
        <span aria-hidden="true">{time}</span>
        <span className="hud-sep" aria-hidden="true">·</span>
        <span aria-hidden="true">🔋87%</span>
        <span className="hud-sep" aria-hidden="true">·</span>
        <LangToggle lang={lang} onToggle={onToggleLang} />
      </div>
    </div>
  );
}

function LangToggle({ lang, onToggle }) {
  const isZh = lang === 'zh';
  return (
    <button
      type="button"
      className={`lang-toggle ${isZh ? 'lang-toggle-zh' : ''}`}
      onClick={() => onToggle(isZh ? 'en' : 'zh')}
      aria-label={isZh ? 'Switch to English' : '切换到中文'}
    >
      <span className="lang-toggle-option">EN</span>
      <span className="lang-toggle-option">中文</span>
      <span className="lang-toggle-thumb" />
    </button>
  );
}

function LanguageGate({ onChoose }) {
  return (
    <div className="lang-gate-overlay" role="dialog" aria-modal="true" aria-label="Choose a language / 选择语言">
      <div className="lang-gate-card">
        <span className="af-bracket af-tl" />
        <span className="af-bracket af-tr" />
        <span className="af-bracket af-bl" />
        <span className="af-bracket af-br" />
        <p className="lang-gate-eyebrow">JJ + ZZ</p>
        <div className="lang-gate-buttons">
          <button type="button" className="lang-gate-button" onClick={() => onChoose('en')}>
            <span className="lang-gate-code">EN</span>
            <span className="lang-gate-name">English</span>
          </button>
          <button type="button" className="lang-gate-button" onClick={() => onChoose('zh')}>
            <span className="lang-gate-code">ZH</span>
            <span className="lang-gate-name">中文</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function Countdown({ t }) {
  const { days, hours, minutes, seconds, done } = useCountdown(TARGET_DATE);

  if (done) {
    return <p className="countdown-live">{t.countdown.live}</p>;
  }

  return (
    <div className="countdown">
      <span className="countdown-caption">{t.countdown.caption}</span>
      <div className="countdown-lcd">
        {[
          [t.countdown.labels.days, days],
          [t.countdown.labels.hrs, hours],
          [t.countdown.labels.min, minutes],
          [t.countdown.labels.sec, seconds],
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
  const { lang, setLang, showGate } = useLanguage();
  const t = content[lang];

  return (
    <div className="page" lang={lang === 'zh' ? 'zh-CN' : 'en'}>
      {showGate && <LanguageGate onChoose={setLang} />}
      <Stars />
      <Hud lang={lang} onToggleLang={setLang} />

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
            <span className="monogram-jj">JJ</span>
            <span className="monogram-amp">+</span>
            <span className="monogram-zz">ZZ</span>
          </div>
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>
            {t.hero.title}
            <span className="hero-kicker">{t.hero.kicker}</span>
          </h1>
          <p className="subtitle">{t.hero.subtitle}</p>
          <p className="hero-blurb">{t.hero.blurb}</p>
          <Countdown t={t} />
        </div>
      </header>

      <main>
        <section className="section">
          <h2><span className="section-tag">{t.sections.map.tag}</span>{t.sections.map.title}</h2>
          <p className="section-lead">{t.sections.map.lead}</p>
          <RouteMap
            walkStops={t.walkStops}
            canaryWharfStops={t.canaryWharfStops}
            ariaLabel={t.mapAriaLabel}
          />
        </section>

        <section className="section">
          <h2><span className="section-tag">{t.sections.walk.tag}</span>{t.sections.walk.title}</h2>
          <p className="section-lead">{t.sections.walk.lead}</p>
          <Timeline stops={t.walkStops} />
        </section>

        <section className="section">
          <h2><span className="section-tag">{t.sections.decisions.tag}</span>{t.sections.decisions.title}</h2>
          <p className="section-lead">{t.sections.decisions.lead}</p>
          <div className="cards-grid">
            {t.decisionPoints.map((point) => (
              <div className="option-card" key={point.trigger}>
                <span className="option-icon" aria-hidden="true">
                  {point.icon}
                </span>
                <h3>{point.trigger}</h3>
                <p>{point.action}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2><span className="section-tag">{t.sections.transport.tag}</span>{t.sections.transport.title}</h2>
          <p className="section-lead">{t.sections.transport.lead}</p>
          <div className="cards-grid">
            {t.transitOptions.map((opt) => (
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
          <h2><span className="section-tag">{t.sections.canary.tag}</span>{t.sections.canary.title}</h2>
          <p className="section-lead">{t.sections.canary.lead}</p>
          <div className="cards-grid">
            {t.canaryWharfStops.map((stop) => (
              <div className="option-card" key={stop.title}>
                <h3>{stop.title}</h3>
                <p>{stop.blurb}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2><span className="section-tag">{t.sections.checklist.tag}</span>{t.sections.checklist.title}</h2>
          <Checklist items={t.checklist} />
        </section>
      </main>

      <footer className="footer">
        <span className="aperture" aria-hidden="true" />
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}

export default App;
