export type ReleaseNote = {
  tag: string;
  date: string;
  dateLabel: string;
  title: string;
  highlights: string[];
  url: string;
  href: string;
};

/** Latest 3 desktop releases. Refreshed by scripts/sync-releases.ts from GitHub. */
export const RELEASES: ReleaseNote[] = [
  {
    "tag": "v1.4.199",
    "date": "2026-09-09",
    "dateLabel": "2026年9月9日",
    "title": "The sidebar's two create aff…",
    "highlights": [
      "The sidebar's two create affordances are now one **Create** menu: **Add project** sits next to **New workspace** at every window width, with consistent labels and a keyboard-shortcut hint.",
      "Structured Native Chat gains grouped tool batches, execution details, Codex subagent activity, `/clear` and `/compact`, session rewind, resume from Agent Session History, renameable chat tabs, and structured Codex chat on native Windows.",
      "the renderer, store, terminals, native-chat journal, Git parsing, and catalog indexing的relay connects and reconnects, plus a broad performance pass更快。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.199",
    "href": "/docs/changelog#v1-4-199"
  },
  {
    "tag": "v1.4.198",
    "date": "2026-09-08",
    "dateLabel": "2026年9月8日",
    "title": "在实验设置中开启 Structured Chat 后，可…",
    "highlights": [
      "在实验设置中开启 **Structured Chat** 后，可使用改进的 Codex 聊天界面：行内文件 diff、窗格操作、更清晰的工具输出、单独停止任务，以及移动端结构化 Codex 聊天。",
      "GitHub Projects 的 Roadmap 视图改为时间线；桌面端增加标签滚动、更窄标签，并刷新了通知。",
      "工作区、渲染器、编辑器、终端、Git 与远程操作更快；SSH 中继和 Windows/WSL 恢复更稳。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.198",
    "href": "/docs/changelog#v1-4-198"
  },
  {
    "tag": "v1.4.197",
    "date": "2026-09-04",
    "dateLabel": "2026年9月4日",
    "title": "本地与远程工作区的 worktree、渲染器、编辑器、浏…",
    "highlights": [
      "本地与远程工作区的 worktree、渲染器、编辑器、浏览器、终端和 Git 操作更快。",
      "Agent 会话、Native Chat、SSH 中继恢复以及 Windows/WSL 执行更抗故障。",
      "工作区、终端、CLI、云端与跨平台可靠性进一步增强。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.197",
    "href": "/docs/changelog#v1-4-197"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
