const mapLink = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const days = [
  {
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
    date: "7/24",
    weekday: "星期五",
    tag: "city",
    filter: "city",
    title: "大濠公園、天神 GU 與 Shin Shin",
    route: "地鐵 + 公車",
    items: [
      ["08:30", "大濠公園晨走", "早上湖邊比較涼，適合慢步調。", "Ohori Park Fukuoka", "住宿 → 大濠公園：地鐵約 25-35 分鐘，計程車約 20-30 分鐘。"],
      ["10:30", "福岡城跡與舞鶴公園", "短距離散步，視體力增減。", "Fukuoka Castle Ruins", "大濠公園 → 福岡城跡：步行約 10-15 分鐘。"],
      ["13:30", "Mina Tenjin GU", "安排你們愛逛的 GU，天神店位置順。", "GU Tenjin Mina Tenjin Fukuoka", "福岡城跡 → Mina Tenjin：地鐵/公車約 15-25 分鐘，計程車約 10-15 分鐘。"],
      ["15:30", "天神地下街與 UQ 備案", "逛街避暑，若要找 UQ 可改去博多丸井 au Style。", "au Style HAKATA UQ mobile Hakata Marui", "Mina Tenjin → 天神地下街：步行約 5-10 分鐘；若去博多丸井，地鐵約 10-15 分鐘。"],
      ["18:00", "Hakata Ramen Shin Shin 天神本店", "第二間拉麵：熱門博多豚骨，建議避開正餐尖峰。", "Hakata Ramen Shin Shin Tenjin Honten", "天神地下街 → Shin Shin 天神本店：步行約 8-12 分鐘。"]
    ]
  },
  {
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
    date: "7/28",
    weekday: "星期二",
    tag: "departure",
    filter: "relax",
    title: "退房、寄物與返台",
    route: "計程車 + 地鐵",
    items: [
      ["06:00-11:00", "LuxurySweet East71 退房", "依住宿規定完成退房，行李可寄博多站或直接放機場。", "1 Chome-41-41 Hakozaki Higashi Ward Fukuoka 812-0053 Japan", "住宿內整理：預留 30-60 分鐘退房與叫車。"],
      ["11:30", "博多站午餐與最後採買", "選擇車站周邊，避免離機場太遠。", "Hakata Station", "住宿 → 博多站：地鐵/計程車約 15-25 分鐘。"],
      ["14:00", "KITTE 博多 / 博多丸井 UQ 備案", "若還有通訊或採買需求，最後集中在博多站處理。", "au Style HAKATA UQ mobile Hakata Marui", "博多站 → KITTE/博多丸井：站體連通，步行約 3-8 分鐘。"],
      ["16:30", "前往福岡機場", "國際線建議保守抓 2 小時以上報到時間。", "Fukuoka Airport International Terminal", "博多站 → 福岡機場國際線：地鐵+接駁約 20-35 分鐘，計程車約 15-25 分鐘。"],
      ["19:10", "CI129 福岡起飛", "20:35 抵達台北桃園第 2 航廈。", "Fukuoka Airport International Terminal", "機場報到/安檢/登機：建議預留 2 小時以上。"]
    ]
  }
];

const dayContainer = document.querySelector("#days");
const filterButtons = document.querySelectorAll(".filter");
const viewPanels = document.querySelectorAll(".view-panel");
const viewLinks = document.querySelectorAll("[data-view-link]");

function showView(viewName, updateHash = true) {
  viewPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.view === viewName);
  });

  viewLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.viewLink === viewName);
  });

  if (updateHash) {
    history.replaceState(null, "", `#${viewName}`);
  }

  window.scrollTo({ top: 0, behavior: "auto" });
}

function renderDays(filter = "all") {
  const visibleDays = filter === "all" ? days : days.filter((day) => day.filter === filter);

  dayContainer.innerHTML = visibleDays
    .map(
      (day) => `
        <article class="day-card">
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
      `
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderDays(button.dataset.filter);
  });
});

renderDays();

viewLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showView(link.dataset.viewLink);
  });
});

const initialView = location.hash.replace("#", "");
if (["overview", "itinerary", "transport", "booking"].includes(initialView)) {
  showView(initialView, false);
} else {
  showView("overview", false);
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
