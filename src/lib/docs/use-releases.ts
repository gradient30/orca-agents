import { useEffect, useState } from "react";
import { fetchDesktopReleases, type LiveRelease } from "./github-releases";
import { RELEASES, type ReleaseNote } from "./releases";
import { buildChangelogMarkdown, toReleaseNote } from "./translate-release";

const CACHE_KEY = "orca-handbook-releases-v1";
const TTL_MS = 6 * 60 * 60 * 1000;

export type ReleasesState = {
  notes: ReleaseNote[];
  markdown: string | null;
  latestTag: string;
  source: "fallback" | "cache" | "live";
  syncedAt: string | null;
  loading: boolean;
  error: string | null;
};

type CacheShape = { at: number; releases: LiveRelease[] };

const listeners = new Set<(s: ReleasesState) => void>();
let snapshot: ReleasesState = {
  notes: RELEASES,
  markdown: null,
  latestTag: RELEASES[0]?.tag ?? "",
  source: "fallback",
  syncedAt: null,
  loading: false,
  error: null,
};
let inflight: Promise<void> | null = null;

function emit() {
  for (const fn of listeners) fn(snapshot);
}

function tagsKey(tags: string[]) {
  return tags.join(",");
}

function sameAsBaked(releases: LiveRelease[]) {
  return tagsKey(releases.map((r) => r.tag)) === tagsKey(RELEASES.map((r) => r.tag));
}

function readCache(): CacheShape | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CacheShape;
    if (!parsed?.releases?.length || Date.now() - parsed.at > TTL_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeCache(releases: LiveRelease[]) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), releases } satisfies CacheShape));
  } catch {
    /* quota / private mode */
  }
}

function applyFrom(releases: LiveRelease[], source: "cache" | "live", at: number) {
  const unchanged = sameAsBaked(releases);
  snapshot = {
    notes: unchanged ? RELEASES : releases.map(toReleaseNote),
    // Keep the hand-tuned Chinese page when the official top-3 tags have not moved.
    markdown: unchanged ? null : buildChangelogMarkdown(releases),
    latestTag: releases[0]?.tag ?? snapshot.latestTag,
    source,
    syncedAt: new Date(at).toISOString(),
    loading: false,
    error: null,
  };
  emit();
}

export function ensureReleasesLoaded() {
  if (inflight) return inflight;
  // Already confirmed against GitHub in this tab — keep "live" instead of
  // dropping to cache just because a second mount (changelog page) ran.
  if (snapshot.source === "live") return Promise.resolve();
  const cached = typeof localStorage !== "undefined" ? readCache() : null;
  if (cached) {
    applyFrom(cached.releases, "cache", cached.at);
    return Promise.resolve();
  }
  snapshot = { ...snapshot, loading: true };
  emit();
  inflight = fetchDesktopReleases()
    .then((releases) => {
      if (!releases.length) throw new Error("empty");
      writeCache(releases);
      applyFrom(releases, "live", Date.now());
    })
    .catch((err: unknown) => {
      snapshot = {
        ...snapshot,
        loading: false,
        error: err instanceof Error ? err.message : "fetch failed",
      };
      emit();
    })
    .finally(() => {
      inflight = null;
    });
  return inflight;
}

export function useOrcaReleases(): ReleasesState {
  const [state, setState] = useState(snapshot);
  useEffect(() => {
    listeners.add(setState);
    void ensureReleasesLoaded();
    return () => {
      listeners.delete(setState);
    };
  }, []);
  return state;
}
