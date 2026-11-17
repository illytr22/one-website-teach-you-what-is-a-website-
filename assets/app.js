/* =========================================================
   你好 / Hello / Hallo! 👋
   这是本网页的 JavaScript（动作）部分，三种语言共用一份。
   This is the page's JavaScript ("actions"), shared by all three languages.
   Dies ist das JavaScript der Seite („Aktionen“), für alle drei Sprachen.
   ========================================================= */

const LANG = (document.documentElement.lang || "zh").slice(0, 2);
const ROOT = document.documentElement.dataset.root || "";

/* ---------- 文案 / Strings / Texte ---------- */
const I18N = {
  zh: {
    welcome1: "👋 你好！你打开了控制台！",
    welcome2: "这条消息是网页的 JavaScript 用 console.log() 写给你的。\n试着在下面输入：打招呼(\"你的名字\")  然后按回车。",
    stranger: "陌生人",
    greetLog: n => "你好，" + n + "！你刚刚在控制台里运行了一个 JavaScript 函数 🎉",
    greetReturn: n => "函数的返回值：欢迎你，" + n,
    urlInvalid: "😅 这看起来不像一个完整的网址。记得以 https:// 开头哦。",
    urlLabels: { protocol: "协议", host: "域名", hostPort: "域名（含端口）", path: "路径", query: "参数", hash: "锚点" },
    urlExplain(p) {
      return "翻译成人话：用 <b>" + p.protocol + "</b> 方式，去 <b>" + p.host + "</b> 这台服务器，拿 <b>" + p.path + "</b>" +
        (p.params.length ? "，并告诉它：" + p.params.map(([k, v]) => "<b>" + k + "</b> 是 <b>" + v + "</b>").join("、") : "") +
        (p.hash ? "；拿到后滚动到 <b>" + p.hash + "</b> 的位置。" : "。");
    },
    replay: "↺ 再播一次",
    sample: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 16px; }
    h1 { color: tomato; }
    button { font-size: 18px; padding: 6px 14px; }
  </style>
</head>
<body>
  <h1>你好，世界！</h1>
  <p>这是我写的<b>第一个</b>网页。</p>
  <ul>
    <li>我喜欢的水果：西瓜</li>
    <li>我喜欢的颜色：橙色</li>
  </ul>
  <button onclick="alert('你点了我！')">点我</button>
</body>
</html>`,
    tabs: [
      ["元素", "Elements", "网页的 HTML 结构和 CSS 样式。可以直接修改，看效果。", "#elements"],
      ["控制台", "Console", "看网页的日志和报错；输入 JavaScript 命令让网页执行。", "#console"],
      ["源代码", "Sources", "网页用到的所有文件；可以设断点让代码暂停。", "#sources"],
      ["网络", "Network", "网页发出的每一个请求和收到的每一个响应。", "#network"],
      ["性能", "Performance", "录下一段时间，分析网页为什么卡。", "#more"],
      ["内存", "Memory", "看网页占用了多少内存，找「内存泄漏」。进阶内容，初学可跳过。", null],
      ["应用", "Application", "Cookie、Local Storage 等网页存在你电脑上的数据。", "#application"],
      ["Lighthouse", "Lighthouse", "给网页做一次全面体检并打分。", "#more"],
    ],
    jumpToExercise: "→ 跳到这一节的动手练习",
    devtoolsOpen: "<strong>✅ 看起来你打开了开发者工具！</strong>很好，保持打开状态，继续往下读。（如果你把它弹成了独立窗口，这里可能检测不到，没关系。）",
    devtoolsOpenLog: "✅ 开发者工具已打开，欢迎来到网页的后台！",
    logMsg: "📝 这是一条普通消息。现在时间是",
    warnMsg: "⚠ 这是一条警告：你的奶茶快喝完了。",
    errorMsg: "✖ 这是一条错误：找不到你的作业本。",
    tableData: [
      { 水果: "苹果", 价格: 5, 库存: 30 },
      { 水果: "香蕉", 价格: 3, 库存: 12 },
      { 水果: "西瓜", 价格: 20, 库存: 4 },
    ],
    crashMirror: "Uncaught TypeError: Cannot read properties of undefined (reading 'name')\n→ 去真正的 Console 看看，红字右边还有出错的文件名和行号，点它能跳到代码！",
    cleared: "// 已清空",
    failed: "失败",
    fetchFailLog: "请求失败：",
    fetchFailHint: "（如果你是双击本地文件打开的，这是正常的，见下方黄色提示）",
    dataLog: "从服务器拿到的数据：",
    fetchFailed: "❌ 请求失败了。打开 Console 看看红字说了什么。",
    imgLoaded: img => "🖼 图片加载完成：" + img + " 在 Network 里点这一行，Preview 标签会直接显示这张图。",
    imgFailed: "❌ 图片加载失败。",
    notFound: "🙅 服务器回答 <b>404 Not Found</b>：没这个文件。看 Network 里那一行是不是红色的？Console 里通常也会多一条红字。",
    sendFailed: "❌ 请求没能发出去。打开 Console 看看原因。",
    many: "🚀 同时发出 5 个请求……去 Network 的「瀑布」列看看它们是不是几乎同时开始的。",
    calcOut: t => "总价：" + t + " 元（16 × 3 − 5）",
    calcLog: "计算完成，总价是",
    welcomeBack: n => "👋 欢迎回来，" + n + "！我记得你。",
    unknown: "我还不认识你。",
    jank: "🐢 刚才网页卡了 1 秒。在这 1 秒里，你点什么都没反应——因为 JS 占住了浏览器。",
    quiz: [
      { q: "网页的本质是什么？", a: ["一张图片", "一段写好的文字（代码），由浏览器画出来", "一个手机 App"], c: 1, why: "网页就是一段文字文件。按 Ctrl+U 就能看到。" },
      { q: "负责网页「长什么样」（颜色、字体、排版）的是？", a: ["HTML", "CSS", "JavaScript"], c: 1, why: "CSS 是衣服；HTML 是骨架；JS 是动作。" },
      { q: "网址 https://abc.com/news?id=7#top 中，哪部分不会发给服务器？", a: ["/news", "?id=7", "#top"], c: 2, why: "# 后面的锚点只在浏览器里用来定位页面位置。" },
      { q: "网页上某个按钮点了没反应，想看看是不是出错了，先去哪个面板？", a: ["控制台 Console", "应用 Application", "Lighthouse"], c: 0, why: "报错会以红字出现在 Console 里。" },
      { q: "在 Network 面板看到一行状态是 404，意思是？", a: ["成功", "服务器坏了", "找不到这个文件"], c: 2, why: "4xx 是请求方的问题，404 是 Not Found。5xx 才是服务器坏了。" },
      { q: "你用 F12 把网页上的余额改成了 999999，会怎样？", a: ["银行账户真的变多了", "只是你电脑上显示变了，刷新就恢复", "会被封号"], c: 1, why: "你改的是自己浏览器里的副本，服务器上的数据没变。" },
      { q: "有人让你在控制台粘贴一段代码「领红包」，你应该？", a: ["赶紧粘贴", "拒绝，这可能是骗局（Self-XSS）", "先粘贴一半试试"], c: 1, why: "陌生代码会以你的身份执行，可能盗号。" },
      { q: "网站「记住我已登录」，通常靠的是？", a: ["Cookie", "CSS", "404"], c: 0, why: "Cookie 会随每次请求自动带给服务器，最常用来保持登录。可以在 Application 面板里看到。" },
    ],
    score: (r, n) => `得分：${r} / ${n} ` + (r === n ? "🏆 满分！你已经比大多数人更懂网页了。" : r >= 6 ? "👍 很棒！" : "📚 回头再看看对应章节吧。"),
  },

  en: {
    welcome1: "👋 Hi! You opened the Console!",
    welcome2: "This message was written to you by the page's JavaScript using console.log().\nTry typing:  sayHello(\"your name\")  below and press Enter.",
    stranger: "stranger",
    greetLog: n => "Hello, " + n + "! You just ran a JavaScript function in the Console 🎉",
    greetReturn: n => "The function's return value: welcome, " + n,
    urlInvalid: "😅 That doesn't look like a complete URL. Remember to start with https://",
    urlLabels: { protocol: "protocol", host: "domain", hostPort: "domain (with port)", path: "path", query: "query", hash: "fragment" },
    urlExplain(p) {
      return "In plain words: use <b>" + p.protocol + "</b> to go to the server <b>" + p.host + "</b> and fetch <b>" + p.path + "</b>" +
        (p.params.length ? ", telling it that " + p.params.map(([k, v]) => "<b>" + k + "</b> is <b>" + v + "</b>").join(", ") : "") +
        (p.hash ? "; once loaded, scroll to <b>" + p.hash + "</b>." : ".");
    },
    replay: "↺ Play again",
    sample: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 16px; }
    h1 { color: tomato; }
    button { font-size: 18px; padding: 6px 14px; }
  </style>
</head>
<body>
  <h1>Hello, world!</h1>
  <p>This is my <b>very first</b> web page.</p>
  <ul>
    <li>Favourite fruit: watermelon</li>
    <li>Favourite colour: orange</li>
  </ul>
  <button onclick="alert('You clicked me!')">Click me</button>
</body>
</html>`,
    tabs: [
      ["Elements", "Elements", "The page's HTML structure and CSS styles. Edit them directly and see the result.", "#elements"],
      ["Console", "Console", "See the page's logs and errors; type JavaScript commands for the page to run.", "#console"],
      ["Sources", "Sources", "Every file the page uses; set breakpoints to pause the code.", "#sources"],
      ["Network", "Network", "Every request the page sends and every response it gets back.", "#network"],
      ["Performance", "Performance", "Record a few seconds and find out why the page feels slow.", "#more"],
      ["Memory", "Memory", "How much memory the page uses; hunt for memory leaks. Advanced — beginners can skip it.", null],
      ["Application", "Application", "Cookies, Local Storage and other data the page keeps on your computer.", "#application"],
      ["Lighthouse", "Lighthouse", "A full check-up that gives the page scores.", "#more"],
    ],
    jumpToExercise: "→ Jump to this section's exercise",
    devtoolsOpen: "<strong>✅ Looks like you opened DevTools!</strong> Great — keep it open and read on. (If you undocked it into a separate window, this check may not notice. That's fine.)",
    devtoolsOpenLog: "✅ DevTools is open. Welcome backstage!",
    logMsg: "📝 This is a normal message. The time is",
    warnMsg: "⚠ This is a warning: your coffee is almost empty.",
    errorMsg: "✖ This is an error: homework not found.",
    tableData: [
      { fruit: "apple", price: 5, stock: 30 },
      { fruit: "banana", price: 3, stock: 12 },
      { fruit: "watermelon", price: 20, stock: 4 },
    ],
    crashMirror: "Uncaught TypeError: Cannot read properties of undefined (reading 'name')\n→ Look in the real Console: to the right of the red text is the file name and line number. Click it to jump to the code!",
    cleared: "// cleared",
    failed: "failed",
    fetchFailLog: "Request failed:",
    fetchFailHint: "(If you opened this page by double-clicking the local file, that's expected — see the yellow note below.)",
    dataLog: "Data received from the server:",
    fetchFailed: "❌ The request failed. Open the Console and read the red text.",
    imgLoaded: img => "🖼 Image loaded: " + img + " Click its row in Network — the Preview tab shows the picture.",
    imgFailed: "❌ The image failed to load.",
    notFound: "🙅 The server answered <b>404 Not Found</b>: no such file. Is that row red in Network? The Console usually shows a red line too.",
    sendFailed: "❌ The request couldn't be sent. Check the Console for the reason.",
    many: "🚀 Sending 5 requests at once… look at the Waterfall column in Network: did they all start at almost the same moment?",
    calcOut: t => "Total: $" + t + " (16 × 3 − 5)",
    calcLog: "Calculation done, the total is",
    welcomeBack: n => "👋 Welcome back, " + n + "! I remember you.",
    unknown: "I don't know you yet.",
    jank: "🐢 The page just froze for 1 second. Nothing you clicked worked — JavaScript was hogging the browser.",
    quiz: [
      { q: "What is a web page, really?", a: ["A picture", "A piece of written text (code) that the browser draws", "A phone app"], c: 1, why: "A web page is a text file. Press Ctrl+U to see it." },
      { q: "Which one decides how a page looks (colours, fonts, layout)?", a: ["HTML", "CSS", "JavaScript"], c: 1, why: "CSS is the clothes; HTML is the skeleton; JS is the movement." },
      { q: "In https://abc.com/news?id=7#top, which part is NOT sent to the server?", a: ["/news", "?id=7", "#top"], c: 2, why: "The fragment after # is only used by the browser to find a spot on the page." },
      { q: "A button on a page does nothing when clicked. Which panel do you check first for errors?", a: ["Console", "Application", "Lighthouse"], c: 0, why: "Errors show up as red text in the Console." },
      { q: "A row in the Network panel has status 404. What does that mean?", a: ["Success", "The server is broken", "The file was not found"], c: 2, why: "4xx means a problem with the request; 404 is Not Found. 5xx means the server broke." },
      { q: "You use F12 to change your bank balance on the page to 999999. What happens?", a: ["You're suddenly rich", "Only your screen changes; refresh and it's back", "Your account gets banned"], c: 1, why: "You edited your own browser's copy. The data on the server is untouched." },
      { q: "Someone asks you to paste code into the Console to \"claim a prize\". You should…", a: ["Paste it quickly", "Refuse — it's probably a scam (Self-XSS)", "Paste half of it to test"], c: 1, why: "Strangers' code runs as you and can hijack your account." },
      { q: "How does a site usually \"remember that I'm logged in\"?", a: ["Cookies", "CSS", "404"], c: 0, why: "Cookies travel with every request to the server — the classic way to stay logged in. You can see them in the Application panel." },
    ],
    score: (r, n) => `Score: ${r} / ${n} ` + (r === n ? "🏆 Perfect! You now understand web pages better than most people." : r >= 6 ? "👍 Great job!" : "📚 Have another look at the matching sections."),
  },

  de: {
    welcome1: "👋 Hallo! Du hast die Konsole geöffnet!",
    welcome2: "Diese Nachricht hat dir das JavaScript der Seite mit console.log() geschrieben.\nTippe unten:  hallo(\"dein Name\")  und drücke Enter.",
    stranger: "Fremde Person",
    greetLog: n => "Hallo, " + n + "! Du hast gerade eine JavaScript-Funktion in der Konsole ausgeführt 🎉",
    greetReturn: n => "Rückgabewert der Funktion: Willkommen, " + n,
    urlInvalid: "😅 Das sieht nicht nach einer vollständigen URL aus. Sie sollte mit https:// beginnen.",
    urlLabels: { protocol: "Protokoll", host: "Domain", hostPort: "Domain (mit Port)", path: "Pfad", query: "Parameter", hash: "Anker" },
    urlExplain(p) {
      return "Auf gut Deutsch: Per <b>" + p.protocol + "</b> zum Server <b>" + p.host + "</b> gehen und <b>" + p.path + "</b> holen" +
        (p.params.length ? "; dabei mitteilen: " + p.params.map(([k, v]) => "<b>" + k + "</b> ist <b>" + v + "</b>").join(", ") : "") +
        (p.hash ? "; danach zu <b>" + p.hash + "</b> scrollen." : ".");
    },
    replay: "↺ Nochmal abspielen",
    sample: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 16px; }
    h1 { color: tomato; }
    button { font-size: 18px; padding: 6px 14px; }
  </style>
</head>
<body>
  <h1>Hallo, Welt!</h1>
  <p>Das ist meine <b>allererste</b> Webseite.</p>
  <ul>
    <li>Lieblingsobst: Wassermelone</li>
    <li>Lieblingsfarbe: Orange</li>
  </ul>
  <button onclick="alert('Du hast mich geklickt!')">Klick mich</button>
</body>
</html>`,
    tabs: [
      ["Elemente", "Elements", "HTML-Struktur und CSS-Stile der Seite. Direkt bearbeiten und das Ergebnis sehen.", "#elements"],
      ["Konsole", "Console", "Protokolle und Fehler der Seite; JavaScript-Befehle eintippen und ausführen lassen.", "#console"],
      ["Quellen", "Sources", "Alle Dateien der Seite; Haltepunkte setzen, um den Code anzuhalten.", "#sources"],
      ["Netzwerk", "Network", "Jede Anfrage, die die Seite sendet, und jede Antwort, die zurückkommt.", "#network"],
      ["Leistung", "Performance", "Ein paar Sekunden aufnehmen und herausfinden, warum die Seite ruckelt.", "#more"],
      ["Speicher", "Memory", "Wie viel Arbeitsspeicher die Seite belegt; Speicherlecks finden. Für Fortgeschrittene.", null],
      ["Anwendung", "Application", "Cookies, Local Storage und andere Daten, die die Seite auf deinem Rechner ablegt.", "#application"],
      ["Lighthouse", "Lighthouse", "Ein kompletter Gesundheitscheck mit Punktzahlen für die Seite.", "#more"],
    ],
    jumpToExercise: "→ Zur Übung in diesem Abschnitt",
    devtoolsOpen: "<strong>✅ Sieht so aus, als hättest du die DevTools geöffnet!</strong> Super – lass sie offen und lies weiter. (Wenn du sie als eigenes Fenster abgedockt hast, merkt diese Prüfung das evtl. nicht. Kein Problem.)",
    devtoolsOpenLog: "✅ DevTools sind offen. Willkommen hinter den Kulissen!",
    logMsg: "📝 Das ist eine normale Nachricht. Es ist jetzt",
    warnMsg: "⚠ Das ist eine Warnung: Dein Kaffee ist fast leer.",
    errorMsg: "✖ Das ist ein Fehler: Hausaufgaben nicht gefunden.",
    tableData: [
      { Obst: "Apfel", Preis: 5, Bestand: 30 },
      { Obst: "Banane", Preis: 3, Bestand: 12 },
      { Obst: "Wassermelone", Preis: 20, Bestand: 4 },
    ],
    crashMirror: "Uncaught TypeError: Cannot read properties of undefined (reading 'name')\n→ Schau in die echte Konsole: Rechts neben dem roten Text stehen Dateiname und Zeilennummer. Ein Klick springt zum Code!",
    cleared: "// geleert",
    failed: "Fehler",
    fetchFailLog: "Anfrage fehlgeschlagen:",
    fetchFailHint: "(Wenn du die Seite per Doppelklick als lokale Datei geöffnet hast, ist das normal – siehe gelben Hinweis unten.)",
    dataLog: "Vom Server erhaltene Daten:",
    fetchFailed: "❌ Die Anfrage ist fehlgeschlagen. Öffne die Konsole und lies den roten Text.",
    imgLoaded: img => "🖼 Bild geladen: " + img + " Klicke die Zeile im Netzwerk-Tab an – unter „Preview“ siehst du das Bild.",
    imgFailed: "❌ Das Bild konnte nicht geladen werden.",
    notFound: "🙅 Der Server antwortet <b>404 Not Found</b>: Diese Datei gibt es nicht. Ist die Zeile im Netzwerk-Tab rot? In der Konsole erscheint meist auch ein roter Eintrag.",
    sendFailed: "❌ Die Anfrage konnte nicht gesendet werden. Schau in der Konsole nach dem Grund.",
    many: "🚀 5 Anfragen gleichzeitig … schau dir im Netzwerk-Tab die Spalte „Waterfall“ an: Starten sie fast im selben Moment?",
    calcOut: t => "Summe: " + t + " € (16 × 3 − 5)",
    calcLog: "Berechnung fertig, die Summe ist",
    welcomeBack: n => "👋 Willkommen zurück, " + n + "! Ich erinnere mich an dich.",
    unknown: "Ich kenne dich noch nicht.",
    jank: "🐢 Die Seite war gerade 1 Sekunde eingefroren. Kein Klick hat funktioniert – JavaScript hat den Browser blockiert.",
    quiz: [
      { q: "Was ist eine Webseite eigentlich?", a: ["Ein Bild", "Ein geschriebener Text (Code), den der Browser zeichnet", "Eine Handy-App"], c: 1, why: "Eine Webseite ist eine Textdatei. Mit Strg+U siehst du sie." },
      { q: "Was bestimmt, wie eine Seite aussieht (Farben, Schriften, Layout)?", a: ["HTML", "CSS", "JavaScript"], c: 1, why: "CSS ist die Kleidung, HTML das Skelett, JS die Bewegung." },
      { q: "Welcher Teil von https://abc.com/news?id=7#top wird NICHT an den Server geschickt?", a: ["/news", "?id=7", "#top"], c: 2, why: "Der Anker nach # dient nur dem Browser, um eine Stelle auf der Seite zu finden." },
      { q: "Ein Button reagiert nicht. In welchem Panel suchst du zuerst nach Fehlern?", a: ["Konsole (Console)", "Anwendung (Application)", "Lighthouse"], c: 0, why: "Fehler erscheinen als roter Text in der Konsole." },
      { q: "Eine Zeile im Netzwerk-Tab hat den Status 404. Was heißt das?", a: ["Erfolg", "Der Server ist kaputt", "Die Datei wurde nicht gefunden"], c: 2, why: "4xx = Problem mit der Anfrage, 404 = Not Found. 5xx bedeutet, der Server hat ein Problem." },
      { q: "Du änderst mit F12 deinen Kontostand auf der Seite auf 999999. Was passiert?", a: ["Du bist plötzlich reich", "Nur deine Anzeige ändert sich; nach dem Neuladen ist alles wie vorher", "Dein Konto wird gesperrt"], c: 1, why: "Du hast nur die Kopie in deinem Browser geändert. Die Daten auf dem Server bleiben gleich." },
      { q: "Jemand bittet dich, Code in die Konsole einzufügen, um „einen Gewinn abzuholen“. Du solltest …", a: ["Schnell einfügen", "Ablehnen – das ist vermutlich Betrug (Self-XSS)", "Erst mal die Hälfte einfügen"], c: 1, why: "Fremder Code läuft mit deiner Identität und kann dein Konto kapern." },
      { q: "Wie „merkt“ sich eine Website meist, dass du eingeloggt bist?", a: ["Cookies", "CSS", "404"], c: 0, why: "Cookies werden bei jeder Anfrage automatisch mitgeschickt – der klassische Weg, eingeloggt zu bleiben. Du findest sie im Anwendung-Panel." },
    ],
    score: (r, n) => `Punkte: ${r} / ${n} ` + (r === n ? "🏆 Volle Punktzahl! Du verstehst Webseiten jetzt besser als die meisten." : r >= 6 ? "👍 Sehr gut!" : "📚 Schau dir die passenden Abschnitte noch einmal an."),
  },
};
const T = I18N[LANG] || I18N.zh;

/* ---------- 小工具：安全读写 localStorage / safe storage helpers ---------- */
function storeGet(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
function storeSet(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }
function storeDel(key) { try { localStorage.removeItem(key); } catch (e) {} }
function escapeHTML(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

/* ---------- 控制台欢迎词 / Console welcome ---------- */
console.log("%c" + T.welcome1, "font-size:22px;font-weight:bold;color:#2f6fde");
console.log("%c" + T.welcome2, "font-size:14px;color:#1a7f37");

/* 给学习者在控制台里调用的函数（三种语言的名字都能用）
   A function for learners to call from the Console (works under all three names) */
function sayHello(name) {
  const who = name || T.stranger;
  console.log("%c" + T.greetLog(who), "font-size:16px;color:#7a3fc4");
  return T.greetReturn(who);
}
window.sayHello = sayHello;
window.hallo = sayHello;
window["打招呼"] = sayHello;

/* ---------- 语言切换：保留当前位置 / Language switch: keep your place ---------- */
document.querySelectorAll(".lang-switch a").forEach(a => {
  a.addEventListener("click", () => {
    storeSet("lang", a.getAttribute("hreflang"));
    a.href = a.getAttribute("href").split("#")[0] + location.hash;
  });
});

/* ---------- 主题切换 / Theme toggle ---------- */
(function () {
  const saved = storeGet("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  document.getElementById("theme-btn").addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme")
      || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    storeSet("theme", next);
  });
})();

/* ---------- 阅读进度条 + 目录高亮 / Progress bar + TOC highlight ---------- */
(function () {
  const bar = document.getElementById("progress-bar");
  const links = [...document.querySelectorAll("nav.toc a")];
  const sections = links.map(a => document.querySelector(a.getAttribute("href")));
  function onScroll() {
    const h = document.documentElement;
    const pct = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = pct + "%";
    let idx = 0;
    sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top < 140) idx = i; });
    links.forEach((a, i) => a.classList.toggle("active", i === idx));
  }
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* ---------- 第 2 节：网址拆解 / URL parser ---------- */
(function () {
  const input = document.getElementById("url-input");
  const out = document.getElementById("url-parts");
  const explain = document.getElementById("url-explain");
  const L = T.urlLabels;
  function render() {
    let u;
    try { u = new URL(input.value.trim()); }
    catch (e) {
      out.innerHTML = "";
      explain.textContent = T.urlInvalid;
      return;
    }
    const parts = [
      ["up-protocol", u.protocol + "//", L.protocol],
      ["up-host", u.host, u.port ? L.hostPort : L.host],
      ["up-path", u.pathname, L.path],
    ];
    if (u.search) parts.push(["up-query", u.search, L.query]);
    if (u.hash) parts.push(["up-hash", u.hash, L.hash]);
    out.innerHTML = parts.map(p => `<div class="url-part ${p[0]}">${escapeHTML(p[1])}<small>${p[2]}</small></div>`).join("");
    const dec = s => { try { return decodeURIComponent(s); } catch (e) { return s; } };
    explain.innerHTML = T.urlExplain({
      protocol: escapeHTML(u.protocol.replace(":", "")),
      host: escapeHTML(u.hostname),
      path: escapeHTML(dec(u.pathname)),
      params: [...u.searchParams.entries()].map(([k, v]) => [escapeHTML(k), escapeHTML(v)]),
      hash: u.hash ? escapeHTML(dec(u.hash)) : "",
    });
  }
  input.addEventListener("input", render);
  render();
})();

/* ---------- 第 3 节：请求旅程动画 / Request journey animation ---------- */
(function () {
  const steps = [...document.querySelectorAll("#journey-steps .step")];
  const btn = document.getElementById("journey-play");
  let timer = null;
  btn.addEventListener("click", () => {
    clearInterval(timer);
    steps.forEach(s => s.classList.remove("on"));
    let i = 0;
    btn.disabled = true;
    timer = setInterval(() => {
      if (i < steps.length) { steps[i].classList.add("on"); i++; }
      else { clearInterval(timer); btn.disabled = false; btn.textContent = T.replay; }
    }, 900);
  });
})();

/* ---------- 第 4 节：三层叠加演示 / HTML + CSS + JS layers demo ---------- */
(function () {
  const demo = document.getElementById("layer-demo");
  const tgCss = document.getElementById("tg-css");
  const tgJs = document.getElementById("tg-js");
  const likeCount = document.getElementById("like-count");
  let count = 0;
  tgCss.addEventListener("change", () => demo.classList.toggle("styled", tgCss.checked));
  document.getElementById("like-btn").addEventListener("click", () => {
    if (!tgJs.checked) return; // 没有 JS，按钮就只是个摆设 / without JS the button does nothing
    count = count + 1;
    likeCount.textContent = count;
  });
})();

/* ---------- 第 5 节：迷你代码编辑器 / Mini code editor ---------- */
(function () {
  const ta = document.getElementById("pg-code");
  const frame = document.getElementById("pg-frame");
  let t = null;
  function run() { frame.srcdoc = ta.value; }
  ta.value = T.sample;
  ta.addEventListener("input", () => { clearTimeout(t); t = setTimeout(run, 300); });
  document.getElementById("pg-reset").addEventListener("click", () => { ta.value = T.sample; run(); });
  run();
})();

/* ---------- 第 6 节：开发者工具标签介绍 + 打开检测 / DevTools tab tour + open detection ---------- */
(function () {
  const tabsEl = document.getElementById("fd-tabs");
  const body = document.getElementById("fd-body");
  T.tabs.forEach((t, i) => {
    const b = document.createElement("button");
    b.className = "fd-tab";
    b.type = "button";
    b.setAttribute("role", "tab");
    b.textContent = t[0] === t[1] ? t[0] : t[0] + " " + t[1];
    b.addEventListener("click", () => select(i));
    tabsEl.appendChild(b);
  });
  function select(i) {
    [...tabsEl.children].forEach((b, j) => b.classList.toggle("on", i === j));
    const t = T.tabs[i];
    body.innerHTML = `<p><b>${t[0]}</b>` + (t[0] === t[1] ? "" : ` <span class="muted">(${t[1]})</span>`) + `</p><p>${t[2]}</p>` +
      (t[3] ? `<p><a href="${t[3]}">${T.jumpToExercise}</a></p>` : "");
  }
  select(0);

  // 粗略检测：开发者工具停靠在窗口里时，窗口外框和内容区的尺寸差会变大
  // Rough check: a docked DevTools panel makes the gap between outer and inner window size grow
  const status = document.getElementById("devtools-status");
  let opened = false;
  setInterval(() => {
    const gap = Math.max(outerWidth - innerWidth, outerHeight - innerHeight);
    if (gap > 160 && !opened) {
      opened = true;
      status.innerHTML = T.devtoolsOpen;
      console.log("%c" + T.devtoolsOpenLog, "font-size:16px;color:#1a7f37");
    }
  }, 1000);
})();

/* ---------- 第 8 节：控制台演示 / Console demo ---------- */
(function () {
  const mirror = document.getElementById("console-mirror");
  function show(cls, text) {
    const first = mirror.querySelector(".empty");
    if (first) first.remove();
    const d = document.createElement("div");
    d.className = cls;
    d.textContent = text;
    mirror.appendChild(d);
    mirror.scrollTop = mirror.scrollHeight;
  }
  function tableText(rows) {
    const keys = Object.keys(rows[0]);
    const lines = [["(index)", ...keys].join(" | ")];
    rows.forEach((r, i) => lines.push([String(i), ...keys.map(k => r[k])].join(" | ")));
    return "📊 " + lines.join("\n   ");
  }
  const actions = {
    log() {
      const time = new Date().toLocaleTimeString();
      console.log(T.logMsg, time);
      show("", T.logMsg + " " + time);
    },
    warn() { console.warn(T.warnMsg); show("w", T.warnMsg); },
    error() { console.error(T.errorMsg); show("e", T.errorMsg); },
    table() { console.table(T.tableData); show("i", tableText(T.tableData)); },
    crash() {
      show("e", T.crashMirror);
      // 故意访问一个不存在的东西的属性，制造一个真正的报错
      // Deliberately read a property of undefined to cause a real error
      setTimeout(() => { const user = undefined; return user.name; }, 0);
    },
    clear() {
      console.clear();
      mirror.innerHTML = '<div class="empty">' + T.cleared + '</div>';
    },
  };
  document.querySelectorAll("[data-log]").forEach(b => b.addEventListener("click", () => actions[b.dataset.log]()));
})();

/* ---------- 第 9 节：网络请求演示 / Network demo ---------- */
(function () {
  const tbody = document.getElementById("net-tbody");
  const result = document.getElementById("net-result");
  let firstRow = true;

  function addRow(name, status, type, size, ms) {
    if (firstRow) { tbody.innerHTML = ""; firstRow = false; }
    const cls = status === null ? "sx" : "s" + String(status)[0];
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${escapeHTML(name)}</td><td class="${cls}">${status === null ? T.failed : status}</td><td>${type}</td><td>${size}</td><td>${ms} ms</td>` +
      `<td><div class="bar" style="width:${Math.min(100, Math.max(3, ms / 6))}%"></div></td>`;
    tbody.prepend(tr);
    tr.classList.add("flash");
  }

  async function doFetch(url, label) {
    const t0 = performance.now();
    try {
      const res = await fetch(url, { cache: "no-store" });
      const text = await res.text();
      addRow(label, res.status, "fetch", text.length + " B", Math.round(performance.now() - t0));
      return { res, text };
    } catch (e) {
      addRow(label, null, "fetch", "0 B", Math.round(performance.now() - t0));
      console.error(T.fetchFailLog, e.message, T.fetchFailHint);
      throw e;
    }
  }

  const actions = {
    async ok() {
      try {
        const { res, text } = await doFetch("data.json?t=" + Date.now(), "data.json");
        if (res.ok) {
          const data = JSON.parse(text);
          result.innerHTML = "✅ " + escapeHTML(data.message) + "<br><span class='muted'>" + escapeHTML(data.tip) + "</span>";
          console.log(T.dataLog, data);
        }
      } catch (e) { result.innerHTML = T.fetchFailed; }
    },
    img() {
      const url = ROOT + "assets/cat.svg?t=" + Date.now();
      const t0 = performance.now();
      const img = new Image();
      img.onload = () => {
        addRow("cat.svg", 200, "svg+xml", "≈1 kB", Math.round(performance.now() - t0));
        result.innerHTML = T.imgLoaded("<img src='" + url + "' alt='' style='width:48px;vertical-align:middle'>");
      };
      img.onerror = () => {
        addRow("cat.svg", null, "img", "0 B", Math.round(performance.now() - t0));
        result.innerHTML = T.imgFailed;
      };
      img.src = url;
    },
    async "404"() {
      try {
        await doFetch("this-file-does-not-exist.json?t=" + Date.now(), "this-file-does-not-exist.json");
        result.innerHTML = T.notFound;
      } catch (e) { result.innerHTML = T.sendFailed; }
    },
    async many() {
      result.textContent = T.many;
      await Promise.allSettled([1, 2, 3, 4, 5].map(i => doFetch("data.json?n=" + i + "&t=" + Date.now(), "data.json?n=" + i)));
    },
  };
  document.querySelectorAll("[data-net]").forEach(b => b.addEventListener("click", () => actions[b.dataset.net]()));
})();

/* ---------- 第 10 节：断点调试演示 / Breakpoint demo ---------- */
function calculateTotal(price, count) {
  debugger; // ← 打开开发者工具时，代码会在这里暂停 / pauses here while DevTools is open / hält hier an, wenn die DevTools offen sind
  const subtotal = price * count;       // 单价 × 数量 / price × quantity
  const discount = count >= 3 ? 5 : 0;  // 买满 3 件减 5 / 5 off when buying 3 or more
  const total = subtotal - discount;
  return total;
}
document.getElementById("calc-btn").addEventListener("click", () => {
  const total = calculateTotal(16, 3);
  document.getElementById("calc-out").textContent = T.calcOut(total);
  console.log(T.calcLog, total);
});

/* ---------- 第 11 节：本地存储演示 / Storage demo ---------- */
(function () {
  const input = document.getElementById("name-input");
  const out = document.getElementById("greet-out");
  function render() {
    const name = storeGet("visitorName");
    out.textContent = name ? T.welcomeBack(name) : T.unknown;
  }
  document.getElementById("save-name").addEventListener("click", () => {
    const v = input.value.trim();
    if (!v) { input.focus(); return; }
    storeSet("visitorName", v);
    render();
  });
  document.getElementById("clear-name").addEventListener("click", () => { storeDel("visitorName"); render(); });
  render();
  try { document.cookie = "visited_lesson=yes; max-age=31536000; path=/; SameSite=Lax"; } catch (e) {}
  try { sessionStorage.setItem("openedAt", new Date().toLocaleString()); } catch (e) {}
})();

/* ---------- 第 12 节：故意卡顿 / Deliberate jank ---------- */
document.getElementById("jank-btn").addEventListener("click", () => {
  const end = performance.now() + 1000;
  while (performance.now() < end) { /* 霸占 CPU 1 秒 / hog the CPU for 1 second */ }
  console.warn(T.jank);
});

/* ---------- 第 13 节：小测验 / Quiz ---------- */
(function () {
  const qs = T.quiz;
  const box = document.getElementById("quiz-box");
  const scoreEl = document.getElementById("quiz-score");
  let answered = 0, right = 0;
  qs.forEach((item, qi) => {
    const div = document.createElement("div");
    div.className = "quiz-q";
    div.innerHTML = `<p>${qi + 1}. ${escapeHTML(item.q)}</p>` +
      item.a.map((t, ai) => `<label><input type="radio" name="q${qi}" value="${ai}"> ${escapeHTML(t)}</label>`).join("") +
      `<div class="why">💡 ${escapeHTML(item.why)}</div>`;
    div.addEventListener("change", e => {
      if (div.classList.contains("done")) return;
      const pick = +e.target.value;
      div.classList.add("done");
      const labels = div.querySelectorAll("label");
      labels[item.c].classList.add("right");
      if (pick !== item.c) labels[pick].classList.add("wrong"); else right++;
      div.querySelectorAll("input").forEach(i => i.disabled = true);
      answered++;
      if (answered === qs.length) scoreEl.textContent = T.score(right, qs.length);
    });
    box.appendChild(div);
  });
})();
