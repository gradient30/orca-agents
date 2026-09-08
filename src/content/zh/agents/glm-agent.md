# 在 Orca ADE 中使用 GLM-5.2 {#how-to-use-glm-5-2-in-orca-ade}

GLM-5.2 通过你已经在用的 agent harness 在 Orca 中工作。在 Claude Code、OpenCode、Cline、Kilo Code、Roo Code、Droid、OpenClaw 或其他 CLI agent 中配置 GLM-5.2，然后从 Orca 的 picker 启动该 Agent。

Orca 提供隔离的 worktree、终端窗格、浏览器标签、审查流程和会话管理。你的 [Z.ai CodePlan subscription](https://z.ai/subscribe) 和 agent 配置提供模型访问。

> **前置条件**
> 在 agent harness 中配置 GLM-5.2 之前，你需要一份有效的 [Z.ai CodePlan subscription](https://z.ai/subscribe)，并具备 GLM Coding Plan 访问权限。OpenAI 兼容的 harness 还需要一把 Z.ai API key。Orca 不包含也不转售 GLM 访问。

> **来源**
> 本页记录的是已与 Orca 测试过的 GLM-5.2 配置。Z.ai 的 [model guide](https://docs.z.ai/devpack/latest-model) 可能列出更新的模型；替换之前请在该处核对该模型名称、上下文限制和 harness 兼容性。

## Claude Code {#claude-code}

Claude Code 从 `~/.claude/settings.json` 读取模型覆盖。要在 Orca 中使用 GLM-5.2：

1. 打开 `~/.claude/settings.json`。
1. 添加或更新下面的 `env` 块。
1. 在 Orca 中重启 Claude Code 会话，以便加载新环境。
1. 在 Claude Code 内运行 `/status` 以确认当前模型。

```json
{
  "env": {
    "CLAUDE_CODE_AUTO_COMPACT_WINDOW": "1000000",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "glm-4.5-air",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "glm-5.2[1m]",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "glm-5.2[1m]"
  }
}
```

想要 GLM-5.2 的 1M 上下文变体时使用 `[1m]` 后缀，并把 `CLAUDE_CODE_AUTO_COMPACT_WINDOW` 保持为 `1000000`，使 Claude Code 的 compaction 窗口与该上下文大小匹配。如果 Claude Code 说 `[1m]` 模型不存在，请更新 Claude Code 后再试。

对于编码任务，Z.ai 建议用 `/effort` 把 Claude Code effort 设为 `max`。Claude Code 较低的 effort 设置映射到 GLM-5.2 high effort，而 `xhigh`、`max` 和 `ultracode` 映射到 GLM-5.2 max effort。

## OpenCode、Cline、Kilo Code、Roo Code 和 Droid {#opencode-cline-kilo-code-roo-code-and-droid}

对于暴露 OpenAI 兼容 provider 的 agent harness：

1. 在 Orca 外或 Orca 内打开 harness 设置。
1. 选择 OpenAI-compatible provider 选项，或该 harness 若有 Z.ai provider 选项则选它。
1. 把 base URL 设为 `https://api.z.ai/api/coding/paas/v4`。
1. 添加你的 Z.ai API key。
1. 把自定义模型名设为 `glm-5.2`。
1. 若 harness 暴露该字段，把 context window size 设为 `1000000`。
1. 禁用图像支持，除非该 harness 明确记录了此 provider 路径的图像支持。

保存后，从 Orca 的 agent picker 启动该 harness。Orca 会在所选 worktree 中运行同一份已配置的 CLI。

## OpenClaw {#openclaw}

如果 OpenClaw 无法从其 provider 模型列表直接选择 GLM-5.2，请在 `~/.openclaw/openclaw.json` 中手动添加该模型。

把 `glm-5.2` 加到 `models.providers.zai.models`：

```json
{
  "id": "glm-5.2",
  "name": "GLM-5.2",
  "reasoning": true,
  "input": ["text"],
  "cost": {
    "input": 0,
    "output": 0,
    "cacheRead": 0,
    "cacheWrite": 0
  },
  "contextWindow": 1000000,
  "maxTokens": 131072
}
```

然后设置默认 primary 模型：

```json
{
  "model": {
    "primary": "zai/glm-5.2",
    "fallbacks": ["zai/glm-4.7"]
  }
}
```

并把该模型加到 `agents.defaults.models` 下：

```json
{
  "models": {
    "zai/glm-5.2": { "alias": "GLM" },
    "zai/glm-4.7": {}
  }
}
```

重启 OpenClaw gateway：

```bash
openclaw gateway restart
```

然后从 Orca 启动 OpenClaw，或在 Orca 终端中运行 `openclaw tui`，以确认 GLM-5.2 已激活。

关键规则很简单：在 harness 存放 provider/model 设置的地方配置 GLM-5.2，然后让 Orca 在正确的 worktree 中启动该 harness。
