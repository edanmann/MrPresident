"use client";

import type { BotCardData } from "@/lib/types";
import { BotCard } from "@/components/bot-card";
import HeroLiveMock from "@/components/landing/hero-live-mock";
import AppPhoneMock from "@/components/landing/app-phone-mock";
import GlyphBand from "@/components/landing/glyph-band";
import WatchLiveMock from "@/components/landing/watch-live-mock";
import { Mascot } from "@/components/landing/mascot";
import { Badge } from "@/components/ui";
import { ChallengeBotsButton, WaitlistButton } from "@/components/waitlist";
import PuzzleIllustration from "@/components/landing/puzzle-illustration";
import DebateReviewMock from "@/components/landing/debate-review-mock";

/** Public landing page — original composition covering the eight source sections. */

function Section({
  id,
  eyebrow,
  title,
  sub,
  cta,
  children,
  flip = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  sub: string;
  cta: string;
  children: React.ReactNode;
  flip?: boolean;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      {/* min-w-0 lets grid children shrink below their intrinsic width, which
          is what stops wide demo panels forcing horizontal scroll on phones. */}
      <div
        className={`grid items-center gap-10 lg:grid-cols-2 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        <div className="min-w-0">
          <Badge tone="brand">{eyebrow}</Badge>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-lg text-fg-muted">{sub}</p>
          <div className="mt-6">
            <WaitlistButton size="lg">
                {cta}
            </WaitlistButton>
          </div>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

export default function LandingPage({ showcase }: { showcase: BotCardData[] }) {

  return (
    <div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(129,182,76,0.12),transparent)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 sm:gap-12 sm:pt-20 lg:grid-cols-2">
          <div className="min-w-0">
            <h1 className="text-[2rem] font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Debate anyone.
              <br />
              <span className="text-brand">Improve every round.</span>
            </h1>
            <p className="mt-4 max-w-lg text-base text-fg-muted sm:mt-5 sm:text-lg">
              Debate people or Bots to receive clear analysis and sharpen the
              skills that make arguments matter.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <WaitlistButton className="w-full sm:w-auto">Join Waitlist</WaitlistButton>
              <ChallengeBotsButton className="w-full sm:w-auto" />
            </div>
            <p className="mt-4 text-sm text-fg-faint">
              Free to join. No credit card.
            </p>
          </div>
          <div className="min-w-0">
            <HeroLiveMock />
          </div>
        </div>
      </section>

      {/* Analyse your debates */}
      <Section
        id="analyse"
        eyebrow="Your own rounds"
        title="Analyse your debates"
        flip
        sub="Receive instant debate reviews to improve your communication skills, by having every line graded and a coach who walks you through everything."
        cta="Join Waitlist"
      >
        <DebateReviewMock />
      </Section>

      {/* Bots */}
      <section id="bots" className="border-y border-border-subtle bg-surface-1/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <Badge tone="brand">Practise anytime</Badge>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Debate distinctive bots
            </h2>
            <p className="mt-3 text-fg-muted">
              Choose from beginner to master, each with different strengths,
              weaknesses and debate behaviour.
            </p>
          </div>
          <div className="mt-10 rounded-3xl bg-board p-4 shadow-2xl ring-1 ring-black/10 sm:p-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {showcase.map((bot) => (
                <BotCard key={bot.slug} bot={bot} />
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WaitlistButton size="lg">Join Waitlist</WaitlistButton>
            <ChallengeBotsButton size="lg" />
          </div>
        </div>
      </section>

      {/* Lessons */}
      <Section
        id="lessons"
        eyebrow="Coming soon"
        title="Interactive debate lessons"
        sub="Fully interactive lessons for argumentation, rebuttal, evidence, strategy, delivery and persuasion are in the workshop. Until they're genuinely interactive, they stay off the menu. Train with puzzles meanwhile."
        cta="Join Waitlist"
        flip
      >
        <div className="relative pt-14">
          <Mascot
            slug="donald-trump"
            name="Trump"
            quote="Nobody debates better than me. Nobody!"
            side="right"
            size={112}
          />
          <div className="grid gap-3 rounded-3xl bg-board p-4 shadow-2xl ring-1 ring-black/10">
            {[
              ["Anatomy of an Argument", "Argumentation"],
              ["Rebuttal That Actually Lands", "Rebuttal"],
              ["Weighing: Why Yours Matters More", "Strategy"],
            ].map(([title, meta]) => (
              <div
                key={title}
                className="flex items-center justify-between rounded-2xl bg-white px-4 py-4 text-ink shadow-sm"
              >
                <div>
                  <p className="font-bold">{title}</p>
                  <p className="text-xs text-ink-muted">{meta}</p>
                </div>
                <span className="rounded-full bg-board-2 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-ink-muted">
                  Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Puzzles */}
      <Section
        id="puzzles"
        eyebrow="Daily training"
        title="Level up with debate puzzles"
        sub="Short spoken challenges that train rebuttal, framing, evidence and strategic judgement. Three a day, in under five minutes."
        cta="Join Waitlist"
      >
        <PuzzleIllustration />
      </Section>

      {/* Watch */}
      <Section
        id="watch"
        eyebrow="Spectate"
        title="Watch debates with real-time analysis"
        sub="Follow live, upcoming and previous debates with transcripts, argument maps and judge commentary."
        cta="Join Waitlist"
        flip
      >
        <WatchLiveMock />
      </Section>

      {/* Mobile app */}
      <section className="border-y border-border-subtle bg-surface-1/40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <Badge tone="brand">On the go</Badge>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Debate anywhere with the Debates.ch app
            </h2>
            <p className="mt-3 max-w-lg text-fg-muted">
              Audio debates with animated opponents, one thumb on the timer.
              The mobile app is on its way.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="cursor-not-allowed rounded-xl border border-border-subtle px-5 py-3 text-sm text-fg-faint">
                 App Store — coming soon
              </span>
              <span className="cursor-not-allowed rounded-xl border border-border-subtle px-5 py-3 text-sm text-fg-faint">
                ▶ Google Play — coming soon
              </span>
            </div>
          </div>
          <AppPhoneMock />
        </div>
      </section>

      {/* Final CTA */}
      <GlyphBand />
      <section className="mx-auto max-w-4xl px-4 pb-20 pt-4 text-center">
        <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
          Learn, debate and have fun.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-fg-muted">
          Join to keep your rating, unlock every bot, and turn every round into
          measurable progress.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <WaitlistButton>Join Waitlist</WaitlistButton>
          <ChallengeBotsButton />
        </div>
      </section>
    </div>
  );
}
