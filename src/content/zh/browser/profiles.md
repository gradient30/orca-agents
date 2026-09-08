# Browser-use 配置档 {#browser-use-profiles}

Browser-use 配置档让你用特定身份运行 Orca 浏览器——已登录用户、特定 cookie jar、自定义 user-agent。适合 Agent 需要登录、复现会话相关缺陷，或模拟多个用户时。

## 创建配置档 {#create-a-profile}

1. 打开 [Settings → Browser → Profiles](/docs/settings)。
1. 点 **Add profile**，给它一个名字。
1. 可选地植入 cookies、user-agent 和 viewport 尺寸。
1. 每个配置档呈现 Electron 自己的 user agent。Orca 不再把它改写成看起来像 Chrome，因为 Cloudflare Turnstile 会拒绝一个长得像 Chrome、却不发送 client hints 的 UA，而接受已声明的 Electron 客户端。唯一例外是 Google 的登录宿主，Orca 在那里呈现 Firefox 身份，以便 Google 签发绑定到嵌入式浏览器的 cookies。**native user agent** 配置档（`orca tab profile create --no-ua-spoof`）也会跳过该 Google 例外。

## Cookie 导入与 Google 登录 {#cookie-import-and-google-sign-in}

从 Settings 或浏览器工具栏把 Chrome 或 Edge（或 cookie 文件）的 cookies 导入配置档。Orca 只替换导入中包含的域名的已有 cookies，因此同一配置档里不相关站点的登录保持完好。Google cookies 被排除——导入菜单显示 **Google logins aren't imported**，并告诉你 **Sign in to Google directly in Orca.** 跳过 Google cookies 的导入之后，会有一条单独警告点名执行导入的宿主：在 Orca 中于该宿主上用同一配置档打开浏览器，然后登录。

当站点从 USB 安全密钥请求可发现的 passkey，且该密钥提供多个账户时，Orca 会打开账户选择器，而不是静默取消登录。选择你想要的账户或取消请求。操作系统存储的平台 passkeys 在 Orca 中尚不可用；此流程用于外接 FIDO 安全密钥。

## 使用配置档 {#use-a-profile}

从浏览器工具栏挑选配置档。该窗格中的所有标签都用它，直到你切换。Agent 驱动的浏览器命令会继承活动配置档。

## 隔离 {#isolation}

每个配置档有自己的存储分区——cookies、local storage、cache。配置档不会互相泄漏。
