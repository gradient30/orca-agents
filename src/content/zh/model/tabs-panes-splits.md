# 标签、窗格与分屏 {#tabs-panes-split-layouts}

Orca 的窗格系统设计来同时盯多个 Agent 干活而不丢上下文。标签归入窗格；窗格再拆成分屏布局。

> **图示** 把标签拖到窗格边缘即可分屏——终端、diff 和浏览器标签并排

## 标签 {#tabs}

每个标签装着一件事：终端、编辑器缓冲区、浏览器、diff、PR。标签住在 **tab group** 里。

- 在组内上下拖动标签以重排。
- 把标签拖到另一组以移动它。
- 用 macOS 上的 `Cmd+Option+W` 或 Windows / Linux 上的 `Ctrl+Alt+W` 关闭活动 worktree 中每一个编辑器文件标签。
- 活动标签色条标出哪个窗格拥有焦点。

### 切换标签 {#switching-tabs}

**新安装**上的默认组合键：

| 操作 | macOS | Linux / Windows |
| ------------------------------- | ------------------------------- | ------------------------------- |
| 下一个 / 上一个标签（所有类型） | `Cmd+Shift+]` / `Cmd+Shift+[` | `Ctrl+Shift+]` / `Ctrl+Shift+[` |
| 下一个 / 上一个标签（同一类型） | `Cmd+Option+]` / `Cmd+Option+[` | `Ctrl+Alt+]` / `Ctrl+Alt+[` |
| 上一个最近使用的标签 | `Ctrl+Tab` | `Ctrl+Tab` |

在 [Settings → Shortcuts](/docs/settings) 下重新映射。已有安装会把自定义覆盖保存在 `~/.orca/keybindings.json`。

## 分屏窗格 {#split-panes}

把标签拖到窗格边缘以创建分屏：

- **右边缘** — 左右分（水平分屏）。
- **下边缘** — 上下分（垂直分屏）。

分屏可以嵌套。你可以左边放 Agent 终端，右上放 diff 视图，右下放浏览器标签——同时都在。

终端标签也可以在标签内部分屏。用终端标签菜单选择 **Split terminal right** 或 **Split terminal down**，或用活动终端窗格标题栏里的分屏按钮做向右分屏。

## 钉住的边界 {#pinned-boundaries}

窗格边界停在你放的位置。调整窗口大小不会打乱你的布局；边界位置按 worktree 保存。

## 跨 worktree 的标签组 {#tab-groups-across-worktrees}

每个 worktree 拥有自己的标签布局。切换 worktree 会换掉整棵窗格树——你的浏览器标签、终端和 diff 会按你离开时的样子重新出现。
