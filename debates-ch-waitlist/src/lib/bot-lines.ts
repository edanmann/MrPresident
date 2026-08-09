/**
 * What each bot says when you pick them in the arena.
 *
 * One line, in character, spoken while the avatar animates. These are the
 * opponent's opening shot — not coaching, not a summary of their stats.
 */

const CHALLENGE_LINES: Record<string, string> = {
  raj: "I've written down everything I got wrong last time. Go easy on me — actually, no, don't.",
  rian: "Okay okay okay so I've got like six arguments, maybe seven, let's just start and I'll figure it out.",
  zak: "Forget the fancy words. Just tell me why it matters to a normal person.",
  mia: "Before we argue about numbers, can we talk about who this actually happens to?",
  valentin: "I have three points, in order, with signposting. Please don't wander.",
  alex: "I'm decent at everything and terrifying at nothing. Let's see which of us drifts first.",
  valentina: "I'm going to make the room like my side before you've finished defining yours.",
  ehan: "You said it causes harm. Walk me through the middle step. Slowly.",
  jack: "I'm not waiting for your case to finish. I'm taking the first premise and I'm keeping it.",
  jan: "Bring the source. Not the vibe of the source. The source.",
  sophie: "My cat sat on the motion and honestly her take was sharper than yours. Let's go.",
  "the-barrister": "I'll be holding you to the exact words you just used. Choose the next ones carefully.",
  "the-professor": "There are two questions hiding inside that motion. Let us separate them before you commit.",
  "the-strategist": "There's one issue that decides this round. I already know which. Do you?",
  "the-diplomat": "I'll concede your strongest point in my first minute. You'll find that harder, not easier.",
  "debate-engine": "Neutral engine. No personality, no mercy, no tell. Set your difficulty and begin.",
  "elon-musk": "Strip it to physics. Most of what you're about to say is inherited assumption.",
  "mark-zuckerberg": "Your version doesn't survive contact with scale. Mine does. Let's test it.",
  "steve-jobs": "One question decides this. Everything else you're about to say is noise.",
  "warren-buffett": "I've watched this argument go around three times in forty years. Convince me this time is different.",
  "donald-trump": "Frankly, nobody debates better than me. Nobody. It's gonna be beautiful — you'll see.",
  "barack-obama": "Let me be clear: I'll grant you half of that. The other half is where you're in trouble.",
  "vladimir-putin": "You speak about principles. I will ask who enforces them.",
  "zohran-mamdani": "Whose rent goes up under your plan? Start there and we'll get somewhere.",
  fidias: "I've never done this properly and I'm still going to beat you. That's kind of the point.",
  "margaret-thatcher": "The lady is not for turning. You may proceed with your argument regardless.",
  "cristiano-ronaldo": "I've prepared more than you. That's not arrogance, that's the whole answer. Siuuu.",
  "zlatan-ibrahimovic": "Zlatan doesn't debate. Zlatan explains, and the room agrees.",
  "lionel-messi": "I'll say less than you. It'll be the part everyone remembers.",
  "jose-mourinho": "If I lose, I will explain exactly why the format was against me. If I win, I will remind you.",
  ishowspeed: "BARK BARK! Let's gooo — say something wrong, I dare you!",
  mrbeast: "I already ran this argument on a thousand people. I know which version wins. Do you?",
  pewdiepie: "We're really doing this. Fine. I've seen this exact take fourteen times, but sure.",
  ksi: "Ain't no way you're arguing that with a straight face. Alright, alright — go on then.",
  "niko-omilana": "I'm going to agree with you completely, in the most damaging way possible.",
  "mehdi-hasan": "Yes or no. Not a paragraph. Yes, or no.",
  "piers-morgan": "Answer the question. That wasn't the question. Answer the question.",
  "tucker-carlson": "I'm just asking why everyone important agrees with you. That's all. Just asking.",
  "ben-shapiro": "Let's define terms, because your premise collapses about four words in.",
  "jordan-peterson": "That's a policy question sitting on top of a much older question. Shall we dig?",
  "udai-kamath": "I'll be weighing comparatively from the first sentence. Assertions won't survive here.",
  "jack-story": "I'll make this round simple for the judge. Simple for you is not the same thing.",
  "mark-rothery": "Principle first, mechanism second, and no gap between them. Your turn.",
  "aniket-chakravorty": "The interesting impact is the one you didn't mention. I'm going to build it.",
  "david-africa": "I'm going to make the room see it. Then you can try to unsee it.",
  "tobi-leung": "I speak last and I resolve the clash. Give me something worth resolving.",
};

const FALLBACK = "Pick your side. I'll take the other one.";

/** The bot's opening shot, shown in the arena speech bubble. */
export function challengeLine(slug: string): string {
  return CHALLENGE_LINES[slug] ?? FALLBACK;
}
