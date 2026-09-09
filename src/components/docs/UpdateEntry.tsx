import { Link } from "@tanstack/react-router";
import { ScrollText } from "lucide-react";
import { LATEST_RELEASE } from "@/lib/docs/releases";
import { useOrcaReleases } from "@/lib/docs/use-releases";

export function UpdateEntry() {
  const { latestTag, loading, source } = useOrcaReleases();
  const tag = latestTag || LATEST_RELEASE.tag;
  const isNewer = tag !== LATEST_RELEASE.tag;
  return (
    <Link
      to="/docs/$"
      params={{ _splat: "changelog" }}
      aria-label={`更新日志 ${tag}，打开完整中文译本`}
      className="flex h-11 items-center gap-1.5 rounded-md border border-border bg-bg-elevated px-2.5 text-xs text-fg-subtle hover:border-border-strong hover:text-fg"
      data-latest-tag={tag}
      data-release-source={source}
    >
      <ScrollText className="size-3.5 shrink-0" aria-hidden />
      <span className="hidden md:inline">更新</span>
      <span className="font-mono text-accent">{tag}</span>
      {isNewer ? <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden /> : null}
      {loading ? <span className="sr-only">正在同步官方 Release</span> : null}
      {source === "live" || source === "cache" ? (
        <span className="sr-only">已与官方 Releases 同步</span>
      ) : null}
    </Link>
  );
}
