export type ReleaseNote = {
  tag: string;
  date: string;
  dateLabel: string;
  title: string;
  highlights: string[];
  url: string;
  href: string;
};

/** Latest 3 desktop releases. Highlights = 核心摘要; href = 完整中文页锚点. */
export const RELEASES: ReleaseNote[] = [
  {
    tag: "v1.4.198",
    date: "2026-09-08",
    dateLabel: "2026年9月8日",
    title: "结构化聊天与 GitHub 路线图",
    highlights: [
      "在实验设置中开启 Structured Chat 后，Codex 聊天界面支持行内文件 diff、窗格操作、更清晰的工具输出、单独停止任务，以及移动端结构化 Codex 聊天。",
      "GitHub Projects 的 Roadmap 视图现以时间线呈现；桌面端增加标签滚动、更窄标签，并刷新了通知。",
      "工作区、渲染器、编辑器、终端、Git 与远程操作更快；SSH 中继和 Windows/WSL 恢复更稳。",
    ],
    url: "https://github.com/stablyai/orca/releases/tag/v1.4.198",
    href: "/docs/changelog#v1-4-198",
  },
  {
    tag: "v1.4.197",
    date: "2026-09-04",
    dateLabel: "2026年9月4日",
    title: "工作树与会话更稳更快",
    highlights: [
      "本地与远程工作区的 worktree、渲染器、编辑器、浏览器、终端和 Git 操作更快。",
      "Agent 会话、Native Chat、SSH 中继恢复以及 Windows/WSL 执行更抗故障。",
      "可从操作系统把 Markdown 打开到浮动工作区；工作区、终端、CLI 与云端更稳。",
    ],
    url: "https://github.com/stablyai/orca/releases/tag/v1.4.197",
    href: "/docs/changelog#v1-4-197",
  },
  {
    tag: "v1.4.196",
    date: "2026-09-03",
    dateLabel: "2026年9月3日",
    title: "切换更快，Native Chat 更可靠",
    highlights: [
      "本地、WSL 与远程工作区的 worktree 切换、Git 元数据扫描、终端启动和渲染器更新更快。",
      "Native Chat 与 Agent 会话更可靠：大命令结果、实时工具进度、图片附件与投递恢复。",
      "SSH、Windows/WSL、GitLab、更新器、启动与发布流程的可靠性覆盖更广。",
    ],
    url: "https://github.com/stablyai/orca/releases/tag/v1.4.196",
    href: "/docs/changelog#v1-4-196",
  },
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
