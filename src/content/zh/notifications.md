# 通知与收件箱 {#notifications-inbox}

Orca 运行的是 Agent，而不只是终端，所以它知道 Agent 是真正完成了，还是只是暂停。通知依赖这个信号，让你可以排队三个 Agent、走开，等第一个完成时再回来。

## Agent 完成提示 {#agent-finished-pings}

当 Agent 从 working 转到 idle，Orca 会发出通知——系统通知、声音，以及 worktree 上的芯片。

## 常驻铃铛 {#persistent-bell}

顶栏铃铛显示所有 worktree 的未读通知。点击一条通知会跳到对应的 worktree 和窗格。

在 macOS 上，同样的未读数会镜像到 Dock 图标角标，这样不用把 Orca 拉到前台也能发现待处理的 Agent 提示。

## 标为未读 {#mark-unread}

右键通知可标为未读——已经分拣过、但还想稍后再看时很有用。

## 调校 {#tuning}

可在 [Settings → Notifications](/docs/settings) 关闭特定类别（system、sound、chip-only）。

## 自定义声音 {#custom-sounds}

可在 [Settings → Notifications](/docs/settings) 按类别选择自定义桌面通知声音——指向磁盘上的任意音频文件，或从 Orca 内置集合里挑选。适合让 Agent 完成提示从系统邮件和 Slack 里脱颖而出。

支持的格式：MP3、WAV、OGG、M4A、AAC、FLAC。一个文件应用于所有已送达的桌面通知。

使用自定义声音时，可在同一设置窗格里设置播放音量。
