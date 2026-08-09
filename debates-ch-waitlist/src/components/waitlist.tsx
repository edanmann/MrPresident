"use client";

import Link from "next/link";
import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { BotFace } from "./bot-face";
import { buttonClass } from "./ui";
import { CloseIcon } from "./menu-icons";

/**
 * Waitlist capture. Every "Join Waitlist" button on the site opens the same
 * modal, so there is one form to maintain and one place a signup can fail.
 *
 * Challenging a bot opens the same modal with a "launching soon" framing and
 * that bot's face, so the moment of highest intent becomes a signup rather
 * than a dead end.
 */

/** Optional framing when the modal is opened from a specific moment. */
export interface WaitlistIntent {
  title?: string;
  blurb?: string;
  botSlug?: string;
  botName?: string;
}

interface WaitlistCtx {
  open: (intent?: WaitlistIntent) => void;
}

const Ctx = createContext<WaitlistCtx>({ open: () => {} });

export function useWaitlist() {
  return useContext(Ctx);
}

type Status = "idle" | "sending" | "done" | "error";

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [intent, setIntent] = useState<WaitlistIntent | null>(null);
  const isOpen = intent !== null;
  const open = useCallback((next?: WaitlistIntent) => setIntent(next ?? {}), []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (name.trim().length < 2) return setError("Please enter your name.");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim()))
      return setError("That doesn't look like an email address.");
    // Phone is required by the product, but kept permissive: people write
    // numbers in a dozen different formats and rejecting them loses signups.
    if (phone.replace(/[^\d]/g, "").length < 6)
      return setError("Please enter a phone number we can reach you on.");
    if (!consent) return setError("Please tick the consent box so we can contact you.");

    setStatus("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          consent,
          referrer: typeof document !== "undefined" ? document.referrer : "",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setError(data?.message ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("done");
    } catch {
      setStatus("error");
      setError("Network error — please try again.");
    }
  }

  function close() {
    setIntent(null);
    // Reset a completed form so a second person can sign up on the same device.
    if (status === "done") {
      setName("");
      setEmail("");
      setPhone("");
      setConsent(false);
      setStatus("idle");
    }
  }

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Join the Debates.ch waitlist"
          onClick={close}
        >
          <div
            className="my-8 w-full max-w-md rounded-3xl bg-board p-6 text-ink shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-3">
              <BotFace
                slug={intent?.botSlug ?? "donald-trump"}
                name={intent?.botName ?? "Trump"}
                size={56}
                speaking
                className="shrink-0"
              />
              <div className="min-w-0 flex-1">
                <h2 className="text-xl font-black leading-tight">
                  {status === "done"
                    ? "You're on the list."
                    : (intent?.title ?? "Join the waitlist")}
                </h2>
                <p className="mt-0.5 text-sm text-ink-muted">
                  {status === "done"
                    ? "We'll be in touch the moment your place opens up."
                    : (intent?.blurb ?? "Be first in when Debates.ch opens up.")}
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="rounded-lg p-1 text-ink-muted hover:bg-board-2"
              >
                <CloseIcon />
              </button>
            </div>

            {status === "done" ? (
              <div className="mt-5">
                <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
                  <p className="text-4xl">🎉</p>
                  <p className="mt-2 text-sm font-semibold">
                    Thanks {name.split(" ")[0] || "there"} — you&apos;re counted.
                  </p>
                  <p className="mt-1 text-xs text-ink-muted">
                    Meanwhile, meet the opponents waiting for you.
                  </p>
                </div>
                <Link
                  href="/bots"
                  onClick={close}
                  className={`${buttonClass("primary", "lg")} mt-3 w-full`}
                >
                  Meet the bots
                </Link>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-5 space-y-3">
                <label className="block">
                  <span className="text-xs font-black uppercase tracking-wide text-ink-muted">
                    Name
                  </span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    required
                    placeholder="Your name"
                    className="mt-1 w-full rounded-xl bg-white px-3 py-2.5 text-sm shadow-sm outline-none ring-1 ring-black/5 focus:ring-2 focus:ring-[#81b64c]"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-black uppercase tracking-wide text-ink-muted">
                    Email
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className="mt-1 w-full rounded-xl bg-white px-3 py-2.5 text-sm shadow-sm outline-none ring-1 ring-black/5 focus:ring-2 focus:ring-[#81b64c]"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-black uppercase tracking-wide text-ink-muted">
                    Phone
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    required
                    placeholder="+41 79 123 45 67"
                    className="mt-1 w-full rounded-xl bg-white px-3 py-2.5 text-sm shadow-sm outline-none ring-1 ring-black/5 focus:ring-2 focus:ring-[#81b64c]"
                  />
                </label>
                <label className="flex items-start gap-2 text-xs text-ink-muted">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 accent-[#81b64c]"
                  />
                  I agree to be contacted about the Debates.ch launch. My details
                  are used for that only, never sold, and I can ask for them to be
                  deleted at any time.
                </label>
                {error && (
                  <p className="rounded-lg bg-[#fadedb] px-3 py-2 text-xs font-semibold text-[#8a2c20]">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`${buttonClass("primary", "lg")} w-full`}
                >
                  {status === "sending" ? "Joining…" : "Join Waitlist"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}

/** Opens the waitlist modal from anywhere on the site. */
export function WaitlistButton({
  children = "Join Waitlist",
  size = "xl",
  className = "",
}: {
  children?: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const { open } = useWaitlist();
  return (
    <button
      type="button"
      onClick={() => open()}
      className={`${buttonClass("primary", size)} ${className}`}
    >
      {children}
    </button>
  );
}

/** Sends people into the bot arena on this site. */
export function ChallengeBotsButton({
  size = "xl",
  className = "",
}: {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  return (
    <Link href="/bots" className={`${buttonClass("secondary", size)} ${className}`}>
      Challenge Bots
    </Link>
  );
}
