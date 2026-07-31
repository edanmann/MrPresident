import type { RoundSetup } from '@shared/types';

interface Props {
  roundSetup: RoundSetup;
  onBegin: () => void;
}

export default function CrisisDisplay({ roundSetup, onBegin }: Props) {
  const { crisis, twist, presidentName, roundNumber } = roundSetup;

  return (
    <div className="screen animate-fade-in">
      <div style={{ width: '100%' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div className="label" style={{ color: 'var(--red-bright)', marginBottom: 6, letterSpacing: '0.2em' }}>
            Round {roundNumber} · All Players
          </div>
          <h2 className="title-lg" style={{ marginBottom: 8 }}>
            Incoming Crisis
          </h2>
          <p className="subtitle">
            {presidentName} reads this aloud. Then each player gets their secret role.
          </p>
        </div>

        {/* Crisis card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(106,15,30,0.2), var(--surface))',
          border: '1.5px solid rgba(192,30,53,0.4)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px 20px',
          marginBottom: 20,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: -10, right: -10,
            fontSize: 80,
            opacity: 0.07,
            userSelect: 'none',
          }}>
            🚨
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <span style={{ fontSize: 22 }}>🚨</span>
            <span className="label" style={{ color: 'var(--red-bright)', letterSpacing: '0.15em' }}>
              URGENT CRISIS
            </span>
          </div>
          <p className="crisis-text">{crisis.text}</p>
        </div>

        {/* Twist card — only shown when twists are enabled */}
        {twist && (
          <div className="twist-box" style={{ marginBottom: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <span style={{ fontSize: 18 }}>🌀</span>
              <span className="label label-gold">This Round's Twist</span>
            </div>
            <p className="twist-text">{twist.text}</p>
          </div>
        )}

        {/* How it works */}
        <div style={{
          background: 'var(--surface-2)',
          borderRadius: 'var(--radius)',
          padding: '16px',
          marginBottom: 28,
        }}>
          <p className="label" style={{ marginBottom: 10 }}>How this works</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              ['🗣️', 'Each advisor argues their case (with a hidden agenda)'],
              ['🕵️', 'One advisor is secretly the Double Agent'],
              ['👑', `${presidentName} listens, then makes the final ruling`],
              ['🎯', 'After the ruling, everyone tries to spot who had what agenda'],
            ].map(([icon, text], i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>{icon}</span>
                <span style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="btn btn-gold" onClick={onBegin}>
          Deal Secret Roles →
        </button>
      </div>
    </div>
  );
}
