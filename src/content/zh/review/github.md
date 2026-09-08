# 托管审查、议题与 Actions {#hosted-reviews-issues-actions}

托管代码审查是 worktree 的一等部分。Orca 把 worktree 链到它们的 pull requests 或 merge requests，行内展示审查状态，并让你不离开应用就能梳理议题。

## 连接提供方 {#connecting-a-provider}

从 [Settings → Integrations](/docs/settings) 连接你的仓库所用的提供方。GitHub 的 Actions 和议题支持最深；GitLab merge requests 和议题使用同一套 worktree 审查流程。

Bitbucket Cloud 从同一窗格在应用内连接——用 **Email & API token** 或 **Access token** 点 **Connect**。Orca 在保存前验证凭据，并可以从 Source Control 创建 pull requests。Bitbucket Cloud 没有 draft PR，所以 composer 会隐藏 Draft 开关。`ORCA_BITBUCKET_*` 环境变量仍然优先于已保存的凭据。Azure DevOps 和 Gitea 的 pull requests 会出现在 worktree 侧栏和 Checks 面板里，与 GitHub、GitLab 和 Bitbucket 并列——创建 worktree 的流程会在推送前检查它们是否有远程冲突。

## 审查 {#reviews}

- worktree 推送后，从 Source Control 面板打开托管审查——创建前确认 base branch、title、description 和 draft 状态。
- 你创建或打开托管审查时，Source Control 会在 branch context 行里保持当前分支可见，因此 Create PR 操作永远不会替换分支标签。
- 已关联的审查会带状态出现在侧栏，让你看出该分支仍 open、已 merged 还是 closed。
- 当 Orca 有已关联 PR / MR 的 URL 时，branch context 行会显示一条紧凑的 **Open review page in browser** 链接——一点即可跳到 GitHub、GitLab、Bitbucket、Azure DevOps 或 Gitea 上的审查，而不打开内部 PR 视图。
- 对于 GitHub pull requests，用侧栏的 PR 操作菜单复制审查链接、关闭审查，或在确认状态变更后重新打开。
- GitHub 的 checks、reviews 和 comments 在 PR 标签里行内打开；GitLab merge requests 和议题在同一审查表面打开。
- 对于 GitLab pipelines，**Checks** 侧面板包含 bridge 和 child pipeline jobs（不只是顶层 jobs）。展开一个 job 会在可用时加载该 job 的 trace（日志）——和 GitHub check 详情打开的是同一位置——因此失败的 jobs 不会变成死胡同式的 "no inline details" 占位。
- 在 Checks 面板里，你可以回复审查线程中的任意评论，不只是根评论。
- GitHub PR 对话评论和行内 review-thread 评论有一个反应选择器，匹配 GitHub 的八种反应（👍 👎 😄 😕 ❤️ 🎉 🚀 👀）。已有的 chips 是开关。GitLab 评论保持不变。
- 分组的 PR 评论区按最新优先排序，所以新回复会把它的线程顶到上面。Timeline 标签保持最旧优先。
- 当 GitHub pull request 有失败的 checks 时，从 PR 视图用 **Fix broken checks** 把失败的 check 名称和链接交给 Agent。

### 自动合并 {#auto-merge}

对于打开的 GitHub PR，PR 视图的 merge 按钮提供 **Enable auto-merge**，这样 GitHub 会在其要求（checks、required reviews）通过后自动合并该分支。合并方法跟随仓库默认，是 **Squash and merge**、**Create merge commit** 或 **Rebase and merge** 之一——仓库不允许的方法不会显示。从同一控件用 **Disable auto-merge** 取消待处理的 auto-merge。当 base branch 使用 GitHub 的 merge queue 时，同一控件显示为 **Merge when ready**，并把 PR 加入队列。对于 GitHub 报告为 draft、closed、conflicting 或 unstable 的 PR，以及不允许 auto-merge 的仓库，auto-merge 控件会隐藏——那些情况下你只会看到手动 merge 操作。

### 堆叠的 pull requests {#stacked-pull-requests}

当你创建的 GitHub pull request 所选 base 已经有打开的 PR 时，composer 会提供 **Stack this PR above #N**。勾选后会创建 GitHub Stack（或扩展父级已有的 stack），并把提交标签改成 **Create PR in stack**（或 **Create draft PR in stack** / **Push & Create PR in stack**）。一小段预览会显示父 PR 和新分支。该选项仅 GitHub，且仅在执行宿主支持堆叠创建时出现。GitLab merge requests 和 Bitbucket pull requests 仍是单 PR 创建。

当 GitHub 把一个 pull request 登记为 **stack** 的一部分时，PR 侧栏会显示可折叠的 **Stack #N** 地图：你在 stack 中的位置、stack 大小，以及 stack 的 base branch。展开可看到带状态的有序层（open、draft、checks pending/failed、review needed、conflicts、merged、closed）。点一层即可在 Orca 中打开那个 PR。

感知 stack 的 merge 会把单 PR 的 merge 标签替换为 **Merge through #N · M PRs**（仓库使用 merge queue 时是 **Queue through #N · M PRs**）。该操作覆盖当前 PR 以及 stack 中它下面的每一个 PR。当 stack 元数据完整时，确认会列出包含的编号。原子 stack merge 失败即关闭——任何一层无法合并，则一层都不合并。没有 GitHub 登记 stack 元数据的普通依赖 PR 链保持正常的单 PR merge 流程。GitLab merge requests 不变。

## 议题 {#issues}

议题抽屉让你在 Orca 内浏览、过滤和编辑 GitHub 和 GitLab 议题。从 GitHub issue 或 PR 创建 worktree 会打开交互式工作区 composer（不是静默后台创建），因此 issue-command 自动化、SSH 目标和文件夹工作区与其他创建路径一样工作。composer 会预填任务名并关联该议题，让审查保持附着在任务上。

对于 GitHub issues，详情对话框有一个 **Activity** 区，把评论与时间线事件交错——指派、提及、交叉引用、状态变更和项目列移动——这样你可以不离开 Orca 就看到完整历史。

用工作区侧栏的已关联议题菜单可以复制议题链接，而不打开抽屉。

对于 GitLab 仓库，抽屉会列出所选项目的打开议题，并可以收窄到指派给你的议题。

## Actions {#actions}

失败的 GitHub Actions checks 会在 worktree 上显示为红色芯片。点进去即可行内查看失败 job 的日志。

## 任务 {#tasks}

Orca 在 **Tasks** 侧栏条目下展示完整的 GitHub Projects 视图——跨仓库浏览项目卡片、按源仓库过滤、查看 draft pull request 状态，并从任意卡片创建 worktree。

## 故障排除 {#troubleshooting}

如果 PR 状态、checks 或 Tasks 刷新失败——速率限制、`gh` 鉴权、权限或网络——见 **[GitHub 错误排查](/docs/github-errors)**。

## 下一步 {#next-steps}

- [从 Orca 提交并推送](/docs/review/commit-push) — 暂存改动、推送分支，然后创建托管审查。
- [Linear 议题抽屉](/docs/review/linear) — 当任务源在 git 提供方之外时用 Linear。
- [GitHub 错误排查](/docs/github-errors) — 速率限制、鉴权与 `gh` 失败。
