# 更新日志 {#changelog}

顶栏「更新」显示最近三次核心摘要；本页在打开时**自动抓取**官方 [Releases](https://github.com/stablyai/orca/releases)，并译成中文。命令、产品名、模块 scope 与 PR 编号保持英文。

> 非官方译本。数据源：`stablyai/orca` 的 GitHub Releases（跳过 mobile / android 与预发布）。

## 核心摘要 {#highlights}

| 版本 | 日期 | 一句话 |
| --- | --- | --- |
| [v1.4.199](#v1-4-199) | 2026年9月9日 | The sidebar's two create aff… |
| [v1.4.198](#v1-4-198) | 2026年9月8日 | 在实验设置中开启 Structured Chat 后，可… |
| [v1.4.197](#v1-4-197) | 2026年9月4日 | 本地与远程工作区的 worktree、渲染器、编辑器、浏… |

### v1.4.199 · The sidebar's two create aff… {#v1-4-199-summary}

2026年9月9日 · [本页全文](#v1-4-199) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.199)

- The sidebar's two create affordances are now one **Create** menu: **Add project** sits next to **New workspace** at every window width, with consistent labels and a keyboard-shortcut hint.
- Structured Native Chat gains grouped tool batches, execution details, Codex subagent activity, `/clear` and `/compact`, session rewind, resume from Agent Session History, renameable chat tabs, and structured Codex chat on native Windows.
- the renderer, store, terminals, native-chat journal, Git parsing, and catalog indexing的relay connects and reconnects, plus a broad performance pass更快。

### v1.4.198 · 在实验设置中开启 Structured Chat 后，可… {#v1-4-198-summary}

2026年9月8日 · [本页全文](#v1-4-198) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.198)

- 在实验设置中开启 **Structured Chat** 后，可使用改进的 Codex 聊天界面：行内文件 diff、窗格操作、更清晰的工具输出、单独停止任务，以及移动端结构化 Codex 聊天。
- GitHub Projects 的 Roadmap 视图改为时间线；桌面端增加标签滚动、更窄标签，并刷新了通知。
- 工作区、渲染器、编辑器、终端、Git 与远程操作更快；SSH 中继和 Windows/WSL 恢复更稳。

### v1.4.197 · 本地与远程工作区的 worktree、渲染器、编辑器、浏… {#v1-4-197-summary}

2026年9月4日 · [本页全文](#v1-4-197) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.197)

- 本地与远程工作区的 worktree、渲染器、编辑器、浏览器、终端和 Git 操作更快。
- Agent 会话、Native Chat、SSH 中继恢复以及 Windows/WSL 执行更抗故障。
- 工作区、终端、CLI、云端与跨平台可靠性进一步增强。

## 完整中文日志 {#full-notes}

## v1.4.199 The sidebar's two create aff… {#v1-4-199}

2026年9月9日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.199)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 重点变化 {#v1-4-199-notable}

- The sidebar's two create affordances are now one **Create** menu: **Add project** sits next to **New workspace** at every window width, with consistent labels and a keyboard-shortcut hint.
- Structured Native Chat gains grouped tool batches, execution details, Codex subagent activity, `/clear` and `/compact`, session rewind, resume from Agent Session History, renameable chat tabs, and structured Codex chat on native Windows.
- the renderer, store, terminals, native-chat journal, Git parsing, and catalog indexing的relay connects and reconnects, plus a broad performance pass更快。

### 产品体验 {#v1-4-199-product}

#### 工作区与项目 {#v1-4-199-workspaces}

- Unify sidebar create actions into single dropdown menu（[@AmethystLiang](https://github.com/AmethystLiang)，[#19375](https://github.com/stablyai/orca/pull/19375)）
- 修复（ui）：keep source control headers readable in narrow sidebars（[@nwparker](https://github.com/nwparker)，[#19146](https://github.com/stablyai/orca/pull/19146)）
- 修复（ui）：ignore the persistent workspace list when detecting overlays（[@nwparker](https://github.com/nwparker)，[#18881](https://github.com/stablyai/orca/pull/18881)）
- Persist agents sidebar search visibility as pairing-local preference（[@AmethystLiang](https://github.com/AmethystLiang)，[#19313](https://github.com/stablyai/orca/pull/19313)）
- 修复（sidebar）：reveal collapsed workspaces without clearing filters（[@nwparker](https://github.com/nwparker)，[#19398](https://github.com/stablyai/orca/pull/19398)）
- 修复（runtime）：stop a first status publication retiring in-flight worktree scans（[@nwparker](https://github.com/nwparker)，[#19357](https://github.com/stablyai/orca/pull/19357)）
- 修复（sidebar）：label pinned rows with their host on a multi-host sidebar（[@nwparker](https://github.com/nwparker)，[#19351](https://github.com/stablyai/orca/pull/19351)）
- 修复：avoid duplicate repository groups during catalog refresh（[@kiendle](https://github.com/kiendle)，[#19170](https://github.com/stablyai/orca/pull/19170)）

#### 编辑器、浏览器与界面 {#v1-4-199-editor-ui}

- Recover branch compare on visibility change（[@AmethystLiang](https://github.com/AmethystLiang)，[#19021](https://github.com/stablyai/orca/pull/19021)）
- Seed Cmd-J filter from sidebar scope（[@AmethystLiang](https://github.com/AmethystLiang)，[#19036](https://github.com/stablyai/orca/pull/19036)）
- 修复（browser）：select full URL on initial address bar click（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19118](https://github.com/stablyai/orca/pull/19118)）
- 改进：cmd j ranking（[@AmethystLiang](https://github.com/AmethystLiang)，[#19005](https://github.com/stablyai/orca/pull/19005)）
- 修复（gh）：log when gh/glab is killed at its deadline（[@nwparker](https://github.com/nwparker)，[#18555](https://github.com/stablyai/orca/pull/18555)）
- 修复（cmd-j）：pass browser tab ownership into palette search（[@nwparker](https://github.com/nwparker)，[#18925](https://github.com/stablyai/orca/pull/18925)）
- 修复：open editor rename after context menu releases focus（[@nwparker](https://github.com/nwparker)，[#18934](https://github.com/stablyai/orca/pull/18934)）
- 修复：avoid starting browser helpers just to reset absent sessions（[@nwparker](https://github.com/nwparker)，[#18952](https://github.com/stablyai/orca/pull/18952)）
- 修复：preserve renderer browser publication during client-hosted page updates（[@nwparker](https://github.com/nwparker)，[#18961](https://github.com/stablyai/orca/pull/18961)）
- 修复（ports）：coalesce advertised URL refresh bursts（[@nwparker](https://github.com/nwparker)，[#19150](https://github.com/stablyai/orca/pull/19150)）
- 修复（cmd-j）：remove duplicate browser ownership inputs（[@nwparker](https://github.com/nwparker)，[#19172](https://github.com/stablyai/orca/pull/19172)）
- 修复：fence browser recovery to attach inventory placements（[@nwparker](https://github.com/nwparker)，[#18910](https://github.com/stablyai/orca/pull/18910)）
- 修复（editor）：support Shift+wheel scrolling in combined diffs（[@brohoya](https://github.com/brohoya)，[#11756](https://github.com/stablyai/orca/pull/11756)）
- Defer inactive browser pages across worktree switches（[@AmethystLiang](https://github.com/AmethystLiang)，[#19326](https://github.com/stablyai/orca/pull/19326)）
- Rank activity status groups by attention level（[@AmethystLiang](https://github.com/AmethystLiang)，[#19329](https://github.com/stablyai/orca/pull/19329)）
- 修复（activity）：show working agents under "unread only" by giving working turns a read receipt（[@AmethystLiang](https://github.com/AmethystLiang)，[#19535](https://github.com/stablyai/orca/pull/19535)）
- Organize activity menu into filter and view sections（[@AmethystLiang](https://github.com/AmethystLiang)，[#19547](https://github.com/stablyai/orca/pull/19547)）
- Log error details on session kill failure（[@AmethystLiang](https://github.com/AmethystLiang)，[#19381](https://github.com/stablyai/orca/pull/19381)）

#### 设置与本地化 {#v1-4-199-settings}

- 新增：localization for activity view and sidebar（[@OrcaWin](https://github.com/OrcaWin)，[#18589](https://github.com/stablyai/orca/pull/18589)）
- 修复（i18n）：drop orphan TerminalPane.minimumContrast entries that broke main static analysis（[@nwparker](https://github.com/nwparker)，[#19566](https://github.com/stablyai/orca/pull/19566)）

### Agent 与工作流 {#v1-4-199-agents-workflow}

#### Agent 与 Native Chat {#v1-4-199-native-chat}

- 修复（chat）：stop terminal focus recovery from stealing Cmd+C in the Chat UI（[@brennanb2025](https://github.com/brennanb2025)，[#18751](https://github.com/stablyai/orca/pull/18751)）
- 新增：persistent turn-scoped chat activity indicator（[@brennanb2025](https://github.com/brennanb2025)，[#19044](https://github.com/stablyai/orca/pull/19044)）
- 修复（codex）：keep large app-server replies alive（[@brennanb2025](https://github.com/brennanb2025)，[#18590](https://github.com/stablyai/orca/pull/18590)）
- 修复（native-chat）：stop seeding a stray terminal beside a chat create（[@brennanb2025](https://github.com/brennanb2025)，[#19123](https://github.com/stablyai/orca/pull/19123)）
- 新增（native-chat）：offer the link-action popover for chat links（[@brennanb2025](https://github.com/brennanb2025)，[#19130](https://github.com/stablyai/orca/pull/19130)）
- 修复：restore the full sidebar agent row for structured Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#19137](https://github.com/stablyai/orca/pull/19137)）
- 修复（native-chat）：suppress provider user echoes in Claude and Codex（[@brennanb2025](https://github.com/brennanb2025)，[#19136](https://github.com/stablyai/orca/pull/19136)）
- 修复（native-chat）：settle a structured send the provider proves it received after the ack window（[@brennanb2025](https://github.com/brennanb2025)，[#19140](https://github.com/stablyai/orca/pull/19140)）
- 显示：provider activity in chat turn tails（[@brennanb2025](https://github.com/brennanb2025)，[#19055](https://github.com/stablyai/orca/pull/19055)）
- 修复（native-chat）：auto-rename the workspace on a 结构化聊天's first turn（[@brennanb2025](https://github.com/brennanb2025)，[#19138](https://github.com/stablyai/orca/pull/19138)）
- 修复：Native Chat completion sorting and restored activity timestamps（[@brennanb2025](https://github.com/brennanb2025)，[#19144](https://github.com/stablyai/orca/pull/19144)）
- 修复：recognize the kimi-code process as the kimi agent（[@Aladex](https://github.com/Aladex)，[#18634](https://github.com/stablyai/orca/pull/18634)）
- 修复（rate-limits）：stop reporting Grok usage as 0% when the API omits the percent（[@TimothyVang](https://github.com/TimothyVang)，[#17936](https://github.com/stablyai/orca/pull/17936)）
- 修复：MiniMax China usage routing and credential handling（[@weekbin](https://github.com/weekbin)，[#14929](https://github.com/stablyai/orca/pull/14929)）
- 修复：MiniMax credential-expiry reporting, region sync, and refresh（[@nwparker](https://github.com/nwparker)，[#19250](https://github.com/stablyai/orca/pull/19250)）
- 修复（native-chat）：remember 结构化聊天 model and effort picks（[@brennanb2025](https://github.com/brennanb2025)，[#19147](https://github.com/stablyai/orca/pull/19147)）
- 修复（native-chat）：list the slash commands and skills a structured Claude session actually loaded（[@brennanb2025](https://github.com/brennanb2025)，[#19127](https://github.com/stablyai/orca/pull/19127)）
- 新增（chat）：support structured /clear and /compact commands（[@brennanb2025](https://github.com/brennanb2025)，[#19164](https://github.com/stablyai/orca/pull/19164)）
- 新增（native-chat）：resume an Agent Session History row into a new 结构化聊天（[@brennanb2025](https://github.com/brennanb2025)，[#19176](https://github.com/stablyai/orca/pull/19176)）
- 修复（runtime）：apply the structured-chat setting to every RPC caller（[@brennanb2025](https://github.com/brennanb2025)，[#18700](https://github.com/stablyai/orca/pull/18700)）
- 修复（native-chat）：settle 结构化聊天 turns stranded by a restart（[@brennanb2025](https://github.com/brennanb2025)，[#19122](https://github.com/stablyai/orca/pull/19122)）
- 修复（codex）：distinguish personal and enterprise accounts sharing an email（[@nwparker](https://github.com/nwparker)，[#19279](https://github.com/stablyai/orca/pull/19279)）
- 修复（native-chat）：make 结构化聊天 tabs renameable（[@brennanb2025](https://github.com/brennanb2025)，[#19153](https://github.com/stablyai/orca/pull/19153)）
- 新增（native-chat）：show Codex subagent activity instead of opcode rows（[@brennanb2025](https://github.com/brennanb2025)，[#18773](https://github.com/stablyai/orca/pull/18773)）
- 修复（agent-status）：stop a stale self-authored agent title from faking a pending question（[@brennanb2025](https://github.com/brennanb2025)，[#19237](https://github.com/stablyai/orca/pull/19237)）
- 新增（chat）：add structured session rewind backend（[@brennanb2025](https://github.com/brennanb2025)，[#19235](https://github.com/stablyai/orca/pull/19235)）
- 修复（native-chat）：stop an unanswered host from reading as one that refuses 结构化聊天（[@brennanb2025](https://github.com/brennanb2025)，[#19321](https://github.com/stablyai/orca/pull/19321)）
- 修复（native-chat）：scope composer file drops to the pane that received them（[@brennanb2025](https://github.com/brennanb2025)，[#19328](https://github.com/stablyai/orca/pull/19328)）
- 显示：Native Chat message timestamps on hover（[@brennanb2025](https://github.com/brennanb2025)，[#19218](https://github.com/stablyai/orca/pull/19218)）
- 新增（native-chat）：add execution details and tool row identity（[@brennanb2025](https://github.com/brennanb2025)，[#19226](https://github.com/stablyai/orca/pull/19226)）
- 修复（native-chat）：render compaction notices, plan documents, and images（[@brennanb2025](https://github.com/brennanb2025)，[#19228](https://github.com/stablyai/orca/pull/19228)）
- 新增（native-chat）：read a tool batch as a group（[@brennanb2025](https://github.com/brennanb2025)，[#19372](https://github.com/stablyai/orca/pull/19372)）
- 修复（pi）：show input modals as waiting instead of working（[@mmarabel](https://github.com/mmarabel)，[#18836](https://github.com/stablyai/orca/pull/18836)）
- Stabilize scrollbar gutter to prevent message list layout shift（[@AmethystLiang](https://github.com/AmethystLiang)，[#19332](https://github.com/stablyai/orca/pull/19332)）
- 修复（pi）：finish the dialog-wait signal on every surface（[@nwparker](https://github.com/nwparker)，[#19533](https://github.com/stablyai/orca/pull/19533)）

#### 自动化 {#v1-4-199-automations}

- 新增（orchestration）：make multi-agent workflows durable（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#16904](https://github.com/stablyai/orca/pull/16904)）
- 修复（orchestration）：keep worker lineage across app restart (STA-6366)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19121](https://github.com/stablyai/orca/pull/19121)）
- 新增（orchestration）：orchestrate native-born 结构化聊天 sessions（[@brennanb2025](https://github.com/brennanb2025)，[#18827](https://github.com/stablyai/orca/pull/18827)）
- 修复（orchestration）：recover Codex idle after completion title race（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19243](https://github.com/stablyai/orca/pull/19243)）
- 修复（orchestration）：avoid full message scans on working terminal titles（[@brennanb2025](https://github.com/brennanb2025)，[#19390](https://github.com/stablyai/orca/pull/19390)）
- 修复（orchestration）：file federated worker mail under the coordinator Run（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19542](https://github.com/stablyai/orca/pull/19542)）
- 修复（orchestration）：refuse Task re-open under a live worker; allow stop re-issue on a stranded row（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19551](https://github.com/stablyai/orca/pull/19551)）
- 移除：settled-worker automatic resume and hibernation fences（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19544](https://github.com/stablyai/orca/pull/19544)）

#### 终端与 CLI {#v1-4-199-terminal-cli}

- 修复（terminal）：preserve ordinary foreground command names（[@nwparker](https://github.com/nwparker)，[#18882](https://github.com/stablyai/orca/pull/18882)）
- 修复：keep macOS shell ownership proof within recovery budget（[@nwparker](https://github.com/nwparker)，[#18932](https://github.com/stablyai/orca/pull/18932)）
- 修复：prefer retained provider snapshots during hidden terminal recovery（[@nwparker](https://github.com/nwparker)，[#18972](https://github.com/stablyai/orca/pull/18972)）
- 修复：preserve overlay focus during terminal mounting and layout（[@nwparker](https://github.com/nwparker)，[#18982](https://github.com/stablyai/orca/pull/18982)）
- 修复：preserve terminal command probes across control frames（[@nwparker](https://github.com/nwparker)，[#19006](https://github.com/stablyai/orca/pull/19006)）
- 修复：release floating terminal WebGL contexts while closed（[@nwparker](https://github.com/nwparker)，[#19000](https://github.com/stablyai/orca/pull/19000)）
- 修复：eliminate quadratic whitespace trimming during fullscreen scrolling（[@nwparker](https://github.com/nwparker)，[#19214](https://github.com/stablyai/orca/pull/19214)）
- 修复：repaint hidden output overflow after answered restore deadline（[@nwparker](https://github.com/nwparker)，[#18904](https://github.com/stablyai/orca/pull/18904)）
- 修复（terminal）：remount a pane left unbound by a spawn that returned no PTY id（[@brennanb2025](https://github.com/brennanb2025)，[#19223](https://github.com/stablyai/orca/pull/19223)）
- 修复（xterm）：remove scrollback decorations by identity（[@bbingz](https://github.com/bbingz)，[#13178](https://github.com/stablyai/orca/pull/13178)）
- 修复：preserve user input during terminal scrollback replay（[@nwparker](https://github.com/nwparker)，[#19075](https://github.com/stablyai/orca/pull/19075)）
- 修复：preserve terminal retirement proof across renderer publications（[@nwparker](https://github.com/nwparker)，[#19002](https://github.com/stablyai/orca/pull/19002)）
- 修复（terminal）：fold-safe CAN/SUB and double-ESC handling in partial-escape tail（[@nwparker](https://github.com/nwparker)，[#19521](https://github.com/stablyai/orca/pull/19521)）
- 修复：native PTY I/O failures disabling session termination（[@AmethystLiang](https://github.com/AmethystLiang)，[#19523](https://github.com/stablyai/orca/pull/19523)）
- 新增（terminal）：make the contrast floor user-configurable (#10754)（[@nwparker](https://github.com/nwparker)，[#18126](https://github.com/stablyai/orca/pull/18126)）

### 远程与平台 {#v1-4-199-remote}

#### SSH、中继与远程 {#v1-4-199-ssh-relay}

- 修复（ssh-relay）：daemon owns the endpoint credential; a losing start never rotates it（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19052](https://github.com/stablyai/orca/pull/19052)）
- 修复：preserve paired host sessions during startup residue cleanup（[@nwparker](https://github.com/nwparker)，[#18922](https://github.com/stablyai/orca/pull/18922)）
- 修复：honor remote terminal insertion in the calling client（[@nwparker](https://github.com/nwparker)，[#18995](https://github.com/stablyai/orca/pull/18995)）
- 修复：keep paired tab updates live after runtime terminal fallback（[@nwparker](https://github.com/nwparker)，[#19022](https://github.com/stablyai/orca/pull/19022)）
- 修复：avoid credit deadlock during large SSH PTY recovery（[@nwparker](https://github.com/nwparker)，[#19026](https://github.com/stablyai/orca/pull/19026)）
- 新增（relay）：time successful client accepts and control round trips（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19232](https://github.com/stablyai/orca/pull/19232)）
- 修复（relay）：rehome hosts to their preferred region in either direction（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19241](https://github.com/stablyai/orca/pull/19241)）
- 性能（mobile）：cut the relay reconnect critical path and admit dead sockets faster（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19236](https://github.com/stablyai/orca/pull/19236)）
- 新增（relay）：alert on far-cell placement and skewed region hints（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19253](https://github.com/stablyai/orca/pull/19253)）
- 回退（mobile）：hold the relay reconnect path and cache-first reconnect for a separate mobile pass（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19265](https://github.com/stablyai/orca/pull/19265)）
- relay: give the asia-east2 cells the regional rehome identity（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19239](https://github.com/stablyai/orca/pull/19239)）
- 修复（relay）：emit pending-conn details to hosts that advertise the capability (cell side)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19266](https://github.com/stablyai/orca/pull/19266)）
- 修复（relay）：bound control RTT samples per ping and per flush window（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19268](https://github.com/stablyai/orca/pull/19268)）
- 修复（relay-ops）：let the rehome trust probe approve the asia-east2 cells（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19275](https://github.com/stablyai/orca/pull/19275)）
- 修复（relay）：stop rejecting the near region on a cold first probe（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19233](https://github.com/stablyai/orca/pull/19233)）
- 修复（relay）：attach a phone whose accept straddles a control rebind (desktop side)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19238](https://github.com/stablyai/orca/pull/19238)）
- 新增（relay）：log the region probe and name the assigned cell（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19307](https://github.com/stablyai/orca/pull/19307)）
- 修复（relay）：never cache a region hint from a one-region catalog（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19349](https://github.com/stablyai/orca/pull/19349)）
- 修复（clipboard）：route runtime-owned SSH image paste through the runtime（[@nwparker](https://github.com/nwparker)，[#19352](https://github.com/stablyai/orca/pull/19352)）
- 修复（remote）：keep terminal tabs syncing after orphan recovery（[@shaharmor](https://github.com/shaharmor)，[#19065](https://github.com/stablyai/orca/pull/19065)）
- 修复（terminal）：remove host-retired ghost panes in paired remote splits (#17770)（[@nwparker](https://github.com/nwparker)，[#19365](https://github.com/stablyai/orca/pull/19365)）

#### Windows 与 WSL {#v1-4-199-windows-wsl}

- 修复（windows）：unblock structured Native Chat by exposing process creation time（[@brennanb2025](https://github.com/brennanb2025)，[#18986](https://github.com/stablyai/orca/pull/18986)）
- 修复（windows）：reject stale parent PID links in shutdown snapshots（[@brennanb2025](https://github.com/brennanb2025)，[#19149](https://github.com/stablyai/orca/pull/19149)）
- 修复：recognize working WSL1 without a WSL2 kernel（[@nwparker](https://github.com/nwparker)，[#19061](https://github.com/stablyai/orca/pull/19061)）
- 修复：retain MSYS shell descendants in their terminal job（[@nwparker](https://github.com/nwparker)，[#19068](https://github.com/stablyai/orca/pull/19068)）
- 新增（windows）：enable structured Codex chat on native Windows（[@brennanb2025](https://github.com/brennanb2025)，[#18519](https://github.com/stablyai/orca/pull/18519)）
- 修复（agent-hooks）：guard every Windows missing-target fallback before it reads stdin（[@nwparker](https://github.com/nwparker)，[#19415](https://github.com/stablyai/orca/pull/19415)）

#### 移动端 {#v1-4-199-mobile}

- 新增（mobile）：structured native Claude chat（[@brennanb2025](https://github.com/brennanb2025)，[#18741](https://github.com/stablyai/orca/pull/18741)）
- 新增：real background push notifications for the mobile app (#8129)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18554](https://github.com/stablyai/orca/pull/18554)）
- 回退：hold mobile push feature for user testing（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19203](https://github.com/stablyai/orca/pull/19203)）
- 修复（mobile）：stop double-scaling commit timestamps in history rows（[@blade035](https://github.com/blade035)，[#17731](https://github.com/stablyai/orca/pull/17731)）
- 新增（mobile）：draw the last known tab strip while a session reconnects（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19258](https://github.com/stablyai/orca/pull/19258)）
- 新增（mobile）：draw the last known tab strip while a session reconnects (mobile pass)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19281](https://github.com/stablyai/orca/pull/19281)）
- 新增（mobile）：time relay dial stages so diagnostics say where a slow connect went（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19245](https://github.com/stablyai/orca/pull/19245)）
- 回退（mobile）：pull the relay connect-speed mobile pass pending a smaller, verified re-land（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19348](https://github.com/stablyai/orca/pull/19348)）

### 质量与交付 {#v1-4-199-quality}

#### 性能：界面与工作区 {#v1-4-199-perf-ui}

- 性能（store）：keep the repo list's identity through workspace hydration（[@nwparker](https://github.com/nwparker)，[#19057](https://github.com/stablyai/orca/pull/19057)）
- 性能（tabs）：keep tab-model identity when reconciliation changed something else（[@nwparker](https://github.com/nwparker)，[#19063](https://github.com/stablyai/orca/pull/19063)）
- 性能（mobile）：skip the agent-status projection join when nothing changed（[@nwparker](https://github.com/nwparker)，[#19115](https://github.com/stablyai/orca/pull/19115)）
- 性能（worktrees）：stop worktree removal from replacing maps it never touched（[@nwparker](https://github.com/nwparker)，[#19058](https://github.com/stablyai/orca/pull/19058)）
- 性能（selectors）：stop two always-mounted selectors allocating per store write（[@nwparker](https://github.com/nwparker)，[#19113](https://github.com/stablyai/orca/pull/19113)）
- 性能（store）：detect Zustand rerender churn the current audit cannot see（[@nwparker](https://github.com/nwparker)，[#19059](https://github.com/stablyai/orca/pull/19059)）
- 性能（agent-status）：stop no-op retirements rebuilding the retired-pane-key map（[@nwparker](https://github.com/nwparker)，[#19142](https://github.com/stablyai/orca/pull/19142)）
- 性能（worktrees）：stop worktree teardown replacing arrays and maps it never touched（[@nwparker](https://github.com/nwparker)，[#19145](https://github.com/stablyai/orca/pull/19145)）
- 性能（renderer）：avoid per-second spinner animation events（[@OrcaWin](https://github.com/OrcaWin)，[#19407](https://github.com/stablyai/orca/pull/19407)）
- 性能：memoize ancestry when selecting foreground agents（[@OrcaWin](https://github.com/OrcaWin)，[#19502](https://github.com/stablyai/orca/pull/19502)）

#### 性能：终端与远程 {#v1-4-199-perf-terminal}

- 性能（terminals）：stop closing a tab from replacing maps it never touched（[@nwparker](https://github.com/nwparker)，[#19060](https://github.com/stablyai/orca/pull/19060)）
- 性能（terminals）：keep shutdown maps' identity when there is nothing to clear（[@nwparker](https://github.com/nwparker)，[#19112](https://github.com/stablyai/orca/pull/19112)）
- 性能（mobile）：cut the relay reconnect critical path and admit dead sockets faster (mobile pass)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19280](https://github.com/stablyai/orca/pull/19280)）
- 性能（mobile）：open a session with parallel startup RPCs and a pre-warmed terminal engine（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19260](https://github.com/stablyai/orca/pull/19260)）
- 性能（mobile）：race the direct and relay dials from t=0 on every reconnect（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19308](https://github.com/stablyai/orca/pull/19308)）
- 性能（native-chat）：bound journal reads during paged catch-up（[@nwparker](https://github.com/nwparker)，[#19360](https://github.com/stablyai/orca/pull/19360)）
- 性能（native-chat）：preserve historical tool rows while streaming（[@nwparker](https://github.com/nwparker)，[#19364](https://github.com/stablyai/orca/pull/19364)）

#### 性能：核心与基础设施 {#v1-4-199-perf-core}

- 性能：index selected team IDs and choose primary team in one pass（[@OrcaWin](https://github.com/OrcaWin)，[#19504](https://github.com/stablyai/orca/pull/19504)）
- 性能：skip Git-status indexing without eligible editors（[@OrcaWin](https://github.com/OrcaWin)，[#19437](https://github.com/stablyai/orca/pull/19437)）
- 性能：stop filesystem authorization at the first matching root（[@OrcaWin](https://github.com/OrcaWin)，[#19438](https://github.com/stablyai/orca/pull/19438)）
- 性能：index editor ownership and restored workspace projections（[@OrcaWin](https://github.com/OrcaWin)，[#19444](https://github.com/stablyai/orca/pull/19444)）
- 性能：index project table option and iteration order（[@OrcaWin](https://github.com/OrcaWin)，[#19476](https://github.com/stablyai/orca/pull/19476)）
- 性能：stop clone URL discovery at the first usable source（[@OrcaWin](https://github.com/OrcaWin)，[#19477](https://github.com/stablyai/orca/pull/19477)）
- 性能：clone only changed work-item pages（[@OrcaWin](https://github.com/OrcaWin)，[#19478](https://github.com/stablyai/orca/pull/19478)）
- 性能：use counted membership for worker transcript roster twins（[@OrcaWin](https://github.com/OrcaWin)，[#19484](https://github.com/stablyai/orca/pull/19484)）
- 性能：skip sorting when all final automation runs fit（[@OrcaWin](https://github.com/OrcaWin)，[#19485](https://github.com/stablyai/orca/pull/19485)）
- 性能：parse Git history headers without splitting commit bodies（[@OrcaWin](https://github.com/OrcaWin)，[#19486](https://github.com/stablyai/orca/pull/19486)）
- 性能：index forgotten Codex turns for bounded ordinal retention（[@OrcaWin](https://github.com/OrcaWin)，[#19488](https://github.com/stablyai/orca/pull/19488)）
- 性能：cache matched and unmatched Claude usage cwd attribution（[@OrcaWin](https://github.com/OrcaWin)，[#19489](https://github.com/stablyai/orca/pull/19489)）
- 性能：sum omitted workspace sizes without intermediate objects（[@OrcaWin](https://github.com/OrcaWin)，[#19491](https://github.com/stablyai/orca/pull/19491)）
- 性能：index VM feature restoration and precompute sorting identities（[@OrcaWin](https://github.com/OrcaWin)，[#19457](https://github.com/stablyai/orca/pull/19457)）
- 性能：reuse normalized path matchers for batch deletion（[@OrcaWin](https://github.com/OrcaWin)，[#19458](https://github.com/stablyai/orca/pull/19458)）
- 性能：normalize only retained browser history candidates（[@OrcaWin](https://github.com/OrcaWin)，[#19460](https://github.com/stablyai/orca/pull/19460)）
- 性能：index prior memberships during project identity succession（[@OrcaWin](https://github.com/OrcaWin)，[#19463](https://github.com/stablyai/orca/pull/19463)）
- 性能：precompute Jira priority and timestamp sorting keys（[@OrcaWin](https://github.com/OrcaWin)，[#19472](https://github.com/stablyai/orca/pull/19472)）
- 性能：parse external automation dates once per run（[@OrcaWin](https://github.com/OrcaWin)，[#19474](https://github.com/stablyai/orca/pull/19474)）
- 性能：lazily index case-insensitive Windows environment keys（[@OrcaWin](https://github.com/OrcaWin)，[#19483](https://github.com/stablyai/orca/pull/19483)）
- 性能：select highest usage totals without full sorting（[@OrcaWin](https://github.com/OrcaWin)，[#19490](https://github.com/stablyai/orca/pull/19490)）
- 性能：count GitLab diff line prefixes without splitting all lines（[@OrcaWin](https://github.com/OrcaWin)，[#19505](https://github.com/stablyai/orca/pull/19505)）

#### 测试与可靠性 {#v1-4-199-testing}

- 测试：exercise packaged browser compatibility in scheduled CI（[@nwparker](https://github.com/nwparker)，[#19157](https://github.com/stablyai/orca/pull/19157)）
- 测试：refresh palette identities and structured-session journal fixtures（[@nwparker](https://github.com/nwparker)，[#19165](https://github.com/stablyai/orca/pull/19165)）
- 测试：refresh paired palette host-qualified row locators（[@nwparker](https://github.com/nwparker)，[#19175](https://github.com/stablyai/orca/pull/19175)）
- 测试：cover native Wayland Hangul in isolated CI（[@nwparker](https://github.com/nwparker)，[#19174](https://github.com/stablyai/orca/pull/19174)）
- 测试（e2e）：scope paired preview link checks to confirmation（[@nwparker](https://github.com/nwparker)，[#18924](https://github.com/stablyai/orca/pull/18924)）
- 测试：await rendered remote agent placement before checking mirrors（[@nwparker](https://github.com/nwparker)，[#18983](https://github.com/stablyai/orca/pull/18983)）
- 测试：scope selected runtime project assertions to the sidebar（[@nwparker](https://github.com/nwparker)，[#19003](https://github.com/stablyai/orca/pull/19003)）
- 测试：confirm running-command prompts when closing tabs（[@nwparker](https://github.com/nwparker)，[#18965](https://github.com/stablyai/orca/pull/18965)）
- 测试：enable software WebGL for Linux CI headful specs（[@nwparker](https://github.com/nwparker)，[#19001](https://github.com/stablyai/orca/pull/19001)）
- 测试：restore snapshot path before draining hydration FIFO（[@nwparker](https://github.com/nwparker)，[#19186](https://github.com/stablyai/orca/pull/19186)）
- 测试：return paired browser state from the successful poll（[@nwparker](https://github.com/nwparker)，[#19189](https://github.com/stablyai/orca/pull/19189)）
- 测试：align worker recovery fixture with ownership policy（[@nwparker](https://github.com/nwparker)，[#19190](https://github.com/stablyai/orca/pull/19190)）
- 修复（test）：unbreak main — admit the adoption-replay create fixture through the structured-chat gate（[@nwparker](https://github.com/nwparker)，[#19246](https://github.com/stablyai/orca/pull/19246)）
- 修复（test）：give federation tests a real read-after-write sync barrier（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19262](https://github.com/stablyai/orca/pull/19262)）
- 测试（relay）：prove the pending-conn capability header reaches acceptControl（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19274](https://github.com/stablyai/orca/pull/19274)）
- 测试（ssh）：isolate the MFA fixture from the developer's real ~/.ssh（[@brennanb2025](https://github.com/brennanb2025)，[#19300](https://github.com/stablyai/orca/pull/19300)）
- 修复：sidebar create menu E2E races（[@AmethystLiang](https://github.com/AmethystLiang)，[#19448](https://github.com/stablyai/orca/pull/19448)）
- 测试：cover input in five simultaneously flooding SSH panes（[@nwparker](https://github.com/nwparker)，[#19071](https://github.com/stablyai/orca/pull/19071)）
- 测试：fix automation and browser reconciliation e2e tests（[@AmethystLiang](https://github.com/AmethystLiang)，[#19530](https://github.com/stablyai/orca/pull/19530)）

#### 发布、CI 与文档 {#v1-4-199-release-ci}

- 文档（orchestration）：never pick a worker model the user did not name（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19109](https://github.com/stablyai/orca/pull/19109)）
- skills: rewrite and trim the seven non-orchestration guides (do not merge without Jinwoo)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18724](https://github.com/stablyai/orca/pull/18724)）
- 修复（ci）：stop Android release notes exceeding the GitHub body limit（[@brennanb2025](https://github.com/brennanb2025)，[#19114](https://github.com/stablyai/orca/pull/19114)）
- 更新：mobile 0.0.48 Android download links（[@brennanb2025](https://github.com/brennanb2025)，[#19117](https://github.com/stablyai/orca/pull/19117)）
- 回退「skills: rewrite the seven non-orchestration guides to one outcome-first standard (#18724)」（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19126](https://github.com/stablyai/orca/pull/19126)）
- skills: rewrite and trim the seven non-orchestration guides（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19128](https://github.com/stablyai/orca/pull/19128)）
- 恢复：independent push gateway deployment（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19225](https://github.com/stablyai/orca/pull/19225)）
- 修复：push deployment source archive path（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19231](https://github.com/stablyai/orca/pull/19231)）
- Reorganize MiniMax modules and de-duplicate shared test state（[@nwparker](https://github.com/nwparker)，[#19197](https://github.com/stablyai/orca/pull/19197)）
- tools: add a phone-vantage relay connect benchmark（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19251](https://github.com/stablyai/orca/pull/19251)）
- 杂项（mobile）：remove stale max-lines exceptions（[@nwparker](https://github.com/nwparker)，[#19366](https://github.com/stablyai/orca/pull/19366)）
- 修复（deps）：update desktop parsers for security and bounded resource use（[@OrcaWin](https://github.com/OrcaWin)，[#19361](https://github.com/stablyai/orca/pull/19361)）
- 修复（deps）：harden cloud HTTP, WebSocket and build dependencies（[@OrcaWin](https://github.com/OrcaWin)，[#19362](https://github.com/stablyai/orca/pull/19362)）
- 杂项（mobile）：patch XML parser security in plist tooling（[@OrcaWin](https://github.com/OrcaWin)，[#19380](https://github.com/stablyai/orca/pull/19380)）
- 杂项（docs）：patch brace expansion resource exhaustion fixes（[@OrcaWin](https://github.com/OrcaWin)，[#19382](https://github.com/stablyai/orca/pull/19382)）
- 修复（deps）：update react-i18next for TypeScript 7 and translation parsing（[@OrcaWin](https://github.com/OrcaWin)，[#19378](https://github.com/stablyai/orca/pull/19378)）
- 修复（deps）：update DOMPurify for sanitizer and document-context fixes（[@OrcaWin](https://github.com/OrcaWin)，[#19377](https://github.com/stablyai/orca/pull/19377)）
- 修复（ci）：read the changed-path list past the first pipe buffer（[@nwparker](https://github.com/nwparker)，[#19409](https://github.com/stablyai/orca/pull/19409)）
- 修复（deps）：upgrade Electron to 43.6 for startup performance and crash fixes（[@OrcaWin](https://github.com/OrcaWin)，[#19369](https://github.com/stablyai/orca/pull/19369)）
- Verify failure causality in PR checks fix prompt before making changes（[@AmethystLiang](https://github.com/AmethystLiang)，[#19435](https://github.com/stablyai/orca/pull/19435)）

### 新贡献者 {#v1-4-199-contributors}

- @Aladex made their first contribution（[#18634](https://github.com/stablyai/orca/pull/18634)）
- @weekbin made their first contribution（[#14929](https://github.com/stablyai/orca/pull/14929)）
- @TimothyVang made their first contribution（[#17936](https://github.com/stablyai/orca/pull/17936)）
- @brohoya made their first contribution（[#11756](https://github.com/stablyai/orca/pull/11756)）
- @blade035 made their first contribution（[#17731](https://github.com/stablyai/orca/pull/17731)）
- @kiendle made their first contribution（[#19170](https://github.com/stablyai/orca/pull/19170)）

**完整变更对照：** [v1.4.198...v1.4.199](https://github.com/stablyai/orca/compare/v1.4.198...v1.4.199)

## v1.4.198 在实验设置中开启 Structured Chat 后，可… {#v1-4-198}

2026年9月8日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.198)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 重点变化 {#v1-4-198-notable}

- 在实验设置中开启 **Structured Chat** 后，可使用改进的 Codex 聊天界面：行内文件 diff、窗格操作、更清晰的工具输出、单独停止任务，以及移动端结构化 Codex 聊天。
- GitHub Projects 的 Roadmap 视图改为时间线；桌面端增加标签滚动、更窄标签，并刷新了通知。
- 工作区、渲染器、编辑器、终端、Git 与远程操作更快；SSH 中继和 Windows/WSL 恢复更稳。

### 产品体验 {#v1-4-198-product}

#### 工作区与项目 {#v1-4-198-workspaces}

- 修复：scope of workspace-creation-project tour target（[@AmethystLiang](https://github.com/AmethystLiang)，[#18502](https://github.com/stablyai/orca/pull/18502)）
- 修复（worktrees）：route managed worktree removal by resolved execution host（[@nwparker](https://github.com/nwparker)，[#18529](https://github.com/stablyai/orca/pull/18529)）
- 修复（worktrees）：resolve the execution host at both worktree-create entry points（[@nwparker](https://github.com/nwparker)，[#18545](https://github.com/stablyai/orca/pull/18545)）
- 保持：the 浮动工作区 above a working Native Chat pane（[@brennanb2025](https://github.com/brennanb2025)，[#18692](https://github.com/stablyai/orca/pull/18692)）
- 修复（ui）：unmount project selector before Add Project handoff（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18730](https://github.com/stablyai/orca/pull/18730)）
- 修复（sidebar）：confirm filter reset before revealing active workspace（[@nwparker](https://github.com/nwparker)，[#18708](https://github.com/stablyai/orca/pull/18708)）
- 修复（sidebar）：stop ⌘⇧↓ worktree navigation jumping to the first row（[@nwparker](https://github.com/nwparker)，[#18804](https://github.com/stablyai/orca/pull/18804)）
- 停止：evicted and expired worktree preparations（[@nwparker](https://github.com/nwparker)，[#18951](https://github.com/stablyai/orca/pull/18951)）
- 允许：worktree creation proceed during stale preparation reclamation（[@nwparker](https://github.com/nwparker)，[#18967](https://github.com/stablyai/orca/pull/18967)）
- 新增（github-projects）：render Roadmap project views as a timeline（[@NaoyaTatetsu](https://github.com/NaoyaTatetsu)，[#17795](https://github.com/stablyai/orca/pull/17795)）
- 修复（runtime）：let a scoped worktree listing report the host it could not cover（[@nwparker](https://github.com/nwparker)，[#18645](https://github.com/stablyai/orca/pull/18645)）

#### 编辑器、浏览器与界面 {#v1-4-198-editor-ui}

- 回退「文档：add Ukrainian README translation」（[@OrcaWin](https://github.com/OrcaWin)，[#18570](https://github.com/stablyai/orca/pull/18570)）
- 回退「文档：document localization workflow in AGENTS.md」（[@OrcaWin](https://github.com/OrcaWin)，[#18571](https://github.com/stablyai/orca/pull/18571)）
- 保持：attention glyph knockout white when row is selected（[@AmethystLiang](https://github.com/AmethystLiang)，[#18679](https://github.com/stablyai/orca/pull/18679)）
- 新增：tab scrollbar（[@AmethystLiang](https://github.com/AmethystLiang)，[#18526](https://github.com/stablyai/orca/pull/18526)）
- 修复：Smart create retaining a task checkout hash with Create more（[@nwparker](https://github.com/nwparker)，[#18727](https://github.com/stablyai/orca/pull/18727)）
- 修复（browser）：match loading surfaces to the Orca theme（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18738](https://github.com/stablyai/orca/pull/18738)）
- 修复（browser）：present Electron's own user agent so Cloudflare Turnstile clears（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18749](https://github.com/stablyai/orca/pull/18749)）
- 减小：minimum tab width from 88px to 72px（[@AmethystLiang](https://github.com/AmethystLiang)，[#18871](https://github.com/stablyai/orca/pull/18871)）
- 修复：favicon retention across same-origin navigations（[@AmethystLiang](https://github.com/AmethystLiang)，[#18879](https://github.com/stablyai/orca/pull/18879)）
- 修复（ci）：store vetted refs in a reftable so case-twin branches don't fail the fetch（[@nwparker](https://github.com/nwparker)，[#18970](https://github.com/stablyai/orca/pull/18970)）
- 打开：open new link should not navigate away from current link（[@AmethystLiang](https://github.com/AmethystLiang)，[#18873](https://github.com/stablyai/orca/pull/18873)）
- 支持：updating existing draft releases when regenerating notes（[@AmethystLiang](https://github.com/AmethystLiang)，[#19014](https://github.com/stablyai/orca/pull/19014)）
- 修复（source-control）：stack Retry below the too-many-changes message（[@nwparker](https://github.com/nwparker)，[#19037](https://github.com/stablyai/orca/pull/19037)）
- 修复：show agent commands once without startup polling（[@nwparker](https://github.com/nwparker)，[#18729](https://github.com/stablyai/orca/pull/18729)）

#### 设置与本地化 {#v1-4-198-settings}

- 修复（settings）：indent the Agent sleep "Sleep after" sub-setting（[@brennanb2025](https://github.com/brennanb2025)，[#18379](https://github.com/stablyai/orca/pull/18379)）
- 修复（i18n）：extract translateSearchKeyword calls so settings-search keywords reach en.json（[@imgusev](https://github.com/imgusev)，[#18040](https://github.com/stablyai/orca/pull/18040)）
- 修复（i18n）：distinguish Duplicate from Copy in Simplified Chinese（[@weibiansanjue](https://github.com/weibiansanjue)，[#18065](https://github.com/stablyai/orca/pull/18065)）
- 修复（i18n）：localize remaining onboarding UI（[@mors119](https://github.com/mors119)，[#17992](https://github.com/stablyai/orca/pull/17992)）
- 修复（i18n）：ship the onboarding integration capability strings in the boot catalog（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18539](https://github.com/stablyai/orca/pull/18539)）
- 新增（i18n）：localize Orca Account settings and navigation to Korean（[@hwantage](https://github.com/hwantage)，[#15849](https://github.com/stablyai/orca/pull/15849)）
- 新增（i18n）：add French UI locale（[@foXaCe](https://github.com/foXaCe)，[#16455](https://github.com/stablyai/orca/pull/16455)）
- 修复（i18n）：repair French locale drift breaking static analysis（[@nwparker](https://github.com/nwparker)，[#18550](https://github.com/stablyai/orca/pull/18550)）
- 修复（startup）：apply the HTTP/1.1 compatibility toggle for migrated profiles, and stop parsing the settings file pre-ready（[@nwparker](https://github.com/nwparker)，[#18621](https://github.com/stablyai/orca/pull/18621)）
- 新增（i18n）：localize onboarding flow to Japanese（[@tb-soshiro](https://github.com/tb-soshiro)，[#18787](https://github.com/stablyai/orca/pull/18787)）
- 改进：notification view（[@AmethystLiang](https://github.com/AmethystLiang)，[#18699](https://github.com/stablyai/orca/pull/18699)）
- 修复（source-control）：stack the Create PR notice's settings link below its message（[@nwparker](https://github.com/nwparker)，[#19046](https://github.com/stablyai/orca/pull/19046)）

### Agent 与工作流 {#v1-4-198-agents-workflow}

#### Agent 与 Native Chat {#v1-4-198-native-chat}

- Answer the structured-session support probe without installing the host（[@brennanb2025](https://github.com/brennanb2025)，[#18695](https://github.com/stablyai/orca/pull/18695)）
- 新增（native-chat）：restore the terminal/chat switcher for bridge chat only（[@brennanb2025](https://github.com/brennanb2025)，[#18532](https://github.com/stablyai/orca/pull/18532)）
- 修复（native-chat）：clarify active progress（[@brennanb2025](https://github.com/brennanb2025)，[#18705](https://github.com/stablyai/orca/pull/18705)）
- 新增（claude）：move structured Native Chat onto the Claude Agent SDK and enable it on macOS and Linux（[@brennanb2025](https://github.com/brennanb2025)，[#18560](https://github.com/stablyai/orca/pull/18560)）
- 新增（native-chat）：expose split and move-to-pane actions in Chat UI mode（[@brennanb2025](https://github.com/brennanb2025)，[#18714](https://github.com/stablyai/orca/pull/18714)）
- 修复（native-chat）：render Claude 结构化聊天 through the same UI as Codex（[@brennanb2025](https://github.com/brennanb2025)，[#18743](https://github.com/stablyai/orca/pull/18743)）
- 修复（native-chat）：make document paths and links clickable in chat（[@brennanb2025](https://github.com/brennanb2025)，[#18712](https://github.com/stablyai/orca/pull/18712)）
- 新增（native-chat）：render agent file edits as inline diff cards（[@brennanb2025](https://github.com/brennanb2025)，[#18765](https://github.com/stablyai/orca/pull/18765)）
- 显示：Claude background task status in Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#18757](https://github.com/stablyai/orca/pull/18757)）
- 修复（agent-session）：refuse a pre-commit structured create with an envelope（[@brennanb2025](https://github.com/brennanb2025)，[#18697](https://github.com/stablyai/orca/pull/18697)）
- 修复（native-chat）：say when a structured launch fell back to a terminal（[@brennanb2025](https://github.com/brennanb2025)，[#18762](https://github.com/stablyai/orca/pull/18762)）
- 修复（native-chat）：stop a settling handoff throwing an unhandled rejection at teardown（[@nwparker](https://github.com/nwparker)，[#18824](https://github.com/stablyai/orca/pull/18824)）
- 修复（claude）：make the recovery barrier cover an exit still climbing the close ladder（[@nwparker](https://github.com/nwparker)，[#18826](https://github.com/stablyai/orca/pull/18826)）
- 新增（native-chat）：label Codex tool rows by what the command actually did（[@brennanb2025](https://github.com/brennanb2025)，[#18760](https://github.com/stablyai/orca/pull/18760)）
- 新增（native-chat）：model Codex MCP and web-search items instead of leaking opcodes（[@brennanb2025](https://github.com/brennanb2025)，[#18763](https://github.com/stablyai/orca/pull/18763)）
- 修复（native-chat）：publish structured session status from the host so the sidebar never goes stale（[@brennanb2025](https://github.com/brennanb2025)，[#18776](https://github.com/stablyai/orca/pull/18776)）
- 新增（native-chat）：stop monitored tasks individually（[@brennanb2025](https://github.com/brennanb2025)，[#18807](https://github.com/stablyai/orca/pull/18807)）
- 修复（native-chat）：tell a pre-SQLite chat how to carry on（[@brennanb2025](https://github.com/brennanb2025)，[#18808](https://github.com/stablyai/orca/pull/18808)）
- 修复（agent-session）：never open a sibling terminal on an unproven create（[@brennanb2025](https://github.com/brennanb2025)，[#18735](https://github.com/stablyai/orca/pull/18735)）
- 修复（native-chat）：repair a 结构化聊天 tab permanently fenced by an inherited publication epoch（[@brennanb2025](https://github.com/brennanb2025)，[#18906](https://github.com/stablyai/orca/pull/18906)）
- 修复（native-chat）：resume a 结构化聊天 from Agent Session History（[@OrcaWin](https://github.com/OrcaWin)，[#18933](https://github.com/stablyai/orca/pull/18933)）
- 修复（native-chat）：honor structured routing with saved options（[@brennanb2025](https://github.com/brennanb2025)，[#19040](https://github.com/stablyai/orca/pull/19040)）

#### 自动化 {#v1-4-198-automations}

- 新增（automations）：restore column sorting on the list（[@nwparker](https://github.com/nwparker)，[#18885](https://github.com/stablyai/orca/pull/18885)）
- Shorten orchestration skill description under the Agent Skills 1024-char limit（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18683](https://github.com/stablyai/orca/pull/18683)）
- 修复（orchestration）：fence the dispatch CLI preamble so it stops rendering as headings（[@brennanb2025](https://github.com/brennanb2025)，[#18718](https://github.com/stablyai/orca/pull/18718)）
- 修复（orchestration）：typed error codes for dispatch and worker-start refusals（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18902](https://github.com/stablyai/orca/pull/18902)）
- 修复（automation）：keep explicit background launches off screen（[@nwparker](https://github.com/nwparker)，[#18898](https://github.com/stablyai/orca/pull/18898)）

#### 终端与 CLI {#v1-4-198-terminal-cli}

- 修复：use fallback shell readiness and assert fish startup timing（[@nwparker](https://github.com/nwparker)，[#18755](https://github.com/stablyai/orca/pull/18755)）
- 修复（terminal）：flush xterm's parked renderer resize when releasing the pause latch（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18510](https://github.com/stablyai/orca/pull/18510)）
- 修复（cli）：reject runtime selectors on `host list` and `environment list` (#18105)（[@nwparker](https://github.com/nwparker)，[#18405](https://github.com/stablyai/orca/pull/18405)）
- 修复（terminal）：make wrapped-line search rewind iterative and bound its scans（[@nwparker](https://github.com/nwparker)，[#18402](https://github.com/stablyai/orca/pull/18402)）
- 修复（terminals）：add equality bailouts to the tab pane-expansion actions（[@nwparker](https://github.com/nwparker)，[#18332](https://github.com/stablyai/orca/pull/18332)）
- 修复：status bar render loop in runtime target hook（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18685](https://github.com/stablyai/orca/pull/18685)）
- 修复（agents）：detect agent CLIs installed outside a version manager（[@nwparker](https://github.com/nwparker)，[#18336](https://github.com/stablyai/orca/pull/18336)）
- 修复（worktrees）：stop a failed worktree scan from being recorded as an authoritative empty listing（[@nwparker](https://github.com/nwparker)，[#18456](https://github.com/stablyai/orca/pull/18456)）
- 修复（browser-pane）：stop a dead client-hosted guest from killing the workbench（[@nwparker](https://github.com/nwparker)，[#18334](https://github.com/stablyai/orca/pull/18334)）
- 修复（terminal）：stop a hidden pane's unmeasured 80x24 from overwriting a live PTY's size on reattach（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18706](https://github.com/stablyai/orca/pull/18706)）
- 修复（runtime）：bound terminal-wait blocked-prompt rules to the live screen bottom（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18817](https://github.com/stablyai/orca/pull/18817)）

### 远程与平台 {#v1-4-198-remote}

#### SSH、中继与远程 {#v1-4-198-ssh-relay}

- 修复（relay）：stop self-closing the control socket on unknown messages（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18400](https://github.com/stablyai/orca/pull/18400)）
- 修复（dashboard）：open remote sessions from every agent reveal path（[@nwparker](https://github.com/nwparker)，[#18403](https://github.com/stablyai/orca/pull/18403)）
- 修复（cli）：report worktree-listing host coverage and stop the row cap starving remote hosts (#18104)（[@nwparker](https://github.com/nwparker)，[#18417](https://github.com/stablyai/orca/pull/18417)）
- 修复（ssh）：measure pane idleness in the unit the sweep's kill operates on（[@nwparker](https://github.com/nwparker)，[#18415](https://github.com/stablyai/orca/pull/18415)）
- 修复（ssh）：stop pane adoption certifying a death from the relay's not-found union（[@nwparker](https://github.com/nwparker)，[#18531](https://github.com/stablyai/orca/pull/18531)）
- 修复（ssh）：close the macOS relay's per-terminal pty fd leak（[@nwparker](https://github.com/nwparker)，[#18534](https://github.com/stablyai/orca/pull/18534)）
- 修复（ssh）：resolve a pane's binding from the target partition, not the stale local copy（[@nwparker](https://github.com/nwparker)，[#18546](https://github.com/stablyai/orca/pull/18546)）
- 修复（relay）：reject malformed percent-escapes on upgrade instead of throwing（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18547](https://github.com/stablyai/orca/pull/18547)）
- 修复（ssh）：stop the daemon's own services from blocking the superseded-relay reap（[@nwparker](https://github.com/nwparker)，[#18586](https://github.com/stablyai/orca/pull/18586)）
- 修复（terminal）：warn about remote work when closing the window or quitting（[@nwparker](https://github.com/nwparker)，[#18593](https://github.com/stablyai/orca/pull/18593)）
- 修复（relay）：stop taking the fleet-wide cell inventory lock on per-connection paths（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18606](https://github.com/stablyai/orca/pull/18606)）
- 修复（hosts）：resolve a folder workspace's SSH host from the repo's host, not its raw connectionId（[@nwparker](https://github.com/nwparker)，[#18598](https://github.com/stablyai/orca/pull/18598)）
- 修复（remote）：stop a disclosure list latching the mirror completeness gate（[@nwparker](https://github.com/nwparker)，[#18619](https://github.com/stablyai/orca/pull/18619)）
- 新增（relay-infra）：dynamic NAT ports and alerts for the 2026-09-04 stall signals（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18693](https://github.com/stablyai/orca/pull/18693)）
- 新增（relay）：tell the phone when its desktop is signed out（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18698](https://github.com/stablyai/orca/pull/18698)）
- 新增（relay-infra）：cell crash-rate alert and incident dashboard（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18717](https://github.com/stablyai/orca/pull/18717)）
- 新增（relay）：let cells dial Cloud SQL over private IP（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18720](https://github.com/stablyai/orca/pull/18720)）
- 修复（desktop）：never replay a refresh token after a timeout; jitter relay lease renewal（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18719](https://github.com/stablyai/orca/pull/18719)）
- 修复（relay-ops）：a thrown health fetch is not a health reading; auth probe does not require /ready（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18723](https://github.com/stablyai/orca/pull/18723)）
- 基础设施（relay）：drop the unapplied region label from runtime log metrics（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18734](https://github.com/stablyai/orca/pull/18734)）
- 修复（relay-ops）：retry a failed MIG inventory read once before calling a cell's power state unknown（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18740](https://github.com/stablyai/orca/pull/18740)）
- 修复（relay-ops）：accept monitor evidence from an ancestor commit with identical monitor code（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18754](https://github.com/stablyai/orca/pull/18754)）
- 修复（relay-ops）：retry transient admin-endpoint failures in same-cap verify and rehome jobs（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18769](https://github.com/stablyai/orca/pull/18769)）
- 修复（relay-ops）：retry freshness-only preflight failures on the first same-cap wave too（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18778](https://github.com/stablyai/orca/pull/18778)）
- 修复（relay-ops）：align the cloud-data freshness bar with Cloud Monitoring publish lag（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18798](https://github.com/stablyai/orca/pull/18798)）
- 修复：recover from an alternate shell install, and close the relay duplicate-echo gap（[@nwparker](https://github.com/nwparker)，[#18796](https://github.com/stablyai/orca/pull/18796)）
- 修复（ssh）：compile node-pty from the host's own Node headers instead of nodejs.org (STA-6674)（[@nwparker](https://github.com/nwparker)，[#18774](https://github.com/stablyai/orca/pull/18774)）
- 修复（ssh）：let the host say whether it armed the shell-ready marker（[@nwparker](https://github.com/nwparker)，[#18802](https://github.com/stablyai/orca/pull/18802)）
- 修复（relay-ops）：per-region cell latency bar and attributable preflight failures（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18877](https://github.com/stablyai/orca/pull/18877)）
- 新增（cli）：report SSH host platforms（[@nwparker](https://github.com/nwparker)，[#18896](https://github.com/stablyai/orca/pull/18896)）
- 修复（relay）：abandon dead client accepts, jitter and lengthen the control lease, fail direct probes fast（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18959](https://github.com/stablyai/orca/pull/18959)）
- 修复（sidebar）：stop a missed pointerup from hiding a remote host section（[@nwparker](https://github.com/nwparker)，[#19032](https://github.com/stablyai/orca/pull/19032)）
- 修复（mobile）：stage-aware relay dial bound so a slow cell is not hung up on（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18518](https://github.com/stablyai/orca/pull/18518)）
- 修复（mobile）：stop host streams after relay subscription cancellation（[@nwparker](https://github.com/nwparker)，[#18926](https://github.com/stablyai/orca/pull/18926)）

#### Windows 与 WSL {#v1-4-198-windows-wsl}

- 修复（windows）：make the install-dir ACL repair rescue the launch it runs in（[@nwparker](https://github.com/nwparker)，[#18361](https://github.com/stablyai/orca/pull/18361)）
- 修复（ssh）：move Windows file writes off PowerShell 5.1 stdin onto sftp（[@nwparker](https://github.com/nwparker)，[#18596](https://github.com/stablyai/orca/pull/18596)）
- 修复（relay）：release the ConPTY conin handle after teardown, not before it（[@nwparker](https://github.com/nwparker)，[#18601](https://github.com/stablyai/orca/pull/18601)）
- 修复（relay）：observe Windows PTY child processes instead of answering false（[@nwparker](https://github.com/nwparker)，[#18591](https://github.com/stablyai/orca/pull/18591)）
- 修复（pty）：close the pseudoconsole and dispose the conout worker on Windows self-exit (F24)（[@nwparker](https://github.com/nwparker)，[#18635](https://github.com/stablyai/orca/pull/18635)）
- 修复（renderer）：stop a Node-only process-table module blanking the app at boot（[@nwparker](https://github.com/nwparker)，[#18814](https://github.com/stablyai/orca/pull/18814)）
- 修复（windows）：copy the daemon host exe verbatim instead of renaming it (MDE T1036)（[@OrcaWin](https://github.com/OrcaWin)，[#17865](https://github.com/stablyai/orca/pull/17865)）
- 修复（computer-use）：run the Windows runtime as one persistent helper（[@OrcaWin](https://github.com/OrcaWin)，[#17858](https://github.com/stablyai/orca/pull/17858)）
- 修复（windows）：drop EDR-flagged -ExecutionPolicy Bypass from encoded PowerShell（[@OrcaWin](https://github.com/OrcaWin)，[#17880](https://github.com/stablyai/orca/pull/17880)）
- 修复（windows）：read command lines from the kernel, not each process's PEB（[@OrcaWin](https://github.com/OrcaWin)，[#17886](https://github.com/stablyai/orca/pull/17886)）
- 修复（windows）：scan ports natively instead of encoded PowerShell（[@OrcaWin](https://github.com/OrcaWin)，[#17861](https://github.com/stablyai/orca/pull/17861)）
- 修复（windows）：resolve npm/pnpm .cmd shims past cmd.exe（[@OrcaWin](https://github.com/OrcaWin)，[#17869](https://github.com/stablyai/orca/pull/17869)）
- 修复（windows）：sign the NSIS uninstaller via SignPath（[@OrcaWin](https://github.com/OrcaWin)，[#17868](https://github.com/stablyai/orca/pull/17868)）
- 修复（windows）：drop no-op -ExecutionPolicy Bypass from -Command spawns（[@OrcaWin](https://github.com/OrcaWin)，[#17873](https://github.com/stablyai/orca/pull/17873)）

#### 移动端 {#v1-4-198-mobile}

- 新增（mobile）：structured native Codex chat（[@brennanb2025](https://github.com/brennanb2025)，[#18074](https://github.com/stablyai/orca/pull/18074)）
- 修复（mobile）：restore terminal input when reopening worktrees（[@shaharmor](https://github.com/shaharmor)，[#16239](https://github.com/stablyai/orca/pull/16239)）
- 修复（mobile）：separate image attachment paths from following prompt text (STA-4847)（[@brennanb2025](https://github.com/brennanb2025)，[#15690](https://github.com/stablyai/orca/pull/15690)）
- 修复（native-chat）：tell old mobile builds why a 结构化聊天 is missing（[@brennanb2025](https://github.com/brennanb2025)，[#18756](https://github.com/stablyai/orca/pull/18756)）
- 新增（mobile）：port the restructured native-chat turn status and 实时工具进度（[@brennanb2025](https://github.com/brennanb2025)，[#18761](https://github.com/stablyai/orca/pull/18761)）
- Bump mobile app.json to 0.0.48（[@brennanb2025](https://github.com/brennanb2025)，[#18801](https://github.com/stablyai/orca/pull/18801)）
- 修复（mobile）：preserve iPad hardware keyboard focus（[@ramarivera](https://github.com/ramarivera)，[#12772](https://github.com/stablyai/orca/pull/12772)）
- Bump mobile Android versionCode to 16 to match the 0.0.48 release（[@brennanb2025](https://github.com/brennanb2025)，[#19101](https://github.com/stablyai/orca/pull/19101)）

### 质量与交付 {#v1-4-198-quality}

#### 性能：界面与工作区 {#v1-4-198-perf-ui}

- 性能：find mobile Markdown placeholder prefixes in one scan（[@nwparker](https://github.com/nwparker)，[#18914](https://github.com/stablyai/orca/pull/18914)）
- 性能（ipc）：index worktree owners instead of rescanning the repo list per lookup（[@nwparker](https://github.com/nwparker)，[#18416](https://github.com/stablyai/orca/pull/18416)）
- 性能（worktrees）：converge the trash sweep instead of re-walking doomed trees（[@nwparker](https://github.com/nwparker)，[#18429](https://github.com/stablyai/orca/pull/18429)）
- 性能（source-control）：sort branch entries before filtering, gate projections by view mode（[@nwparker](https://github.com/nwparker)，[#18426](https://github.com/stablyai/orca/pull/18426)）
- 性能（persistence）：stop writing every worktree metadata row twice（[@nwparker](https://github.com/nwparker)，[#18451](https://github.com/stablyai/orca/pull/18451)）
- 性能（sidebar）：stop building host projections the row model throws away（[@nwparker](https://github.com/nwparker)，[#18638](https://github.com/stablyai/orca/pull/18638)）
- 性能（sidebar）：share one natural-worktree-id scan and drop a redundant row-key join（[@nwparker](https://github.com/nwparker)，[#18647](https://github.com/stablyai/orca/pull/18647)）
- 性能（renderer）：index four projections that rescanned their inputs per keystroke（[@nwparker](https://github.com/nwparker)，[#18747](https://github.com/stablyai/orca/pull/18747)）
- 性能（worktree）：overlap base refresh with prepared checkout（[@nwparker](https://github.com/nwparker)，[#18998](https://github.com/stablyai/orca/pull/18998)）
- 性能（startup）：overlap the runtime capability refresh with the session-tabs inventory（[@nwparker](https://github.com/nwparker)，[#18460](https://github.com/stablyai/orca/pull/18460)）
- 性能（editor）：build the closing-fence pattern once per fence, not once per line（[@nwparker](https://github.com/nwparker)，[#18629](https://github.com/stablyai/orca/pull/18629)）
- 性能（right-sidebar）：cache the active checks status instead of rebuilding its cache keys per store write（[@nwparker](https://github.com/nwparker)，[#18631](https://github.com/stablyai/orca/pull/18631)）
- 性能（renderer）：stop two store selectors allocating on every write（[@nwparker](https://github.com/nwparker)，[#18632](https://github.com/stablyai/orca/pull/18632)）
- 性能（source-control）：stop reconciling selection on every panel render（[@nwparker](https://github.com/nwparker)，[#18637](https://github.com/stablyai/orca/pull/18637)）
- 性能（browser）：assemble fragmented tunnel frames once（[@nwparker](https://github.com/nwparker)，[#18893](https://github.com/stablyai/orca/pull/18893)）
- 性能（editor）：reuse Markdown source blocks while positioning review notes（[@nwparker](https://github.com/nwparker)，[#18895](https://github.com/stablyai/orca/pull/18895)）
- 性能（editor）：reuse live Markdown search matches across unrelated renders（[@nwparker](https://github.com/nwparker)，[#18903](https://github.com/stablyai/orca/pull/18903)）
- 性能（explorer）：remove redundant dotfile path filter allocation（[@nwparker](https://github.com/nwparker)，[#18929](https://github.com/stablyai/orca/pull/18929)）
- 性能（browser）：reuse decoded single-chunk upload buffers（[@nwparker](https://github.com/nwparker)，[#18960](https://github.com/stablyai/orca/pull/18960)）
- 性能（tabs）：index saved tab order during hydration repair（[@nwparker](https://github.com/nwparker)，[#18964](https://github.com/stablyai/orca/pull/18964)）
- 性能（palette）：reuse allowed quality arrays during matching（[@nwparker](https://github.com/nwparker)，[#18966](https://github.com/stablyai/orca/pull/18966)）
- 性能（renderer）：gate the tab strip's worktree subscriptions and fix the orchestration batch's self-invalidating cache（[@nwparker](https://github.com/nwparker)，[#18428](https://github.com/stablyai/orca/pull/18428)）
- 性能（renderer）：load the project-location and feedback dialogs on click（[@nwparker](https://github.com/nwparker)，[#18440](https://github.com/stablyai/orca/pull/18440)）
- 性能（renderer）：narrow the App-root badge and terminal pty-set subscriptions（[@nwparker](https://github.com/nwparker)，[#18444](https://github.com/stablyai/orca/pull/18444)）
- 性能（worktree）：remove redundant creation and terminal startup work（[@nwparker](https://github.com/nwparker)，[#18793](https://github.com/stablyai/orca/pull/18793)）
- 性能（worktrees）：classify each worktree once, defer the SSH meta index, drop the conflict-path probe（[@nwparker](https://github.com/nwparker)，[#18433](https://github.com/stablyai/orca/pull/18433)）
- 性能（remote）：read the repo catalog once per publish, not once per worktree（[@nwparker](https://github.com/nwparker)，[#18410](https://github.com/stablyai/orca/pull/18410)）
- 性能（ssh）：coalesce concurrent git.listWorktrees reads（[@nwparker](https://github.com/nwparker)，[#18419](https://github.com/stablyai/orca/pull/18419)）
- 性能（worktree）：skip remote probes with no possible result（[@nwparker](https://github.com/nwparker)，[#18821](https://github.com/stablyai/orca/pull/18821)）

#### 性能：终端与远程 {#v1-4-198-perf-terminal}

- 性能（orchestration）：bound the worker terminal archive in linear time（[@nwparker](https://github.com/nwparker)，[#18622](https://github.com/stablyai/orca/pull/18622)）
- 性能（terminal）：scan only new tail lines for the wait-blocked sentinel（[@nwparker](https://github.com/nwparker)，[#18437](https://github.com/stablyai/orca/pull/18437)）
- 性能（terminals）：spend one inspection start on a whole cadence round（[@nwparker](https://github.com/nwparker)，[#18438](https://github.com/stablyai/orca/pull/18438)）
- 性能（terminal）：stop copying every PTY chunk for two startup-error detectors（[@nwparker](https://github.com/nwparker)，[#18626](https://github.com/stablyai/orca/pull/18626)）
- 性能（terminal）：use real event-loop yields between chunked writes（[@nwparker](https://github.com/nwparker)，[#18627](https://github.com/stablyai/orca/pull/18627)）
- 性能（terminal）：skip the partial-escape-tail walk on ESC-free PTY chunks（[@nwparker](https://github.com/nwparker)，[#18748](https://github.com/stablyai/orca/pull/18748)）
- 性能（persistence）：skip rewriting unchanged terminal scrollback snapshots（[@nwparker](https://github.com/nwparker)，[#18764](https://github.com/stablyai/orca/pull/18764)）
- 性能（terminal）：cheap-tier process inspection for anchored local agent panes（[@nwparker](https://github.com/nwparker)，[#18780](https://github.com/stablyai/orca/pull/18780)）
- 性能（persistence）：stop dead SSH leases pinning metadata, retire unreachable tombstones（[@nwparker](https://github.com/nwparker)，[#18430](https://github.com/stablyai/orca/pull/18430)）
- 性能（runtime）：stop the expired-SSH-lease sweep from rescanning every tab layout（[@nwparker](https://github.com/nwparker)，[#18409](https://github.com/stablyai/orca/pull/18409)）
- 性能（relay）：per-cell inventory locks, delta counters, and a pool statement timeout（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18722](https://github.com/stablyai/orca/pull/18722)）
- 性能（relay）：bound the symlink directory probes a remote readDir fans out（[@nwparker](https://github.com/nwparker)，[#18752](https://github.com/stablyai/orca/pull/18752)）
- 性能（relay）：drain fragmented frame buffers in linear time（[@nwparker](https://github.com/nwparker)，[#18891](https://github.com/stablyai/orca/pull/18891)）
- 性能（ssh）：reuse and release relay startup buffers（[@nwparker](https://github.com/nwparker)，[#18953](https://github.com/stablyai/orca/pull/18953)）
- 性能（ssh）：reuse streamed response idle timers（[@nwparker](https://github.com/nwparker)，[#18956](https://github.com/stablyai/orca/pull/18956)）
- 性能（terminal）：gate the Command Code banner scan before building its scan windows（[@nwparker](https://github.com/nwparker)，[#18628](https://github.com/stablyai/orca/pull/18628)）
- 性能（terminals）：let idle panes share one process-table capture instead of forking their own（[@nwparker](https://github.com/nwparker)，[#18742](https://github.com/stablyai/orca/pull/18742)）

#### 性能：核心与基础设施 {#v1-4-198-perf-core}

- 性能（mobile）：cancel direct probes when their owner stops（[@nwparker](https://github.com/nwparker)，[#18940](https://github.com/stablyai/orca/pull/18940)）
- 性能（speech）：reuse the model download idle timer（[@nwparker](https://github.com/nwparker)，[#18945](https://github.com/stablyai/orca/pull/18945)）
- 性能（paths）：guard the no-op regex passes on the path-comparison hot path（[@nwparker](https://github.com/nwparker)，[#18418](https://github.com/stablyai/orca/pull/18418)）
- 性能（images）：probe raster headers instead of decoding whole payloads, memoize repo icon validation（[@nwparker](https://github.com/nwparker)，[#18421](https://github.com/stablyai/orca/pull/18421)）
- 性能（startup）：stop the persistence startup milestone from timing its own details closure（[@nwparker](https://github.com/nwparker)，[#18439](https://github.com/stablyai/orca/pull/18439)）
- 性能（persistence）：stop double-traversing the persisted session at load（[@nwparker](https://github.com/nwparker)，[#18458](https://github.com/stablyai/orca/pull/18458)）
- 性能（main）：take the idle ownership poll off the main thread and batch pending marker probes（[@nwparker](https://github.com/nwparker)，[#18425](https://github.com/stablyai/orca/pull/18425)）
- 性能（ipc）：build the filesystem allowed-root list once per authorization（[@nwparker](https://github.com/nwparker)，[#18423](https://github.com/stablyai/orca/pull/18423)）
- 性能（git）：overlap the three independent submodule status reads（[@nwparker](https://github.com/nwparker)，[#18623](https://github.com/stablyai/orca/pull/18623)）
- 性能（ports）：serve unchanged macOS listeners from remembered metadata（[@nwparker](https://github.com/nwparker)，[#18650](https://github.com/stablyai/orca/pull/18650)）
- 性能（persistence）：stop the session write re-scanning and rebuilding unchanged state（[@nwparker](https://github.com/nwparker)，[#18739](https://github.com/stablyai/orca/pull/18739)）
- 性能（repos）：avoid quadratic icon source scans（[@nwparker](https://github.com/nwparker)，[#18892](https://github.com/stablyai/orca/pull/18892)）
- 性能（watcher）：skip remaining filesystem checks after cancellation（[@nwparker](https://github.com/nwparker)，[#18931](https://github.com/stablyai/orca/pull/18931)）
- 性能（skills）：skip symlink probes beyond discovery depth（[@nwparker](https://github.com/nwparker)，[#18937](https://github.com/stablyai/orca/pull/18937)）
- 性能（jira）：preserve replacement attachment download singleflight（[@nwparker](https://github.com/nwparker)，[#18944](https://github.com/stablyai/orca/pull/18944)）
- 性能（search）：assemble fragmented subprocess lines incrementally（[@nwparker](https://github.com/nwparker)，[#18973](https://github.com/stablyai/orca/pull/18973)）
- 性能（startup）：stop queueing window creation behind the proxy apply and i18n（[@nwparker](https://github.com/nwparker)，[#18436](https://github.com/stablyai/orca/pull/18436)）
- 性能（settings）：commit free-text account settings on a debounce, not per keystroke（[@nwparker](https://github.com/nwparker)，[#18651](https://github.com/stablyai/orca/pull/18651)）
- 性能（claude-usage）：reject non-assistant transcript lines before parsing them（[@nwparker](https://github.com/nwparker)，[#18640](https://github.com/stablyai/orca/pull/18640)）
- 性能（native-chat）：stop rebuilding every transcript row on every stream frame（[@nwparker](https://github.com/nwparker)，[#18744](https://github.com/stablyai/orca/pull/18744)）
- 性能（automations）：reuse collation setup when sorting names（[@nwparker](https://github.com/nwparker)，[#18823](https://github.com/stablyai/orca/pull/18823)）
- 性能（orchestration）：project explicit columns so the graph publish stops recompiling SQL（[@nwparker](https://github.com/nwparker)，[#18420](https://github.com/stablyai/orca/pull/18420)）
- 性能（orchestration）：project task columns so task reads hit the statement cache（[@nwparker](https://github.com/nwparker)，[#18641](https://github.com/stablyai/orca/pull/18641)）
- 性能（agent-hooks）：find spool newlines with Buffer.indexOf, not a per-byte loop（[@nwparker](https://github.com/nwparker)，[#18639](https://github.com/stablyai/orca/pull/18639)）
- 性能（agent-hooks）：stop cloning the whole status roster on every hook event（[@nwparker](https://github.com/nwparker)，[#18642](https://github.com/stablyai/orca/pull/18642)）
- 性能（cli）：skip feature formatters during help and error startup（[@nwparker](https://github.com/nwparker)，[#18923](https://github.com/stablyai/orca/pull/18923)）
- 性能（hooks）：use native reverse search for transcript lines（[@nwparker](https://github.com/nwparker)，[#18936](https://github.com/stablyai/orca/pull/18936)）
- 性能（cli）：skip impossible typo distance comparisons（[@nwparker](https://github.com/nwparker)，[#18977](https://github.com/stablyai/orca/pull/18977)）
- 性能（windows）：split the process table into two flag sets（[@OrcaWin](https://github.com/OrcaWin)，[#17866](https://github.com/stablyai/orca/pull/17866)）
- 新增（perf）：lint repeated sort setup and schedule regression contracts（[@nwparker](https://github.com/nwparker)，[#18822](https://github.com/stablyai/orca/pull/18822)）
- 性能：decode fragmented CLI replies without repeated scans（[@nwparker](https://github.com/nwparker)，[#18909](https://github.com/stablyai/orca/pull/18909)）
- 性能：avoid file-to-file scans when selecting deletion roots（[@nwparker](https://github.com/nwparker)，[#18913](https://github.com/stablyai/orca/pull/18913)）
- 性能：avoid repeated Quick Open exclusion string allocations（[@nwparker](https://github.com/nwparker)，[#18916](https://github.com/stablyai/orca/pull/18916)）
- 性能：skip unrelated shared symlink probes during Git status（[@nwparker](https://github.com/nwparker)，[#18918](https://github.com/stablyai/orca/pull/18918)）
- 性能：avoid splitting every path during file autocomplete（[@nwparker](https://github.com/nwparker)，[#18919](https://github.com/stablyai/orca/pull/18919)）
- 性能：avoid rescanning emitted source in analysis guards（[@nwparker](https://github.com/nwparker)，[#18920](https://github.com/stablyai/orca/pull/18920)）
- 性能：remember equivalent session tab source identities（[@nwparker](https://github.com/nwparker)，[#18976](https://github.com/stablyai/orca/pull/18976)）
- 性能：avoid repeated whitespace scans in diagnostic redaction（[@nwparker](https://github.com/nwparker)，[#18908](https://github.com/stablyai/orca/pull/18908)）

#### 测试与可靠性 {#v1-4-198-testing}

- 测试（e2e）：follow current sidebar project and activity actions（[@nwparker](https://github.com/nwparker)，[#18878](https://github.com/stablyai/orca/pull/18878)）
- 测试（renderer）：pin the runtime-target selector identity stability that #18685 fixed（[@nwparker](https://github.com/nwparker)，[#18625](https://github.com/stablyai/orca/pull/18625)）
- 测试（child-process）：lower DIRECT_IMPORTER_PIN to the ground two PRs took（[@OrcaWin](https://github.com/OrcaWin)，[#19009](https://github.com/stablyai/orca/pull/19009)）
- 测试（pty）：make the F24 patch pins catch the regressions they name（[@nwparker](https://github.com/nwparker)，[#18660](https://github.com/stablyai/orca/pull/18660)）
- 测试（e2e）：stabilize terminal launch and rename menu fixtures（[@nwparker](https://github.com/nwparker)，[#18928](https://github.com/stablyai/orca/pull/18928)）
- 测试（cloud）：derive both reachability directions for the relay inventory census（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18524](https://github.com/stablyai/orca/pull/18524)）
- 测试（e2e）：fence SSH recovery and release exited Electron pipes（[@nwparker](https://github.com/nwparker)，[#18880](https://github.com/stablyai/orca/pull/18880)）
- 修复（cloud）：run the rehome control job under pipefail（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18537](https://github.com/stablyai/orca/pull/18537)）
- 修复（ports）：route the status-bar popover scan to the workspace's host（[@iverJisty](https://github.com/iverJisty)，[#17048](https://github.com/stablyai/orca/pull/17048)）
- 修复（crash-reporting）：bound replay-guard wedge bursts in the ring without losing their spans（[@nwparker](https://github.com/nwparker)，[#18441](https://github.com/stablyai/orca/pull/18441)）
- 修复（crash-reporting）：stop claiming kills that never landed, and leave proof when the own-Chromium pid set is unreadable（[@nwparker](https://github.com/nwparker)，[#18578](https://github.com/stablyai/orca/pull/18578)）
- 修复（crash-reporting）：sample system memory before the process is gone（[@nwparker](https://github.com/nwparker)，[#18356](https://github.com/stablyai/orca/pull/18356)）
- 修复（orca-profiles）：tell the renderer when a cloud session is revoked（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18694](https://github.com/stablyai/orca/pull/18694)）
- 修复（crash-reporting）：make the own-Chromium gate a real choke point, and stop a refusal leaking the root（[@nwparker](https://github.com/nwparker)，[#18459](https://github.com/stablyai/orca/pull/18459)）
- 修复（recovery）：fail a renderer recovery reload that never loads, instead of leaving a dead window（[@nwparker](https://github.com/nwparker)，[#18466](https://github.com/stablyai/orca/pull/18466)）
- 修复（test）：stop detached git maintenance racing the divergence fixture teardown（[@nwparker](https://github.com/nwparker)，[#18810](https://github.com/stablyai/orca/pull/18810)）
- 修复（cloud）：let the same-cap roll isolate Asia cells（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18811](https://github.com/stablyai/orca/pull/18811)）
- 修复（cloud）：validate protocol-0 same-cap cell plans without rehome trust lines（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18818](https://github.com/stablyai/orca/pull/18818)）
- 修复（cloud）：bound and yield the relay's global cell-inventory lock（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18521](https://github.com/stablyai/orca/pull/18521)）
- 修复（cloud）：retry the committed-winner collision codes in relay schema startup（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18553](https://github.com/stablyai/orca/pull/18553)）
- 修复（cloud）：recalibrate the relay monitor's exhausted-retry freeze to a measured bar（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18569](https://github.com/stablyai/orca/pull/18569)）
- 修复（cloud）：recalibrate the relay monitor's postgres-retry freeze to a measured bar（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18580](https://github.com/stablyai/orca/pull/18580)）
- 修复（git）：share one failed-command error-text reader between local and the SSH 中继（[@nwparker](https://github.com/nwparker)，[#18398](https://github.com/stablyai/orca/pull/18398)）
- 测试：preserve Docker context in isolated VM recipes（[@nwparker](https://github.com/nwparker)，[#18884](https://github.com/stablyai/orca/pull/18884)）
- 测试：isolate native crash restoration and refresh stale fixtures（[@nwparker](https://github.com/nwparker)，[#18883](https://github.com/stablyai/orca/pull/18883)）
- 测试：pin worker visibility fixture command and handle（[@nwparker](https://github.com/nwparker)，[#18897](https://github.com/stablyai/orca/pull/18897)）
- 测试：canonicalize setup fixture paths before worktree lookup（[@nwparker](https://github.com/nwparker)，[#18912](https://github.com/stablyai/orca/pull/18912)）
- 测试：align desktop platform oracles with native behavior（[@nwparker](https://github.com/nwparker)，[#18915](https://github.com/stablyai/orca/pull/18915)）
- 测试：follow sidebar reveal confirmation with a stable workspace target（[@nwparker](https://github.com/nwparker)，[#18921](https://github.com/stablyai/orca/pull/18921)）
- 测试：pin terminal Codex home to an explicit managed account（[@nwparker](https://github.com/nwparker)，[#18935](https://github.com/stablyai/orca/pull/18935)）
- 测试：deliver real terminal input and preserve setup reports（[@nwparker](https://github.com/nwparker)，[#18939](https://github.com/stablyai/orca/pull/18939)）
- 测试：isolate skill cloud fixture ports across workers（[@nwparker](https://github.com/nwparker)，[#18942](https://github.com/stablyai/orca/pull/18942)）
- 测试：align Source Control AI generation fixtures（[@nwparker](https://github.com/nwparker)，[#18941](https://github.com/stablyai/orca/pull/18941)）
- 测试：keep artifact share fixtures unexpired across calendar dates（[@nwparker](https://github.com/nwparker)，[#18955](https://github.com/stablyai/orca/pull/18955)）
- 测试：make SSH artifact regression fixtures reliable at narrow widths（[@nwparker](https://github.com/nwparker)，[#18947](https://github.com/stablyai/orca/pull/18947)）
- 测试：order restart fixture readiness around daemon recovery（[@nwparker](https://github.com/nwparker)，[#18949](https://github.com/stablyai/orca/pull/18949)）
- 测试：isolate Source Control generation from shared repository remotes（[@nwparker](https://github.com/nwparker)，[#18962](https://github.com/stablyai/orca/pull/18962)）
- 修复（hooks）：register the Claude hook script directly on Windows (#18875)（[@OrcaWin](https://github.com/OrcaWin)，[#18905](https://github.com/stablyai/orca/pull/18905)）
- 测试：drain project menu focus restoration before teardown（[@nwparker](https://github.com/nwparker)，[#18971](https://github.com/stablyai/orca/pull/18971)）
- 测试：honor background mode in paired client window helpers（[@nwparker](https://github.com/nwparker)，[#18978](https://github.com/stablyai/orca/pull/18978)）
- 测试：bound release checkout fixtures and gate delayed imports（[@nwparker](https://github.com/nwparker)，[#18981](https://github.com/stablyai/orca/pull/18981)）
- 测试：isolate window mocks from inherited launch flags（[@nwparker](https://github.com/nwparker)，[#18989](https://github.com/stablyai/orca/pull/18989)）
- 测试：match explorer filenames independently of git badges（[@nwparker](https://github.com/nwparker)，[#18997](https://github.com/stablyai/orca/pull/18997)）
- 测试：synchronize large repository recovery with Retry request（[@nwparker](https://github.com/nwparker)，[#18999](https://github.com/stablyai/orca/pull/18999)）
- 修复（tests）：stabilize divider viewport and pointer-capture event ordering（[@nwparker](https://github.com/nwparker)，[#19004](https://github.com/stablyai/orca/pull/19004)）
- 修复（tests）：provide a window manager for Linux Electron CI（[@nwparker](https://github.com/nwparker)，[#19007](https://github.com/stablyai/orca/pull/19007)）
- 测试：lower child-process import pin after ACL migration（[@nwparker](https://github.com/nwparker)，[#19012](https://github.com/stablyai/orca/pull/19012)）
- 修复（tests）：complete hidden SSH dialog exits during cleanup（[@nwparker](https://github.com/nwparker)，[#18993](https://github.com/stablyai/orca/pull/18993)）
- 测试：use a valid repo filter in workspace reveal coverage（[@nwparker](https://github.com/nwparker)，[#19017](https://github.com/stablyai/orca/pull/19017)）
- 测试：cover native X11 Hangul-plus-digit PTY bytes in CI（[@nwparker](https://github.com/nwparker)，[#19013](https://github.com/stablyai/orca/pull/19013)）
- 测试：await fresh inventory after headless terminal materialization（[@nwparker](https://github.com/nwparker)，[#19028](https://github.com/stablyai/orca/pull/19028)）
- 测试：wait for board pointer readiness before marquee selection（[@nwparker](https://github.com/nwparker)，[#19029](https://github.com/stablyai/orca/pull/19029)）
- 测试：await reattach replay before checking mouse reset（[@nwparker](https://github.com/nwparker)，[#19039](https://github.com/stablyai/orca/pull/19039)）
- 测试：require recorded Git activity in polling regression（[@nwparker](https://github.com/nwparker)，[#19041](https://github.com/stablyai/orca/pull/19041)）
- 测试：preserve Windows golden command failures（[@nwparker](https://github.com/nwparker)，[#19047](https://github.com/stablyai/orca/pull/19047)）
- 测试：canonicalize Windows fresh-profile fixture path（[@nwparker](https://github.com/nwparker)，[#19049](https://github.com/stablyai/orca/pull/19049)）
- 测试：repair Windows paste setup and newline expectations（[@nwparker](https://github.com/nwparker)，[#19050](https://github.com/stablyai/orca/pull/19050)）
- 测试：align Windows shell icons with project runtime ownership（[@nwparker](https://github.com/nwparker)，[#19053](https://github.com/stablyai/orca/pull/19053)）
- 测试：exercise supported ConPTY keyboard protocol reset（[@nwparker](https://github.com/nwparker)，[#19054](https://github.com/stablyai/orca/pull/19054)）
- 测试：reject unsupported app-server in golden agent fixture（[@nwparker](https://github.com/nwparker)，[#19056](https://github.com/stablyai/orca/pull/19056)）
- 测试：reject unsupported app-server in WSL golden stub（[@nwparker](https://github.com/nwparker)，[#19062](https://github.com/stablyai/orca/pull/19062)）
- 测试：canonicalize native Windows paths during repository teardown（[@nwparker](https://github.com/nwparker)，[#19064](https://github.com/stablyai/orca/pull/19064)）
- 测试：run real WSL terminal launch and paste in PR CI（[@nwparker](https://github.com/nwparker)，[#19072](https://github.com/stablyai/orca/pull/19072)）
- 测试：restore SSH bulk-open freeze coverage in headed CI（[@nwparker](https://github.com/nwparker)，[#19081](https://github.com/stablyai/orca/pull/19081)）
- 测试：enable direct and client-hosted SSH browser coverage（[@nwparker](https://github.com/nwparker)，[#19090](https://github.com/stablyai/orca/pull/19090)）
- 测试：reconnect after replacing same-ID runtime pairing（[@nwparker](https://github.com/nwparker)，[#19094](https://github.com/stablyai/orca/pull/19094)）
- 测试：enable Docker SSH browser network route coverage in CI（[@nwparker](https://github.com/nwparker)，[#19095](https://github.com/stablyai/orca/pull/19095)）
- 测试：repair nested SSH fixture after HUB restart（[@nwparker](https://github.com/nwparker)，[#19098](https://github.com/stablyai/orca/pull/19098)）
- 测试：enable localhost SSH terminal and hook journey in CI（[@nwparker](https://github.com/nwparker)，[#19097](https://github.com/stablyai/orca/pull/19097)）
- 测试：reuse authoritative SSH connection readiness in localhost fixture（[@nwparker](https://github.com/nwparker)，[#19102](https://github.com/stablyai/orca/pull/19102)）
- 测试：follow retained Activity sidebar during pane selection（[@nwparker](https://github.com/nwparker)，[#19107](https://github.com/stablyai/orca/pull/19107)）
- 测试：isolate source-control generation repositories per scenario（[@nwparker](https://github.com/nwparker)，[#19105](https://github.com/stablyai/orca/pull/19105)）
- 测试：cover SSH reattach replay and enable deterministic Codex CI（[@nwparker](https://github.com/nwparker)，[#19106](https://github.com/stablyai/orca/pull/19106)）

#### 发布、CI 与文档 {#v1-4-198-release-ci}

- 杂项：update in-app Android APK link to 0.0.47（[@AmethystLiang](https://github.com/AmethystLiang)，[#18745](https://github.com/stablyai/orca/pull/18745)）
- 杂项（cloud）：close the Workload Identity cutover onto stablyai/orca（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18509](https://github.com/stablyai/orca/pull/18509)）
- 重构（agents）：one pane-identity resolver behind six thin adapters (tranche 0)（[@brennanb2025](https://github.com/brennanb2025)，[#18243](https://github.com/stablyai/orca/pull/18243)）
- 文档（cloud）：reconcile the 2026-08-23 retry figure with the gate metric（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18581](https://github.com/stablyai/orca/pull/18581)）
- CI（package）：retry apt fetches and docker builds behind the Ubuntu mirror（[@nwparker](https://github.com/nwparker)，[#18797](https://github.com/stablyai/orca/pull/18797)）
- 重构（agent-session-journal）：move the session journal onto SQLite（[@brennanb2025](https://github.com/brennanb2025)，[#18652](https://github.com/stablyai/orca/pull/18652)）
- 重构（agent-session）：consolidate wire type imports below lint limit（[@nwparker](https://github.com/nwparker)，[#18930](https://github.com/stablyai/orca/pull/18930)）
- 杂项（cloud）：pin staging relay c3 to the director's image（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18508](https://github.com/stablyai/orca/pull/18508)）
- 重构（git）：share push-target resolution between local and the SSH 中继（[@nwparker](https://github.com/nwparker)，[#18406](https://github.com/stablyai/orca/pull/18406)）
- 文档（relay）：2026-09 reconnect findings, checklist, roadmap, and Roll 2 plan（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18958](https://github.com/stablyai/orca/pull/18958)）
- 文档（relay）：record Roll 2 phase 0/1 (code merge, image, director deploy)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18979](https://github.com/stablyai/orca/pull/18979)）
- 文档（relay）：Roll 2 cell roll record and checklist ticks（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19096](https://github.com/stablyai/orca/pull/19096)）
- 文档（relay）：correct why the ConPTY teardown asset diverges from the desktop patch（[@nwparker](https://github.com/nwparker)，[#18636](https://github.com/stablyai/orca/pull/18636)）
- 修复（release）：restore version and harden staging confirmation（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18515](https://github.com/stablyai/orca/pull/18515)）
- 文档：document localization workflow in AGENTS.md（[@tmchow](https://github.com/tmchow)，[#6204](https://github.com/stablyai/orca/pull/6204)）
- 文档：add Ukrainian README translation（[@iho](https://github.com/iho)，[#16124](https://github.com/stablyai/orca/pull/16124)）
- 文档：add WeChat group 9 QR code（[@AmethystLiang](https://github.com/AmethystLiang)，[#18608](https://github.com/stablyai/orca/pull/18608)）
- CI：reduce runner overhead and disposable package compression（[@nwparker](https://github.com/nwparker)，[#18948](https://github.com/stablyai/orca/pull/18948)）
- CI：skip idle Mac allocations and redundant native compiler setup（[@nwparker](https://github.com/nwparker)，[#18954](https://github.com/stablyai/orca/pull/18954)）
- CI：reduce dependency, checkout, and test deadline overhead（[@nwparker](https://github.com/nwparker)，[#18968](https://github.com/stablyai/orca/pull/18968)）
- CI：preserve case-twin release refs through checkout and verify trust（[@nwparker](https://github.com/nwparker)，[#18980](https://github.com/stablyai/orca/pull/18980)）
- CI：expose existing E2E spec selection for manual dispatch（[@nwparker](https://github.com/nwparker)，[#18987](https://github.com/stablyai/orca/pull/18987)）
- 修复（security）：apply the Windows path-hardening ACL that never ran（[@OrcaWin](https://github.com/OrcaWin)，[#17884](https://github.com/stablyai/orca/pull/17884)）
- 修复（release）：stop shipping an unsigned elevate.exe on Windows（[@OrcaWin](https://github.com/OrcaWin)，[#18044](https://github.com/stablyai/orca/pull/18044)）
- 修复（release）：revalidate draft state before patching generated notes（[@AmethystLiang](https://github.com/AmethystLiang)，[#19019](https://github.com/stablyai/orca/pull/19019)）
- 修复（build）：pin config/relay-assets LF so one release is one relay hash（[@OrcaWin](https://github.com/OrcaWin)，[#19024](https://github.com/stablyai/orca/pull/19024)）
- 修复（packaging）：ship Claude agent SDK with desktop builds（[@brennanb2025](https://github.com/brennanb2025)，[#19042](https://github.com/stablyai/orca/pull/19042)）

### 新贡献者 {#v1-4-198-contributors}

- @imgusev made their first contribution（[#18040](https://github.com/stablyai/orca/pull/18040)）
- @mors119 made their first contribution（[#17992](https://github.com/stablyai/orca/pull/17992)）
- @foXaCe made their first contribution（[#16455](https://github.com/stablyai/orca/pull/16455)）
- @iho made their first contribution（[#16124](https://github.com/stablyai/orca/pull/16124)）
- @iverJisty made their first contribution（[#17048](https://github.com/stablyai/orca/pull/17048)）
- @tb-soshiro made their first contribution（[#18787](https://github.com/stablyai/orca/pull/18787)）
- @NaoyaTatetsu made their first contribution（[#17795](https://github.com/stablyai/orca/pull/17795)）
- @ramarivera made their first contribution（[#12772](https://github.com/stablyai/orca/pull/12772)）

**完整变更对照：** [v1.4.197...v1.4.198](https://github.com/stablyai/orca/compare/v1.4.197...v1.4.198)

## v1.4.197 本地与远程工作区的 worktree、渲染器、编辑器、浏… {#v1-4-197}

2026年9月4日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.197)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 重点变化 {#v1-4-197-notable}

- 本地与远程工作区的 worktree、渲染器、编辑器、浏览器、终端和 Git 操作更快。
- Agent 会话、Native Chat、SSH 中继恢复以及 Windows/WSL 执行更抗故障。
- 工作区、终端、CLI、云端与跨平台可靠性进一步增强。

### 界面与工作区 {#v1-4-197-ui-workspaces}

- 修复（task-page）：restore behavior lost in the UI split（[@nwparker](https://github.com/nwparker)，[#17926](https://github.com/stablyai/orca/pull/17926)）
- 修复（renderer）：restore behavior the UI split dropped（[@nwparker](https://github.com/nwparker)，[#18002](https://github.com/stablyai/orca/pull/18002)）
- 重构（task-page）：fold the task page into one provider-grouped tree（[@nwparker](https://github.com/nwparker)，[#18008](https://github.com/stablyai/orca/pull/18008)）
- 修复（palette）：recompute quick-action availability when runtime status changes（[@nwparker](https://github.com/nwparker)，[#18027](https://github.com/stablyai/orca/pull/18027)）
- 新增（app）：open Markdown files from the OS in the 浮动工作区（[@nwparker](https://github.com/nwparker)，[#17906](https://github.com/stablyai/orca/pull/17906)）
- 修复（review-notes）：classify send failures and mirrored tabs（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18023](https://github.com/stablyai/orca/pull/18023)）
- 修复（github-project）：sort and group empty field values last in both directions（[@nwparker](https://github.com/nwparker)，[#17921](https://github.com/stablyai/orca/pull/17921)）
- 性能（git-common）：bound the fs-stat fan-out in the worktree pollers（[@nwparker](https://github.com/nwparker)，[#17839](https://github.com/stablyai/orca/pull/17839)）
- 修复（worktree）：restore the stale-cleanup signal after the module split（[@nwparker](https://github.com/nwparker)，[#18058](https://github.com/stablyai/orca/pull/18058)）
- 性能（git）：skip the sparse probe for worktree listings that never read it（[@nwparker](https://github.com/nwparker)，[#18050](https://github.com/stablyai/orca/pull/18050)）
- 修复（worktree）：widen git-common watch on event-batch overflow（[@nwparker](https://github.com/nwparker)，[#17916](https://github.com/stablyai/orca/pull/17916)）
- 性能（worktree）：fix the prepared-checkout hit rate and make misses visible（[@nwparker](https://github.com/nwparker)，[#17863](https://github.com/stablyai/orca/pull/17863)）
- 修复（session）：stop two hosts sharing one workspace-session bucket（[@nwparker](https://github.com/nwparker)，[#17912](https://github.com/stablyai/orca/pull/17912)）
- 防止：deleted workspace browser snapshot resurrection（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#17779](https://github.com/stablyai/orca/pull/17779)）
- 性能（worktrees）：gate worktree metadata hygiene on evidence, not on every listing（[@nwparker](https://github.com/nwparker)，[#18034](https://github.com/stablyai/orca/pull/18034)）
- Auto-focus editor when opening new markdown file（[@AmethystLiang](https://github.com/AmethystLiang)，[#18071](https://github.com/stablyai/orca/pull/18071)）
- 修复（automations）：report an unverifiable process loss as lost, not failed（[@nwparker](https://github.com/nwparker)，[#17967](https://github.com/stablyai/orca/pull/17967)）
- 新增（editor）：add Show Whitespace toggle option in diff viewer（[@hwantage](https://github.com/hwantage)，[#15120](https://github.com/stablyai/orca/pull/15120)）
- 性能（renderer）：index worktree owner lookups instead of rescanning every workspace（[@nwparker](https://github.com/nwparker)，[#18130](https://github.com/stablyai/orca/pull/18130)）
- 显示：favicons for browser website entries（[@AmethystLiang](https://github.com/AmethystLiang)，[#18099](https://github.com/stablyai/orca/pull/18099)）
- 性能（editor,source-control）：batch closed-tab model sweeps, drop 40 store subscriptions（[@nwparker](https://github.com/nwparker)，[#18144](https://github.com/stablyai/orca/pull/18144)）
- 性能（renderer）：stop three always-mounted selectors rescanning the store on every write（[@nwparker](https://github.com/nwparker)，[#18136](https://github.com/stablyai/orca/pull/18136)）
- 性能（renderer）：reconcile hydrated workspaces in one store write（[@nwparker](https://github.com/nwparker)，[#18150](https://github.com/stablyai/orca/pull/18150)）
- 测试（editor）：isolate prefix bleed in the batched model sweep, drop a dead export（[@nwparker](https://github.com/nwparker)，[#18240](https://github.com/stablyai/orca/pull/18240)）
- 性能（renderer）：build useRef seeds once instead of every render（[@nwparker](https://github.com/nwparker)，[#18159](https://github.com/stablyai/orca/pull/18159)）
- 性能（renderer）：drop react-markdown and the emoji catalog off the boot path (-371 KB eager JS)（[@nwparker](https://github.com/nwparker)，[#18149](https://github.com/stablyai/orca/pull/18149)）
- 性能（renderer）：stop six timers from ticking behind a hidden window（[@nwparker](https://github.com/nwparker)，[#18134](https://github.com/stablyai/orca/pull/18134)）
- 性能（sidebar）：stop re-allocating 423 workspace descriptors and 193 bucket projections per recompute（[@nwparker](https://github.com/nwparker)，[#18241](https://github.com/stablyai/orca/pull/18241)）
- 修复（worktrees）：stop a resolved-worktree snapshot answering for repos it never saw（[@nwparker](https://github.com/nwparker)，[#18295](https://github.com/stablyai/orca/pull/18295)）
- 性能（file-explorer）：stop rebuilding the whole visible tree twice per directory refresh（[@nwparker](https://github.com/nwparker)，[#18319](https://github.com/stablyai/orca/pull/18319)）
- 性能（browser-pane）：share one rAF loop across client-hosted page overlays（[@nwparker](https://github.com/nwparker)，[#18313](https://github.com/stablyai/orca/pull/18313)）
- 修复（cleanup）：route workspace cleanup by resolved execution host, not repo connectionId（[@nwparker](https://github.com/nwparker)，[#18358](https://github.com/stablyai/orca/pull/18358)）
- 性能（editor）：stop reclassifying the whole markdown document on every render（[@nwparker](https://github.com/nwparker)，[#18324](https://github.com/stablyai/orca/pull/18324)）
- 修复（source-control）：route hosted reviews by resolved execution host（[@nwparker](https://github.com/nwparker)，[#18382](https://github.com/stablyai/orca/pull/18382)）
- 性能（renderer）：index diff comments, skip no-op hydration, drop duplicate normalizes（[@nwparker](https://github.com/nwparker)，[#18375](https://github.com/stablyai/orca/pull/18375)）
- 修复（crash-reporting）：record Orca-initiated tree kills so a killed renderer is decidable（[@nwparker](https://github.com/nwparker)，[#18367](https://github.com/stablyai/orca/pull/18367)）
- 性能（renderer）：narrow vault and editor subscriptions off the every-write path（[@nwparker](https://github.com/nwparker)，[#18374](https://github.com/stablyai/orca/pull/18374)）
- 性能（renderer）：park hibernation and panel-watchdog work behind a hidden window（[@nwparker](https://github.com/nwparker)，[#18373](https://github.com/stablyai/orca/pull/18373)）

### Agent 与 Native Chat {#v1-4-197-native-chat}

- 修复（native-chat）：ignore stale restored working status（[@brennanb2025](https://github.com/brennanb2025)，[#17995](https://github.com/stablyai/orca/pull/17995)）
- 测试（orchestration）：fail loudly on an unexpected second detection call（[@nwparker](https://github.com/nwparker)，[#18037](https://github.com/stablyai/orca/pull/18037)）
- 修复（runtime）：reclaim a fenced agent-session spawn from host inventory（[@nwparker](https://github.com/nwparker)，[#17976](https://github.com/stablyai/orca/pull/17976)）
- 回退（native-chat）：drop the speculative Fable model-switch detections（[@brennanb2025](https://github.com/brennanb2025)，[#18215](https://github.com/stablyai/orca/pull/18215)）
- 修复（agents）：stop a deeper vendor helper from stealing a pane's agent identity（[@brennanb2025](https://github.com/brennanb2025)，[#18062](https://github.com/stablyai/orca/pull/18062)）
- 修复：agent dashboard setting configure（[@AmethystLiang](https://github.com/AmethystLiang)，[#18245](https://github.com/stablyai/orca/pull/18245)）
- 修复（native-chat）：show pasted images while they save, and make them previewable（[@brennanb2025](https://github.com/brennanb2025)，[#18118](https://github.com/stablyai/orca/pull/18118)）
- 修复（native-chat）：show images in Codex 结构化聊天（[@brennanb2025](https://github.com/brennanb2025)，[#18266](https://github.com/stablyai/orca/pull/18266)）
- 修复（native-chat）：make structured Codex launches race-resistant（[@brennanb2025](https://github.com/brennanb2025)，[#18251](https://github.com/stablyai/orca/pull/18251)）
- 修复：Claude quota unavailable when macOS $USER contains @（[@rudironsoni](https://github.com/rudironsoni)，[#16673](https://github.com/stablyai/orca/pull/16673)）
- 性能（agent-status）：memoize pane routing, cache the freshness minimum, clone staged state once per transaction（[@nwparker](https://github.com/nwparker)，[#18323](https://github.com/stablyai/orca/pull/18323)）
- 新增（native-chat）：unify local agent entrypoint routing（[@brennanb2025](https://github.com/brennanb2025)，[#18248](https://github.com/stablyai/orca/pull/18248)）

### 终端 {#v1-4-197-terminal}

- 修复（linux）：give the CLI one entrypoint by extracting the AppImage once（[@nwparker](https://github.com/nwparker)，[#15081](https://github.com/stablyai/orca/pull/15081)）
- 新增：Copy Session ID menu item to terminal tabs（[@AmethystLiang](https://github.com/AmethystLiang)，[#18039](https://github.com/stablyai/orca/pull/18039)）
- 修复（terminal）：preserve panes when restored PTY owner is unverifiable（[@brennanb2025](https://github.com/brennanb2025)，[#17860](https://github.com/stablyai/orca/pull/17860)）
- 修复（relay）：name why node-pty could not load, instead of guessing four causes at once（[@nwparker](https://github.com/nwparker)，[#17891](https://github.com/stablyai/orca/pull/17891)）
- 修复（agent-status）：report a stale pane that still holds a PTY as unverifiable, not idle（[@nwparker](https://github.com/nwparker)，[#18012](https://github.com/stablyai/orca/pull/18012)）
- 修复（ssh）：repair a rebuildable node-pty failure once, instead of asking the user to reconnect（[@nwparker](https://github.com/nwparker)，[#17907](https://github.com/stablyai/orca/pull/17907)）
- 文档（win）：keep -EncodedCommand for the PTY OSC 133 bootstrap (MDE finding declined)（[@OrcaWin](https://github.com/OrcaWin)，[#17875](https://github.com/stablyai/orca/pull/17875)）
- 修复（remote-terminal）：stop three latches that only cleared on an event that could never arrive（[@nwparker](https://github.com/nwparker)，[#17945](https://github.com/stablyai/orca/pull/17945)）
- 修复（terminal）：stop a restarted client publishing away its own SSH reattach identity（[@nwparker](https://github.com/nwparker)，[#17881](https://github.com/stablyai/orca/pull/17881)）
- 修复（native-chat）：keep disabled CLI models out of the Claude picker（[@brennanb2025](https://github.com/brennanb2025)，[#18055](https://github.com/stablyai/orca/pull/18055)）
- 修复（pty,remote）：close the pty master fd leak, and two remote-terminal defects（[@nwparker](https://github.com/nwparker)，[#17914](https://github.com/stablyai/orca/pull/17914)）
- 修复（settings）：surface why CLI registration failed（[@nwparker](https://github.com/nwparker)，[#18125](https://github.com/stablyai/orca/pull/18125)）
- 修复（ssh）：close the pty master fd leak on relay hosts too（[@nwparker](https://github.com/nwparker)，[#17920](https://github.com/stablyai/orca/pull/17920)）
- 性能（sidebar,terminal）：memoize terminal-title agent classification and lineage projections（[@nwparker](https://github.com/nwparker)，[#18148](https://github.com/stablyai/orca/pull/18148)）
- 性能（terminal）：stop shipping every agent spinner title frame to the renderer（[@nwparker](https://github.com/nwparker)，[#18155](https://github.com/stablyai/orca/pull/18155)）
- 性能（terminal）：one registry sweep per watcher pass, not one per workspace（[@nwparker](https://github.com/nwparker)，[#18157](https://github.com/stablyai/orca/pull/18157)）
- Sta 6308 add copy session id option to terminal tab context menu（[@AmethystLiang](https://github.com/AmethystLiang)，[#18070](https://github.com/stablyai/orca/pull/18070)）
- 修复（terminal）：stop a hidden pane's cursor blink deterministically（[@nwparker](https://github.com/nwparker)，[#18152](https://github.com/stablyai/orca/pull/18152)）
- 性能（startup）：stop an unreachable SSH host from gating local terminal restore（[@nwparker](https://github.com/nwparker)，[#18164](https://github.com/stablyai/orca/pull/18164)）
- 性能（pty）：stop startup history GC freezing the main process for seconds（[@nwparker](https://github.com/nwparker)，[#18165](https://github.com/stablyai/orca/pull/18165)）
- 性能（terminal）：repaint only the rows an agent redraw touched（[@nwparker](https://github.com/nwparker)，[#18169](https://github.com/stablyai/orca/pull/18169)）
- Make terminal error overlays opaque（[@brennanb2025](https://github.com/brennanb2025)，[#18231](https://github.com/stablyai/orca/pull/18231)）
- 修复（terminal）：confirm an unrecognized foreground before downgrading agent prompts（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18238](https://github.com/stablyai/orca/pull/18238)）
- 修复（terminal）：replay paired-runtime snapshots at the host's grid（[@nwparker](https://github.com/nwparker)，[#18132](https://github.com/stablyai/orca/pull/18132)）
- 修复（remote-terminal）：keep the stream stall deadline armed on unacknowledged credit（[@nwparker](https://github.com/nwparker)，[#17871](https://github.com/stablyai/orca/pull/17871)）
- 修复（ssh）：stop respawning an agent onto a PTY the relay just proved alive（[@nwparker](https://github.com/nwparker)，[#17951](https://github.com/stablyai/orca/pull/17951)）
- 修复（remote）：stop a colliding path key, a dead conflict state, and a live-PTY removal from losing tabs（[@nwparker](https://github.com/nwparker)，[#17948](https://github.com/stablyai/orca/pull/17948)）
- 修复（ssh）：compare lease and runtime pty ids in one form so pane recovery runs（[@nwparker](https://github.com/nwparker)，[#17969](https://github.com/stablyai/orca/pull/17969)）
- 修复（relay）：stop reviving a PTY into a directory that is gone from the host（[@nwparker](https://github.com/nwparker)，[#18351](https://github.com/stablyai/orca/pull/18351)）
- 修复（memory）：close two per-id map reaper gaps and ratchet the pty-exit reaper（[@nwparker](https://github.com/nwparker)，[#18320](https://github.com/stablyai/orca/pull/18320)）
- 性能（terminal）：cut per-pane store listeners from 48 to 17（[@nwparker](https://github.com/nwparker)，[#18322](https://github.com/stablyai/orca/pull/18322)）
- 性能（main）：one shared terminal-wait sweep, halved SIGWINCH ps forks, chunked wait-blocked carry, hoisted redraw regex（[@nwparker](https://github.com/nwparker)，[#18315](https://github.com/stablyai/orca/pull/18315)）
- 性能（renderer）：take the English catalog and the xterm WebGL addon off the boot graph（[@nwparker](https://github.com/nwparker)，[#18326](https://github.com/stablyai/orca/pull/18326)）
- 新增（cli）：make terminal close the canonical workspace teardown（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18073](https://github.com/stablyai/orca/pull/18073)）
- 修复（terminal）：flush xterm's parked renderer resize when releasing the pause latch（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18510](https://github.com/stablyai/orca/pull/18510)）

### Windows、远程服务器与 SSH {#v1-4-197-windows-ssh}

- 修复（ssh）：stop an unanswered native-deps probe from wiping a healthy relay（[@nwparker](https://github.com/nwparker)，[#17979](https://github.com/stablyai/orca/pull/17979)）
- 修复（daemon）：keep attach cancellation behind client timeout（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#17816](https://github.com/stablyai/orca/pull/17816)）
- 性能（worktree）：batch remote conflict probes, re-arm the prepared checkout（[@nwparker](https://github.com/nwparker)，[#17829](https://github.com/stablyai/orca/pull/17829)）
- 测试（relay）：bind test WebSocket servers to loopback（[@nwparker](https://github.com/nwparker)，[#18045](https://github.com/stablyai/orca/pull/18045)）
- 新增（telemetry）：measure macOS stale-daemon adoption and cwd denials（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18043](https://github.com/stablyai/orca/pull/18043)）
- 修复（daemon）：let a create wait out an in-flight session teardown（[@OrcaWin](https://github.com/OrcaWin)，[#18063](https://github.com/stablyai/orca/pull/18063)）
- CI（release）：make Windows release gates deterministic（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18067](https://github.com/stablyai/orca/pull/18067)）
- 修复（ssh）：stop a failed worktree scan from publishing authoritative emptiness（[@nwparker](https://github.com/nwparker)，[#17833](https://github.com/stablyai/orca/pull/17833)）
- 修复（preload）：type the ssh terminateSessions bridge result（[@nwparker](https://github.com/nwparker)，[#18079](https://github.com/stablyai/orca/pull/18079)）
- 修复（ssh）：stop orphaning live relays when an endpoint is taken over（[@nwparker](https://github.com/nwparker)，[#17821](https://github.com/stablyai/orca/pull/17821)）
- 修复（ssh）：stop expiring relay-reset leases when the force-stop threw（[@nwparker](https://github.com/nwparker)，[#17962](https://github.com/stablyai/orca/pull/17962)）
- 测试（ssh）：ratchet the relay reattach-failure exit as unverified, not proven（[@nwparker](https://github.com/nwparker)，[#17963](https://github.com/stablyai/orca/pull/17963)）
- 修复（remote）：stop unlabelled inventories and replayed rows authorising destruction（[@nwparker](https://github.com/nwparker)，[#17981](https://github.com/stablyai/orca/pull/17981)）
- 性能（worktree）：defer fork-PR remote creation from create-time to first use（[@nwparker](https://github.com/nwparker)，[#17922](https://github.com/stablyai/orca/pull/17922)）
- 修复（ssh）：stop a markerless native-deps probe from deleting both native modules（[@nwparker](https://github.com/nwparker)，[#18011](https://github.com/stablyai/orca/pull/18011)）
- 性能（ssh）：share relay native deps across bundles instead of recompiling per install dir（[@nwparker](https://github.com/nwparker)，[#18033](https://github.com/stablyai/orca/pull/18033)）
- 文档（windows）：document the EDR signal surface（[@OrcaWin](https://github.com/OrcaWin)，[#17856](https://github.com/stablyai/orca/pull/17856)）
- 修复（build）：pin config/scripts LF so Windows can run their tests（[@OrcaWin](https://github.com/OrcaWin)，[#18056](https://github.com/stablyai/orca/pull/18056)）
- 测试（ci）：ratchet Windows-gated tests into both registration lists（[@OrcaWin](https://github.com/OrcaWin)，[#18047](https://github.com/stablyai/orca/pull/18047)）
- 修复（tooling）：run oxlint gates without a Windows .cmd shim（[@OrcaWin](https://github.com/OrcaWin)，[#17894](https://github.com/stablyai/orca/pull/17894)）
- 修复（relay）：guard all three delivery release paths, and explain a restoring source（[@nwparker](https://github.com/nwparker)，[#18038](https://github.com/stablyai/orca/pull/18038)）
- 测试（ssh）：dockerized relay fault injection with verdict assertions（[@nwparker](https://github.com/nwparker)，[#18017](https://github.com/stablyai/orca/pull/18017)）
- 文档（ssh）：record that an app update strands relay-backed terminals as `unverifiable`（[@nwparker](https://github.com/nwparker)，[#17972](https://github.com/stablyai/orca/pull/17972)）
- 修复（relay）：fail an oversized response instead of closing the client（[@nwparker](https://github.com/nwparker)，[#17968](https://github.com/stablyai/orca/pull/17968)）
- 修复（ssh）：keep remote PowerShell commands inside what sshd's cmd.exe accepts（[@nwparker](https://github.com/nwparker)，[#17947](https://github.com/stablyai/orca/pull/17947)）
- 修复（wsl）：name an explicit Windows cwd for wsl.exe spawns（[@nwparker](https://github.com/nwparker)，[#17834](https://github.com/stablyai/orca/pull/17834)）
- 修复（orcad）：stop demanding a spawn-helper only macOS builds（[@nwparker](https://github.com/nwparker)，[#18122](https://github.com/stablyai/orca/pull/18122)）
- 修复（relay）：stream an oversized fs.listFiles reply instead of refusing it（[@nwparker](https://github.com/nwparker)，[#17954](https://github.com/stablyai/orca/pull/17954)）
- 测试：simplify remote pane link routing to server-hosted placement（[@AmethystLiang](https://github.com/AmethystLiang)，[#18219](https://github.com/stablyai/orca/pull/18219)）
- 性能（git）：answer remote-URL questions from one subprocess, not one per remote（[@nwparker](https://github.com/nwparker)，[#18158](https://github.com/stablyai/orca/pull/18158)）
- 性能（windows）：drop the unread Memory flag and share one process-table projection per snapshot（[@nwparker](https://github.com/nwparker)，[#18151](https://github.com/stablyai/orca/pull/18151)）
- 性能（remote）：apply the no-evidence inspection cadence to remote panes (30 -> 4 host round trips/min/idle pane)（[@nwparker](https://github.com/nwparker)，[#18146](https://github.com/stablyai/orca/pull/18146)）
- 修复（ssh）：reclaim relay PTYs the client has provably lost, on host attestation only（[@nwparker](https://github.com/nwparker)，[#17831](https://github.com/stablyai/orca/pull/17831)）
- 修复（ssh）：stop a late SFTP stream error crashing main, and keep the relay socket inside sun_path（[@nwparker](https://github.com/nwparker)，[#17862](https://github.com/stablyai/orca/pull/17862)）
- 修复（watcher）：route relay watch-root capacity refusals off the fast ladder（[@nwparker](https://github.com/nwparker)，[#17950](https://github.com/stablyai/orca/pull/17950)）
- 修复（ssh）：log an unanswered native-deps probe instead of launching silently（[@nwparker](https://github.com/nwparker)，[#18000](https://github.com/stablyai/orca/pull/18000)）
- 修复（ssh）：declare a wedged relay link lost, and stop reading silence as a verdict（[@nwparker](https://github.com/nwparker)，[#17817](https://github.com/stablyai/orca/pull/17817)）
- 修复（remote-runtime）：make every advertised recovery attempt reachable, and stop two recovery latches（[@nwparker](https://github.com/nwparker)，[#17822](https://github.com/stablyai/orca/pull/17822)）
- 修复（relay）：retire PTYs the host proves are gone, and stop two per-poll scan storms（[@nwparker](https://github.com/nwparker)，[#17832](https://github.com/stablyai/orca/pull/17832)）
- 修复（ssh）：answer every MFA stage, stop dialling an unclaimed alias, and say where a clone failed（[@nwparker](https://github.com/nwparker)，[#17946](https://github.com/stablyai/orca/pull/17946)）
- 修复（relay）：signal capacity loss instead of dropping, hanging, or truncating（[@nwparker](https://github.com/nwparker)，[#17870](https://github.com/stablyai/orca/pull/17870)）
- 测试（e2e）：un-rot the SSH freeze repro and probe two failure modes nothing covered（[@nwparker](https://github.com/nwparker)，[#17940](https://github.com/stablyai/orca/pull/17940)）
- 修复（ssh）：resolve the worktree's execution host instead of guessing from one repo row（[@nwparker](https://github.com/nwparker)，[#17909](https://github.com/stablyai/orca/pull/17909)）
- 修复（ssh）：route four host-blind seams through the resolved execution host（[@nwparker](https://github.com/nwparker)，[#17919](https://github.com/stablyai/orca/pull/17919)）
- 修复（ssh）：decide remote-vs-local from the resolved execution host, not a raw field（[@nwparker](https://github.com/nwparker)，[#18294](https://github.com/stablyai/orca/pull/18294)）
- 修复（ssh）：stop respawning panes on client-side-only absence evidence（[@nwparker](https://github.com/nwparker)，[#17957](https://github.com/stablyai/orca/pull/17957)）
- 性能（relay）：stop two unbounded growth terms behind the long-session SSH slowdown（[@nwparker](https://github.com/nwparker)，[#17818](https://github.com/stablyai/orca/pull/17818)）
- 修复（remote）：resolve the spawn cwd, the node manager dir, the vault host and the scrollback seed（[@nwparker](https://github.com/nwparker)，[#17952](https://github.com/stablyai/orca/pull/17952)）
- 修复（wsl）：stop runWslProcess inheriting a removable spawn directory（[@nwparker](https://github.com/nwparker)，[#17837](https://github.com/stablyai/orca/pull/17837)）
- 修复（ssh）：let an expired lease reattach its orphan instead of stranding it（[@nwparker](https://github.com/nwparker)，[#17965](https://github.com/stablyai/orca/pull/17965)）
- 修复（ssh）：give supersession and id-recycling their own lease marks（[@nwparker](https://github.com/nwparker)，[#17966](https://github.com/stablyai/orca/pull/17966)）
- 修复（ssh）：require a host death certificate before recreating a pane, and unstick expired leases（[@nwparker](https://github.com/nwparker)，[#18013](https://github.com/stablyai/orca/pull/18013)）
- 新增（ssh）：host-stamped remote foreground identity（[@brennanb2025](https://github.com/brennanb2025)，[#18078](https://github.com/stablyai/orca/pull/18078)）
- 修复（ssh）：pick the eligible expired lease, not the first one matching a pane（[@nwparker](https://github.com/nwparker)，[#18366](https://github.com/stablyai/orca/pull/18366)）
- 修复（repos）：route icon and remote-identity probes on a resolved execution host（[@nwparker](https://github.com/nwparker)，[#18377](https://github.com/stablyai/orca/pull/18377)）
- 文档（ssh）：document keep-alive-until-reset as the default grace（[@nwparker](https://github.com/nwparker)，[#18383](https://github.com/stablyai/orca/pull/18383)）
- 修复（ssh）：route the remaining expired-lease readers through the reattach predicate（[@nwparker](https://github.com/nwparker)，[#18378](https://github.com/stablyai/orca/pull/18378)）
- 修复（git）：share the worktree-list and unmerged-entry porcelain parsers with the SSH 中继（[@nwparker](https://github.com/nwparker)，[#18389](https://github.com/stablyai/orca/pull/18389)）
- 杂项（cloud）：add the relay fence broker, ops console, Terraform root, scripts, and 24 cloud-* workflows（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18413](https://github.com/stablyai/orca/pull/18413)）
- 修复（cloud）：stop asking setup-node to cache the pnpm store in the relay workflows（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18432](https://github.com/stablyai/orca/pull/18432)）
- 修复（cloud）：stop passing manage_artifact_dns to the relay root（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18442](https://github.com/stablyai/orca/pull/18442)）

### 移动端 {#v1-4-197-mobile}

- Revert mobile search button floating layout（[@AmethystLiang](https://github.com/AmethystLiang)，[#17990](https://github.com/stablyai/orca/pull/17990)）
- 重构（mobile）：pin the terminal WebView payload and split its widest slice（[@nwparker](https://github.com/nwparker)，[#18028](https://github.com/stablyai/orca/pull/18028)）
- 杂项（deps）：resolve 81 of 83 Dependabot alerts in docs/site and mobile（[@nwparker](https://github.com/nwparker)，[#18061](https://github.com/stablyai/orca/pull/18061)）
- 更新：WeChat community to group 8（[@AmethystLiang](https://github.com/AmethystLiang)，[#18095](https://github.com/stablyai/orca/pull/18095)）
- 性能（renderer）：stop the mobile sync key rehashing every dirty file on each keystroke（[@nwparker](https://github.com/nwparker)，[#18154](https://github.com/stablyai/orca/pull/18154)）
- Align worktree host labels across desktop and mobile（[@brennanb2025](https://github.com/brennanb2025)，[#18237](https://github.com/stablyai/orca/pull/18237)）
- 文档：update localized Android APK links to 0.0.47（[@AmethystLiang](https://github.com/AmethystLiang)，[#18292](https://github.com/stablyai/orca/pull/18292)）

### 性能与可靠性 {#v1-4-197-perf-reliability}

- 重构：name split modules for what they contain（[@nwparker](https://github.com/nwparker)，[#17927](https://github.com/stablyai/orca/pull/17927)）
- 修复（worktrees）：reclaim orphaned pr-* fork remotes（[@nwparker](https://github.com/nwparker)，[#17842](https://github.com/stablyai/orca/pull/17842)）
- 测试（child-process）：make the import ratchet able to fail（[@nwparker](https://github.com/nwparker)，[#18026](https://github.com/stablyai/orca/pull/18026)）
- 修复（git）：recover commit ref badges on Git older than 2.43（[@nwparker](https://github.com/nwparker)，[#17923](https://github.com/stablyai/orca/pull/17923)）
- 修复（agents）：clear the unread completion marker when acknowledging agents（[@nwparker](https://github.com/nwparker)，[#17924](https://github.com/stablyai/orca/pull/17924)）
- 修复（dev）：keep the shared Electron dist writable for the dev app（[@nwparker](https://github.com/nwparker)，[#18035](https://github.com/stablyai/orca/pull/18035)）
- 修复（worktrees）：retire runtime-host metadata a scan proved gone（[@nwparker](https://github.com/nwparker)，[#17901](https://github.com/stablyai/orca/pull/17901)）
- 测试：stop two suites failing for reasons unrelated to their subject（[@nwparker](https://github.com/nwparker)，[#18036](https://github.com/stablyai/orca/pull/18036)）
- 修复（preload）：make a dropped bridge key a compile error（[@nwparker](https://github.com/nwparker)，[#18025](https://github.com/stablyai/orca/pull/18025)）
- 性能（git）：pack the loose refs Orca's own fetches leave behind（[@nwparker](https://github.com/nwparker)，[#17857](https://github.com/stablyai/orca/pull/17857)）
- 修复（runtime）：scope create-dedupe inventory to the owning host（[@nwparker](https://github.com/nwparker)，[#17983](https://github.com/stablyai/orca/pull/17983)）
- 修复（runtime）：scope both reconcile call sites to the owning host uniformly（[@nwparker](https://github.com/nwparker)，[#18004](https://github.com/stablyai/orca/pull/18004)）
- 修复：incorrect open file cmd: prevent file creation for spaced input（[@AmethystLiang](https://github.com/AmethystLiang)，[#18054](https://github.com/stablyai/orca/pull/18054)）
- 修复（web）：declare a socket dead even when its probe cannot be sent（[@nwparker](https://github.com/nwparker)，[#17838](https://github.com/stablyai/orca/pull/17838)）
- 修复（linux）：land the reviewed Linux packaging stack on main（[@nwparker](https://github.com/nwparker)，[#18100](https://github.com/stablyai/orca/pull/18100)）
- 文档（linux）：say which package to install and how updates arrive（[@nwparker](https://github.com/nwparker)，[#18123](https://github.com/stablyai/orca/pull/18123)）
- Graduate Agents activity view with filtering, persistence, and performance improvements（[@AmethystLiang](https://github.com/AmethystLiang)，[#18222](https://github.com/stablyai/orca/pull/18222)）
- CI：checkout PR head for reusable E2E（[@AmethystLiang](https://github.com/AmethystLiang)，[#18230](https://github.com/stablyai/orca/pull/18230)）
- 修复（diff-comments）：stop review refreshes from blanking inline comment cards（[@nwparker](https://github.com/nwparker)，[#18142](https://github.com/stablyai/orca/pull/18142)）
- 性能（keybindings）：stop recomputing shortcut labels on every render（[@nwparker](https://github.com/nwparker)，[#18145](https://github.com/stablyai/orca/pull/18145)）
- 性能（persistence）：build the state file once per save instead of seven times（[@nwparker](https://github.com/nwparker)，[#18161](https://github.com/stablyai/orca/pull/18161)）
- 性能（platform）：resolve the immutable platform payload once instead of ~19x/sec（[@nwparker](https://github.com/nwparker)，[#18135](https://github.com/stablyai/orca/pull/18135)）
- 性能（sidebar）：stop rebuilding per-card selector records on every store write（[@nwparker](https://github.com/nwparker)，[#18133](https://github.com/stablyai/orca/pull/18133)）
- 修复（process-table）：fail a short `ps` capture loudly, and stop a resume spending 49 of them（[@nwparker](https://github.com/nwparker)，[#18166](https://github.com/stablyai/orca/pull/18166)）
- 性能（diff）：stop redrawing the whole combined-diff file tree on every section load（[@nwparker](https://github.com/nwparker)，[#18140](https://github.com/stablyai/orca/pull/18140)）
- 修复（github）：bound and coalesce the Orca star check so gh children cannot pile up（[@nwparker](https://github.com/nwparker)，[#18239](https://github.com/stablyai/orca/pull/18239)）
- 新增：automation runs dashboard with pagination and filtering（[@AmethystLiang](https://github.com/AmethystLiang)，[#18226](https://github.com/stablyai/orca/pull/18226)）
- 重构（process-table）：extract the correlation indexes into their own module（[@nwparker](https://github.com/nwparker)，[#18246](https://github.com/stablyai/orca/pull/18246)）
- Auto e2e tests autofix scheduled ci 1h run 32 20260902T0700（[@AmethystLiang](https://github.com/AmethystLiang)，[#18227](https://github.com/stablyai/orca/pull/18227)）
- 修复（i18n）：add the three activity keys #18245 left out of en.json（[@nwparker](https://github.com/nwparker)，[#18250](https://github.com/stablyai/orca/pull/18250)）
- 性能（diff）：window the combined-diff file tree rows on large reviews（[@nwparker](https://github.com/nwparker)，[#18236](https://github.com/stablyai/orca/pull/18236)）
- 修复（gh）：reap the whole gh/glab process tree at the deadline on POSIX（[@nwparker](https://github.com/nwparker)，[#18258](https://github.com/stablyai/orca/pull/18258)）
- 测试（e2e）：pass testInfo to startDockerSshRelayTarget in the freeze repro（[@nwparker](https://github.com/nwparker)，[#18257](https://github.com/stablyai/orca/pull/18257)）
- 修复（activity）：persist the agents unread filter and grouping（[@AmethystLiang](https://github.com/AmethystLiang)，[#18255](https://github.com/stablyai/orca/pull/18255)）
- 修复（path）：stop seeded user bin dirs from outranking the inherited PATH（[@nwparker](https://github.com/nwparker)，[#18265](https://github.com/stablyai/orca/pull/18265)）
- 新增（providers）：dispatch git and filesystem providers by execution host（[@nwparker](https://github.com/nwparker)，[#18296](https://github.com/stablyai/orca/pull/18296)）
- 修复（runtime）：route runtime Git by resolved execution host, not repo connectionId（[@nwparker](https://github.com/nwparker)，[#18307](https://github.com/stablyai/orca/pull/18307)）
- 修复（runtime）：route runtime filesystem commands by resolved execution host（[@nwparker](https://github.com/nwparker)，[#18325](https://github.com/stablyai/orca/pull/18325)）
- Treat domain paths as URLs, not new files（[@AmethystLiang](https://github.com/AmethystLiang)，[#18340](https://github.com/stablyai/orca/pull/18340)）
- 性能（history-gc）：drop 12,259 startup syscalls by using dirents and deleting a log-only size scan（[@nwparker](https://github.com/nwparker)，[#18314](https://github.com/stablyai/orca/pull/18314)）
- 性能（sidebar）：memoize the lineage ancestor index and precompute sort labels（[@nwparker](https://github.com/nwparker)，[#18318](https://github.com/stablyai/orca/pull/18318)）
- 性能（combined-diff）：stop rebuilding whole-section derived state on every section load（[@nwparker](https://github.com/nwparker)，[#18321](https://github.com/stablyai/orca/pull/18321)）
- 性能（persistence）：stop rewriting redundant bytes in the profile store（[@nwparker](https://github.com/nwparker)，[#18317](https://github.com/stablyai/orca/pull/18317)）
- 杂项（workspaces）：drop the dead workspaceCleanup:hasKillableLocalProcesses IPC（[@nwparker](https://github.com/nwparker)，[#18386](https://github.com/stablyai/orca/pull/18386)）
- 性能（hot-paths）：delete allocation-only work in sort, explorer, monaco, rpc, snapshots（[@nwparker](https://github.com/nwparker)，[#18372](https://github.com/stablyai/orca/pull/18372)）
- 修复：table header transparency with opaque background（[@AmethystLiang](https://github.com/AmethystLiang)，[#18499](https://github.com/stablyai/orca/pull/18499)）

### 新贡献者 {#v1-4-197-contributors}

- @rudironsoni made their first contribution（[#16673](https://github.com/stablyai/orca/pull/16673)）

**完整变更对照：** [v1.4.196...v1.4.197](https://github.com/stablyai/orca/compare/v1.4.196...v1.4.197)
