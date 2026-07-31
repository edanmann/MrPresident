export type Role = 'president' | 'advisor' | 'double-agent';

export interface Crisis {
  id: string;
  text: string;
  agendas: Agenda[];
}

export interface Twist {
  id: string;
  text: string;
}

export interface Agenda {
  id: string;
  backstory: string;
  goal: string;
}

export interface PlayerAssignment {
  playerName: string;
  role: Role;
  agenda: Agenda | null;
  emoji?: string;
}

export interface RoundSetup {
  assignments: PlayerAssignment[];
  crisis: Crisis;
  twist: Twist | null;
  roundNumber: number;
  presidentName: string;
  doubleAgentName: string;
}
