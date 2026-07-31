import { useState } from 'react';
import type { PlayerAssignment, RoundSetup } from '@shared/types';

interface Props {
  assignment: PlayerAssignment;
  roundSetup: RoundSetup;
  onDone: () => void;
}

export default function SecretCard({ assignment, roundSetup, onDone }: Props) {
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);

  const handleTap = () => { if (!revealed) setRevealed(true); };

  const handleDone = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDone(true);
    setTimeout(onDone, 350);
  };

  const { role, playerName, agenda } = assignment;
  const { crisis, twist } = roundSetup;

  const cardClass = role === 'president'
    ? 'card-front-president'
    : role === 'double-agent'
    ? 'card-front-double-agent'
    : 'card-front-advisor';

  const roleEmoji = role === 'president' ? '👑' : role === 'double-agent' ? '🕵️' : '🎭';
  const roleTitle = role === 'president' ? 'THE PRESIDENT'
    : role === 'double-agent' ? 'DOUBLE AGENT'
    : 'SECRET ADVISOR';

  return (
    <div
      className="screen-center"
      style={{ background: 'linear-gradient(160deg, #08081a 0%, #0a0a16 100%)', gap: 0 }}
    >
      <div className="label" style={{ marginBottom: 20, color: 'var(--text-muted)' }}>
        {playerName}'s Card
      </div>

      <div
        className="card-3d-wrapper"
        onClick={handleTap}
        style={{ cursor: revealed ? 'default' : 'pointer' }}
      >
        <div className={`card-3d-inner ${revealed ? 'flipped' : ''}`}>
          {/* Card Back */}
          <div className="card-face card-back">
            <div className="card-back-pattern" />
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🏛️</div>
              <div style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 22, fontWeight: 900,
                color: 'var(--gold-bright)', letterSpacing: '0.08em', marginBottom: 8,
              }}>
                MR. PRESIDENT
              </div>
              <div className="stamp stamp-red" style={{ fontSize: 11 }}>CLASSIFIED</div>
              <p style={{ fontSize: 13, color: 'var(--text-dim)', marginTop: 32, letterSpacing: '0.05em' }}>
                TAP TO REVEAL
              </p>
            </div>
          </div>

          {/* Card Front */}
          <div className={`card-face card-front ${cardClass}`}>
            <div style={{ width: '100%', marginBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 28 }}>{roleEmoji}</span>
                <div>
                  <div className="label" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 1 }}>Your Role</div>
                  <div className="card-role-title" style={{
                    color: role === 'president' ? 'var(--gold-bright)'
                      : role === 'double-agent' ? '#c090ff'
                      : '#80b0ff',
                  }}>
                    {roleTitle}
                  </div>
                </div>
              </div>
              <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', margin: '8px 0' }} />
            </div>

            {/* President */}
            {role === 'president' && (
              <div style={{ width: '100%' }}>
                <div className="label" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>The Crisis</div>
                <div className="card-agenda-box" style={{ marginBottom: 12 }}>
                  <p className="card-agenda-text" style={{ fontSize: 13 }}>{crisis.text}</p>
                </div>
                {twist && (
                  <>
                    <div className="label" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>Today's Twist</div>
                    <div className="card-agenda-box" style={{ background: 'rgba(200,149,26,0.12)', borderColor: 'rgba(200,149,26,0.3)' }}>
                      <p className="card-agenda-text" style={{ fontSize: 13, color: 'var(--gold-bright)' }}>{twist.text}</p>
                    </div>
                  </>
                )}
                <p className="card-mission-text" style={{ marginTop: 10, textAlign: 'center' }}>
                  Read the crisis aloud. Listen to your advisors. Rule wisely.
                </p>
              </div>
            )}

            {/* Advisor */}
            {role === 'advisor' && agenda && (
              <div style={{ width: '100%' }}>
                <div className="label" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>Why You're Here</div>
                <div className="card-agenda-box" style={{ background: 'rgba(106,15,30,0.25)', borderColor: 'rgba(192,30,53,0.3)', marginBottom: 10 }}>
                  <p className="card-agenda-text" style={{ fontSize: 12, fontStyle: 'italic', color: 'rgba(255,200,200,0.85)' }}>
                    {agenda.backstory}
                  </p>
                </div>
                <div className="label" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>Your Secret Agenda</div>
                <div className="card-agenda-box">
                  <p className="card-agenda-text">{agenda.goal}</p>
                </div>
                <p className="card-mission-text" style={{ marginTop: 10 }}>
                  Slip this into your advice — but keep it subtle. If you're too obvious, you'll get caught.
                </p>
              </div>
            )}

            {/* Double Agent */}
            {role === 'double-agent' && (
              <div style={{ width: '100%' }}>
                <div className="card-agenda-box" style={{ background: 'rgba(160,90,240,0.15)', borderColor: 'rgba(160,90,240,0.4)', marginBottom: 12 }}>
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#c090ff', marginBottom: 4 }}>
                    You are loyal to the President.
                  </p>
                  <p className="card-agenda-text" style={{ fontSize: 13 }}>
                    You have no hidden agenda. Give the President your honest best advice.
                  </p>
                </div>
                <div className="label" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>Your Mission</div>
                <div className="card-agenda-box">
                  <p className="card-agenda-text" style={{ fontSize: 13 }}>
                    Listen carefully to the other advisors. Figure out what each one is secretly trying to push — then block them.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 24, minHeight: 60, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {!revealed ? (
          <p style={{
            fontSize: 14, color: 'var(--text-dim)',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            animation: 'timerPulse 2s ease-in-out infinite',
          }}>
            Tap card to reveal
          </p>
        ) : (
          <button
            className="btn btn-gold"
            style={{ maxWidth: 280, opacity: done ? 0 : 1, transition: 'opacity 0.25s' }}
            onClick={handleDone}
          >
            Done — Pass It Back
          </button>
        )}
      </div>
    </div>
  );
}
