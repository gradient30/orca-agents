# 用量与速率限制跟踪 {#usage-rate-limit-tracking}

Orca 读取 Claude Code、Codex、Gemini、OpenCode、Kimi Code 和 MiniMax 的本地用量状态，并在状态栏展示，这样你就能在 Agent 卡住之前知道自己离速率限制有多近。

## 显示什么 {#whats-shown}

- 当前用量相对活动账户套餐的占比。
- 5 小时、每日、每周以及 Claude Fable 每周窗口的重置时间（若适用）。
- 越过某项限制 80% 时出现的警告 chip。

## 工作原理 {#how-it-works}

Orca 读取每个 Agent 在磁盘上维护的本地用量状态（位于 `~/.claude`、`~/.codex` 以及 Gemini/OpenCode 的等价位置）。没有 API 调用，也没有额外鉴权。这意味着读数只与 Agent 自己的记账一样新鲜——数字在 Agent 写入时更新，而不是实时的。

## 多账户记账 {#multi-account-accounting}

状态栏始终反映*当前*账户。其他已配置账户可在 account switcher 中看到各自的用量。

## 用量名册 {#usage-roster}

点击状态栏中的用量段打开 **Usage** popover。它列出每个被跟踪的 provider（图标 · 名称 · 套餐 · 最近重置 · 各窗口条），按最紧的限制排在最前。使用标题中的刷新控件可重新读取本地用量状态。

- **Detailed** — 每个窗口的完整条、标签和百分比
- **Compact** — 每个 provider 只显示最紧的窗口

在 [Settings → Appearance](/docs/settings) 下，选择 **% used** 或 **% remaining** 来决定这些数字如何读。

没有实时数字的行会改为显示简短状态：**Loading usage…**、**not signed in**、**Usage unavailable**、**No usage data**，或 provider 特定的错误。Claude 和 Codex 行可以深入到账户切换；**Manage accounts** 会打开 Settings。

### 移动端 {#mobile}

在伴侣应用中，打开主机的 **Accounts** 屏幕即可看到同一套 switcher/用量读数。当 Codex 赚到 **rate-limit reset** 额度时，从该屏幕花掉一张（见 [移动伴侣](/docs/mobile)）。

## 估计费用（Stats） {#estimated-cost-stats}

Stats 分解可能会为已知模型家族显示 **estimated cost**（包括 Claude 5-class 和 Codex GPT-5.6 行）。标有 **• inferred pricing** 的行使用 Orca 的本地价格表，而不是来自 provider 的实时账单。权威花费请以 provider 控制台为准。
