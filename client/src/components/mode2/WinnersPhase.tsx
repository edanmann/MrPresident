import type { RoundSetup } from '@shared/types';
import { getPlayerEmoji } from '../../gameEngine';

function playerEmoji(assignments: RoundSetup['assignments'], name: string): string {
  return assignments.find(a => a.playerName === name)?.emoji || getPlayerEmoji(name);
}

interface Props {
  roundSetup: RoundSetup;
  verdicts: Record<string, boolean>;
  scores: Record<string, number>;
  roundNumber: number;
  onPlayAgain: (newScores: Record<string, number>) => void;
  onNewPlayers: () => void;
}

export default function WinnersPhase({
  roundSetup, verdicts, scores, roundNumber, onPlayAgain, onNewPlayers,
}: Props) {
  const { assignments, presidentName, doubleAgentName } = roundSetup;
  const advisors = assignments.filter(a => a.role === 'advisor');

  const agendaWinners = advisors.filter(a => verdicts[a.playerName] === true);
  const presidentAndDAWin = agendaWinners.length === 0;

  // Calculate new scores: +2 for round winners
  const newScores = { ...scores };
  if (presidentAndDAWin) {
    newScores[presidentName] = (newScores[presidentName] ?? 0) + 2;
    newScores[doubleAgentName] = (newScores[doubleAgentName] ?? 0) + 2;
  } else {
    for (const w of agendaWinners) {
      newScores[w.playerName] = (newScores[w.playerName] ?? 0) + 2;
    }
  }

  const allPlayers = assignments.map(a => a.playerName);
  const sorted = [...allPlayers].sort((a, b) => (newScores[b] ?? 0) - (newScores[a] ?? 0));

  return (
    <div className="screen animate-fade-in">
      <div style={{ width: '100%' }}>

        {/* Winner banner */}
        {presidentAndDAWin ? (
          <div style={{
            textAlign: 'center',
            padding: '28px 20px',
            background: 'linear-gradient(135deg, rgba(200,149,26,0.15), var(--surface))',
            border: '2px solid var(--border-bright)',
            borderRadius: 'var(--radius-lg)',
            marginBottom: 20,
          }}>
            <div style={{ fontSize: 56, marginBottom: 10 }}>🏛️🕵️</div>
            <div className="label label-gold" style={{ marginBottom: 6 }}>Round {roundNumber} Winner</div>
            <h2 className="title-md" style={{ marginBottom: 10, color: 'var(--gold-bright)' }}>
              The President & Double Agent win!
            </h2>
            <p className="subtitle" style={{ fontSize: 14 }}>
              The ruling was clean — no hidden agendas made it through!
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 16, flexWrap: 'wrap' }}>
              {[presidentName, doubleAgentName].map(name => (
                <div key={name} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: 'rgba(200,149,26,0.15)',
                  border: '1px solid var(--border-bright)',
                  borderRadius: 999,
                  padding: '6px 14px',
                }}>
                  <span style={{ fontSize: 18 }}>{playerEmoji(assignments, name)}</span>
                  <span style={{ fontWeight: 700, fontSize: 15 }}>{name}</span>
                  <span style={{ color: 'var(--gold-bright)', fontSize: 13 }}>+2</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '28px 20px',
            background: 'linear-gradient(135deg, rgba(26,74,155,0.2), var(--surface))',
            border: '2px solid rgba(80,130,255,0.4)',
            borderRadius: 'var(--radius-lg)',
            marginBottom: 20,
          }}>
            <div style={{ fontSize: 56, marginBottom: 10 }}>🎭</div>
            <div className="label" style={{ color: '#80b0ff', marginBottom: 6 }}>Round {roundNumber} Winner{agendaWinners.length > 1 ? 's' : ''}</div>
            <h2 className="title-md" style={{ marginBottom: 10, color: '#80b0ff' }}>
              The Advisor{agendaWinners.length > 1 ? 's' : ''} win!
            </h2>
            <p className="subtitle" style={{ fontSize: 14 }}>
              {agendaWinners.length === 1
                ? 'One sneaky agenda made it into the ruling!'
                : `${agendaWinners.length} sneaky agendas made it into the ruling!`}
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 16, flexWrap: 'wrap' }}>
              {agendaWinners.map(a => (
                <div key={a.playerName} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: 'rgba(26,74,155,0.25)',
                  border: '1px solid rgba(80,130,255,0.4)',
                  borderRadius: 999,
                  padding: '6px 14px',
                }}>
                  <span style={{ fontSize: 18 }}>{a.emoji || getPlayerEmoji(a.playerName)}</span>
                  <span style={{ fontWeight: 700, fontSize: 15 }}>{a.playerName}</span>
                  <span style={{ color: '#80b0ff', fontSize: 13 }}>+2</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* What happened — each advisor's verdict */}
        <div className="label" style={{ marginBottom: 10 }}>What happened</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
          {advisors.map(a => {
            const won = verdicts[a.playerName];
            return (
              <div key={a.playerName} style={{
                display: 'flex', gap: 12, alignItems: 'flex-start',
                padding: '12px 14px',
                background: 'var(--surface)',
                border: `1px solid ${won ? 'rgba(80,130,255,0.3)' : 'var(--border)'}`,
                borderRadius: 'var(--radius)',
              }}>
                <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>{won ? '✅' : '❌'}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, marginBottom: 2 }}>{a.playerName}</div>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    "{typeof a.agenda === 'object' && a.agenda ? a.agenda.goal : a.agenda}"
                  </p>
                  <div style={{ fontSize: 11, marginTop: 4, color: won ? '#80b0ff' : 'var(--text-dim)' }}>
                    {won ? 'Agenda made it into the ruling!' : 'Agenda was blocked or not noticed'}
                  </div>
                </div>
              </div>
            );
          })}
          <div style={{
            display: 'flex', gap: 12, alignItems: 'center',
            padding: '12px 14px',
            background: 'var(--surface)',
            border: '1px solid rgba(160,90,240,0.3)',
            borderRadius: 'var(--radius)',
          }}>
            <span style={{ fontSize: 18 }}>🕵️</span>
            <div>
              <span style={{ fontWeight: 600 }}>{doubleAgentName}</span>
              <span style={{ fontSize: 12, color: '#c090ff', marginLeft: 8 }}>Double Agent</span>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>Gave honest advice, no hidden agenda</p>
            </div>
          </div>
        </div>

        {/* Scoreboard */}
        <div className="label" style={{ marginBottom: 10 }}>Total Scores</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 28 }}>
          {sorted.map((name, i) => {
            const total = newScores[name] ?? 0;
            const prev = scores[name] ?? 0;
            const gained = total - prev;
            const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : null;
            return (
              <div key={name} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 14px',
                background: i === 0 ? 'linear-gradient(135deg, rgba(200,149,26,0.12), var(--surface))' : 'var(--surface)',
                border: `1px solid ${i === 0 ? 'var(--border-bright)' : 'var(--border)'}`,
                borderRadius: 'var(--radius)',
              }}>
                <div style={{ width: 24, textAlign: 'center' }}>
                  {medal ?? <span style={{ fontSize: 13, color: 'var(--text-dim)' }}>{i + 1}</span>}
                </div>
                <span style={{ fontSize: 16 }}>{getPlayerEmoji(name)}</span>
                <span style={{ flex: 1, fontWeight: 600 }}>{name}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  {gained > 0 && (
                    <span style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 700 }}>+{gained}</span>
                  )}
                  <span style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 24, fontWeight: 900,
                    color: i === 0 ? 'var(--gold-bright)' : 'var(--text)',
                  }}>
                    {total}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <button className="btn btn-gold" onClick={() => onPlayAgain(newScores)}>
          ▶ Play Next Round
        </button>
        <button className="btn btn-outline" style={{ marginTop: 12 }} onClick={onNewPlayers}>
          Change Players
        </button>
      </div>
    </div>
  );
}
