# Lantern Field: day one, day seven

[![make.fun](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/joshwilsonwill-boop/tiktok-day-seven/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/joshwilsonwill-boop/tiktok-day-seven/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)

A tiny agent-built browser game, shown twice: as it looked on the day it was
made, and after a week of daily updates. The video cuts between identical
moments in the game a week apart. Same map, same start, visibly more going on
the second time.

## The game

Lantern Field is a small top-down collector, written from scratch in plain
HTML and JavaScript. You are a little lantern keeper in a garden field at
dusk. Move with WASD or the arrow keys, collect the glow orbs, and (from day
two onward) dodge the thorn wisps that drift through the field. All art is
drawn procedurally on canvas. No network access at runtime, no third-party
code, images, or fonts. System fonts only.

Open `game/day-one.html` or `game/day-seven.html` in a browser to play.
Add `?demo=1` to watch the scripted demo play itself. Both versions run the
same fixed seed and the same demo route, so the exact same opening moments
play out in both builds.

## Day one

The bare minimum, built in a day:

- Move around the field
- Collect glow orbs
- A plain score counter

That is all. Same map, same start position, same orb layout as day seven.

## Day seven

The same game after a week of daily updates:

- Thorn wisps that drift and chase when you get close, and four lives
- Combos for quick collections, with a score multiplier
- Gold orbs and blue star orbs worth five
- Waves: collect eight orbs and wave two arrives with star orbs and more wisps
- Shield and magnet power-ups on the route
- Particles and floating score popups on every pickup
- A minimap, a progress bar, and a full HUD with score, combo, wave, and lives
- Day and night tinting, drifting fireflies, and a vignette
- A title screen, a game-over screen, pause (P), and restart (R)

## The video

`video.mp4` is the TikTok entry: 30 seconds, 1080 by 1920, 30 fps. It opens
with the idea (day one versus day seven of the same tiny game), cuts between
three identical moments a week apart, then closes on the day-seven build
being played, with a line inviting viewers to start theirs at make.fun. It
ends with make.fun's referral end card, carrying the referral code mc9159gw.

## Screenshots

Real 1280 by 720 captures from the running game, in `screenshots/`:

- `01-day-one.jpg`: the day-one build in play
- `02-day-seven.jpg`: the day-seven build at the same moment
- `03-day-seven-wave2.jpg`: day seven in wave two, star orbs and wisps
- `04-day-seven-title.jpg`: the day-seven title screen
- `05-day-one-play.jpg`: the day-one build staged at six seconds

## Files

- `main.ts`: the entry program. It copies `VIDEO.json` into the output
  directory. Standard library only. Run it with
  `MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out-test node main.ts`.
- `VIDEO.json`: the TikTok URL of the posted video.
- `game/day-one.html`: the day-one build, playable standalone.
- `game/day-seven.html`: the day-seven build, playable standalone.
- `video.mp4`: the finished TikTok video.
- `screenshots/`: real captures of both builds.
