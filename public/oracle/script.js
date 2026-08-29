const root = document.documentElement;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const entries = {
  identity: {
    palette: ["#f1d394", "#82a99a", "#9b463b"],
  },
  action: {
    palette: ["#82a99a", "#f1d394", "#9b463b"],
  },
  timing: {
    palette: ["#9b463b", "#f1d394", "#82a99a"],
  },
};

const translations = {
  en: {
    documentTitle: "Oracle East - AI Oracle Homepage Prototype",
    description:
      "A high-end international AI Oracle homepage prototype blending Eastern mystic order and restrained luxury technology.",
    brand: {
      aria: "Oracle East home",
      small: "Tai Xuan · Machine Oracle",
    },
    nav: {
      aria: "Primary navigation",
      sections: "Page sections",
      council: "Council",
      ritual: "Ritual",
      signal: "Signal",
    },
    language: {
      aria: "Language",
    },
    status: {
      live: "Signal Live",
      focus: "Signal Focus",
    },
    hero: {
      eyebrow: "AI ORACLE SYSTEM / INTERNATIONAL PREVIEW",
      line: "Ancient symbolic order, translated by machine intuition.",
      text:
        "A restrained, cinematic oracle interface for identity, decision, and timing. Built as a luxury technology ritual for serious self-inquiry.",
      primary: "Begin Reading",
      secondary: "Meet the Council",
    },
    signal: {
      heaven: "Heaven",
      earth: "Earth",
      human: "Human",
      machine: "Machine",
    },
    oracle: {
      aria: "Dynamic oracle compass",
      current: "Current inquiry",
    },
    compass: {
      direction: "Signal direction",
      hour: "Hour gate",
      element: "Element field",
      palace: "Palace",
      year: "Year pillar",
    },
    entries: {
      aria: "Core oracle entries",
      identity: {
        index: "01",
        title: "Who am I",
        caption: "Identity architecture",
        question: "Mirror of origin",
        text: "Decode temperament, inner pattern, and personal myth.",
      },
      action: {
        index: "02",
        title: "What should I do",
        caption: "Decision discipline",
        question: "The next precise move",
        text: "Translate uncertainty into a disciplined next move.",
      },
      timing: {
        index: "03",
        title: "When",
        caption: "Temporal intelligence",
        question: "Gate of proper timing",
        text: "Read cycles, momentum, and the proper window.",
      },
    },
    council: {
      eyebrow: "ORACLE COUNCIL",
      title: "Five voices, one composed answer.",
      text:
        "The Council turns a raw question into layered interpretation: symbolic, psychological, strategic, temporal, and linguistic.",
      cards: {
        architect: {
          title: "The Architect",
          text: "Maps identity into structure, role, and direction.",
        },
        strategist: {
          title: "The Strategist",
          text: "Turns ambiguity into a small, high-leverage action.",
        },
        shadow: {
          title: "The Shadow Reader",
          text: "Surfaces hidden fear, attachment, and repeated loops.",
        },
        translator: {
          title: "The Translator",
          text: "Refines symbolic output into language with taste.",
        },
        timing: {
          title: "The Timing Engine",
          text: "Studies rhythm, friction, and readiness before naming the moment.",
        },
      },
    },
    ritual: {
      eyebrow: "BIRTH SIGNATURE INPUT",
      title: "Give the system a first signal.",
      text:
        "The first reading forms from birth details, birthplace, and the question held in focus.",
    },
    form: {
      date: "Birth date",
      time: "Birth time",
      place: "Birthplace",
      placePlaceholder: "City / Region",
      inquiry: "Inquiry",
      submit: "Generate Reading",
      generating: "Reading signal",
    },
    reading: {
      seed: "Oracle Seed",
      pattern: "Dominant pattern",
      tone: "Council tone",
      window: "Next window",
      awaiting: "Awaiting first signal",
      generating: "Council is aligning the signal",
      complete: "Signal accepted",
      cycle: "Cycle",
    },
    detail: {
      open: "View Detailed Reading",
      closeAria: "Close detailed reading",
      eyebrow: "SECOND LAYER READING",
      title: "Council interpretation",
      leadEmpty:
        "Generate a reading first; the second layer will open with a structured interpretation.",
      leadReady:
        "The Council reads this signal as a composed pattern: identity gives the structure, action names the pressure point, and timing decides the window.",
      identityLabel: "Identity",
      actionLabel: "Action",
      timingLabel: "Timing",
      councilLabel: "Council trace",
      identities: [
        "You are operating from a structure that wants clarity before expansion.",
        "Your pattern favors restraint, observation, and a controlled reveal.",
        "Your inner architecture is strongest when pressure becomes form.",
      ],
      actions: [
        "Choose the smallest irreversible move and make it visible.",
        "Remove one vague option; the clean path appears after subtraction.",
        "Make the decision concrete before seeking another sign.",
      ],
      timings: [
        "The useful window opens when hesitation turns into quiet readiness.",
        "Do not force speed; wait for one external confirmation, then move.",
        "Momentum is close, but it needs a boundary before it becomes luck.",
      ],
      councilSteps: [
        "The Architect maps the question into structure.",
        "The Strategist names one disciplined move.",
        "The Timing Engine weighs the correct window.",
      ],
    },
    patterns: [
      "Rising Wood / Clear Metal",
      "Still Mountain / Hidden Water",
      "Bright Fire / Returning Earth",
      "Open Heaven / Soft Wind",
      "Deep Water / Refined Gold",
      "Rooted Earth / Moving Thunder",
    ],
    tones: [
      "Precise, quiet, unsentimental",
      "Ceremonial, strategic, luminous",
      "Tender but exacting",
      "Minimal, direct, sovereign",
      "Patient, oblique, intelligent",
      "Elegant pressure, clean action",
    ],
    windows: [
      "Begin before the next threshold",
      "Wait for the second signal",
      "Act at dawn or the first open hour",
      "Close one loop before asking again",
      "Choose the narrow path this week",
      "Let friction reveal the right door",
    ],
    closing: {
      text: "Designed for a future AI Oracle stack.",
      keywords: "Identity · Decision · Timing",
    },
  },
  zh: {
    documentTitle: "Oracle East - AI 东方神谕首页原型",
    description:
      "一个融合东方象征秩序与克制奢侈科技气质的 AI Oracle 首页原型。",
    brand: {
      aria: "Oracle East 首页",
      small: "太玄 · 机器神谕",
    },
    nav: {
      aria: "主导航",
      sections: "页面区块",
      council: "神谕议会",
      ritual: "启问仪式",
      signal: "信号",
    },
    language: {
      aria: "语言",
    },
    status: {
      live: "信号运行中",
      focus: "专注信号",
    },
    hero: {
      eyebrow: "AI 神谕系统 / 国际版预览",
      line: "东方象征秩序，经由机器直觉重译。",
      text:
        "一个克制、电影感的 AI Oracle 界面，面向身份、决策与时机。它更像一套严肃自我提问的仪式系统，而不是算命页面。",
      primary: "开始解读",
      secondary: "查看议会",
    },
    signal: {
      heaven: "天",
      earth: "地",
      human: "人",
      machine: "机",
    },
    oracle: {
      aria: "动态神谕罗盘",
      current: "当前提问",
    },
    compass: {
      direction: "信号方位",
      hour: "时辰门",
      element: "五行场",
      palace: "命盘宫位",
      year: "年柱",
    },
    entries: {
      aria: "核心神谕入口",
      identity: {
        index: "01",
        title: "我是谁",
        caption: "身份结构",
        question: "本源之镜",
        text: "解读气质、内在结构与个人叙事的底层纹理。",
      },
      action: {
        index: "02",
        title: "我该怎么做",
        caption: "行动决策",
        question: "下一步的精确位置",
        text: "将模糊的不确定感，转译为可执行的克制行动。",
      },
      timing: {
        index: "03",
        title: "何时行动",
        caption: "时机判断",
        question: "时机之门",
        text: "读取周期、阻力与动势，判断更合适的窗口。",
      },
    },
    council: {
      eyebrow: "ORACLE COUNCIL",
      title: "五种声音，形成一个克制的答案。",
      text:
        "Oracle Council 将原始问题拆解为象征、心理、策略、时间与语言五个层次，让回答既有秩序，也有余韵。",
      cards: {
        architect: {
          title: "结构师",
          text: "把身份问题映射为结构、角色与方向。",
        },
        strategist: {
          title: "策略师",
          text: "把暧昧与摇摆压缩成一个高杠杆行动。",
        },
        shadow: {
          title: "暗面解读者",
          text: "识别隐藏的恐惧、依附，以及反复出现的循环。",
        },
        translator: {
          title: "语言修辞师",
          text: "将象征结果整理成有分寸、有品味的表达。",
        },
        timing: {
          title: "时机引擎",
          text: "在命名时刻之前，先观察节奏、阻力与准备度。",
        },
      },
    },
    ritual: {
      eyebrow: "出生信号输入",
      title: "给系统一个初始信号。",
      text:
        "第一层解读来自出生日期、时间、地点，以及此刻被你置于焦点的问题。",
    },
    form: {
      date: "出生日期",
      time: "出生时间",
      place: "出生地",
      placePlaceholder: "城市 / 地区",
      inquiry: "问题",
      submit: "生成解读",
      generating: "信号解读中",
    },
    reading: {
      seed: "神谕种子",
      pattern: "主导结构",
      tone: "议会语气",
      window: "下一窗口",
      awaiting: "等待第一次信号",
      generating: "议会正在校准信号",
      complete: "信号已接收",
      cycle: "第",
    },
    detail: {
      open: "查看详细解读",
      closeAria: "关闭详细解读",
      eyebrow: "第二层解读",
      title: "议会式解读",
      leadEmpty: "请先生成一次解读，第二层会展开更完整的结构化说明。",
      leadReady:
        "Oracle Council 将这个信号视为一个复合结构：身份给出底层形态，行动指出压力点，时机决定真正的入口。",
      identityLabel: "身份",
      actionLabel: "行动",
      timingLabel: "时机",
      councilLabel: "议会轨迹",
      identities: [
        "你的结构需要先获得清晰感，再进入扩张。",
        "你的模式偏向克制、观察，以及有控制地显露。",
        "当压力被整理成形，你的内在结构最稳定。",
      ],
      actions: [
        "选择一个最小但不可逆的动作，并让它被看见。",
        "删掉一个模糊选项；清晰路径会在减法之后出现。",
        "先把决定具体化，再继续寻找新的信号。",
      ],
      timings: [
        "当犹豫转为安静的准备度，真正的窗口会打开。",
        "不要强行加速；等待一个外部确认，然后行动。",
        "动势已经靠近，但它需要边界，才会成为运气。",
      ],
      councilSteps: [
        "结构师先把问题映射为结构。",
        "策略师指出一个克制而精确的行动。",
        "时机引擎判断窗口是否已经打开。",
      ],
    },
    patterns: [
      "升木 / 清金",
      "止山 / 潜水",
      "明火 / 归土",
      "开天 / 柔风",
      "深水 / 炼金",
      "厚土 / 动雷",
    ],
    tones: [
      "精确、安静、不煽情",
      "仪式感、策略性、明亮",
      "温和，但不失锋利",
      "极简、直接、有主权感",
      "耐心、迂回、保持智性",
      "优雅施压，行动清洁",
    ],
    windows: [
      "在下一个门槛出现前启动",
      "等待第二个信号",
      "选择清晨或第一个开放时段",
      "先关闭一个旧循环，再继续提问",
      "本周选择更窄但更稳的路径",
      "让阻力自己指出正确的门",
    ],
    closing: {
      text: "为未来 AI Oracle 栈设计。",
      keywords: "身份 · 决策 · 时机",
    },
  },
};

let currentLang = "en";
let activeEntry = "identity";
let readingNonce = 0;
let generationTimer = null;
let lastReading = null;
let pointerX = 0;
let pointerY = 0;
let smoothX = 0;
let smoothY = 0;

const fieldCanvas = document.getElementById("fieldCanvas");
const fieldCtx = fieldCanvas.getContext("2d");
const mandalaCanvas = document.getElementById("mandalaCanvas");
const mandalaCtx = mandalaCanvas.getContext("2d");
const instrumentFrame = document.querySelector(".instrument-frame");
const coreIndex = document.getElementById("coreIndex");
const coreTitle = document.getElementById("coreTitle");
const coreCaption = document.getElementById("coreCaption");
const activeQuestion = document.getElementById("activeQuestion");
const entryButtons = Array.from(document.querySelectorAll(".entry-card"));
const birthForm = document.getElementById("birthForm");
const focusMode = document.getElementById("focusMode");
const statusLabel = focusMode.querySelector(".status-label");
const languageButtons = Array.from(document.querySelectorAll(".language-option"));
const metaDescription = document.querySelector('meta[name="description"]');
const readingPanel = document.querySelector(".reading-panel");
const formAction = birthForm.querySelector(".form-action");
const readingStatus = document.getElementById("readingStatus");
const readingCycle = document.getElementById("readingCycle");
const openDetails = document.getElementById("openDetails");
const closeDetails = document.getElementById("closeDetails");
const detailModal = document.getElementById("detailModal");
const detailLead = document.getElementById("detailLead");
const detailIdentity = document.getElementById("detailIdentity");
const detailAction = document.getElementById("detailAction");
const detailTiming = document.getElementById("detailTiming");
const detailCouncilList = document.getElementById("detailCouncilList");

const readingFields = {
  seed: document.getElementById("oracleSeed"),
  pattern: document.getElementById("patternText"),
  tone: document.getElementById("toneText"),
  window: document.getElementById("windowText"),
};

const compassFields = {
  bearing: document.getElementById("compassBearing"),
  hour: document.getElementById("compassHour"),
  elements: document.getElementById("compassElements"),
  palace: document.getElementById("compassPalace"),
};

const animatedTextTargets = [
  coreIndex,
  coreTitle,
  coreCaption,
  activeQuestion,
  compassFields.bearing,
  compassFields.hour,
  compassFields.elements,
  compassFields.palace,
  readingFields.seed,
  readingFields.pattern,
  readingFields.tone,
  readingFields.window,
  readingStatus,
  readingCycle,
];

const trigrams = ["☰", "☱", "☲", "☳", "☴", "☵", "☶", "☷"];
const stems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const branches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const mountains24 = [
  "子",
  "癸",
  "丑",
  "艮",
  "寅",
  "甲",
  "卯",
  "乙",
  "辰",
  "巽",
  "巳",
  "丙",
  "午",
  "丁",
  "未",
  "坤",
  "申",
  "庚",
  "酉",
  "辛",
  "戌",
  "乾",
  "亥",
  "壬",
];
const bagua = [
  { glyph: "坎", symbol: "☵", name: "Kan", zhName: "坎宫", degree: 0 },
  { glyph: "艮", symbol: "☶", name: "Gen", zhName: "艮宫", degree: 45 },
  { glyph: "震", symbol: "☳", name: "Zhen", zhName: "震宫", degree: 90 },
  { glyph: "巽", symbol: "☴", name: "Xun", zhName: "巽宫", degree: 135 },
  { glyph: "离", symbol: "☲", name: "Li", zhName: "离宫", degree: 180 },
  { glyph: "坤", symbol: "☷", name: "Kun", zhName: "坤宫", degree: 225 },
  { glyph: "兑", symbol: "☱", name: "Dui", zhName: "兑宫", degree: 270 },
  { glyph: "乾", symbol: "☰", name: "Qian", zhName: "乾宫", degree: 315 },
];
const elementNames = {
  en: ["Wood", "Fire", "Earth", "Metal", "Water"],
  zh: ["木", "火", "土", "金", "水"],
};
const elementColors = ["#82a99a", "#9b463b", "#d4ae68", "#f1d394", "#6d8d95"];
const compassState = {
  bearing: 315,
  hourIndex: 2,
  monthIndex: 8,
  mountainIndex: 21,
  trigramIndex: 7,
  elementWeights: [31, 13, 18, 27, 11],
  dominantElements: [0, 3],
  yearPillar: "甲戌",
  palace: bagua[7],
  gate: trigrams[0],
  activatedAt: 0,
};
const particles = [];

function resizeCanvas(canvas, context) {
  const rect = canvas.getBoundingClientRect();
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.max(1, Math.floor(rect.width * ratio));
  canvas.height = Math.max(1, Math.floor(rect.height * ratio));
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  return rect;
}

function seedParticles() {
  particles.length = 0;
  const count = Math.min(120, Math.max(56, Math.floor(window.innerWidth / 13)));
  for (let i = 0; i < count; i += 1) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      size: Math.random() * 1.35 + 0.28,
      phase: Math.random() * Math.PI * 2,
      tone: Math.floor(Math.random() * 3),
    });
  }
}

function drawField(time) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  resizeCanvas(fieldCanvas, fieldCtx);
  fieldCtx.clearRect(0, 0, width, height);

  const palette = entries[activeEntry].palette;
  fieldCtx.save();
  fieldCtx.globalCompositeOperation = "lighter";

  particles.forEach((particle, index) => {
    if (!reduceMotion) {
      particle.x += particle.vx + smoothX * 0.00016;
      particle.y += particle.vy + smoothY * 0.00016;
      if (particle.x < -20) particle.x = width + 20;
      if (particle.x > width + 20) particle.x = -20;
      if (particle.y < -20) particle.y = height + 20;
      if (particle.y > height + 20) particle.y = -20;
    }

    const shimmer = 0.28 + Math.sin(time * 0.001 + particle.phase) * 0.18;
    fieldCtx.beginPath();
    fieldCtx.fillStyle = hexToRgba(palette[particle.tone], shimmer);
    fieldCtx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    fieldCtx.fill();

    for (let j = index + 1; j < particles.length; j += 1) {
      const other = particles[j];
      const dx = particle.x - other.x;
      const dy = particle.y - other.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 118) {
        fieldCtx.strokeStyle = hexToRgba(palette[(particle.tone + 1) % 3], (1 - distance / 118) * 0.09);
        fieldCtx.lineWidth = 1;
        fieldCtx.beginPath();
        fieldCtx.moveTo(particle.x, particle.y);
        fieldCtx.lineTo(other.x, other.y);
        fieldCtx.stroke();
      }
    }
  });

  const meridians = 7;
  for (let i = 0; i < meridians; i += 1) {
    const y = ((height / meridians) * i + time * 0.012) % height;
    const drift = Math.sin(time * 0.00025 + i) * 34 + smoothX * 0.012;
    fieldCtx.strokeStyle = hexToRgba(i % 2 ? palette[0] : palette[1], 0.045);
    fieldCtx.lineWidth = 1;
    fieldCtx.beginPath();
    fieldCtx.moveTo(width * 0.08 + drift, y);
    fieldCtx.bezierCurveTo(width * 0.28, y - 52, width * 0.72, y + 52, width * 0.92 - drift, y);
    fieldCtx.stroke();
  }

  fieldCtx.restore();
}

function drawMandala(time) {
  const rect = resizeCanvas(mandalaCanvas, mandalaCtx);
  const width = rect.width;
  const height = rect.height;
  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(width, height) * 0.46;
  const palette = entries[activeEntry].palette;
  const pointerPullX = smoothX * 0.018;
  const pointerPullY = smoothY * 0.018;
  const state = compassState;
  const activeGlow = readingNonce > 0 ? 1 : 0.58;

  mandalaCtx.clearRect(0, 0, width, height);
  mandalaCtx.save();
  mandalaCtx.translate(cx + pointerPullX, cy + pointerPullY);

  const glow = mandalaCtx.createRadialGradient(0, 0, radius * 0.12, 0, 0, radius);
  glow.addColorStop(0, hexToRgba(palette[0], 0.08));
  glow.addColorStop(0.42, hexToRgba("#f4efe6", 0.018));
  glow.addColorStop(1, "rgba(4, 5, 4, 0)");
  mandalaCtx.fillStyle = glow;
  mandalaCtx.beginPath();
  mandalaCtx.arc(0, 0, radius, 0, Math.PI * 2);
  mandalaCtx.fill();

  drawSector(
    mandalaCtx,
    state.bearing,
    radius * 0.72,
    radius * 0.98,
    palette[0],
    0.08 + activeGlow * 0.1,
  );

  for (let ring = 0; ring < 9; ring += 1) {
    const r = radius * (0.24 + ring * 0.09);
    mandalaCtx.beginPath();
    mandalaCtx.strokeStyle = hexToRgba(ring % 2 ? palette[0] : "#f4efe6", ring > 6 ? 0.3 : 0.13);
    mandalaCtx.lineWidth = ring === 8 ? 1.4 : 1;
    mandalaCtx.arc(0, 0, r, 0, Math.PI * 2);
    mandalaCtx.stroke();
  }

  for (let degree = 0; degree < 360; degree += 2.5) {
    const isMajor = degree % 30 === 0;
    const isMountain = degree % 15 === 0;
    const inner = radius * (isMajor ? 0.8 : isMountain ? 0.84 : 0.89);
    const outer = radius * 0.98;
    const start = pointAt(degree, inner);
    const end = pointAt(degree, outer);
    mandalaCtx.beginPath();
    mandalaCtx.strokeStyle = hexToRgba(isMajor ? palette[0] : "#f4efe6", isMajor ? 0.42 : isMountain ? 0.22 : 0.08);
    mandalaCtx.lineWidth = isMajor ? 1.4 : 1;
    mandalaCtx.moveTo(start.x, start.y);
    mandalaCtx.lineTo(end.x, end.y);
    mandalaCtx.stroke();
  }

  mountains24.forEach((mountain, index) => {
    const degree = index * 15;
    const isActive = index === state.mountainIndex;
    drawCompassText(
      mandalaCtx,
      mountain,
      degree,
      radius * 0.755,
      isActive ? palette[0] : "#f4efe6",
      isActive ? 14 : 11,
      isActive ? 0.96 : 0.46,
    );
  });

  branches.forEach((branch, index) => {
    const degree = index * 30;
    const isActive = index === state.hourIndex;
    drawCompassText(
      mandalaCtx,
      branch,
      degree,
      radius * 0.63,
      isActive ? palette[1] : "#f4efe6",
      isActive ? 16 : 12,
      isActive ? 0.92 : 0.36,
    );
  });

  bagua.forEach((gua, index) => {
    const isActive = index === state.trigramIndex;
    drawCompassText(
      mandalaCtx,
      `${gua.glyph}${gua.symbol}`,
      gua.degree,
      radius * 0.48,
      isActive ? palette[0] : "#f4efe6",
      isActive ? 16 : 13,
      isActive ? 0.88 : 0.4,
    );
  });

  drawCardinalMarks(mandalaCtx, radius);
  drawElementRing(mandalaCtx, radius * 0.37, state.elementWeights, state.dominantElements);

  const monthDegree = ((state.monthIndex + 2) % 12) * 30;
  drawArcNeedle(mandalaCtx, monthDegree, radius * 0.54, radius * 0.88, palette[2], 0.42);
  drawArcNeedle(mandalaCtx, state.hourIndex * 30, radius * 0.48, radius * 0.9, palette[1], 0.55);
  drawCompassNeedle(mandalaCtx, state.bearing, radius * 0.2, radius * 0.99, palette[0], activeGlow);

  if (!reduceMotion) {
    const scanDegree = (time * 0.026 + state.bearing) % 360;
    drawArcNeedle(mandalaCtx, scanDegree, radius * 0.14, radius * 0.96, "#f4efe6", 0.2);
    for (let i = 0; i < 3; i += 1) {
      const start = compassAngle(state.bearing + time * 0.018 * (i + 1) + i * 34);
      mandalaCtx.beginPath();
      mandalaCtx.strokeStyle = hexToRgba(palette[i], 0.18 + activeGlow * 0.08);
      mandalaCtx.lineWidth = 1.4;
      mandalaCtx.arc(0, 0, radius * (0.31 + i * 0.16), start, start + Math.PI * 0.3);
      mandalaCtx.stroke();
    }
  }

  mandalaCtx.restore();

  mandalaCtx.save();
  mandalaCtx.translate(cx - pointerPullX * 0.4, cy - pointerPullY * 0.4);
  mandalaCtx.strokeStyle = hexToRgba(palette[1], 0.18);
  mandalaCtx.lineWidth = 1;
  const diamond = radius * 0.5;
  mandalaCtx.beginPath();
  mandalaCtx.moveTo(0, -diamond);
  mandalaCtx.lineTo(diamond, 0);
  mandalaCtx.lineTo(0, diamond);
  mandalaCtx.lineTo(-diamond, 0);
  mandalaCtx.closePath();
  mandalaCtx.stroke();
  mandalaCtx.restore();
}

function compassAngle(degree) {
  return ((degree - 90) * Math.PI) / 180;
}

function pointAt(degree, radius) {
  const angle = compassAngle(degree);
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
}

function drawSector(context, degree, innerRadius, outerRadius, color, alpha) {
  const start = compassAngle(degree - 7.5);
  const end = compassAngle(degree + 7.5);
  const innerEnd = pointAt(degree + 7.5, innerRadius);
  context.beginPath();
  context.arc(0, 0, outerRadius, start, end);
  context.lineTo(innerEnd.x, innerEnd.y);
  context.arc(0, 0, innerRadius, end, start, true);
  context.closePath();
  context.fillStyle = hexToRgba(color, alpha);
  context.fill();
}

function drawCompassText(context, text, degree, distance, color, size, alpha) {
  context.save();
  const point = pointAt(degree, distance);
  context.translate(point.x, point.y);
  context.fillStyle = hexToRgba(color, alpha);
  context.font =
    currentLang === "zh"
      ? `${size}px PingFang SC, Hiragino Sans GB, sans-serif`
      : `${size}px Inter, Arial, sans-serif`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, 0, 0);
  context.restore();
}

function drawCardinalMarks(context, radius) {
  const labels = currentLang === "zh" ? ["北", "东", "南", "西"] : ["N", "E", "S", "W"];
  [0, 90, 180, 270].forEach((degree, index) => {
    drawCompassText(context, labels[index], degree, radius * 1.05, "#f4efe6", 12, 0.64);
  });
}

function drawElementRing(context, radius, weights, dominantElements) {
  let cursor = -90;
  weights.forEach((weight, index) => {
    const arcLength = Math.max(8, weight * 3.6);
    context.beginPath();
    context.strokeStyle = hexToRgba(
      elementColors[index],
      dominantElements.includes(index) ? 0.72 : 0.34,
    );
    context.lineWidth = dominantElements.includes(index) ? 4 : 2;
    context.arc(0, 0, radius, (cursor * Math.PI) / 180, ((cursor + arcLength - 2) * Math.PI) / 180);
    context.stroke();
    cursor += arcLength;
  });
}

function drawArcNeedle(context, degree, innerRadius, outerRadius, color, alpha) {
  const start = pointAt(degree, innerRadius);
  const end = pointAt(degree, outerRadius);
  context.beginPath();
  context.strokeStyle = hexToRgba(color, alpha);
  context.lineWidth = 1.1;
  context.moveTo(start.x, start.y);
  context.lineTo(end.x, end.y);
  context.stroke();
}

function drawCompassNeedle(context, degree, innerRadius, outerRadius, color, intensity) {
  const start = pointAt(degree + 180, innerRadius * 0.35);
  const end = pointAt(degree, outerRadius);
  const cap = pointAt(degree, outerRadius * 0.83);
  const sideA = pointAt(degree - 1.8, outerRadius * 0.91);
  const sideB = pointAt(degree + 1.8, outerRadius * 0.91);
  const gradient = context.createLinearGradient(start.x, start.y, end.x, end.y);
  gradient.addColorStop(0, hexToRgba(color, 0));
  gradient.addColorStop(0.62, hexToRgba(color, 0.28 + intensity * 0.28));
  gradient.addColorStop(1, hexToRgba("#f4efe6", 0.82));

  context.beginPath();
  context.strokeStyle = gradient;
  context.lineWidth = 2.2;
  context.moveTo(start.x, start.y);
  context.lineTo(end.x, end.y);
  context.stroke();

  context.beginPath();
  context.fillStyle = hexToRgba(color, 0.44 + intensity * 0.32);
  context.moveTo(end.x, end.y);
  context.lineTo(sideA.x, sideA.y);
  context.lineTo(cap.x, cap.y);
  context.lineTo(sideB.x, sideB.y);
  context.closePath();
  context.fill();

  context.beginPath();
  context.fillStyle = hexToRgba("#f4efe6", 0.9);
  context.arc(end.x, end.y, 2.2 + intensity * 1.3, 0, Math.PI * 2);
  context.fill();
}

function animate(time = 0) {
  smoothX += (pointerX - smoothX) * 0.07;
  smoothY += (pointerY - smoothY) * 0.07;
  root.style.setProperty("--mx", smoothX.toFixed(2));
  root.style.setProperty("--my", smoothY.toFixed(2));

  drawField(time);
  drawMandala(time);

  window.requestAnimationFrame(animate);
}

function hexToRgba(hex, alpha) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function getCopy(path) {
  return path.split(".").reduce((copy, key) => copy?.[key], translations[currentLang]);
}

function animateText(elements = animatedTextTargets) {
  if (reduceMotion) return;
  elements.forEach((element, index) => {
    if (!element) return;
    window.setTimeout(() => {
      element.classList.remove("text-reveal");
      void element.offsetWidth;
      element.classList.add("text-reveal");
    }, index * 34);
  });
}

function dissolveText(elements = animatedTextTargets) {
  if (reduceMotion) return;
  elements.forEach((element, index) => {
    if (!element) return;
    window.setTimeout(() => {
      element.classList.remove("text-dissolve");
      void element.offsetWidth;
      element.classList.add("text-dissolve");
    }, index * 22);
  });
}

function updateStatusLabel() {
  statusLabel.textContent = document.body.classList.contains("focus-mode")
    ? translations[currentLang].status.focus
    : translations[currentLang].status.live;
}

function formatCycle() {
  const count = String(readingNonce).padStart(2, "0");
  return currentLang === "zh"
    ? `${translations.zh.reading.cycle} ${count} 次解读`
    : `${translations.en.reading.cycle} ${count}`;
}

function setGenerating(isGenerating) {
  const copy = translations[currentLang];
  readingPanel.classList.toggle("is-generating", isGenerating);
  document.body.classList.toggle("is-casting", isGenerating);
  formAction.classList.toggle("is-generating", isGenerating);
  formAction.disabled = isGenerating;
  formAction.textContent = isGenerating ? copy.form.generating : copy.form.submit;
  readingStatus.textContent = isGenerating
    ? copy.reading.generating
    : readingNonce > 0
      ? `${copy.reading.complete} · ${formatCycle()}`
      : copy.reading.awaiting;
  readingCycle.textContent = formatCycle();
  if (isGenerating) {
    dissolveText([readingFields.seed, readingFields.pattern, readingFields.tone, readingFields.window, readingStatus]);
  }
}

function renderDetails() {
  const copy = translations[currentLang];
  const reading = lastReading;

  if (!reading || readingNonce === 0) {
    detailLead.textContent = copy.detail.leadEmpty;
    detailIdentity.textContent = "-";
    detailAction.textContent = "-";
    detailTiming.textContent = "-";
  } else {
    detailLead.textContent =
      currentLang === "zh"
        ? `${copy.detail.leadReady} ${copy.reading.seed}：${reading.seed}。`
        : `${copy.detail.leadReady} ${copy.reading.seed}: ${reading.seed}.`;
    detailIdentity.textContent =
      copy.detail.identities[Math.floor(reading.hash / 3) % copy.detail.identities.length];
    detailAction.textContent =
      copy.detail.actions[Math.floor(reading.hash / 5) % copy.detail.actions.length];
    detailTiming.textContent =
      copy.detail.timings[Math.floor(reading.hash / 11) % copy.detail.timings.length];
  }

  detailCouncilList.innerHTML = "";
  copy.detail.councilSteps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    detailCouncilList.appendChild(item);
  });
}

function openDetailModal() {
  renderDetails();
  detailModal.hidden = false;
  document.body.classList.add("modal-open");
  animateText([detailLead, detailIdentity, detailAction, detailTiming]);
}

function closeDetailModal() {
  detailModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function applyLanguage(lang) {
  currentLang = translations[lang] ? lang : "en";
  const copy = translations[currentLang];

  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  document.body.classList.toggle("lang-zh", currentLang === "zh");
  document.body.classList.toggle("lang-en", currentLang === "en");
  document.title = copy.documentTitle;
  if (metaDescription) {
    metaDescription.setAttribute("content", copy.description);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getCopy(element.dataset.i18n);
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = getCopy(element.dataset.i18nAria);
    if (value) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = getCopy(element.dataset.i18nPlaceholder);
    if (value) element.setAttribute("placeholder", value);
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  Array.from(birthForm.elements.inquiry.options).forEach((option) => {
    option.textContent = copy.entries[option.value].title;
  });

  updateStatusLabel();
  setEntry(activeEntry);
  updateReading(new FormData(birthForm));
  setGenerating(false);
  renderDetails();
  animateText([coreTitle, coreCaption, activeQuestion, readingStatus]);
}

function setEntry(name) {
  activeEntry = name;
  const entry = translations[currentLang].entries[name];
  coreIndex.textContent = entry.index;
  coreTitle.textContent = entry.title;
  coreCaption.textContent = entry.caption;
  activeQuestion.textContent = entry.question;

  entryButtons.forEach((button) => {
    const isActive = button.dataset.entry === name;
    const buttonEntry = translations[currentLang].entries[button.dataset.entry];
    button.querySelector("strong").textContent = buttonEntry.title;
    button.querySelector("small").textContent = buttonEntry.text;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (birthForm?.elements.inquiry) {
    birthForm.elements.inquiry.value = name;
  }
}

function hashText(text) {
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function positiveModulo(value, divisor) {
  return ((value % divisor) + divisor) % divisor;
}

function getBirthParts(dateValue) {
  const [yearRaw, monthRaw, dayRaw] = String(dateValue || "").split("-").map(Number);
  const now = new Date();
  return {
    year: Number.isFinite(yearRaw) ? yearRaw : now.getFullYear(),
    month: Number.isFinite(monthRaw) ? monthRaw : now.getMonth() + 1,
    day: Number.isFinite(dayRaw) ? dayRaw : now.getDate(),
  };
}

function getHourIndex(timeValue) {
  const hour = Number(String(timeValue || "00:00").slice(0, 2));
  return Math.floor(((Number.isFinite(hour) ? hour : 0) + 1) % 24 / 2);
}

function normalizeWeights(values) {
  const sum = values.reduce((total, value) => total + value, 0) || 1;
  const weights = values.map((value) => Math.max(6, Math.round((value / sum) * 100)));
  const drift = 100 - weights.reduce((total, value) => total + value, 0);
  weights[0] += drift;
  return weights;
}

function deriveCompassSignal({ date, time, place, inquiry, hash }) {
  const parts = getBirthParts(date);
  const hourIndex = getHourIndex(time);
  const placeHash = hashText(place || "Oracle East");
  const inquiryOffset = { identity: 0, action: 72, timing: 144 }[inquiry] || 0;
  const yearCycle = positiveModulo(parts.year - 4, 60);
  const yearPillar = `${stems[yearCycle % stems.length]}${branches[yearCycle % branches.length]}`;
  const monthIndex = positiveModulo(parts.month - 1, 12);
  const bearing = Math.round(
    positiveModulo(
      parts.year * 0.7 + parts.month * 17 + parts.day * 9 + hourIndex * 30 + placeHash + inquiryOffset,
      360,
    ),
  );
  const mountainIndex = Math.round(bearing / 15) % mountains24.length;
  const trigramIndex = Math.round(bearing / 45) % bagua.length;
  const rawElements = [0, 1, 2, 3, 4].map((index) => {
    const seed = hash + parts.day * (index + 3) + monthIndex * (index + 5) + hourIndex * (index + 7);
    return 18 + positiveModulo(seed, 39);
  });
  const elementWeights = normalizeWeights(rawElements);
  const dominantElements = elementWeights
    .map((weight, index) => ({ weight, index }))
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 2)
    .map((item) => item.index);

  return {
    bearing,
    hourIndex,
    monthIndex,
    mountainIndex,
    trigramIndex,
    elementWeights,
    dominantElements,
    yearPillar,
    palace: bagua[trigramIndex],
    mountain: mountains24[mountainIndex],
    hourBranch: branches[hourIndex],
  };
}

function formatCompassSignal(signal, time) {
  const names = elementNames[currentLang];
  const directionNames =
    currentLang === "zh"
      ? ["北", "东北", "东", "东南", "南", "西南", "西", "西北"]
      : ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const direction = directionNames[Math.round(signal.bearing / 45) % directionNames.length];
  const dominant = signal.dominantElements
    .map((index) => `${names[index]} ${signal.elementWeights[index]}`)
    .join(" · ");

  if (currentLang === "zh") {
    return {
      bearing: `${signal.bearing}° · ${signal.mountain}山 · ${direction}`,
      hour: `${signal.hourBranch}时 · ${time || "00:00"}`,
      elements: dominant,
      palace: `${signal.palace.zhName} · ${signal.yearPillar}`,
    };
  }

  return {
    bearing: `${signal.bearing}° · ${direction} · ${signal.mountain}`,
    hour: `${signal.hourBranch} hour · ${time || "00:00"}`,
    elements: dominant,
    palace: `${signal.palace.name} palace · ${signal.yearPillar}`,
  };
}

function applyCompassSignal(signal, time, options = {}) {
  Object.assign(compassState, signal);
  if (options.commit) {
    compassState.activatedAt = performance.now();
  }
  instrumentFrame.classList.toggle("has-signal", true);

  const formatted = formatCompassSignal(signal, time);
  compassFields.bearing.textContent = formatted.bearing;
  compassFields.hour.textContent = formatted.hour;
  compassFields.elements.textContent = formatted.elements;
  compassFields.palace.textContent = formatted.palace;
}

function updateReading(formData, options = {}) {
  if (options.commit) {
    readingNonce += 1;
  }

  const date = formData.get("date") || "";
  const time = formData.get("time") || "";
  const place = formData.get("place") || "";
  const inquiry = formData.get("inquiry") || activeEntry;
  const hash = hashText(`${date}|${time}|${place}|${inquiry}|${readingNonce}`);
  const signal = deriveCompassSignal({ date, time, place, inquiry, hash });
  const gate = signal.palace.symbol;
  const numericDate = date.slice(-2) || "00";
  const compactTime = String(time).replace(":", "") || "0000";
  const cycleCode = String(readingNonce).padStart(2, "0");
  const code = `${gate}-${numericDate}-${compactTime}-${cycleCode}`;
  const copy = translations[currentLang];

  setEntry(inquiry);
  applyCompassSignal(signal, time, options);
  readingFields.seed.textContent = code;
  readingFields.pattern.textContent = copy.patterns[hash % copy.patterns.length];
  readingFields.tone.textContent = copy.tones[Math.floor(hash / 7) % copy.tones.length];
  readingFields.window.textContent = copy.windows[Math.floor(hash / 13) % copy.windows.length];
  readingCycle.textContent = formatCycle();
  readingStatus.textContent =
    readingNonce > 0 ? `${copy.reading.complete} · ${formatCycle()}` : copy.reading.awaiting;
  readingPanel.classList.toggle("has-reading", readingNonce > 0);
  lastReading = {
    seed: code,
    hash,
    inquiry,
    date,
    time,
    place,
    pattern: readingFields.pattern.textContent,
    tone: readingFields.tone.textContent,
    window: readingFields.window.textContent,
    signal,
  };
  renderDetails();
  animateText();
}

window.addEventListener("pointermove", (event) => {
  pointerX = event.clientX - window.innerWidth / 2;
  pointerY = event.clientY - window.innerHeight / 2;
});

window.addEventListener("resize", () => {
  seedParticles();
});

entryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setEntry(button.dataset.entry);
    updateReading(new FormData(birthForm));
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

openDetails.addEventListener("click", openDetailModal);
closeDetails.addEventListener("click", closeDetailModal);
detailModal.querySelector("[data-close-details]").addEventListener("click", closeDetailModal);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !detailModal.hidden) {
    closeDetailModal();
  }
});

birthForm.addEventListener("input", () => updateReading(new FormData(birthForm)));
birthForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(birthForm);
  window.clearTimeout(generationTimer);
  setGenerating(true);
  generationTimer = window.setTimeout(
    () => {
      updateReading(formData, { commit: true });
      setGenerating(false);
      readingPanel.animate(
        [
          { transform: "translateY(0) scale(1)", borderColor: "rgba(244, 239, 230, 0.13)" },
          { transform: "translateY(-8px) scale(1.01)", borderColor: "rgba(212, 174, 104, 0.62)" },
          { transform: "translateY(0) scale(1)", borderColor: "rgba(244, 239, 230, 0.13)" },
        ],
        { duration: reduceMotion ? 1 : 760, easing: "cubic-bezier(.2,.8,.2,1)" },
      );
    },
    reduceMotion ? 0 : 420,
  );
});

focusMode.addEventListener("click", () => {
  document.body.classList.toggle("focus-mode");
  updateStatusLabel();
});

seedParticles();
applyLanguage("en");
animate();
