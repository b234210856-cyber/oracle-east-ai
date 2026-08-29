# Oracle East 主页 — 代码评审

评测对象：
- `index.html` (272 行)
- `styles.css` (3079 行)
- `script.js` (1258 行)

**验证方法**：用本地 `python3 -m http.server` 起站点，连接 system Chrome via CDP，
通过 agent-browser 截了 1440 / 1280 / 1260 / 1255 / 1240 / 1100 / 390 / 360 八个断点 + 中文模式 + 打开 modal。
控制台无 JS 错误，但通过交互发现了多个 UX / a11y 缺陷。

---

## 🔴 Critical（影响核心使用）

### 1. 每次输入表单都会让整块 reading panel 模糊 ~500ms
**位置**：`script.js` line 1228
```js
birthForm.addEventListener("input", () => updateReading(new FormData(birthForm)));
```
`updateReading` 末尾默认调用 `animateText()`，对 15 个目标以 34ms 错峰启动 840ms `textReveal` 动画（带 8px blur 过渡）。最末一个元素启动于 14×34 = 476ms。

实测：把 birthplace 从 "Shanghai" 改成 "Beijing"，**每个字符都重新触发一次** 15 元素链——
`ORACLE SEED`、`Awaiting first signal`、`DOMINANT PATTERN`、`COUNCIL TONE`、`NEXT WINDOW`
这几个文案会在约 500ms 里一直模糊无法阅读。

**修法**：
- input 事件只更新 compass + reading 文本，不要触发 reveal。
- reveal/dissolve 只在 submit（commit=true）和语言切换时跑 4 个核心字段。

### 2. 语言切换瞬间右半边 panel 也模糊
**位置**：`script.js` line 1007（`applyLanguage` 末尾调用 `updateReading(new FormData(birthForm))`）

`applyLanguage` 显式动画了 4 个字段（`coreTitle` 等），但末尾又调了 `updateReading`，
触发 15 元素全量 `animateText()`。切到中文后 500ms 内右半边一片模糊（截图见 `oracle_1440_zh.png`）。

**修法**：在 `applyLanguage` 里跳过 `updateReading` 的 reveal 副作用，
或者把 15 元素统一在切语言时一次性 `animateText` 而不要从 `updateReading` 走两条路径。

### 3. `dissolveText` / `animateText` 互相覆盖，加剧了上面的问题
**位置**：`script.js` line 871-893，CSS line 112-156

- `dissolveText` 添加 `.text-dissolve` 类，**从不移除**。
- `animateText` 只移除 `.text-reveal`，不清理 `.text-dissolve`。
- CSS 中 `.text-dissolve` 在 `.text-reveal` **之后**（line 122 vs 118），同特异性下后者胜出，
  所以一旦元素同时有这两个类，`animation` 计算值固定为 `textDissolve`，`textReveal` 不会再触发。

结果：**第一次 submit 之后**，seed / pattern / tone / window / status 这 5 个元素**永远失去 reveal 动画**。

**修法**：让 `animateText` 显式 `classList.remove("text-dissolve")`，
让 `dissolveText` 显式 `classList.remove("text-reveal")`，
或者直接 `classList.remove("text-reveal", "text-dissolve")` 一起清。

### 4. Modal 没有 focus 管理
**位置**：`script.js` line 956-966；`index.html` line 228-268

Modal 声明了 `role="dialog" aria-modal="true"`，但：
- 打开时焦点没有移进 modal（实测 `document.activeElement` 仍是 `openDetails` 按钮）。
- 关闭时焦点没有回到 `openDetails`。
- `<main>` 没有 `aria-hidden="true"` 或 `inert`。
- 没有 focus trap，按 Tab 还能跑到背景的 input / entry card。

键盘 / 屏幕阅读器用户会被卡在 background。

**修法**：
```js
function openDetailModal() {
  renderDetails();
  detailModal.hidden = false;
  document.body.classList.add("modal-open");
  mainEl.setAttribute("aria-hidden", "true");
  closeDetails.focus();         // 移焦点
  // 加 focus trap：监听 keydown.tab 限制在 modal 内
}
function closeDetailModal() {
  detailModal.hidden = true;
  document.body.classList.remove("modal-open");
  mainEl.removeAttribute("aria-hidden");
  openDetails.focus();          // 还焦点
}
```

### 5. `aria-live` 被滥用
**位置**：`index.html` line 121 (`compass-diagnostics`)、line 141 (`reading-panel`)

两个区块都标了 `aria-live="polite"`，而：
- `compass-diagnostics` 有 4 个数值字段，每个 input 事件都会被改写。
- `reading-panel` 同时包含 form 控件 + 状态文本。

屏幕阅读器会在用户敲一下键盘时念出一长串新内容；阅读 panel 内表单控件被读两次。

**修法**：
- 把 form 控件包在 `aria-live="off"` 容器里。
- `aria-live` 只放在真正需要通报的字段（比如 status 文本），并且拆成多个 `aria-atomic="true"` 的小元素，不要把整个 panel 设 polite。

---

## 🟠 Major（功能 / 健壮性 / 代码质量）

### 6. 八卦 Unicode 符号字体回退
**位置**：`script.js` line 765-778

```js
context.font = currentLang === "zh"
  ? `${size}px PingFang SC, Hiragino Sans GB, sans-serif`
  : `${size}px Inter, Arial, sans-serif`;
```

八卦符号 `☰☱☲☳☴☵☶☷` 在 `Inter` / `Arial` / `PingFang` 字体里**几乎没有**。
实测在 macOS Chrome 里这些符号会回退成短横线或方框——`ORACLE SEED` 前的 "—" 就是 ☵（坎卦）。

**修法**：
```js
`${size}px "Apple Symbols", "Segoe UI Symbol", "Noto Sans Symbols2", "DejaVu Sans", "Arial Unicode MS", Inter, Arial, sans-serif`
```

### 7. "Council" 叙事前后矛盾
- `index.html` 已经没有 Council section（之前在 `?v=20260826-no-council-1` 删掉）。
- 但 `script.js` `translations.*.council.*` 还定义五 voice 数据；CSS 里有完整的
  `.council-section` / `.council-card` / `.council-grid` / `.section-heading` 样式。
- `translations.*.reading.tone` 仍是 "Council tone" / "议会语气"。
- modal title "Council interpretation" 仍存在；detail lead 仍引用 "Council trace"。

**修法**：要么把 Council section 加回来（最干净），要么把 `translations.*.council.*`、
`translations.*.reading.tone` / `awaiting` / `generating` / `complete`、`detail.*` 中所有
"Council" 措辞统一替换掉。

### 8. 大量死 CSS 与重复断点
**位置**：`styles.css` line 380-1929（绝大部分）/ 2475-3078

styles.css 里有两套布局：
- **原版 landing 布局**（380-1929 行）：`.hero-copy`、`.hero-actions`、`.hero-line`、
  `.section-heading`、`.council-grid`、`.council-card`、`.ritual-section`、
  `.ritual-panel`、`.closing-section`、`.wide-card`、`.entry-grid`（3 列）等等——这些 markup
  已经被改写为 cockpit 布局，**全部不再匹配**。
- **cockpit 覆盖**（1943-3079）：后面加的补丁。

**重复的 @media 块**：
- `(max-width: 1240)` 定义了**两次**（line 2483 + 2991）
- `(max-width: 860)` 两次（2538 + 3013）
- `(max-width: 560)` 两次（2610 + 3042）
- `(max-width: 360)` 两次（2753 + 3070）

第二次基本是把第一次的某些规则**再 override 一遍**（"Exposed compass mode" 注释那一段）。
估计 30-40% 的样式是无效或冗余的。

**修法**：从最新一次 `git log` 找到 `?v=20260826-no-council-1` 这次提交前的版本，
对比 git 删掉原版 landing 那部分 CSS；然后合并断点。

### 9. Canvas 渲染循环每帧强制 layout + 重置 bitmap
**位置**：`script.js` line 520-527（`resizeCanvas`）+ line 847-857（`animate`）

```js
function resizeCanvas(canvas, context) {
  const rect = canvas.getBoundingClientRect();   // 每帧一次 = force layout
  canvas.width = Math.max(1, Math.floor(rect.width * ratio));   // 重置 bitmap
  ...
}
```

`canvas.width = ...` 即使赋值不变，按 HTML 规范也会 reset canvas（清空 + 重新分配），
然后立刻 `clearRect` + 重画。同时 `animate` 循环里每帧：
```js
root.style.setProperty("--mx", smoothX.toFixed(2));
root.style.setProperty("--my", smoothY.toFixed(2));
```
触发了 8+ 个 `calc(var(--mx) * Npx)` 消费者的样式重算（page-aura、transform 视差等）。

`@media (prefers-reduced-motion: reduce)` 只把 CSS 动画时长压到 0.001ms，
JS 的 canvas 渲染循环还是照常跑（drawField 检查 reduceMotion 跳过 particle 移动，
但每帧仍然 redraw 一切）——低性能 / 移动设备会显著耗电。

**修法**：
- `resizeCanvas` 只在 window resize 事件里调一次，每帧只读已缓存的尺寸。
- 加 `if (document.visibilityState !== "visible") { raf = requestAnimationFrame(animate); return; }`。

### 10. Inter 字体未加载
**位置**：`styles.css` line 18-20；`script.js` line 773

```css
--font-body: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

整页声明了 Inter 但**没有通过 `@font-face` / `<link rel="preload">` 加载**。
所有文本都用系统字体回退（Arial / SF Pro / Segoe UI）—— 实际效果跟"Inter 品牌"承诺的不一致。
对原型可以接受，但既然要"high-end international"，要么真用 Inter，要么把声明换掉。

### 11. Initial placeholder 文本与 JS 算出来的格式不一致
**位置**：`index.html` line 122-137 vs `script.js` line 1113-1139

HTML 静态占位：
```html
<strong id="compassBearing">312° · Qian</strong>          <!-- EN 卦名 -->
<strong id="compassHour">Yin hour · 03:48</strong>
<strong id="compassElements">Wood 31 · Metal 27</strong>
<strong id="compassPalace">Origin palace</strong>
```

JS 实际写入：
```js
return {
  bearing: `${signal.bearing}° · ${direction} · ${signal.mountain}`,   // "19° · N · 癸"
  hour:    `${signal.hourBranch} hour · ${time || "00:00"}`,           // "寅 hour · 03:48"
  elements: dominant,                                                   // "Earth 29 · Metal 24"
  palace:  `${signal.palace.name} palace · ${signal.yearPillar}`,      // "Dui palace · 甲戌"
};
```

JS 加载前那一瞬间显示的是 EN 卦名 + "Origin palace" 文案，300ms 后立刻被覆盖成中文 mountain + 方位。
要么静态写"……"、要么直接空着。

---

## 🟡 Minor

### 12. 微小文字字号过小
**位置**：`styles.css` line 2249-2256、line 2700-2706、line 2789-2792

- `.compass-tag span` 桌面 0.6rem（≈ 9.6px），560px 断点降到 0.56rem（≈ 9px）。
- `.compass-tag strong` 桌面 0.72rem，360px 断点降到 0.62rem。
- iOS HIG 建议最低 11pt（约 14.7px）。这些标签在户外 / 老花眼看不清。

### 13. Nav anchor `#signal` / `#ritual` 实际点了没效果
**位置**：`index.html` line 19-31；`styles.css` line 32

- `#ritual` 绑在 `.hero-oracle`（整个 cockpit 区块），`#signal` 绑在 signal-strip 小条上。
- 两个目标都在第一屏，scroll-behavior smooth 滚过去什么都看不见。
- 真要保留 anchor，至少把 `#ritual` 指向 form 区域，`#signal` 指向 diagnostics 区块。

### 14. 没有 favicon
Network 面板首次访问会多一行 404。原型无伤大雅，加一个 SVG / 文字 mark 也行。

### 15. 没存语言偏好
每次刷新都回英文。可以塞进 localStorage。

### 16. `formatCompassSignal` 把天干当 mountain 拼
`${signal.mountain}山` 对地支 OK（"子山"），但 `mountains24` 数组里混了"甲、乙、丙、丁、庚、辛、壬、癸"
十天干，渲染成 "甲山" / "乙山" 在风水语境里不严谨（天干不入二十四山）。原型 OK，正式做要细分。

### 17. 一些定义后未读
- `script.js` line 514：`compassState.activatedAt` 设了但全文未读。
- `script.js` line 515：`compassState.gate` 设了但 `gate` 后续仅在 `updateReading` 里**用新计算的** `signal.palace.symbol` 覆盖——`compassState.gate` 没被任何地方读。
- `script.js` line 461 `trigrams` 数组——未读。

### 18. 移动端 hero-text + cockpit-signal 在 560px 隐藏了
**位置**：`styles.css` line 2640-2643
```css
.cockpit-copy .hero-text,
.cockpit-signal {
  display: none;
}
```
phone 上 hero 区域只留了标题 + 一句 hero-line，叙事突然变薄。考虑用更短的副标题而非直接删除。

### 19. 每次切换语言 / entry 都重 render 整个 reading panel
即便不必要——比如切换 identity ↔ action 只需改 entry 高亮，reading 文本可以保留。
但当前实现每一次 setEntry → updateReading → animateText 全跑一遍。

### 20. 移动端 4 个 compass-tag 在 ≤560px 堆成 2×2 grid
**位置**：`styles.css` line 2674-2698

完全 OK，但每个 tag 内文字在 0.66rem / 0.56rem 极小字号下又 + 4 个 tag 网格化，
屏幕本来就窄，移动端体验文字几乎要贴近读。如果非要堆，把字号保留 ≥ 0.72rem。

---

## ✅ 做得好的地方

- cockpit 三栏布局（hero copy / 八卦 / reading）在 1240px 以上视觉冲击不错，Ritual / Signal 命名统一。
- 罗盘的视觉完成度高：24 山、12 地支、8 卦、4 方位、五行环 + 三色 palette 切换做得精细。
- canvas 性能本身在 1440 桌面是流畅的（≈ 60fps 在 M 系列 Mac 上）。
- 语言切换 + i18n 数据结构（`data-i18n` / `data-i18n-aria` / `data-i18n-placeholder`）是干净的。
- hash 派生 compass signal 的算法（yearCycle 算天干地支、inquiry 偏移、placeHash）一气呵成。
- form 表单可访问性（label 包裹 input）正确。
- 年柱（甲戌 配 1994）+ 时辰（寅 配 03:48）算出来对得上农历。
- 版本号 cache-busting 习惯（`?v=20260826-no-council-1`）是好习惯。

---

## 优先级建议

| 优先级 | 工作量 | 改进 |
|---|---|---|
| P0 | 30min | 修 #1（input 防抖 + 不再触发 reveal）+ #3（class 互相清理）|
| P0 | 20min | 修 #6（补符号字体）|
| P1 | 1h | 修 #4（modal focus 管理）+ #5（aria-live 收敛）|
| P1 | 1h | 清理 styles.css 死代码与重复断点（#8）|
| P2 | 30min | 修 #2 / #11 / #14 / #15 |
| P3 | 后续 | 视差滚动、touch device、reduced-motion 行为对齐 |
