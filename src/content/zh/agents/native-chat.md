# Native Chat {#chat-ui-native-chat}

Chat UI 是叠加在受支持 Agent 终端会话上的实验性视图。终端仍是事实来源；Chat UI 是同一 PTY 的结构化 transcript + composer。Transcript 解码覆盖 **Claude**、**Codex**、**Grok** 和 **OMP**——OMP 会话会像其他会话一样在 Chat UI 中打开，而不再只停留在原始终端。

## 启用 {#enable}

1. 打开 **Settings → Experimental → Chat UI**。
1. 开启 **Chat UI**。
1. 可选择把 **Default view** 设为 **Chat UI**，让新的受支持 Agent 标签以 chat 打开；保持 **Terminal** 则先打开 TUI。

启用后，可从 Agent 窗格在 Chat UI ↔ 终端之间切换。

## Composer {#composer}

- 输入消息并发送（或停止正在进行的 turn）。主机支持时可以附加文件/图片。未发送的草稿文本和附件会随窗格在 disconnect/reconnect 后保留（若主机能恢复它们）。同一会话重连时，已稳定的 transcript 也会留在屏幕上，而不是空白等到重新加载完成（桌面和移动端共享这一保留行为）。
- 输入 `/` 可使用斜杠命令和已发现的 **skills**（尽可能按 Agent 过滤）。斜杠目录是 Agent 感知的（Claude 与 Codex 命令集不同），并与移动端 Chat UI 共享。
- 当 Agent 暴露它们时，使用 **model** 和选项 pills（thought level、mode、Agent 特定的会话选项）。**Claude** 的模型选项来自**该主机上已安装的 Claude CLI**（不是硬编码列表），因此更新 CLI 后新模型会出现。**Codex** 支持从 pill 直接选择模型（发送 `/model <id>`），单独的 `/model` 仍会打开 agent picker。**Grok** 暴露 **model**（启动时 `-m`，会话中 `/model`）和 **reasoning effort**（启动时 `--reasoning-effort`，会话中 `/effort`）；模型列表从已登录的 Grok CLI（`grok models`）探测，因此已退役的 id 会从选择器中消失。effort 选项跟随所选模型：Grok 4.6 包含 **Extra high**，而 Grok 4.5 止于 **High**。**在 Agent 进程启动之前**，composer 可以显示将在首次启动时生效的草稿启动选项；会话上线后，仅影响正在进行的 turn 的 pills 会保持禁用或带标签，直到会话就绪。实时值会发给该标签里的 CLI。

## 来自 Agent 的问题 {#questions-from-the-agent}

当 Claude 显示 **AskUserQuestion**（或类似的结构化 permission/question 卡片）时，Chat UI 应在 transcript 中渲染该问题卡片，让你可以从 composer 路径作答，而不是把它当作折叠的 tool call。在卡片上用 **Submit** 确认。这包括跑在已配对 [远程 Orca 服务器](/docs/remote-servers) / headless 主机上的 Agent——不只是本地窗格。

## 可用性 {#availability}

Chat UI 在桌面上为受支持的本地和远程（已配对服务器）Agent 会话提供。[移动伴侣](/docs/mobile) 对同一批配对会话复用 chat 风格的 transcript 模式。

> **实验性**
> Transcript 保真度、流式传输与终端对等仍在积极调优。需要每一处 OSC/status 细节时，请优先使用原始 TUI。
