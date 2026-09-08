# 文件浏览器与外部拖放 {#file-explorer-external-drag-drop}

文件浏览器位于每个 worktree 的左侧。它实时跟踪磁盘上的文件——创建、重命名、删除和移动都映射到文件系统操作，因此外部改动（比如来自 Agent）会立刻出现。目录列表先排目录再排文件，采用 **自然（感知数字）名称顺序**——`9`、`99`、`100`，而不是字典序的 `100`、`99`。同样的排序适用于 SSH、远程 runtime、Source Control 树节点、文件夹选择器和移动端文件树。

## 外部拖放 {#external-drag-drop}

- 从 Finder/Explorer 把文件拖进文件树即可复制进来。
- 把图片拖进 markdown 编辑器，会在光标处插入。
- 把文件拖到 Agent 终端，会把它们的路径贴到 prompt。
- 对于 [SSH worktrees](/docs/ssh)，拖放同样可用——Orca 在完成拖放前把文件上传到远程宿主，因此 Agent 看到的是真正的磁盘路径。

## Git 状态 {#git-status}

文件按 git 状态着色——untracked、modified、staged、ignored。右键是常见操作：discard、stage、rename、**Copy Path** 和 **Copy Relative Path**（默认 `Cmd+Option+Shift+C` / `Ctrl+Alt+Shift+C`；可重映射）。

右键单个文件并选 **Copy**，会把文件本身放到 OS 剪贴板。对于 SSH worktrees，Orca 先在本地暂存远程文件，再把该暂存文件引用写入剪贴板；远程文件夹排除在外。

## 下载（SSH / 远程） {#download-ssh-remote}

在桌面应用中，右键远程文件 → **Download**，或在连接支持递归传输时右键远程文件夹 → **Download Folder**。Orca 打开原生的保存/文件夹对话框。Web 客户端不可用。本地 worktree 不显示此操作。

## 搜索文件夹 {#search-a-folder}

右键文件夹并选 **Find in Folder**，会打开已经限定到该文件夹的 Search。你也可以在文件浏览器中选中文件夹，在 macOS 上按 `Cmd-Shift-F`，在 Windows 和 Linux 上按 `Ctrl-Shift-F`。

## 下一步 {#next-steps}

- [Monaco 编辑器与自动保存](/docs/editing/monaco) — 找到需要的匹配后编辑文件。
- [Diff 查看器](/docs/review/diff-viewer) — 审查 Agent 或编辑器做的改动。
