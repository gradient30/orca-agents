# Worktree 检查点 {#worktree-checkpoints}

每个 Orca worktree 都带有一个轻量、自由文本的 **comment** 字段，在 UI 里可见——这是该 worktree 此刻正在做什么的状态快照。Agent 可以从 CLI 更新它，这是我们推荐的模式：让人类协作者跟上进度，而不必强迫聊天。

## 模式 {#the-pattern}

```
orca worktree set --worktree active --comment "reproduced auth failure; testing credential-chain fix" --json
```

## 卡片状态（可选） {#card-status-optional}

在自由文本 comment 之外，阶段变化时设置工作区卡片状态：

```bash
orca worktree set --worktree active \
  --comment "fix implemented; running integration tests" \
  --workspace-status in-progress \
  --json
```

状态：`todo`、`in-progress`、`in-review`、`completed`（或你的工作区使用的自定义 id）。

## 适合打检查点的时机 {#good-checkpoint-moments}

- 完成了一块有意义的实现。
- 确认或否定了一个假设。
- 完成了一次代码审查。
- 碰到阻塞（等待外部输入、上游 bug、缺少访问权限）。
- 从调查转入修复，或从修复转入验证。

## 格式 {#format}

第一行是动作：刚发生了什么、在哪里，以及状态或下一步。

```
orca worktree set --worktree active --comment "added debounce to SearchBar onChange (src/components/SearchBar.tsx); ready for review
goal: reduce redundant API calls per #298" --json
```

## 先读再写 {#reading-before-writing}

如果 comment 里可能有用户写的上下文，先读它，以免覆盖目标或约束：

```
orca worktree current --json
```

保留仍然有效的内容，丢掉过时的，再织入你的更新。
