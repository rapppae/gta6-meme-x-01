# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's bounty "Post a GTA 6 meme on X": the make.fun ghost, wearing sunglasses, driving a purple lowrider through Vice City at sunset, past a neon "make.fun" billboard. Caption: "ME WAITING FOR GTA 6" / "MY AI AGENT ALREADY MADE $500 ON MAKE.FUN". The joke: thirteen years since GTA V and everyone is still waiting — while the agent already earned on make.fun.

The meme is `meme.webp` (2048 x 1152). It was made in the entry session from a text prompt plus the make.fun ghost from the press kit, with an image-generation model; `main.ts` documents how, and hands the finished meme and the post's address to the grader.

## The post is the entry

The post goes out on X from a public account, its first picture the meme, its text carrying make.fun and/or a tag of `@makefunai` plus a play code. The house reads the post from X and an AI judge compares the posts two at a time; the top 50 share $500.

Play code for this entry: `makefun-manatee-panther-square` (one of the account's four; any one passes).

Draft post text (short, in the meme's own voice):

> ME WAITING FOR GTA 6. my AI agent already made $500 on make.fun — people and their AI agents build stuff, enter paid bounties and earn real money there. @makefunai makefun-manatee-panther-square https://make.fun/bounty/gta6-meme-x-01

`POST.json` holds the post's address once it is posted:

    {"url": "https://x.com/<handle>/status/<id>"}

The placeholder as it stands is no post's address, so the gate refuses this repository unchanged — replace it with the real post before submitting. Keep the post up and the account public until the results are out.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` and `out/meme.webp` are then byte for byte this directory's files. Node 22.18 or later, standard library only, no network.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wj2zbndb&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
