# Twenty Questions Duel

A head-to-head guessing game. Each player gets a secret item they can't see. Players take turns asking yes-or-no questions, and the opponent, who can see the secret, answers. First to name their own secret wins.

- 20 turns each. A question or a guess uses a turn; turn 20 must be a guess.
- A hint unlocks every 3 turns: 5 hints, from very vague to nearly a giveaway.
- The end screen reveals both secrets with Wikipedia links.
- No accounts, no API keys, no server of your own.

## Files

| File | What it is |
|---|---|
| `index.html` | The game |
| `catalog.js` | The items and hints. Edit this to add more. |
| `README.md` | This file |

Keep `index.html` and `catalog.js` in the same folder.

## Ways to play

**Same screen:** two players share one device. When it's time to answer, the game tells you to pass the device so only the answerer sees the secret.

**Online:** one player taps *Create match* and sends the invite link (or the 5-letter code). The friend opens it on their own device and taps *Join*. Any two people can play; you don't have to be one of them.

Online play connects the two browsers directly using PeerJS's free public connection service. Nothing to install or pay for.

## Try it on your computer

Double-click `index.html` to open it in your browser. Same-screen play works right away. Online play also works, but the *Copy invite link* button only appears once the game is hosted on a website (friends can still join with the code).

## Put it online for free (GitHub Pages)

1. Create a free account at github.com.
2. Create a new **public** repository, for example `twenty-questions-duel`.
3. Upload `index.html` and `catalog.js` (on the repo page: *Add file* → *Upload files*), then commit.
4. Go to *Settings* → *Pages*. Under *Build and deployment*, set *Source* to *Deploy from a branch*, choose the `main` branch and the `/ (root)` folder, and save.
5. After a minute or two your game is live at `https://YOUR-USERNAME.github.io/twenty-questions-duel/`. Send that link to friends.

Using git instead of the upload button:

```bash
cd twenty-questions-duel
git init
git add index.html catalog.js README.md
git commit -m "Twenty Questions Duel"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/twenty-questions-duel.git
git push -u origin main
```

Then do step 4 above.

## Adding items

Open `catalog.js`. Copy any `{ name: ..., hints: [...] },` block inside a category and edit it:

```js
{ name: "Mount Fuji", hints: [
  "It was formed by nature.",
  "It's in Asia.",
  "It's in Japan.",
  "It's an active volcano that last erupted in 1707.",
  "It's the snow-capped peak that appears in countless Japanese prints."
] },
```

- Write exactly 5 hints, from very vague to almost a giveaway.
- Never use a word from the item's name, and never name the category.
- Add `wiki: "Exact Wikipedia title"` only when the name could land on the wrong Wikipedia page, e.g. `wiki: "Titanic (1997 film)"`.
- To add a new category, add a new key such as `Sports: [ ... ],`. It appears in the game automatically.

After editing, upload the new `catalog.js` (or commit and push) and the live site updates.

## Good to know

- **Some networks block direct connections**, such as certain school, office, or hotel Wi-Fi. If friends can't connect, try a phone hotspot or home Wi-Fi.
- **Both players need the page open** during an online match. If someone drops, the game pauses; the guest can tap *Reconnect*, and either player who reloads the page can tap *Rejoin* on the home screen.
- **It's built for fun, not security.** The hints live in `catalog.js`, so a determined cheater could search the file for a hint's text.
