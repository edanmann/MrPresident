# Mr. President 🎖️

A pass-the-device party game where one player is the President, and everyone else is an advisor with a secret agenda.

## How to play

- Players choose who is **The President** for the round; the rest are randomly assigned
- The crisis is read aloud to the group, then the device is passed around so each player privately sees their secret role
- **Advisors** each have a secret agenda they must sneak into the President's decision
- **The Double Agent** is secretly loyal to the President — working to expose the others
- Some rounds have a **Twist** that shakes up the rules (optional, toggled at setup)
- After the ruling, the group judges together whether each agenda made it in
- Roles rotate every round

## The key feature
Each player privately views their secret role card on the shared device during the pass-around — no shared screen reveals, no peeking.

## Tech stack
- **Frontend:** React + Vite — client-only, no backend
- **Shared content:** `/shared/` — types, crises, agendas, and twists used by the client

## Getting started

```bash
cd client && npm install
npm run dev
```

## Project structure
```
mr-president/
├── client/       # React frontend — the entire app
└── shared/       # Shared types and content used by the client
```
