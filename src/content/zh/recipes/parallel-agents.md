# 让三个 Agent 赛跑同一任务 {#race-three-agents-on-the-same-task}

把同一任务并行交给多个 Agent，是 Orca 的杀手锏。同一 prompt、三条分支、选出赢家。

## 步骤 {#steps}

1. 从同一 start-from ref 创建三个 worktree。命名为 `fix-bug`、`fix-bug-2`、`fix-bug-3`。
1. 在每一个里启动不同的 Agent——Claude Code、Codex、Cursor CLI。
1. 把同一份 prompt 贴进全部三个。
1. 分屏以便看着它们干活——把标签拖到边缘。
1. 完成后审查每一份 diff。在赢家上用 [批注 AI Diff](/docs/review/annotate-ai-diff)。
1. 从获胜的 worktree 提交、推送、打开 PR。
1. 删除两个失败者——一键移除 worktree 和分支。

## 为什么有效 {#why-it-works}

不同 Agent 会犯不同的错。并行跑同一任务比顺序重试更便宜，并把分歧变成信号。三个 Agent 一致的地方，答案大概是对的。它们分叉的地方，你就找到了难点。
