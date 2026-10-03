import assert from "node:assert/strict";

const base = process.argv[2] || "http://127.0.0.1:3222";
const routes = ["/", "/works/ganesa-space", "/works/taleka", "/works/8ehradioitb", "/works/gep2025", "/works/spakbor-hills", "/works/meddocs-wjc", "/experiences", "/coming-soon", "/shortener", "/s/nonexistent-performance-check"];
let initialBytes = 0;
for (const route of routes) {
  const response = await fetch(base + route);
  assert.equal(response.status, 200, route);
  const html = await response.text();
  assert.match(html, /<nav/, `${route}: persistent navigation`);
  if (route === "/") {
    const hero = html.match(/<div[^>]*id="hola"[^>]*>/)?.[0];
    assert.ok(hero && !hero.includes("opacity-0"), "Opening text must be visible before hydration");
    const images = [...html.matchAll(/<img\b[^>]*>/g)].map(([image]) => image);
    const previews = images.filter(image => image.includes("background-image:"));
    assert.ok(previews.length >= 15, "Home images must have loading previews");
    assert.ok(previews.every(image => /sizes="[^"]+"/.test(image)), "Responsive images need sizes");
    assert.match(html, /Loading interactive contact card/, "Deferred 3D scene needs a skeleton");
    assert.match(html, /Loading tech stack/, "Deferred physics needs a skeleton");
    assert.match(html, /preload="none"/, "Audio must wait for playback");
    const scripts = new Set([...html.matchAll(/<script[^>]*src="([^"]+)"/g)].map(match => match[1]));
    for (const script of scripts) initialBytes += (await (await fetch(new URL(script, base))).arrayBuffer()).byteLength;
    assert.ok(initialBytes < 1_000_000, `Initial JavaScript too large: ${initialBytes} bytes`);
    const cssFiles = new Set([...html.matchAll(/href="([^"]+\.css)"/g)].map(match => match[1]));
    for (const file of cssFiles) assert.doesNotMatch(await (await fetch(new URL(file, base))).text(), /fonts\.googleapis\.com/, "Fonts must be self-hosted");
  }
  if (route.startsWith("/works/")) {
    assert.match(html, /background-image:/, `${route}: cover loading preview`);
    assert.match(html, /rel="preload"[^>]*as="image"/, `${route}: prioritize the work cover`);
  }
  console.log(`PASS ${route}`);
}
for (const [oldRoute, destination] of [["/works/taskly", "/works/taleka"], ["/works/draftanakitb", "/works/ganesa-space"]]) {
  const response = await fetch(base + oldRoute, { redirect: "manual" });
  assert.equal(response.status, 308);
  assert.equal(response.headers.get("location"), destination);
}
const notFound = await fetch(base + "/nonexistent-performance-check");
assert.equal(notFound.status, 404);
const chatbot = await fetch(base + "/chatbot", { redirect: "manual" });
assert.equal(chatbot.status, 307);
assert.match(chatbot.headers.get("location"), /^https:\/\/pablonification-rag-gemini2-0-pablo\.hf\.space\//);
console.log(`Initial home JavaScript: ${(initialBytes / 1e6).toFixed(2)} MB (uncompressed)`);
