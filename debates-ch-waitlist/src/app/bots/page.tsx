import type { Metadata } from "next";
import { getBotCards } from "@/lib/bots";
import BotArena from "./arena-client";

export const metadata: Metadata = {
  title: "Challenge Bots",
  description:
    "Meet the debate opponents waiting on Debates.ch — from first-timers to masters.",
};

export default function BotsPage() {
  const bots = getBotCards();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">Challenge a bot</h1>
      <p className="mt-2 max-w-2xl text-fg-muted">
        {bots.length} opponents, each with their own style, strengths and
        weaknesses. Pick one and hear what they have to say — then get on the
        waitlist to actually debate them.
      </p>
      <div className="mt-6">
        <BotArena bots={bots} />
      </div>
    </div>
  );
}
