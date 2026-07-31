import { useState, useEffect, useCallback } from 'react';
import type { RoundSetup } from '@shared/types';

interface Props {
  roundSetup: RoundSetup;
  onDone: () => void;
}

const DEFAULT_SECONDS = 4 * 60; // 4 minutes

export default function Deliberation({ roundSetup, onDone }: Props) {
  const [secondsLeft, setSecondsLeft] = useState(DEFAULT_SECONDS);
  const [running, setRunning] = useState(true);
  const [showCrisis, setShowCrisis] = useState(false);

  const urgent = secondsLeft <= 30 && secondsLeft > 0;
  const expired = secondsLeft <= 0;

  useEffect(() => {
    if (!running || expired) return;
    const id = setInterval(() => setSecondsLeft(s => s - 1), 1000);
    return () => clearInterval(id);
  }, [running, expired]);

  const addTime = useCallback((seconds: number) => {
    setSecondsLeft(s => Math.max(0, s + seconds));
  }, []);

  const mm = String(Math.floor(Math.max(0, secondsLeft) / 60)).padStart(2, '0');
  const ss = String(Math.max(0, secondsLeft) % 60).padStart(2, '0');

  return (
    <div className="screen animate-fade-in">
      <div style={{ width: '100%', textAlign: 'center' }}>
        <div className="label label-gold" style={{ marginBottom: 6 }}>
          Deliberation Phase
        </div>
        <h2 className="title-md" style={{ marginBottom: 4 }}>Advisors, make your case!</h2>
        <p className="subtitle" style={{ marginBottom: 28 }}>
          {roundSetup.twist ? 'Each advisor argues — the twist is in effect.' : 'Each advisor argues their case.'}
        </p>

        {/* Timer */}
        <div style={{
          position: 'relative',
          margin: '0 auto 24px',
          width: 200, height: 200,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg
            style={{ position: 'absolute', inset: 0, transform: 'rotate(-90deg)' }}
            viewBox="0 0 200 200"
            width="200" height="200"
          >
            <circle cx="100" cy="100" r="88" fill="none" stroke="var(--surface-2)" strokeWidth="8" />
            <circle
              cx="100" cy="100" r="88" fill="none"
              stroke={urgent ? 'var(--red-bright)' : 'var(--gold)'}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 88}
              strokeDashoffset={2 * Math.PI * 88 * (1 - secondsLeft / DEFAULT_SECONDS)}
              style={{ transition: 'stroke-dashoffset 1s linear, stroke 0.3s' }}
            />
          </svg>

          <div style={{ textAlign: 'center' }}>
            <div
              className={`timer-display ${urgent ? 'timer-urgent' : ''}`}
              style={{ color: urgent ? 'var(--red-bright)' : 'var(--text)' }}
            >
              {mm}:{ss}
            </div>
            {expired && (
              <div style={{ fontSize: 13, color: 'var(--red-bright)', fontWeight: 700, letterSpacing: '0.1em' }}>
                TIME'S UP!
              </div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 24 }}>
          <button
            onClick={() => setRunning(r => !r)}
            style={{
              padding: '10px 20px',
              background: 'var(--surface-2)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              color: 'var(--text)',
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            {running && !expired ? '⏸ Pause' : '▶ Resume'}
          </button>
          <button
            onClick={() => addTime(60)}
            style={{
              padding: '10px 16px',
              background: 'var(--surface-2)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              color: 'var(--text-muted)',
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            +1 min
          </button>
          <button
            onClick={() => addTime(-60)}
            style={{
              padding: '10px 16px',
              background: 'var(--surface-2)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              color: 'var(--text-muted)',
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            −1 min
          </button>
        </div>

        {/* Twist reminder — only when twists enabled */}
        {roundSetup.twist && (
          <div className="twist-box" style={{ marginBottom: 16, textAlign: 'left' }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
              <span style={{ fontSize: 16 }}>🌀</span>
              <span className="label label-gold">Active Twist</span>
            </div>
            <p className="twist-text">{roundSetup.twist.text}</p>
          </div>
        )}

        {/* Crisis toggle */}
        <button
          className="btn-ghost"
          style={{ fontSize: 13, padding: '8px 0', color: 'var(--text-dim)' }}
          onClick={() => setShowCrisis(s => !s)}
        >
          {showCrisis ? '▲ Hide crisis' : '▼ Show crisis reminder'}
        </button>

        {showCrisis && (
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: 16,
            marginTop: 10,
            textAlign: 'left',
          }}>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {roundSetup.crisis.text}
            </p>
          </div>
        )}

        <button
          className="btn btn-gold"
          style={{ marginTop: 28 }}
          onClick={onDone}
        >
          End Deliberation →
        </button>
      </div>
    </div>
  );
}
