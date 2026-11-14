"use client";

import { useSyncExternalStore } from "react";
import { MAX_QTY } from "./cart-limits";

export { MAX_QTY };

export type CartLine = { slug: string; qty: number };

const KEY = "sns-cart-v1";
const EMPTY: CartLine[] = [];
const listeners = new Set<() => void>();

let cachedRaw: string | null = null;
let cachedLines: CartLine[] = EMPTY;

function read(): CartLine[] {
  if (typeof window === "undefined") return EMPTY;
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(KEY);
  } catch {
    return EMPTY;
  }
  if (raw === cachedRaw) return cachedLines;
  cachedRaw = raw;
  try {
    const parsed = raw ? JSON.parse(raw) : [];
    cachedLines = Array.isArray(parsed)
      ? parsed.filter(
          (l): l is CartLine =>
            l && typeof l.slug === "string" && Number.isInteger(l.qty) && l.qty > 0,
        )
      : EMPTY;
  } catch {
    cachedLines = EMPTY;
  }
  return cachedLines;
}

function write(lines: CartLine[]) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(lines));
  } catch {
    /* storage unavailable */
  }
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) cb();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}


export function addToCart(slug: string, qty = 1) {
  const lines = [...read()];
  const i = lines.findIndex((l) => l.slug === slug);
  if (i >= 0) lines[i] = { slug, qty: Math.min(MAX_QTY, lines[i].qty + qty) };
  else lines.push({ slug, qty: Math.min(MAX_QTY, qty) });
  write(lines);
}

export function setQty(slug: string, qty: number) {
  const lines = read()
    .map((l) => (l.slug === slug ? { slug, qty: Math.max(0, Math.min(MAX_QTY, qty)) } : l))
    .filter((l) => l.qty > 0);
  write(lines);
}

export function removeFromCart(slug: string) {
  write(read().filter((l) => l.slug !== slug));
}

export function clearCart() {
  write([]);
}

export function useCart(): CartLine[] {
  return useSyncExternalStore(subscribe, read, () => EMPTY);
}

export function useCartCount(): number {
  return useCart().reduce((n, l) => n + l.qty, 0);
}
