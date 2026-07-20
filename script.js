const mapLink = (query) =>
  /^https?:\/\//i.test(query)
    ? query
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const placeImage = (slug) =>
  ["boss-ezo", "teamlab-forest", "funpass-meal", "lopia", "pain-stock", "mark-is-momochi", "mojiko-observatory", "kyushu-national-museum", "kyushu-railway-museum", "mojiko-curry", "nanzoin-buddha", "kumamoto-castle"].includes(slug)
    ? `./assets/place-images/${slug}.png`
    : `./assets/place-images/${slug}.jpg`;

function imageForPlace(title, query) {
  const text = `${title} ${query}`;
  const rules = [
    [/桃園|Taoyuan/i, "taoyuan-airport"],
    [/福岡機場|Fukuoka Airport/i, "fukuoka-airport"],
    [/LuxurySweet|Hakozaki 812-0053/i, "./assets/hotel.jpg"],
    [/Pain Stock/i, "pain-stock"],
    [/MaxValu 箱崎|Hakozaki Miyamae/i, "maxvalu-hakozaki"],
    [/Hakozaki/i, "maxvalu-hakozaki"],
    [/麵包超人|Anpanman/i, "./assets/place-images/bread.jpg"],
    [/櫛田|Kushida/i, "kushida"],
    [/Full Full/i, "fishbread"],
    [/一蘭|Ichiran/i, "noodle"],
    [/Canal City/i, "canal-city"],
    [/西鐵福岡天神|Nishitetsu|Tenjin Station/i, "tenjin-station"],
    [/太宰府|Dazaifu/i, "dazaifu"],
    [/九州國立|Kyushu National/i, "kyushu-national-museum"],
    [/teamLab|teamLab Forest/i, "teamlab-forest"],
    [/餐點任選|FunPASS 深度體驗/i, "funpass-meal"],
    [/BOSS E.?ZO|PayPay Dome|MLB cafe|Fire Hall|WAKABA|Danbo Ramen/i, "boss-ezo"],
    [/福岡塔|Fukuoka Tower/i, "fukuoka-tower"],
    [/Kokura Castle Garden/i, "kokura-castle"],
    [/門司港懷舊展望室|Mojiko Retro Observatory/i, "mojiko-observatory"],
    [/門司港燒咖哩|蜜蜂咖哩|Mojiko Curry/i, "mojiko-curry"],
    [/九州鐵道|Kyushu Railway/i, "kyushu-railway-museum"],
    [/門司港|Mojiko|Moji Port/i, "mojiko-retro"],
    [/小倉城|Kokura Castle/i, "kokura-castle"],
    [/博多站|Hakata Station/i, "hakata-station"],
    [/大濠|Ohori/i, "ohori-park"],
    [/福岡城|Fukuoka Castle/i, "fukuoka-castle"],
    [/Mina Tenjin|GU Tenjin/i, "mina-tenjin"],
    [/天神地下|Hakata Marui|UQ/i, "tenjin-underground"],
    [/Shin.Shin|ShinShin/i, "shinshin"],
    [/筑前前原|Chikuzen/i, "chikuzen-maebaru"],
    [/櫻井二見浦|Sakurai Futamigaura/i, "sakuraifutamigaura"],
    [/糸島海景|Itoshima beach/i, "itoshima-cafe"],
    [/MARK IS|Momochi/i, "mark-is-momochi"],
    [/能古渡船|Meinohama/i, "meinohama-ferry"],
    [/能古島|Nokonoshima/i, "nokonoshima"],
    [/LaLaport/i, "./assets/place-images/lalaport-gundam.png"],
    [/南藏院|Nanzoin/i, "nanzoin-buddha"],
    [/熊本|Kumamoto/i, "kumamoto-castle"],
    [/Lopia/i, "lopia"],
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
    title: "抵達福岡 · 箱崎放行李 · Lopia 採買晚餐",
    route: "計程車 / 地鐵",
    items: [
      ["14:40", "CI128 桃園起飛", "桃園國際機場第 2 航廈。", "Taoyuan International Airport Terminal 2", "從台北市區到桃園機場：約 40-70 分鐘，依出發地與交通方式調整。"],
      ["18:05", "抵達福岡機場", "國際線入境後領行李，4 人建議直接搭計程車前往箱崎住宿。", "Fukuoka Airport International Terminal", "飛行時間：約 2 小時 25 分鐘。"],
      ["19:00", "🏨 先前往 LuxurySweet East71 放行李", "車程約 15-25 分鐘，先回民宿放行李與辦理 Check-in。", "Modern Palazzo Hakozaki grace 701 1-41-22 Hakozaki Higashi Ward Fukuoka 812-0053 Japan", "福岡機場國際線 → 箱崎住宿：計程車約 15-25 分鐘。"],
      ["19:35", "🛒 博多站兌換 JR Pass & Lopia 採買晚餐", "先至 JR 博多站綠色窗口兌換 7/23-7/25 JR Pass 並預先劃位去程班次（熊本新幹線與門司港特急），再至 Yodobashi 4 樓 Lopia 採買晚餐（留意 20:00 結束營業）。", "JR Hakata Station", "箱崎 → 博多：計程車或地鐵約 15 分鐘。"],
      ["20:30", "🏠 返回箱崎住宿享用晚餐與休息", "帶回 Lopia 豐盛熟食與飲料，在民宿舒適享用第一晚晚餐。", "LuxurySweet East71 Hakozaki", "博多 → 箱崎：地鐵或計程車約 15 分鐘。"]
    ]
  },
  {
    isoDate: "2026-07-22",
    date: "7/22",
    weekday: "星期三",
    tag: "city",
    filter: "city",
    title: "櫛田神社 · 麵包超人博物館 · 運河城 · 國產牛燒肉",
    route: "地鐵 + 步行",
    items: [
      ["09:00", "🍽️ 早餐：Pain Stock 箱崎本店", "先吃福岡名物明太法國麵包，離住宿區不遠。", "pain stock Hakozaki Fukuoka", "住宿 → Pain Stock：步行或計程車約 8-12 分鐘。"],
      ["10:00", "🏛️ 櫛田神社", "福岡歷史悠久的守護神，參觀巨大的山笠，安排短暫參拜。", "Kushida Shrine Fukuoka", "Pain Stock → 櫛田神社：步行或地鐵約 20 分鐘。"],
      ["10:45", "🎈 麵包超人博物館", "在博多Riverain逛福岡麵包超人兒童博物館，預留約2.5小時。", "Fukuoka Anpanman Children's Museum", "櫛田神社 → 博多Riverain：步行約 7-10 分鐘。"],
      ["13:30", "🍞 備選：THE FULL FULL HAKATA／運河城周邊午餐", "先看博多店現場排隊狀況；隊伍可接受就吃 Full Full，排太久就改到運河城附近用餐。", "THE FULL FULL HAKATA Fukuoka", "麵包超人博物館 → Full Full／運河城：步行約 5-10 分鐘。"],
      ["15:00", "博多運河城逛街", "逛街避暑，有各大品牌與 UQ Mobile 門市。", "au Canal City Hakata UQ mobile", "運河城周邊午餐 → 博多運河城：步行約 5 分鐘。"],
      ["18:00", "🍽️ 晚餐：國產牛燒肉 (ワンカルビ PREMIUM 天神店)", "第二晚大餐：品嚐美味的國產牛燒肉吃到飽 (建議提前預約)。", "ワンカルビ PREMIUM 天神", "運河城 → 天神：地鐵或步行約 10-15 分鐘。"],
      ["20:30", "MaxValu 箱崎宮前補給 / 返回住宿", "補給零食飲料後回住宿休息，整理明後天行程。", "MaxValu Hakozaki Miyamae Fukuoka", "地鐵或步行約 15 分鐘。"]
    ]
  },
  {
    isoDate: "2026-07-23",
    date: "7/23",
    weekday: "星期四",
    tag: "daytrip",
    filter: "daytrip",
    title: "門司港 · 九州鐵道紀念館 · 小倉城",
    route: "順路安排",
    items: [
      ["10:00", "🏛️ 門司港懷舊展望室（FunPASS 必遊景點）", "從高處欣賞門司港、關門海峽與懷舊街區。", "Mojiko Retro Observatory", ""],
      ["11:30", "🏛️ 九州鐵道紀念館（FunPASS 必遊景點）", "參觀九州鐵道歷史與車輛展示，適合和門司港一起安排。", "Kyushu Railway History Museum Mojiko", ""],
      ["13:00", "🍽️ 午餐：門司港燒咖哩（蜜蜂咖哩）", "在門司港商圈享用名物燒咖哩，再前往小倉。", "https://maps.app.goo.gl/oFG3Eu8K9ziopYkJA", ""],
      ["15:00", "🏯 小倉城（FunPASS 必遊景點）", "參觀小倉城天守閣，完成 FunPASS 五個必遊景點。", "Kokura Castle", ""]
    ]
  },
  {
    isoDate: "2026-07-24",
    date: "7/24",
    weekday: "星期五",
    tag: "daytrip",
    filter: "daytrip",
    title: "熊本一日遊 · 熊本城 · 城彩苑 · 酷麻萌廣場",
    route: "新幹線 + 市電 + 步行",
    items: [
      ["08:30", "🚄 博多站搭乘新幹線前往熊本", "搭乘九州新幹線（約 35-40 分鐘）輕鬆抵達 JR 熊本站。", "Hakata Station", "箱崎 → 博多：地鐵約 15 分鐘；博多 → 熊本：新幹線約 35-40 分鐘。"],
      ["09:30", "🏯 熊本城參觀 (天守閣與石垣)", "日本三大名城之一，參觀重建完成的壯觀天守閣與歷史石垣。", "Kumamoto Castle", "熊本站前搭乘熊本市電至「熊本城・二之丸駐車場」或「市役所前」步行前往。"],
      ["12:00", "🍡 午餐：櫻之馬場 城彩苑", "在江戶城下町風格的商圈品嚐熊本特色美食（勝烈亭炸豬排、阿蘇赤牛丼、馬肉料理與阿蘇牛奶冰淇淋）。", "Sakura no Baba Josaien", "熊本城天守閣 → 城彩苑：步行約 5-10 分鐘。"],
      ["14:00", "🐻 酷麻萌廣場 (Kumamon Square)", "造訪部長辦公室，見可愛的熊本熊部長，採購限定周邊商品。", "Kumamon Square Kumamoto", "城彩苑 → 酷麻萌廣場：搭乘市電至「水道町」站步行約 3 分鐘。"],
      ["16:00", "🛍️ 上通 / 下通商店街散策 & 熊本拉麵", "熊本最繁華的拱廊購物街散步逛街，晚餐品嚐香濃焦香蒜油的熊本拉麵（黑亭 / 桂花）。", "Shimotori Shopping Arcade Kumamoto", "酷麻萌廣場 → 下通商店街：步行約 3 分鐘。"],
      ["18:30", "🚄 搭乘新幹線返回博多 / 回箱崎", "搭乘新幹線順暢返回博多站，可在博多站逛街或直接返回箱崎休息。", "Kumamoto Station", "熊本站 → 博多站：新幹線約 35-40 分鐘。"]
    ]
  },
  {
    isoDate: "2026-07-25",
    date: "7/25",
    weekday: "星期六",
    tag: "daytrip",
    filter: "daytrip",
    title: "南藏院臥佛 · LaLaport 購物日",
    route: "JR + 步行",
    items: [
      ["09:30", "🏛️ 南藏院臥佛參拜", "參拜世界最大的青銅涅槃佛，感受莊嚴與寧靜。", "Nanzoin Temple Fukuoka", "住宿 → 城戶南藏院前站：JR 約 25-35 分鐘；車站 → 南藏院步行約 3-5 分鐘。"],
      ["14:00", "🛍️ LaLaport 福岡・Side-F 鋼彈", "逛實物大 ν 鋼彈、GUNDAM SIDE-F、服飾與生活雜貨；可在商場內晚餐後再回箱崎。", "LaLaport Fukuoka", "南藏院 → 博多站轉乘 JR 至竹下站，再步行約 9 分鐘；或從博多站搭直達巴士。"]
    ]
  },
  {
    isoDate: "2026-07-26",
    date: "7/26",
    weekday: "星期日",
    tag: "city",
    filter: "city",
    title: "大濠公園 · teamLab · 福岡塔 · 百道",
    route: "地鐵 + 步行",
    items: [
      ["09:00", "🏛️ 大濠公園散步", "福岡市中心的美麗湖泊，早晨涼爽適合散步。", "Ohori Park Fukuoka", "住宿 → 大濠公園：地鐵約 25-35 分鐘。"],
      ["11:30", "🏛️ teamLab Forest（FunPASS 精選景點）", "沉浸式互動展覽，安排在 BOSS E・ZO FUKUOKA。", "teamLab Forest Fukuoka", "大濠公園 → BOSS E・ZO：地鐵＋步行約 25-35 分鐘。"],
      ["13:30", "🍽️ 四人 FunPASS 深度體驗：餐點任選", "四人各自使用一張 FunPASS，每人可選一份：MLB cafe 漢堡／Fire Hall 4000 炒飯／Tonkatsu WAKABA 炸豬排／Danbo Ramen 拉麵。", "BOSS EZO Fukuoka", "teamLab Forest → BOSS E・ZO 3 樓餐飲區：館內移動。"],
      ["15:30", "🏛️ 福岡塔（FunPASS 必遊景點）", "從地行濱前往百道，登塔欣賞博多灣與福岡市景。", "Fukuoka Tower", "BOSS E・ZO → 福岡塔：計程車約 10 分鐘，或公車約 15-25 分鐘。"],
      ["17:00", "百道海濱公園＋MARK IS 散步", "把福岡塔、海濱與商場排在同一天，今天不再折返其他區域。", "MARK IS Fukuoka Momochi", "福岡塔 → 百道海濱／MARK IS：步行約 5-10 分鐘。"],
      ["18:30", "🍽️ 晚餐：百道或天神", "依四人體力在百道用餐，或搭地鐵回天神。", "MARK IS Fukuoka Momochi restaurant", "百道地區步行。"]
    ]
  },
  {
    isoDate: "2026-07-27",
    date: "7/27",
    weekday: "星期一",
    tag: "daytrip",
    filter: "daytrip",
    title: "太宰府天滿宮 · 一蘭 · Full Full 天神店",
    route: "地鐵 + 西鐵 + 步行",
    items: [
      ["09:00", "🏛️ 太宰府天滿宮＋參道散策", "避開最炎熱的正午，早點前往參道漫步，吃梅枝餅，參觀天滿宮。", "Dazaifu Tenmangu", "住宿 → 太宰府：西鐵約 50-60 分鐘。"],
      ["11:30", "🏛️ 九州國立博物館（FunPASS 必遊景點）", "參觀九州國立博物館，和太宰府排在同一天最順路。", "Kyushu National Museum Dazaifu", "太宰府天滿宮 → 九州國立博物館：步行約 10-15 分鐘。"],
      ["13:30", "🍜 午餐：一蘭太宰府參道店", "在太宰府參道吃一蘭，還可以品嚐太宰府限定的合格梅拉麵。", "Ichiran Dazaifu Sando", "九州國立博物館 → 一蘭太宰府參道店：步行約 10-15 分鐘。"],
      ["15:00", "🍞 FULL FULL 天神店", "改去天神店買明太子法國麵包，避開博多店較誇張的排隊人潮。", "FULL FULL Tenjin Fukuoka", "一蘭太宰府參道店 → 天神店：西鐵約 40-50 分鐘。"],
      ["16:00", "天神商圈逛街 + Mina 天神、PARCO", "搭西鐵返回天神後，逛福岡PARCO與Mina天神。", "福岡PARCO", "Full Full 天神店 → Mina／PARCO：步行約 5-10 分鐘。"],
      ["18:30", "🍽️ 晚餐：天神商圈美食（博多牛腸鍋 / 水瀧鍋 / 地元名物）", "在天神商圈享用福岡特產牛腸鍋或水瀧鍋大餐。", "Tenjin Station Fukuoka", "天神商圈步行。"]
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
      ["06:00-11:00", "LuxurySweet East71 退房", "退房後叫計程車或地鐵前往博多站置物。", "Modern Palazzo Hakozaki grace 701 1-41-22 Hakozaki Higashi Ward Fukuoka 812-0053 Japan", "箱崎 → 博多站：計程車或地鐵約 15-20 分鐘。"],
      ["11:30", "福岡機場商店與免稅店逛街", "退房後提早到機場，逛國際線商店、免稅店並吃午餐。", "Fukuoka Airport International Terminal", "箱崎 → 福岡機場國際線：計程車或地鐵約 25-35 分鐘。"],
      ["16:30", "國際線報到與登機準備", "完成報到、托運行李與最後採買，準備搭乘晚班機。", "Fukuoka Airport International Terminal", "機場航廈內移動。"],
      ["19:10", "CI129 福岡起飛", "搭乘華航班機返回台灣，預計 20:35 抵達桃園。", "Fukuoka Airport International Terminal", "飛行時間約 2 小時 25 分鐘。"]
    ]
  }
];

const dayContainer = document.querySelector("#days");
const dateTabBar = document.querySelector("#date-tab-bar");
const dayCounterEl = document.querySelector("#day-counter");
const overviewSection = document.querySelector("#overview");
const itinerarySection = document.querySelector("#itinerary");
const overviewGrid = document.querySelector("#overview-grid");
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

function formatDayTag(tag) {
  return {
    city: "市區",
    daytrip: "一日遊",
    arrival: "抵達",
    departure: "返程"
  }[tag] || tag;
}

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
        <span class="tag">${formatDayTag(day.tag)}</span>
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
                      ${transfer ? `<span class="transfer">${transfer}</span>` : ""}
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

function renderOverview() {
  if (!overviewGrid) return;
  overviewGrid.innerHTML = days.map((day, index) => {
    const highlights = day.items.map(([time, title]) => `
      <li><time>${time}</time><span>${title}</span></li>
    `).join("");
    return `
      <article class="overview-card">
        <div class="overview-card-top">
          <div class="overview-date"><strong>${day.date}</strong><span>${day.weekday}</span></div>
          <span class="overview-tag">${formatDayTag(day.tag)}</span>
        </div>
        <h3>${day.title}</h3>
        <ul class="overview-highlights">${highlights}</ul>
        <button type="button" class="overview-card-link" onclick="openDayFromOverview(${index})">查看這天詳細行程 →</button>
      </article>
    `;
  }).join("");
}

function toggleOverview(showOverview = null) {
  const shouldShowOverview = showOverview === null
    ? overviewSection?.classList.contains("is-hidden")
    : showOverview;
  overviewSection?.classList.toggle("is-hidden", !shouldShowOverview);
  itinerarySection?.classList.toggle("is-hidden", shouldShowOverview);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openDayFromOverview(index) {
  selectDayByIndex(index);
  toggleOverview(false);
}

// Init itinerary
currentDayIndex = getActiveDateIndex();
if (dayCounterEl) dayCounterEl.textContent = `DAY ${currentDayIndex + 1} / ${days.length}`;
renderOverview();
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
    ja: "〒812-0053 福岡県福岡市東区箱崎1-41-22 Modern Palazzo 箱崎grace 701",
    en: "Modern Palazzo Hakozaki grace 701, 1-41-22 Hakozaki, Higashi Ward, Fukuoka, 812-0053 Japan"
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
      if (btn.dataset.customIndex !== undefined) {
        const idx = parseInt(btn.dataset.customIndex, 10);
        deleteCustomPackingItem(idx, customItems[idx]);
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
      { name: "一蘭拉麵（太宰府參道店）", note: "太宰府限定合格梅拉麵，7/27 午餐已安排", planned: true },
      { name: "Shin-Shin 博多拉麵（KITTE 博多）", note: "清爽豚骨拉麵，可安排在博多站路過 KITTE 時享用", planned: false },
      { name: "賀茂山拉麵（天神/博多周邊）", note: "博多最小的豐盛拉麵，很小家 ⚠️ 延長小吃", planned: false },
      { name: "房山拉麵（箱崎周邊）", note: "濃螺山拉麵，住宿附近可就近享用", planned: false }
    ]
  },
  {
    category: "🥐 麵包 & 可頌",
    items: [
      { name: "Pain Stock 明太法國麵包（箱崎本店）", note: "福岡代表麵包，7/22 早餐已安排", planned: true },
      { name: "FULL FULL 天神店 明太子麵包", note: "避開博多店排隊，7/27 天神已安排", planned: true },
      { name: "梅枝餅（太宰府參道）", note: "太宰府道上的必吃和果黃豆餅，7/27 享用", planned: true },
      { name: "il FORNO del Mignon ミニヨン 迷你可頌（博多站 1F）", note: "博多站 JR 中央口旁，現烤迷你可頌秤重賣🥐 外酥內軟超好吃！07:00–23:00，路過必買！", planned: false, mapUrl: "https://maps.app.goo.gl/768Hd1ee5qmcVgmG6" },
      { name: "Dacomecca", note: "博多站附近的人氣麵包店，適合在博多站行程時順路外帶", planned: false }
    ]
  },
  {
    category: "🥩 燒肉 / 居酒屋",
    items: [
      { name: "國產牛燒肉 ワンカルビ PREMIUM（天神）", note: "一定要預約！吃到飽展。絡 7/22 晚餐已安排", planned: true },
      { name: "地元居酒屋八起 (Yaoki)（箱崎）", note: "第一晚抵達就近吃，平價奇醐地元居酒屋", planned: false },
      { name: "箱崎站前食堂（Hakozaki Ekimae Shokudo）", note: "住宿區附近的定食選擇，想吃家常日式料理時可備選", planned: false }
    ]
  },
  {
    category: "🏛️ 體驗與景點",
    items: [
      { name: "明太子 DIY 博多飲食文化博物館", note: "可親手製作明太子，須另確認場次與預約；適合排在博多站／機場周邊的彈性時段", planned: false }
    ]
  },
  {
    category: "🛒 超市採買",
    items: [
      { name: "LUMIERE", note: "平價超市，可作為 LOPIA、MaxValu 之外的採買備選", planned: false }
    ]
  },
  {
    category: "🍡 小吃 & 甜點",
    items: [
      { name: "明太子鯛魚燒（博多周邊）", note: "明太口味魚燒，隨處可山", planned: false },
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
