# Agent 与会话 {#agents-sessions}

一次 **agent session** 是一个 CLI Agent 在一个 worktree 的一个终端里运行。Orca 跟踪它的生命周期，让你始终知道哪些会话在干活、哪些空闲——不必点进每个标签去看。

## 状态指示 {#state-indicators}

Agent 标签和 worktree 行使用共用的状态字形：

- **Spinner** — 正在工作
- **Amber question mark** — 在等你（权限 / 需要输入）；侧栏 “Needs You” 计数使用同一字形
- **Emerald check**（dashboard）或 **emerald dot**（侧栏）— 完成 / 安静活动
- **Red dot** — 阻塞、中断或失败
- **Gray dot** — 空闲
- **No indicator** — 普通 shell，不是可识别的 Agent CLI

状态从终端的 OSC 标题序列和 Agent hooks 检测，Claude Code、Codex 以及其他若干 Agent 会发出这些。

## Agent dashboard {#agent-dashboard}

打开 **Settings → Experimental → Agent Dashboard**。Orca 在左侧栏加入 **Agent Dashboard** 条目：跨 worktree 的 Agent kanban。

你可以在 [Settings → Shortcuts](/docs/settings#shortcuts) 下为 **Toggle Agent Dashboard** 指定键盘快捷键。它没有默认绑定，并且在终端、编辑器或浏览器标签拥有焦点时仍可用。

### 列 {#columns}

- **Needs You** — 在等权限或问题
- **Working** — 正在运行
- **Done** — 已完成、你可能仍想审查的会话
- **Idle** — 约 30 分钟未报告完成的安静 Agent。在板上 **默认隐藏**；从仪表板 **board settings** 控件（齿轮）在窗口内或弹出表面上启用 **Show idle agents**——不是从全局 Experimental 设置。窗口内与弹出保持同步。

Dashboard 卡片为 SSH 工作区和已配对的 [远程 Orca 服务器](/docs/remote-servers) 显示主机徽章。悬停或聚焦徽章可看到保存的主机名，例如 **SSH host · devbox** 或 **Remote Orca host · build-host**。本地工作区不显示主机徽章。

### 打开方式 {#open-as}

**In-window** 看板在侧栏旁，或 **Pop-out** 在单独窗口。

### 搜索与过滤 {#search-and-filters}

看板工具栏包括：

- **Search** — worktree、项目或 Agent 名称（有查询或过滤活动时显示结果数）
- **Filter** — 多选 **Project**、**Workspace status** 和 **PR / MR status**（Open、Draft、Merged、Closed、No review）
- 可移除的过滤 chip 和 **Clear all filters**

### 卡片 {#cards}

- **Header** — Agent 图标、会话 **conversation name**（重命名、生成标题、AI Vault / Agent 会话标题，或回退到 worktree 名称）、状态字形
- **Preview** — 可用时的最后一条用户 / Agent 消息；否则是任务摘要
- **Footer** — 项目图标、worktree 名称（当标题已经显示会话名时），以及年龄；若有则显示缓存的审查状态。工作区状态只留在工具栏过滤里——卡片不再显示每个 worktree 的状态圆点。
- **Needs You** 卡片着琥珀色（并可显示待处理问题摘要）；**Done** 卡片着绿色；其他状态保持中性，这样着色就表示“看这里”
- 点击卡片打开/聚焦该 Agent 的活动终端
- 嵌套的 Codex/Claude 子 Agent 可以作为可展开子项出现在父行下

实验看板关闭时，worktree 卡片仍会以内联 Agent 行使用相同字形。如果看不到状态指示，该会话里的 Agent CLI 不是 Orca 能识别的——通过 agent combobox 启动它，而不是亲手键入二进制。

## 启动默认值 {#launch-defaults}

Orca 启动每个受支持的 Agent 时，都会预先加上其完全自主权限标志——Claude 用 `--dangerously-skip-permissions`，Codex 用 `--dangerously-bypass-approvals-and-sandbox`，Gemini 用 `--yolo`，选择器里其他每个 Agent 也有对应项。意图是 worktree 本身就是沙箱：Agent 可以做事，而不会被逐工具的批准提示打断流程。

若想给某个 Agent 不同的默认值，打开 **Settings → Agents**，展开该 Agent 的行，编辑其 **launch arguments**——Orca 会记住覆盖，并在之后每次启动时应用。字段旁的 **Reset** 按钮会把出厂标志放回去，如果你想还原。

## Restart 芯片 {#restart-chip}

当 Agent 退出（干净退出或崩溃）时，标签会显示 **Restart** 芯片。一点即可在同一工作目录下重新拉起同一个 Agent。Codex 的 Restart 芯片还会保留当前账户（见 [热切换 Codex 账户](/docs/agents/codex-hot-swap)）。

## 会话生命周期 {#session-lifecycle}

1. **Launch** — 从 combobox 选一个 Agent；Orca 拉起 CLI。
1. **Work** — OSC 标题更新状态；终端输出带搜索、复制和 Ghostty 主题滚动。
1. **Idle** — Orca 检测到 working→idle 转换，并发出 [Agent 完成通知](/docs/notifications)。
1. **Exit** — 进程结束；Restart 芯片出现。

> 精确检测规则见 [Orca CLI](/docs/cli/overview) 中的 `terminal wait --for tui-idle` 命令。
