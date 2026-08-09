"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { BotFace, botFlag } from "@/components/bot-face";
import { SixStatBars } from "@/components/stats";
import { buttonClass } from "@/components/ui";
import { useWaitlist } from "@/components/waitlist";
import { challengeLine } from "@/lib/bot-lines";
import { groupBots } from "@/lib/bot-groups";
import type { BotCardData } from "@/lib/types";

/**
 * "Pick your opponent" arena for the waitlist site.
 *
 * There is no debate to start here yet, so the payoff is the character: the
 * selected bot animates, speaks their opening line, and the Challenge button
 * turns that moment of intent into a waitlist signup.
 */

/** Word-by-word reveal so the bot reads as speaking live, not typing. */
function useSpokenLine(line: string) {
  const [shown, setShown] = useState(() => line.split(" ")[0] ?? "");
  const [speaking, setSpeaking] = useState(true);

  useEffect(() => {
    const words = line.split(" ");
    const MS_PER_WORD = 210;
    const HOLD_MS = 3200;
    let frame = 0;
    let start = 0;
    let restart: ReturnType<typeof setTimeout>;

    const step = (now: number) => {
      if (!start) start = now;
      const count = Math.min(words.length, Math.floor((now - start) / MS_PER_WORD) + 1);
      setShown(words.slice(0, count).join(" "));
      if (count >= words.length) {
        setSpeaking(false);
        restart = setTimeout(() => {
          start = 0;
          setSpeaking(true);
          frame = requestAnimationFrame(step);
        }, HOLD_MS);
        return;
      }
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(restart);
    };
  }, [line]);

  return { shown, speaking };
}

function Tile({
  bot,
  selected,
  onSelect,
}: {
  bot: BotCardData;
  selected: boolean;
  onSelect: () => void;
}) {
  const flag = botFlag(bot.slug);
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      title={`${bot.name} (${bot.overallRating ?? "—"})`}
      className={`group relative flex min-w-0 flex-col items-center rounded-xl p-1.5 transition-all ${
        selected
          ? "bg-brand/15 ring-2 ring-brand"
          : "hover:-translate-y-0.5 hover:bg-surface-2"
      }`}
    >
      <BotFace
        slug={bot.slug}
        name={bot.name}
        size={72}
        speaking={selected}
        className="rounded-xl"
      />
      <span className="mt-1 max-w-[5.5rem] truncate text-[11px] font-bold">{bot.name}</span>
      <span className="numeric text-[11px] text-fg-muted">
        {bot.overallRating ?? "—"} {flag ?? ""}
      </span>
    </button>
  );
}

/** The light board panel: selected bot, animated, with their opening line. */
function Stage({ bot, onChallenge }: { bot: BotCardData; onChallenge: () => void }) {
  const { shown, speaking } = useSpokenLine(challengeLine(bot.slug));
  const flag = botFlag(bot.slug);

  return (
    <div className="pop-in rounded-3xl bg-board p-5 text-ink shadow-xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="mx-auto shrink-0 sm:mx-0">
          <div className="mascot-bob">
            <BotFace slug={bot.slug} name={bot.name} size={132} speaking={speaking} />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p className="flex flex-wrap items-center gap-2 text-2xl font-black leading-tight">
            {bot.name}
            <span className="text-xl">{flag ?? ""}</span>
            {bot.overallRating != null && (
              <span className="numeric rounded-lg bg-board-2 px-2 py-0.5 text-lg text-[#5d8a3a]">
                {bot.overallRating}
              </span>
            )}
          </p>
          <p className="text-sm font-semibold text-ink-muted">{bot.archetype}</p>

          {/* Speech bubble — the line reveals itself while the mouth moves. */}
          <div className="relative mt-3 rounded-2xl bg-white p-3 shadow-sm">
            <span
              className="absolute -top-1.5 left-6 h-3 w-3 rotate-45 bg-white"
              aria-hidden
            />
            <p className="min-h-[2.75rem] text-sm font-medium leading-snug">
              {shown}
              {speaking && <span className="ml-0.5 animate-pulse">▍</span>}
            </p>
          </div>

          {bot.stats && (
            <div className="mt-3">
              <SixStatBars stats={bot.stats} compact light />
            </div>
          )}
          {bot.mainWeakness && (
            <p className="mt-2 text-xs text-ink-muted">
              Weakness: <span className="font-semibold">{bot.mainWeakness}</span>
            </p>
          )}

          <button
            type="button"
            onClick={onChallenge}
            className={`${buttonClass("primary", "lg")} mt-4 w-full sm:w-auto`}
          >
            Challenge {bot.name}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BotArena({ bots }: { bots: BotCardData[] }) {
  const groups = useMemo(() => groupBots(bots), [bots]);
  const { open } = useWaitlist();

  const [query, setQuery] = useState("");
  // Trump is the headline opponent, so he greets you first.
  const [selected, setSelected] = useState<BotCardData>(
    bots.find((b) => b.slug === "donald-trump") ?? groups[0]?.bots[0] ?? bots[0]
  );
  // Open the shelf the preselected bot lives on, so the highlighted tile is
  // visible rather than hidden inside a collapsed category.
  const [openGroup, setOpenGroup] = useState<string>(
    () =>
      groups.find((g) => g.bots.some((b) => b.slug === selected?.slug))?.name ??
      groups[0]?.name ??
      ""
  );
  const stageRef = useRef<HTMLDivElement>(null);

  const searching = query.trim().length > 0;
  const results = searching
    ? bots.filter((b) =>
        `${b.name} ${b.archetype}`.toLowerCase().includes(query.trim().toLowerCase())
      )
    : [];

  function pick(bot: BotCardData) {
    setSelected(bot);
    // On phones the shelves push the stage off-screen, so bring it back.
    if (window.matchMedia("(max-width: 1023px)").matches) {
      stageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function challenge() {
    open({
      title: "We're launching soon",
      blurb: `Debating ${selected.name} isn't live yet. Join the waitlist and you're in from day one.`,
      botSlug: selected.slug,
      botName: selected.name,
    });
  }

  return (
    <div className="pb-28 lg:pb-10">
      <div ref={stageRef} className="scroll-mt-20">
        {/* Keyed by slug so the panel replays its entrance and speech on
            every pick, rather than resetting state inside an effect. */}
        <Stage key={selected.slug} bot={selected} onChallenge={challenge} />
      </div>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={`Search all ${bots.length} bots…`}
        aria-label="Search bots"
        className="mt-5 w-full rounded-xl border border-border-subtle bg-surface-2 px-4 py-3 text-sm outline-none focus:border-brand"
      />

      {searching ? (
        <div className="mt-4 rounded-2xl bg-surface-1 p-4">
          <p className="mb-3 text-sm font-bold text-fg-muted">
            {results.length} result{results.length === 1 ? "" : "s"}
          </p>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-8">
            {results.map((bot) => (
              <Tile
                key={bot.slug}
                bot={bot}
                selected={selected.slug === bot.slug}
                onSelect={() => pick(bot)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-4 space-y-2">
          {groups.map((group) => {
            const isOpen = openGroup === group.name;
            return (
              <section key={group.name} className="rounded-2xl bg-surface-1">
                <button
                  type="button"
                  onClick={() => setOpenGroup(isOpen ? "" : group.name)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-colors hover:bg-surface-2"
                >
                  <BotFace slug={group.bots[0].slug} name={group.bots[0].name} size={40} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-black">{group.name}</span>
                    <span className="block truncate text-xs text-fg-muted">{group.blurb}</span>
                  </span>
                  <span className="shrink-0 text-sm text-fg-muted">
                    {group.bots.length} bot{group.bots.length === 1 ? "" : "s"}
                  </span>
                  <span
                    className={`shrink-0 text-fg-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    ▾
                  </span>
                </button>
                {isOpen && (
                  <div className="grid grid-cols-3 gap-2 px-3 pb-4 sm:grid-cols-5 lg:grid-cols-8">
                    {group.bots.map((bot) => (
                      <Tile
                        key={bot.slug}
                        bot={bot}
                        selected={selected.slug === bot.slug}
                        onSelect={() => pick(bot)}
                      />
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      )}

      {/* Sticky challenge bar on phones, where the stage button scrolls away. */}
      <div
        className="fixed inset-x-0 bottom-0 z-30 border-t border-border-subtle bg-surface-1/95 p-3 backdrop-blur lg:hidden"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto flex max-w-4xl items-center gap-3">
          <BotFace slug={selected.slug} name={selected.name} size={40} className="shrink-0" />
          <button
            type="button"
            onClick={challenge}
            className={`${buttonClass("primary", "lg")} min-w-0 flex-1 truncate`}
          >
            Challenge {selected.name}
          </button>
        </div>
      </div>
    </div>
  );
}
