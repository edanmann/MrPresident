# Mr. President — Claude Code Context

## What this is
A local party game called **Mr. President** (internally designed as "Chaos President"), played by passing a single phone or device around the group.

### Core gameplay loop
1. Players choose who is **The President** for the round; the rest are randomly assigned roles
2. Three other players are **Advisors**, each secretly given a hidden agenda they must sneak into the President's ruling
3. One Advisor is secretly the **Double Agent** — loyal to the President, working to block the others
4. The crisis is shown to the whole group first, then the device is passed around so each player privately sees their secret role
5. The President reads the crisis aloud, hears arguments from advisors, then makes a ruling
6. Each round can include a **Twist** that changes the rules dynamically (optional, toggled at setup)
7. After the ruling, the group judges together whether each agenda made it into the ruling
8. Roles rotate each round

### The killer feature
Each player privately views their secret role card on the shared device during the pass-around — no one else looks while it's their turn. This is the core UX requirement.

---

## Tech stack
- **Frontend:** React (Vite), client-only — no backend
- **Shared types/content:** `/shared/` folder (types, crises, agendas, twists) imported directly by the client via the `@shared` Vite alias

## Project structure
```
mr-president/
├── client/          # React frontend (Vite) — the entire app
│   └── src/
├── shared/           # Shared types/constants (crises, agendas, twists)
├── CLAUDE.md
└── README.md
```

## Key game entities
- `PlayerAssignment` — playerName, role, agenda, emoji
- `Role` — "president" | "advisor" | "double-agent"
- `Agenda` — `{ id, backstory, goal }`, embedded per-crisis (5 per crisis, contextually tied to that crisis)
- `Crisis` — the absurd scenario the President must respond to, carries its own pool of agendas
- `Twist` — round modifier that changes gameplay rules (optional)
- `RoundSetup` — assignments, crisis, twist, roundNumber, presidentName, doubleAgentName

## Game flow (client-side state machine in `Mode2Game.tsx`)
`setup` → `choose-president` → `crisis` → `look-away` → `secret-card` (repeats per player) → `all-ready` → `deliberation` → `ruling` → `reveal` → `winners` → (next round or `setup`)

Game state is persisted to `sessionStorage` so a screen lock or accidental refresh resumes exactly where the group left off, instead of dropping back to setup.

## Core rules
- Agendas must be **subtle** — not obviously detectable in the advisor's argument, but noticeable after 2-3 sentences from argument direction/pattern
- The Double Agent is randomly assigned each round (not always the same player) and has no agenda
- The President is chosen by the group each round; the rest of the roles are drawn randomly
- Crises are absurd and pre-written, shuffled without replacement (all seen before any repeat)
- Crises are funny and absurd (e.g. "Penguins demanding citizenship", "The sun rising in the west")
- Twists are off by default and only shown if enabled at setup

## Style notes
- Keep UI bold and fun — this is a party game, not a productivity tool
- Presidential / political aesthetic with a chaotic twist
- Mobile-first (players pass one phone around as the controller)
