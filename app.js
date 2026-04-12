const CONFIG = {
  branding: {
    name: "FFLand",
    tagline: ""
  },
  server: {
    ip: "ffland.online",
    version: "1.21.11",
    upcomingWipe: "Скоро открытие!",
    accessMode: "Вход по заявке",
    // GitHub Pages не запускает backend, поэтому статус берется напрямую из публичного API.
    realStatusProvider: "mcsrvstat",
    statusRefreshMs: 60000,
    heroLead:
      "",
    about:
      "Сервер задуман как место для спокойной и атмосферной игры - без навязчивого донат-перегруза и без утраты ванильного ощущения мира. Например, у нас есть плагин на кастомные пластинки, который не ломает ваниллу, а лишь дополняет её. Здесь на первый план выходят комьюнити, взаимодействие между игроками и приятная ежедневная игра.",
    statusApiUrl: "",
    statusFallback: {
      online: false,
      players: null,
      version: null,
      note:
        "Не удалось получить статус через внешний API mcsrvstat."
    }
  },
  links: {
    vkApplyUrl: "https://vk.com/fflandmain",
    telegramBotUrl: "https://t.me/",
    social: [
      { title: "VK", hint: "", url: "https://vk.com/fflandmain", icon: "VK" },
      { title: "Telegram", hint: "", url: "https://t.me/fflandmain", icon: "TG" },
      { title: "Discord (скоро)", hint: "", url: "https://discord.com/", icon: "DS" },
      { title: "YouTube (скоро)", hint: "", url: "https://youtube.com/", icon: "YT" }
    ]
  },
  serverCommands: [
    { category: "Безопасность", command: "/co i и тык по предмету", description: "Проверить, кто взаимодействовал с блоком/сундуком и т.п." },
    { category: "Общение", command: "/pm <ник> <текст>", description: "Отправить личное сообщение игроку." },
    { category: "Кастомная пластинка", command: "/disc burn <ссылка, например на ютубе> <имя для пластинки> (надо держать пластинку в руке)", description: "Создать пластинку с кастомными песенками, можно вставлять ссылки например из ютуба." },
    { category: "Скины", command: "/skin url <ссылка на скин> (после /skin update, если надо удалить текущий скин /skin clear)", description: "Изменить скин с помощью ссылки на него." }
  ],
  advantages: [
    { icon: "01", title: "Ванильный дух без мусора", text: "База проекта - узнаваемый Minecraft-геймплей без ощущения перегруза.", tag: "Чистый стиль" },
    { icon: "02", title: "Взаимодействие с игроками", text: "Ставка на активное взаимодействие игроков.", tag: "Общение" },
    { icon: "03", title: "Ивенты и история мира", text: "Сервер живет не только простой игрой: здесь есть новости, события, ивенты, мероприятия и много всего еще.", tag: "Живой сезон" },
    { icon: "04", title: "Без донат-перегруза", text: "Фокус на самой игре, а не на агрессивной монетизации. Нам важнее атмосфера и честный прогресс.", tag: "Без лишнего" },
    { icon: "05", title: "Приятный темп игры", text: "Вы можете как заходить вечерком и расслабляться, так и создать свою империю, или же свой бизнес. ", tag: "Каждому свое" },
    { icon: "06", title: "Современный подход", text: "Правила, понятный геймплей, и активное общение с игроками", tag: "Организованно" }
  ],
  startSteps: [
    { title: "Подай заявку", text: "Можешь пролистать выше и нажать на кнопку «Подать заявку»" },
    { title: "Ознакомься с правилами", text: "Перед стартом прочитай правила, чтобы сразу понимать стиль проекта и ограничения." },
    { title: "Скопируй IP", text: "Нажми кнопку копирования IP и добавь сервер в свой список прямо в Майнкрафт." },
    { title: "Заходи!", text: "Поздравляю! Нажимай подключиться к серверу, находи новых друзей на сервере, и вперед!" }
  ],
  moodPoints: [
    { title: "С акцентом на атмосферу", text: "Мы сохранили ванильность, чтобы вы могли прочувстовать атмосферу того самого Майнкрафта, в компании друзей или же одному." },
    { title: "Ты сам решаешь свой темп игры", text: "Можешь как расслабляться вечерком, так и строить империю, о которой будет знать весь сервер!" },
    { title: "Взаимодействие игроков", text: "Мы делаем ставку на активное взаимодействие игроков." }
  ],
  faqItems: [
    { question: "Какая версия сервера?", answer: "Сейчас версия сервера 1.21.11." },
    { question: "Нужны ли моды?", answer: "Они необязательны, но если вы хотите поднять коммуникацию с игроками на новый уровень, то рекомендуем поставить PlasmoVoice и EmoteCraft" },
    { question: "Есть ли голосовой чат?", answer: "Да, мы используем PlasmoVoice" },
    { question: "Что делать, если не получается зайти?", answer: "Проверь версию игры, IP сервера, статус сервера на главной cтранице. Если не помогает, напиши в Telegram или VK из блока со ссылками." },
    { question: "Как подать заявку?", answer: "Открой вкладку «Заявка»: там остались два способа подачи — через VK и через Telegram-бота." },
    { question: "Где читать новости?", answer: "Блок новостей есть на главной странице, а быстрые ссылки на соцсети собраны ниже в отдельной секции." }
  ],
  news: [
    { date: "05.04.2026", title: "Началась работа над сервером.", text: "Начали делать сервер: загружать плагины, писать правила, возрождать ВК и ТГ группу." },
  ],
  reviews: [
    { rating: "Пока ничего не говорят) Сервер еще не открылся", text: "тут пока ничего нету", author: "Владелец проекта" },
  ],
  statistics: [
    { value: 0, label: "дней серверу", suffix: "" },
    { value: 35, label: "игроков в сообществе", suffix: "+" },
    { value: 0, label: "ивентов за сезон", suffix: "" },
    { value: 0, label: "крупных построек", suffix: "" }
  ],
  gallery: [
    { title: "Спавн", caption: "пока пусто", tag: "Спавн", image: "" },
    { title: "Большая общественная ферма", caption: "пока пусто", tag: "Проект", image: "" },
    { title: "тут пока ничего нет", caption: "пока пусто", tag: "Город", image: "" },
    { title: "Ивент-арена", caption: "пока пусто", tag: "Ивент", image: "" },
    { title: "Ночная база игрока", caption: "пока пусто", tag: "Постройка", image: "" },
    { title: "Общий рынок", caption: "пока пусто", tag: "Торговля", image: "" }
  ],
  historyIntro:
    "",
  historyStages: [
  ],
  timelineEvents: [
    { date: "11 апреля 2026", title: "Текущий этап сезона", text: "...", tag: "Вы здесь" },
    { date: "5 апреля 2026", title: "Покупка хостинга", text: "Начались первые работы на сервере.", tag: "Хостинг" },
    { date: "16 марта 2026", title: "Формирование концепции новой FFLand", text: "Все идеи учтены, концепция сформировалась.", tag: "Сформирование концепции" },
    { date: "8 марта 2026", title: "Появление идеи по возрождению FFLand", text: "Начаты обсуждения концепции проекта.", tag: "Возрождение" }
  ],
  team: [
    { initials: "KB", name: "kabagg", role: "Владелец", text: "Отвечает за концепцию проекта, сезон, техническую составляющую и общее направление сервера.", tags: ["Организация", "Развитие", "Комьюнити"] },
    { initials: "AD", name: "Jikop_Grisha, Dve_Olivki, vanko68", role: "Администраторы", text: "Следят за порядком, игровыми процессами, и игроками", tags: ["Порядок", "Поддержка"] },
    { initials: "CM", name: "Dve_Olivki", role: "Контент-Мейкер", text: "Создает видео, делает наш проект популярным, поддерживает онлайн", tags: ["Контент", "Видео"] },
  ],
  // Большой текст правил лежит отдельно, чтобы случайные кавычки не ломали JavaScript.
  rulesFile: "./data/rules.txt"
};

const dom = {
  brandName: document.getElementById("brandName"),
  brandTagline: document.getElementById("brandTagline"),
  heroTitle: document.getElementById("heroTitle"),
  heroLead: document.getElementById("heroLead"),
  heroChipVersion: document.getElementById("heroChipVersion"),
  heroChipWipe: document.getElementById("heroChipWipe"),
  heroChipAccess: document.getElementById("heroChipAccess"),
  aboutText: document.getElementById("aboutText"),
  serverIpDisplay: document.getElementById("serverIpDisplay"),
  serverVersionDisplay: document.getElementById("serverVersionDisplay"),
  statusState: document.getElementById("statusState"),
  statusPlayers: document.getElementById("statusPlayers"),
  statusNote: document.getElementById("statusNote"),
  advantagesGrid: document.getElementById("advantagesGrid"),
  startSteps: document.getElementById("startSteps"),
  moodList: document.getElementById("moodList"),
  newsGrid: document.getElementById("newsGrid"),
  galleryGrid: document.getElementById("galleryGrid"),
  faqList: document.getElementById("faqList"),
  reviewsGrid: document.getElementById("reviewsGrid"),
  statsGrid: document.getElementById("statsGrid"),
  socialGrid: document.getElementById("socialGrid"),
  rulesContent: document.getElementById("rulesContent"),
  historyIntro: document.getElementById("historyIntro"),
  historyStages: document.getElementById("historyStages"),
  timeline: document.getElementById("timeline"),
  commandsGrid: document.getElementById("commandsGrid"),
  teamGrid: document.getElementById("teamGrid"),
  applyCards: document.getElementById("applyCards"),
  footerTitle: document.getElementById("footerTitle"),
  footerText: document.getElementById("footerText"),
  footerLinks: document.getElementById("footerLinks"),
  toastStack: document.getElementById("toastStack"),
  galleryModal: document.getElementById("galleryModal"),
  galleryModalMedia: document.getElementById("galleryModalMedia"),
  galleryModalTitle: document.getElementById("galleryModalTitle"),
  galleryModalCaption: document.getElementById("galleryModalCaption")
};

const tabLinks = document.querySelectorAll("[data-tab-link]");
const tabPanels = document.querySelectorAll("[data-tab-panel]");
const copyButtons = [document.getElementById("copyIpButton")].filter(Boolean);
const revealNodes = document.querySelectorAll("[data-reveal]");
let rulesRenderPromise = null;
let rulesRendered = false;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function activateTab(tabId) {
  tabLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.tabLink === tabId);
  });

  let activePanel = null;
  tabPanels.forEach((panel) => {
    const isActive = panel.id === tabId;
    panel.classList.toggle("is-active", isActive);
    if (isActive) {
      activePanel = panel;
    }
  });

  activePanel?.querySelectorAll("[data-reveal]").forEach((node) => {
    node.classList.add("is-visible");
  });

  const nextHash = `#${tabId}`;
  if (window.location.hash !== nextHash) {
    history.replaceState(null, "", nextHash);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (tabId === "rules") {
    ensureRulesRendered().then(() => {
      activePanel?.querySelectorAll("[data-reveal]").forEach((node) => {
        node.classList.add("is-visible");
      });
    });
  }
}

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;
  toast.textContent = message;
  dom.toastStack.appendChild(toast);
  window.setTimeout(() => toast.remove(), 3200);
}

async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const area = document.createElement("textarea");
  area.value = value;
  area.setAttribute("readonly", "");
  area.style.position = "absolute";
  area.style.left = "-9999px";
  document.body.appendChild(area);
  area.select();
  document.execCommand("copy");
  area.remove();
}

function renderStaticContent() {
  dom.brandName.textContent = CONFIG.branding.name;
  dom.brandTagline.textContent = CONFIG.branding.tagline;
  dom.heroTitle.textContent = CONFIG.branding.name;
  dom.heroLead.textContent = CONFIG.server.heroLead;
  dom.heroChipVersion.textContent = `Версия ${CONFIG.server.version}`;
  dom.heroChipWipe.textContent = CONFIG.server.upcomingWipe;
  dom.heroChipAccess.textContent = CONFIG.server.accessMode;
  dom.aboutText.textContent = CONFIG.server.about;
  dom.serverIpDisplay.textContent = CONFIG.server.ip;
  dom.serverVersionDisplay.textContent = CONFIG.server.version;
  dom.historyIntro.textContent = CONFIG.historyIntro;
  dom.footerTitle.textContent = `${CONFIG.branding.name} • 2026`;
  dom.footerText.textContent = "Скоро открытие!";
}

function renderAdvantages() {
  dom.advantagesGrid.innerHTML = CONFIG.advantages
    .map(
      (item) => `
        <article class="advantage-card">
          <span class="advantage-card__icon">${escapeHtml(item.icon)}</span>
          <strong class="advantage-card__title">${escapeHtml(item.title)}</strong>
          <p class="advantage-card__text">${escapeHtml(item.text)}</p>
          <span class="advantage-card__tag">${escapeHtml(item.tag)}</span>
        </article>
      `
    )
    .join("");
}

function renderSteps() {
  dom.startSteps.innerHTML = CONFIG.startSteps
    .map(
      (item) => `
        <article class="step-card">
          <strong class="step-card__title">${escapeHtml(item.title)}</strong>
          <span class="step-card__text">${escapeHtml(item.text)}</span>
        </article>
      `
    )
    .join("");
}

function renderMood() {
  dom.moodList.innerHTML = CONFIG.moodPoints
    .map(
      (item) => `
        <article class="mood-card">
          <strong class="mood-card__title">${escapeHtml(item.title)}</strong>
          <p class="mood-card__text">${escapeHtml(item.text)}</p>
        </article>
      `
    )
    .join("");
}

function renderNews() {
  dom.newsGrid.innerHTML = CONFIG.news
    .map(
      (item) => `
        <article class="news-card">
          <span class="news-card__date">${escapeHtml(item.date)}</span>
          <strong class="news-card__title">${escapeHtml(item.title)}</strong>
          <p class="news-card__text">${escapeHtml(item.text)}</p>
        </article>
      `
    )
    .join("");
}

function renderGallery() {
  dom.galleryGrid.innerHTML = CONFIG.gallery
    .map((item, index) => {
      const title = escapeHtml(item.title);
      const caption = escapeHtml(item.caption);
      const tag = escapeHtml(item.tag);
      const image = item.image?.trim();
      const media = image
        ? `<div class="gallery-card__media"><img src="${escapeHtml(image)}" alt="${title}"></div>`
        : `<div class="gallery-card__media gallery-card__media--placeholder"></div>`;

      return `
        <article class="gallery-card">
          <button class="gallery-card__button" type="button" data-gallery-index="${index}">
            ${media}
            <div class="gallery-card__body">
              <span class="gallery-card__tag">${tag}</span>
              <strong class="gallery-card__title">${title}</strong>
              <p class="gallery-card__caption">${caption}</p>
            </div>
          </button>
        </article>
      `;
    })
    .join("");
}

function renderFaq() {
  dom.faqList.innerHTML = CONFIG.faqItems
    .map(
      (item, index) => `
        <article class="faq-item${index === 0 ? " is-open" : ""}">
          <button class="faq-item__button" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
            <strong>${escapeHtml(item.question)}</strong>
            <span class="faq-item__icon">+</span>
          </button>
          <div class="faq-item__content" style="max-height:${index === 0 ? "220px" : "0px"}">
            <div class="faq-item__content-inner">${escapeHtml(item.answer)}</div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderReviews() {
  dom.reviewsGrid.innerHTML = CONFIG.reviews
    .map(
      (item) => `
        <article class="review-card">
          <span class="review-card__rating">${escapeHtml(item.rating)}</span>
          <p class="review-card__text">${escapeHtml(item.text)}</p>
          <strong class="review-card__author">${escapeHtml(item.author)}</strong>
        </article>
      `
    )
    .join("");
}

function renderStatistics() {
  dom.statsGrid.innerHTML = CONFIG.statistics
    .map(
      (item) => `
        <article class="stats-card">
          <strong class="stats-card__value count-up" data-count="${Number(item.value)}">0</strong>
          <span class="stats-card__label">${escapeHtml(item.label)}${escapeHtml(item.suffix)}</span>
        </article>
      `
    )
    .join("");
}

function renderSocials() {
  const cardsMarkup = CONFIG.links.social
    .map(
      (item) => `
        <a class="social-card" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">
          <div class="social-card__top">
            <span class="social-card__icon">${escapeHtml(item.icon)}</span>
            <div>
              <strong class="social-card__title">${escapeHtml(item.title)}</strong>
              <p class="social-card__text">${escapeHtml(item.hint)}</p>
            </div>
          </div>
          <span class="social-card__hint">Открыть ссылку</span>
        </a>
      `
    )
    .join("");

  dom.socialGrid.innerHTML = cardsMarkup;
  dom.footerLinks.innerHTML = CONFIG.links.social
    .map((item) => `<a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.title)}</a>`)
    .join("");
}

function renderRuleTextBlocks(lines) {
  const blocks = [];
  let paragraph = [];
  let list = [];

  function flushParagraph() {
    if (!paragraph.length) {
      return;
    }

    blocks.push(`<p>${escapeHtml(paragraph.join(" "))}</p>`);
    paragraph = [];
  }

  function flushList() {
    if (!list.length) {
      return;
    }

    blocks.push(`<ul>${list.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`);
    list = [];
  }

  lines.forEach((line) => {
    const trimmed = line.trim();
    const listMatch = trimmed.match(/^[-*]\s+(.+)/);

    if (!trimmed) {
      flushParagraph();
      flushList();
      return;
    }

    if (listMatch) {
      flushParagraph();
      list.push(listMatch[1]);
      return;
    }

    flushList();
    paragraph.push(trimmed);
  });

  flushParagraph();
  flushList();
  return blocks.join("");
}

function formatRulesText(text) {
  const lines = String(text)
    .replace(/\r\n/g, "\n")
    .split("\n");
  const introLines = [];
  const rules = [];
  let currentRule = null;

  lines.forEach((line) => {
    const match = line.match(/^\s*((?:\d+\.)+\d*|\d+\))\s*(.*)$/);

    if (match) {
      const rawNumber = match[1];
      const number = rawNumber.endsWith(")") ? rawNumber.slice(0, -1) : rawNumber.replace(/\.$/, "");
      const level = number.split(".").filter(Boolean).length;
      currentRule = {
        number,
        title: match[2].trim(),
        level,
        lines: []
      };
      rules.push(currentRule);
      return;
    }

    if (currentRule) {
      currentRule.lines.push(line);
      return;
    }

    introLines.push(line);
  });

  const intro = renderRuleTextBlocks(introLines);
  const ruleItems = rules
    .map(
      (rule) => `
        <article class="rule-item rule-item--level-${Math.min(rule.level, 4)}">
          <div class="rule-item__head">
            <span class="rule-item__number">${escapeHtml(rule.number)}</span>
            <h3>${escapeHtml(rule.title || "Без названия")}</h3>
          </div>
          <div class="rule-item__body">${renderRuleTextBlocks(rule.lines)}</div>
        </article>
      `
    )
    .join("");

  return `${intro ? `<div class="rules-intro">${intro}</div>` : ""}${ruleItems}`;
}

async function renderRules() {
  try {
    dom.rulesContent.innerHTML = `<div class="rules-intro"><p>Загружаем правила...</p></div>`;
    const response = await fetch(CONFIG.rulesFile, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const text = await response.text();
    dom.rulesContent.innerHTML = formatRulesText(text);
    rulesRendered = true;
  } catch (error) {
    rulesRendered = false;
    dom.rulesContent.innerHTML = `
      <div class="rules-intro">
        <p>Не удалось загрузить файл правил. Проверь путь ${escapeHtml(CONFIG.rulesFile)}.</p>
        <p>${escapeHtml(error.message)}</p>
      </div>
    `;
  }
}

function ensureRulesRendered() {
  if (rulesRendered) {
    return rulesRenderPromise;
  }

  if (!rulesRenderPromise) {
    rulesRenderPromise = renderRules().finally(() => {
      rulesRenderPromise = null;
    });
  }

  return rulesRenderPromise;
}

function renderHistory() {
  dom.historyStages.innerHTML = CONFIG.historyStages
    .map(
      (item) => `
        <article class="history-stage">
          <span class="advantage-card__icon">${escapeHtml(item.icon)}</span>
          <strong class="history-stage__title">${escapeHtml(item.title)}</strong>
          <p class="history-stage__text">${escapeHtml(item.text)}</p>
          <span class="history-stage__tag">${escapeHtml(item.tag)}</span>
        </article>
      `
    )
    .join("");

  dom.timeline.innerHTML = CONFIG.timelineEvents
    .map((item, index) => {
      const sideClass = index % 2 === 0 ? "timeline-item--left" : "timeline-item--right";
      return `
        <article class="timeline-item ${sideClass}">
          <div class="timeline-item__card">
            <span class="timeline-item__date">${escapeHtml(item.date)}</span>
            <strong class="timeline-item__title">${escapeHtml(item.title)}</strong>
            <p class="timeline-item__text">${escapeHtml(item.text)}</p>
            <span class="timeline-item__tag">${escapeHtml(item.tag)}</span>
          </div>
          <span class="timeline-item__dot" aria-hidden="true"></span>
        </article>
      `;
    })
    .join("");
}

function renderTeam() {
  dom.teamGrid.innerHTML = CONFIG.team
    .map(
      (item) => `
        <article class="team-card">
          <div class="team-card__top">
            <span class="team-card__avatar">${escapeHtml(item.initials)}</span>
            <div>
              <strong class="team-card__name">${escapeHtml(item.name)}</strong>
              <span class="team-card__role">${escapeHtml(item.role)}</span>
            </div>
          </div>
          <p class="team-card__text">${escapeHtml(item.text)}</p>
          <div class="team-card__tags">
            ${item.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderCommands() {
  dom.commandsGrid.innerHTML = CONFIG.serverCommands
    .map(
      (item) => `
        <article class="command-card">
          <span class="command-card__category">${escapeHtml(item.category)}</span>
          <code class="command-card__command">${escapeHtml(item.command)}</code>
          <p class="command-card__description">${escapeHtml(item.description)}</p>
        </article>
      `
    )
    .join("");
}

function renderApplyCards() {
  const items = [
    {
      eyebrow: "",
      icon: "VK",
      title: "Заполнить заявку в VK",
      text: "",
      actionLabel: "Открыть VK",
      url: CONFIG.links.vkApplyUrl
    },
    {
      eyebrow: "",
      icon: "TG",
      title: "Заполнить заявку в Telegram-боте",
      text: "скоро появится",
      actionLabel: "Открыть Telegram",
      url: CONFIG.links.telegramBotUrl
    }
  ];

  dom.applyCards.innerHTML = items
    .map(
      (item) => `
        <article class="apply-card">
          <span class="apply-card__eyebrow">${escapeHtml(item.eyebrow)}</span>
          <div class="apply-card__icon">${escapeHtml(item.icon)}</div>
          <strong class="apply-card__title">${escapeHtml(item.title)}</strong>
          <p class="apply-card__text">${escapeHtml(item.text)}</p>
          <div class="apply-card__actions">
            <a class="apply-card__link" href="${escapeHtml(item.url)}"${item.url.startsWith("http") ? ' target="_blank" rel="noreferrer"' : ""}>${escapeHtml(item.actionLabel)}</a>
          </div>
        </article>
      `
    )
    .join("");
}

function getServerStatusUrl() {
  const { realStatusProvider, statusApiUrl, ip } = CONFIG.server;
  if (realStatusProvider === "custom" && statusApiUrl.trim()) {
    return statusApiUrl.trim();
  }

  return `https://api.mcsrvstat.us/3/${encodeURIComponent(ip)}`;
}

function normalizeStatusData(rawData) {
  if (!rawData || typeof rawData !== "object") {
    return null;
  }

  const players =
    rawData.players?.online ??
    rawData.playersOnline ??
    rawData.onlinePlayers ??
    rawData.playerCount ??
    rawData.players ??
    null;

  const version =
    rawData.protocol?.name ??
    (typeof rawData.version === "string" ? rawData.version : rawData.version?.name) ??
    rawData.serverVersion ??
    null;

  const onlineValue = rawData.online ?? rawData.isOnline ?? rawData.status === "online";
  const note =
    rawData.note ??
    (rawData.error ? `Не удалось получить статус сервера. Деталь: ${rawData.error}` : null) ??
    (rawData.hostname || rawData.ip
      ? ""
      : "Данные получены через API. При смене провайдера обнови normalizeStatusData в app.js под формат ответа.");

  return {
    online: Boolean(onlineValue),
    players,
    version,
    note
  };
}

async function loadServerStatus() {
  const { statusFallback } = CONFIG.server;
  let status = statusFallback;
  const statusUrl = getServerStatusUrl();

  if (statusUrl) {
    try {
      const response = await fetch(statusUrl, { headers: { Accept: "application/json" } });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const data = await response.json();
      const normalized = normalizeStatusData(data);
      if (normalized) {
        status = normalized;
      }
    } catch (error) {
      status = {
        ...statusFallback,
        note: `API недоступно, показан fallback. Деталь: ${error.message}`
      };
    }
  }

  const stateText = status.online ? "Онлайн" : "Оффлайн";

  dom.statusState.textContent = stateText;
  dom.statusPlayers.textContent = status.players ?? "--";
  dom.statusNote.textContent = status.note ?? "";
}

function toggleFaqItem(item, open) {
  const button = item.querySelector(".faq-item__button");
  const content = item.querySelector(".faq-item__content");
  const inner = item.querySelector(".faq-item__content-inner");
  item.classList.toggle("is-open", open);
  button.setAttribute("aria-expanded", open ? "true" : "false");
  content.style.maxHeight = open ? `${inner.scrollHeight + 20}px` : "0px";
}

function initFaq() {
  const items = Array.from(document.querySelectorAll(".faq-item"));
  items.forEach((item, index) => {
    toggleFaqItem(item, index === 0);
    item.querySelector(".faq-item__button").addEventListener("click", () => {
      const nextState = !item.classList.contains("is-open");
      items.forEach((faqItem) => toggleFaqItem(faqItem, false));
      toggleFaqItem(item, nextState);
    });
  });
}

function openGallery(index) {
  const item = CONFIG.gallery[index];
  if (!item) {
    return;
  }

  const image = item.image?.trim();
  dom.galleryModalTitle.textContent = item.title;
  dom.galleryModalCaption.textContent = item.caption;
  dom.galleryModalMedia.innerHTML = image
    ? `<img class="gallery-modal__image" src="${escapeHtml(image)}" alt="${escapeHtml(item.title)}">`
    : `<div class="gallery-modal__placeholder"></div>`;

  dom.galleryModal.classList.add("is-open");
  dom.galleryModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeGallery() {
  dom.galleryModal.classList.remove("is-open");
  dom.galleryModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function initGallery() {
  dom.galleryGrid.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-gallery-index]");
    if (trigger) {
      openGallery(Number(trigger.dataset.galleryIndex));
    }
  });

  dom.galleryModal.addEventListener("click", (event) => {
    if (event.target.closest("[data-gallery-close]")) {
      closeGallery();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dom.galleryModal.classList.contains("is-open")) {
      closeGallery();
    }
  });
}

function animateCount(node) {
  const target = Number(node.dataset.count);
  const duration = 900;
  const start = performance.now();

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - (1 - progress) ** 3;
    node.textContent = Math.round(target * eased);

    if (progress < 1) {
      window.requestAnimationFrame(frame);
      return;
    }

    const suffix = CONFIG.statistics.find((item) => item.value === target)?.suffix ?? "";
    node.textContent = `${target}${suffix}`;
  }

  window.requestAnimationFrame(frame);
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        if (entry.target.classList.contains("count-up")) {
          animateCount(entry.target);
        }
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18 }
  );

  revealNodes.forEach((node) => observer.observe(node));
  document.querySelectorAll(".count-up").forEach((node) => observer.observe(node));
}

function initTabs() {
  tabLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const tabId = link.dataset.tabLink;
      if (!tabId) {
        return;
      }
      event.preventDefault();
      activateTab(tabId);
    });
  });

  window.addEventListener("hashchange", () => {
    const requestedTab = window.location.hash.replace("#", "");
    activateTab(document.getElementById(requestedTab) ? requestedTab : "home");
  });

  const requestedTab = window.location.hash.replace("#", "");
  activateTab(document.getElementById(requestedTab) ? requestedTab : "home");
}

function initCopyIp() {
  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        await copyText(CONFIG.server.ip);
        showToast("IP сервера скопирован", "success");
      } catch {
        showToast("Не получилось скопировать IP", "error");
      }
    });
  });
}

function initStatusAutoRefresh() {
  const refreshMs = Number(CONFIG.server.statusRefreshMs);
  if (!refreshMs || refreshMs < 10000) {
    return;
  }

  window.setInterval(() => {
    loadServerStatus();
  }, refreshMs);
}

function renderAll() {
  renderStaticContent();
  renderAdvantages();
  renderSteps();
  renderMood();
  renderNews();
  renderGallery();
  renderFaq();
  renderReviews();
  renderStatistics();
  renderSocials();
  renderHistory();
  renderCommands();
  renderTeam();
  renderApplyCards();
}

renderAll();
ensureRulesRendered();
initTabs();
initCopyIp();
initFaq();
initGallery();
initReveal();
loadServerStatus();
initStatusAutoRefresh();
