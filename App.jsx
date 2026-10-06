import React, { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import RouteMap from './RouteMap';
import { content } from './itinerary';

const TARGET_DATE = new Date('2026-08-28T20:00:00+01:00');
// TS122 YYZ → LGW, scheduled 10:45 PM Toronto time (EST) on Fri Nov 6.
const DEPARTURE_DATE = new Date('2026-11-06T22:45:00-05:00');
const STORAGE_KEY = 'thames-night-walk-checklist';
const LANG_KEY = 'thames-night-walk-lang';
const USER_KEY = 'thames-night-walk-user';
const UNLOCK_KEY = 'thames-night-walk-unlocked';
const PASSPHRASE = 'icantwait';

// Paste the Google Apps Script Web App URL here once deployed (see setup notes).
const SUGGESTION_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbyr515Uz8nUERBiYjfMo1AyusvfPTJiWD6lrkoyeDy29tTWcGIFJl5B2BLrEay6wfZa/exec';

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

function useOnboarding() {
  const [lang, setLangState] = useState('en');
  const [user, setUserState] = useState(null);
  // 'loading' until localStorage is read, then 'lang' | 'user' | 'password' | 'done'
  const [step, setStep] = useState('loading');

  useEffect(() => {
    let storedLang = null;
    let storedUser = null;
    let unlocked = null;
    try {
      storedLang = localStorage.getItem(LANG_KEY);
      storedUser = localStorage.getItem(USER_KEY);
      unlocked = localStorage.getItem(UNLOCK_KEY);
    } catch {
      // ignore read failures (private mode, storage disabled, etc.)
    }

    const hasLang = storedLang === 'en' || storedLang === 'zh';
    const hasUser = storedUser === 'JJ' || storedUser === 'ZZ';
    if (hasLang) setLangState(storedLang);
    if (hasUser) setUserState(storedUser);

    if (!hasLang) setStep('lang');
    else if (!hasUser) setStep('user');
    else if (unlocked !== 'yes') setStep('password');
    else setStep('done');
  }, []);

  const persist = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch {
      // ignore write failures
    }
  };

  const setLang = (value) => {
    setLangState(value);
    persist(LANG_KEY, value);
    if (step === 'lang') setStep('user');
  };

  const setUser = (value) => {
    setUserState(value);
    persist(USER_KEY, value);
    setStep('password');
  };

  const unlock = () => {
    persist(UNLOCK_KEY, 'yes');
    setStep('done');
  };

  return { lang, setLang, user, setUser, step, unlock };
}

// Top-down plane silhouette, nose pointing along +x so animateMotion can steer it.
const PLANE_PATH =
  'M12 0 L4 -1.5 L-2 -10 L-5 -10 L-2 -1.5 L-8 -1.2 L-10.5 -4.5 L-12.5 -4.5 L-11 0 L-12.5 4.5 L-10.5 4.5 L-8 1.2 L-2 1.5 L-5 10 L-2 10 L4 1.5 Z';

const FLIGHT_ROUTES = [
  { id: 'route-a', d: 'M-50 430 Q 500 60 1050 330', duration: 46, begin: 0 },
  { id: 'route-b', d: 'M1050 520 Q 480 260 -50 150', duration: 58, begin: -20 },
];

function Sky() {
  const stars = useMemo(
    () =>
      Array.from({ length: 45 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 4,
      })),
    []
  );
  const reducedMotion = useMemo(
    () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false,
    []
  );

  return (
    <div className="sky" aria-hidden="true">
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
      <svg className="flight-routes" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        {FLIGHT_ROUTES.map((route) => (
          <path key={route.id} id={route.id} className="flight-route" d={route.d} />
        ))}
        {!reducedMotion &&
          FLIGHT_ROUTES.map((route) => (
            <path key={route.id} className="sky-plane" d={PLANE_PATH}>
              <animateMotion
                dur={`${route.duration}s`}
                begin={`${route.begin}s`}
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href={`#${route.id}`} />
              </animateMotion>
            </path>
          ))}
      </svg>
    </div>
  );
}

function Hud({ lang, onToggleLang }) {
  const { days, hours, minutes, seconds, done } = useCountdown(DEPARTURE_DATE);
  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div className="hud">
      <span className="hud-mobile-hide" aria-hidden="true">DEPARTURES</span>
      <span className="hud-sep hud-mobile-hide" aria-hidden="true">·</span>
      <span aria-hidden="true">✈ TS122</span>
      <span className="hud-sep" aria-hidden="true">·</span>
      <span aria-hidden="true">YYZ → LGW</span>
      <span className="hud-sep" aria-hidden="true">·</span>
      {done ? (
        <span className="hud-status">DEPARTED</span>
      ) : (
        <>
          <span className="hud-countdown" role="timer">
            <span className="hud-mobile-hide">DEPARTS IN </span>
            {days}D {pad(hours)}:{pad(minutes)}:{pad(seconds)}
          </span>
          <span className="hud-sep hud-mobile-hide" aria-hidden="true">·</span>
          <span className="hud-status hud-mobile-hide" aria-hidden="true">ON TIME</span>
        </>
      )}
      <span className="hud-sep" aria-hidden="true">·</span>
      <LangToggle lang={lang} onToggle={onToggleLang} />
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

function HeartRain() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 16 + 14,
        duration: Math.random() * 2 + 2.5,
        delay: Math.random() * 1.5,
        drift: (Math.random() - 0.5) * 60,
      })),
    []
  );

  return (
    <div className="heart-rain" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="falling-heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            '--drift': `${h.drift}px`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}

function ProposalModal({ t, open, accepted, onAccept, onClose }) {
  const [dodge, setDodge] = useState({ x: 0, y: 0 });

  if (!open) return null;

  const runAway = () => {
    setDodge({
      x: (Math.random() - 0.5) * 160,
      y: (Math.random() - 0.5) * 60,
    });
  };

  return (
    <div className="proposal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      {accepted && <HeartRain />}
      <div className="proposal-card" onClick={(e) => e.stopPropagation()}>
        {!accepted ? (
          <>
            <p className="proposal-question">{t.proposal.question}</p>
            <div className="proposal-buttons">
              <button type="button" className="proposal-yes" onClick={onAccept}>
                {t.proposal.yes}
              </button>
              <button
                type="button"
                className="proposal-think"
                style={{ transform: `translate(${dodge.x}px, ${dodge.y}px)` }}
                tabIndex={-1}
                aria-disabled="true"
                onMouseEnter={runAway}
                onTouchStart={(e) => {
                  e.preventDefault();
                  runAway();
                }}
                onClick={(e) => e.preventDefault()}
              >
                {t.proposal.think}
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="proposal-question">{t.proposal.accepted}</p>
            <button type="button" className="proposal-yes" onClick={onClose}>
              ♡
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function PortraitIcon({ variant }) {
  // Silhouette bust: head + shoulders, with longer hair on the "she" variant.
  return (
    <svg className="portrait-icon" viewBox="0 0 64 64" aria-hidden="true">
      {variant === 'she' && (
        <path
          d="M32 8c-11 0-17 7-17 17 0 7 1 11 3 15l-3 9h34l-3-9c2-4 3-8 3-15 0-10-6-17-17-17z"
          className="portrait-hair"
        />
      )}
      <circle cx="32" cy="23" r="11" className="portrait-head" />
      <path d="M32 37c-11 0-19 7-19 16v3h38v-3c0-9-8-16-19-16z" className="portrait-body" />
    </svg>
  );
}

function UserGate({ t, onChoose }) {
  return (
    <div className="lang-gate-overlay" role="dialog" aria-modal="true" aria-label={t.userGate.title}>
      <div className="lang-gate-card">
        <span className="af-bracket af-tl" />
        <span className="af-bracket af-tr" />
        <span className="af-bracket af-bl" />
        <span className="af-bracket af-br" />
        <p className="lang-gate-eyebrow">{t.userGate.title}</p>
        <div className="lang-gate-buttons">
          <button type="button" className="lang-gate-button" onClick={() => onChoose('JJ')}>
            <PortraitIcon variant="he" />
            <span className="lang-gate-name">JJ</span>
          </button>
          <button type="button" className="lang-gate-button" onClick={() => onChoose('ZZ')}>
            <PortraitIcon variant="she" />
            <span className="lang-gate-name">ZZ</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function PasswordGate({ t, user, onUnlock }) {
  const [value, setValue] = useState('');
  const [wrong, setWrong] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().toLowerCase() === PASSPHRASE) {
      onUnlock();
    } else {
      setWrong(true);
      setValue('');
    }
  };

  return (
    <div className="lang-gate-overlay" role="dialog" aria-modal="true" aria-label={t.passwordGate.title}>
      <div className="lang-gate-card">
        <span className="af-bracket af-tl" />
        <span className="af-bracket af-tr" />
        <span className="af-bracket af-bl" />
        <span className="af-bracket af-br" />
        <p className="lang-gate-eyebrow">
          {t.passwordGate.greeting} {user}
        </p>
        <form className="password-form" onSubmit={handleSubmit}>
          <input
            type="password"
            className="password-input"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setWrong(false);
            }}
            placeholder={t.passwordGate.placeholder}
            aria-label={t.passwordGate.placeholder}
            autoFocus
          />
          <button type="submit" className="password-submit">
            {t.passwordGate.submit}
          </button>
          {wrong && <p className="password-error">{t.passwordGate.error}</p>}
        </form>
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
            {stop.image && (
              <img className="timeline-photo" src={stop.image} alt={stop.title} loading="lazy" />
            )}
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

function SuggestionForm({ t }) {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setStatus('sending');
    try {
      await fetch(SUGGESTION_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams({ type: 'idea', message }),
      });
      setStatus('sent');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return <p className="suggest-success">{t.suggestForm.success}</p>;
  }

  return (
    <form className="suggest-form" onSubmit={handleSubmit}>
      <textarea
        className="suggest-textarea"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={t.suggestForm.messagePlaceholder}
        rows={3}
        required
      />
      <button type="submit" className="suggest-submit" disabled={status === 'sending'}>
        {status === 'sending' ? t.suggestForm.sending : t.suggestForm.submit}
      </button>
      {status === 'error' && <p className="suggest-error">{t.suggestForm.error}</p>}
    </form>
  );
}

function App() {
  const { lang, setLang, user, setUser, step, unlock } = useOnboarding();
  const t = content[lang];
  const [proposalOpen, setProposalOpen] = useState(false);
  const [proposalAccepted, setProposalAccepted] = useState(false);
  const [completedOpen, setCompletedOpen] = useState(false);
  const apertureClicks = useRef([]);

  const closeProposal = () => {
    setProposalOpen(false);
    setProposalAccepted(false);
  };

  const handleApertureClick = () => {
    const now = Date.now();
    const recent = apertureClicks.current.filter((ts) => now - ts <= 5000);
    recent.push(now);
    apertureClicks.current = recent;
    if (recent.length >= 5) {
      apertureClicks.current = [];
      setProposalOpen(true);
    }
  };

  return (
    <div className="page" lang={lang === 'zh' ? 'zh-CN' : 'en'}>
      {step === 'lang' && <LanguageGate onChoose={setLang} />}
      {step === 'user' && <UserGate t={t} onChoose={setUser} />}
      {step === 'password' && <PasswordGate t={t} user={user} onUnlock={unlock} />}
      <ProposalModal
        t={t}
        open={proposalOpen}
        accepted={proposalAccepted}
        onAccept={() => setProposalAccepted(true)}
        onClose={closeProposal}
      />
      <Sky />
      <Hud lang={lang} onToggleLang={setLang} />

      <section className="section next-date-section">
        <div className="boarding-pass">
          <div className="boarding-pass-main">
            <span className="section-tag">{t.nextTrip.tag}</span>
            <h2>{t.nextTrip.title}</h2>
            <div className="boarding-pass-route" aria-hidden="true">
              <span className="boarding-pass-code">JJ</span>
              <span className="boarding-pass-track">
                <span className="boarding-pass-plane">✈</span>
              </span>
              <span className="boarding-pass-code">ZZ</span>
            </div>
            <p className="boarding-pass-dates">{t.nextTrip.subtitle}</p>
          </div>
          <div className="boarding-pass-stub">
            <dl className="boarding-pass-fields">
              {[
                ['FLIGHT', 'TS122'],
                ['TO', t.nextTrip.pass.dest],
                ['ARRIVES', t.nextTrip.pass.arrives],
                ['SEAT', t.nextTrip.pass.seat],
              ].map(([label, value]) => (
                <div className="boarding-pass-field" key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <span className="boarding-pass-barcode" aria-hidden="true" />
          </div>
        </div>
        <p className="section-lead">{t.nextTrip.blurb}</p>

        <div className="next-trip-day">
          <h3 className="next-trip-day-title">
            <span className="section-tag">{t.nextTrip.day1.tag}</span>
            {t.nextTrip.day1.title}
          </h3>
          <p className="section-lead">{t.nextTrip.day1.lead}</p>
          <div className="cards-grid">
            {t.day1Plan.map((step) => (
              <div className="option-card" key={step.title}>
                {step.image && (
                  <img
                    className="option-photo option-photo-square"
                    style={{ objectPosition: step.imagePosition }}
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                  />
                )}
                <span className="option-icon" aria-hidden="true">
                  {step.icon}
                </span>
                <h3>{step.time} — {step.title}</h3>
                <p>{step.blurb}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="next-trip-day">
          <h3 className="next-trip-day-title">
            <span className="section-tag">{t.nextTrip.day2.tag}</span>
            {t.nextTrip.day2.title}
          </h3>
          <p className="section-lead">{t.nextTrip.day2.lead}</p>
          {t.day2Options.map((option) => (
            <div className="day2-option" key={option.key}>
              <h4 className="day2-option-title">{option.title}</h4>
              <p className="day2-option-subtitle">{option.subtitle}</p>
              <p className="section-lead">{option.blurb}</p>
              {option.images && (
                <div className="day2-option-photos">
                  {option.images.map((photo) => (
                    <img
                      className="day2-option-photo"
                      style={{ objectPosition: photo.position }}
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      key={photo.alt}
                    />
                  ))}
                </div>
              )}
              {option.image && (
                <img
                  className="day2-option-photo"
                  style={{ objectPosition: option.imagePosition }}
                  src={option.image}
                  alt={option.title}
                  loading="lazy"
                />
              )}
              <div className="cards-grid">
                {option.plan.map((step) => (
                  <div className="option-card" key={step.title}>
                    <span className="option-icon" aria-hidden="true">
                      {step.icon}
                    </span>
                    <h3>{step.time} — {step.title}</h3>
                    <p>{step.blurb}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="next-trip-day">
          <h3 className="next-trip-day-title">
            <span className="section-tag">{t.wednesdayDinner.tag}</span>
            {t.wednesdayDinner.title}
          </h3>
          <p className="section-lead">{t.wednesdayDinner.lead}</p>
          <div className="cards-grid">
            <div className="option-card">
              <img
                className="option-photo option-photo-wide"
                src={t.wednesdayDinner.step.image}
                alt={t.wednesdayDinner.step.title}
                loading="lazy"
              />
              <span className="option-icon" aria-hidden="true">
                {t.wednesdayDinner.step.icon}
              </span>
              <h3>{t.wednesdayDinner.step.time} — {t.wednesdayDinner.step.title}</h3>
              <p>{t.wednesdayDinner.step.blurb}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section next-date-section">
        <h2><span className="section-tag">{t.sections.suggest.tag}</span>{t.sections.suggest.title}</h2>
        <p className="section-lead">{t.sections.suggest.lead}</p>
        <SuggestionForm t={t} />
      </section>

      <button
        type="button"
        className="completed-ribbon"
        onClick={() => setCompletedOpen((v) => !v)}
        aria-expanded={completedOpen}
      >
        {t.completedBadge}
        <span className="completed-ribbon-chevron" aria-hidden="true">
          {completedOpen ? '▾' : '▸'}
        </span>
      </button>

      {completedOpen && (
      <div className="completed-trip">
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
          <h2><span className="section-tag">{t.sections.preDate.tag}</span>{t.sections.preDate.title}</h2>
          <p className="section-lead">{t.sections.preDate.lead}</p>
          <div className="cards-grid">
            {t.preDatePlan.map((step) => (
              <div className="option-card" key={step.title}>
                <span className="option-icon" aria-hidden="true">
                  {step.icon}
                </span>
                <h3>{step.time} — {step.title}</h3>
                <p>{step.blurb}</p>
              </div>
            ))}
          </div>
        </section>

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
          <div className="cards-grid-triad">
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
          <div className="cards-grid cards-grid-row">
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
                {stop.image && (
                  <img className="option-photo" src={stop.image} alt={stop.title} loading="lazy" />
                )}
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
      </div>
      )}

      <footer className="footer">
        <button
          type="button"
          className="aperture-btn"
          aria-label="Aperture"
          onClick={handleApertureClick}
        >
          <span className="aperture" aria-hidden="true" />
        </button>
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}

export default App;
