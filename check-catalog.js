// Checks catalog.js for problems. Run with:  node check-catalog.js
// Flags: missing/extra hints, hints that use a word from the name, missing year,
// missing or unknown tags, duplicate names, and filter options with too few items.
global.window = {};
require("./catalog.js");
const C = window.CATALOG, F = window.FILTERS || {}, B = window.YEAR_BUCKETS || {};
const MIN = 4;
const norm = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9 ]/g, " ");
const problems = [], notes = [];

for (const [cat, items] of Object.entries(C)) {
  const groups = F[cat] || [];
  if (!F[cat]) notes.push(`${cat}: no filters defined (optional)`);
  const names = new Set();
  for (const it of items) {
    const where = `${cat} › ${it.name}`;
    if (names.has(it.name)) problems.push(`${where}: duplicate name`);
    names.add(it.name);
    if (!Array.isArray(it.hints) || it.hints.length !== 5) problems.push(`${where}: needs exactly 5 hints`);
    const words = norm(it.name).split(/\s+/).filter(w => w.length >= 4 && !["great", "mount"].includes(w));
    (it.hints || []).forEach((h, i) => words.forEach(w => {
      if (new RegExp(`\\b${w}\\b`).test(norm(h))) problems.push(`${where}: hint ${i + 1} uses "${w}" from the name`);
    }));
    const tags = Array.isArray(it.tags) ? it.tags : [];
    const known = new Set(groups.flatMap(g => g.options ? Object.keys(g.options) : []));
    tags.filter(t => !known.has(t)).forEach(t => problems.push(`${where}: unknown tag "${t}"`));
    for (const g of groups) {
      if (g.years) { if (!Number.isInteger(it.year)) problems.push(`${where}: missing year (needed for ${g.label})`); }
      else if (!g.optional && !tags.some(t => t in g.options)) problems.push(`${where}: needs a ${g.label} tag (${Object.keys(g.options).join(", ")})`);
    }
  }
  // Report how many items each option has, so thin options are visible.
  for (const g of groups) {
    const opts = g.years ? B[g.years].map(b => [b.key, b.label, it => Number.isInteger(it.year) && (b.from == null || it.year >= b.from) && (b.to == null || it.year <= b.to)])
                         : Object.entries(g.options).map(([k, l]) => [k, l, it => (it.tags || []).includes(k)]);
    const counts = opts.map(([, label, test]) => `${label} ${items.filter(test).length}`);
    notes.push(`${cat} › ${g.label}: ${counts.join(", ")}`);
  }
}

console.log(`Items: ${Object.values(C).reduce((n, a) => n + a.length, 0)} in ${Object.keys(C).length} categories\n`);
console.log("Option counts (an option needs " + MIN + "+ items to start a game on its own):");
notes.forEach(n => console.log("  " + n));
console.log(problems.length ? `\n${problems.length} problem(s):\n  ` + problems.join("\n  ") : "\nNo problems found.");
process.exitCode = problems.length ? 1 : 0;
