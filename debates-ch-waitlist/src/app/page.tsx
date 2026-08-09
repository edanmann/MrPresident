import { getBotCards } from "@/lib/bots";
import LandingPage from "@/components/landing/landing-page";

/**
 * Waitlist landing page — the same design and structure as the platform's
 * marketing page, with every call to action pointed at the waitlist.
 */

const SHOWCASE_SLUGS = [
  "donald-trump",
  "cristiano-ronaldo",
  "elon-musk",
  "barack-obama",
  "mrbeast",
  "mehdi-hasan",
];

export default function Page() {
  const showcase = getBotCards().filter((b) => SHOWCASE_SLUGS.includes(b.slug));
  return <LandingPage showcase={showcase} />;
}
