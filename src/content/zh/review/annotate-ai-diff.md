# 批注 AI Diff {#annotate-ai-diff}

Annotate AI Diff 是 Orca 针对 Agent 生成代码的行内审查循环。你可以在任意 AI 生成 hunk 的任意行上留评论，然后把它们作为一批打回给 Agent 修订——不用抄行号，不用切换上下文。

> **图示** 批注生成的 diff，把一批行级备注打回给 Agent

## 留下评论 {#leave-a-comment}

1. 在 diff 里悬停任意行。gutter 里会出现 **+**。
1. 点它（或光标在该行时按 `c`）。
1. 输入反馈——支持 markdown。
1. 按 `Cmd-Enter` 保存，`Esc` 取消。

评论钉在确切的那一行；Orca 跨编辑跟踪它们，所以 diff 移动时评论会跟着走。

## 发送这一批 {#send-the-batch}

审查完成后，点 diff 顶部的 **Send to agent**。Orca 把你的全部评论按行锚定合成一份 prompt，然后打开该 worktree 可用 Agent 的 **Send notes to** 菜单。选应该修订这次改动的 Agent，或从同一菜单启动新 Agent。

**Send Review Notes to Agent** 默认未绑定，以免和其他组合键冲突。在 [Settings → Shortcuts](/docs/settings) 下给它分配快捷键，即可从键盘打开该发送菜单（即使编辑器处于焦点时也有效）。

## 为什么要批量？ {#why-batch}

一条一条发评论会让 Agent 来回摇摆。批量让反馈保持连贯：一轮思考、一次修订，命中率高得多。

## 回复、解决、再审查 {#reply-resolve-re-review}

- Agent 修订后评论仍然钉着——用它们来验证修复。
- 点 **Resolve** 折叠一条线程。
- 如果再点 **Send**，未解决的评论会进入下一批。
