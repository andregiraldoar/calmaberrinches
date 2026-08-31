// Meta Pixel + StatCounter tracking helpers (client-only)
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fbq?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _fbq?: any;
    sc_project?: number;
    sc_invisible?: number;
    sc_security?: string;
  }
}

const META_PIXEL_ID = "310181835505185";

/**
 * Inject the Meta Pixel and StatCounter scripts once on the client and fire
 * the initial PageView. Safe to call multiple times — no-ops after the first.
 */
export function initTracking() {
  if (typeof window === "undefined" || typeof window.fbq === "function") return;

  // --- Meta Pixel base code ---
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const n: any = function (...args: unknown[]) {
    if (typeof n.callMethod === "function") {
      n.callMethod.apply(n, args);
    } else {
      n.queue.push(args);
    }
  };
  if (!window._fbq) window._fbq = n;
  window.fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];

  const t = document.createElement("script");
  t.async = true;
  t.src = "https://connect.facebook.net/en_US/fbevents.js";
  const s = document.getElementsByTagName("script")[0];
  s.parentNode?.insertBefore(t, s);

  window.fbq("init", META_PIXEL_ID);
  window.fbq("track", "PageView");

  // --- StatCounter ---
  window.sc_project = 13352797;
  window.sc_invisible = 1;
  window.sc_security = "45fab5ff";
  const sc = document.createElement("script");
  sc.type = "text/javascript";
  sc.async = true;
  sc.src = "https://www.statcounter.com/counter/counter.js";
  document.body.appendChild(sc);
}

/** Fire the Meta Pixel InitiateCheckout event (no-op if pixel isn't loaded yet). */
export function trackInitiateCheckout() {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "InitiateCheckout");
  }
}

export {};
