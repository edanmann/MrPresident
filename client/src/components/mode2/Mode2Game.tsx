import { useState, useCallback, useEffect } from 'react';
import type { Crisis, RoundSetup } from '@shared/types';
import { CRISES } from '@shared/content';
import { createRoundSetup } from '../../gameEngine';
import PlayerSetup from './PlayerSetup';
import ChoosePresident from './ChoosePresident';
import LookAway from './LookAway';
import SecretCard from './SecretCard';
import CrisisDisplay from './CrisisDisplay';
import Deliberation from './Deliberation';
import RulingPrompt from './RulingPrompt';
import RevealPhase from './RevealPhase';
import WinnersPhase from './WinnersPhase';

const SESSION_KEY = 'mrp-session-v1';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Phase =
  | 'setup'
  | 'choose-president'
  | 'crisis'
  | 'look-away'
  | 'secret-card'
  | 'all-ready'
  | 'deliberation'
  | 'ruling'
  | 'reveal'
  | 'winners';

interface State {
  phase: Phase;
  playerNames: string[];
  playerEmojis: Record<string, string>;
  useTwists: boolean;
  currentIndex: number;
  roundSetup: RoundSetup | null;
  pendingCrisis: Crisis | null;
  verdicts: Record<string, boolean>;
  scores: Record<string, number>;
  roundNumber: number;
  crisisDeck: Crisis[];
}

function makeInitial(): State {
  return {
    phase: 'setup',
    playerNames: [],
    playerEmojis: {},
    useTwists: false,
    currentIndex: 0,
    roundSetup: null,
    pendingCrisis: null,
    verdicts: {},
    scores: {},
    roundNumber: 1,
    crisisDeck: [],
  };
}

export default function Mode2Game() {
  const [state, setState] = useState<State>(() => {
    // Restore session on first render
    try {
      const saved = sessionStorage.getItem(SESSION_KEY);
      if (saved) {
        const restored = JSON.parse(saved) as State;
        if (restored.phase && restored.phase !== 'setup') return restored;
      }
    } catch {}
    return makeInitial();
  });
  const [showExitMenu, setShowExitMenu] = useState(false);

  // Persist state to sessionStorage on every change
  useEffect(() => {
    if (state.phase === 'setup') {
      sessionStorage.removeItem(SESSION_KEY);
    } else {
      try {
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(state));
      } catch {}
    }
  }, [state]);

  const go = useCallback((updates: Partial<State>) => {
    setState(prev => ({ ...prev, ...updates }));
    setShowExitMenu(false);
  }, []);

  const resetToSetup = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY);
    setState(makeInitial());
    setShowExitMenu(false);
  }, []);

  const { phase, playerNames, playerEmojis, useTwists, currentIndex, roundSetup, pendingCrisis, verdicts, scores, roundNumber, crisisDeck } = state;

  const showFloatingExit = phase !== 'setup';

  return (
    <div style={{ position: 'relative', minHeight: '100dvh' }}>
      {showFloatingExit && (
        <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 100 }}>
          {showExitMenu ? (
            <div style={{
              background: 'var(--surface-2)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              minWidth: 170,
              boxShadow: 'var(--shadow)',
            }}>
              <button
                onClick={resetToSetup}
                style={{ padding: '10px 14px', background: 'none', color: 'var(--text)', textAlign: 'left', fontSize: 14, fontWeight: 600, borderRadius: 8, cursor: 'pointer' }}
              >
                🔄 Change Players
              </button>
              <button
                onClick={() => setShowExitMenu(false)}
                style={{ padding: '8px 14px', background: 'none', color: 'var(--text-dim)', textAlign: 'left', fontSize: 13, borderRadius: 8, cursor: 'pointer' }}
              >
                ✕ Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowExitMenu(true)}
              style={{
                width: 38, height: 38,
                borderRadius: '50%',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
                fontSize: 18,
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              ☰
            </button>
          )}
        </div>
      )}

      {showExitMenu && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 99 }}
          onClick={() => setShowExitMenu(false)}
        />
      )}

      {/* ── Setup ── */}
      {phase === 'setup' && (
        <div>
          <PlayerSetup
            onStart={({ names, emojis, useTwists: twists }) => {
              const deck = shuffle([...CRISES]);
              const crisis = deck[0];
              const remaining = deck.slice(1);
              go({
                phase: 'choose-president',
                playerNames: names,
                playerEmojis: emojis,
                useTwists: twists,
                currentIndex: 0,
                roundSetup: null,
                pendingCrisis: crisis,
                scores: Object.fromEntries(names.map(n => [n, 0])),
                verdicts: {},
                roundNumber: 1,
                crisisDeck: remaining,
              });
            }}
          />
        </div>
      )}

      {/* ── Choose President ── */}
      {phase === 'choose-president' && (
        <ChoosePresident
          playerNames={playerNames}
          playerEmojis={playerEmojis}
          roundNumber={roundNumber}
          onChoose={(president) => {
            const crisis = pendingCrisis ?? crisisDeck[0] ?? shuffle([...CRISES])[0];
            const setup = createRoundSetup(playerNames, roundNumber, {
              playerEmojis,
              useTwists,
              crisis,
              presidentName: president,
            });
            go({ phase: 'crisis', roundSetup: setup, pendingCrisis: null });
          }}
        />
      )}

      {/* ── Crisis (shown to everyone BEFORE role cards) ── */}
      {phase === 'crisis' && roundSetup && (
        <CrisisDisplay
          roundSetup={roundSetup}
          onBegin={() => go({ phase: 'look-away', currentIndex: 0 })}
        />
      )}

      {/* ── Role reveal loop ── */}
      {phase === 'look-away' && roundSetup && (
        <LookAway
          playerName={roundSetup.assignments[currentIndex].playerName}
          playerEmoji={roundSetup.assignments[currentIndex].emoji}
          playerIndex={currentIndex}
          totalPlayers={playerNames.length}
          context="role"
          onReady={() => go({ phase: 'secret-card' })}
        />
      )}

      {phase === 'secret-card' && roundSetup && (
        <SecretCard
          assignment={roundSetup.assignments[currentIndex]}
          roundSetup={roundSetup}
          onDone={() => {
            const next = currentIndex + 1;
            if (next < playerNames.length) {
              go({ phase: 'look-away', currentIndex: next });
            } else {
              go({ phase: 'all-ready' });
            }
          }}
        />
      )}

      {/* ── All ready ── */}
      {phase === 'all-ready' && (
        <div className="screen-center animate-fade-in" style={{ gap: 0 }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>✅</div>
          <div className="label label-gold" style={{ marginBottom: 8 }}>Everyone's briefed</div>
          <h2 className="title-lg" style={{ textAlign: 'center', marginBottom: 12 }}>
            All roles revealed.
          </h2>
          <p className="subtitle" style={{ textAlign: 'center', maxWidth: 300, marginBottom: 40 }}>
            Put the device in the middle. Advisors — start making your case!
          </p>
          <button className="btn btn-gold" style={{ maxWidth: 300 }} onClick={() => go({ phase: 'deliberation' })}>
            Start Deliberation →
          </button>
        </div>
      )}

      {/* ── Deliberation ── */}
      {phase === 'deliberation' && roundSetup && (
        <Deliberation
          roundSetup={roundSetup}
          onDone={() => go({ phase: 'ruling' })}
        />
      )}

      {/* ── Ruling ── */}
      {phase === 'ruling' && roundSetup && (
        <RulingPrompt
          roundSetup={roundSetup}
          onDone={() => go({ phase: 'reveal', verdicts: {} })}
        />
      )}

      {/* ── Reveal + verdict ── */}
      {phase === 'reveal' && roundSetup && (
        <RevealPhase
          roundSetup={roundSetup}
          onDone={(v) => go({ phase: 'winners', verdicts: v })}
        />
      )}

      {/* ── Winners ── */}
      {phase === 'winners' && roundSetup && (
        <WinnersPhase
          roundSetup={roundSetup}
          verdicts={verdicts}
          scores={scores}
          roundNumber={roundNumber}
          onPlayAgain={(newScores) => {
            const next = roundNumber + 1;
            const deck = crisisDeck.length > 0 ? crisisDeck : shuffle([...CRISES]);
            const crisis = deck[0];
            const remaining = deck.slice(1);
            go({
              phase: 'choose-president',
              currentIndex: 0,
              roundSetup: null,
              pendingCrisis: crisis,
              roundNumber: next,
              scores: newScores,
              verdicts: {},
              crisisDeck: remaining,
            });
          }}
          onNewPlayers={resetToSetup}
        />
      )}
    </div>
  );
}
