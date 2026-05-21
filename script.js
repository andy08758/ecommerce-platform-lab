const platforms = [
  {
    name: "BVSHOP",
    category: "brand",
    badge: "品牌成長",
    annualFee: "約 NT$55,000/年",
    commission: "0% 全方案不抽成",
    trial: "30 天",
    shopee: "商品/庫存同步",
    logistics: "POS、庫存、倉儲串接依方案確認",
    memberPromo: "會員、追單、分潤、購物金與促銷活動依方案配置",
    omo: "專屬顧問團隊服務，協助規劃、設定與營運落地",
    visual: "部落格/內容導購、SEO、活動頁與數據分析",
    fit: "成長型品牌",
    strengths: [
      "來源文章列為全方案不抽成，適合營收成長後想降低抽成成本的品牌",
      "支援多元金物流、門市 POS、倉儲串接、直播與社群銷售情境",
      "適合把內容、商品、活動與數據分析整合成長期品牌資產",
    ],
    limits: [
      "若只想用最低成本測試商品，入門費用可能不是最低",
      "跨境與社群功能需依實際方案確認",
    ],
    summary: "最適合：想降低抽成，同時經營自有官網、門市 POS、倉儲、直播社群銷售與會員資料的成長型品牌。",
  },
  {
    name: "CYBERBIZ",
    category: "retail",
    badge: "OMO 整合",
    annualFee: "高手版+ NT$68,040/年；企業版 NT$43,000/年 + 一次性開辦費 NT$53,550",
    commission: "高手版+ 1%；企業版常見資料為 5%，實際依報價確認",
    trial: "30 天",
    shopee: "API/第三方串接確認",
    logistics: "智能 POS、倉儲物流、門市整合能力強",
    memberPromo: "會員、優惠、行銷自動化與 App Market 依方案",
    omo: "客服與導入服務依方案或合約確認",
    visual: "API/Webhook、擴充服務與客製串接彈性高",
    fit: "多門市 / 倉儲",
    strengths: [
      "來源文章強調購物網站、POS、倉儲物流與跨境電商一站式服務",
      "適合多通路與較複雜的營運流程",
      "可修改 HTML、CSS、JS，客製彈性較高",
    ],
    limits: [
      "費用與導入流程通常較重",
      "初期只想驗證商品市場時，可能顯得太完整",
    ],
    summary: "最適合：有實體零售、倉儲物流與多通路整合需求的中大型品牌。",
  },
  {
    name: "SHOPLINE",
    category: "social",
    badge: "市場龍頭",
    annualFee: "電商戰略家、全通路領航員約 NT$60,000–88,000/年",
    commission: "系統流量維護費，依方案約 1.5%–2% GMV",
    trial: "14 天",
    shopee: "Shopee/Lazada 通路方案",
    logistics: "POS、多店庫存、門市取貨依方案提供",
    memberPromo: "會員、優惠、LINE/FB/IG 社群購物成熟",
    omo: "客服、顧問與導入服務依方案確認",
    visual: "直播 +1、社群購物、Open API 高階方案",
    fit: "社群電商",
    strengths: [
      "功能生態完整，包含會員、社群、直播與行銷工具",
      "來源文章提到支援 POS、OMO 與 Facebook 直播購物",
      "市場知名度高，教學與第三方服務較多",
    ],
    limits: [
      "年費、開通費、流量費與金流費加總後成本較高",
      "深度客製通常需要工程或服務支援",
    ],
    summary: "最適合：具備電商操作經驗、重視成熟生態與社群購物的品牌。",
  },
  {
    name: "MEEPSHOP",
    category: "social",
    badge: "設計彈性",
    annualFee: "銀神燈約 NT$30,000/年；金神燈約 NT$72,000/年",
    commission: "銀神燈 1.5%；金神燈 0%",
    trial: "15 天",
    shopee: "無",
    logistics: "未見官方主打 POS/倉儲",
    memberPromo: "會員 VIP、滿額贈、紅利點數與加價購依方案",
    omo: "客服與導入服務依方案確認",
    visual: "一頁式、團購、天眼追蹤、湊湊團等行銷工具",
    fit: "團購 / 一頁式",
    strengths: [
      "來源文章提到主打團購經營模式與一頁式網站",
      "具備湊湊團、天眼等行銷追蹤功能",
      "適合快速導購與高轉換活動頁情境",
    ],
    limits: [
      "高低階方案差異需留意抽成與商品上架數量",
      "多通路或門市整合能力需依需求評估",
    ],
    summary: "最適合：重視團購、一頁式銷售與活動轉換追蹤的品牌。",
  },
  {
    name: "WACA",
    category: "budget",
    badge: "入門友善",
    annualFee: "高階領航版約 NT$64,788/年",
    commission: "0% 全方案不抽成",
    trial: "30 天",
    shopee: "部分方案/加購確認",
    logistics: "POS/OMO 需依方案或加購確認",
    memberPromo: "部落格、會員分級、購物金與優惠多為高階或加購",
    omo: "客服與顧問服務依方案確認",
    visual: "模板、模組、部落格、會員分級等多為高階方案",
    fit: "低抽成入門",
    strengths: [
      "來源文章提到全方案不抽成，對成長後的商家有成本優勢",
      "支援電商官網、POS 與預約管理服務",
      "模組可依需求加購，適合逐步擴充",
    ],
    limits: [
      "部落格、會員分級等重要功能可能限高階方案",
      "POS 與部分跨境能力需額外加購或另行合作",
    ],
    summary: "最適合：想用較低固定成本開始，並重視不抽成的中小商家。",
  },
  {
    name: "ShopStore",
    category: "budget",
    badge: "新手友善",
    annualFee: "旗艦計畫約 NT$47,988/年",
    commission: "依方案與服務條件確認",
    trial: "30 天",
    shopee: "商品同步",
    logistics: "未見官方主打 POS/倉儲",
    memberPromo: "會員再行銷、分潤導購、優惠與訊息通知依方案",
    omo: "客服與協助服務依方案確認",
    visual: "套版、CSS、部落格、會員與導購功能依方案",
    fit: "新手 / 零售",
    strengths: [
      "來源文章提到有 0 元/月新手方案與小資年費方案",
      "支援 SEO 自訂、部落格、會員再行銷與導購分潤",
      "提供多種套版與 CSS 自訂，對新手相對友善",
    ],
    limits: [
      "進階需求仍需確認方案限制",
      "若有大型 OMO、倉儲或深度客製需求，需另行評估",
    ],
    summary: "最適合：零經驗新手、零售商家與想低成本起步的品牌。",
  },
];

const platformRows = document.querySelector("#platformRows");
const filterButtons = document.querySelectorAll(".filter-button");
const recommendation = document.querySelector("#recommendation");
const goal = document.querySelector("#goal");
const monthlyRevenue = document.querySelector("#monthlyRevenue");
const currentCommission = document.querySelector("#currentCommission");
const currentAnnualFee = document.querySelector("#currentAnnualFee");
const newCommission = document.querySelector("#newCommission");
const newAnnualFee = document.querySelector("#newAnnualFee");
const monthlyCommissionSaved = document.querySelector("#monthlyCommissionSaved");
const monthlyNetSaved = document.querySelector("#monthlyNetSaved");
const yearlySaved = document.querySelector("#yearlySaved");
const threeYearSaved = document.querySelector("#threeYearSaved");

function renderRows(filter = "all") {
  if (!platformRows) return;
  const visiblePlatforms =
    filter === "all"
      ? platforms
      : platforms.filter((platform) => platform.category === filter);

  platformRows.innerHTML = visiblePlatforms
    .map(
      (platform) => `
        <tr>
          <td>
            <div class="platform-name">${platform.name}</div>
            <span class="tag">${platform.badge}</span>
          </td>
          <td>${platform.annualFee}</td>
          <td>${platform.commission}</td>
          <td>${platform.trial}</td>
          <td>${platform.shopee}</td>
          <td>${platform.logistics}</td>
          <td>${platform.memberPromo}</td>
          <td>${platform.visual}</td>
          <td>${platform.fit}</td>
        </tr>
      `,
    )
    .join("");
}

function getPlatform(name) {
  return platforms.find((platform) => platform.name === name);
}

function updateRecommendation() {
  if (!goal || !recommendation) return;
  const goalValue = goal.value;

  let primary = platforms.find((platform) => platform.category === goalValue);
  let secondary = getPlatform("BVSHOP");

  if (goalValue === "brand") {
    primary = getPlatform("BVSHOP");
    secondary = getPlatform("SHOPLINE");
  }

  if (goalValue === "retail") {
    primary = getPlatform("CYBERBIZ");
    secondary = getPlatform("BVSHOP");
  }

  if (goalValue === "social") {
    primary = getPlatform("SHOPLINE");
    secondary = getPlatform("BVSHOP");
  }

  if (goalValue === "budget") {
    primary = getPlatform("ShopStore");
    secondary = getPlatform("WACA");
  }

  if (goalValue === "commission") {
    primary = getPlatform("BVSHOP");
    secondary = getPlatform("WACA");
  }

  if (primary.name === secondary.name) {
    secondary = getPlatform("SHOPLINE");
  }

  recommendation.innerHTML = `
    <div class="recommendation-grid">
      <div>
        <span>主推薦</span>
        <strong>${primary.name}</strong>
        <p>${primary.summary}</p>
      </div>
      <div>
        <span>也建議比較</span>
        <strong>${secondary.name}</strong>
        <p>${secondary.summary}</p>
      </div>
    </div>
  `;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("zh-TW", {
    style: "currency",
    currency: "TWD",
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

function calculateSwitchSavings() {
  if (
    !monthlyRevenue ||
    !currentCommission ||
    !currentAnnualFee ||
    !newCommission ||
    !newAnnualFee
  ) {
    return;
  }

  const revenue = Number(monthlyRevenue.value || 0);
  const oldCommissionRate = Number(currentCommission.value || 0) / 100;
  const oldAnnualFee = Number(currentAnnualFee.value || 0);
  const newCommissionRate = Number(newCommission.value || 0) / 100;
  const newAnnualFeeValue = Number(newAnnualFee.value || 0);

  const oldCommissionCost = revenue * oldCommissionRate;
  const newCommissionCost = revenue * newCommissionRate;
  const commissionSaved = oldCommissionCost - newCommissionCost;
  const monthlyFeeDifference = (oldAnnualFee - newAnnualFeeValue) / 12;
  const netSaved = commissionSaved + monthlyFeeDifference;

  monthlyCommissionSaved.textContent = formatCurrency(commissionSaved);
  monthlyNetSaved.textContent = formatCurrency(netSaved);
  yearlySaved.textContent = formatCurrency(netSaved * 12);
  threeYearSaved.textContent = formatCurrency(netSaved * 36);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderRows(button.dataset.filter);
  });
});

if (goal) {
  goal.addEventListener("change", updateRecommendation);
}

[
  monthlyRevenue,
  currentCommission,
  currentAnnualFee,
  newCommission,
  newAnnualFee,
].forEach((input) => {
  if (input) {
    input.addEventListener("input", calculateSwitchSavings);
  }
});

renderRows();
updateRecommendation();
calculateSwitchSavings();
