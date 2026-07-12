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
    [/Pain Stock/i, "pain-stock"],
    [/麵包超人|Anpanman/i, "./assets/place-images/bread.jpg"],
    [/櫛田|Kushida/i, "kushida"],
    [/Full Full/i, "fullfull-hakata"],
    [/Canal City|一蘭|Ichiran/i, "canal-city"],
    [/西鐵福岡天神|Nishitetsu|Tenjin Station/i, "tenjin-station"],
    [/太宰府|Dazaifu/i, "dazaifu"],
    [/九州國立|Kyushu National/i, "kyushu-museum"],
    [/博多站|Hakata Station/i, "hakata-station"],
    [/大濠|Ohori/i, "ohori-park"],
    [/福岡城|Fukuoka Castle/i, "fukuoka-castle"],
    [/Mina Tenjin|GU Tenjin/i, "mina-tenjin"],
    [/天神地下|Hakata Marui|UQ/i, "tenjin-underground"],
    [/Shin Shin/i, "shinshin"],
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
    [/KITTE/i, "hakata-station"]
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
      ["19:00", "前往 LuxurySweet East71", "車程約 15-25 分鐘，視入境與車流調整。", "1 Chome-41-41 Hakozaki Higashi Ward Fukuoka 812-0053 Japan", "福岡機場國際線 → 箱崎住宿：計程車約 15-25 分鐘。"],
      ["20:00", "MaxValu 箱崎宮前補給", "第一晚買水、早餐、零食，回住宿整理。", "MaxValu Hakozaki Miyamae Fukuoka", "住宿 → MaxValu 箱崎宮前：步行約 5-8 分鐘。"]
    ]
  },
  {
    isoDate: "2026-07-22",
    date: "7/22",
    weekday: "星期三",
    tag: "city",
    filter: "city",
    title: "箱崎麵包、博多與 Canal City",
    route: "地鐵 + 步行",
    items: [
      ["09:00", "Pain Stock 箱崎本店", "先吃福岡名物明太法國麵包，離住宿區不遠。", "pain stock Hakozaki Fukuoka", "住宿 → Pain Stock：步行或計程車約 8-12 分鐘。"],
      ["10:00", "福岡麵包超人兒童博物館", "中洲川端站直通，通常 10:00-17:00，最後入場 16:00。", "Fukuoka Anpanman Children's Museum in Mall", "Pain Stock → 麵包超人博物館：地鐵+步行約 20-30 分鐘，計程車約 15-20 分鐘。"],
      ["12:30", "川端商店街與櫛田神社", "博物館後往川端、櫛田神社慢慢走。", "Kushida Shrine Fukuoka", "麵包超人博物館 → 川端/櫛田神社：步行約 8-12 分鐘。"],
      ["14:00", "The Full Full Hakata", "第二間明太子麵包備選，靠近 Canal City。", "THE FULL FULL HAKATA Fukuoka", "櫛田神社 → The Full Full Hakata：步行約 8-12 分鐘。"],
      ["15:00", "Canal City + au/UQ 取扱店", "逛街、避暑，也可處理 UQ 相關需求。", "au Canal City Hakata UQ mobile", "The Full Full Hakata → Canal City：步行約 5-8 分鐘。"],
      ["18:00", "Ichiran Canal City Hakata", "第一間拉麵：Canal City 地下的一蘭。", "Ichiran Canal City Hakata", "Canal City 館內移動：約 3-8 分鐘。"]
    ]
  },
  {
    isoDate: "2026-07-23",
    date: "7/23",
    weekday: "星期四",
    tag: "daytrip",
    filter: "daytrip",
    title: "太宰府天滿宮與九州國立博物館",
    route: "地鐵 + 西鐵",
    items: [
      ["08:45", "西鐵福岡天神站出發", "避開正午炎熱，早點到參道比較舒服。", "Nishitetsu Fukuoka Tenjin Station", "住宿 → 西鐵福岡天神站：地鐵約 20-30 分鐘，計程車約 15-25 分鐘。"],
      ["10:00", "太宰府天滿宮與參道", "梅枝餅、伴手禮、小店慢逛。", "Dazaifu Tenmangu", "天神 → 太宰府：西鐵約 35-45 分鐘，含轉乘抓約 50-60 分鐘。"],
      ["12:30", "九州國立博物館", "午後轉室內，減少曝曬。", "Kyushu National Museum", "太宰府天滿宮 → 九州國立博物館：步行約 8-12 分鐘。"],
      ["17:30", "博多站超市補貨", "回程在站內或周邊買水果、飲料、宵夜。", "MaxValu Express Hakata Ekiminami Fukuoka", "九州國立博物館 → 博多站周邊：西鐵+地鐵約 55-70 分鐘。"]
    ]
  },
  {
    isoDate: "2026-07-24",
    date: "7/24",
    weekday: "星期五",
    tag: "city",
    filter: "city",
    title: "大濠公園、天神 GU 與 Shin Shin",
    route: "地鐵 + 公車",
    items: [
      ["08:30", "大濠公園晨走", "早上湖邊比較涼，適合慢步調。", "Ohori Park Fukuoka", "住宿 → 大濠公園：地鐵約 25-35 分鐘，計程車約 20-30 分鐘。"],
      ["10:30", "福岡城跡與舞鶴公園", "短距離散步，視體力增減。", "Fukuoka Castle Ruins", "大濠公園 → 福岡城跡：步行約 10-15 分鐘。"],
      ["13:30", "Mina Tenjin GU", "安排你們愛逛的 GU，天神店位置順。", "https://www.google.com/maps/place/GU+Mina+Tenjin/@33.5929786,130.3957987,17z/data=!3m2!4b1!5s0x3541918e7b649f07:0x3316f504ccb6ecd0!4m6!3m5!1s0x354191e961936f35:0x5303711a154af99e!8m2!3d33.5929742!4d130.3983736!16s%2Fg%2F11st7clcrm?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D", "福岡城跡 → Mina Tenjin：地鐵/公車約 15-25 分鐘，計程車約 10-15 分鐘。"],
      ["15:30", "天神地下街與 UQ 備案", "逛街避暑，若要找 UQ 可改去博多丸井 au Style。", "au Style HAKATA UQ mobile Hakata Marui", "Mina Tenjin → 天神地下街：步行約 5-10 分鐘；若去博多丸井，地鐵約 10-15 分鐘。"],
      ["18:00", "Shin-Shin 博多拉麵 KITTE博多店", "在 KITTE 博多享用人氣博多豚骨拉麵；晚餐時段可能需要排隊。", "Shin-Shin Hakata Ramen KITTE Hakata", "博多丸井／UQ 店 → KITTE 博多店：步行約 3–8 分鐘。"]
    ]
  },
  {
    isoDate: "2026-07-25",
    date: "7/25",
    weekday: "星期六",
    tag: "daytrip",
    filter: "daytrip",
    title: "糸島海岸半日小旅行",
    route: "JR + 計程車",
    items: [
      ["09:00", "筑前前原站", "從博多或天神轉 JR，抵達後用計程車串點。", "Chikuzen-Maebaru Station", "住宿 → 筑前前原站：地鐵/JR 約 55-75 分鐘。"],
      ["10:30", "櫻井二見浦夫婦岩", "海邊拍照，注意防曬與補水。", "Sakurai Futamigaura Couple Stones", "筑前前原站 → 櫻井二見浦：計程車約 20-30 分鐘。"],
      ["12:00", "糸島海景午餐", "熱門店建議先預約，或保留備案咖啡。", "Itoshima beach cafe lunch", "櫻井二見浦 → 海景午餐店：計程車約 10-20 分鐘，依餐廳位置調整。"],
      ["15:30", "MARK IS 福岡百道", "天候不佳時改成室內商場與 teamLab Forest。", "MARK IS Fukuoka Momochi", "糸島 → MARK IS 福岡百道：JR/地鐵+公車約 60-80 分鐘，計程車約 40-60 分鐘。"]
    ]
  },
  {
    isoDate: "2026-07-26",
    date: "7/26",
    weekday: "星期日",
    tag: "relax",
    filter: "relax",
    title: "能古島或 LaLaport 購物備案",
    route: "公車 + 渡輪",
    items: [
      ["09:30", "能古渡船場", "天氣穩定就搭船到能古島，慢慢散步看海。", "Meinohama Ferry Terminal Noko Island", "住宿 → 能古渡船場：地鐵+公車約 50-65 分鐘，計程車約 30-45 分鐘。"],
      ["11:00", "能古島 Island Park", "夏天注意遮陽，也可只排半日。", "Nokonoshima Island Park", "渡船場 → 能古島 Island Park：渡輪約 10 分鐘，島上巴士約 13 分鐘，含等待抓 30-45 分鐘。"],
      ["15:30", "LaLaport Fukuoka GU", "若天氣不好，整天可改成 LaLaport，裡面也有 GU。", "GU LaLaport Fukuoka", "能古島 → LaLaport：渡輪+公車/地鐵約 70-90 分鐘；雨天直接從住宿到 LaLaport 約 25-40 分鐘。"],
      ["17:30", "LaLaport 超市補給", "採買晚餐、飲料與伴手禮零食。", "LaLaport Fukuoka supermarket", "LaLaport 館內移動：約 5-10 分鐘。"]
    ]
  },
  {
    isoDate: "2026-07-27",
    date: "7/27",
    weekday: "星期一",
    tag: "daytrip",
    filter: "daytrip",
    title: "南藏院臥佛與最後採買",
    route: "JR + 地鐵",
    items: [
      ["08:45", "博多搭 JR 前往城戶南藏院前", "車站到寺院步行約 3 分鐘。", "Hakata Station JR", "住宿 → 博多站：地鐵/計程車約 15-25 分鐘。"],
      ["09:30", "南藏院參拜", "佛像區 9:00-17:00，早上安排最穩。", "Nanzoin Temple Fukuoka", "博多站 → 城戶南藏院前：JR 約 20-30 分鐘；下車步行約 3-5 分鐘。"],
      ["13:30", "博多 Yodobashi GU", "回博多後補一段 GU 與電器賣場時間。", "GU Yodobashi Hakata", "南藏院 → 博多 Yodobashi：JR 回博多約 25-35 分鐘，出站步行約 5-8 分鐘。"],
      ["16:00", "博多站最後採買", "藥妝、食品、伴手禮，晚上整理行李。", "Hakata Station souvenir shopping", "Yodobashi Hakata → 博多站商圈：步行約 5-10 分鐘。"],
      ["18:00", "Sunny 或 MaxValu 晚間補貨", "最後補水、早餐、零食，回住宿打包。", "Sunny supermarket Hakata Fukuoka", "博多站 → 超市/住宿周邊：地鐵或計程車約 15-25 分鐘。"]
    ]
  },
  {
    isoDate: "2026-07-28",
    date: "7/28",
    weekday: "星期二",
    tag: "departure",
    filter: "relax",
    title: "退房、寄物與返台",
    route: "計程車 + 地鐵",
    items: [
      ["06:00-11:00", "LuxurySweet East71 退房", "依住宿規定完成退房，行李可寄博多站或直接放機場。", "1 Chome-41-41 Hakozaki Higashi Ward Fukuoka 812-0053 Japan", "住宿內整理：預留 30-60 分鐘退房與叫車。"],
      ["11:30", "博多站午餐與最後採買", "選擇車站周邊，避免離機場太遠。", "Hakata Station", "住宿 → 博多站：地鐵/計程車約 15-25 分鐘。"],
      ["14:00", "購物中心 KITTE 博多", "回程前到 KITTE 博多逛街、採買；若有通訊需求可順道前往博多丸井 au Style。", "https://www.google.com/maps/place/購物中心KITTE/@33.5888023,130.4168701,17z/data=!4m2!3m1!1s0x354191b86e6aaaab:0x887b4281aae84f78?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D", "博多站 → KITTE 博多：站體連通，步行約 3–8 分鐘。"],
      ["16:30", "前往福岡機場", "國際線建議保守抓 2 小時以上報到時間。", "Fukuoka Airport International Terminal", "博多站 → 福岡機場國際線：地鐵+接駁約 20-35 分鐘，計程車約 15-25 分鐘。"],
      ["19:10", "CI129 福岡起飛", "20:35 抵達台北桃園第 2 航廈。", "Fukuoka Airport International Terminal", "機場報到/安檢/登機：建議預留 2 小時以上。"]
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
      renderPackingList();
      if (packingStatus) packingStatus.textContent = "已連結雲端清單。";
    }
  } catch {
    if (packingStatus) packingStatus.textContent = "雲端讀取失敗，暫用本機清單。";
  }
}

async function savePackingToCloud(state = getPackingState()) {
  if (!hasPackingCloud()) {
    return;
  }

  try {
    if (packingStatus) packingStatus.textContent = "正在同步雲端...";
    await fetch(PACKING_GAS_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        items: state,
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
}

function deleteCustomPackingItem(index, itemText) {
  const items = getCustomPackingItems();
  items.splice(index, 1);
  setCustomPackingItems(items);
  const state = getPackingState();
  delete state[`custom-${itemText}`];
  setPackingState(state);
  renderPackingList();
}

function renderPackingList() {
  if (!packingList) return;

  const state = getPackingState();
  const customItems = getCustomPackingItems();

  const builtInHTML = packingGroups.map((group) => `
    <div class="packing-group">
      <h4>${group.title}</h4>
      ${group.items.map((item) => {
        const id = `${group.title}-${item}`;
        return `<label class="packing-item">
          <input type="checkbox" data-pack-id="${id}" ${state[id] ? "checked" : ""} />
          <span>${item}</span>
        </label>`;
      }).join("")}
    </div>
  `).join("");

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
      const idx = parseInt(btn.dataset.customIndex, 10);
      deleteCustomPackingItem(idx, customItems[idx]);
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

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register(`./sw.js?v=${Date.now()}`)
      .then((registration) => registration.update())
      .catch(() => {});
  });
}
