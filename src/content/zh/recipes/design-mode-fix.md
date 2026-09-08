# 用 Design Mode 修 UI {#fix-a-ui-bug-with-design-mode}

Design Mode 把“那个按钮看起来不对”→“修好的提交”压缩到一分钟以内。

## 步骤 {#steps}

1. 打开该 worktree 的浏览器窗格。导航到有 bug 的页面。
1. 打开 [Design Mode](/docs/browser/design-mode)。
1. 点击坏掉的元素。它会作为富附件落到 Agent 聊天里。
1. 输入你想修什么：“这段 padding 太紧，加大到和上面的卡片一致。”
1. Agent 改源码。热重载刷新浏览器。
1. 再点一次该元素来验证——如果还不对，重复。
1. 对了就提交。

## 为什么快 {#why-its-fast}

不用截图，不用在 DOM 里翻，不用抄选择器。Agent 拿到 HTML、计算后的 CSS，以及你指到的那个元素的裁剪图——和人类审查者想要的是同一套上下文。
