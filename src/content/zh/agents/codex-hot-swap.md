# 热切换 Codex 账户 {#hot-swap-codex-accounts}

运行多个 Codex 账户以最大化 tokens 很常见。Orca 让你一键热切换活动账户，无需重新登录，也无需编辑配置。同一流程也适用于 Claude Code 账户。

## 添加账户 {#add-accounts}

1. 至少从终端登录每个 Codex 账户一次，让 auth 落在 `~/.codex` 下。
1. 打开 [Settings → Agents → Codex Accounts](/docs/settings)。
1. Orca 列出所有检测到的账户及其用量和当前限制。
1. 给每个账户一个友好标签——“personal”、“work” 等。

## 切换账户 {#swap-accounts}

点击状态栏中的 Codex chip 打开 account switcher。选择一个账户；此后启动的任何新 Codex 会话都会使用它。已经在跑的会话会保留原来的账户，直到重启。

## System default {#system-default}

**System default** 行是你当前主机在 `~/.codex` 下的 Codex 登录。托管账户（在 Orca 中添加）不会改写该登录；它们运行在隔离的 home 中。想让启动与 Orca 外终端里的 `codex` 一致时，选择 System default。

## 当配置编辑看起来被忽略时 {#when-config-edits-seem-ignored}

对于托管的 Codex 账户，Orca 会把你真正的 `~/.codex/config.toml` 中的设置镜像到活动的 runtime home。如果该源文件缺失、为空（例如 cloud-sync 仍在下载）或不可读，Accounts 会显示警告：Codex 会保留**上次成功同步**的设置，直到源文件恢复健康。请修复横幅中给出的路径上的文件，然后重新启动或重新选择该账户。

## 规则与注意点 {#rules-gotchas}

- 切换是瞬时的——Orca 改写活动凭证指针，并不会重新鉴权。
- 现有 Codex 进程会保留当前账户，直到重启。
- 状态栏中的用量读数跟随当前活动账户。
- 重启芯片会保留重启时的活动账户。

## Claude Code 账户 {#claude-code-accounts}

Claude 的 account switcher 工作方式相同——数据目录不同（`~/.claude`），UX 相同。
