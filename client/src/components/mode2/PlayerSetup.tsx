import { useState, useRef } from 'react';

const EMOJI_OPTIONS = [
  '🦁', '🐯', '🦊', '🐺', '🦅', '🦈', '🐻', '🐼',
  '🦋', '🌟', '🎩', '🤠', '😎', '🧙', '🦄', '🐲',
  '🤖', '👻', '🎭', '🦸', '🧸', '🐸', '🦀', '🦜',
];

interface StartConfig {
  names: string[];
  emojis: Record<string, string>;
  useTwists: boolean;
}

interface Props {
  onStart: (config: StartConfig) => void;
}

export default function PlayerSetup({ onStart }: Props) {
  const [names, setNames] = useState<string[]>(['', '', '', '']);
  const [playerEmojis, setPlayerEmojis] = useState<string[]>(EMOJI_OPTIONS.slice(0, 4));
  const [openPicker, setOpenPicker] = useState<number | null>(null);
  const [useTwists, setUseTwists] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const validNames = names.map(n => n.trim()).filter(Boolean);
  const canStart = validNames.length >= 3 && new Set(validNames).size === validNames.length;

  const updateName = (i: number, value: string) => {
    setNames(prev => { const next = [...prev]; next[i] = value; return next; });
  };

  const addPlayer = () => {
    if (names.length < 10) {
      setNames(prev => [...prev, '']);
      setPlayerEmojis(prev => [...prev, EMOJI_OPTIONS[prev.length % EMOJI_OPTIONS.length]]);
      setTimeout(() => inputRefs.current[names.length]?.focus(), 50);
    }
  };

  const removePlayer = (i: number) => {
    if (names.length > 3) {
      setNames(prev => prev.filter((_, idx) => idx !== i));
      setPlayerEmojis(prev => prev.filter((_, idx) => idx !== i));
      if (openPicker === i) setOpenPicker(null);
    }
  };

  const selectEmoji = (i: number, emoji: string) => {
    setPlayerEmojis(prev => { const next = [...prev]; next[i] = emoji; return next; });
    setOpenPicker(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent, i: number) => {
    if (e.key === 'Enter') {
      if (i < names.length - 1) inputRefs.current[i + 1]?.focus();
      else if (names.length < 10) addPlayer();
    }
    if (e.key === 'Escape') setOpenPicker(null);
  };

  const handleStart = () => {
    const entries = names
      .map((n, i) => ({ name: n.trim(), emoji: playerEmojis[i] }))
      .filter(({ name }) => name);
    const seen = new Set<string>();
    const unique = entries.filter(({ name }) => {
      if (seen.has(name)) return false;
      seen.add(name);
      return true;
    });
    if (unique.length >= 3) {
      const emojiMap: Record<string, string> = {};
      unique.forEach(({ name, emoji }) => { emojiMap[name] = emoji; });
      onStart({ names: unique.map(x => x.name), emojis: emojiMap, useTwists });
    }
  };

  const duplicates = new Set(
    names.map(n => n.trim().toLowerCase()).filter(
      (n, i, arr) => n && arr.indexOf(n) !== i
    )
  );

  return (
    <div className="screen animate-fade-in" onClick={() => openPicker !== null && setOpenPicker(null)}>
      <div style={{ width: '100%' }}>
        <div className="label label-gold" style={{ marginBottom: 8 }}>Pass the Device</div>
        <h2 className="title-lg" style={{ marginBottom: 8 }}>Who's playing?</h2>
        <p className="subtitle" style={{ marginBottom: 28 }}>
          Enter each player's name. Tap the emoji to pick your own.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
          {names.map((name, i) => {
            const trimmed = name.trim();
            const isDupe = !!(trimmed && duplicates.has(trimmed.toLowerCase()));
            return (
              <div key={i} style={{ position: 'relative' }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  {/* Emoji picker button */}
                  <button
                    onClick={e => { e.stopPropagation(); setOpenPicker(openPicker === i ? null : i); }}
                    style={{
                      width: 42, height: 42,
                      borderRadius: '50%',
                      background: openPicker === i ? 'var(--surface-3)' : 'var(--surface-2)',
                      border: `2px solid ${openPicker === i ? 'var(--gold)' : 'var(--border)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 20, flexShrink: 0,
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                  >
                    {playerEmojis[i]}
                  </button>

                  <input
                    ref={el => { inputRefs.current[i] = el; }}
                    className="input"
                    style={{ borderColor: isDupe ? 'var(--red)' : undefined, flex: 1 }}
                    placeholder={`Player ${i + 1}`}
                    value={name}
                    onChange={e => updateName(i, e.target.value)}
                    onKeyDown={e => handleKeyDown(e, i)}
                    onFocus={() => setOpenPicker(null)}
                    maxLength={20}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="words"
                    spellCheck={false}
                  />

                  {names.length > 3 && (
                    <button
                      onClick={() => removePlayer(i)}
                      style={{
                        background: 'none', color: 'var(--text-dim)',
                        fontSize: 20, lineHeight: 1,
                        padding: '4px 6px', flexShrink: 0,
                      }}
                    >
                      ×
                    </button>
                  )}
                </div>

                {/* Emoji picker popup */}
                {openPicker === i && (
                  <div
                    onClick={e => e.stopPropagation()}
                    style={{
                      position: 'absolute',
                      top: 50, left: 0,
                      zIndex: 200,
                      background: 'var(--surface-2)',
                      border: '1.5px solid var(--border-bright)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 12,
                      display: 'grid',
                      gridTemplateColumns: 'repeat(8, 1fr)',
                      gap: 6,
                      boxShadow: 'var(--shadow)',
                      width: '100%',
                    }}
                  >
                    {EMOJI_OPTIONS.map(emoji => (
                      <button
                        key={emoji}
                        onClick={() => selectEmoji(i, emoji)}
                        style={{
                          fontSize: 22,
                          padding: 4,
                          borderRadius: 8,
                          background: playerEmojis[i] === emoji ? 'rgba(200,149,26,0.2)' : 'transparent',
                          border: `2px solid ${playerEmojis[i] === emoji ? 'var(--gold)' : 'transparent'}`,
                          cursor: 'pointer',
                          lineHeight: 1,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          minHeight: 36,
                        }}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {names.length < 10 && (
            <button
              className="btn btn-ghost"
              style={{
                borderStyle: 'dashed',
                border: '1.5px dashed var(--border-bright)',
                borderRadius: 'var(--radius)',
                color: 'var(--gold)',
                fontSize: 15,
              }}
              onClick={addPlayer}
            >
              + Add Player
            </button>
          )}
        </div>

        {duplicates.size > 0 && (
          <p style={{ color: 'var(--red-bright)', fontSize: 13, marginTop: 12 }}>
            Two players can't have the same name.
          </p>
        )}

        {/* Twists toggle */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 28,
          padding: '14px 16px',
          background: 'var(--surface)',
          border: `1.5px solid ${useTwists ? 'var(--border-bright)' : 'var(--border)'}`,
          borderRadius: 'var(--radius)',
        }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: useTwists ? 'var(--gold-bright)' : 'var(--text)' }}>
              🌀 Add Twists
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 2 }}>
              Each round gets a surprise rule change
            </div>
          </div>
          <button
            onClick={() => setUseTwists(t => !t)}
            style={{
              width: 52, height: 28,
              borderRadius: 999,
              background: useTwists ? 'var(--gold)' : 'var(--surface-3)',
              border: `2px solid ${useTwists ? 'var(--gold-bright)' : 'var(--border)'}`,
              position: 'relative',
              cursor: 'pointer',
              transition: 'all 0.2s',
              flexShrink: 0,
            }}
          >
            <div style={{
              position: 'absolute',
              top: 2,
              left: useTwists ? 26 : 2,
              width: 20, height: 20,
              borderRadius: '50%',
              background: useTwists ? '#0a0a16' : 'var(--text-dim)',
              transition: 'left 0.2s',
            }} />
          </button>
        </div>

        <div style={{ marginTop: 16 }}>
          <button
            className="btn btn-gold"
            disabled={!canStart}
            style={{ opacity: canStart ? 1 : 0.4 }}
            onClick={handleStart}
          >
            Start Game →
          </button>

          {validNames.length > 0 && validNames.length < 3 && (
            <p className="text-muted text-center" style={{ fontSize: 13, marginTop: 10 }}>
              Need at least 3 players
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
