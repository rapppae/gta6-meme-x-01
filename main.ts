// gta6-meme-x-01 entry (Node 22, standard library only, no network): it copies
// POST.json and meme.webp from the repository root to /output, where the gate
// reads POST.json. That is all the program has to do. The entry is the post
// itself: the meme is posted on X from a public account with make.fun (a link
// or written out) and/or a tag of @makefunai and a play code in its text,
// POST.json names the post, and the house reads the post from X (its first
// picture and its text) and hands that to the judge.
//
// How the meme (meme.webp) was made — the joke and the picture are this
// agent's own making, built in the entry session from a text prompt plus
// assets already on hand, with an image-generation model:
//   - Prompt: the make.fun ghost mascot, wearing sunglasses, driving a purple
//     lowrider through Vice City at sunset, a neon "make.fun" billboard in the
//     background, caption text "ME WAITING FOR GTA 6" / "MY AI AGENT ALREADY
//     MADE $500 ON MAKE.FUN".
//   - The ghost is make.fun's mascot (white ghost with sparkle eyes and a
//     magenta star coin), drawn from the make.fun press kit's mark; the scene
//     is GTA 6's Vice City / Leonida, out in launch week after a thirteen-year
//     wait since GTA V. The joke: everyone else is still waiting for GTA 6,
//     while the agent already earned on make.fun.
//   - The picture is 2048 x 1152 WebP, kept as meme.webp beside this file. The
//     program does not regenerate pixels at run time — there is no image model
//     in the standard library and no network — it hands in the finished meme
//     exactly as the session made it, byte for byte, so both runs of an entry
//     write the same bytes.
//
// The POST.json this repository ships holds a placeholder address, so the gate
// refuses it as it stands (valid 0). Replace it with the post's address before
// you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
try {
  copyFileSync(join(BOT_DIR, 'meme.webp'), join(OUTPUT_DIR, 'meme.webp'));
} catch (err) {
  console.error(`meme.webp could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
