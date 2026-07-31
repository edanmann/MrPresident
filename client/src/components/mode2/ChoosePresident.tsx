import { useState } from 'react';

interface Props {
  playerNames: string[];
  playerEmojis: Record<string, string>;
  roundNumber: number;
  onChoose: (presidentName: string) => void;
}

export default function ChoosePresident({ playerNames, playerEmojis, roundNumber, onChoose }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="screen animate-fade-in">
      <div style={{ width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 52, marginBottom: 12 }}>👑</div>
          <div className="label label-gold" style={{ marginBottom: 6 }}>Round {roundNumber}</div>
          <h2 className="title-lg" style={{ marginBottom: 8 }}>Who is the President?</h2>
          <p className="subtitle">
            Tap a player to make them President this round.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
          {playerNames.map(name => {
            const isSelected = selected === name;
            const emoji = playerEmojis[name] || '🎩';
            return (
              <button
                key={name}
                onClick={() => setSelected(name)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '16px 18px',
                  background: isSelected
                    ? 'linear-gradient(135deg, rgba(200,149,26,0.18), var(--surface))'
                    : 'var(--surface)',
                  border: `2px solid ${isSelected ? 'var(--gold-bright)' : 'var(--border)'}`,
                  borderRadius: 'var(--radius-lg)',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  textAlign: 'left',
                  width: '100%',
                }}
              >
                <span style={{ fontSize: 28, lineHeight: 1 }}>{emoji}</span>
                <span style={{
                  flex: 1,
                  fontSize: 18,
                  fontWeight: 700,
                  color: isSelected ? 'var(--gold-bright)' : 'var(--text)',
                  transition: 'color 0.15s',
                }}>
                  {name}
                </span>
                {isSelected && (
                  <span style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: 'var(--gold)',
                    background: 'rgba(200,149,26,0.15)',
                    border: '1px solid var(--gold)',
                    borderRadius: 999,
                    padding: '3px 10px',
                    letterSpacing: '0.05em',
                  }}>
                    PRESIDENT
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <button
          className="btn btn-gold"
          disabled={!selected}
          style={{ opacity: selected ? 1 : 0.35 }}
          onClick={() => selected && onChoose(selected)}
        >
          Confirm → {selected ? `${selected} is President` : ''}
        </button>
      </div>
    </div>
  );
}
