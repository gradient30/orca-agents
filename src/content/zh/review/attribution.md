# 归因 {#attribution}

Orca 会跟踪它看到 Agent 触及的每一行的出处，所以你读 diff 时一眼就能看出哪些行是人写的、哪些来自 AI。

## 工作原理 {#how-it-works}

当 Agent 通过其工具写入文件时，Orca 记录这些范围。diff 查看器会在 gutter 里用细微标记渲染来自 AI 的行。人在 AI 代码上的编辑会把归因翻回 human。

## 为什么重要 {#why-it-matters}

- 你知道 PR 的哪些部分值得额外审查。
- 安全和合规审计可以把 AI 写的和人写的代码分开。
- 审查更快——你不用重读自己刚手写的代码。

## 范围 {#scope}

归因只存在于 Orca 本地——不会提交进 git。如果需要持久归因，从 diff 工具栏导出 diff 元数据。
