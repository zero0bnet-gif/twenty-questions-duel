# Twenty Questions Duel

A head-to-head guessing game. Each player gets a secret item they can't see. Players take turns asking yes-or-no questions, and the opponent, who can see the secret, answers. First to name their own secret wins.

- 20 turns each. A question or a guess uses a turn; turn 20 must be a guess.
- A hint unlocks every 3 turns: 5 hints, from very vague to nearly a giveaway.
- The end screen reveals both secrets with Wikipedia links.
- Optional filters narrow a category, like Movies from the 2000s or only Rock songs.
- **Rock, paper, scissors** decides who asks first.
- **Turn timer:** optional 30, 60, or 90 seconds per turn. Run out of time and the turn counts.
- **Sounds, confetti, and 50 emoji reactions** (online, reactions show up on your opponent's screen).
- **Vs computer:** play solo against the CPU on Easy, Normal or Hard.
- **Custom secrets:** instead of drawing from the catalog, each player writes the secret their opponent has to guess, then writes them a clue every 3 turns.
- No accounts, no API keys, no server of your own.

## Files

| File | What it is |
|---|---|
| `index.html` | The game |
| `catalog.js` | The items, hints, tags, and filter definitions. Edit this to add more. |
| `botdata.js` | The computer opponent's question menu and an answer for every item |
| `check-catalog.js` | Checks the catalog (and the computer's answers) for missing tags and other mistakes |
| `README.md` | This file |

Keep `index.html`, `catalog.js` and `botdata.js` in the same folder.

## Ways to play

**Same screen:** two players share one device. When it's time to answer, the game tells you to pass the device so only the answerer sees the secret.

**Vs computer:** you and the CPU each get a secret. On your turn, pick a question from the menu (type to search it) or type a guess; the CPU answers from its table. On its turn, the CPU asks about its own secret and you answer. It can't see its secret; it narrows down the possibilities from your answers. Custom secrets aren't available in this mode.

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
{ name: "Mount Fuji", tags: ["asia", "natural"], hints: [
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
- **Tag every new item for filtering** (see below).
- To add a new category, add a new key such as `Sports: [ ... ],`. It appears in the game automatically. Add its filters to `window.FILTERS` at the bottom of `catalog.js` too.

### Tags for filtering

Each item needs the fields its category's filters use. The full list of tag keys is in `window.FILTERS` at the bottom of `catalog.js`.

| Category | `year` | Tags (pick at least one from each group) |
|---|---|---|
| Celebrities | — | Field: `music`, `acting`, `sports` |
| Places | — | Region: `north_america`, `south_america`, `europe`, `asia`, `africa`, `oceania` · Type: `natural`, `landmark`, `city` |
| Movies | release year | Genre: `animated`, `action`, `drama`, `comedy` |
| Songs | release year | Genre: `rock`, `pop`, `rnb`, `hiphop` |
| Animals | — | Group: `mammal`, `bird`, `sea`, `reptile` |
| Foods | — | Type: `breakfast`, `mains`, `snacks`, `desserts` · Origin (optional): `american`, `italian`, `asian`, `mexican`, `european` |
| TV Shows | first aired | Genre: `comedy`, `drama`, `scifi`, `animated`, `reality` |
| Video Games | release year | Type: `adventure`, `shooter`, `puzzle`, `racing`, `sandbox`, `party` |
| Anime | first aired | Genre: `action`, `scifi`, `dark`, `comedy`, `sports` |
| Brands & Companies | year founded | Industry: `tech`, `food`, `retail`, `sportswear`, `entertainment`, `cars` |

Examples:

```js
{ name: "Inception", year: 2010, tags: ["action"], hints: [ ... ] },
{ name: "Penguin", tags: ["bird", "sea"], hints: [ ... ] },
```

Then check your work (needs [Node.js](https://nodejs.org)):

```bash
node check-catalog.js
```

It lists any item missing a year or tag, hints that give away the name, and how many items each filter option has (counts are only shown here, not in the game). A game needs at least 4 matching items; until the picks reach that, the next filter stays hidden and the start button reads "Pick more options."

### Computer answers

Every item also needs a row in `botdata.js` so the computer can play with it: one letter per question in that category's menu (`y` yes, `n` no, `s` sort of), in order. Genre, era, region and similar questions come from the item's tags and year automatically, so they don't need letters. Until an item has its row, it still works in games with friends but is left out of computer games; `node check-catalog.js` lists any that are missing.

After editing, upload the changed files (or commit and push) and the live site updates. To make sure players get the new list right away instead of a cached copy, also bump the numbers in `catalog.js?v=5` and `botdata.js?v=1` inside `index.html`.

## Good to know

- **Some networks block direct connections**, such as certain school, office, or hotel Wi-Fi. If friends can't connect, try a phone hotspot or home Wi-Fi.
- **Both players need the page open** during an online match. If someone drops, the game pauses; the guest can tap *Reconnect*, and either player who reloads the page can tap *Rejoin* on the home screen.
- **It's built for fun, not security.** The hints live in `catalog.js`, so a determined cheater could search the file for a hint's text.
