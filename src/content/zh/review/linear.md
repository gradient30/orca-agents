# Linear 议题抽屉 {#linear-items-drawer}

Linear 在任务抽屉里与托管审查提供方并列。浏览、创建、更新，并把 Linear 议题链到 worktree，方式和链 GitHub 议题一样。

## 设置 {#setup}

1. 打开 [Settings → Integrations → Linear](/docs/settings)。
1. 从 [Linear → Settings → API](https://linear.app/settings/api) 粘贴个人 API token。
1. 选你想看到的 team(s)。

## 使用 Linear {#using-linear}

- 任务抽屉在一个合并视图里显示 GitHub 和 Linear 议题。
- 在 Linear 任务视图里用 **Has Workspace** 模式，只列出已经链到本地 worktree 或文件夹工作区的议题。带已附着工作区的行会打开该工作区；需要第二次 checkout 时，你仍可以从同一议题启动新的。
- 从 Linear 议题创建 worktree 会打开交互式工作区 composer（与 GitHub 条目同一路径），因此 issue-command 自动化、SSH 和文件夹工作区都会生效。Orca 会预填名称并附着议题 ID。当 Linear 为该议题暴露分支名时，Orca 用它作为 worktree 分支（与 Linear 会建议的命名相同），而不只是标题的 slug。议题详情菜单可以 **Copy suggested branch name**。
- 创建后，在工作区卡片上打开 **Edit Worktree Details**，用带 **Linear** 芯片的 **Issue** 字段（或粘贴 Linear URL）来关联或更改议题，而不必重建 worktree。GitHub 和 Linear 共用那一个字段——保存新链接会替换之前的提供方链接。
- 打开议题详情视图以更新 status、assignee、priority、labels 和 estimate 等字段。Priority 用 Linear 自己的优先级图标渲染，让抽屉和你在 Linear 里看到的一致。
- 从 Linear 议题启动 Agent 时，Orca 会把议题描述、评论和子议题中嵌入的行内图片和媒体纳入 prompt 上下文，这样 Agent 能看到 mock-up 或 bug 复现，而不用你手贴截图。
- **New Linear issue** 和 **New Linear project** 会在你不小心关掉对话框时保留 title/description（以及 project name、summary 和 brief）——Escape、Cancel、外部点击或关闭。同一应用会话中重新打开对话框时会恢复文本；草稿在成功创建后清除，应用重启后不会保留。Team/project 选择器仍使用它们平时打开时的默认值。
- 长列表用 **Load more** 操作分页——项目议题比初始抽屉装得下的还多时很有用。
- 布局选择跨重启保持：list vs board、group-by、order-by、可见列和属性过滤器。属性过滤器按 **每个 Linear workspace** 存储，所以切换 workspace 不会套用另一个 workspace 的 facets。
- Orca 按仓库记住你上次用的任务源（GitHub、Linear 或 Jira）。

> Linear status sync（创建 worktree 时把议题移到 "In Progress"）按 team 可选开启。

## Agent 与 CLI {#agents-and-cli}

Agent 可以通过 `orca linear`（以及 `orca-linear` skill）读写 Linear。该表面包括 MCP 兼容的创建/更新和列表过滤器（`save-issue`、`list-issues`、relation add/remove），以及 `--activity` 和 `--full` 等议题上下文标志。见 [CLI reference → Linear](/docs/cli/reference#linear)。

## 下一步 {#next-steps}

- [托管审查、议题与 Actions](/docs/review/github) — 任务进行中后，把代码审查状态连到 worktree。
- [从 Orca 提交并推送](/docs/review/commit-push) — 不离开 Orca 发出分支。
