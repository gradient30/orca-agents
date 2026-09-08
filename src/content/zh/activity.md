# Agents 动态 {#agents-feed}

侧栏里的 **Agents** 入口打开一份跨所有 worktree 的线程式 Agent 事件动态——完成、阻塞提问、未读状态，以及 worktree 创建。它补充每个 worktree 的 [通知](/docs/notifications) 视图，给你一个按时间排列的分拣面。

该入口默认开启。自你上次访问以来有新事件到达时会显示未读角标；点击一条会跳到对应的 worktree 和窗格——与系统通知的交接方式相同。

在 macOS 上用 `Cmd+F`，在 Windows 和 Linux 上用 `Ctrl+F` 聚焦动态过滤器。当内嵌终端拥有焦点时，同一快捷键仍归终端使用。

## 会显示什么 {#what-shows-up}

动态里的每一条是以下之一：

- Agent 完成一轮，要么 idle，要么被问题阻塞。
- 正在创建新 worktree。
- Agent 等待输入的时间已经长到足以作为 blocking 浮出。
- Agent 最近一次回复的短预览，让你可以扫动态而不必打开每个线程。

线程按状态分组——正在运行的 Agent 钉在顶部，一眼就能看到还在干活的那些。

## 与通知的配合 {#interplay-with-notifications}

Agents 动态并不取代 [顶栏铃铛](/docs/notifications) 或系统通知——那些仍会在 Agent 完成时触发。动态是你离开 Orca 之后的补看面：不必滚动每个 worktree 去找什么变了，扫它即可。

## 下一步 {#next-steps}

- [通知与收件箱](/docs/notifications) — 系统提示、顶栏铃铛，以及按类别调校。
- [Agent 与会话](/docs/model/agents-sessions) — Orca 如何跟踪这份动态所呈现的 working/idle/blocked 转换。
