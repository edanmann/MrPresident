import { CRISES, TWISTS } from '@shared/content';
import type { Crisis, PlayerAssignment, RoundSetup } from '@shared/types';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

interface RoundOptions {
  playerEmojis?: Record<string, string>;
  useTwists?: boolean;
  crisis?: Crisis;
  presidentName?: string;
}

export function createRoundSetup(
  playerNames: string[],
  roundNumber: number,
  options: RoundOptions = {},
): RoundSetup {
  const { playerEmojis = {}, useTwists = false, crisis: providedCrisis, presidentName: providedPresident } = options;

  let reordered: string[];
  if (providedPresident && playerNames.includes(providedPresident)) {
    const others = shuffle(playerNames.filter(n => n !== providedPresident));
    reordered = [providedPresident, ...others];
  } else {
    const shuffledNames = shuffle(playerNames);
    const presidentIndex = (roundNumber - 1) % shuffledNames.length;
    reordered = [
      shuffledNames[presidentIndex],
      ...shuffledNames.slice(0, presidentIndex),
      ...shuffledNames.slice(presidentIndex + 1),
    ];
  }

  const presidentName = reordered[0];
  const advisorNames = reordered.slice(1);

  const doubleAgentIndex = Math.floor(Math.random() * advisorNames.length);
  const doubleAgentName = advisorNames[doubleAgentIndex];

  const crisis = providedCrisis ?? pickRandom(CRISES);
  const shuffledAgendas = shuffle(crisis.agendas);
  let agendaIdx = 0;

  const assignments: PlayerAssignment[] = reordered.map((name) => {
    const emoji = playerEmojis[name] || getPlayerEmoji(name);
    if (name === presidentName) {
      return { playerName: name, role: 'president', agenda: null, emoji };
    }
    if (name === doubleAgentName) {
      return { playerName: name, role: 'double-agent', agenda: null, emoji };
    }
    return { playerName: name, role: 'advisor', agenda: shuffledAgendas[agendaIdx++], emoji };
  });
  const twist = useTwists ? pickRandom(TWISTS) : null;

  return {
    assignments,
    crisis,
    twist,
    roundNumber,
    presidentName,
    doubleAgentName,
  };
}

export function getPlayerEmoji(name: string): string {
  const emojis = ['🎩', '🦅', '🦁', '🐯', '🦊', '🐺', '🦈', '🐻', '🦋', '🌟', '🎭', '👑'];
  const idx = name.charCodeAt(0) % emojis.length;
  return emojis[idx];
}

export function getRoleLabel(role: PlayerAssignment['role']): string {
  switch (role) {
    case 'president':     return 'The President';
    case 'advisor':       return 'Secret Advisor';
    case 'double-agent':  return 'Double Agent';
  }
}

export function getRoleEmoji(role: PlayerAssignment['role']): string {
  switch (role) {
    case 'president':    return '👑';
    case 'advisor':      return '🎭';
    case 'double-agent': return '🕵️';
  }
}
