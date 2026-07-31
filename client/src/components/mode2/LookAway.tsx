import { useState } from 'react';
import { getPlayerEmoji } from '../../gameEngine';

interface Props {
  playerName: string;
  playerEmoji?: string;
  playerIndex: number;
  totalPlayers: number;
  onReady: () => void;
  context?: 'role' | 'vote';
}

export default function LookAway({ playerName, playerEmoji, playerIndex, totalPlayers, onReady, context = 'role' }: Props) {
  const [confirmed, setConfirmed] = useState(false);

  const handleReady = () => {
    setConfirmed(true);
    setTimeout(onReady, 300);
  };

  const emoji = playerEmoji || getPlayerEmoji(playerName);

  return (
    <div
      className="screen-fullbleed"
      style={{
        background: 'linear-gradient(145deg, #1a0808 0%, #0a0a16 70%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(192,30,53,0.15) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      {/* Progress dots */}
      <div style={{
        position: 'absolute',
        top: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 6,
      }}>
        {Array.from({ length: totalPlayers }).map((_, i) => (
          <div key={i} style={{
            width: i === playerIndex ? 20 : 6,
            height: 6,
            borderRadius: 3,
            background: i <= playerIndex ? 'var(--gold)' : 'var(--surface-3)',
            transition: 'all 0.3s ease',
          }} />
        ))}
      </div>

      <div className="look-away-icon">👀</div>

      <div
        className="label"
        style={{
          color: 'var(--red-bright)',
          fontSize: 13,
          letterSpacing: '0.25em',
          marginBottom: 12,
        }}
      >
        {context === 'vote' ? 'Private Vote' : 'Eyes Away!'}
      </div>

      <h2 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: 'clamp(30px, 8vw, 44px)',
        fontWeight: 900,
        textAlign: 'center',
        lineHeight: 1.2,
        marginBottom: 8,
      }}>
        Pass to
      </h2>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 20,
      }}>
        <span style={{ fontSize: 32 }}>{emoji}</span>
        <span style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(34px, 9vw, 52px)',
          fontWeight: 900,
          color: 'var(--gold-bright)',
        }}>
          {playerName}
        </span>
      </div>

      <p style={{
        fontSize: 16,
        color: 'var(--text-muted)',
        maxWidth: 260,
        textAlign: 'center',
        marginBottom: 48,
        lineHeight: 1.5,
      }}>
        {context === 'vote'
          ? 'Everyone else turn away — this vote is private.'
          : 'Everyone else look away — this card is private!'}
      </p>

      <button
        className="btn btn-red"
        style={{
          maxWidth: 300,
          fontSize: 18,
          opacity: confirmed ? 0 : 1,
          transition: 'opacity 0.2s',
        }}
        onClick={handleReady}
      >
        I'm {playerName} — I'm Ready
      </button>
    </div>
  );
}
