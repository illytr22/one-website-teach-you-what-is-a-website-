# 一个网页，教会你什么是网页

给**完全零基础**的人准备的单页教程。网页本身就是教材：边读边按 F12 拆开它。

支持 **中文 / English / Deutsch** 三种语言，页面右上角可以随时切换，切换后会停留在同一节。

## 内容

**第一部分 · 网页**
1. 网页到底是什么（乐谱与钢琴、服务器与浏览器）
2. 看懂网址（输入任意网址，自动拆成协议 / 域名 / 路径 / 参数 / 锚点）
3. 按下回车之后（DNS → 连接 → 请求 → 响应 → 渲染，分步动画）
4. 网页三兄弟 HTML / CSS / JS（可开关 CSS、JS 的对比演示）
5. 亲手写一个网页（实时预览的迷你编辑器）

**第二部分 · F12 开发者工具**

6. 打开开发者工具（各系统快捷键、各面板速览）
7. 元素 Elements：选择工具、改字改样式、找出被隐藏的秘密盒子、盒模型
8. 控制台 Console：log / warn / error / table、真实报错、可输入的命令、Self-XSS 防骗提醒
9. 网络 Network：触发 200 / 404 / 图片 / 并发请求，各列含义、状态码、Headers/Preview/Response、限速与停用缓存
10. 源代码 Sources：用 `debugger` 断点暂停并单步执行
11. 应用 Application：Local Storage、Session Storage、Cookie 动手实验
12. 设备模式、性能 Performance（含「故意卡 1 秒」按钮）、Lighthouse、命令菜单

**收尾**：8 道小测验 + 名词小抄

## 本地打开

推荐用一个本地服务器打开（直接双击 `index.html` 也能看，但 Network 一节的请求按钮在 `file://` 下会失败）：

```bash
python3 -m http.server 8000
```

然后访问 http://localhost:8000

## 发布到 GitHub Pages

仓库 Settings → Pages → Source 选 `Deploy from a branch`，分支选 `main`、目录 `/ (root)`，保存即可。

## 文件

```
index.html          中文版
en/index.html       English
de/index.html       Deutsch
assets/style.css    三种语言共用的样式
assets/app.js       三种语言共用的脚本（界面文字在文件开头的 I18N 字典里）
assets/cat.svg      示例图片
data.json           Network 一节请求用的示例数据（en/、de/ 下各有一份对应语言的）
```

没有使用任何框架或外部依赖。

### 修改或新增语言

- 页面正文：直接改对应语言的 `index.html`。
- 按钮反馈、测验、控制台消息等由脚本生成的文字：改 `assets/app.js` 开头的 `I18N` 字典。
- 新增一种语言：复制 `en/` 文件夹，翻译 `index.html` 和 `data.json`，把 `<html lang="..">` 改成新语言代码，在 `I18N` 里加一套文字，并在每个页面的 `.lang-switch` 里加一个链接。
