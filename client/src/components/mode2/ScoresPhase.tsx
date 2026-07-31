import { useState } from 'react';
import type { RoundSetup } from '@shared/types';
import { getPlayerEmoji } from '../../gameEngine';

interface Props {
  playerNames: string[];
  roundSetup: RoundSetup;
  scores: Record<string, number>;
  roundNumber: number;
  onPlayAgain: (updatedScores: Record<string, number>) => void;
  onEndGame: (updatedScores: Record<string, number>) => void;
}

export default function ScoresPhase({ playerNames, roundSetup, scores, roundNumber, onPlayAgain, onEndGame }: Props) {
  const [roundPoints, setRoundPoints] = useState<Record<string, number>>(
    Object.fromEntries(playerNames.map(n => [n, 0]))
  );

  const addPoint = (name: string) => {
    setRoundPoints(prev => ({ ...prev, [name]: prev[name] + 1 }));
  };

  const removePoint = (name: string) => {
    setRoundPoints(prev => ({ ...prev, [name]: Math.max(0, prev[name] - 1) }));
  };

  const totalScores = Object.fromEntries(
    playerNames.map(n => [n, (scores[n] ?? 0) + (roundPoints[n] ?? 0)])
  );

  const sorted = [...playerNames].sort((a, b) => totalScores[b] - totalScores[a]);
  const { assignments, doubleAgentName, presidentName } = roundSetup;

  return (
    <div className="screen animate-fade-in">
      <div style={{ width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>🏆</div>
          <div className="label label-gold" style={{ marginBottom: 4 }}>Round {roundNumber} Complete</div>
          <h2 className="title-md" style={{ marginBottom: 6 }}>Score this round</h2>
          <p className="subtitle" style={{ fontSize: 14 }}>
            Did the agenda make it into the ruling? Give +1 to players who achieved their goal.
          </p>
        </div>

        {/* Scoring section */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          marginBottom: 20,
        }}>
          {assignments.map((a) => {
            const pts = roundPoints[a.playerName] ?? 0;
            const isDoubleAgent = a.playerName === doubleAgentName;
            const isPresident = a.playerName === presidentName;

            const rawGoal = typeof a.agenda === 'object' && a.agenda ? a.agenda.goal : (a.agenda ?? '');
            const goal = isPresident
              ? 'Ruled wisely without being deceived'
              : isDoubleAgent
              ? 'Protected the President / exposed agendas'
              : rawGoal;

            const roleIcon = isPresident ? '👑' : isDoubleAgent ? '🕵️' : '🎭';

            return (
              <div key={a.playerName} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '14px 16px',
                borderBottom: '1px solid var(--border)',
              }}>
                <div style={{ fontSize: 20, flexShrink: 0 }}>{getPlayerEmoji(a.playerName)}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 2 }}>
                    <span style={{ fontWeight: 600, fontSize: 15 }}>{a.playerName}</span>
                    <span style={{ fontSize: 13 }}>{roleIcon}</span>
                  </div>
                  <p style={{ fontSize: 12, color: 'var(--text-dim)', lineHeight: 1.4 }}>
                    {goal.length > 60 ? goal.slice(0, 57) + '…' : goal}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                  <button
                    onClick={() => removePoint(a.playerName)}
                    disabled={pts === 0}
                    style={{
                      width: 30, height: 30,
                      borderRadius: '50%',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border)',
                      color: pts === 0 ? 'var(--text-dim)' : 'var(--text)',
                      fontSize: 18, lineHeight: 1,
                      cursor: pts === 0 ? 'default' : 'pointer',
                    }}
                  >
                    −
                  </button>
                  <span style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 22, fontWeight: 900,
                    minWidth: 20, textAlign: 'center',
                    color: pts > 0 ? 'var(--gold-bright)' : 'var(--text-dim)',
                  }}>
                    {pts}
                  </span>
                  <button
                    onClick={() => addPoint(a.playerName)}
                    style={{
                      width: 30, height: 30,
                      borderRadius: '50%',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border)',
                      color: 'var(--gold)',
                      fontSize: 18, lineHeight: 1,
                      cursor: 'pointer',
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cumulative leaderboard */}
        <div className="label" style={{ marginBottom: 10 }}>Total Scores</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 28 }}>
          {sorted.map((name, i) => {
            const total = totalScores[name];
            const gained = roundPoints[name] ?? 0;
            const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : null;
            return (
              <div key={name} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
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
                    <span style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 700 }}>
                      +{gained}
                    </span>
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

        <button className="btn btn-gold" onClick={() => onPlayAgain(totalScores)}>
          ▶ Play Next Round
        </button>
        <button className="btn btn-ghost" onClick={() => onEndGame(totalScores)}>
          End Game
        </button>
      </div>
    </div>
  );
}
