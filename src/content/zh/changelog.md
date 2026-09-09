# 更新日志 {#changelog}

顶栏「更新」先给出最近三次的核心摘要；本页是对应官方 [Releases](https://github.com/stablyai/orca/releases) 的**完整中文译本**。命令、产品名、模块 scope 与 PR 编号保持英文，便于对照原文。

> 非官方译本。条目来自 `stablyai/orca` 各 tag 的 Release notes；合入到发版通常还需 48–72 小时。

## 核心摘要 {#highlights}

| 版本 | 日期 | 一句话 |
| --- | --- | --- |
| [v1.4.198](#v1-4-198) | 2026年9月8日 | 结构化聊天与 GitHub 路线图 |
| [v1.4.197](#v1-4-197) | 2026年9月4日 | 工作树与会话更稳更快 |
| [v1.4.196](#v1-4-196) | 2026年9月3日 | 切换更快，Native Chat 更可靠 |

### v1.4.198 · 结构化聊天与 GitHub 路线图 {#v1-4-198-summary}

2026年9月8日 · [本页全文](#v1-4-198) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.198)

- 实验设置开启 **Structured Chat** 后，Codex 聊天支持行内文件 diff、窗格操作、更清晰工具输出、单独停任务，以及移动端结构化聊天。
- GitHub Projects 的 Roadmap 改为时间线；桌面端增加标签滚动、更窄标签，并刷新通知。
- 工作区、渲染器、编辑器、终端、Git 与远程更快；SSH 中继和 Windows/WSL 恢复更稳。

### v1.4.197 · 工作树与会话更稳更快 {#v1-4-197-summary}

2026年9月4日 · [本页全文](#v1-4-197) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.197)

- 本地与远程工作区的 worktree、渲染器、编辑器、浏览器、终端和 Git 更快。
- Agent 会话、Native Chat、SSH 中继恢复以及 Windows/WSL 执行更抗故障。
- 可从操作系统把 Markdown 打开到浮动工作区；工作区 / 终端 / CLI / 云端可靠性增强。

### v1.4.196 · 切换更快，Native Chat 更可靠 {#v1-4-196-summary}

2026年9月3日 · [本页全文](#v1-4-196) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.196)

- 本地、WSL 与远程的 worktree 切换、Git 元数据扫描、终端启动和渲染器更新更快。
- Native Chat 更可靠：大命令结果、实时工具进度、图片附件与投递恢复。
- SSH、Windows/WSL、GitLab、更新器、启动与发布流程覆盖更广。

## 完整中文日志 {#full-notes}

## v1.4.198 结构化聊天与 GitHub 路线图 {#v1-4-198}

2026年9月8日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.198)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 重点变化 {#v1-4-198-notable}

- 在实验设置中开启 **Structured Chat** 后，可使用改进的 Codex 聊天界面：行内文件 diff、窗格操作、更清晰的工具输出、单独停止任务，以及移动端结构化 Codex 聊天。
- GitHub Projects 的 Roadmap 视图改为时间线；桌面端增加标签滚动、更窄标签，并刷新了通知。
- 工作区、渲染器、编辑器、终端、Git 与远程操作更快；SSH 中继和 Windows/WSL 恢复更稳。

### 产品体验 {#v1-4-198-product}

#### 工作区与项目 {#v1-4-198-workspaces}

- 修复创建工作区项目导览目标（[@AmethystLiang](https://github.com/AmethystLiang)，[#18502](https://github.com/stablyai/orca/pull/18502)）
- 修复（worktrees）：路由托管 worktree 的移除 按 已解析的执行主机（[@nwparker](https://github.com/nwparker)，[#18529](https://github.com/stablyai/orca/pull/18529)）
- 修复（worktrees）：解析执行主机 在两处 创建 worktree 的入口（[@nwparker](https://github.com/nwparker)，[#18545](https://github.com/stablyai/orca/pull/18545)）
- 保持浮动工作区 置于 正在工作的 Native Chat 窗格（[@brennanb2025](https://github.com/brennanb2025)，[#18692](https://github.com/stablyai/orca/pull/18692)）
- 修复（ui）：卸载项目选择器，先于 Add Project 交接（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18730](https://github.com/stablyai/orca/pull/18730)）
- 修复（sidebar）：确认筛选重置，先于露出当前工作区（[@nwparker](https://github.com/nwparker)，[#18708](https://github.com/stablyai/orca/pull/18708)）
- 修复（sidebar）：停止 ⌘⇧↓ worktree 导航跳到 第一行（[@nwparker](https://github.com/nwparker)，[#18804](https://github.com/stablyai/orca/pull/18804)）
- 停止已驱逐和过期的 worktree 预备（[@nwparker](https://github.com/nwparker)，[#18951](https://github.com/stablyai/orca/pull/18951)）
- 允许 worktree 创建在…期间继续过期预备回收（[@nwparker](https://github.com/nwparker)，[#18967](https://github.com/stablyai/orca/pull/18967)）
- 新增（github-projects）：渲染 Roadmap 项目视图为时间线（[@NaoyaTatetsu](https://github.com/NaoyaTatetsu)，[#17795](https://github.com/stablyai/orca/pull/17795)）
- 修复（runtime）：允许限定范围的 worktree 列表 报告未能覆盖的主机（[@nwparker](https://github.com/nwparker)，[#18645](https://github.com/stablyai/orca/pull/18645)）

#### 编辑器、浏览器与界面 {#v1-4-198-editor-ui}

- 回退"docs: add 乌克兰语 README 译本（[@OrcaWin](https://github.com/OrcaWin)，[#18570](https://github.com/stablyai/orca/pull/18570)）
- 回退"docs: 记录本地化工作流 （AGENTS.md）（[@OrcaWin](https://github.com/OrcaWin)，[#18571](https://github.com/stablyai/orca/pull/18571)）
- 保持选中行时注意力图标挖空为白色 （行被选中时）（[@AmethystLiang](https://github.com/AmethystLiang)，[#18679](https://github.com/stablyai/orca/pull/18679)）
- 增加标签滚动条（[@AmethystLiang](https://github.com/AmethystLiang)，[#18526](https://github.com/stablyai/orca/pull/18526)）
- 修复 Smart create 保留 任务检出哈希，配合 Create more（[@nwparker](https://github.com/nwparker)，[#18727](https://github.com/stablyai/orca/pull/18727)）
- 修复（browser）：让加载表面跟上 Orca 主题（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18738](https://github.com/stablyai/orca/pull/18738)）
- 修复（browser）：出示 Electron 自己的 User-Agent，以便 Cloudflare Turnstile 通过（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18749](https://github.com/stablyai/orca/pull/18749)）
- 减小标签最小宽度 从 88px 降到 72px（[@AmethystLiang](https://github.com/AmethystLiang)，[#18871](https://github.com/stablyai/orca/pull/18871)）
- 修复跨…保留 favicon：同源导航（[@AmethystLiang](https://github.com/AmethystLiang)，[#18879](https://github.com/stablyai/orca/pull/18879)）
- 修复（ci）：把已审核引用存进 reftable，以便大小写成对分支 don't fail fetch（[@nwparker](https://github.com/nwparker)，[#18970](https://github.com/stablyai/orca/pull/18970)）
- 打开 open new link should not 离开当前链接（[@AmethystLiang](https://github.com/AmethystLiang)，[#18873](https://github.com/stablyai/orca/pull/18873)）
- 支持更新已有的草稿 Release 在重新生成说明时（[@AmethystLiang](https://github.com/AmethystLiang)，[#19014](https://github.com/stablyai/orca/pull/19014)）
- 修复（source-control）：stack Retry below 「变更过多」提示（[@nwparker](https://github.com/nwparker)，[#19037](https://github.com/stablyai/orca/pull/19037)）
- 修复：显示 Agent 命令 once，且不 启动轮询（[@nwparker](https://github.com/nwparker)，[#18729](https://github.com/stablyai/orca/pull/18729)）

#### 设置与本地化 {#v1-4-198-settings}

- 修复（settings）：indent Agent 休眠 "Sleep after" sub-setting（[@brennanb2025](https://github.com/brennanb2025)，[#18379](https://github.com/stablyai/orca/pull/18379)）
- 修复（i18n）：提取 translateSearchKeyword 调用，以便设置搜索关键词 进入 en.json（[@imgusev](https://github.com/imgusev)，[#18040](https://github.com/stablyai/orca/pull/18040)）
- 修复（i18n）：区分 Duplicate 与 Copy（简体中文）（[@weibiansanjue](https://github.com/weibiansanjue)，[#18065](https://github.com/stablyai/orca/pull/18065)）
- 修复（i18n）：本地化剩余的新手引导界面（[@mors119](https://github.com/mors119)，[#17992](https://github.com/stablyai/orca/pull/17992)）
- 修复（i18n）：随包提供 新手引导 新手引导集成能力文案到启动目录（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18539](https://github.com/stablyai/orca/pull/18539)）
- 新增（i18n）：本地化 Orca Account settings and 导航 to Korean（[@hwantage](https://github.com/hwantage)，[#15849](https://github.com/stablyai/orca/pull/15849)）
- 新增（i18n）：增加 French UI locale（[@foXaCe](https://github.com/foXaCe)，[#16455](https://github.com/stablyai/orca/pull/16455)）
- 修复（i18n）：修复法语界面 漂移导致静态分析失败（[@nwparker](https://github.com/nwparker)，[#18550](https://github.com/stablyai/orca/pull/18550)）
- 修复（startup）：apply HTTP/1.1 兼容开关 for 已迁移的配置档, and stop parsing settings file pre-ready（[@nwparker](https://github.com/nwparker)，[#18621](https://github.com/stablyai/orca/pull/18621)）
- 新增（i18n）：本地化新手引导流程 为日语（[@tb-soshiro](https://github.com/tb-soshiro)，[#18787](https://github.com/stablyai/orca/pull/18787)）
- 改进通知视图（[@AmethystLiang](https://github.com/AmethystLiang)，[#18699](https://github.com/stablyai/orca/pull/18699)）
- 修复（source-control）：stack 创建 PR 提示's settings link below its message（[@nwparker](https://github.com/nwparker)，[#19046](https://github.com/stablyai/orca/pull/19046)）

### Agent 与工作流 {#v1-4-198-agents-workflow}

#### Agent 与 Native Chat {#v1-4-198-native-chat}

- Answer 结构化会话支持探测 无需安装 host（[@brennanb2025](https://github.com/brennanb2025)，[#18695](https://github.com/stablyai/orca/pull/18695)）
- 新增（native-chat）：restore 终端/聊天切换 for 桥接聊天 only（[@brennanb2025](https://github.com/brennanb2025)，[#18532](https://github.com/stablyai/orca/pull/18532)）
- 修复（native-chat）：clarify 当前进度（[@brennanb2025](https://github.com/brennanb2025)，[#18705](https://github.com/stablyai/orca/pull/18705)）
- 新增（claude）：移动结构化 Native Chat onto Claude Agent SDK and enable it on macOS and Linux（[@brennanb2025](https://github.com/brennanb2025)，[#18560](https://github.com/stablyai/orca/pull/18560)）
- 新增（native-chat）：expose split and 移到窗格操作 in Chat UI 模式（[@brennanb2025](https://github.com/brennanb2025)，[#18714](https://github.com/stablyai/orca/pull/18714)）
- 修复（native-chat）：渲染 Claude 结构化聊天 through same UI as Codex（[@brennanb2025](https://github.com/brennanb2025)，[#18743](https://github.com/stablyai/orca/pull/18743)）
- 修复（native-chat）：让文档路径和链接可点击 in chat（[@brennanb2025](https://github.com/brennanb2025)，[#18712](https://github.com/stablyai/orca/pull/18712)）
- 新增（native-chat）：渲染 Agent 文件编辑 as 行内 diff 卡片（[@brennanb2025](https://github.com/brennanb2025)，[#18765](https://github.com/stablyai/orca/pull/18765)）
- 显示 Claude 后台任务状态 in Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#18757](https://github.com/stablyai/orca/pull/18757)）
- 修复（agent-session）：拒绝 提交前的结构化创建 并用 envelope 说明（[@brennanb2025](https://github.com/brennanb2025)，[#18697](https://github.com/stablyai/orca/pull/18697)）
- 修复（native-chat）：say when structured launch 回退到终端（[@brennanb2025](https://github.com/brennanb2025)，[#18762](https://github.com/stablyai/orca/pull/18762)）
- 修复（native-chat）：避免 settling 交接 throwing 未处理的 Promise 拒绝 at teardown（[@nwparker](https://github.com/nwparker)，[#18824](https://github.com/stablyai/orca/pull/18824)）
- 修复（claude）：让恢复屏障 cover exit still climbing close ladder（[@nwparker](https://github.com/nwparker)，[#18826](https://github.com/stablyai/orca/pull/18826)）
- 新增（native-chat）：为 Codex 工具行标注 按 what command actually did（[@brennanb2025](https://github.com/brennanb2025)，[#18760](https://github.com/stablyai/orca/pull/18760)）
- 新增（native-chat）：model Codex MCP and 网页搜索条目，而不是泄漏操作码（[@brennanb2025](https://github.com/brennanb2025)，[#18763](https://github.com/stablyai/orca/pull/18763)）
- 修复（native-chat）：publish 结构化会话状态 from host so sidebar never goes stale（[@brennanb2025](https://github.com/brennanb2025)，[#18776](https://github.com/stablyai/orca/pull/18776)）
- 新增（native-chat）：单独停止被监视的任务（[@brennanb2025](https://github.com/brennanb2025)，[#18807](https://github.com/stablyai/orca/pull/18807)）
- 修复（native-chat）：tell SQLite 之前的聊天 how to carry on（[@brennanb2025](https://github.com/brennanb2025)，[#18808](https://github.com/stablyai/orca/pull/18808)）
- 修复（agent-session）：never open 旁路终端 on unproven create（[@brennanb2025](https://github.com/brennanb2025)，[#18735](https://github.com/stablyai/orca/pull/18735)）
- 修复（native-chat）：修复 结构化聊天 tab permanently fenced 按 inherited 发布纪元（[@brennanb2025](https://github.com/brennanb2025)，[#18906](https://github.com/stablyai/orca/pull/18906)）
- 修复（native-chat）：resume 结构化聊天 from Agent 会话历史（[@OrcaWin](https://github.com/OrcaWin)，[#18933](https://github.com/stablyai/orca/pull/18933)）
- 修复（native-chat）：honor structured routing，配合 已保存的选项（[@brennanb2025](https://github.com/brennanb2025)，[#19040](https://github.com/stablyai/orca/pull/19040)）

#### 自动化 {#v1-4-198-automations}

- 新增（automations）：restore 列排序 on list（[@nwparker](https://github.com/nwparker)，[#18885](https://github.com/stablyai/orca/pull/18885)）
- Shorten 编排技能描述 under Agent Skills 1024 字符上限（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18683](https://github.com/stablyai/orca/pull/18683)）
- 修复（orchestration）：fence dispatch CLI 前导 so it stops rendering as headings（[@brennanb2025](https://github.com/brennanb2025)，[#18718](https://github.com/stablyai/orca/pull/18718)）
- 修复（orchestration）：带类型的错误码 for dispatch and worker 启动拒绝（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18902](https://github.com/stablyai/orca/pull/18902)）
- 修复（automation）：保持显式后台启动 off screen（[@nwparker](https://github.com/nwparker)，[#18898](https://github.com/stablyai/orca/pull/18898)）

#### 终端与 CLI {#v1-4-198-terminal-cli}

- 修复：use 回退 shell 就绪 and assert fish 启动时序（[@nwparker](https://github.com/nwparker)，[#18755](https://github.com/stablyai/orca/pull/18755)）
- 修复（terminal）：释放暂停闩锁时冲掉 xterm 停住的渲染器缩放（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18510](https://github.com/stablyai/orca/pull/18510)）
- 修复（cli）：reject 运行时选择器 on `host list` and `environment list` (#18105)（[@nwparker](https://github.com/nwparker)，[#18405](https://github.com/stablyai/orca/pull/18405)）
- 修复（terminal）：让折行搜索 rewind iterative and bound its scans（[@nwparker](https://github.com/nwparker)，[#18402](https://github.com/stablyai/orca/pull/18402)）
- 修复（terminals）：增加 equality bailouts to 标签窗格展开操作（[@nwparker](https://github.com/nwparker)，[#18332](https://github.com/stablyai/orca/pull/18332)）
- 修复状态栏渲染循环 in runtime target hook（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18685](https://github.com/stablyai/orca/pull/18685)）
- 修复（agents）：detect agent CLIs installed outside 版本管理器（[@nwparker](https://github.com/nwparker)，[#18336](https://github.com/stablyai/orca/pull/18336)）
- 修复（worktrees）：避免 failed worktree scan from being recorded as 权威空列表（[@nwparker](https://github.com/nwparker)，[#18456](https://github.com/stablyai/orca/pull/18456)）
- 修复（browser-pane）：避免已死的客户端托管页面 from killing workbench（[@nwparker](https://github.com/nwparker)，[#18334](https://github.com/stablyai/orca/pull/18334)）
- 修复（terminal）：避免 hidden pane's unmeasured 80x24 from overwriting 活动 PTY's size on reattach（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18706](https://github.com/stablyai/orca/pull/18706)）
- 修复（runtime）：bound terminal-wait 阻塞提示规则 to 当前屏幕底部（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18817](https://github.com/stablyai/orca/pull/18817)）

### 远程与平台 {#v1-4-198-remote}

#### SSH、中继与远程 {#v1-4-198-ssh-relay}

- 修复（relay）：停止 self-closing 控制套接字 on 未知消息（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18400](https://github.com/stablyai/orca/pull/18400)）
- 修复（dashboard）：打开远程会话 from every agent reveal path（[@nwparker](https://github.com/nwparker)，[#18403](https://github.com/stablyai/orca/pull/18403)）
- 修复（cli）：报告 worktree 列表的主机覆盖 and stop 行数上限 starving remote hosts (#18104)（[@nwparker](https://github.com/nwparker)，[#18417](https://github.com/stablyai/orca/pull/18417)）
- 修复（ssh）：measure 窗格空闲 in unit sweep's kill operates on（[@nwparker](https://github.com/nwparker)，[#18415](https://github.com/stablyai/orca/pull/18415)）
- 修复（ssh）：停止窗格接管 certifying death from relay's not-found union（[@nwparker](https://github.com/nwparker)，[#18531](https://github.com/stablyai/orca/pull/18531)）
- 修复（ssh）：close macOS relay's per-terminal pty 文件描述符泄漏（[@nwparker](https://github.com/nwparker)，[#18534](https://github.com/stablyai/orca/pull/18534)）
- 修复（ssh）：解析 pane's binding from target partition, not 过期的本地副本（[@nwparker](https://github.com/nwparker)，[#18546](https://github.com/stablyai/orca/pull/18546)）
- 修复（relay）：reject 畸形百分号转义 on upgrade，而不是 throwing（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18547](https://github.com/stablyai/orca/pull/18547)）
- 修复（ssh）：避免 daemon's own services from blocking 被取代中继的回收（[@nwparker](https://github.com/nwparker)，[#18586](https://github.com/stablyai/orca/pull/18586)）
- 修复（terminal）：warn about remote work when closing window or quitting（[@nwparker](https://github.com/nwparker)，[#18593](https://github.com/stablyai/orca/pull/18593)）
- 修复（relay）：停止 taking 集群 cell 清单锁 on 按连接的路径（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18606](https://github.com/stablyai/orca/pull/18606)）
- 修复（hosts）：解析 文件夹工作区's SSH host from repo's host, not its raw connectionId（[@nwparker](https://github.com/nwparker)，[#18598](https://github.com/stablyai/orca/pull/18598)）
- 修复（remote）：避免 disclosure list latching 镜像完整门闩（[@nwparker](https://github.com/nwparker)，[#18619](https://github.com/stablyai/orca/pull/18619)）
- 新增（relay-infra）：动态 NAT 端口 and alerts for 2026-09-04 停滞信号（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18693](https://github.com/stablyai/orca/pull/18693)）
- 新增（relay）：tell phone when its desktop is 已登出（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18698](https://github.com/stablyai/orca/pull/18698)）
- 新增（relay-infra）：cell 崩溃率告警 and 事故看板（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18717](https://github.com/stablyai/orca/pull/18717)）
- 新增（relay）：允许 cells dial Cloud SQL over 私有 IP（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18720](https://github.com/stablyai/orca/pull/18720)）
- 修复（desktop）：never replay 刷新令牌 after timeout; jitter 中继租约续期（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18719](https://github.com/stablyai/orca/pull/18719)）
- 修复（relay-ops）：thrown 健康检查请求 is not health reading; 鉴权探测 does not require /ready（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18723](https://github.com/stablyai/orca/pull/18723)）
- 基础设施（relay）：去掉 unapplied 区域标签 from 运行时日志指标（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18734](https://github.com/stablyai/orca/pull/18734)）
- 修复（relay-ops）：retry failed MIG 清单 read once，先于 calling cell's 电源状态未知（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18740](https://github.com/stablyai/orca/pull/18740)）
- 修复（relay-ops）：accept monitor evidence from 祖先提交，配合 identical monitor code（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18754](https://github.com/stablyai/orca/pull/18754)）
- 修复（relay-ops）：retry transient 管理端点失败 in 同容量校验 and 迁移任务（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18769](https://github.com/stablyai/orca/pull/18769)）
- 修复（relay-ops）：retry freshness-only 预检失败 on first same-cap wave too（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18778](https://github.com/stablyai/orca/pull/18778)）
- 修复（relay-ops）：align cloud-data freshness bar，配合 Cloud Monitoring 发布延迟（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18798](https://github.com/stablyai/orca/pull/18798)）
- 修复：recover from 备用 shell 安装, and close relay 重复回显缺口（[@nwparker](https://github.com/nwparker)，[#18796](https://github.com/stablyai/orca/pull/18796)）
- 修复（ssh）：compile node-pty from host's own Node 头文件，而不是 nodejs.org (STA-6674)（[@nwparker](https://github.com/nwparker)，[#18774](https://github.com/stablyai/orca/pull/18774)）
- 修复（ssh）：允许 host say whether it armed shell 就绪标记（[@nwparker](https://github.com/nwparker)，[#18802](https://github.com/stablyai/orca/pull/18802)）
- 修复（relay-ops）：分区域 cell 延迟 bar and attributable 预检失败（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18877](https://github.com/stablyai/orca/pull/18877)）
- 新增（cli）：报告 SSH 主机平台（[@nwparker](https://github.com/nwparker)，[#18896](https://github.com/stablyai/orca/pull/18896)）
- 修复（relay）：abandon 死亡客户端 accept, jitter and lengthen 控制租约, fail 直连探测 fast（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18959](https://github.com/stablyai/orca/pull/18959)）
- 修复（sidebar）：避免漏掉的 pointerup from hiding 远程主机分区（[@nwparker](https://github.com/nwparker)，[#19032](https://github.com/stablyai/orca/pull/19032)）
- 修复（mobile）：分阶段的中继拨号 bound so slow cell is not hung up on（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18518](https://github.com/stablyai/orca/pull/18518)）
- 修复（mobile）：停止 host streams after 中继订阅取消（[@nwparker](https://github.com/nwparker)，[#18926](https://github.com/stablyai/orca/pull/18926)）

#### Windows 与 WSL {#v1-4-198-windows-wsl}

- 修复（windows）：让安装目录 ACL 修复 rescue launch it runs in（[@nwparker](https://github.com/nwparker)，[#18361](https://github.com/stablyai/orca/pull/18361)）
- 修复（ssh）：移动 Windows 文件写入 off PowerShell 5.1 stdin onto sftp（[@nwparker](https://github.com/nwparker)，[#18596](https://github.com/stablyai/orca/pull/18596)）
- 修复（relay）：release ConPTY conin 句柄 after teardown, not，先于 it（[@nwparker](https://github.com/nwparker)，[#18601](https://github.com/stablyai/orca/pull/18601)）
- 修复（relay）：observe Windows PTY 子进程，而不是 answering false（[@nwparker](https://github.com/nwparker)，[#18591](https://github.com/stablyai/orca/pull/18591)）
- 修复（pty）：close 伪控制台 and dispose conout 工作线程 on Windows self-exit (F24)（[@nwparker](https://github.com/nwparker)，[#18635](https://github.com/stablyai/orca/pull/18635)）
- 修复（renderer）：避免 Node-only 进程表模块 blanking app at boot（[@nwparker](https://github.com/nwparker)，[#18814](https://github.com/stablyai/orca/pull/18814)）
- 修复（windows）：copy daemon 主机可执行文件 verbatim，而不是 renaming it (MDE T1036)（[@OrcaWin](https://github.com/OrcaWin)，[#17865](https://github.com/stablyai/orca/pull/17865)）
- 修复（computer-use）：run Windows runtime as one 常驻助手（[@OrcaWin](https://github.com/OrcaWin)，[#17858](https://github.com/stablyai/orca/pull/17858)）
- 修复（windows）：去掉 EDR-flagged -ExecutionPolicy Bypass from 编码后的 PowerShell（[@OrcaWin](https://github.com/OrcaWin)，[#17880](https://github.com/stablyai/orca/pull/17880)）
- 修复（windows）：read 从内核读取命令行, not each process's PEB（[@OrcaWin](https://github.com/OrcaWin)，[#17886](https://github.com/stablyai/orca/pull/17886)）
- 修复（windows）：用原生方式扫描端口，而不是编码后的 PowerShell（[@OrcaWin](https://github.com/OrcaWin)，[#17861](https://github.com/stablyai/orca/pull/17861)）
- 修复（windows）：解析 npm/pnpm ..cmd 垫片 past cmd.exe（[@OrcaWin](https://github.com/OrcaWin)，[#17869](https://github.com/stablyai/orca/pull/17869)）
- 修复（windows）：sign NSIS 卸载器 via SignPath（[@OrcaWin](https://github.com/OrcaWin)，[#17868](https://github.com/stablyai/orca/pull/17868)）
- 修复（windows）：去掉 no-op -ExecutionPolicy Bypass from -Command spawns（[@OrcaWin](https://github.com/OrcaWin)，[#17873](https://github.com/stablyai/orca/pull/17873)）

#### 移动端 {#v1-4-198-mobile}

- 新增（mobile）：structured native Codex chat（[@brennanb2025](https://github.com/brennanb2025)，[#18074](https://github.com/stablyai/orca/pull/18074)）
- 修复（mobile）：restore terminal input when reopening worktrees（[@shaharmor](https://github.com/shaharmor)，[#16239](https://github.com/stablyai/orca/pull/16239)）
- 修复（mobile）：separate image attachment paths from following prompt text (STA-4847)（[@brennanb2025](https://github.com/brennanb2025)，[#15690](https://github.com/stablyai/orca/pull/15690)）
- 修复（native-chat）：tell old mobile builds why 结构化聊天 is missing（[@brennanb2025](https://github.com/brennanb2025)，[#18756](https://github.com/stablyai/orca/pull/18756)）
- 新增（mobile）：port restructured native-chat turn status and 实时工具进度（[@brennanb2025](https://github.com/brennanb2025)，[#18761](https://github.com/stablyai/orca/pull/18761)）
- 升级 mobile app.json to 0.0.48（[@brennanb2025](https://github.com/brennanb2025)，[#18801](https://github.com/stablyai/orca/pull/18801)）
- 修复（mobile）：preserve iPad 硬件键盘焦点（[@ramarivera](https://github.com/ramarivera)，[#12772](https://github.com/stablyai/orca/pull/12772)）
- 升级 mobile Android versionCode to 16 to 匹配 0.0.48 release（[@brennanb2025](https://github.com/brennanb2025)，[#19101](https://github.com/stablyai/orca/pull/19101)）

### 质量与交付 {#v1-4-198-quality}

#### 性能：界面与工作区 {#v1-4-198-perf-ui}

- 性能：find mobile Markdown 占位前缀 in one scan（[@nwparker](https://github.com/nwparker)，[#18914](https://github.com/stablyai/orca/pull/18914)）
- 性能（ipc）：index worktree 所有者，而不是 rescanning repo list per lookup（[@nwparker](https://github.com/nwparker)，[#18416](https://github.com/stablyai/orca/pull/18416)）
- 性能（worktrees）：converge 回收清扫，而不是 re-walking doomed trees（[@nwparker](https://github.com/nwparker)，[#18429](https://github.com/stablyai/orca/pull/18429)）
- 性能（source-control）：sort 分支条目，先于 filtering, gate projections 按 视图模式（[@nwparker](https://github.com/nwparker)，[#18426](https://github.com/stablyai/orca/pull/18426)）
- 性能（persistence）：停止 writing every worktree 元数据行 twice（[@nwparker](https://github.com/nwparker)，[#18451](https://github.com/stablyai/orca/pull/18451)）
- 性能（sidebar）：停止 building 主机投影 row model throws away（[@nwparker](https://github.com/nwparker)，[#18638](https://github.com/stablyai/orca/pull/18638)）
- 性能（sidebar）：share one natural-worktree-id scan and drop redundant 行键连接（[@nwparker](https://github.com/nwparker)，[#18647](https://github.com/stablyai/orca/pull/18647)）
- 性能（renderer）：index four projections that rescanned their inputs per keystroke（[@nwparker](https://github.com/nwparker)，[#18747](https://github.com/stablyai/orca/pull/18747)）
- 性能（worktree）：overlap base refresh，配合 预备检出（[@nwparker](https://github.com/nwparker)，[#18998](https://github.com/stablyai/orca/pull/18998)）
- 性能（startup）：overlap runtime capability refresh，配合 session-tabs inventory（[@nwparker](https://github.com/nwparker)，[#18460](https://github.com/stablyai/orca/pull/18460)）
- 性能（editor）：build closing-fence pattern once per fence, not once per line（[@nwparker](https://github.com/nwparker)，[#18629](https://github.com/stablyai/orca/pull/18629)）
- 性能（right-sidebar）：cache active checks status，而不是 rebuilding its cache keys per store write（[@nwparker](https://github.com/nwparker)，[#18631](https://github.com/stablyai/orca/pull/18631)）
- 性能（renderer）：停止 two store selectors allocating on every write（[@nwparker](https://github.com/nwparker)，[#18632](https://github.com/stablyai/orca/pull/18632)）
- 性能（source-control）：停止 reconciling selection on every panel render（[@nwparker](https://github.com/nwparker)，[#18637](https://github.com/stablyai/orca/pull/18637)）
- 性能（browser）：assemble fragmented tunnel frames once（[@nwparker](https://github.com/nwparker)，[#18893](https://github.com/stablyai/orca/pull/18893)）
- 性能（editor）：reuse Markdown source blocks while positioning review notes（[@nwparker](https://github.com/nwparker)，[#18895](https://github.com/stablyai/orca/pull/18895)）
- 性能（editor）：reuse live Markdown search matches 跨越 unrelated renders（[@nwparker](https://github.com/nwparker)，[#18903](https://github.com/stablyai/orca/pull/18903)）
- 性能（explorer）：remove redundant dotfile path filter allocation（[@nwparker](https://github.com/nwparker)，[#18929](https://github.com/stablyai/orca/pull/18929)）
- 性能（browser）：reuse decoded single-chunk upload buffers（[@nwparker](https://github.com/nwparker)，[#18960](https://github.com/stablyai/orca/pull/18960)）
- 性能（tabs）：index saved tab order 期间 hydration repair（[@nwparker](https://github.com/nwparker)，[#18964](https://github.com/stablyai/orca/pull/18964)）
- 性能（palette）：reuse allowed quality arrays 期间 matching（[@nwparker](https://github.com/nwparker)，[#18966](https://github.com/stablyai/orca/pull/18966)）
- 性能（renderer）：gate tab strip's worktree subscriptions and fix orchestration batch's self-invalidating cache（[@nwparker](https://github.com/nwparker)，[#18428](https://github.com/stablyai/orca/pull/18428)）
- 性能（renderer）：load project-location and feedback dialogs on click（[@nwparker](https://github.com/nwparker)，[#18440](https://github.com/stablyai/orca/pull/18440)）
- 性能（renderer）：narrow App-root badge and terminal pty-set subscriptions（[@nwparker](https://github.com/nwparker)，[#18444](https://github.com/stablyai/orca/pull/18444)）
- 性能（worktree）：remove redundant 创建 and terminal startup work（[@nwparker](https://github.com/nwparker)，[#18793](https://github.com/stablyai/orca/pull/18793)）
- 性能（worktrees）：classify each worktree once, defer SSH meta index, drop conflict-path probe（[@nwparker](https://github.com/nwparker)，[#18433](https://github.com/stablyai/orca/pull/18433)）
- 性能（remote）：read repo catalog once per publish, not once per worktree（[@nwparker](https://github.com/nwparker)，[#18410](https://github.com/stablyai/orca/pull/18410)）
- 性能（ssh）：coalesce concurrent git.listWorktrees reads（[@nwparker](https://github.com/nwparker)，[#18419](https://github.com/stablyai/orca/pull/18419)）
- 性能（worktree）：skip remote probes，配合 no possible result（[@nwparker](https://github.com/nwparker)，[#18821](https://github.com/stablyai/orca/pull/18821)）

#### 性能：终端与远程 {#v1-4-198-perf-terminal}

- 性能（orchestration）：bound worker terminal archive in linear time（[@nwparker](https://github.com/nwparker)，[#18622](https://github.com/stablyai/orca/pull/18622)）
- 性能（terminal）：scan only new tail lines for wait-blocked sentinel（[@nwparker](https://github.com/nwparker)，[#18437](https://github.com/stablyai/orca/pull/18437)）
- 性能（terminals）：spend one inspection start on whole cadence round（[@nwparker](https://github.com/nwparker)，[#18438](https://github.com/stablyai/orca/pull/18438)）
- 性能（terminal）：停止 copying every PTY chunk for two startup-error detectors（[@nwparker](https://github.com/nwparker)，[#18626](https://github.com/stablyai/orca/pull/18626)）
- 性能（terminal）：use real event-loop yields between chunked writes（[@nwparker](https://github.com/nwparker)，[#18627](https://github.com/stablyai/orca/pull/18627)）
- 性能（terminal）：skip partial-escape-tail walk on ESC-free PTY chunks（[@nwparker](https://github.com/nwparker)，[#18748](https://github.com/stablyai/orca/pull/18748)）
- 性能（persistence）：skip rewriting unchanged terminal scrollback snapshots（[@nwparker](https://github.com/nwparker)，[#18764](https://github.com/stablyai/orca/pull/18764)）
- 性能（terminal）：cheap-tier process inspection for anchored local agent panes（[@nwparker](https://github.com/nwparker)，[#18780](https://github.com/stablyai/orca/pull/18780)）
- 性能（persistence）：停止 dead SSH leases pinning metadata, retire unreachable tombstones（[@nwparker](https://github.com/nwparker)，[#18430](https://github.com/stablyai/orca/pull/18430)）
- 性能（runtime）：避免 expired-SSH-lease sweep from rescanning every tab layout（[@nwparker](https://github.com/nwparker)，[#18409](https://github.com/stablyai/orca/pull/18409)）
- 性能（relay）：per-cell inventory locks, delta counters, and pool statement timeout（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18722](https://github.com/stablyai/orca/pull/18722)）
- 性能（relay）：bound symlink directory probes remote readDir fans out（[@nwparker](https://github.com/nwparker)，[#18752](https://github.com/stablyai/orca/pull/18752)）
- 性能（relay）：drain fragmented frame buffers in linear time（[@nwparker](https://github.com/nwparker)，[#18891](https://github.com/stablyai/orca/pull/18891)）
- 性能（ssh）：reuse and release relay startup buffers（[@nwparker](https://github.com/nwparker)，[#18953](https://github.com/stablyai/orca/pull/18953)）
- 性能（ssh）：reuse streamed response idle timers（[@nwparker](https://github.com/nwparker)，[#18956](https://github.com/stablyai/orca/pull/18956)）
- 性能（terminal）：gate Command Code banner scan，先于 building its scan windows（[@nwparker](https://github.com/nwparker)，[#18628](https://github.com/stablyai/orca/pull/18628)）
- 性能（terminals）：允许 idle panes share one process-table capture，而不是 forking their own（[@nwparker](https://github.com/nwparker)，[#18742](https://github.com/stablyai/orca/pull/18742)）

#### 性能：核心与基础设施 {#v1-4-198-perf-core}

- 性能（mobile）：cancel 直连探测 when their owner stops（[@nwparker](https://github.com/nwparker)，[#18940](https://github.com/stablyai/orca/pull/18940)）
- 性能（speech）：reuse model download idle timer（[@nwparker](https://github.com/nwparker)，[#18945](https://github.com/stablyai/orca/pull/18945)）
- 性能（paths）：guard no-op regex passes on path-comparison hot path（[@nwparker](https://github.com/nwparker)，[#18418](https://github.com/stablyai/orca/pull/18418)）
- 性能（images）：probe raster headers，而不是 decoding whole payloads, memoize repo icon validation（[@nwparker](https://github.com/nwparker)，[#18421](https://github.com/stablyai/orca/pull/18421)）
- 性能（startup）：避免 persistence startup milestone from timing its own details closure（[@nwparker](https://github.com/nwparker)，[#18439](https://github.com/stablyai/orca/pull/18439)）
- 性能（persistence）：停止 double-traversing persisted session at load（[@nwparker](https://github.com/nwparker)，[#18458](https://github.com/stablyai/orca/pull/18458)）
- 性能（main）：take idle owner 随包提供 poll off main thread and batch pending marker probes（[@nwparker](https://github.com/nwparker)，[#18425](https://github.com/stablyai/orca/pull/18425)）
- 性能（ipc）：build filesystem allowed-root list once per authorization（[@nwparker](https://github.com/nwparker)，[#18423](https://github.com/stablyai/orca/pull/18423)）
- 性能（git）：overlap three independent submodule status reads（[@nwparker](https://github.com/nwparker)，[#18623](https://github.com/stablyai/orca/pull/18623)）
- 性能（ports）：serve unchanged macOS listeners from remembered metadata（[@nwparker](https://github.com/nwparker)，[#18650](https://github.com/stablyai/orca/pull/18650)）
- 性能（persistence）：避免 session write re-scanning and rebuilding unchanged state（[@nwparker](https://github.com/nwparker)，[#18739](https://github.com/stablyai/orca/pull/18739)）
- 性能（repos）：avoid quadratic icon source scans（[@nwparker](https://github.com/nwparker)，[#18892](https://github.com/stablyai/orca/pull/18892)）
- 性能（watcher）：skip remaining filesystem checks after cancellation（[@nwparker](https://github.com/nwparker)，[#18931](https://github.com/stablyai/orca/pull/18931)）
- 性能（skills）：skip symlink probes beyond discovery depth（[@nwparker](https://github.com/nwparker)，[#18937](https://github.com/stablyai/orca/pull/18937)）
- 性能（jira）：preserve replacement attachment download singleflight（[@nwparker](https://github.com/nwparker)，[#18944](https://github.com/stablyai/orca/pull/18944)）
- 性能（search）：assemble fragmented subprocess lines incrementally（[@nwparker](https://github.com/nwparker)，[#18973](https://github.com/stablyai/orca/pull/18973)）
- 性能（startup）：停止 queueing window 创建 behind proxy apply and i18n（[@nwparker](https://github.com/nwparker)，[#18436](https://github.com/stablyai/orca/pull/18436)）
- 性能（settings）：commit free-text account settings on debounce, not per keystroke（[@nwparker](https://github.com/nwparker)，[#18651](https://github.com/stablyai/orca/pull/18651)）
- 性能（claude-usage）：reject non-assistant transcript lines，先于 parsing them（[@nwparker](https://github.com/nwparker)，[#18640](https://github.com/stablyai/orca/pull/18640)）
- 性能（native-chat）：停止 rebuilding every transcript row on every stream frame（[@nwparker](https://github.com/nwparker)，[#18744](https://github.com/stablyai/orca/pull/18744)）
- 性能（automations）：reuse collation setup when sorting names（[@nwparker](https://github.com/nwparker)，[#18823](https://github.com/stablyai/orca/pull/18823)）
- 性能（orchestration）：project explicit columns so graph publish stops recompiling SQL（[@nwparker](https://github.com/nwparker)，[#18420](https://github.com/stablyai/orca/pull/18420)）
- 性能（orchestration）：project task columns so task reads hit statement cache（[@nwparker](https://github.com/nwparker)，[#18641](https://github.com/stablyai/orca/pull/18641)）
- 性能（agent-hooks）：find spool newlines，配合 Buffer.indexOf, not per-byte loop（[@nwparker](https://github.com/nwparker)，[#18639](https://github.com/stablyai/orca/pull/18639)）
- 性能（agent-hooks）：停止 cloning whole status roster on every hook event（[@nwparker](https://github.com/nwparker)，[#18642](https://github.com/stablyai/orca/pull/18642)）
- 性能（cli）：skip feature formatters 期间 help and error startup（[@nwparker](https://github.com/nwparker)，[#18923](https://github.com/stablyai/orca/pull/18923)）
- 性能（hooks）：use native reverse search for transcript lines（[@nwparker](https://github.com/nwparker)，[#18936](https://github.com/stablyai/orca/pull/18936)）
- 性能（cli）：skip impossible typo distance comparisons（[@nwparker](https://github.com/nwparker)，[#18977](https://github.com/stablyai/orca/pull/18977)）
- 性能（windows）：split process table into two flag sets（[@OrcaWin](https://github.com/OrcaWin)，[#17866](https://github.com/stablyai/orca/pull/17866)）
- 新增（perf）：lint repeated sort setup and schedule regression contracts（[@nwparker](https://github.com/nwparker)，[#18822](https://github.com/stablyai/orca/pull/18822)）
- 性能：decode fragmented CLI replies，且不 repeated scans（[@nwparker](https://github.com/nwparker)，[#18909](https://github.com/stablyai/orca/pull/18909)）
- 性能：avoid file-to-file scans when selecting deletion roots（[@nwparker](https://github.com/nwparker)，[#18913](https://github.com/stablyai/orca/pull/18913)）
- 性能：avoid repeated Quick Open exclusion string allocations（[@nwparker](https://github.com/nwparker)，[#18916](https://github.com/stablyai/orca/pull/18916)）
- 性能：skip unrelated shared symlink probes 期间 Git status（[@nwparker](https://github.com/nwparker)，[#18918](https://github.com/stablyai/orca/pull/18918)）
- 性能：avoid splitting every path 期间 file autocomplete（[@nwparker](https://github.com/nwparker)，[#18919](https://github.com/stablyai/orca/pull/18919)）
- 性能：avoid rescanning emitted source in analysis guards（[@nwparker](https://github.com/nwparker)，[#18920](https://github.com/stablyai/orca/pull/18920)）
- 性能：remember equivalent session tab source identities（[@nwparker](https://github.com/nwparker)，[#18976](https://github.com/stablyai/orca/pull/18976)）
- 性能：avoid repeated whitespace scans in diagnostic redaction（[@nwparker](https://github.com/nwparker)，[#18908](https://github.com/stablyai/orca/pull/18908)）

#### 测试与可靠性 {#v1-4-198-testing}

- 测试（e2e）：follow current sidebar project and activity actions（[@nwparker](https://github.com/nwparker)，[#18878](https://github.com/stablyai/orca/pull/18878)）
- 测试（renderer）：pin runtime-target selector identity stability that #18685 fixed（[@nwparker](https://github.com/nwparker)，[#18625](https://github.com/stablyai/orca/pull/18625)）
- 测试（child-process）：lower DIRECT_IMPORTER_PIN to ground two PRs took（[@OrcaWin](https://github.com/OrcaWin)，[#19009](https://github.com/stablyai/orca/pull/19009)）
- 测试（pty）：让 F24 patch pins catch regressions they name（[@nwparker](https://github.com/nwparker)，[#18660](https://github.com/stablyai/orca/pull/18660)）
- 测试（e2e）：stabilize terminal launch and rename menu fixtures（[@nwparker](https://github.com/nwparker)，[#18928](https://github.com/stablyai/orca/pull/18928)）
- 测试（cloud）：derive both reachability directions for relay inventory census（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18524](https://github.com/stablyai/orca/pull/18524)）
- 测试（e2e）：fence SSH recovery and release exited Electron pipes（[@nwparker](https://github.com/nwparker)，[#18880](https://github.com/stablyai/orca/pull/18880)）
- 修复（cloud）：run rehome control job under pipefail（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18537](https://github.com/stablyai/orca/pull/18537)）
- 修复（ports）：路由 status-bar popover scan to workspace's host（[@iverJisty](https://github.com/iverJisty)，[#17048](https://github.com/stablyai/orca/pull/17048)）
- 修复（crash-reporting）：bound replay-guard wedge bursts in ring，且不 losing their spans（[@nwparker](https://github.com/nwparker)，[#18441](https://github.com/stablyai/orca/pull/18441)）
- 修复（crash-reporting）：停止 claiming kills that never landed, and leave proof when own-Chromium pid set is unreadable（[@nwparker](https://github.com/nwparker)，[#18578](https://github.com/stablyai/orca/pull/18578)）
- 修复（crash-reporting）：sample system memory，先于 process is gone（[@nwparker](https://github.com/nwparker)，[#18356](https://github.com/stablyai/orca/pull/18356)）
- 修复（orca-profiles）：tell renderer when cloud session is revoked（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18694](https://github.com/stablyai/orca/pull/18694)）
- 修复（crash-reporting）：让 own-Chromium gate real choke point, and stop refusal leaking root（[@nwparker](https://github.com/nwparker)，[#18459](https://github.com/stablyai/orca/pull/18459)）
- 修复（recovery）：fail renderer recovery reload that never loads,，而不是 leaving dead window（[@nwparker](https://github.com/nwparker)，[#18466](https://github.com/stablyai/orca/pull/18466)）
- 修复（test）：停止 detached git maintenance racing divergence fixture teardown（[@nwparker](https://github.com/nwparker)，[#18810](https://github.com/stablyai/orca/pull/18810)）
- 修复（cloud）：允许 same-cap roll isolate Asia cells（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18811](https://github.com/stablyai/orca/pull/18811)）
- 修复（cloud）：validate protocol-0 same-cap cell plans，且不 rehome trust lines（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18818](https://github.com/stablyai/orca/pull/18818)）
- 修复（cloud）：bound and yield relay's global cell-inventory lock（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18521](https://github.com/stablyai/orca/pull/18521)）
- 修复（cloud）：retry committed-winner collision codes in relay schema startup（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18553](https://github.com/stablyai/orca/pull/18553)）
- 修复（cloud）：recalibrate relay monitor's exhausted-retry freeze to measured bar（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18569](https://github.com/stablyai/orca/pull/18569)）
- 修复（cloud）：recalibrate relay monitor's postgres-retry freeze to measured bar（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18580](https://github.com/stablyai/orca/pull/18580)）
- 修复（git）：share one failed-command error-text reader between local and SSH relay（[@nwparker](https://github.com/nwparker)，[#18398](https://github.com/stablyai/orca/pull/18398)）
- 测试：preserve Docker context in isolated VM recipes（[@nwparker](https://github.com/nwparker)，[#18884](https://github.com/stablyai/orca/pull/18884)）
- 测试：isolate native crash restoration and refresh stale fixtures（[@nwparker](https://github.com/nwparker)，[#18883](https://github.com/stablyai/orca/pull/18883)）
- 测试：pin worker visibility fixture command and handle（[@nwparker](https://github.com/nwparker)，[#18897](https://github.com/stablyai/orca/pull/18897)）
- 测试：canonicalize setup fixture paths，先于 worktree lookup（[@nwparker](https://github.com/nwparker)，[#18912](https://github.com/stablyai/orca/pull/18912)）
- 测试：align desktop platform oracles，配合 native behavior（[@nwparker](https://github.com/nwparker)，[#18915](https://github.com/stablyai/orca/pull/18915)）
- 测试：follow sidebar reveal confirmation，配合 stable workspace target（[@nwparker](https://github.com/nwparker)，[#18921](https://github.com/stablyai/orca/pull/18921)）
- 测试：pin terminal Codex home to explicit managed account（[@nwparker](https://github.com/nwparker)，[#18935](https://github.com/stablyai/orca/pull/18935)）
- 测试：deliver real terminal input and preserve setup reports（[@nwparker](https://github.com/nwparker)，[#18939](https://github.com/stablyai/orca/pull/18939)）
- 测试：isolate skill cloud fixture ports 跨越 workers（[@nwparker](https://github.com/nwparker)，[#18942](https://github.com/stablyai/orca/pull/18942)）
- 测试：align Source Control AI generation fixtures（[@nwparker](https://github.com/nwparker)，[#18941](https://github.com/stablyai/orca/pull/18941)）
- 测试：保持 artifact share fixtures unexpired 跨越 calendar dates（[@nwparker](https://github.com/nwparker)，[#18955](https://github.com/stablyai/orca/pull/18955)）
- 测试：让 SSH artifact regression fixtures reliable at narrow widths（[@nwparker](https://github.com/nwparker)，[#18947](https://github.com/stablyai/orca/pull/18947)）
- 测试：order restart fixture readiness around daemon recovery（[@nwparker](https://github.com/nwparker)，[#18949](https://github.com/stablyai/orca/pull/18949)）
- 测试：isolate Source Control generation from shared repository remotes（[@nwparker](https://github.com/nwparker)，[#18962](https://github.com/stablyai/orca/pull/18962)）
- 修复（hooks）：register Claude hook script directly on Windows (#18875)（[@OrcaWin](https://github.com/OrcaWin)，[#18905](https://github.com/stablyai/orca/pull/18905)）
- 测试：drain project menu focus restoration，先于 teardown（[@nwparker](https://github.com/nwparker)，[#18971](https://github.com/stablyai/orca/pull/18971)）
- 测试：honor background mode in paired client window helpers（[@nwparker](https://github.com/nwparker)，[#18978](https://github.com/stablyai/orca/pull/18978)）
- 测试：bound release checkout fixtures and gate delayed imports（[@nwparker](https://github.com/nwparker)，[#18981](https://github.com/stablyai/orca/pull/18981)）
- 测试：isolate window mocks from inherited launch flags（[@nwparker](https://github.com/nwparker)，[#18989](https://github.com/stablyai/orca/pull/18989)）
- 测试：匹配 explorer filenames independently of git badges（[@nwparker](https://github.com/nwparker)，[#18997](https://github.com/stablyai/orca/pull/18997)）
- 测试：synchronize large repository recovery，配合 Retry request（[@nwparker](https://github.com/nwparker)，[#18999](https://github.com/stablyai/orca/pull/18999)）
- 修复（tests）：stabilize divider viewport and pointer-capture event ordering（[@nwparker](https://github.com/nwparker)，[#19004](https://github.com/stablyai/orca/pull/19004)）
- 修复（tests）：provide window manager for Linux Electron CI（[@nwparker](https://github.com/nwparker)，[#19007](https://github.com/stablyai/orca/pull/19007)）
- 测试：lower child-process import pin after ACL migration（[@nwparker](https://github.com/nwparker)，[#19012](https://github.com/stablyai/orca/pull/19012)）
- 修复（tests）：complete hidden SSH dialog exits 期间 cleanup（[@nwparker](https://github.com/nwparker)，[#18993](https://github.com/stablyai/orca/pull/18993)）
- 测试：use valid repo filter in workspace reveal coverage（[@nwparker](https://github.com/nwparker)，[#19017](https://github.com/stablyai/orca/pull/19017)）
- 测试：cover native X11 Hangul-plus-digit PTY bytes in CI（[@nwparker](https://github.com/nwparker)，[#19013](https://github.com/stablyai/orca/pull/19013)）
- 测试：await fresh inventory after headless terminal materialization（[@nwparker](https://github.com/nwparker)，[#19028](https://github.com/stablyai/orca/pull/19028)）
- 测试：wait for board pointer readiness，先于 marquee selection（[@nwparker](https://github.com/nwparker)，[#19029](https://github.com/stablyai/orca/pull/19029)）
- 测试：await reattach replay，先于 checking mouse reset（[@nwparker](https://github.com/nwparker)，[#19039](https://github.com/stablyai/orca/pull/19039)）
- 测试：require recorded Git activity in polling regression（[@nwparker](https://github.com/nwparker)，[#19041](https://github.com/stablyai/orca/pull/19041)）
- 测试：preserve Windows golden command failures（[@nwparker](https://github.com/nwparker)，[#19047](https://github.com/stablyai/orca/pull/19047)）
- 测试：canonicalize Windows fresh-profile fixture path（[@nwparker](https://github.com/nwparker)，[#19049](https://github.com/stablyai/orca/pull/19049)）
- 测试：修复 Windows paste setup and newline expectations（[@nwparker](https://github.com/nwparker)，[#19050](https://github.com/stablyai/orca/pull/19050)）
- 测试：align Windows shell icons，配合 project runtime ownership（[@nwparker](https://github.com/nwparker)，[#19053](https://github.com/stablyai/orca/pull/19053)）
- 测试：exercise supported ConPTY keyboard protocol reset（[@nwparker](https://github.com/nwparker)，[#19054](https://github.com/stablyai/orca/pull/19054)）
- 测试：reject unsupported app-server in golden agent fixture（[@nwparker](https://github.com/nwparker)，[#19056](https://github.com/stablyai/orca/pull/19056)）
- 测试：reject unsupported app-server in WSL golden stub（[@nwparker](https://github.com/nwparker)，[#19062](https://github.com/stablyai/orca/pull/19062)）
- 测试：canonicalize native Windows paths 期间 repository teardown（[@nwparker](https://github.com/nwparker)，[#19064](https://github.com/stablyai/orca/pull/19064)）
- 测试：run real WSL terminal launch and paste in PR CI（[@nwparker](https://github.com/nwparker)，[#19072](https://github.com/stablyai/orca/pull/19072)）
- 测试：restore SSH bulk-open freeze coverage in headed CI（[@nwparker](https://github.com/nwparker)，[#19081](https://github.com/stablyai/orca/pull/19081)）
- 测试：enable direct and client-hosted SSH browser coverage（[@nwparker](https://github.com/nwparker)，[#19090](https://github.com/stablyai/orca/pull/19090)）
- 测试：reconnect after replacing same-ID runtime pairing（[@nwparker](https://github.com/nwparker)，[#19094](https://github.com/stablyai/orca/pull/19094)）
- 测试：enable Docker SSH browser network 路由 coverage in CI（[@nwparker](https://github.com/nwparker)，[#19095](https://github.com/stablyai/orca/pull/19095)）
- 测试：修复 nested SSH fixture after HUB restart（[@nwparker](https://github.com/nwparker)，[#19098](https://github.com/stablyai/orca/pull/19098)）
- 测试：enable localhost SSH terminal and hook journey in CI（[@nwparker](https://github.com/nwparker)，[#19097](https://github.com/stablyai/orca/pull/19097)）
- 测试：reuse authoritative SSH connection readiness in localhost fixture（[@nwparker](https://github.com/nwparker)，[#19102](https://github.com/stablyai/orca/pull/19102)）
- 测试：follow retained Activity sidebar 期间 pane selection（[@nwparker](https://github.com/nwparker)，[#19107](https://github.com/stablyai/orca/pull/19107)）
- 测试：isolate source-control generation repositories per scenario（[@nwparker](https://github.com/nwparker)，[#19105](https://github.com/stablyai/orca/pull/19105)）
- 测试：cover SSH reattach replay and enable deterministic Codex CI（[@nwparker](https://github.com/nwparker)，[#19106](https://github.com/stablyai/orca/pull/19106)）

#### 发布、CI 与文档 {#v1-4-198-release-ci}

- 杂项：update in-app Android APK link to 0.0.47（[@AmethystLiang](https://github.com/AmethystLiang)，[#18745](https://github.com/stablyai/orca/pull/18745)）
- 杂项（cloud）：close Workload Identity cutover onto stablyai/orca（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18509](https://github.com/stablyai/orca/pull/18509)）
- 重构（agents）：one pane-identity resolver behind six thin adapters (tranche 0)（[@brennanb2025](https://github.com/brennanb2025)，[#18243](https://github.com/stablyai/orca/pull/18243)）
- 文档（cloud）：reconcile 2026-08-23 retry figure，配合 gate metric（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18581](https://github.com/stablyai/orca/pull/18581)）
- CI（package）：retry apt fetches and docker builds behind Ubuntu mirror（[@nwparker](https://github.com/nwparker)，[#18797](https://github.com/stablyai/orca/pull/18797)）
- 重构（agent-session-journal）：移动 session journal onto SQLite（[@brennanb2025](https://github.com/brennanb2025)，[#18652](https://github.com/stablyai/orca/pull/18652)）
- 重构（agent-session）：consolidate wire type imports below lint limit（[@nwparker](https://github.com/nwparker)，[#18930](https://github.com/stablyai/orca/pull/18930)）
- 杂项（cloud）：pin staging relay c3 to director's image（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18508](https://github.com/stablyai/orca/pull/18508)）
- 重构（git）：share push-target resolution between local and SSH relay（[@nwparker](https://github.com/nwparker)，[#18406](https://github.com/stablyai/orca/pull/18406)）
- 文档（relay）：2026-09 reconnect findings, checklist, roadmap, and Roll 2 plan（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18958](https://github.com/stablyai/orca/pull/18958)）
- 文档（relay）：record Roll 2 phase 0/1 (code merge, image, director deploy)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18979](https://github.com/stablyai/orca/pull/18979)）
- 文档（relay）：Roll 2 cell roll record and checklist ticks（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19096](https://github.com/stablyai/orca/pull/19096)）
- 文档（relay）：correct why ConPTY teardown asset diverges from desktop patch（[@nwparker](https://github.com/nwparker)，[#18636](https://github.com/stablyai/orca/pull/18636)）
- 修复（release）：restore version and harden staging confirmation（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18515](https://github.com/stablyai/orca/pull/18515)）
- 文档：记录本地化工作流 （AGENTS.md）（[@tmchow](https://github.com/tmchow)，[#6204](https://github.com/stablyai/orca/pull/6204)）
- 文档：增加乌克兰语 README 译本（[@iho](https://github.com/iho)，[#16124](https://github.com/stablyai/orca/pull/16124)）
- 文档：增加微信群 9 二维码（[@AmethystLiang](https://github.com/AmethystLiang)，[#18608](https://github.com/stablyai/orca/pull/18608)）
- CI：减小运行器开销 and disposable package compression（[@nwparker](https://github.com/nwparker)，[#18948](https://github.com/stablyai/orca/pull/18948)）
- CI：skip 空闲 Mac 分配 and redundant native compiler setup（[@nwparker](https://github.com/nwparker)，[#18954](https://github.com/stablyai/orca/pull/18954)）
- CI：减小 dependency, checkout, and test deadline overhead（[@nwparker](https://github.com/nwparker)，[#18968](https://github.com/stablyai/orca/pull/18968)）
- CI：preserve 大小写成对的 Release 引用 through checkout and verify trust（[@nwparker](https://github.com/nwparker)，[#18980](https://github.com/stablyai/orca/pull/18980)）
- CI：expose existing E2E 用例选择 for 手动触发（[@nwparker](https://github.com/nwparker)，[#18987](https://github.com/stablyai/orca/pull/18987)）
- 修复（security）：apply Windows 路径加固 ACL that never ran（[@OrcaWin](https://github.com/OrcaWin)，[#17884](https://github.com/stablyai/orca/pull/17884)）
- 修复（release）：停止 shipping 未签名的 elevate.exe on Windows（[@OrcaWin](https://github.com/OrcaWin)，[#18044](https://github.com/stablyai/orca/pull/18044)）
- 修复（release）：revalidate draft state，先于 patching generated notes（[@AmethystLiang](https://github.com/AmethystLiang)，[#19019](https://github.com/stablyai/orca/pull/19019)）
- 修复（build）：pin config/relay-assets LF so 一次发布对应一个中继哈希（[@OrcaWin](https://github.com/OrcaWin)，[#19024](https://github.com/stablyai/orca/pull/19024)）
- 修复（packaging）：随包提供 Claude Agent SDK，配合 桌面构建（[@brennanb2025](https://github.com/brennanb2025)，[#19042](https://github.com/stablyai/orca/pull/19042)）

### 新贡献者 {#v1-4-198-contributors}

-  @imgusev made their first contribution [#18040](https://github.com/stablyai/orca/pull/18040)
-  @mors119 made their first contribution [#17992](https://github.com/stablyai/orca/pull/17992)
-  @foXaCe made their first contribution [#16455](https://github.com/stablyai/orca/pull/16455)
-  @iho made their first contribution [#16124](https://github.com/stablyai/orca/pull/16124)
-  @iverJisty made their first contribution [#17048](https://github.com/stablyai/orca/pull/17048)
-  @tb-soshiro made their first contribution [#18787](https://github.com/stablyai/orca/pull/18787)
-  @NaoyaTatetsu made their first contribution [#17795](https://github.com/stablyai/orca/pull/17795)
-  @ramarivera made their first contribution [#12772](https://github.com/stablyai/orca/pull/12772)

**完整变更对照：** [v1.4.197...v1.4.198](https://github.com/stablyai/orca/compare/v1.4.197...v1.4.198)

## v1.4.197 工作树与会话更稳更快 {#v1-4-197}

2026年9月4日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.197)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 重点变化 {#v1-4-197-notable}

- 本地与远程工作区的 worktree、渲染器、编辑器、浏览器、终端和 Git 操作更快。
- Agent 会话、Native Chat、SSH 中继恢复以及 Windows/WSL 执行更抗故障。
- 工作区、终端、CLI、云端与跨平台可靠性进一步增强。

### 界面与工作区 {#v1-4-197-ui-workspaces}

- 修复（task-page）：恢复界面拆分时丢掉的行为（[@nwparker](https://github.com/nwparker)，[#17926](https://github.com/stablyai/orca/pull/17926)）
- 修复（renderer）：恢复界面拆分丢掉的行为（[@nwparker](https://github.com/nwparker)，[#18002](https://github.com/stablyai/orca/pull/18002)）
- 重构（task-page）：把任务页折成一棵按 provider 分组的树（[@nwparker](https://github.com/nwparker)，[#18008](https://github.com/stablyai/orca/pull/18008)）
- 修复（palette）：运行时状态变化时重算快捷操作可用性（[@nwparker](https://github.com/nwparker)，[#18027](https://github.com/stablyai/orca/pull/18027)）
- 新增（app）：从操作系统把 Markdown 文件打开到浮动工作区（[@nwparker](https://github.com/nwparker)，[#17906](https://github.com/stablyai/orca/pull/17906)）
- 修复（review-notes）：分类发送失败与镜像标签（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18023](https://github.com/stablyai/orca/pull/18023)）
- 修复（github-project）：空字段值在两个方向都排到最后并分组（[@nwparker](https://github.com/nwparker)，[#17921](https://github.com/stablyai/orca/pull/17921)）
- 性能（git-common）：限制 worktree 轮询里的 fs-stat 扇出（[@nwparker](https://github.com/nwparker)，[#17839](https://github.com/stablyai/orca/pull/17839)）
- 修复（worktree）：模块拆分后恢复过期清理信号（[@nwparker](https://github.com/nwparker)，[#18058](https://github.com/stablyai/orca/pull/18058)）
- 性能（git）：对从不读取 sparse 的 worktree 列表跳过探测（[@nwparker](https://github.com/nwparker)，[#18050](https://github.com/stablyai/orca/pull/18050)）
- 修复（worktree）：事件批溢出时放宽 git-common 监视（[@nwparker](https://github.com/nwparker)，[#17916](https://github.com/stablyai/orca/pull/17916)）
- 性能（worktree）：修正预备检出命中率，并让未命中可见（[@nwparker](https://github.com/nwparker)，[#17863](https://github.com/stablyai/orca/pull/17863)）
- 修复（session）：禁止两台主机共用一个工作区会话桶（[@nwparker](https://github.com/nwparker)，[#17912](https://github.com/stablyai/orca/pull/17912)）
- 阻止已删工作区的浏览器快照复活（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#17779](https://github.com/stablyai/orca/pull/17779)）
- 性能（worktrees）：worktree 元数据清理按证据触发，而不是每次列表（[@nwparker](https://github.com/nwparker)，[#18034](https://github.com/stablyai/orca/pull/18034)）
- 打开新 Markdown 时自动聚焦编辑器（[@AmethystLiang](https://github.com/AmethystLiang)，[#18071](https://github.com/stablyai/orca/pull/18071)）
- 修复（automations）：无法核实的进程丢失报 lost，不报 failed（[@nwparker](https://github.com/nwparker)，[#17967](https://github.com/stablyai/orca/pull/17967)）
- 新增（editor）：Diff 查看器增加「显示空白」开关（[@hwantage](https://github.com/hwantage)，[#15120](https://github.com/stablyai/orca/pull/15120)）
- 性能（renderer）：为 worktree 所有者查找建索引，不再扫遍每个工作区（[@nwparker](https://github.com/nwparker)，[#18130](https://github.com/stablyai/orca/pull/18130)）
- 浏览器网站条目显示 favicon（[@AmethystLiang](https://github.com/AmethystLiang)，[#18099](https://github.com/stablyai/orca/pull/18099)）
- 性能（editor,source-control）：批处理关闭标签的模型清扫，去掉 40 个 store 订阅（[@nwparker](https://github.com/nwparker)，[#18144](https://github.com/stablyai/orca/pull/18144)）
- 性能（renderer）：避免三个常驻选择器每次写入都重扫 store（[@nwparker](https://github.com/nwparker)，[#18136](https://github.com/stablyai/orca/pull/18136)）
- 性能（renderer）：一次 store 写入对齐已水合工作区（[@nwparker](https://github.com/nwparker)，[#18150](https://github.com/stablyai/orca/pull/18150)）
- 测试（editor）：隔离批处理模型清扫的前缀泄漏，删除无效导出（[@nwparker](https://github.com/nwparker)，[#18240](https://github.com/stablyai/orca/pull/18240)）
- 性能（renderer）：useRef 种子只建一次，不要每次渲染（[@nwparker](https://github.com/nwparker)，[#18159](https://github.com/stablyai/orca/pull/18159)）
- 性能（renderer）：把 react-markdown 和 emoji 目录移出启动路径（少 371 KB 急切 JS）（[@nwparker](https://github.com/nwparker)，[#18149](https://github.com/stablyai/orca/pull/18149)）
- 性能（renderer）：隐藏窗口后停止六个定时器（[@nwparker](https://github.com/nwparker)，[#18134](https://github.com/stablyai/orca/pull/18134)）
- 性能（sidebar）：避免每次重算重新分配 423 个工作区描述符和 193 个桶投影（[@nwparker](https://github.com/nwparker)，[#18241](https://github.com/stablyai/orca/pull/18241)）
- 修复（worktrees）：已解析 worktree 快照不再替从未见过的仓库作答（[@nwparker](https://github.com/nwparker)，[#18295](https://github.com/stablyai/orca/pull/18295)）
- 性能（file-explorer）：目录刷新时不再把可见树重建两遍（[@nwparker](https://github.com/nwparker)，[#18319](https://github.com/stablyai/orca/pull/18319)）
- 性能（browser-pane）：客户端托管页面叠加层共用一个 rAF 循环（[@nwparker](https://github.com/nwparker)，[#18313](https://github.com/stablyai/orca/pull/18313)）
- 修复（cleanup）：工作区清理按已解析执行主机路由，不用仓库 connectionId（[@nwparker](https://github.com/nwparker)，[#18358](https://github.com/stablyai/orca/pull/18358)）
- 性能（editor）：避免每次渲染都重新分类整篇 Markdown（[@nwparker](https://github.com/nwparker)，[#18324](https://github.com/stablyai/orca/pull/18324)）
- 修复（source-control）：托管审查按已解析执行主机路由（[@nwparker](https://github.com/nwparker)，[#18382](https://github.com/stablyai/orca/pull/18382)）
- 性能（renderer）：为 diff 评论建索引，跳过空水合，去掉重复 normalize（[@nwparker](https://github.com/nwparker)，[#18375](https://github.com/stablyai/orca/pull/18375)）
- 修复（crash-reporting）：记录 Orca 发起的进程树终止，以便判定被杀的渲染器（[@nwparker](https://github.com/nwparker)，[#18367](https://github.com/stablyai/orca/pull/18367)）
- 性能（renderer）：把保险库和编辑器订阅移出每次写入路径（[@nwparker](https://github.com/nwparker)，[#18374](https://github.com/stablyai/orca/pull/18374)）
- 性能（renderer）：隐藏窗口时挂起休眠和面板看门狗工作（[@nwparker](https://github.com/nwparker)，[#18373](https://github.com/stablyai/orca/pull/18373)）

### Agent 与 Native Chat {#v1-4-197-native-chat}

- 修复（native-chat）：忽略过期的已恢复 working 状态（[@brennanb2025](https://github.com/brennanb2025)，[#17995](https://github.com/stablyai/orca/pull/17995)）
- 测试（orchestration）：意外的第二次探测调用要明确失败（[@nwparker](https://github.com/nwparker)，[#18037](https://github.com/stablyai/orca/pull/18037)）
- 修复（runtime）：从主机清单回收被围栏的 agent-session 拉起（[@nwparker](https://github.com/nwparker)，[#17976](https://github.com/stablyai/orca/pull/17976)）
- 回退（native-chat）：去掉推测性的 Fable 模型切换探测（[@brennanb2025](https://github.com/brennanb2025)，[#18215](https://github.com/stablyai/orca/pull/18215)）
- 修复（agents）：防止更深的厂商助手抢走窗格的 Agent 身份（[@brennanb2025](https://github.com/brennanb2025)，[#18062](https://github.com/stablyai/orca/pull/18062)）
- 修复 Agent 看板的设置配置（[@AmethystLiang](https://github.com/AmethystLiang)，[#18245](https://github.com/stablyai/orca/pull/18245)）
- 修复（native-chat）：保存过程中显示粘贴图片，并允许预览（[@brennanb2025](https://github.com/brennanb2025)，[#18118](https://github.com/stablyai/orca/pull/18118)）
- 修复（native-chat）：在 Codex 结构化聊天中显示图片（[@brennanb2025](https://github.com/brennanb2025)，[#18266](https://github.com/stablyai/orca/pull/18266)）
- 修复（native-chat）：让结构化 Codex 启动抗竞态（[@brennanb2025](https://github.com/brennanb2025)，[#18251](https://github.com/stablyai/orca/pull/18251)）
- 修复：macOS 的 $USER 含 @ 时 Claude 配额显示不可用（[@rudironsoni](https://github.com/rudironsoni)，[#16673](https://github.com/stablyai/orca/pull/16673)）
- 性能（agent-status）：缓存窗格路由与新鲜度下限，每笔事务只克隆一次暂存状态（[@nwparker](https://github.com/nwparker)，[#18323](https://github.com/stablyai/orca/pull/18323)）
- 新增（native-chat）：统一本地 Agent 入口路由（[@brennanb2025](https://github.com/brennanb2025)，[#18248](https://github.com/stablyai/orca/pull/18248)）

### 终端 {#v1-4-197-terminal}

- 修复（linux）：AppImage 只解压一次，给 CLI 单一入口（[@nwparker](https://github.com/nwparker)，[#15081](https://github.com/stablyai/orca/pull/15081)）
- 终端标签增加「复制 Session ID」菜单项（[@AmethystLiang](https://github.com/AmethystLiang)，[#18039](https://github.com/stablyai/orca/pull/18039)）
- 修复（terminal）：恢复的 PTY 所有者无法核实时仍保留窗格（[@brennanb2025](https://github.com/brennanb2025)，[#17860](https://github.com/stablyai/orca/pull/17860)）
- 修复（relay）：说明 node-pty 加载失败原因，而不是一次猜四个（[@nwparker](https://github.com/nwparker)，[#17891](https://github.com/stablyai/orca/pull/17891)）
- 修复（agent-status）：仍持有 PTY 的过期窗格报 unverifiable，不报 idle（[@nwparker](https://github.com/nwparker)，[#18012](https://github.com/stablyai/orca/pull/18012)）
- 修复（ssh）：可重建的 node-pty 失败只修一次，不再让用户重连（[@nwparker](https://github.com/nwparker)，[#17907](https://github.com/stablyai/orca/pull/17907)）
- 文档（win）：PTY OSC 133 引导继续用 -EncodedCommand（MDE 发现已拒绝）（[@OrcaWin](https://github.com/OrcaWin)，[#17875](https://github.com/stablyai/orca/pull/17875)）
- 修复（remote-terminal）：去掉三个只能被永远不会到来的事件清掉的闩锁（[@nwparker](https://github.com/nwparker)，[#17945](https://github.com/stablyai/orca/pull/17945)）
- 修复（terminal）：避免重启的客户端把自己的 SSH 重挂身份发布掉（[@nwparker](https://github.com/nwparker)，[#17881](https://github.com/stablyai/orca/pull/17881)）
- 修复（native-chat）：Claude 选择器不展示已禁用的 CLI 模型（[@brennanb2025](https://github.com/brennanb2025)，[#18055](https://github.com/stablyai/orca/pull/18055)）
- 修复（pty,remote）：关闭 pty master 描述符泄漏，以及两处远程终端缺陷（[@nwparker](https://github.com/nwparker)，[#17914](https://github.com/stablyai/orca/pull/17914)）
- 修复（settings）：展示 CLI 注册失败原因（[@nwparker](https://github.com/nwparker)，[#18125](https://github.com/stablyai/orca/pull/18125)）
- 修复（ssh）：中继主机上也关闭 pty master 描述符泄漏（[@nwparker](https://github.com/nwparker)，[#17920](https://github.com/stablyai/orca/pull/17920)）
- 性能（sidebar,terminal）：缓存终端标题的 Agent 分类和谱系投影（[@nwparker](https://github.com/nwparker)，[#18148](https://github.com/stablyai/orca/pull/18148)）
- 性能（terminal）：不再把每一帧 Agent 旋转标题送到渲染器（[@nwparker](https://github.com/nwparker)，[#18155](https://github.com/stablyai/orca/pull/18155)）
- 性能（terminal）：每次监视走一遍注册表，而不是每个工作区一遍（[@nwparker](https://github.com/nwparker)，[#18157](https://github.com/stablyai/orca/pull/18157)）
- Sta 6308 终端标签上下文菜单增加复制 Session ID（[@AmethystLiang](https://github.com/AmethystLiang)，[#18070](https://github.com/stablyai/orca/pull/18070)）
- 修复（terminal）：隐藏窗格确定地停止光标闪烁（[@nwparker](https://github.com/nwparker)，[#18152](https://github.com/stablyai/orca/pull/18152)）
- 性能（startup）：不可达 SSH 主机不再挡住本地终端恢复（[@nwparker](https://github.com/nwparker)，[#18164](https://github.com/stablyai/orca/pull/18164)）
- 性能（pty）：避免启动历史 GC 让主进程卡住数秒（[@nwparker](https://github.com/nwparker)，[#18165](https://github.com/stablyai/orca/pull/18165)）
- 性能（terminal）：只重绘 Agent 重画碰到的行（[@nwparker](https://github.com/nwparker)，[#18169](https://github.com/stablyai/orca/pull/18169)）
- 终端错误浮层改为不透明（[@brennanb2025](https://github.com/brennanb2025)，[#18231](https://github.com/stablyai/orca/pull/18231)）
- 修复（terminal）：把 Agent 提示降级前确认未识别的前台（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18238](https://github.com/stablyai/orca/pull/18238)）
- 修复（terminal）：按主机网格回放成对运行时快照（[@nwparker](https://github.com/nwparker)，[#18132](https://github.com/stablyai/orca/pull/18132)）
- 修复（remote-terminal）：未确认额度时保持流停滞截止武装（[@nwparker](https://github.com/nwparker)，[#17871](https://github.com/stablyai/orca/pull/17871)）
- 修复（ssh）：中继刚证明还活着的 PTY 上不要再拉起 Agent（[@nwparker](https://github.com/nwparker)，[#17951](https://github.com/stablyai/orca/pull/17951)）
- 修复（remote）：避免冲突路径键、死冲突状态、移除活动 PTY 导致丢标签（[@nwparker](https://github.com/nwparker)，[#17948](https://github.com/stablyai/orca/pull/17948)）
- 修复（ssh）：租约与运行时 pty id 用同一种形式比较，以便窗格恢复（[@nwparker](https://github.com/nwparker)，[#17969](https://github.com/stablyai/orca/pull/17969)）
- 修复（relay）：不要把 PTY 恢复进主机上已经不存在的目录（[@nwparker](https://github.com/nwparker)，[#18351](https://github.com/stablyai/orca/pull/18351)）
- 修复（memory）：补上两个按 id 的回收缺口，并收紧 pty 退出回收（[@nwparker](https://github.com/nwparker)，[#18320](https://github.com/stablyai/orca/pull/18320)）
- 性能（terminal）：每窗格 store 监听从 48 降到 17（[@nwparker](https://github.com/nwparker)，[#18322](https://github.com/stablyai/orca/pull/18322)）
- 性能（main）：共用一次 terminal-wait 扫描，SIGWINCH 的 ps fork 减半，分块携带 wait-blocked，上提重绘正则（[@nwparker](https://github.com/nwparker)，[#18315](https://github.com/stablyai/orca/pull/18315)）
- 性能（renderer）：把英文目录和 xterm WebGL 插件移出启动图（[@nwparker](https://github.com/nwparker)，[#18326](https://github.com/stablyai/orca/pull/18326)）
- 新增（cli）：让关闭终端成为规范的工作区拆除路径（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18073](https://github.com/stablyai/orca/pull/18073)）
- 修复（terminal）：释放暂停闩锁时冲掉 xterm 停住的渲染器缩放（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18510](https://github.com/stablyai/orca/pull/18510)）

### Windows、远程服务器与 SSH {#v1-4-197-windows-ssh}

- 修复（ssh）：未应答的 native-deps 探测不再清掉健康中继（[@nwparker](https://github.com/nwparker)，[#17979](https://github.com/stablyai/orca/pull/17979)）
- 修复（daemon）：挂接取消跟在客户端超时之后（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#17816](https://github.com/stablyai/orca/pull/17816)）
- 性能（worktree）：批量远程冲突探测，并重新武装预备检出（[@nwparker](https://github.com/nwparker)，[#17829](https://github.com/stablyai/orca/pull/17829)）
- 测试（relay）：测试 WebSocket 服务器绑到 loopback（[@nwparker](https://github.com/nwparker)，[#18045](https://github.com/stablyai/orca/pull/18045)）
- 新增（telemetry）：度量 macOS 过期 daemon 接管与 cwd 拒绝（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18043](https://github.com/stablyai/orca/pull/18043)）
- 修复（daemon）：创建可以等正在进行的会话拆除结束（[@OrcaWin](https://github.com/OrcaWin)，[#18063](https://github.com/stablyai/orca/pull/18063)）
- CI（release）：让 Windows 发布门禁可确定（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18067](https://github.com/stablyai/orca/pull/18067)）
- 修复（ssh）：失败的 worktree 扫描不再发布权威空结果（[@nwparker](https://github.com/nwparker)，[#17833](https://github.com/stablyai/orca/pull/17833)）
- 修复（preload）：为 ssh terminateSessions 桥接结果补类型（[@nwparker](https://github.com/nwparker)，[#18079](https://github.com/stablyai/orca/pull/18079)）
- 修复（ssh）：端点被接管时不要把活动中继变成孤儿（[@nwparker](https://github.com/nwparker)，[#17821](https://github.com/stablyai/orca/pull/17821)）
- 修复（ssh）：强制停止抛错时不要让 relay-reset 租约过期（[@nwparker](https://github.com/nwparker)，[#17962](https://github.com/stablyai/orca/pull/17962)）
- 测试（ssh）：中继重挂失败退出标成未核实，而不是已证实（[@nwparker](https://github.com/nwparker)，[#17963](https://github.com/stablyai/orca/pull/17963)）
- 修复（remote）：无标签清单和回放行不得授权销毁（[@nwparker](https://github.com/nwparker)，[#17981](https://github.com/stablyai/orca/pull/17981)）
- 性能（worktree）：fork PR 远程创建从创建时推迟到首次使用（[@nwparker](https://github.com/nwparker)，[#17922](https://github.com/stablyai/orca/pull/17922)）
- 修复（ssh）：无标记的 native-deps 探测不得删除两个原生模块（[@nwparker](https://github.com/nwparker)，[#18011](https://github.com/stablyai/orca/pull/18011)）
- 性能（ssh）：跨包共用中继原生依赖，不要按安装目录重编（[@nwparker](https://github.com/nwparker)，[#18033](https://github.com/stablyai/orca/pull/18033)）
- 文档（windows）：记录 EDR 信号面（[@OrcaWin](https://github.com/OrcaWin)，[#17856](https://github.com/stablyai/orca/pull/17856)）
- 修复（build）：把 config/scripts 固定为 LF，以便 Windows 跑测试（[@OrcaWin](https://github.com/OrcaWin)，[#18056](https://github.com/stablyai/orca/pull/18056)）
- 测试（ci）：把 Windows 门禁测试收进两份注册列表（[@OrcaWin](https://github.com/OrcaWin)，[#18047](https://github.com/stablyai/orca/pull/18047)）
- 修复（tooling）：不靠 Windows .cmd 垫片跑 oxlint 门禁（[@OrcaWin](https://github.com/OrcaWin)，[#17894](https://github.com/stablyai/orca/pull/17894)）
- 修复（relay）：守住三条投递释放路径，并说明正在恢复的来源（[@nwparker](https://github.com/nwparker)，[#18038](https://github.com/stablyai/orca/pull/18038)）
- 测试（ssh）：容器化中继故障注入并带判定断言（[@nwparker](https://github.com/nwparker)，[#18017](https://github.com/stablyai/orca/pull/18017)）
- 文档（ssh）：记录应用更新会把中继终端置于 `unverifiable`（[@nwparker](https://github.com/nwparker)，[#17972](https://github.com/stablyai/orca/pull/17972)）
- 修复（relay）：过大响应要失败，而不是关掉客户端（[@nwparker](https://github.com/nwparker)，[#17968](https://github.com/stablyai/orca/pull/17968)）
- 修复（ssh）：远程 PowerShell 命令保持在 sshd 的 cmd.exe 能接受的范围内（[@nwparker](https://github.com/nwparker)，[#17947](https://github.com/stablyai/orca/pull/17947)）
- 修复（wsl）：为 wsl.exe 拉起指定明确的 Windows cwd（[@nwparker](https://github.com/nwparker)，[#17834](https://github.com/stablyai/orca/pull/17834)）
- 修复（orcad）：不再要求只有 macOS 构建才有的 spawn-helper（[@nwparker](https://github.com/nwparker)，[#18122](https://github.com/stablyai/orca/pull/18122)）
- 修复（relay）：过大的 fs.listFiles 回复改为流式，而不是拒绝（[@nwparker](https://github.com/nwparker)，[#17954](https://github.com/stablyai/orca/pull/17954)）
- 测试：把远程窗格链接路由简化为服务器托管放置（[@AmethystLiang](https://github.com/AmethystLiang)，[#18219](https://github.com/stablyai/orca/pull/18219)）
- 性能（git）：远程 URL 问题用一个子进程回答，不要每个远程一个（[@nwparker](https://github.com/nwparker)，[#18158](https://github.com/stablyai/orca/pull/18158)）
- 性能（windows）：去掉未读 Memory 标志，每个快照共用一份进程表投影（[@nwparker](https://github.com/nwparker)，[#18151](https://github.com/stablyai/orca/pull/18151)）
- 性能（remote）：把无证据巡检节奏用到远程窗格（每空闲窗格每分钟 30 次往返降到 4 次）（[@nwparker](https://github.com/nwparker)，[#18146](https://github.com/stablyai/orca/pull/18146)）
- 修复（ssh）：仅在主机证明下回收客户端已确认丢失的中继 PTY（[@nwparker](https://github.com/nwparker)，[#17831](https://github.com/stablyai/orca/pull/17831)）
- 修复（ssh）：避免迟到的 SFTP 流错误打崩 main，中继套接字保持在 sun_path 内（[@nwparker](https://github.com/nwparker)，[#17862](https://github.com/stablyai/orca/pull/17862)）
- 修复（watcher）：中继 watch-root 容量拒绝走慢梯，不走快梯（[@nwparker](https://github.com/nwparker)，[#17950](https://github.com/stablyai/orca/pull/17950)）
- 修复（ssh）：未应答的 native-deps 探测要记日志，不要静默启动（[@nwparker](https://github.com/nwparker)，[#18000](https://github.com/stablyai/orca/pull/18000)）
- 修复（ssh）：卡住的中继链路标为丢失，沉默不再当判定（[@nwparker](https://github.com/nwparker)，[#17817](https://github.com/stablyai/orca/pull/17817)）
- 修复（remote-runtime）：让每一条已宣传的恢复路径都能走到，并去掉两个恢复闩锁（[@nwparker](https://github.com/nwparker)，[#17822](https://github.com/stablyai/orca/pull/17822)）
- 修复（relay）：回收主机证明已不在的 PTY，并停止两次每轮扫描风暴（[@nwparker](https://github.com/nwparker)，[#17832](https://github.com/stablyai/orca/pull/17832)）
- 修复（ssh）：应答每一段 MFA，停止拨打未认领别名，并说明 clone 失败位置（[@nwparker](https://github.com/nwparker)，[#17946](https://github.com/stablyai/orca/pull/17946)）
- 修复（relay）：用容量丢失发信号，而不是丢、挂或截断（[@nwparker](https://github.com/nwparker)，[#17870](https://github.com/stablyai/orca/pull/17870)）
- 测试（e2e）：修好 SSH 冻结复现，并探测两处无人覆盖的失败模式（[@nwparker](https://github.com/nwparker)，[#17940](https://github.com/stablyai/orca/pull/17940)）
- 修复（ssh）：解析 worktree 的执行主机，不要从一行仓库记录猜（[@nwparker](https://github.com/nwparker)，[#17909](https://github.com/stablyai/orca/pull/17909)）
- 修复（ssh）：四处主机盲区改走已解析执行主机（[@nwparker](https://github.com/nwparker)，[#17919](https://github.com/stablyai/orca/pull/17919)）
- 修复（ssh）：远程/本地由已解析执行主机决定，不用原始字段（[@nwparker](https://github.com/nwparker)，[#18294](https://github.com/stablyai/orca/pull/18294)）
- 修复（ssh）：只有客户端缺失证据时不要重新拉起窗格（[@nwparker](https://github.com/nwparker)，[#17957](https://github.com/stablyai/orca/pull/17957)）
- 性能（relay）：去掉长会话 SSH 变慢背后的两项无界增长（[@nwparker](https://github.com/nwparker)，[#17818](https://github.com/stablyai/orca/pull/17818)）
- 修复（remote）：解析拉起 cwd、node 管理目录、保险库主机和回滚种子（[@nwparker](https://github.com/nwparker)，[#17952](https://github.com/stablyai/orca/pull/17952)）
- 修复（wsl）：runWslProcess 不再继承可移除的拉起目录（[@nwparker](https://github.com/nwparker)，[#17837](https://github.com/stablyai/orca/pull/17837)）
- 修复（ssh）：过期租约可以重新挂上孤儿，而不是丢下（[@nwparker](https://github.com/nwparker)，[#17965](https://github.com/stablyai/orca/pull/17965)）
- 修复（ssh）：取代与 id 回收使用各自的租约标记（[@nwparker](https://github.com/nwparker)，[#17966](https://github.com/stablyai/orca/pull/17966)）
- 修复（ssh）：重建窗格前需要主机死亡证明，并松开卡住的过期租约（[@nwparker](https://github.com/nwparker)，[#18013](https://github.com/stablyai/orca/pull/18013)）
- 新增（ssh）：带主机戳的远程前台身份（[@brennanb2025](https://github.com/brennanb2025)，[#18078](https://github.com/stablyai/orca/pull/18078)）
- 修复（ssh）：挑选合格的过期租约，不是第一个匹配窗格的（[@nwparker](https://github.com/nwparker)，[#18366](https://github.com/stablyai/orca/pull/18366)）
- 修复（repos）：图标与远程身份探测按已解析执行主机路由（[@nwparker](https://github.com/nwparker)，[#18377](https://github.com/stablyai/orca/pull/18377)）
- 文档（ssh）：记录 keep-alive-until-reset as default grace（[@nwparker](https://github.com/nwparker)，[#18383](https://github.com/stablyai/orca/pull/18383)）
- 修复（ssh）：路由 remaining expired-lease readers through reattach predicate（[@nwparker](https://github.com/nwparker)，[#18378](https://github.com/stablyai/orca/pull/18378)）
- 修复（git）：share worktree-list and unmerged-entry porcelain parsers，配合 SSH relay（[@nwparker](https://github.com/nwparker)，[#18389](https://github.com/stablyai/orca/pull/18389)）
- 杂项（cloud）：增加 relay fence broker, ops console, Terraform root, scripts, and 24 cloud-* workflows（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18413](https://github.com/stablyai/orca/pull/18413)）
- 修复（cloud）：停止 asking setup-node to cache pnpm store in relay workflows（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18432](https://github.com/stablyai/orca/pull/18432)）
- 修复（cloud）：停止 passing manage_artifact_dns to relay root（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18442](https://github.com/stablyai/orca/pull/18442)）

### 移动端 {#v1-4-197-mobile}

- 回退 mobile search button floating layout（[@AmethystLiang](https://github.com/AmethystLiang)，[#17990](https://github.com/stablyai/orca/pull/17990)）
- 重构（mobile）：pin terminal WebView payload and split its widest slice（[@nwparker](https://github.com/nwparker)，[#18028](https://github.com/stablyai/orca/pull/18028)）
- 杂项（deps）：解析 81 of 83 Dependabot alerts in docs/site and mobile（[@nwparker](https://github.com/nwparker)，[#18061](https://github.com/stablyai/orca/pull/18061)）
- Update WeChat community to group 8（[@AmethystLiang](https://github.com/AmethystLiang)，[#18095](https://github.com/stablyai/orca/pull/18095)）
- 性能（renderer）：避免 mobile sync key rehashing every dirty file on each keystroke（[@nwparker](https://github.com/nwparker)，[#18154](https://github.com/stablyai/orca/pull/18154)）
- Align worktree host labels 跨越 desktop and mobile（[@brennanb2025](https://github.com/brennanb2025)，[#18237](https://github.com/stablyai/orca/pull/18237)）
- 文档：update localized Android APK links to 0.0.47（[@AmethystLiang](https://github.com/AmethystLiang)，[#18292](https://github.com/stablyai/orca/pull/18292)）

### 性能与可靠性 {#v1-4-197-perf-reliability}

- 重构：name split modules for what they contain（[@nwparker](https://github.com/nwparker)，[#17927](https://github.com/stablyai/orca/pull/17927)）
- 修复（worktrees）：reclaim orphaned pr-* fork remotes（[@nwparker](https://github.com/nwparker)，[#17842](https://github.com/stablyai/orca/pull/17842)）
- 测试（child-process）：让 import ratchet able to fail（[@nwparker](https://github.com/nwparker)，[#18026](https://github.com/stablyai/orca/pull/18026)）
- 修复（git）：recover commit ref badges on Git older than 2.43（[@nwparker](https://github.com/nwparker)，[#17923](https://github.com/stablyai/orca/pull/17923)）
- 修复（agents）：clear unread completion marker when acknowledging agents（[@nwparker](https://github.com/nwparker)，[#17924](https://github.com/stablyai/orca/pull/17924)）
- 修复（dev）：保持 shared Electron dist writable for dev app（[@nwparker](https://github.com/nwparker)，[#18035](https://github.com/stablyai/orca/pull/18035)）
- 修复（worktrees）：retire runtime-host metadata scan proved gone（[@nwparker](https://github.com/nwparker)，[#17901](https://github.com/stablyai/orca/pull/17901)）
- 测试：停止 two suites failing for reasons unrelated to their subject（[@nwparker](https://github.com/nwparker)，[#18036](https://github.com/stablyai/orca/pull/18036)）
- 修复（preload）：让 dropped bridge key compile error（[@nwparker](https://github.com/nwparker)，[#18025](https://github.com/stablyai/orca/pull/18025)）
- 性能（git）：pack loose refs Orca's own fetches leave behind（[@nwparker](https://github.com/nwparker)，[#17857](https://github.com/stablyai/orca/pull/17857)）
- 修复（runtime）：scope create-dedupe inventory to owning host（[@nwparker](https://github.com/nwparker)，[#17983](https://github.com/stablyai/orca/pull/17983)）
- 修复（runtime）：scope both reconcile call sites to owning host uniformly（[@nwparker](https://github.com/nwparker)，[#18004](https://github.com/stablyai/orca/pull/18004)）
- 修复 incorrect open file cmd: prevent file 创建 for spaced input（[@AmethystLiang](https://github.com/AmethystLiang)，[#18054](https://github.com/stablyai/orca/pull/18054)）
- 修复（web）：declare socket dead even when its probe cannot be sent（[@nwparker](https://github.com/nwparker)，[#17838](https://github.com/stablyai/orca/pull/17838)）
- 修复（linux）：land reviewed Linux packaging stack on main（[@nwparker](https://github.com/nwparker)，[#18100](https://github.com/stablyai/orca/pull/18100)）
- 文档（linux）：say which package to install and how updates arrive（[@nwparker](https://github.com/nwparker)，[#18123](https://github.com/stablyai/orca/pull/18123)）
- Graduate Agents activity view，配合 filtering, persistence, and performance improvements（[@AmethystLiang](https://github.com/AmethystLiang)，[#18222](https://github.com/stablyai/orca/pull/18222)）
- CI：checkout PR head for reusable E2E（[@AmethystLiang](https://github.com/AmethystLiang)，[#18230](https://github.com/stablyai/orca/pull/18230)）
- 修复（diff-comments）：停止 review refreshes from blanking inline comment cards（[@nwparker](https://github.com/nwparker)，[#18142](https://github.com/stablyai/orca/pull/18142)）
- 性能（keybindings）：停止 recomputing shortcut labels on every render（[@nwparker](https://github.com/nwparker)，[#18145](https://github.com/stablyai/orca/pull/18145)）
- 性能（persistence）：build state file once per save，而不是 seven times（[@nwparker](https://github.com/nwparker)，[#18161](https://github.com/stablyai/orca/pull/18161)）
- 性能（platform）：解析 immutable platform payload once，而不是~19x/sec（[@nwparker](https://github.com/nwparker)，[#18135](https://github.com/stablyai/orca/pull/18135)）
- 性能（sidebar）：停止 rebuilding per-card selector records on every store write（[@nwparker](https://github.com/nwparker)，[#18133](https://github.com/stablyai/orca/pull/18133)）
- 修复（process-table）：fail short `ps` capture loudly, and stop resume spending 49 of them（[@nwparker](https://github.com/nwparker)，[#18166](https://github.com/stablyai/orca/pull/18166)）
- 性能（diff）：停止 redrawing whole 合并 diff file tree on every section load（[@nwparker](https://github.com/nwparker)，[#18140](https://github.com/stablyai/orca/pull/18140)）
- 修复（github）：bound and coalesce Orca star check so gh children cannot pile up（[@nwparker](https://github.com/nwparker)，[#18239](https://github.com/stablyai/orca/pull/18239)）
- 增加 automation runs dashboard，配合 pagination and filtering（[@AmethystLiang](https://github.com/AmethystLiang)，[#18226](https://github.com/stablyai/orca/pull/18226)）
- 重构（process-table）：extract correlation indexes into their own module（[@nwparker](https://github.com/nwparker)，[#18246](https://github.com/stablyai/orca/pull/18246)）
- Auto e2e tests autofix scheduled ci 1h run 32 20260902T0700（[@AmethystLiang](https://github.com/AmethystLiang)，[#18227](https://github.com/stablyai/orca/pull/18227)）
- 修复（i18n）：补上 #18245 漏掉的三条 activity 英文键（[@nwparker](https://github.com/nwparker)，[#18250](https://github.com/stablyai/orca/pull/18250)）
- 性能（diff）：大型审查时对合并 diff 文件树行做窗口化（[@nwparker](https://github.com/nwparker)，[#18236](https://github.com/stablyai/orca/pull/18236)）
- 修复（gh）：POSIX 上到期时回收整个 gh/glab 进程树（[@nwparker](https://github.com/nwparker)，[#18258](https://github.com/stablyai/orca/pull/18258)）
- 测试（e2e）：在冻结复现里把 testInfo 传给 startDockerSshRelayTarget（[@nwparker](https://github.com/nwparker)，[#18257](https://github.com/stablyai/orca/pull/18257)）
- 修复（activity）：持久化 Agent 未读筛选与分组（[@AmethystLiang](https://github.com/AmethystLiang)，[#18255](https://github.com/stablyai/orca/pull/18255)）
- 修复（path）：避免注入的用户 bin 目录压过继承的 PATH（[@nwparker](https://github.com/nwparker)，[#18265](https://github.com/stablyai/orca/pull/18265)）
- 新增（providers）：按执行主机分发 git 与文件系统 provider（[@nwparker](https://github.com/nwparker)，[#18296](https://github.com/stablyai/orca/pull/18296)）
- 修复（runtime）：运行时 Git 按已解析执行主机路由，不用仓库 connectionId（[@nwparker](https://github.com/nwparker)，[#18307](https://github.com/stablyai/orca/pull/18307)）
- 修复（runtime）：运行时文件系统命令按已解析执行主机路由（[@nwparker](https://github.com/nwparker)，[#18325](https://github.com/stablyai/orca/pull/18325)）
- 把域名路径当 URL，不当新文件（[@AmethystLiang](https://github.com/AmethystLiang)，[#18340](https://github.com/stablyai/orca/pull/18340)）
- 性能（history-gc）：用 dirent、去掉仅用于日志的大小扫描，减少 12,259 次启动系统调用（[@nwparker](https://github.com/nwparker)，[#18314](https://github.com/stablyai/orca/pull/18314)）
- 性能（sidebar）：缓存谱系祖先索引并预计算排序标签（[@nwparker](https://github.com/nwparker)，[#18318](https://github.com/stablyai/orca/pull/18318)）
- 性能（combined-diff）：避免每次加载分区都重建整段派生状态（[@nwparker](https://github.com/nwparker)，[#18321](https://github.com/stablyai/orca/pull/18321)）
- 性能（persistence）：停止在配置档存储里重写多余字节（[@nwparker](https://github.com/nwparker)，[#18317](https://github.com/stablyai/orca/pull/18317)）
- 杂项（workspaces）：删除无效的 workspaceCleanup:hasKillableLocalProcesses IPC（[@nwparker](https://github.com/nwparker)，[#18386](https://github.com/stablyai/orca/pull/18386)）
- 性能（hot-paths）：删掉排序、资源管理器、Monaco、RPC、快照里的纯分配工作（[@nwparker](https://github.com/nwparker)，[#18372](https://github.com/stablyai/orca/pull/18372)）
- 用不透明背景修表头透明（[@AmethystLiang](https://github.com/AmethystLiang)，[#18499](https://github.com/stablyai/orca/pull/18499)）

### 新贡献者 {#v1-4-197-contributors}

-  @rudironsoni made their first contribution [#16673](https://github.com/stablyai/orca/pull/16673)

**完整变更对照：** [v1.4.196...v1.4.197](https://github.com/stablyai/orca/compare/v1.4.196...v1.4.197)

## v1.4.196 切换更快，Native Chat 更可靠 {#v1-4-196}

2026年9月3日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.196)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 重点变化 {#v1-4-196-notable}

- 本地、WSL 与远程工作区的 worktree 切换、Git 元数据扫描、终端启动和渲染器更新更快。
- Native Chat 与 Agent 会话更可靠：大命令结果、实时工具进度、图片附件与投递恢复。
- SSH、Windows/WSL、GitLab、更新器、启动与发布流程的可靠性覆盖更广。

### 界面与工作区 {#v1-4-196-ui-workspaces}

- 修复（mobile）：解除定向 SSH 会话标签刷新的阻塞（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#17486](https://github.com/stablyai/orca/pull/17486)）
- 分支变更时保留用户设定的工作区名称（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#17448](https://github.com/stablyai/orca/pull/17448)）
- 自动化体验改进（[@AmethystLiang](https://github.com/AmethystLiang)，[#17626](https://github.com/stablyai/orca/pull/17626)）
- 修复（terminal）：工作台按工作区 id 只挂一块表面 (STA-4846)（[@nwparker](https://github.com/nwparker)，[#17432](https://github.com/stablyai/orca/pull/17432)）
- 工作区范围未变时避免 Linear 重复读取（[@AmethystLiang](https://github.com/AmethystLiang)，[#17529](https://github.com/stablyai/orca/pull/17529)）
- 修复（browser）：过大视口预设可滚动（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#17569](https://github.com/stablyai/orca/pull/17569)）
- 修复（browser）：拒绝给离屏访客页打开 DevTools（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#17485](https://github.com/stablyai/orca/pull/17485)）
- 把浏览器 Cookie 搜索导入到标签（[@AmethystLiang](https://github.com/AmethystLiang)，[#17627](https://github.com/stablyai/orca/pull/17627)）
- 把移动端搜索按钮改为左下角浮动（[@AmethystLiang](https://github.com/AmethystLiang)，[#17808](https://github.com/stablyai/orca/pull/17808)）
- 修复（i18n）：修正编辑器视图切换按钮的简体中文（[@Aealen](https://github.com/Aealen)，[#13723](https://github.com/stablyai/orca/pull/13723)）

### Agent 与 Native Chat {#v1-4-196-native-chat}

- 修复（orchestration）：说明非法的发送消息类型（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#17487](https://github.com/stablyai/orca/pull/17487)）
- 修复（runtime）：把成对终端创建与主机焦点隔离（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#17713](https://github.com/stablyai/orca/pull/17713)）
- 修复（native-chat）：保留大段结构化命令结果（[@brennanb2025](https://github.com/brennanb2025)，[#17707](https://github.com/stablyai/orca/pull/17707)）
- 回退"fix(native-chat): 保留大段结构化命令结果（[@brennanb2025](https://github.com/brennanb2025)，[#17719](https://github.com/stablyai/orca/pull/17719)）
- 修复（native-chat）：重新合入大段结构化命令结果（[@brennanb2025](https://github.com/brennanb2025)，[#17720](https://github.com/stablyai/orca/pull/17720)）
- 在 Native Chat 中显示实时工具进度（[@brennanb2025](https://github.com/brennanb2025)，[#17597](https://github.com/stablyai/orca/pull/17597)）
- 修复（skills）：收窄 Computer Use 的发现边界（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#17736](https://github.com/stablyai/orca/pull/17736)）
- 修复（native-chat）：不再把工具输出渲染成 Agent 的流式回复（[@brennanb2025](https://github.com/brennanb2025)，[#17782](https://github.com/stablyai/orca/pull/17782)）
- 修复（native-chat）：保留粘贴了图片的 Claude 回合附件（[@brennanb2025](https://github.com/brennanb2025)，[#17801](https://github.com/stablyai/orca/pull/17801)）
- 修复（native-chat）：避免未入日志的 provider 帧打断结构化会话（[@brennanb2025](https://github.com/brennanb2025)，[#17813](https://github.com/stablyai/orca/pull/17813)）
- 修复（agent-send）：选择器在发送完成前关闭时仍确认投递（[@AmethystLiang](https://github.com/AmethystLiang)，[#17835](https://github.com/stablyai/orca/pull/17835)）
- 修复（mobile-native-chat）：去掉和发送按钮粘在一起的图片回显（[@brennanb2025](https://github.com/brennanb2025)，[#17783](https://github.com/stablyai/orca/pull/17783)）
- 增加启动投递诊断和成功播报（[@AmethystLiang](https://github.com/AmethystLiang)，[#17814](https://github.com/stablyai/orca/pull/17814)）

### 终端 {#v1-4-196-terminal}

- 修复（terminal）：保留大段 Agent 提示粘贴（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#17718](https://github.com/stablyai/orca/pull/17718)）
- 在解析继承 CWD 之前激活终端分屏（[@nwparker](https://github.com/nwparker)，[#17601](https://github.com/stablyai/orca/pull/17601)）
- 修复（terminal）：空操作缩放时保留已恢复的 OSC-8 范围（[@nwparker](https://github.com/nwparker)，[#17759](https://github.com/stablyai/orca/pull/17759)）
- 重构（mobile）：拆分会话表面和终端表面（[@nwparker](https://github.com/nwparker)，[#17595](https://github.com/stablyai/orca/pull/17595)）

### Windows、远程服务器与 SSH {#v1-4-196-windows-ssh}

- 修复（runtime）：把远程控制中断发布到主机界面（[@brennanb2025](https://github.com/brennanb2025)，[#17531](https://github.com/stablyai/orca/pull/17531)）
- 新增（ssh）：在 PTY 清单中批量处理证据（[@brennanb2025](https://github.com/brennanb2025)，[#17525](https://github.com/stablyai/orca/pull/17525)）
- 修复（remote）：区分 SSH 传输与运行时可用性（[@brennanb2025](https://github.com/brennanb2025)，[#17710](https://github.com/stablyai/orca/pull/17710)）
- 修复（worktree）：符号链接防护拒绝带盘符的 Windows 共享路径（[@nwparker](https://github.com/nwparker)，[#17793](https://github.com/stablyai/orca/pull/17793)）
- 修复（gitlab）：避免原生 glab 的 known-hosts 探测唤醒空闲 WSL 发行版（[@nwparker](https://github.com/nwparker)，[#17789](https://github.com/stablyai/orca/pull/17789)）
- 修复（git）：在 Windows 主机上解析 WSL drvfs 的 Git 元数据指针（[@nwparker](https://github.com/nwparker)，[#17790](https://github.com/stablyai/orca/pull/17790)）
- 修复（worktree）：在被路由的 git 主机上跑 create-base 预热（[@nwparker](https://github.com/nwparker)，[#17794](https://github.com/stablyai/orca/pull/17794)）
- 修复（wsl）：worktree 变更后丢掉链接 worktree 的 Git 路由缓存（[@nwparker](https://github.com/nwparker)，[#17791](https://github.com/stablyai/orca/pull/17791)）
- 修复（windows）：修复会导致窗口空白的安装目录包 ACL（[@nwparker](https://github.com/nwparker)，[#17740](https://github.com/stablyai/orca/pull/17740)）
- 文档（wsl）：注明发行版 VHDX 是高水位，不是泄漏（[@nwparker](https://github.com/nwparker)，[#17900](https://github.com/stablyai/orca/pull/17900)）
- 修复（worktree）：回收进程内丢弃失败的预备检出（[@nwparker](https://github.com/nwparker)，[#17899](https://github.com/stablyai/orca/pull/17899)）
- 修复（git）：给 WSL 托管仓库一条 FETCH_HEAD 锁通道（[@nwparker](https://github.com/nwparker)，[#17898](https://github.com/stablyai/orca/pull/17898)）
- 修复（wsl）：按主机 worktree 拼写读取未跟踪行数（[@nwparker](https://github.com/nwparker)，[#17897](https://github.com/stablyai/orca/pull/17897)）
- 修复（git）：按主机路径拼写读取 diff 工作树和戳记（[@nwparker](https://github.com/nwparker)，[#17896](https://github.com/stablyai/orca/pull/17896)）
- 修复（wsl）：在主机路径命名空间解析冲突与工作树探测（[@nwparker](https://github.com/nwparker)，[#17895](https://github.com/stablyai/orca/pull/17895)）
- 修复（git）：把 fork 远程 fetch refspec 收窄到已跟踪分支（[@nwparker](https://github.com/nwparker)，[#17887](https://github.com/stablyai/orca/pull/17887)）
- 修复（wsl）：按调用方发行版解析 sparse-checkout 与 diff 戳记的 gitdir（[@nwparker](https://github.com/nwparker)，[#17932](https://github.com/stablyai/orca/pull/17932)）

### 性能与可靠性 {#v1-4-196-perf-reliability}

- 测试：覆盖近期高价值 PR 的回归契约（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#17489](https://github.com/stablyai/orca/pull/17489)）
- 修复：满足 GitLab hook 与测试 lint 门禁（[@AmethystLiang](https://github.com/AmethystLiang)，[#17694](https://github.com/stablyai/orca/pull/17694)）
- 修复（lint）：合并重复的 process-table-snapshot 导入（[@nwparker](https://github.com/nwparker)，[#17724](https://github.com/stablyai/orca/pull/17724)）
- 测试（cursor）：放宽 Windows hook 拉起预算以修 ETIMEDOUT 抖动（[@nwparker](https://github.com/nwparker)，[#17721](https://github.com/stablyai/orca/pull/17721)）
- 测试（native-chat）：修 transcript 监视错误初始快照恢复测试的抖动（[@nwparker](https://github.com/nwparker)，[#17722](https://github.com/stablyai/orca/pull/17722)）
- 测试（updater）：避免慢模块导入导致下一个测试失败（[@nwparker](https://github.com/nwparker)，[#17726](https://github.com/stablyai/orca/pull/17726)）
- 修复（artifacts）：把桌面分享上限提高到 5 MiB（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#17708](https://github.com/stablyai/orca/pull/17708)）
- 修复（serve）：在应用环境初始化后再安装 supervisor 断开退出（[@spellbook96](https://github.com/spellbook96)，[#16762](https://github.com/stablyai/orca/pull/16762)）
- 性能（worktree）：降低冷启动 worktree 切换的挂接延迟（[@nwparker](https://github.com/nwparker)，[#17667](https://github.com/stablyai/orca/pull/17667)）
- 性能（codex）：一次拉起爆发共用一套 启动预备 hook 安装（[@nwparker](https://github.com/nwparker)，[#17669](https://github.com/stablyai/orca/pull/17669)）
- 性能（terminal）：去掉无头快照缓存，保留拉起锁（[@nwparker](https://github.com/nwparker)，[#17752](https://github.com/stablyai/orca/pull/17752)）
- 性能（git）：限制引用与 worktree 扫描范围（[@nwparker](https://github.com/nwparker)，[#17655](https://github.com/stablyai/orca/pull/17655)）
- 修复（startup）：按 userData 判定安装应用环境（[@nwparker](https://github.com/nwparker)，[#17755](https://github.com/stablyai/orca/pull/17755)）
- 性能（renderer）：渐进加载时避免重建合并 diff 树（[@nwparker](https://github.com/nwparker)，[#17643](https://github.com/stablyai/orca/pull/17643)）
- 性能（relay）：缓存进程表子孙索引（[@nwparker](https://github.com/nwparker)，[#17646](https://github.com/stablyai/orca/pull/17646)）
- 测试（ci）：重试 Windows 拆除时的 EPERM 与 restart evaluate 漏检（[@nwparker](https://github.com/nwparker)，[#17780](https://github.com/stablyai/orca/pull/17780)）
- 测试（e2e）：去掉源代码管理金样竞态（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#17784](https://github.com/stablyai/orca/pull/17784)）
- 测试（e2e）：不要把已销毁的渲染器当成重新拉起的运行时（[@nwparker](https://github.com/nwparker)，[#17785](https://github.com/stablyai/orca/pull/17785)）
- 性能（renderer）：合并重复的 reveal atlas 重建（[@nwparker](https://github.com/nwparker)，[#17762](https://github.com/stablyai/orca/pull/17762)）
- 修复（crash-reporting）：进程消失时记录 Linux MemAvailable（[@nwparker](https://github.com/nwparker)，[#17733](https://github.com/stablyai/orca/pull/17733)）
- 性能（worktree）：预备时在主线程外解析 WSL 工作区根（[@nwparker](https://github.com/nwparker)，[#17792](https://github.com/stablyai/orca/pull/17792)）
- 修复（dev）：回收在 Windows 上报真实大小，并保持 setuid（[@nwparker](https://github.com/nwparker)，[#17800](https://github.com/stablyai/orca/pull/17800)）
- 把产物内容上限提高到 10 MiB（[@AmethystLiang](https://github.com/AmethystLiang)，[#17910](https://github.com/stablyai/orca/pull/17910)）
- 修复（ai-vault）：避免大型 Codex 扫描超时（[@djegor315-sketch](https://github.com/djegor315-sketch)，[#17889](https://github.com/stablyai/orca/pull/17889)）
- 修复（runtime）：推迟 WebSocket 心跳的启动探测（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#17810](https://github.com/stablyai/orca/pull/17810)）
- 修复（dev）：跳过会阻塞的钥匙串诊断（[@brennanb2025](https://github.com/brennanb2025)，[#17877](https://github.com/stablyai/orca/pull/17877)）
- CI（release）：签名放到发布预检之后（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#17773](https://github.com/stablyai/orca/pull/17773)）
- CI（release）：容忍没有 source map 的旧标签（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#17788](https://github.com/stablyai/orca/pull/17788)）
- CI（release）：禁止在工作流重跑时签名（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#17802](https://github.com/stablyai/orca/pull/17802)）
- 文档：把 Android APK 链接更新到 0.0.47（[@AmethystLiang](https://github.com/AmethystLiang)，[#17764](https://github.com/stablyai/orca/pull/17764)）
- 修复（docs）：对齐开源文档呈现与 SEO（[@nwparker](https://github.com/nwparker)，[#17809](https://github.com/stablyai/orca/pull/17809)）
- 统一文档格式：换行、表格与导入（[@AmethystLiang](https://github.com/AmethystLiang)，[#17765](https://github.com/stablyai/orca/pull/17765)）
- 修复（relay）：消化评审意见，来自 #17525（[@nwparker](https://github.com/nwparker)，[#17763](https://github.com/stablyai/orca/pull/17763)）
- 修复（diff）：消化大 diff 延期相关评审意见，来自 #17521（[@nwparker](https://github.com/nwparker)，[#17758](https://github.com/stablyai/orca/pull/17758)）
- 串行化文件系统监视器的批刷新（[@AmethystLiang](https://github.com/AmethystLiang)，[#17602](https://github.com/stablyai/orca/pull/17602)）
- 重构（runtime）：拆分 OrcaRuntimeService 与兼容测试（[@nwparker](https://github.com/nwparker)，[#17605](https://github.com/stablyai/orca/pull/17605)）
- 重构（renderer）：拆分过大的界面表面（[@nwparker](https://github.com/nwparker)，[#17610](https://github.com/stablyai/orca/pull/17610)）
- 重构（renderer）：拆分运行时与 store 模块（[@nwparker](https://github.com/nwparker)，[#17611](https://github.com/stablyai/orca/pull/17611)）
- 重构（preload）：拆分桥接 API 模块（[@nwparker](https://github.com/nwparker)，[#17612](https://github.com/stablyai/orca/pull/17612)）
- 重构（main）：拆分后端服务与启动（[@nwparker](https://github.com/nwparker)，[#17670](https://github.com/stablyai/orca/pull/17670)）

### 新贡献者 {#v1-4-196-contributors}

-  @spellbook96 made their first contribution [#16762](https://github.com/stablyai/orca/pull/16762)
-  @djegor315-sketch made their first contribution [#17889](https://github.com/stablyai/orca/pull/17889)

**完整变更对照：** [v1.4.195...v1.4.196](https://github.com/stablyai/orca/compare/v1.4.195...v1.4.196)
