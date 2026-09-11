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
    "tag": "v1.4.200",
    "date": "2026-09-11",
    "dateLabel": "2026年9月11日",
    "title": "Native chat:",
    "highlights": [
      "Native chat:",
      "Orchestration:",
      "Workspace & browser:"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.200",
    "href": "/docs/changelog#v1-4-200"
  },
  {
    "tag": "v1.4.199",
    "date": "2026-09-09",
    "dateLabel": "2026年9月9日",
    "title": "Create 入口回来了，Structured Chat 更像对话",
    "highlights": [
      "侧栏「新建工作区」和「添加项目」合并进同一个 Create 按钮，任意窗口宽度都在同一位置。",
      "实验设置打开 Structured Chat 后，工具调用按批次分组、可展开执行细节、Codex 子 Agent 动态，以及 /clear、/compact；Native Windows 也支持。",
      "远程中继选区、迁移和重连更稳；终端恢复时保住输入与身份。渲染与 Git 解析更快。移动端中继测速和后台推送本版本已撤下。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.199",
    "href": "/docs/changelog#v1-4-199"
  },
  {
    "tag": "v1.4.198",
    "date": "2026-09-08",
    "dateLabel": "2026年9月8日",
    "title": "结构化聊天与 GitHub 路线图",
    "highlights": [
      "在实验设置中开启 Structured Chat 后，Codex 聊天界面支持行内文件 diff、窗格操作、更清晰的工具输出、单独停止任务，以及移动端结构化 Codex 聊天。",
      "GitHub Projects 的 Roadmap 视图现以时间线呈现；桌面端增加标签滚动、更窄标签，并刷新了通知。",
      "工作区、渲染器、编辑器、终端、Git 与远程操作更快；SSH 中继和 Windows/WSL 恢复更稳。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.198",
    "href": "/docs/changelog#v1-4-198"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
