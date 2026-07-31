import { useState } from 'react';
import type { PlayerAssignment, RoundSetup } from '@shared/types';
import { getPlayerEmoji, getRoleLabel } from '../../gameEngine';

interface Props {
  roundSetup: RoundSetup;
  onDone: (verdicts: Record<string, boolean>) => void;
}

type Step = 'discuss' | 'cards' | 'verdict';

export default function RevealPhase({ roundSetup, onDone }: Props) {
  const [step, setStep] = useState<Step>('discuss');
  const [revealedCount, setRevealedCount] = useState(0);
  const [verdicts, setVerdicts] = useState<Record<string, boolean>>({});

  const { assignments, doubleAgentName } = roundSetup;
  const advisors = assignments.filter(a => a.role === 'advisor');
  const allCardsRevealed = revealedCount >= assignments.length;
  const allVerdictsIn = advisors.every(a => a.playerName in verdicts);

  if (step === 'discuss') {
    return (
      <div className="screen-center animate-fade-in" style={{ gap: 0 }}>
        <div style={{ fontSize: 72, marginBottom: 16 }}>🎭</div>
        <div className="label label-gold" style={{ marginBottom: 8 }}>The Moment of Truth</div>
        <h2 className="title-lg" style={{ textAlign: 'center', marginBottom: 12 }}>
          Discuss first!
        </h2>
        <p className="subtitle" style={{ textAlign: 'center', maxWidth: 320, marginBottom: 40 }}>
          Who do you think was the Double Agent? What sneaky agendas were pushed? Make your accusations now — then tap to reveal!
        </p>
        <button className="btn btn-red" style={{ maxWidth: 300, fontSize: 18 }} onClick={() => setStep('cards')}>
          Reveal the Cards →
        </button>
      </div>
    );
  }

  if (step === 'cards') {
    const revealed = assignments.slice(0, revealedCount);

    return (
      <div className="screen animate-fade-in">
        <div style={{ width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <div className="label label-gold" style={{ marginBottom: 6 }}>Card Reveal</div>
            <h2 className="title-md">Who was who?</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
            {revealed.map((a, i) => (
              <RevealCard
                key={a.playerName}
                assignment={a}
                isDoubleAgent={a.playerName === doubleAgentName}
                delay={i * 100}
              />
            ))}
          </div>

          {!allCardsRevealed ? (
            <button className="btn btn-gold" onClick={() => setRevealedCount(c => c + 1)}>
              {revealedCount === 0
                ? 'Start Reveal →'
                : `Reveal ${assignments[revealedCount].playerName} →`}
            </button>
          ) : (
            <div>
              <div style={{
                background: 'linear-gradient(135deg, rgba(106,26,154,0.2), var(--surface))',
                border: '1.5px solid rgba(160,90,240,0.4)',
                borderRadius: 'var(--radius-lg)',
                padding: '18px 20px',
                marginBottom: 20,
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 32, marginBottom: 6 }}>🕵️</div>
                <div className="label" style={{ color: '#c090ff', marginBottom: 4 }}>The Double Agent Was</div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 26, fontWeight: 900, color: '#c090ff' }}>
                  {doubleAgentName}
                </div>
              </div>
              <button className="btn btn-gold" onClick={() => setStep('verdict')}>
                Judge the Ruling →
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Verdict step — did each advisor's agenda make it into the ruling?
  return (
    <div className="screen animate-fade-in">
      <div style={{ width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={{ fontSize: 48, marginBottom: 10 }}>⚖️</div>
          <div className="label label-gold" style={{ marginBottom: 6 }}>Judge the Ruling</div>
          <h2 className="title-md" style={{ marginBottom: 8 }}>Did the agenda make it in?</h2>
          <p className="subtitle" style={{ fontSize: 14 }}>
            For each advisor, decide together: did their secret agenda end up in the President's ruling?
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
          {advisors.map(a => {
            const verdict = verdicts[a.playerName];
            return (
              <div key={a.playerName} style={{
                background: verdict === true
                  ? 'linear-gradient(135deg, rgba(26,74,155,0.3), var(--surface))'
                  : verdict === false
                  ? 'linear-gradient(135deg, rgba(106,15,30,0.25), var(--surface))'
                  : 'var(--surface)',
                border: `1.5px solid ${verdict === true ? 'rgba(80,130,255,0.5)' : verdict === false ? 'rgba(192,30,53,0.4)' : 'var(--border)'}`,
                borderRadius: 'var(--radius-lg)',
                padding: '16px',
                transition: 'all 0.2s',
              }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
                  <span style={{ fontSize: 20 }}>{a.emoji || getPlayerEmoji(a.playerName)}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 16 }}>{a.playerName}</div>
                    <div className="label" style={{ color: 'var(--text-dim)', fontSize: 10 }}>Secret Advisor</div>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(0,0,0,0.25)',
                  border: '1px dashed rgba(255,255,255,0.15)',
                  borderRadius: 10,
                  padding: '10px 12px',
                  marginBottom: 12,
                }}>
                  <div className="label" style={{ fontSize: 10, color: 'var(--text-dim)', marginBottom: 4 }}>Their Secret Agenda</div>
                  <p style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.5 }}>
                    {typeof a.agenda === 'object' && a.agenda ? a.agenda.goal : a.agenda}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: 8 }}>
                  <button
                    onClick={() => setVerdicts(v => ({ ...v, [a.playerName]: true }))}
                    style={{
                      flex: 1, padding: '10px 8px',
                      borderRadius: 'var(--radius)',
                      fontSize: 14, fontWeight: 700,
                      background: verdict === true ? 'rgba(26,74,155,0.6)' : 'var(--surface-2)',
                      border: `2px solid ${verdict === true ? 'rgba(80,130,255,0.7)' : 'var(--border)'}`,
                      color: verdict === true ? '#80b0ff' : 'var(--text-muted)',
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                  >
                    ✅ Made it in!
                  </button>
                  <button
                    onClick={() => setVerdicts(v => ({ ...v, [a.playerName]: false }))}
                    style={{
                      flex: 1, padding: '10px 8px',
                      borderRadius: 'var(--radius)',
                      fontSize: 14, fontWeight: 700,
                      background: verdict === false ? 'rgba(106,15,30,0.4)' : 'var(--surface-2)',
                      border: `2px solid ${verdict === false ? 'rgba(192,30,53,0.5)' : 'var(--border)'}`,
                      color: verdict === false ? 'var(--red-bright)' : 'var(--text-muted)',
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                  >
                    ❌ Didn't make it
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="btn btn-gold"
          disabled={!allVerdictsIn}
          style={{ opacity: allVerdictsIn ? 1 : 0.4 }}
          onClick={() => onDone(verdicts)}
        >
          See Who Wins →
        </button>
        {!allVerdictsIn && (
          <p className="text-muted text-center" style={{ fontSize: 12, marginTop: 8 }}>
            Judge every advisor's agenda first
          </p>
        )}
      </div>
    </div>
  );
}

function RevealCard({ assignment, isDoubleAgent, delay }: {
  assignment: PlayerAssignment;
  isDoubleAgent: boolean;
  delay: number;
}) {
  const emoji = assignment.emoji || getPlayerEmoji(assignment.playerName);
  const cardClass = assignment.role === 'president' ? 'reveal-card-president'
    : isDoubleAgent ? 'reveal-card-double-agent'
    : 'reveal-card-advisor';
  const roleEmoji = assignment.role === 'president' ? '👑' : isDoubleAgent ? '🕵️' : '🎭';
  const badgeClass = assignment.role === 'president' ? 'badge badge-gold'
    : isDoubleAgent ? 'badge badge-purple'
    : 'badge badge-blue';

  return (
    <div className={`reveal-card ${cardClass} animate-pop`} style={{ animationDelay: `${delay}ms` }}>
      <div className="reveal-avatar" style={{
        background: assignment.role === 'president' ? 'rgba(200,149,26,0.2)'
          : isDoubleAgent ? 'rgba(160,90,240,0.2)'
          : 'rgba(26,74,155,0.25)',
        fontSize: 22,
      }}>
        {emoji}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
          <span style={{ fontWeight: 700, fontSize: 16 }}>{assignment.playerName}</span>
          <span className={badgeClass} style={{ fontSize: 10 }}>
            {roleEmoji} {isDoubleAgent ? 'Double Agent' : getRoleLabel(assignment.role)}
          </span>
        </div>
        {assignment.agenda ? (
          <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>
            Agenda: "{typeof assignment.agenda === 'object' ? assignment.agenda.goal : assignment.agenda}"
          </p>
        ) : isDoubleAgent ? (
          <p style={{ fontSize: 12, color: '#c090ff', fontStyle: 'italic' }}>
            No hidden agenda — gave honest advice
          </p>
        ) : (
          <p style={{ fontSize: 12, color: 'var(--gold)', fontStyle: 'italic' }}>
            The Commander in Chief
          </p>
        )}
      </div>
    </div>
  );
}
