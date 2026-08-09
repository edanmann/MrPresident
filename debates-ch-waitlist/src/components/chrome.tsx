"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { CloseIcon, MenuIcon } from "./menu-icons";
import {
  InstagramGlyph,
  LogoMark,
  XGlyph,
  YouTubeGlyph,
} from "./color-icons";
import { WaitlistButton } from "./waitlist";

/**
 * Marketing chrome for the waitlist site. There is no app shell here — the
 * product itself lives on the main platform; this site exists to collect
 * signups while the prototype is being built.
 */

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
      <LogoMark className="h-8 w-8" />
      <span className="text-lg">
        Debates<span className="text-brand">.ch</span>
      </span>
    </Link>
  );
}

const NAV = [
  { href: "/bots", label: "Bots" },
  { href: "/#puzzles", label: "Puzzles" },
  { href: "/#watch", label: "Watch" },
  { href: "/#analyse", label: "Analyse" },
  { href: "/#app", label: "App" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <WaitlistButton size="sm">Join Waitlist</WaitlistButton>
        </div>
        <button
          type="button"
          className="rounded-lg p-2 hover:bg-surface-2 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border-subtle px-4 pb-4 md:hidden" aria-label="Mobile">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-fg-muted hover:bg-surface-2 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2">
            <WaitlistButton className="w-full">Join Waitlist</WaitlistButton>
          </div>
        </nav>
      )}
    </header>
  );
}

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/debatesapp/", Glyph: InstagramGlyph },
  { label: "X", href: "https://x.com/AppDebates", Glyph: XGlyph },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC3SZfMUKNCt5VCCdsBFvADw",
    Glyph: YouTubeGlyph,
  },
];

export function Footer() {
  const cols: { title: string; links: [string, string][] }[] = [
    {
      title: "Product",
      links: [
        ["Bots", "/bots"],
        ["Puzzles", "/#puzzles"],
        ["Watch", "/#watch"],
        ["Analyse", "/#analyse"],
        ["App", "/#app"],
      ],
    },
    {
      title: "Company",
      links: [
        ["About", "/about"],
        ["Safety", "/safety"],
      ],
    },
    {
      title: "Legal",
      links: [
        ["Terms", "/terms"],
        ["Privacy", "/privacy"],
      ],
    },
  ];
  return (
    <footer className="border-t border-border-subtle bg-surface-1/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-fg-muted">
            Debate anyone. Improve every round.
          </p>
          <div className="mt-4 flex gap-2">
            {SOCIALS.map(({ label, href, Glyph }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="grid h-9 w-9 place-items-center rounded-lg border border-border-subtle text-fg-muted transition-colors hover:border-brand hover:text-fg"
              >
                <Glyph className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <span className="cursor-not-allowed rounded-lg border border-border-subtle px-3 py-2 text-xs text-fg-faint">
              App Store — coming soon
            </span>
            <span className="cursor-not-allowed rounded-lg border border-border-subtle px-3 py-2 text-xs text-fg-faint">
              Google Play — coming soon
            </span>
          </div>
        </div>
        {cols.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <p className="text-sm font-semibold">{col.title}</p>
            <ul className="mt-3 space-y-2">
              {col.links.map(([label, href]) => (
                <li key={href + label}>
                  {href.startsWith("#") ? (
                    <a href={href} className="text-sm text-fg-muted hover:text-fg">
                      {label}
                    </a>
                  ) : (
                    <Link href={href} className="text-sm text-fg-muted hover:text-fg">
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-border-subtle py-5 text-center text-xs text-fg-faint">
        <p className="mx-auto max-w-3xl px-4">
          © {new Date().getFullYear()} Debates.ch
        </p>
      </div>
    </footer>
  );
}

export default function Chrome({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
