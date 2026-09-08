# 通过 SSH 在远程机器上工作 {#work-on-a-remote-machine-over-ssh}

把 Orca 指向任意 SSH 目标——更强的开发机、GPU 宿主、云沙箱——它感觉就像本地 worktree。同一编辑器、同一 diff 视图、同一批 Agent，不同的算力。你可以打开远程仓库，*或*只打开任意文件夹。本地 / SSH / 服务器 / 临时 VM 模式的完整菜单，见 [运行 Orca 的方式](/docs/ways-to-run)。

## 设置 {#setup}

1. 在 [Settings → SSH](/docs/settings) 添加宿主。
1. 测试连接。如果在仓库上工作，确保宿主上装了 git。
1. 把仓库加到 Orca，把它的位置选成该 SSH 目标——或者直接从文件选择器打开任意远程文件夹。

## 运行 {#run}

1. 创建 worktree。Orca 在远程跑 `git worktree add`。
1. 启动 Agent——它跑在远程宿主上，不是你的笔记本。
1. 行内编辑文件——Orca 把保存流到远程文件系统。
1. 像平常一样从笔记本审查 diff、提交并推送。

## 断开 {#disconnects}

笔记本休眠、Wi-Fi 掉线——Agent 在远程继续跑。Orca 重连并重新附着终端。什么都不会丢。
