# Cursor CLI {#cursor-cli-in-orca}

Cursor CLI 是 Cursor 的命令行 Agent。Orca 以一等支持运行它——从 combobox 启动、完整的 OSC 状态检测，以及退出时的重启芯片。

## 设置 {#setup}

1. 按 [Cursor 的文档](https://cursor.com/cli) 安装 Cursor CLI。
1. 登录一次。
1. Orca 会在 `PATH` 上自动检测该 CLI。

## 启动 {#launching}

从 combobox 选择 **Cursor**。Orca 以 worktree 为范围启动该 CLI。Cursor 的 TUI 会发出 Orca 驱动 Agent 状态圆点所需的状态事件。

## 模型选择 {#model-selection}

模型选择由 Cursor 自己的设置驱动。Orca 不会覆盖它——在 CLI 内配置。
