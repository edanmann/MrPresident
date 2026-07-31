import type { RoundSetup } from '@shared/types';

interface Props {
  roundSetup: RoundSetup;
  onDone: () => void;
}

export default function RulingPrompt({ roundSetup, onDone }: Props) {
  const { presidentName, crisis } = roundSetup;

  return (
    <div className="screen-center animate-fade-in" style={{ gap: 0 }}>
      <div style={{ fontSize: 72, marginBottom: 16 }}>👑</div>

      <div className="label" style={{ color: 'var(--gold)', marginBottom: 8, letterSpacing: '0.2em' }}>
        The Ruling
      </div>

      <h2 className="title-lg" style={{ textAlign: 'center', marginBottom: 8 }}>
        {presidentName},<br />
        <span style={{ color: 'var(--gold-bright)' }}>it's your call.</span>
      </h2>

      <p className="subtitle" style={{ textAlign: 'center', maxWidth: 300, marginBottom: 32 }}>
        You've heard the advisors. Now make your ruling on the crisis and announce it to the group.
      </p>

      {/* Crisis reminder */}
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '16px',
        marginBottom: 32,
        maxWidth: 360,
        width: '100%',
      }}>
        <div className="label" style={{ marginBottom: 8, color: 'var(--text-muted)' }}>The Crisis</div>
        <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6 }}>{crisis.text}</p>
      </div>

      <div style={{ maxWidth: 300, width: '100%' }}>
        <button className="btn btn-gold" onClick={onDone}>
          Ruling Made — Reveal All →
        </button>
        <p className="text-muted text-center" style={{ fontSize: 12, marginTop: 10 }}>
          Tap after the President announces their ruling aloud
        </p>
      </div>
    </div>
  );
}
