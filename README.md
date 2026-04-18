# 🎂 Interactive Birthday Wish

A small interactive birthday card I built as a gift for a dear friend . Every single asset — characters, backgrounds, gifts, the letter, the note — was recreated by me in Piskel. No templates, no stock art. Inspiration was taken from pre-existing images online

> 🔗 **[Live Demo](https://ishal-r.github.io/interactive-birthday-wish/)**  

---

## What is this?

It's a pixel-art scene that lives in the browser. You land on a home screen with a bunch of characters and objects you can click on — each one takes you to a different "page" with its own background, a personal message, and music. There's a back button that brings you home and resets everything.

The whole thing is built with plain HTML, CSS, and JavaScript — no libraries, no frameworks. I wanted to keep it simple and actually understand every line I was writing.

---

## Features

- Clickable pixel-art characters and objects that each reveal something different
- Music and sound effects that change depending on which page you're on
- A back button that properly resets all state — audio, background, overlays
- All artwork hand-drawn in [Piskel](https://www.piskelapp.com/)
- Custom pixel font via Google Fonts (Pixelify Sans)

---

## Tech used

| | |
|---|---|
| HTML / CSS / JS | Everything — no frameworks |
| [Piskel](https://www.piskelapp.com/) | Drawing all the sprites and backgrounds |
| Web Audio API | Managing background music + click sounds |
| Google Fonts | Pixelify Sans for the pixel-style text |

---

## Running it locally

No setup needed. Just clone it and open the HTML file.

```bash
git clone https://github.com/ishal-r/interactive-birthday-wish.git
cd interactive-birthday-wish
```

Then open `index.html` in your browser.

> **Heads up:** Some browsers block audio on local files. If the music isn't playing, run a quick local server instead:
> ```bash
> python -m http.server 8000
> ```
> Then go to `http://localhost:8000`.

---

## Project structure

```
interactive-birthday-wish/
├── index.html            # Entry point
├── style.css             # Layout and styling
├── app.js                # All the interactivity and audio logic
│
├── background.png        # Home screen
├── back.png              # Back button
├── him.png               # Character (clickable)
├── her.png               # Character (clickable)
├── gift1.png             # Gift (clickable)
├── gift2.png             # Gift (clickable)
├── gift3.png             # Gift (clickable)
├── birth.png             # Birthday scene button
├── gift content.png      # Reveals on gift click
├── letter.png            # Reveals on letter click
├── note.png              # Reveals on note click
├── night.png             # Night scene
├── new.gif               # Animated scene
│
├── Mitski.mp3            # Background music
├── ironlung.mp3          # Scene-specific track
└── pop.mp3               # Click sound
```

---

## What I learned

Managing state in vanilla JS without any framework is harder than it sounds. Every time someone clicks a button, I had to make sure the right background was showing, the right audio was playing (and everything else was paused), and the overlay text was either visible or cleared — all without losing track of where the user "was." Getting the back button to reliably reset all of that took more debugging than I expected.

I also learned a lot about CSS absolute positioning — placing pixel-art characters precisely over a background image so they line up correctly is a surprisingly fiddly problem.

---

## Credits

All artwork is original — drawn by me in Piskel, with inspiration from pixel art styles I found online.

Music belongs to the respective artists and is used here for personal, non-commercial purposes only:
- Mitski — *[My Love Mine All Mine]*
- Radiohead  — *[Iron Lung]*

---

## Contact

**[Ishal Rahat]**
- [GitHub](https://github.com/ishal-r)
- [LinkedIn](https://www.linkedin.com/in/ishal-rahat-ba9b5830b/)
- ishalrahat15@gmail.com
