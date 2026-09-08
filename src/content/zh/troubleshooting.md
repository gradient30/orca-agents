# 故障排除与 FAQ {#troubleshooting-faq}

## Agent 无法启动 {#agent-won-t-start}

- 打开终端，手动运行该 Agent 的 CLI。如果在那里失败，那是 CLI 自身的鉴权或安装问题——不是 Orca。
- 确保 CLI 位于 Orca 看到的 `PATH` 上（检查 [Settings → Agents](/docs/settings)）。
- 试试标签上的 **Restart** 芯片。

## Diff 视图看起来不对 / 卡住 {#diff-view-looks-wrong-stuck}

- 点击 diff 工具栏上的刷新图标——Orca 会重新读取 worktree。
- 外部 `git` 操作（rebase、reset）可能落在两次刷新之间。

## Worktree 创建失败 {#worktree-creation-fails}

- start-from ref 可能还没 fetch。在仓库里打开终端，运行 `git fetch origin`。
- 目标目录可能已经有该分支的 worktree——删掉它，或换一个新分支名。

## Orca CLI 提示 "command not found" {#orca-cli-says-command-not-found}

在 [Settings → General → Orca CLI](/docs/settings) 下注册 CLI。在 macOS 上它会把 shim 装到 `~/.local/bin`；确保它在你 shell 的 `PATH` 上。

## SSH 能连上但远程终端失败 {#ssh-connects-but-remote-terminals-fail}

- 确认远程有 Node，以及首次安装 relay 所需的网络访问。
- 在 Linux 上，如果终端始终无法生成，安装 C/C++ 工具链：make、g++/clang++、python3（见 [SSH worktrees](/docs/ssh)）。
- 安装工具后重连，以便 Orca 重新安装原生模块。

## SSH 对文件可用，但没有 “Download Folder” {#ssh-works-for-files-but-not-download-folder}

文件夹下载需要递归 SFTP 传输。仅系统 SSH 的连接上，文件下载可能仍然可用。可用终端 `tar`/`scp` 作为回退。

## “Open in VS Code” 被禁用或仅为 Local only {#open-in-vs-code-is-disabled-or-local-only}

- 使用 SSH worktree（而不是 Remote Orca Server 活动运行时）。
- 把 Open-in 命令设为 VS Code / Insiders，而不是 Cursor 或多参数 shell 命令。
- 如果主机已被移除，刷新 SSH 目标。

## Kerberos 登录失败 {#kerberos-login-fails}

- 确保 `klist` 显示该主机 realm 的有效 ticket。
- 确认 OpenSSH 配置里该 Host 有 `GSSAPIAuthentication yes`，然后在 Settings → SSH 中重新导入或重新测试该目标。

## 浏览器提示 `browser_no_tab` {#browser-says-browser-no-tab}

当前 worktree 里没有打开的标签。用 `orca tab create --url ...` 打开一个，或手动打开浏览器窗格并导航。

## 性能与内存 {#performance-memory}

- 关掉你没有在用的 worktree。每个 worktree 都会保持文件监视器活着。
- 带许多浏览器标签的分屏布局是最大的 RAM 用户——关掉不需要的浏览器。

## GitHub PR 面板 / checks / Tasks 错误 {#github-pr-panel-checks-tasks-errors}

速率限制、错误的 `gh` 鉴权、缺少 scopes，以及仓库访问问题都会出现在 Source Control 和 PR Checks 面板。完整矩阵见 **[GitHub 错误排查](/docs/github-errors)**（包括为什么 Settings 里的 **GitHub API Budget** 看起来正常，REST 却仍被挡住）。

快速检查：

```bash
gh auth status -h github.com
gh api user
gh api rate_limit --jq '.resources.core'
```

## 日志 {#logs}

**Help → Open Logs** 打开存放 Orca 日志的目录。提交缺陷时附上它们。

## 报告问题 {#reporting-issues}

- **Help → Send Feedback**（应用内）— 把截图粘贴或拖进对话框，或挑选图片文件；提交前会显示缩略图。缺陷难以复现时附上 [日志](#logs)。
- [GitHub Issues](https://github.com/stablyai/orca/issues) — 缺陷和功能请求。
- [Discord](https://discord.gg/fzjDKHxv8Q) — 实时帮助。
