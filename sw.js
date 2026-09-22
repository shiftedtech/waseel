// Minimal service worker so browsers treat Waseel as installable.
// No caching, so verses are always fetched fresh.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
