const mapLink = (query) =>
  /^https?:\/\//i.test(query)
    ? query
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const placeImage = (slug) => `./assets/place-images/${slug}.jpg`;

function imageForPlace(title, query) {
  const text = `${title} ${query}`;
  const rules = [
    [/桃園|Taoyuan/i, "taoyuan-airport"],
    [/福岡機場|Fukuoka Airport/i, "fukuoka-airport"],
    [/LuxurySweet|Hakozaki 812-0053/i, "./assets/hotel.jpg"],
    [/MaxValu 箱崎|Hakozaki Miyamae/i, "maxvalu-hakozaki"],
    [/Pain Stock/i, "fishbread"],
    [/麵包超人|Anpanman/i, "./assets/place-images/bread.jpg"],
    [/櫛田|Kushida/i, "kushida"],
    [/Full Full/i, "fishbread"],
    [/一蘭|Ichiran/i, "noodle"],
    [/Canal City/i, "canal-city"],
    [/西鐵福岡天神|Nishitetsu|Tenjin Station/i, "tenjin-station"],
    [/太宰府|Dazaifu/i, "dazaifu"],
    [/九州國立|Kyushu National/i, "kyushu-museum"],
    [/博多站|Hakata Station/i, "hakata-station"],
    [/大濠|Ohori/i, "ohori-park"],
    [/福岡城|Fukuoka Castle/i, "fukuoka-castle"],
    [/Mina Tenjin|GU Tenjin/i, "mina-tenjin"],
    [/天神地下|Hakata Marui|UQ/i, "tenjin-underground"],
    [/Shin.Shin|ShinShin/i, "shinshin"],
    [/筑前前原|Chikuzen/i, "chikuzen-maebaru"],
    [/櫻井二見浦|Sakurai Futamigaura/i, "sakuraifutamigaura"],
    [/糸島海景|Itoshima beach/i, "itoshima-cafe"],
    [/MARK IS|Momochi|Fukuoka Tower/i, "mark-is"],
    [/能古渡船|Meinohama/i, "meinohama-ferry"],
    [/能古島|Nokonoshima/i, "nokonoshima"],
    [/LaLaport/i, "lalaport"],
    [/南藏院|Nanzoin/i, "nanzoin"],
    [/Yodobashi/i, "yodobashi-hakata"],
    [/Sunny|supermarket/i, "sunny-supermarket"],
    [/KITTE/i, "hakata-station"],
    [/燒肉|Yakiniku|ワンカルビ/i, "yakiniku"]
  ];
  const match = rules.find(([pattern]) => pattern.test(text));
  if (!match) {
    return placeImage("hakata-station");
  }

  return match[1].startsWith(".") ? match[1] : placeImage(match[1]);
}

const days = [
  {
    isoDate: "2026-07-21",
    date: "7/21",
    weekday: "星期二",
    tag: "arrival",
    filter: "relax",
    title: "抵達福岡，入住箱崎",
    route: "計程車優先",
    items: [
      ["14:40", "CI128 桃園起飛", "桃園國際機場第 2 航廈。", "Taoyuan International Airport Terminal 2", "從台北市區到桃園機場：約 40-70 分鐘，依出發地與交通方式調整。"],
      ["18:05", "抵達福岡機場", "國際線入境後領行李，4 人建議直接搭計程車。", "Fukuoka Airport International Terminal", "飛行時間：約 2 小時 25 分鐘。"],
      ["19:00", "🏨 入住 LuxurySweet East71", "車程約 15-25 分鐘，視入境與車流調整。", "1 Chome-41-41 Hakozaki Higashi Ward Fukuoka 812-0053 Japan", "福岡機場國際線 → 箱崎住宿：計程車約 15-25 分鐘。"],
      ["19:30", "🍽️ 晚餐：八起居酒場 (Yaoki) 或春陽軒拉麵", "住宿附近的地元居酒場，第一晚簡單吃好。", "八起 居酒場 箱崎", "住宿步行約 5-10 分鐘。"],
      ["21:00", "MaxValu 箱崎宮前補給", "買水、早餐、零食，回住宿整理。", "MaxValu Hakozaki Miyamae Fukuoka", "住宿 → MaxValu 箱崎宮前：步行約 5-8 分鐘。"]
    ]
  },
  {
    isoDate: "2026-07-22",
    date: "7/22",
    weekday: "星期三",
    tag: "city",
    filter: "city",
    title: "櫛田神社 · 博多運河城",
    route: "地鐵 + 步行",
    items: [
      ["09:00", "🍽️ 早餐：Pain Stock 箱崎本店", "先吃福岡名物明太法國麵包，離住宿區不遠。", "pain stock Hakozaki Fukuoka", "住宿 → Pain Stock：步行或計程車約 8-12 分鐘。"],
      ["10:30", "🏛️ 本日唯一景點：櫛田神社", "福岡歷史悠久的守護神，參觀巨大的山笠，逛川端商店街。", "Kushida Shrine Fukuoka", "Pain Stock → 櫛田神社：地鐵+步行約 20 分鐘。"],
      ["13:00", "🍽️ 午餐：The Full Full Hakata", "品嚐清單中的明太子法國麵包。", "THE FULL FULL HAKATA Fukuoka", "櫛田神社 → The Full Full Hakata：步行約 10-15 分鐘。"],
      ["14:30", "博多運河城逛街", "逛街避暑，有各大品牌與 UQ Mobile 門市。", "au Canal City Hakata UQ mobile", "The Full Full Hakata → 博多運河城：步行約 5 分鐘。"],
      ["18:00", "🍽️ 晚餐：一蘭拉麵 博多運河城店", "晚餐在運河城內享用特色方形碗的一蘭拉麵。", "Ichiran Canal City Hakata", "運河城內移動。"]
    ]
  },
  {
    isoDate: "2026-07-23",
    date: "7/23",
    weekday: "星期四",
    tag: "daytrip",
    filter: "daytrip",
    title: "太宰府天滿宮 · 天神逛街大餐",
    route: "地鐵 + 西鐵 + 步行",
    items: [
      ["09:00", "🏛️ 本日唯一景點：太宰府天滿宮 參道散策", "避開最炎熱的正午，早點前往參道漫步，吃梅枝餅，參觀天滿宮。", "Dazaifu Tenmangu", "住宿 → 太宰府：西鐵約 50-60 分鐘。"],
      ["11:30", "🍽️ 午餐：太宰府參道美食", "在參道上享用梅枝餅、各式和菓子，悠閒享用。", "Dazaifu Tenmangu", "參道周還步行。"],
      ["14:00", "天神商圈逛街 + Mina 天神、PARCO", "搭西鐵返回天神，開逛福岡PARCO與Mina天神。", "福岡PARCO", "太宰府 → 天神：西鐵約 40-50 分鐘。"],
      ["18:00", "🍽️ 晚餐：國產牛燒肉 (ワンカルビ PREMIUM 天神店)", "第三晚大餐：品嚐美味的國產牛燒肉吃到飽 (建議提前預約)。", "ワンカルビ PREMIUM 天神", "天神商圈步行約 5-10 分鐘。"]
    ]
  },
  {
    isoDate: "2026-07-24",
    date: "7/24",
    weekday: "星期五",
    tag: "city",
    filter: "city",
    title: "大濠公園 · 天神博多逛街",
    route: "地鐵 + 步行",
    items: [
      ["09:00", "🏛️ 本日唯一景點：大濠公園 散步", "福岡市中心的美麗湖泊，早晨涼爽適合散步。", "Ohori Park Fukuoka", "住宿 → 大濠公園：地鐵約 25-35 分鐘。"],
      ["11:00", "🍽️ 午餐：公園附近地元食堂", "公園周還有多家品質本料理小店，悠閒情調用餐。", "Ohori Park Fukuoka cafe restaurant", "公園內步行。"],
      ["13:00", "Mina 天神 GU + 天神地下街 + PARCO", "天神區全面進攻，逛逛 Mina 天神 GU、天神地下街、福岡PARCO。", "福岡PARCO", "大濠公園 → Mina 天神：地鐵約 15 分鐘。"],
      ["18:30", "🍽️ 晚餐：Shin-Shin 博多拉麵 KITTE博多店", "前往博多站的 KITTE 博多，享用超人氣的博多拉麵。", "Shin-Shin Hakata Ramen KITTE Hakata", "天神 → 博多/KITTE：地鐵約 10-15 分鐘。"]
    ]
  },
  {
    isoDate: "2026-07-25",
    date: "7/25",
    weekday: "星期六",
    tag: "daytrip",
    filter: "daytrip",
    title: "糸島海岸 · 姪濱百道購物",
    route: "JR + 計程車",
    items: [
      ["09:00", "🏛️ 本日唯一景點：櫻井二見浦 夫婦岩 海上鳥居", "欣賞美麗海上鳥居與夫婦岩，拍照打卡。", "Sakurai Futamigaura Couple Stones", "筑前前原站 → 二見浦：計程車約 20-30 分鐘。"],
      ["11:30", "🍽️ 午餐：糸島海景餐廳 + 和風拿鐵", "在二見浦海岸邊的海景餐廳享用悠閒午餐與午茶。", "Itoshima beach cafe lunch", "夫婦岩周還步行。"],
      ["15:30", "MARK IS 福岡百道逛街", "下午返回市區，逛逛百道大型商場，避暑兼購物。", "MARK IS Fukuoka Momochi", "糸島 → MARK IS 百道：計程車約 40-50 分鐘，或大眾運輸約 60-80 分鐘。"],
      ["18:30", "🍽️ 晚餐：百道地區餐廳或天神造訪", "在 MARK IS 百道周還享用晚餐，或返回天神覓食。", "MARK IS Fukuoka Momochi restaurant", "百道地區步行。"]
    ]
  },
  {
    isoDate: "2026-07-26",
    date: "7/26",
    weekday: "星期日",
    tag: "city",
    filter: "city",
    title: "福岡塔 · 百道海濱公園 · LaLaport",
    route: "地鐵 + 步行",
    items: [
      ["09:30", "🏛️ 本日唯一景點：福岡塔 + 百道海濱公園", "登上福岡塔俯瞰博多灣，然後漫步百道海濱公園，吹海風放鬆。", "Fukuoka Tower Momochi Beach", "住宿 → 福岡塔：地鐵+步行約 40-50 分鐘。"],
      ["12:00", "🍽️ 午餐：百道地區海濱餐廳", "在百道海濱周遭享用悠閒午餐，眺望博多灣景色。", "MARK IS Fukuoka Momochi", "福岡塔 → 百道餐廳：步行約 5 分鐘。"],
      ["14:00", "MARK IS 福岡百道逛街", "逛逛百道大型商場，避暑兼購物。", "MARK IS Fukuoka Momochi", "百道海濱 → MARK IS：步行約 5 分鐘。"],
      ["16:30", "LaLaport 福岡逛街 看鋼彈、GU、超市購物", "前往 LaLaport，看 1:1 鋼彈，逛 GU、超市與各類商店。", "GU LaLaport Fukuoka", "MARK IS → LaLaport：地鐵約 20 分鐘。"],
      ["18:30", "🍽️ 晚餐：LaLaport 內餐廳或天神造訪", "在 LaLaport 內享用晚餐，地下有花樣並陸的小吃。", "GU LaLaport Fukuoka restaurant", "LaLaport 內步行。"]
    ]
  },
  {
    isoDate: "2026-07-27",
    date: "7/27",
    weekday: "星期一",
    tag: "daytrip",
    filter: "daytrip",
    title: "南藏院臥佛參拜與博多最後大採買",
    route: "JR + 地鐵",
    items: [
      ["08:45", "博多站搭乘 JR 前往南藏院", "搭乘篠栗線前往城戶南藏院前站。", "Hakata Station JR", "住宿 → 博多站：地鐵約 15-20 分鐘。"],
      ["09:30", "南藏院 (本日唯一景點)", "參拜世界最大的青銅涅槃佛，感受莊嚴與寧靜。", "Nanzoin Temple Fukuoka", "城戶南藏院前站 → 南藏院：步行約 3-5 分鐘。"],
      ["12:30", "博多 Yodobashi 與博多站逛街", "回博多站享用午餐，隨後在 Yodobashi（有 GU）及站內商圈補貨。", "GU Yodobashi Hakata", "南藏院 → 博多：JR 約 25 分鐘。"],
      ["16:00", "博多站最後大採買", "藥妝、伴手禮一次買齊，買完後回住宿處打包行李。", "Hakata Station souvenir shopping", "博多站商圈步行。"],
      ["18:00", "箱崎超市與周邊晚餐", "在住宿附近的 MaxValu 箱崎店或當地的食堂/拉麵店解決最後晚餐。", "MaxValu Hakozaki Miyamae Fukuoka", "博多站 → 箱崎住宿：地鐵約 15 分鐘。"]
    ]
  },
  {
    isoDate: "2026-07-28",
    date: "7/28",
    weekday: "星期二",
    tag: "departure",
    filter: "relax",
    title: "退房與博多站最後購物、返台",
    route: "計程車 + 地鐵",
    items: [
      ["06:00-11:00", "LuxurySweet East71 退房", "退房後叫計程車或地鐵前往博多站置物。", "1 Chome-41-41 Hakozaki Higashi Ward Fukuoka 812-0053 Japan", "箱崎 → 博多站：計程車或地鐵約 15-20 分鐘。"],
      ["11:30", "博多站商圈與 KITTE 博多最後逛街", "最後補買、吃午餐，準備前往機場。", "購物中心KITTE", "博多站周邊步行。"],
      ["16:30", "前往福岡機場", "建議保守提早 2 小時抵達機場辦理登機與免稅店購物。", "Fukuoka Airport International Terminal", "博多站 → 福岡機場國際線：計程車約 15-25 分鐘。"],
      ["19:10", "CI129 福岡起飛", "搭乘華航班機返回台灣，預計 20:35 抵達桃園。", "Fukuoka Airport International Terminal", "飛行時間約 2 小時 25 分鐘。"]
    ]
  }
];

const dayContainer = document.querySelector("#days");
const dateTabBar = document.querySelector("#date-tab-bar");
const dayCounterEl = document.querySelector("#day-counter");
const packingList = document.querySelector("#packingList");
const packingStatus = document.querySelector("#packingStatus");
const sharePackingButton = document.querySelector("#sharePacking");
const packingStorageKey = "fukuokaPackingState";
const PACKING_GAS_URL = "https://script.google.com/macros/s/AKfycbyQnK7V1mzFet86YJyRIoNMluM0u0_lYFAptz8olKYZFr2Xawc9CUc2VSHmjEXOanPjJg/exec";

const packingGroups = [
  {
    title: "共用",
    items: ["護照 4 本", "機票與住宿資料", "日幣現金", "信用卡", "Wi-Fi / eSIM 設定", "轉接頭", "行動電源", "雨傘或輕便雨衣"]
  },
  {
    title: "每人",
    items: ["夏季衣物", "薄外套", "睡衣", "盥洗用品", "常備藥", "防曬用品", "帽子或墨鏡", "舒適好走的鞋"]
  },
  {
    title: "福岡行程",
    items: ["購物摺疊袋", "環保袋", "濕紙巾", "小毛巾", "麵包超人博物館門票確認", "行李秤", "伴手禮空間"]
  }
];



// --- Single-day display state ---
let currentDayIndex = 0;

// Touch swipe state
let touchStartX = 0;
let touchStartY = 0;

function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getActiveDateIndex() {
  const dateParam = new URLSearchParams(location.search).get("date");
  const key = /^\d{4}-\d{2}-\d{2}$/.test(dateParam || "") ? dateParam : getLocalDateKey();
  const idx = days.findIndex((d) => d.isoDate === key);
  return idx !== -1 ? idx : 0;
}

// Weekday short labels
const weekdayShortMap = ["日", "一", "二", "三", "四", "五", "六"];

function renderDateTabs() {
  if (!dateTabBar) return;
  dateTabBar.innerHTML = "";

  days.forEach((day, index) => {
    const isActive = index === currentDayIndex;
    const dateObj = new Date(day.isoDate + "T00:00:00");
    const weekday = weekdayShortMap[dateObj.getDay()];
    const dayNum = dateObj.getDate();

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "date-tab" + (isActive ? " active" : "");
    btn.setAttribute("aria-label", `${day.date} ${day.weekday}`);
    btn.innerHTML = `<span class="tab-weekday">${weekday}</span><span class="tab-day">${dayNum}</span>`;
    btn.addEventListener("click", () => selectDayByIndex(index));
    dateTabBar.appendChild(btn);
  });
}

function selectDayByIndex(index) {
  currentDayIndex = index;
  renderDateTabs();
  renderDays();
  if (dayCounterEl) dayCounterEl.textContent = `DAY ${index + 1} / ${days.length}`;
  dayContainer.scrollTop = 0;
}

function renderDays() {
  const day = days[currentDayIndex];
  if (!day) return;

  dayContainer.innerHTML = `
    <article class="day-card" data-date="${day.isoDate}">
      <div class="day-meta">
        <div>
          <div class="date">${day.date}</div>
          <div class="weekday">${day.weekday}</div>
        </div>
        <span class="tag">${day.tag}</span>
      </div>
      <div class="day-body">
        <div class="day-title">
          <h3>${day.title}</h3>
          <span class="route">${day.route}</span>
        </div>
        <ul class="timeline">
          ${day.items
            .map(
              ([time, title, detail, query, transfer]) => `
                <li>
                  <a class="map-item" href="${mapLink(query)}" target="_blank" rel="noreferrer">
                    <img class="place-thumb" src="${imageForPlace(title, query)}" alt="${title} 預覽圖" loading="lazy" />
                    <span class="time">${time}</span>
                    <span class="item">
                      <strong>${title}</strong>
                      <span>${detail}</span>
                      <span class="transfer">${transfer}</span>
                    </span>
                    <span class="map-hint" aria-hidden="true">MAP</span>
                  </a>
                </li>
              `
            )
            .join("")}
        </ul>
      </div>
    </article>
  `;
}

// Init itinerary
currentDayIndex = getActiveDateIndex();
if (dayCounterEl) dayCounterEl.textContent = `DAY ${currentDayIndex + 1} / ${days.length}`;
renderDateTabs();
renderDays();

// Touch swipe on day container
if (dayContainer) {
  dayContainer.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  dayContainer.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0 && currentDayIndex < days.length - 1) {
        selectDayByIndex(currentDayIndex + 1);
      } else if (dx > 0 && currentDayIndex > 0) {
        selectDayByIndex(currentDayIndex - 1);
      }
    }
  }, { passive: true });
}

// Single-page: always show itinerary on load

// ─── Modal helpers ───────────────────────────────────────
function openModal(type) {
  const modal = document.getElementById(`modal-${type}`);
  if (!modal) return;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  // Re-render packing list each time modal opens
  if (type === "packing") renderPackingList();
}

function closeModal(type) {
  const modal = document.getElementById(`modal-${type}`);
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

// ESC to close any open modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".info-modal.open").forEach((m) => {
      m.classList.remove("open");
    });
    document.body.style.overflow = "";
  }
});

// Enter key to add packing item
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && document.activeElement?.id === "packingNewItem") {
    addPackingItem();
  }
});


// ─── Info Bar Collapsibles ──────────────────────────────
function toggleInfoBar(type) {
  const content = document.getElementById(`${type}-content`);
  const arrow = document.getElementById(`${type}-arrow`);
  const btn = content?.previousElementSibling;
  if (!content) return;

  const isExpanded = content.classList.contains("expanded");
  content.classList.toggle("expanded", !isExpanded);
  if (arrow) arrow.classList.toggle("expanded", !isExpanded);
  if (btn) btn.setAttribute("aria-expanded", String(!isExpanded));
}

function copyHotelAddr(lang = "ja") {
  const addresses = {
    ja: "\u3012812-0053 \u798f\u5ca1\u770c\u798f\u5ca1\u5e02\u6771\u533a\u7b87\u5d0e\uff11\u4e01\u76ee41\u221241",
    en: "1 Chome-41-41 Hakozaki, Higashi Ward, Fukuoka, 812-0053 Japan"
  };
  const addr = addresses[lang] || addresses.ja;
  navigator.clipboard?.writeText(addr).catch(() => {
    const el = document.createElement("input");
    el.value = addr;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  });
  const btn = document.querySelector(`[onclick="copyHotelAddr('${lang}')"]`);
  if (btn) {
    const orig = btn.textContent;
    btn.textContent = "\u2713 \u5df2\u8907\u88fd";
    setTimeout(() => { btn.textContent = orig; }, 1800);
  }
}

function getPackingState() {
  try {
    return JSON.parse(localStorage.getItem(packingStorageKey) || "{}");
  } catch {
    return {};
  }
}

function setPackingState(state) {
  localStorage.setItem(packingStorageKey, JSON.stringify(state));
}

function hasPackingCloud() {
  return PACKING_GAS_URL && PACKING_GAS_URL.startsWith("https://script.google.com/");
}

function encodePackingState(state) {
  return btoa(unescape(encodeURIComponent(JSON.stringify(state))));
}

function decodePackingState(value) {
  return JSON.parse(decodeURIComponent(escape(atob(value))));
}

function importPackingFromUrl() {
  const pack = new URLSearchParams(location.search).get("pack");
  if (!pack) return;

  try {
    const state = decodePackingState(pack);
    setPackingState(state);
    savePackingToCloud(state);
    if (packingStatus) packingStatus.textContent = "已從同步連結帶入行李清單。";
  } catch {
    if (packingStatus) packingStatus.textContent = "同步連結讀取失敗，已保留本機清單。";
  }
}

function loadPackingJsonp() {
  return new Promise((resolve, reject) => {
    const callbackName = `__packingSync${Date.now()}${Math.floor(Math.random() * 1000)}`;
    const script = document.createElement("script");
    const separator = PACKING_GAS_URL.includes("?") ? "&" : "?";
    const timeout = window.setTimeout(() => {
      cleanup();
      reject(new Error("Packing sync timed out"));
    }, 10000);

    function cleanup() {
      window.clearTimeout(timeout);
      delete window[callbackName];
      script.remove();
    }

    window[callbackName] = (cloudData) => {
      cleanup();
      resolve(cloudData);
    };

    script.onerror = () => {
      cleanup();
      reject(new Error("Packing sync failed"));
    };
    script.src = `${PACKING_GAS_URL}${separator}callback=${encodeURIComponent(callbackName)}&t=${Date.now()}`;
    document.head.appendChild(script);
  });
}

async function loadPackingFromCloud() {
  if (!hasPackingCloud()) {
    if (packingStatus) packingStatus.textContent = "尚未設定雲端同步，目前使用本機清單。";
    return;
  }

  try {
    if (packingStatus) packingStatus.textContent = "雲端同步中...";
    const cloudData = await loadPackingJsonp();
    const cloudState = cloudData.items || cloudData;

    if (cloudState && typeof cloudState === "object" && !Array.isArray(cloudState)) {
      setPackingState(cloudState);
    }
    // 同步自訂項目
    if (Array.isArray(cloudData.customItems)) {
      setCustomPackingItems(cloudData.customItems);
    }
    renderPackingList();
    if (packingStatus) packingStatus.textContent = "已連結雲端清單。";
  } catch {
    if (packingStatus) packingStatus.textContent = "雲端讀取失敗，暫用本機清單。";
  }
}

async function savePackingToCloud(state = getPackingState()) {
  if (!hasPackingCloud()) return;

  try {
    if (packingStatus) packingStatus.textContent = "正在同步雲端...";
    await fetch(PACKING_GAS_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        items: state,
        customItems: getCustomPackingItems(),
        updatedAt: new Date().toISOString()
      })
    });
    if (packingStatus) packingStatus.textContent = "已同步雲端。";
  } catch {
    if (packingStatus) packingStatus.textContent = "雲端同步失敗，已保留本機清單。";
  }
}

function getCustomPackingItems() {
  try { return JSON.parse(localStorage.getItem("fukuokaCustomPacking") || "[]"); }
  catch { return []; }
}

function setCustomPackingItems(items) {
  localStorage.setItem("fukuokaCustomPacking", JSON.stringify(items));
}

function addPackingItem() {
  const input = document.getElementById("packingNewItem");
  const text = input?.value.trim();
  if (!text) return;
  const items = getCustomPackingItems();
  items.push(text);
  setCustomPackingItems(items);
  input.value = "";
  renderPackingList();
  savePackingToCloud(); // 同步自訂項目到雲端
}

function deleteCustomPackingItem(index, itemText) {
  const items = getCustomPackingItems();
  items.splice(index, 1);
  setCustomPackingItems(items);
  const state = getPackingState();
  delete state[`custom-${itemText}`];
  setPackingState(state);
  renderPackingList();
  savePackingToCloud(); // 同步到雲端
}

function getDeletedBuiltInItems() {
  try { return JSON.parse(localStorage.getItem("fukuokaDeletedBuiltIn") || "[]"); }
  catch { return []; }
}

function setDeletedBuiltInItems(items) {
  localStorage.setItem("fukuokaDeletedBuiltIn", JSON.stringify(items));
}

function deleteBuiltInPackingItem(groupTitle, itemText) {
  const deleted = getDeletedBuiltInItems();
  const key = `${groupTitle}::${itemText}`;
  if (!deleted.includes(key)) deleted.push(key);
  setDeletedBuiltInItems(deleted);
  // Also remove its checked state
  const state = getPackingState();
  delete state[`${groupTitle}-${itemText}`];
  setPackingState(state);
  renderPackingList();
  savePackingToCloud();
}

function renderPackingList() {
  if (!packingList) return;

  const state = getPackingState();
  const customItems = getCustomPackingItems();
  const deletedBuiltIn = getDeletedBuiltInItems();

  const builtInHTML = packingGroups.map((group) => {
    const visibleItems = group.items.filter(
      (item) => !deletedBuiltIn.includes(`${group.title}::${item}`)
    );
    if (visibleItems.length === 0) return "";
    return `
    <div class="packing-group">
      <h4>${group.title}</h4>
      ${visibleItems.map((item) => {
        const id = `${group.title}-${item}`;
        return `<label class="packing-item packing-item--custom">
          <input type="checkbox" data-pack-id="${id}" ${state[id] ? "checked" : ""} />
          <span>${item}</span>
          <button type="button" class="packing-delete-btn" data-builtin-group="${group.title}" data-builtin-item="${item}" aria-label="刪除">×</button>
        </label>`;
      }).join("")}
    </div>
  `;
  }).join("");

  const customHTML = customItems.length > 0 ? `
    <div class="packing-group">
      <h4>自訂項目</h4>
      ${customItems.map((item, i) => {
        const id = `custom-${item}`;
        return `<label class="packing-item packing-item--custom">
          <input type="checkbox" data-pack-id="${id}" ${state[id] ? "checked" : ""} />
          <span>${item}</span>
          <button type="button" class="packing-delete-btn" data-custom-index="${i}" aria-label="刪除">×</button>
        </label>`;
      }).join("")}
    </div>
  ` : "";

  packingList.innerHTML = builtInHTML + customHTML;

  packingList.querySelectorAll(".packing-delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (btn.dataset.customIndex !== undefined) {
        const idx = parseInt(btn.dataset.customIndex, 10);
        deleteCustomPackingItem(idx, customItems[idx]);
      } else if (btn.dataset.builtinGroup) {
        deleteBuiltInPackingItem(btn.dataset.builtinGroup, btn.dataset.builtinItem);
      }
    });
  });
}


function copyPackingLink() {
  const state = getPackingState();
  const url = new URL(location.href);
  url.hash = "packing";
  url.searchParams.set("pack", encodePackingState(state));
  url.searchParams.delete("date");

  navigator.clipboard
    ?.writeText(url.toString())
    .then(() => {
      if (packingStatus) packingStatus.textContent = "已複製同步連結，可傳到 LINE 給其他手機開啟。";
    })
    .catch(() => {
      if (packingStatus) packingStatus.textContent = url.toString();
    });
}

importPackingFromUrl();
renderPackingList();
loadPackingFromCloud();

packingList?.addEventListener("change", (event) => {
  const input = event.target;
  if (!(input instanceof HTMLInputElement) || !input.dataset.packId) return;

  const state = getPackingState();
  state[input.dataset.packId] = input.checked;
  setPackingState(state);
  if (packingStatus) packingStatus.textContent = hasPackingCloud() ? "已儲存，準備同步雲端。" : "已儲存在這台手機。要換手機請複製同步連結。";
  savePackingToCloud(state);
});

sharePackingButton?.addEventListener("click", copyPackingLink);

// ─── 必吃美食清單 ──────────────────────────────────────────
const mustEatList = [
  {
    category: "🍜 拉麵",
    items: [
      { name: "一蘭拉麵（博多運河城店）", note: "特色方形碗，7/22 晚餐已安排", planned: true },
      { name: "Shin-Shin 博多拉麵（KITTE 博多）", note: "小拉麵清淡系，7/24 晚餐已安排", planned: true },
      { name: "賀茂山拉麵（天神/博多周邊）", note: "博多最小的豐盛拉麵，很小家 ⚠️ 延長小吃", planned: false },
      { name: "房山拉麵（箱崎周邊）", note: "濃螺山拉麵，住宿附近可就近享用", planned: false }
    ]
  },
  {
    category: "🥐 麵包 & 可頌",
    items: [
      { name: "Pain Stock 明太法國麵包（箱崎本店）", note: "福岡代表麵包，7/22 早餐已安排", planned: true },
      { name: "The Full Full Hakata 明太子麵包", note: "商業區的明太子麵包，7/22 午餐已安排", planned: true },
      { name: "梅枝餅（太宰府參道）", note: "太宰府道上的必吃和果黃豆餅，7/23 享用", planned: true },
      { name: "il FORNO del Mignon ミニヨン 迷你可頌（博多站 1F）", note: "博多站 JR 中央口旁，現烤迷你可頌秤重賣🥐 外酥內軟超好吃！07:00–23:00，路過必買！", planned: false, mapUrl: "https://maps.app.goo.gl/768Hd1ee5qmcVgmG6" }
    ]
  },
  {
    category: "🥩 燒肉 / 居酒屋",
    items: [
      { name: "國產牛燒肉 ワンカルビ PREMIUM（天神）", note: "一定要預約！吃到飽展。絡 7/23 晚餐已安排", planned: true },
      { name: "地元居酒屋八起 (Yaoki)（箱崎）", note: "第一晚抵達就近吃，平價奇醐地元居酒屋", planned: false }
    ]
  },
  {
    category: "🍡 小吃 & 甜點",
    items: [
      { name: "明太子鯛魚燒（博多周邊）", note: "明太口味魚燒，隨處可山", planned: false },
      { name: "糸島海景和品拿鐵（糸島海岸）", note: "糸島小旅行不容錯過的窗景咖啡問店，7/25 安排", planned: true },
      { name: "博多 天神遊世府 小吃（賀茂/公山天神）", note: "淡野系環境女子最愛的小吃聊天。可從達展", planned: false }
    ]
  },
  {
    category: "🛒 伴手禮必買",
    items: [
      { name: "明太子（博多站・KITTE・天神百貨）", note: "回台必帶，冷藏包裝，最後一天再買", planned: false },
      { name: "博多通りもん（博多站商圈）", note: "白豆沙餡餅，福岡人氣第一伴手禮", planned: false },
      { name: "ひよ子（Baby Chick）博多限定版", note: "可愛小雞造型和菓子，很適合分送", planned: false }
    ]
  }
];

function renderMustEatList() {
  const container = document.getElementById("musteatList");
  if (!container) return;

  container.innerHTML = mustEatList.map((group) => `
    <div class="musteat-group">
      <div class="musteat-category">${group.category}</div>
      ${group.items.map((item) => `
        <div class="musteat-item${item.planned ? " musteat-item--planned" : ""}">
          <div class="musteat-item-name">${item.name}</div>
          <div class="musteat-item-note">${item.note}</div>
          <div class="musteat-item-actions">
            ${item.planned ? '<span class="musteat-badge">✅ 已安排</span>' : ""}
            ${item.mapUrl ? `<a class="musteat-map-link" href="${item.mapUrl}" target="_blank" rel="noreferrer">📍 Google Maps</a>` : ""}
          </div>
        </div>
      `).join("")}
    </div>
  `).join("");
}

// Intercept openModal to auto-render musteat list
const _origOpenModal = openModal;
window.openModal = function(type) {
  _origOpenModal(type);
  if (type === "musteat") renderMustEatList();
};

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register(`./sw.js?v=${Date.now()}`)
      .then((registration) => registration.update())
      .catch(() => {});
  });
}
