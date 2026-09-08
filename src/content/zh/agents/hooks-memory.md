# Hooks 与 Memory {#agent-hooks-memory}

Orca 与 Claude Code 和 Codex 已经在用的 agent hook 和 memory 约定相处良好——它读取它们、尊重它们，并为在 IDE 语境中有意义的那些提供 UI。

## 各仓 hooks {#per-repo-hooks}

Orca 读取每个仓库的 `.claude/` 和 `.codex/` 配置。你已有的 hooks 会在 Orca 于该仓库的 worktree 中启动 Agent 时运行。

## Worktree setup hooks {#worktree-setup-hooks}

配置在 worktree 创建后自动运行的命令——例如 `pnpm install`、`direnv allow`，或恢复 `.env` 文件的脚本。在 [Settings → Repository → Hooks](/docs/settings) 下设置它们。

## Memory 文件 {#memory-files}

Claude 的 `CLAUDE.md` 和 Codex 的 `AGENTS.md`（在仓库根或嵌套处）保持原样——它们属于 Agent。Orca 像对待其他文件一样在文件浏览器中展示它们，便于你内联编辑。

## Agent status hooks {#agent-status-hooks}

**Settings → Agents → Agent status hooks** 控制由 Orca 管理、把 working / waiting / done 报告进 UI 的 hooks。关闭该设置会移除那些托管 hooks 并停止重新安装它们；再打开则会**无需重启 Orca** 就恢复它们（在 Windows 上，WSL hook relay 遵循同一实时门控）。CLI 等价命令：`orca agent hooks status|on|off --json`。

## 挺过重启 {#surviving-a-restart}

Hook 端点会写入磁盘（POSIX 上是 `{userData}/agent-hooks/endpoint.env`，Windows 上是 `endpoint.cmd`），并在每次 hook 调用时重新 source，因此长寿命的 Agent 会话在应用重启后仍能到达活着的 Orca 服务器——不会再出现来自活过上一会话的 PTY 的死端口 POST。

> Orca CLI 暴露了一个可供 Agent 自行更新的、以注释形式出现的 worktree 状态字段。见 [Worktree 检查点](/docs/cli/worktree-checkpoints)。
