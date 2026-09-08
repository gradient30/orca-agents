# Design Mode {#design-mode}

Design Mode 把 Orca 浏览器变成指针到代码的工具。打开它，点击渲染页面上的任意 UI 元素，该元素就会作为富上下文落到 Agent 聊天里——带着它的 DOM、计算后的样式和一张截图。

> **图示** Design Mode：点一个按钮，它落到 Agent 聊天里

## 打开它 {#turn-it-on}

点浏览器工具栏里的 **Design Mode** 开关。你的光标变成选择器；悬停会高亮其下的元素。

## 落到聊天 {#drop-into-chat}

点击一个元素。Orca 捕获：

- 该元素的 HTML（outer 和一小圈邻域）。
- 它的计算后 CSS——颜色、字体、间距。
- 该元素的裁剪截图。
- 如果有 dev-mode source map，则还有源文件/行号。

所有这些作为一份附件送进活动的 Agent 终端，然后你输入想改什么。

## 使用结果 {#use-the-result}

Agent 编辑源码，Orca 热重载，你再点一次来验证。这个循环最紧的版本就是主打配方 [用 Design Mode 修 UI](/docs/recipes/design-mode-fix)。
