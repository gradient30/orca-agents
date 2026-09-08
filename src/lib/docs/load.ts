const files = import.meta.glob("../../content/zh/**/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function normalize(path: string): string {
  const marker = "/content/zh/";
  const i = path.indexOf(marker);
  const rel = i >= 0 ? path.slice(i + marker.length) : path;
  return rel.replace(/\.md$/, "").replace(/\\/g, "/");
}

const bySlug = new Map<string, string>();
for (const [path, body] of Object.entries(files)) {
  bySlug.set(normalize(path), body);
}

function titleOf(body: string, slug: string): string {
  const line = body.split("\n").find((l) => l.startsWith("# "));
  return (line?.slice(2) ?? slug).replace(/\s+\{#[^}]+\}\s*$/, "").trim();
}

export function getMarkdown(slug: string): string | undefined {
  const key = slug === "" || slug === "docs" ? "index" : slug;
  return bySlug.get(key);
}

export function searchDocs(query: string): { slug: string; titleLine: string; snippet: string }[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const out: { slug: string; titleLine: string; snippet: string }[] = [];
  for (const [slug, body] of bySlug) {
    const stripped = body.replace(/\s+\{#[A-Za-z0-9_-]+\}/g, "").replace(/\*\*/g, "");
    const lower = stripped.toLowerCase();
    const idx = lower.indexOf(q);
    if (idx < 0 && !slug.toLowerCase().includes(q)) continue;
    const start = Math.max(0, idx < 0 ? 0 : idx - 40);
    const snippet = stripped.slice(start, start + 140).replace(/\n/g, " ");
    out.push({ slug, titleLine: titleOf(body, slug), snippet });
  }
  return out.slice(0, 24);
}
