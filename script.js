/* ==========================================================================
   MONGSAY EXECUTIVE PORTFOLIO — INTERACTIVE ENGINE
   Features:
   - Starlight Beaming & Golden Caustic Canvas Engine
   - 002.jpg Specular Lighting & Smooth Lerp Parallax
   - 3D Card Physics & Specular Shine
   - Theme Toggle: Dark Mode & High-Contrast Luxury Light Mode
   - Bilingual Engine: English & Authentic Khmer (ភាសាខ្មែរ)
   - Tool 1: SAGFX Real-Time Rebate & Pip Commission Calculator
   - Tool 2: Institutional Lot Size & Fractional Risk Engine
   - Tool 3: Global Market Sessions Clock
   - Executive Books Vault Filter & Live Search
   - 1-Click Verified @MongsayFX Telegram Enrollment Protocols
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initLanguageToggle();
  initSmartScrollNav();
  initGoldDustCanvas();
  initBackgroundLighting();
  initCard3DTilt();
  initCounters();
  initMobileNav();
  initBookingModal();
  initContactForm();
  initRebateCalculator();
  initPositionSizeRiskCalculator();
  initMarketSessionsClock();
  initBooksFilterAndSearch();
  initTelegramCopyButtons();
  initVideoBackground();
});

/* ---------------------------------------------------------
   A. Theme Toggle: Dark Mode & Luxury High-Contrast Light Mode
   --------------------------------------------------------- */
function initThemeToggle() {
  const savedTheme = localStorage.getItem('mongsay_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const themeBtns = document.querySelectorAll('.theme-toggle');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('mongsay_theme', nextTheme);
      showToast(nextTheme === 'light' ? 'Switched to Dim Blue Sea Mode (Oceanic Sapphire)' : 'Switched to Institutional Dark Obsidian Mode');
    });
  });
}

/* ---------------------------------------------------------
   B. Bilingual Engine: English & Khmer (ភាសាខ្មែរ)
   --------------------------------------------------------- */
const I18N_DICTIONARY = {
  en: {
    nav_overview: "Overview",
    nav_ventures: "Ventures",
    nav_advisory: "Lead Brokerage",
    nav_media: "Media",
    nav_library: "Library",
    nav_contact: "Enroll / Contact",
    hero_badge_payment: "COUNTRY MANAGER",
    hero_badge_advisory: "SAGFX LEAD BROKERAGE",
    hero_subtitle: "Executive Portfolio",
    hero_title: "Institutional <br><span class=\"gold-text\">Market Liquidity</span> & Lead <br><span class=\"gold-text\">Brokerage Leadership</span>",
    hero_desc: "Country Manager & Lead Institutional Brokerage Director at <strong>SAGFX</strong> (<a href=\"https://sagfx.org\" target=\"_blank\" class=\"gold-text\">sagfx.org</a>). Leading institutional tier-1 liquidity, mechanical market structure, and high-performance trading communities.",
    hero_cta_enroll: "Enroll with @MongsayFX",
    hero_cta_ventures: "Explore SAGFX Ventures",
    stat_gateway: "Execution Availability",
    stat_rebate: "Trader Rebate Yield",
    stat_community: "Community Reach",
    sessions_title: "Institutional Trading Sessions (Live Schedule)",
    calc_tag: "QUANTITATIVE COST REDUCTION ENGINE",
    calc_title: "SAGFX Interactive <span class=\"gold-gradient-text\">Broker Rebate Yield</span>",
    calc_desc: "Calculate real-time monthly cashback and trading cost reductions across institutional tier-1 partner brokers powered by SAGFX.ORG.",
    calc_label_vol: "Estimated Monthly Volume",
    calc_label_asset: "Asset Class",
    calc_label_broker: "Partner Broker",
    calc_btn_claim: "Claim Whitelisted Rebate Rate via @MongsayFX",
    calc_header_cashback: "Projected Monthly Cashback",
    calc_header_annual: "Annual Compound Savings",
    calc_header_pips: "Pips Recovered / Month",
    calc_header_reduction: "Spread Cost Reduction",
    calc_header_settlement: "Rebate Settlement",
    calc_val_weekly: "Automated / Weekly",
    risk_tag: "INSTITUTIONAL POSITION SIZER",
    risk_title: "Mechanical Lot Size & <span class=\"gold-gradient-text\">Fractional Risk Engine</span>",
    risk_desc: "Mathematically size every market execution according to institutional risk management standards.",
    risk_label_balance: "Account Balance ($USD)",
    risk_label_pct: "Account Risk Percentage",
    risk_label_sl: "Stop Loss Range (Pips)",
    risk_stat_cash: "Total Cash at Risk",
    risk_stat_lots: "Optimal Position Lot Size",
    risk_stat_pipval: "Pip Dollar Value",
    risk_stat_rr: "Target 1:3 RR Profit Gain",
    telegram_tag: "OFFICIAL DIRECT ENROLLMENT CHANNEL",
    telegram_title: "Enroll Directly with <span class=\"gold-gradient-text\">@MongsayFX</span>",
    telegram_desc: "Direct private access to Mong Say for institutional traders, brokerage partnerships, and regional scaling (SAGFX.ORG). Connect directly on Telegram to enroll in private mentorship and VIP institutional channels.",
    telegram_btn_enroll: "Enroll via @MongsayFX",
    telegram_btn_copy: "Copy Handle (@MongsayFX)",
    telegram_caption: "Scan with Telegram App",
    contact_tag: "DIRECT PROTOCOL",
    contact_title: "Initiate Executive Partnership",
    contact_desc: "Direct channel to the Office of Mong Say for institutional inquiries, country management partnerships, lead brokerage consulting, and keynote strategic engagements.",
    contact_btn_submit: "Transmit Strategic Inquiry"
  },
  kh: {
    nav_overview: "ទិដ្ឋភាព",
    nav_ventures: "អាជីវកម្ម",
    nav_advisory: "ឈ្មួញជើងសាឈានមុខ",
    nav_media: "ផ្សព្វផ្សាយ",
    nav_library: "បណ្ណាល័យ",
    nav_contact: "ទំនាក់ទំនង",
    hero_badge_payment: "នាយកគ្រប់គ្រងប្រចាំប្រទេស",
    hero_badge_advisory: "ឈ្មួញជើងសាឈានមុខ SAGFX",
    hero_subtitle: "ផលប័ត្រប្រតិបត្តិផ្លូវការ",
    hero_title: "សាច់ប្រាក់ងាយស្រួលស្ថាប័ន <br><span class=\"gold-text\">កម្រិតអន្តរជាតិ</span> & ភាពជាអ្នកដឹកនាំ <br><span class=\"gold-text\">ឈ្មួញជើងសាឈានមុខ</span>",
    hero_desc: "នាយកគ្រប់គ្រងប្រចាំប្រទេស និងជាប្រធានដឹកនាំឈ្មួញជើងសាស្ថាប័ននៅ <strong>SAGFX</strong> (<a href=\"https://sagfx.org\" target=\"_blank\" class=\"gold-text\">sagfx.org</a>)។ ដឹកនាំសាច់ប្រាក់ងាយស្រួលស្ថាប័ន Tier-1 រចនាសម្ព័ន្ធទីផ្សារមេកានិក និងសហគមន៍ជួញដូរកម្រិតខ្ពស់។",
    hero_cta_enroll: "ចុះឈ្មោះជាមួយ @MongsayFX",
    hero_cta_ventures: "ស្វែងយល់ពី SAGFX Ventures",
    stat_gateway: "ភាពអាចរកបាននៃប្រព័ន្ធប្រតិបត្តិ",
    stat_rebate: "ទិន្នផល Rebate ឈ្មួញជើងសា",
    stat_community: "បណ្តាញសហគមន៍",
    sessions_title: "ម៉ោងបើកទីផ្សារជួញដូរស្ថាប័ន (កាលវិភាគបន្តផ្ទាល់)",
    calc_tag: "ម៉ាស៊ីនកាត់បន្ថយថ្លៃដើមជួញដូរ",
    calc_title: "ការគណនា Rebate ផ្ទាល់ <span class=\"gold-gradient-text\">SAGFX</span>",
    calc_desc: "គណនាទឹកប្រាក់ត្រឡប់មកវិញប្រចាំខែ និងការកាត់បន្ថយថ្លៃដើមជួញដូរជាមួយឈ្មួញជើងសាដៃគូស្ថាប័ន Tier-1 តាមរយៈ SAGFX.ORG។",
    calc_label_vol: "ទំហំជួញដូរប្រចាំខែប៉ាន់ស្មាន",
    calc_label_asset: "ប្រភេទទ្រព្យសកម្ម",
    calc_label_broker: "ឈ្មួញជើងសាដៃគូ",
    calc_btn_claim: "ទទួលបានអត្រា Rebate តាមរយៈ @MongsayFX",
    calc_header_cashback: "ទឹកប្រាក់ត្រឡប់មកវិញប្រចាំខែ",
    calc_header_annual: "ការសន្សំសរុបប្រចាំឆ្នាំ",
    calc_header_pips: "ចំនួន Pip ទទួលបានវិញ / ខែ",
    calc_header_reduction: "ការកាត់បន្ថយថ្លៃ Spread",
    calc_header_settlement: "ការទូទាត់ Rebate",
    calc_val_weekly: "ស្វ័យប្រវត្ត / ប្រចាំសប្តាហ៍",
    risk_tag: "ម៉ាស៊ីនគណនាហានិភ័យ & ទំហំ LOT",
    risk_title: "ការកំណត់ទំហំ Lot & <span class=\"gold-gradient-text\">ការគ្រប់គ្រងហានិភ័យ</span>",
    risk_desc: "គណនាទំហំ Lot ជាក់លាក់ទៅតាមស្តង់ដារគ្រប់គ្រងហានិភ័យរបស់ស្ថាប័នហិរញ្ញវត្ថុអន្តរជាតិ។",
    risk_label_balance: "សមតុល្យគណនី ($USD)",
    risk_label_pct: "ភាគរយហានិភ័យគណនី",
    risk_label_sl: "ចម្ងាយ Stop Loss (Pips)",
    risk_stat_cash: "ទឹកប្រាក់ប្រឈមហានិភ័យ",
    risk_stat_lots: "ទំហំ Lot ដ៏ល្អបំផុត",
    risk_stat_pipval: "តម្លៃទឹកប្រាក់ក្នុង ១ Pip",
    risk_stat_rr: "គោលដៅប្រាក់ចំណេញ 1:3 RR",
    telegram_tag: "បណ្តាញចុះឈ្មោះផ្ទាល់ផ្លូវការ",
    telegram_title: "ចុះឈ្មោះដោយផ្ទាល់ជាមួយ <span class=\"gold-gradient-text\">@MongsayFX</span>",
    telegram_desc: "ទំនាក់ទំនងផ្ទាល់ជាមួយ Mong Say សម្រាប់ឈ្មួញជួញដូរស្ថាប័ន ភាពជាដៃគូឈ្មួញជើងសាឈានមុខ (SAGFX.ORG) និងការពង្រីកក្នុងតំបន់។ ភ្ជាប់ទំនាក់ទំនងតាម Telegram ដើម្បីចុះឈ្មោះចូលរួមក្នុងបណ្តាញ VIP ស្ថាប័ន។",
    telegram_btn_enroll: "ចុះឈ្មោះតាម @MongsayFX",
    telegram_btn_copy: "ចម្លង (@MongsayFX)",
    telegram_caption: "ស្កេនជាមួយកម្មវិធី Telegram",
    contact_tag: "ពិធីសារផ្ទាល់",
    contact_title: "ចាប់ផ្តើមភាពជាដៃគូប្រតិបត្តិ",
    contact_desc: "បណ្តាញផ្ទាល់ទៅកាន់ការិយាល័យ Mong Say សម្រាប់ការសាកសួរកម្រិតស្ថាប័ន ភាពជាដៃគូនាយកគ្រប់គ្រងប្រចាំប្រទេស និងការពិគ្រោះយោបល់ឈ្មួញជើងសាឈានមុខ។",
    contact_btn_submit: "ផ្ញើសំណើជាយុទ្ធសាស្ត្រ"
  }
};

/* Comprehensive site-wide phrase dictionary for complete full-page Khmer translations */
const PHRASE_DICTIONARY_KH = {
  // Navigation & Identifiers
  "Overview": "ទិដ្ឋភាព",
  "Ventures": "អាជីវកម្ម",
  "Lead Brokerage": "ឈ្មួញជើងសាឈានមុខ",
  "Advisory & BDM": "ឈ្មួញជើងសាឈានមុខ",
  "Media": "ផ្សព្វផ្សាយ",
  "Library": "បណ្ណាល័យ",
  "Enroll / Contact": "ចុះឈ្មោះ / ទំនាក់ទំនង",
  "COUNTRY MANAGER": "នាយកគ្រប់គ្រងប្រចាំប្រទេស",
  "SAGFX LEAD BROKERAGE": "ឈ្មួញជើងសាឈានមុខ SAGFX",
  "SAG PAYMENT CEO": "នាយកគ្រប់គ្រងប្រចាំប្រទេស",
  "SAGFX.ORG ADVISOR": "ឈ្មួញជើងសាឈានមុខ SAGFX",
  "Executive Portfolio": "ផលប័ត្រប្រតិបត្តិផ្លូវការ",
  "CEO & FOUNDER": "ស្ថាបនិក & នាយកប្រតិបត្តិ",
  "FOUNDER & CEO": "ស្ថាបនិក & នាយកប្រតិបត្តិ",
  "Chief Executive Officer": "នាយកប្រតិបត្តិ (CEO)",
  "LEAD ADVISOR": "ប្រធានទីប្រឹក្សា",
  "PRIVATE ALPHA": "សហគមន៍ឯកជន ALPHA",
  "SAGFX REGIONAL // ACTIVE": "SAGFX កំពុងដំណើរការក្នុងតំបន់",
  "SAGFX ACTIVE": "SAGFX កំពុងដំណើរការ",
  "OFFICE OF MONG SAY": "ការិយាល័យ MONG SAY",
  "EXECUTIVE ADVISORY // VIP DESK": "ការប្រឹក្សាប្រតិបត្តិ // ការិយាល័យ VIP",
  "SAGFX TERMINAL // LAT 11.5564° N, 104.9282° E": "SAGFX TERMINAL // LAT 11.5564° N, 104.9282° E",
  "SAG TERMINAL // LAT 11.5564° N, 104.9282° E": "SAGFX TERMINAL // LAT 11.5564° N, 104.9282° E",
  "0.09 PIP ECN": "0.09 PIP ECN",
  "Mongsay": "Mongsay",
  "Mong Say": "Mong Say",
  "@MongsayFX": "@MongsayFX",
  "@MongsayFX (Enroll Direct)": "@MongsayFX (ចុះឈ្មោះផ្ទាល់)",
  "Mongsay Across Platforms": "Mongsay នៅលើបណ្តាញទាំងអស់",
  "Mongsay House VIP": "Mongsay House VIP",
  "Mongsay House VIP Channel": "Channel VIP Mongsay House",
  "Mongsay House VIP Onboarding": "ការចូលរួម Mongsay House VIP",

  // Section Tags & Badges
  "EXCLUSIVE COMMERCIAL PROMOTIONS & PARTNER PRIVILEGES": "ប្រូម៉ូសិនពាណិជ្ជកម្មផ្តាច់មុខ & អត្ថប្រយោជន៍ដៃគូ",
  "STRATEGIC COMMERCIAL ECOSYSTEM": "ប្រព័ន្ធអេកូឡូស៊ីពាណិជ្ជកម្មយុទ្ធសាស្ត្រ",
  "STRATEGIC COMMERCIAL INFRASTRUCTURE": "ហេដ្ឋារចនាសម្ព័ន្ធពាណិជ្ជកម្មយុទ្ធសាស្ត្រ",
  "STRATEGIC COUNSEL & MARKET EXECUTION": "ការផ្តល់ប្រឹក្សាយុទ្ធសាស្ត្រ & ការប្រតិបត្តិទីផ្សារ",
  "PRIVATE COMMUNITY & EDUCATION": "សហគមន៍ឯកជន & ការអប់រំ",
  "QUANTITATIVE COST REDUCTION ENGINE": "ម៉ាស៊ីនកាត់បន្ថយថ្លៃដើមជួញដូរ",
  "INSTITUTIONAL POSITION SIZER": "ម៉ាស៊ីនកំណត់ទំហំ LOT ស្ថាប័ន",
  "CORE COMPETENCIES & LEADERSHIP": "សមត្ថភាពស្នូល & ភាពជាអ្នកដឹកនាំ",
  "BROADCASTS & SOCIAL ALPHA": "ការផ្សាយផ្ទាល់ & បណ្តាញសង្គម",
  "EXECUTIVE PUBLICATIONS": "ការបោះពុម្ពផ្សាយប្រតិបត្តិ",
  "OFFICIAL DIRECT ENROLLMENT CHANNEL": "បណ្តាញចុះឈ្មោះផ្ទាល់ផ្លូវការ",
  "DIRECT PROTOCOL": "ពិធីសារផ្ទាល់",
  "CAPITAL & BROKER STRATEGY": "យុទ្ធសាស្ត្រទុន & ឈ្មួញជើងសា",
  "LIVE TELEGRAM ALPHA FEED": "ព័ត៌មាន TELEGRAM ALPHA បន្តផ្ទាល់",
  "REAL-TIME BROADCASTS": "ការផ្សាយតាមពេលវេលាជាក់ស្តែង",
  "MEDIA & MULTI-CHANNEL ECOSYSTEM": "ប្រព័ន្ធផ្សព្វផ្សាយ & បណ្តាញចម្រុះ",
  "OFFICIAL BROADCAST NETWORK": "បណ្តាញផ្សាយផ្លូវការ",
  "INTELLECTUAL CAPITAL & READING VAULT": "ដើមទុនបញ្ញា & បណ្ណាល័យអំណាន",
  "ADVISORY ENGAGEMENT PROTOCOL": "ពិធីសារកិច្ចព្រមព្រៀងប្រឹក្សា",
  "EXECUTIVE CAPABILITIES": "សមត្ថភាពប្រតិបត្តិ",
  "EXECUTIVE PROTOCOL": "ពិធីសារប្រតិបត្តិ",
  "TELEGRAM INSIGHTS ARCHIVE": "ប័ណ្ណសារការវិភាគ TELEGRAM",
  "CORE PHILOSOPHY": "ទស្សនវិជ្ជាស្នូល",
  "Core Philosophy": "ទស្សនវិជ្ជាស្នូល",
  "Core Curriculum": "កម្មវិធីសិក្សាស្នូល",
  "Core Ventures": "អាជីវកម្មស្នូល",

  // Capabilities & Rails
  "01 / FINTECH INFRASTRUCTURE": "០១ / ហេដ្ឋារចនាសម្ព័ន្ធ FINTECH",
  "02 / INSTITUTIONAL S&D": "០២ / S&D ស្ថាប័ន",
  "03 / QUANTITATIVE DISCIPLINE": "០៣ / វិន័យបរិមាណ",
  "01 / BROKER EXPANSION": "០១ / ការពង្រីកឈ្មួញជើងសា",
  "02 / BROKERAGE SCALING": "០២ / ការពង្រីក BROKERAGE",
  "03 / LIQUIDITY & SPREAD": "០៣ / សាច់ប្រាក់ងាយស្រួល & SPREAD",
  "CAPABILITY 01": "សមត្ថភាព ០១",
  "CAPABILITY 02": "សមត្ថភាព ០២",
  "CAPABILITY 03": "សមត្ថភាព ០៣",
  "RAIL 01": "ផ្លូវ ០១",
  "RAIL 02": "ផ្លូវ ០២",
  "RAIL 03": "ផ្លូវ ០៣",
  "PHASE I": "ដំណាក់កាលទី I",
  "PHASE II": "ដំណាក់កាលទី II",
  "PHASE III": "ដំណាក់កាលទី III",
  "PHASE IV": "ដំណាក់កាលទី IV",
  "PROMO 01 // WHITE-LABEL SCALE": "ប្រូម៉ូសិន ០១ // ការពង្រីក WHITE-LABEL",
  "PROMO 02 // SAGFX.ORG": "ប្រូម៉ូសិន ០២ // SAGFX.ORG",
  "PROMO 03 // LEAD BROKERAGE": "ប្រូម៉ូសិន ០៣ // ឈ្មួញជើងសាឈានមុខ",
  "PROMO 03 // BDM & BROKER INCEPTION": "ប្រូម៉ូសិន ០៣ // ឈ្មួញជើងសាឈានមុខ",
  "WHITE-LABEL PROMOTION": "ប្រូម៉ូសិន WHITE-LABEL",
  "BROKERAGE SPECIAL OFFER": "ការផ្តល់ជូនពិសេស BROKERAGE",
  "SAGFX.ORG PROMOTION": "ប្រូម៉ូសិន SAGFX.ORG",
  "SAGFX.ORG TRADER PRIVILEGE": "អត្ថប្រយោជន៍ TRADER SAGFX.ORG",
  "LEAD BROKERAGE & EXPANSION": "ឈ្មួញជើងសាឈានមុខ & ការពង្រីក",
  "BDM & BROKER INCEPTION": "ឈ្មួញជើងសាឈានមុខ & ការពង្រីក",
  "BROKERAGE ARCHITECTURE": "ស្ថាបត្យកម្ម BROKERAGE",
  "BDM ARCHITECTURE": "ស្ថាបត្យកម្ម BROKERAGE",

  // Headings
  "Strategic Ecosystem Promotions & High-Value Offers": "ការផ្តល់ជូនពិសេស & ប្រូម៉ូសិនប្រព័ន្ធអេកូឡូស៊ីយុទ្ធសាស្ត្រ",
  "The SAG Financial Network": "បណ្តាញហិរញ្ញវត្ថុ SAG",
  "Mongsay House & Trading Alpha": "Mongsay House & យុទ្ធសាស្ត្រជួញដូរ Alpha",
  "Institutional Advisory & Strategic Execution": "ការប្រឹក្សាស្ថាប័ន & ការប្រតិបត្តិជាយុទ្ធសាស្ត្រ",
  "Media & Channel Ecosystem": "ប្រព័ន្ធផ្សព្វផ្សាយ & បណ្តាញសង្គម",
  "Curated Strategy & Educational Vault": "បណ្ណាល័យយុទ្ធសាស្ត្រ & ការអប់រំ",
  "Institutional Trading Sessions (Live Schedule)": "ម៉ោងបើកទីផ្សារជួញដូរស្ថាប័ន (កាលវិភាគបន្តផ្ទាល់)",
  "Inside SAGFX.ORG: Maximizing Yield via Institutional Broker Rebates": "ស៊ីជម្រៅពី SAGFX.ORG៖ ការបង្កើនទិន្នផលតាមរយៈ Rebate ឈ្មួញជើងសាស្ថាប័ន",
  "Maximizing Volume Yield: Institutional Broker Rebates via SAGFX.ORG": "ការបង្កើនទិន្នផលទំហំជួញដូរ៖ Rebate ឈ្មួញជើងសាស្ថាប័នតាមរយៈ SAGFX.ORG",
  "Mastering Gold (XAU/USD) Multi-Timeframe Structural Mapping": "ជំនាញវិភាគរចនាសម្ព័ន្ធពហុពេលវេលាលើមាស (XAU/USD)",
  "True Liquidity Sweeps vs Mechanical Market Displacement": "ការបោសសម្អាតសាច់ប្រាក់ងាយស្រួល (Liquidity Sweeps) ទល់នឹងការផ្លាស់ទីទីផ្សារមេកានិក",
  "Elite Trading Psychology & Emotional Mastery in Institutional Volatility": "ចិត្តវិទ្យាជួញដូរកម្រិតខ្ពស់ & ការគ្រប់គ្រងអារម្មណ៍ក្នុងបម្រែបម្រួលទីផ្សារស្ថាប័ន",
  "Trading Psychology & Mental Toughness in Institutional Markets": "ចិត្តវិទ្យាជួញដូរ & ភាពរឹងមាំផ្លូវចិត្តក្នុងទីផ្សារស្ថាប័ន",
  "Institutional S&D Displacement & Gold (XAU/USD) Multi-Timeframe Structural Mapping": "ការផ្លាស់ទី S&D ស្ថាប័ន & ការវិភាគរចនាសម្ព័ន្ធពហុពេលវេលាលើមាស (XAU/USD)",
  "High-Level Financial Markets Advisory": "ការប្រឹក្សាទីផ្សារហិរញ្ញវត្ថុកម្រិតខ្ពស់",
  "Advisory Pillars": "សសរស្តម្ភនៃការប្រឹក្សា",
  "Corporate Portals": "ច្រកទ្វារសាជីវកម្ម",
  "Direct Channels": "បណ្តាញផ្ទាល់",
  "Official Inquiries": "ការសាកសួរផ្លូវការ",
  "Official Portal": "គេហទំព័រផ្លូវការ",
  "All Literature (8)": "ឯកសារទាំងអស់ (៨)",

  // Section Descriptions & Strategy Texts
  "Active commercial incentives, infrastructure fee waivers, and exclusive tier-1 institutional rebate structures negotiated directly through the Office of Mong Say.": "ការលើកទឹកចិត្តពាណិជ្ជកម្ម ការលើកលែងកម្រៃហេដ្ឋារចនាសម្ព័ន្ធ និងរចនាសម្ព័ន្ធ Rebate ស្ថាប័ន Tier-1 ផ្តាច់មុខដែលចរចាដោយផ្ទាល់តាមរយៈការិយាល័យ Mong Say។",
  "Integrated finTech, cross-border payments, and institutional liquidity infrastructure founded and advised by Mong Say.": "ហេដ្ឋារចនាសម្ព័ន្ធបច្ចេកវិទ្យាហិរញ្ញវត្ថុ ការទូទាត់ឆ្លងព្រំដែន និងសាច់ប្រាក់ងាយស្រួលស្ថាប័នដែលបានបង្កើត និងផ្តល់ប្រឹក្សាដោយ Mong Say។",
  "Architecting high-stakes fintech infrastructure, optimizing broker revenue streams, and guiding cross-border capital expansion.": "ស្ថាបត្យកម្មហេដ្ឋារចនាសម្ព័ន្ធ FinTech, ការបង្កើនប្រសិទ្ធភាពចំណូលឈ្មួញជើងសា និងការដឹកនាំការពង្រីកទុនឆ្លងព្រំដែន។",
  "Engage with Mong Say across verified digital platforms for daily market analyses, keynote sessions, and payment fintech updates.": "ភ្ជាប់ទំនាក់ទំនងជាមួយ Mong Say តាមរយៈបណ្តាញឌីជីថលផ្លូវការ សម្រាប់ការវិភាគទីផ្សារប្រចាំថ្ងៃ និងព័ត៌មានបច្ចេកវិទ្យាហិរញ្ញវត្ថុ។",
  "Foundational reading and quantitative manuals on financial markets, risk modeling, and institutional leadership.": "សៀវភៅគោលការណ៍គ្រឹះ និងសៀវភៅណែនាំបរិមាណស្តីពីទីផ្សារហិរញ្ញវត្ថុ ការគ្រប់គ្រងហានិភ័យ និងភាពជាអ្នកដឹកនាំស្ថាប័ន។",

  // Promotions & Whitelist
  "0% Setup Fee Merchant Launchpad": "កម្មវិធីបញ្ចុះតម្លៃ ០% ថ្លៃដំឡើងច្រកទូទាត់អាជីវកម្ម",
  "Waived integration and API gateway setup costs for eligible enterprise merchants integrating SAG Payment. Rapid settlement, multi-currency acquiring, and dedicated technical integration support.": "លើកលែងការចំណាយលើការតភ្ជាប់ និងដំឡើងច្រកទូទាត់ API សម្រាប់សហគ្រាសអាជីវកម្មដែលមានលក្ខខណ្ឌគ្រប់គ្រាន់ជាមួយ SAG Payment។ ការទូទាត់រហ័ស ទូទាត់ពហុរូបិយប័ណ្ណ និងការគាំទ្របច្ចេកទេសផ្ទាល់។",
  "GATEWAY LAUNCHPAD": "ច្រកទូទាត់អាជីវកម្ម",
  "Apply via SAG Payment →": "ដាក់ពាក្យតាម SAG Payment →",
  "Tier-1 Institutional Rebate Whitelist": "បញ្ជី Rebate ស្ថាប័ន Tier-1 ពិសេស",
  "Enhanced commission rebate rates on Gold (XAU/USD) and FX majors with direct partner brokers. Up to $8.50 per lot cashback credited weekly to trading accounts.": "អត្រា Rebate កម្រៃជើងសារខ្ពស់លើមាស (XAU/USD) និងរូបិយប័ណ្ណចម្បងជាមួយឈ្មួញជើងសាដៃគូផ្ទាល់។ ទឹកប្រាក់ត្រឡប់មកវិញរហូតដល់ $8.50 ក្នុង ១ Lot ទូទាត់ប្រចាំសប្តាហ៍។",
  "HIGH VOLUME YIELD": "ទិន្នផលទំហំធំ",
  "Whitelist Account →": "ចុះឈ្មោះគណនី →",
  "Brokerage Inception & Master IB Scale": "ការបង្កើត Brokerage & ពង្រីក Master IB",
  "Comprehensive turnkey advisory for regional funds, master introducing brokers, and fintech founders looking to structure institutional liquidity bridges and IB networks.": "ការប្រឹក្សាយុទ្ធសាស្ត្រពេញលេញសម្រាប់មូលនិធិក្នុងតំបន់, Master IB និងស្ថាបនិក FinTech ដែលចង់រៀបចំស្ពានសាច់ប្រាក់ងាយស្រួល និងបណ្តាញ IB។",
  "LEAD BROKERAGE": "ឈ្មួញជើងសាឈានមុខ",
  "INSTITUTIONAL BDM": "ឈ្មួញជើងសាឈានមុខ",
  "Book Strategy Session →": "កក់ការប្រជុំយុទ្ធសាស្ត្រ →",
  "Architecture Audit": "ការត្រួតពិនិត្យស្ថាបត្យកម្មប្រព័ន្ធ",
  "Comprehensive evaluation of current payment rails, liquidity bridges, and IB payout friction.": "ការវាយតម្លៃទូលំទូលាយលើផ្លូវទូទាត់បច្ចុប្បន្ន ស្ពានសាច់ប្រាក់ងាយស្រួល និងការកាត់បន្ថយកម្រៃជើងសារ IB។",
  "Structural Blueprint": "ប្លង់មេនៃរចនាសម្ព័ន្ធ",
  "Formulating custom white-label brokerage integration, rebate distribution tiers, and risk models.": "ការរៀបចំការតភ្ជាប់ White-Label Brokerage, កម្រិតបែងចែក Rebate និងគំរូគ្រប់គ្រងហានិភ័យ។",
  "Formulating custom SAG Payment integration, rebate distribution tiers, and risk models.": "ការរៀបចំការតភ្ជាប់ White-Label Brokerage, កម្រិតបែងចែក Rebate និងគំរូគ្រប់គ្រងហានិភ័យ។",
  "Pipeline Deployment": "ការដាក់ពង្រាយប្រព័ន្ធ",
  "Rapid deployment of verified payment APIs, automated tracking scripts, and regulated broker bridges.": "ការដាក់ពង្រាយ API ទូទាត់ដែលបានផ្ទៀងផ្ទាត់ ស្គ្រីបតាមដានស្វ័យប្រវត្តិ និងស្ពាន Broker ដែលមានបទប្បញ្ញត្តិត្រឹមត្រូវយ៉ាងឆាប់រហ័ស។",
  "Volume Acceleration": "ការពន្លឿនទំហំជួញដូរ",
  "Syndicating community volume via Mongsay House and institutional affiliate channels.": "ការប្រមូលផ្តុំទំហំជួញដូរសហគមន៍តាមរយៈ Mongsay House និងបណ្តាញសម្ព័ន្ធស្ថាប័ន។",
  "Dynamic routing engines automatically select optimal banking and digital currency rails to ensure 99.8% first-pass authorization rates and sub-second processing.": "ម៉ាស៊ីនកំណត់ផ្លូវឆ្លាតវៃជ្រើសរើសផ្លូវធនាគារ និងរូបិយប័ណ្ណឌីជីថលដ៏ល្អបំផុតដោយស្វ័យប្រវត្តិ ដើម្បីធានាអត្រាជោគជ័យ ៩៩.៨% និងដំណើរការលឿនជាងមួយវិនាទី។",
  "Real-time cross-currency hedging and automated multi-currency conversion to eliminate merchant foreign exchange exposure across volatile trading pairs.": "ការការពារហានិភ័យប្តូរប្រាក់ភ្លាមៗ និងការបម្លែងពហុរូបិយប័ណ្ណស្វ័យប្រវត្តិ ដើម្បីលុបបំបាត់ហានិភ័យអត្រាប្តូរប្រាក់សម្រាប់អាជីវករ។",
  "RESTful & Webhook architecture with enterprise SDKs, instant sandbox provisioning, and seamless checkout UI integrations for rapid merchant deployment.": "ស្ថាបត្យកម្ម RESTful & Webhook ជាមួយ Enterprise SDK, បរិស្ថាន Sandbox ភ្លាមៗ និងផ្ទាំងទូទាត់ UI យ៉ាងរលូន។",
  "Trade directly against Tier-1 bank liquidity with zero retail broker markups.": "ជួញដូរដោយផ្ទាល់ជាមួយសាច់ប្រាក់ងាយស្រួលធនាគារ Tier-1 ដោយគ្មានការបូកបន្ថែមថ្លៃពីឈ្មួញជើងសាលក់រាយ។",
  "Transparent cashback distribution per lot traded directly into user client accounts, reducing total spread friction by up to 85% with weekly distributions.": "ការបែងចែកប្រាក់ត្រឡប់មកវិញក្នុងមួយ Lot យ៉ាងមានតម្លាភាពទៅក្នុងគណនីជួញដូរផ្ទាល់ ដោយកាត់បន្ថយការកកិត Spread រហូតដល់ ៨៥% ជាមួយការទូទាត់ប្រចាំសប្តាហ៍។",
  "Vetting and onboarding only top-tier regulated brokers with proven segregated accounts, negative balance protection, and institutional ECN/STP execution.": "ការជ្រើសរើស និងតភ្ជាប់តែឈ្មួញជើងសាដែលមានអាជ្ញាប័ណ្ណលំដាប់ខ្ពស់ គណនីដាច់ដោយឡែក ការពារសមតុល្យអវិជ្ជមាន និងការប្រតិបត្តិ ECN/STP កម្រិតស្ថាប័ន។",
  "End-to-end advisory for introducing brokers (IBs) and emerging brokerages looking to establish institutional liquidity, CRM engines, and regional market penetration.": "ការប្រឹក្សាគ្រប់ជ្រុងជ្រោយសម្រាប់ IB និង Brokerage ថ្មីៗដែលចង់បង្កើតសាច់ប្រាក់ងាយស្រួលស្ថាប័ន ប្រព័ន្ធ CRM និងការពង្រីកទីផ្សារក្នុងតំបន់។",
  "Direct market entry playbook across Cambodia, Thailand, and Vietnam.": "យុទ្ធសាស្ត្រវាយលុកទីផ្សារជាក់ស្តែងនៅកម្ពុជា ថៃ និងវៀតណាម។",
  "Complete licensing pathways, MT4/MT5 bridges, and CRM architecture.": "ដំណោះស្រាយអាជ្ញាប័ណ្ណពេញលេញ, ស្ពាន MT4/MT5 និងស្ថាបត្យកម្ម CRM។",
  "Maximize institutional commission splits across regional networks.": "បង្កើនការបែងចែកកម្រៃជើងសារស្ថាប័នជាអតិបរមានៅទូទាំងបណ្តាញក្នុងតំបន់។",
  "Institutional volume rebates directly returned to you weekly.": "Rebate ទំហំជួញដូរស្ថាប័នត្រូវបានទូទាត់ជូនអ្នកដោយផ្ទាល់រៀងរាល់សប្តាហ៍។",
  "Payouts credited directly to your trading account or USDT wallet.": "ប្រាក់ត្រូវបានបញ្ចូលដោយផ្ទាល់ទៅក្នុងគណនីជួញដូរ ឬកាបូប USDT របស់អ្នក។"
};

// Merged secondary vocabulary covering cards, tables, modal and media
Object.assign(PHRASE_DICTIONARY_KH, {
  "Plug-and-play RESTful API with pre-built checkout modules.": "RESTful API ងាយស្រួលប្រើជាមួយម៉ូឌុលទូទាត់ប្រាក់ដែលបានរៀបចំស្រេច។",
  "Sub-second settlement with zero rolling reserves": "ការទូទាត់លឿនជាងមួយវិនាទីដោយគ្មានការទប់ប្រាក់បម្រុង",
  "Real-time processing with zero rolling reserves for whitelisted merchants.": "ដំណើរការតាមពេលវេលាជាក់ស្តែងដោយគ្មានការទប់ប្រាក់បម្រុង (Zero Rolling Reserves) សម្រាប់ពាណិជ្ជករក្នុងបញ្ជីស។",
  "Zero setup fee for high-throughput merchants": "មិនគិតថ្លៃដំឡើងសម្រាប់ពាណិជ្ជករដែលមានទំហំប្រតិបត្តិការធំ",

  // Ventures Cards & Links
  "Private Alpha Guild & Institutional Mentorship": "សមាគមឯកជន Alpha & ការបណ្តុះបណ្តាលស្ថាប័ន",
  "Global Merchant Acquiring & Cross-Border Rails": "សមាគមឯកជន Alpha & ការបណ្តុះបណ្តាលស្ថាប័ន",
  "Elite Quantitative Playbooks": "យុទ្ធសាស្ត្របរិមាណកម្រិតខ្ពស់",
  "Tier-1 Global Merchant Acquiring": "យុទ្ធសាស្ត្របរិមាណកម្រិតខ្ពស់",
  "Multi-Currency Settlement (USD, EUR, KHR)": "ការទូទាត់ពហុរូបិយប័ណ្ណ (USD, EUR, KHR)",
  "High-Throughput API Gateway": "ច្រកទូទាត់ API ល្បឿនលឿន & សុវត្ថិភាពខ្ពស់",
  "Card & Alternative Payment Rails": "ផ្លូវទូទាត់តាមកាត និងវិធីសាស្ត្រទូទាត់ទំនើប",
  "Join VIP Guild at t.me/mongsayhouse17": "ចូលរួម VIP Guild នៅ t.me/mongsayhouse17",
  "Acquiring Specs →": "លក្ខណៈបច្ចេកទេសច្រកទូទាត់ →",
  "Architecture Specs →": "លក្ខណៈបច្ចេកទេសស្ថាបត្យកម្ម →",
  "SAGFX.ORG": "SAGFX.ORG",
  "Country Manager & Lead Institutional Brokerage": "នាយកគ្រប់គ្រងប្រចាំប្រទេស & ឈ្មួញជើងសាស្ថាប័នឈានមុខ",
  "Institutional Brokerage BDM & Tier-1 Liquidity": "នាយកគ្រប់គ្រងប្រចាំប្រទេស & ឈ្មួញជើងសាស្ថាប័នឈានមុខ",
  "Country Management & Strategic Brokerage": "ការគ្រប់គ្រងប្រទេស & ឈ្មួញជើងសាជាយុទ្ធសាស្ត្រ",
  "Lead Broker BDM Strategy & Architecture": "ការគ្រប់គ្រងប្រទេស & ឈ្មួញជើងសាជាយុទ្ធសាស្ត្រ",
  "Whitelisted Direct Interbank Spreads": "Spread ផ្ទាល់ពីទីផ្សារអន្តរធនាគារកម្រិត Whitelist",
  "Automated Trader Commission Rebate Yield": "ទិន្នផល Rebate កម្រៃជើងសាស្វ័យប្រវត្តិសម្រាប់ Trader",
  "FinTech Community Incubator": "មជ្ឈមណ្ឌលបណ្តុះបណ្តាលសហគមន៍ FinTech",
  "Visit SAGFX Portal": "ចូលកាន់គេហទំព័រ SAGFX",
  "Brokerage Frameworks →": "ក្របខ័ណ្ឌឈ្មួញជើងសា →",
  "BDM Frameworks →": "ក្របខ័ណ្ឌឈ្មួញជើងសា →",
  "Explore Broker Partners on sagfx.org": "ស្វែងយល់ពីដៃគូ Broker លើ sagfx.org",
  "Join Mongsay House Alpha Telegram": "ចូលរួម Telegram Mongsay House Alpha",

  // Badges & Perks
  "⚡ XAU/USD Structure Mapping": "⚡ ការវិភាគរចនាសម្ព័ន្ធ XAU/USD",
  "🛡️ Institutional Risk Models": "🛡️ គំរូគ្រប់គ្រងហានិភ័យស្ថាប័ន",
  "💎 Broker Commission Rebates": "💎 Rebate កម្រៃជើងសាឈ្មួញជើងសា",
  "🌐 Global FinTech Network": "🌐 បណ្តាញ FinTech សកល",
  "⚡ 0% SETUP FEE FOR ONLINE MERCHANTS": "⚡ ០% ថ្លៃដំឡើងសម្រាប់អាជីវកម្មអនឡាញ",
  "⚡ 0% SETUP FEE FOR QUALIFIED MERCHANTS": "⚡ ០% ថ្លៃដំឡើងសម្រាប់អាជីវករមានលក្ខខណ្ឌគ្រប់គ្រាន់",
  "⚡ SAVE UP TO $5,000 ON GATEWAY SETUP": "⚡ ចំណេញរហូតដល់ $5,000 លើការដំឡើងច្រកទូទាត់",
  "💰 RECOVER UP TO 85% REBATES": "💰 ទទួលបាន REBATE រហូតដល់ ៨៥%",
  "💰 RECOVER UP TO 85% TRADING COMMISSIONS": "💰 ទទួលបានកម្រៃជើងសាក្នុងការជួញដូររហូតដល់ ៨៥% ត្រឡប់មកវិញ",
  "💰 UP TO 85% BROKER REBATES": "💰 REBATE ឈ្មួញជើងសារហូតដល់ ៨៥%",
  "🏛️ TURNKEY WHITE-LABEL ARCHITECTURE": "🏛️ ស្ថាបត្យកម្ម WHITE-LABEL ពេញលេញ",
  "🏛️ TURNKEY WHITE-LABEL BROKERAGE": "🏛️ BROKERAGE WHITE-LABEL ពេញលេញ",

  // Gold Matrix Table
  "Tier Classification": "ចំណាត់ថ្នាក់កម្រិត",
  "Contract Size": "ទំហំកិច្ចសន្យា",
  "1 Pip Movement": "ចលនា ១ Pip",
  "SAGFX Rebate Yield": "ទិន្នផល Rebate SAGFX",
  "Institutional Friction": "ការកកិតថ្លៃដើមស្ថាប័ន",
  "Standard Lot (1.00)": "Standard Lot (១.០០)",
  "Mini Lot (0.10)": "Mini Lot (០.១០)",
  "Micro Lot (0.01)": "Micro Lot (០.០១)",
  "100 Troy Ounces": "១០០ Troy Ounces",
  "10 Troy Ounces": "១០ Troy Ounces",
  "1 Troy Ounce": "១ Troy Ounce",
  "Raw ECN Interbank (0.0 - 0.2 pips)": "Raw ECN Interbank (០.០ - ០.២ pips)",
  "Direct Bridge Route": "ផ្លូវស្ពានផ្ទាល់",
  "Fractional Liquidity Feed": "លំហូរសាច់ប្រាក់ងាយស្រួលបំណែក",

  // Advisory Pillars
  "Country Management & Scale": "ការគ្រប់គ្រងប្រទេស & ការពង្រីក",
  "Country Management & Regional Brokerage Expansion": "ការគ្រប់គ្រងប្រទេស & ការពង្រីកឈ្មួញជើងសាក្នុងតំបន់",
  "Institutional Liquidity Bridges": "ស្ពានសាច់ប្រាក់ងាយស្រួលស្ថាប័ន",
  "Lead Brokerage & Tier-1 Liquidity": "ឈ្មួញជើងសាឈានមុខ & សាច់ប្រាក់ Tier-1",
  "Broker BDM & Tier-1 Liquidity": "ឈ្មួញជើងសាឈានមុខ & សាច់ប្រាក់ Tier-1",
  "Consulting for institutional brokerages to scale active trading volumes, negotiate prime liquidity bridges, and structure high-retention IB distribution.": "ការប្រឹក្សាយោបល់សម្រាប់ឈ្មួញជើងសាស្ថាប័ន ដើម្បីពង្រីកទំហំជួញដូរ ចរចាស្ពានសាច់ប្រាក់ងាយស្រួល Prime និងរៀបចំបណ្តាញចែកចាយ IB ដែលមានស្ថិរភាពខ្ពស់។",
  "Payment Gateway Architecture": "ស្ថាបត្យកម្មច្រកទូទាត់ប្រាក់",
  "Architecting resilient payment rails, multi-currency settlement channels, and compliant merchant acquiring for global e-commerce and fintech operators.": "ការកសាងប្រព័ន្ធទូទាត់ដ៏រឹងមាំ បណ្តាញទូទាត់ពហុរូបិយប័ណ្ណ និងច្រកទូទាត់ពាណិជ្ជករស្របច្បាប់សម្រាប់ពាណិជ្ជកម្មអេឡិចត្រូនិកសកល និងប្រតិបត្តិករ FinTech។",
  "Quantitative Market Strategy": "យុទ្ធសាស្ត្រទីផ្សារបរិមាណ",
  "Systematic market structure analysis focused on Gold (XAU/USD), macro currency flows, and institutional supply/demand mechanics.": "ការវិភាគរចនាសម្ព័ន្ធទីផ្សារជាប្រព័ន្ធផ្តោតលើមាស (XAU/USD), លំហូររូបិយប័ណ្ណម៉ាក្រូ និងយន្តការតម្រូវការ និងការផ្គត់ផ្គង់ (Supply/Demand) របស់ស្ថាប័ន។",
  "FinTech Community Incubation": "ការបង្កើតសហគមន៍ FinTech",
  "Cultivating high-performance private alpha communities, trading education platforms, and regional trader networks across Southeast Asia.": "ការអភិវឌ្ឍសហគមន៍ Alpha ឯកជនដែលមានសមត្ថភាពខ្ពស់ វេទិកាអប់រំការជួញដូរ និងបណ្តាញ Trader ក្នុងតំបន់អាស៊ីអាគ្នេយ៍។",
  "Lead Brokerage & Advisory": "ឈ្មួញជើងសាឈានមុខ & ការប្រឹក្សា",
  "Broker BDM & Advisory": "ឈ្មួញជើងសាឈានមុខ & ការប្រឹក្សា",
  "Lead Brokerage & Master IB Expansion": "ឈ្មួញជើងសាឈានមុខ & ការពង្រីក Master IB",
  "Broker BDM & Master IB Expansion": "ឈ្មួញជើងសាឈានមុខ & ការពង្រីក Master IB",
  "Lead Brokerage & White-Label": "ឈ្មួញជើងសាឈានមុខ & ប្រព័ន្ធ White-Label",
  "Broker BDM & White-Label": "ឈ្មួញជើងសាឈានមុខ & ប្រព័ន្ធ White-Label",
  "Broker Development (BDM)": "ការគ្រប់គ្រងប្រទេស & ការពង្រីក",
  "Broker Development Management & Advisory": "ការគ្រប់គ្រងប្រទេស & ឈ្មួញជើងសាជាយុទ្ធសាស្ត្រ",
  "Broker Inception & Master IB": "ឈ្មួញជើងសាឈានមុខ & Master IB",
  "Broker Partnerships & IB Desk": "ភាពជាដៃគូ Broker & ការិយាល័យ IB",
  "Brokerage & Liquidity Optimization": "ឈ្មួញជើងសា & ការបង្កើនប្រសិទ្ធភាពសាច់ប្រាក់ងាយស្រួល",
  "BDM & Liquidity Optimization": "ឈ្មួញជើងសា & ការបង្កើនប្រសិទ្ធភាពសាច់ប្រាក់ងាយស្រួល",
  "Regional Market Growth": "កំណើនទីផ្សារក្នុងតំបន់",
  "BDM & Regional Market Growth": "កំណើនទីផ្សារក្នុងតំបន់",
  "Payment Rail Architecture": "ស្ថាបត្យកម្មផ្លូវទូទាត់",
  "Merchant Onboarding & Enterprise Solutions": "ការតភ្ជាប់ពាណិជ្ជករ & ដំណោះស្រាយសហគ្រាស",
  "Enterprise Gateway Launch": "ការដំឡើងច្រកទូទាត់សម្រាប់សហគ្រាស",
  "Fast-Track Gateway Onboarding": "ការភ្ជាប់ច្រកទូទាត់ល្បឿនលឿន",
  "Cashback & Rebate Networks": "បណ្តាញ Cashback & Rebate",
  "Cashback Rebate": "Rebate ទឹកប្រាក់ត្រឡប់មកវិញ",
  "Whitelisted ECN Rebate Account": "គណនី Rebate ECN កម្រិត Whitelist",
  "Whitelisted ECN Rebates": "អត្រា Rebate ECN ពិសេស Whitelisted",
  "Strategic Advisory": "ការប្រឹក្សាយុទ្ធសាស្ត្រ",
  "Strategic Venture Investment & Partnership": "ការវិនិយោគអាជីវកម្មយុទ្ធសាស្ត្រ & ភាពជាដៃគូ",
  "Quantitative Market Structure Consultation": "ការពិគ្រោះយោបល់អំពីរចនាសម្ព័ន្ធទីផ្សារបរិមាណ",
  "Direct VIP Advisory & Private Enrollment": "ការប្រឹក្សា VIP ផ្ទាល់ & ការចុះឈ្មោះជាលក្ខណៈឯកជន",

  // Bullets & Details (Advisory & Promotions)
  "48-Hour Rapid Integration:": "ការតភ្ជាប់រហ័សក្នុងរយៈពេល ៤៨ ម៉ោង៖",
  "Direct REST API with turnkey checkout components": "REST API ផ្ទាល់ជាមួយសមាសភាគទូទាត់ប្រាក់ដែលស្រេចបាច់",
  "Instant Multi-Currency Rails:": "ផ្លូវទូទាត់ពហុរូបិយប័ណ្ណភ្លាមៗ៖",
  "USDT (TRC-20/ERC-20), USD, KHR (Bakong / KHQR), THB, and VND.": "USDT (TRC-20/ERC-20), USD, KHR (បាគង / KHQR), THB, និង VND។",
  "Direct CEO Office technical escalation": "ការដោះស្រាយបច្ចេកទេសកម្រិតខ្ពស់ផ្ទាល់ពីការិយាល័យ CEO",
  "Executive Desk Priority:": "អាទិភាពការិយាល័យប្រតិបត្តិ៖",
  "Dedicated escalation channel with CEO Mong Say": "បណ្តាញទំនាក់ទំនងបន្ទាន់ផ្ទាល់ជាមួយ CEO Mong Say",
  "Recover $30 to $45+ Per Lot:": "ទទួលបាន $30 ទៅ $45+ ក្នុងមួយ Lot ត្រឡប់មកវិញ៖",
  "Raw 0.0 Pip ECN Spreads:": "អត្រា Spread Raw 0.0 Pip ECN៖",
  "Raw 0.0 Pip Tier-1 bank ECN spreads": "Spread Raw 0.0 Pip ECN ពីធនាគារកម្រិត Tier-1",
  "Automated Weekly Settlement:": "ការទូទាត់ស្វ័យប្រវត្តិប្រចាំសប្តាហ៍៖",
  "Automated weekly payout directly to your wallet": "ការទូទាត់ស្វ័យប្រវត្តប្រចាំសប្តាហ៍ចូលកាបូបផ្ទាល់ខ្លួន",
  "Automated weekly payouts directly credited": "ការទូទាត់ប្រចាំសប្តាហ៍ស្វ័យប្រវត្តិបញ្ចូលក្នុងគណនីផ្ទាល់",
  "VIP Community Access:": "ការចូលប្រើប្រាស់សហគមន៍ VIP៖",
  "Free lifetime pass to": "សំបុត្រចូលរួមឥតគិតថ្លៃមួយជីវិតទៅកាន់",
  "Lifetime VIP pass to t.me/mongsayhouse17": "សិទ្ធិចូលរួម VIP មួយជីវិតទៅកាន់ t.me/mongsayhouse17",
  "VIP community pass to t.me/mongsayhouse17": "សិទ្ធិចូលរួមសហគមន៍ VIP ទៅកាន់ t.me/mongsayhouse17",
  "Turnkey White-Label Setup:": "ការរៀបចំ White-Label ពេញលេញ៖",
  "Turnkey licensing pathways & MT4/MT5 bridges": "ដំណោះស្រាយអាជ្ញាប័ណ្ណពេញលេញ & ស្ពាន MT4/MT5",
  "Highest-Tier Master IB Splits:": "ការបែងចែកភាគរយ Master IB កម្រិតខ្ពស់បំផុត៖",
  "Highest-tier Master IB regional split agreements": "កិច្ចព្រមព្រៀងបែងចែកភាគរយ Master IB កម្រិតខ្ពស់បំផុតក្នុងតំបន់",
  "Highest-tier regional Master IB rebate splits": "អត្រាបែងចែក Rebate Master IB កម្រិតខ្ពស់បំផុតក្នុងតំបន់",
  "Southeast Asia Penetration:": "ការពង្រីកទីផ្សារនៅអាស៊ីអាគ្នេយ៍៖",
  "Private Executive Mastermind:": "ការពិភាក្សាប្រតិបត្តិឯកជន Mastermind៖",
  "1-on-1 private advisory mastermind with Mong Say": "ការប្រឹក្សាផ្ទាល់ ១ ទល់នឹង ១ ជាលក្ខណៈឯកជនជាមួយ Mong Say",
  "1-on-1 strategy mastermind with Mong Say": "ការប្រជុំយុទ្ធសាស្ត្រផ្ទាល់ ១ ទល់នឹង ១ ជាមួយ Mong Say",
  "1-on-1 strategy sessions with Mong Say.": "វគ្គប្រជុំយុទ្ធសាស្ត្រ ១ ទល់នឹង ១ ជាមួយ Mong Say។",
  "PCI-DSS L1 Compliant": "អនុលោមតាមស្តង់ដារ PCI-DSS L1",
  "PCI-DSS Level 1 compliant gateway infrastructure": "ហេដ្ឋារចនាសម្ព័ន្ធច្រកទូទាត់ស្របតាមស្តង់ដារ PCI-DSS កម្រិត ១",
  "Smart Routing & High TPS": "ការកំណត់ផ្លូវឆ្លាតវៃ & TPS ខ្ពស់",
  "Developer-First APIs": "API ងាយស្រួលសម្រាប់ Developer",
  "Borderless Commerce": "ពាណិជ្ជកម្មគ្មានព្រំដែន",
  "Settlement Speed": "ល្បឿននៃការទូទាត់",
  "Automated FX Treasury": "រតនាគារប្តូរប្រាក់ FX ស្វ័យប្រវត្តិ",
  "Real-time / Sub-second": "ពេលវេលាជាក់ស្តែង / លឿនជាង ១ វិនាទី",
  "Automated Weekly": "ស្វ័យប្រវត្តប្រចាំសប្តាហ៍",
  "Automated Rebate Engine": "ម៉ាស៊ីន Rebate ស្វ័យប្រវត្តិ",
  "Regulated Broker Verification": "ការផ្ទៀងផ្ទាត់ Broker ដែលមានអាជ្ញាប័ណ្ណត្រឹមត្រូវ",
  "Raw Institutional Limit": "ដែនកំណត់ស្ថាប័នកម្រិត Raw",
  "Raw 0.0 Pip ECN institutional spread bridge": "ស្ពាន Spread ស្ថាប័នកម្រិត Raw 0.0 Pip ECN",
  "Partner Broker Networks:": "បណ្តាញ Broker ដៃគូ៖",
  "Partner Brokers:": "Broker ដៃគូ៖",
  "Infrastructure Breakdown": "រចនាសម្ព័ន្ធហេដ្ឋារចនាសម្ព័ន្ធលម្អិត",

  // Book Titles, Authors, and Details
  "Principles: Life and Work": "គោលការណ៍ជីវិត និងការងារ (Principles)",
  "by Ray Dalio": "ដោយ Ray Dalio",
  "Systemic Logic": "តក្កវិជ្ជាប្រព័ន្ធ",
  "The Psychology of Money": "The Psychology of Money (ចិត្តវិទ្យានៃលុយ)",
  "by Morgan Housel": "ដោយ Morgan Housel",
  "Cognitive Bias": "ភាពលំអៀងនៃការយល់ដឹង",
  "Antifragile: Things That Gain from Disorder": "Antifragile: អត្ថប្រយោជន៍ពីភាពចលាចល",
  "by Nassim Nicholas Taleb": "ដោយ Nassim Nicholas Taleb",
  "Asymmetric Risk": "ហានិភ័យមិនស្មើគ្នា (Asymmetric Risk)",
  "Thinking, Fast and Slow": "Thinking, Fast and Slow (ការគិត, លឿន និងយឺត)",
  "by Daniel Kahneman": "ដោយ Daniel Kahneman",
  "Cognitive Discipline": "វិន័យនៃការគិត",
  "Trading in the Zone": "Trading in the Zone (វិន័យ និងផ្នត់គំនិតជួញដូរ)",
  "by Mark Douglas": "ដោយ Mark Douglas",
  "Probabilistic Mindset": "ផ្នត់គំនិតប្រូបាប៊ីលីតេ",
  "Reminiscences of a Stock Operator": "ការចងចាំរបស់អ្នកជួញដូរភាគហ៊ុន (Reminiscences of a Stock Operator)",
  "by Edwin Lefèvre": "ដោយ Edwin Lefèvre",
  "Tape Reading & Liquidity": "ការអាន Tape & សាច់ប្រាក់ងាយស្រួល",
  "The Alchemy of Finance": "The Alchemy of Finance (អាថ៌កំបាំងហិរញ្ញវត្ថុ)",
  "by George Soros": "ដោយ George Soros",
  "Reflexivity Theory": "ទ្រឹស្តី Reflexivity",
  "Macro Reflexivity": "ទ្រឹស្តី Reflexivity ម៉ាក្រូ",
  "The Sovereign Individual": "The Sovereign Individual (បុគ្គលអធិបតេយ្យ)",
  "by James Dale Davidson & Lord William Rees-Mogg": "ដោយ James Dale Davidson & Lord William Rees-Mogg",
  "Macro Foresight": "ចក្ខុវិស័យម៉ាក្រូសេដ្ឋកិច្ច",
  "Executive Essential": "ឯកសារចាំបាច់សម្រាប់ថ្នាក់ដឹកនាំ",
  "Capital Preservation": "ការការពារដើមទុន",
  "Convex Payoffs": "ផលចំណេញកោង (Convex Payoffs)",
  "Mechanical Market Structure": "រចនាសម្ព័ន្ធទីផ្សារមេកានិក",
  "Trading Psychology": "ចិត្តវិទ្យាជួញដូរ",
  "Historical Foundation": "គ្រឹះប្រវត្តិសាស្ត្រ",
  "Systematic Reality": "តថភាពជាប្រព័ន្ធ",
  "Risk & Leadership": "ហានិភ័យ & ភាពជាអ្នកដឹកនាំ",
  "FinTech & Macro": "FinTech & សេដ្ឋកិច្ចម៉ាក្រូ",
  "Executive Mindset": "ផ្នត់គំនិតថ្នាក់ប្រតិបត្តិ",

  // Media Channels & Feeds
  "YouTube Channel": "YouTube Channel",
  "YouTube Live": "YouTube Live",
  "YouTube Broadcasts": "YouTube Broadcasts",
  "YouTube Analysis": "ការវិភាគលើ YouTube",
  "YouTube @MongSayFX": "YouTube @MongSayFX",
  "YouTube: @MongSayFX": "YouTube: @MongSayFX",
  "Facebook Page": "ទំព័រ Facebook",
  "Facebook Community": "សហគមន៍ Facebook",
  "Facebook: @MongsayFX": "Facebook: @MongsayFX",
  "Telegram VIP": "Telegram VIP",
  "Community VIP Channel": "Channel VIP របស់សហគមន៍",
  "Telegram: @mongsayhouse17": "Telegram: @mongsayhouse17",
  "TikTok Official": "TikTok ផ្លូវការ",
  "TikTok Short Insights": "វីដេអូខ្លីលើ TikTok",
  "TikTok: @mongsayfx": "TikTok: @mongsayfx",
  "Watch Analysis →": "ទស្សនាការវិភាគ →",
  "Watch Breakdown →": "ទស្សនាការបំបែករចនាសម្ព័ន្ធ →",
  "Watch Masterclass →": "ទស្សនាវគ្គ Masterclass →",
  "Watch Session →": "ទស្សនាវគ្គចែករំលែក →",
  "Subscribe →": "ជាវ (Subscribe) →",
  "Subscribe Channel →": "ជាវ Channel →",
  "Follow Feed →": "តាមដានព័ត៌មាន →",
  "Follow TikTok →": "តាមដាន TikTok →",
  "Follow Updates →": "តាមដានការអាប់ដេត →",
  "Join Community →": "ចូលរួមសហគមន៍ →",
  "Join VIP Channel →": "ចូលរួម VIP Channel →",
  "Connect →": "ភ្ជាប់ទំនាក់ទំនង →",
  "Connect with": "ភ្ជាប់ទំនាក់ទំនងជាមួយ",
  "Live Analysis": "ការវិភាគផ្ទាល់",
  "Market Insights": "ការយល់ដឹងអំពីទីផ្សារ",

  // Market Sessions
  "Sydney (22:00–07:00 UTC)": "ស៊ីដនី (22:00–07:00 UTC)",
  "Tokyo (00:00–09:00 UTC)": "តូក្យូ (00:00–09:00 UTC)",
  "London Open (08:00–17:00 UTC)": "ទីផ្សារឡុងដ៍បើក (08:00–17:00 UTC)",
  "New York (13:00–22:00 UTC)": "ញូវយ៉ក (13:00–22:00 UTC)",
  "NY/London Killzone (XAU/USD)": "ម៉ោងមាស NY/London Killzone (XAU/USD)",

  // Calculator Options & Pairs
  "Gold (XAU/USD) - $8.50/lot": "មាស (XAU/USD) - $8.50/lot",
  "EUR/USD - $6.00/lot": "EUR/USD - $6.00/lot",
  "GBP/USD - $7.00/lot": "GBP/USD - $7.00/lot",
  "US30 / Indices - $5.00/lot": "US30 / សន្ទស្សន៍ - $5.00/lot",
  "Crypto Rails - $12.00/lot": "ផ្លូវ Crypto - $12.00/lot",
  "Gold (XAU/USD) - $10.00/pip": "មាស (XAU/USD) - $10.00/pip",
  "EUR/USD - $10.00/pip": "EUR/USD - $10.00/pip",
  "GBP/USD - $10.00/pip": "GBP/USD - $10.00/pip",
  "US30 / Indices - $5.00/pt": "US30 / សន្ទស្សន៍ - $5.00/pt",
  "IC Markets (Raw Spread)": "IC Markets (Raw Spread)",
  "Exness (Zero Pro)": "Exness (Zero Pro)",
  "FP Markets (ECN Raw)": "FP Markets (ECN Raw)",
  "Vantage Markets (Pro ECN)": "Vantage Markets (Pro ECN)",
  "BlackBull Markets": "BlackBull Markets",
  "IC Markets": "IC Markets",
  "FP Markets": "FP Markets",
  "BlackBull": "BlackBull",
  "OANDA": "OANDA",
  "Asset Class": "ប្រភេទទ្រព្យសកម្ម",
  "Asset Pair": "គូទ្រព្យសកម្ម",
  "Execution Mode": "ទម្រង់ប្រតិបត្តិការ",
  "Execution Cost Engineering": "វិស្វកម្មកាត់បន្ថយថ្លៃដើមប្រតិបត្តិការ",
  "Risk %": "% ហានិភ័យ",
  "Target 1:3 RR Gain": "គោលដៅប្រាក់ចំណេញ 1:3 RR",
  "Payout Schedule": "កាលវិភាគទូទាត់ប្រាក់",
  "Access SAGFX Trader Cashback Portal": "ចូលកាន់គេហទំព័រ Cashback សម្រាប់ Trader របស់ SAGFX",

  // Form & Modal Fields
  "Consultation Scope": "វិសាលភាពនៃការពិគ្រោះយោបល់"
});

// Merged third section covering form, modal, and footer
Object.assign(PHRASE_DICTIONARY_KH, {
  "Inquiry Classification": "ចំណាត់ថ្នាក់នៃការសាកសួរ",
  "Full Name / Title": "ឈ្មោះពេញ / តួនាទី",
  "Corporate Email": "អ៊ីមែលក្រុមហ៊ុន",
  "Executive Name": "ឈ្មោះថ្នាក់ប្រតិបត្តិ",
  "Executive Role": "តួនាទីប្រតិបត្តិ",
  "Organization / Firm": "អង្គភាព / ក្រុមហ៊ុន",
  "Preferred Date & Timeframe": "កាលបរិច្ឆេទ & ពេលវេលាដែលចង់បាន",
  "Executive Brief / Proposal": "របាយការណ៍សង្ខេបប្រតិបត្តិ / សំណើ",
  "Schedule Executive Session": "កំណត់កាលវិភាគពិភាក្សាប្រតិបត្តិ",
  "Book Consultation Session": "កក់វគ្គប្រឹក្សាយោបល់",
  "Confirm Session Request": "បញ្ជាក់ការស្នើសុំកាលវិភាគ",
  "Engage Mongsay for": "ទាក់ទង Mongsay សម្រាប់",
  "DIRECT ACCESS": "ការចូលប្រើប្រាស់ផ្ទាល់",
  "Personal VIP Telegram (Primary)": "Telegram VIP ផ្ទាល់ខ្លួន (ចម្បង)",
  "Country Management & White-Label Rails": "ការគ្រប់គ្រងប្រទេស & ផ្លូវ White-Label",
  "SAG Payment Merchant Rail Direct Channel": "ការគ្រប់គ្រងប្រទេស & ផ្លូវ White-Label",
  "SAGFX Lead Brokerage & Liquidity Partnership": "ភាពជាដៃគូឈ្មួញជើងសាឈានមុខ & សាច់ប្រាក់ងាយស្រួល SAGFX",
  "SAGFX Broker BDM & Liquidity Partnership": "ភាពជាដៃគូឈ្មួញជើងសាឈានមុខ & សាច់ប្រាក់ងាយស្រួល SAGFX",
  "White-Label Brokerage Launchpad": "ប្រព័ន្ធ White-Label Brokerage",
  "SAG Payment Gateway Merchant Rails": "ប្រព័ន្ធ White-Label Brokerage",
  "SAGFX Institutional Brokerage & Liquidity Setup": "ការរៀបចំឈ្មួញជើងសាស្ថាប័ន & សាច់ប្រាក់ងាយស្រួល SAGFX",
  "SAGFX Institutional Broker BDM & Liquidity Setup": "ការរៀបចំឈ្មួញជើងសាស្ថាប័ន & សាច់ប្រាក់ងាយស្រួល SAGFX",
  "SAGFX Institutional Rebate Whitelisting": "ការចុះឈ្មោះបញ្ជីស Rebate ស្ថាប័ន SAGFX",
  "Institutional Liquidity Bridge Integration": "ការតភ្ជាប់ស្ពានសាច់ប្រាក់ងាយស្រួលស្ថាប័ន",
  "SAG Payment Gateway High-Volume Integration": "ការតភ្ជាប់ស្ពានសាច់ប្រាក់ងាយស្រួលស្ថាប័ន",
  "SAGFX.ORG Advisory": "ការប្រឹក្សា SAGFX.ORG",
  "SAGFX.ORG Brokerage": "ឈ្មួញជើងសា SAGFX.ORG",
  "Financial Markets Advisors | Institutional Rebate Network": "ទីប្រឹក្សាទីផ្សារហិរញ្ញវត្ថុ | បណ្តាញ Rebate ស្ថាប័ន",
  "Country Manager & Lead Brokerage": "នាយកគ្រប់គ្រងប្រចាំប្រទេស & ឈ្មួញជើងសាឈានមុខ",
  "Financial Advisor & BDM": "នាយកគ្រប់គ្រងប្រចាំប្រទេស & ឈ្មួញជើងសាឈានមុខ",
  "Direct escalation to CEO Office": "ការដោះស្រាយបន្ទាន់ផ្ទាល់ទៅកាន់ការិយាល័យ",
  "Up to $8.50 / Lot": "រហូតដល់ $8.50 / Lot",
  "Up to $0.85 / Mini": "រហូតដល់ $0.85 / Mini",
  "Up to $0.08 / Micro": "រហូតដល់ $0.08 / Micro",
  "Light": "ពន្លឺ",
  "Light Mode": "ម៉ូដពន្លឺ (Light)",
  "Dark": "ងងឹត",
  "Dark Mode": "ម៉ូដងងឹត (Dark)",

  // VIP Telegram Steps & Perks
  "Tap 'Enroll via @MongsayFX' to launch official Telegram chat.": "ចុច 'ចុះឈ្មោះតាម @MongsayFX' ដើម្បីបើកការសន្ទនា Telegram ផ្លូវការ។",
  "State your partnership focus: Trading Mentorship, Lead Brokerage, or Institutional Rebates.": "បញ្ជាក់ពីគោលដៅភាពជាដៃគូរបស់អ្នក៖ ការបណ្តុះបណ្តាលការជួញដូរ, ឈ្មួញជើងសាឈានមុខ ឬ Rebate ស្ថាប័ន។",
  "State your investment focus: Trading Mentorship, Broker BDM, or Gateway Acquiring.": "បញ្ជាក់ពីគោលដៅភាពជាដៃគូរបស់អ្នក៖ ការបណ្តុះបណ្តាលការជួញដូរ, ឈ្មួញជើងសាឈានមុខ ឬ Rebate ស្ថាប័ន។",
  "Receive institutional whitelist credentials and direct onboarding confirmation.": "ទទួលបានអត្តសញ្ញាណប័ណ្ណ Whitelist ស្ថាប័ន និងការបញ្ជាក់ការចុះឈ្មោះផ្ទាល់។",
  "✅ 1-on-1 Direct Institutional Channel": "✅ បណ្តាញផ្ទាល់ ១ ទល់នឹង ១ កម្រិតស្ថាប័ន",
  "✅ Whitelisted Broker Rebates": "✅ អត្រា Rebate ពិសេស Whitelisted",
  "✅ Daily XAU/USD Structural Breakdowns": "✅ ការវិភាគរចនាសម្ព័ន្ធ XAU/USD ប្រចាំថ្ងៃ",
  "✅ Priority Institutional Onboarding": "✅ ការចុះឈ្មោះកម្រិតស្ថាប័នជាអាទិភាព",
  "✅ Priority Merchant Gateway Integration": "✅ ការចុះឈ្មោះកម្រិតស្ថាប័នជាអាទិភាព",

  // Form Labels & Placeholders
  "Full Name / Organization": "ឈ្មោះពេញ / ស្ថាប័ន",
  "Email Address": "អាសយដ្ឋានអ៊ីមែល",
  "Telegram Handle (@username)": "Telegram Handle (@username)",
  "Primary Inception Focus": "គោលបំណងចម្បង",
  "Strategic Inquiry Details": "ព័ត៌មានលម្អិតនៃសំណើជាយុទ្ធសាស្ត្រ",

  // Buttons & Controls
  "Enroll via @MongsayFX": "ចុះឈ្មោះតាម @MongsayFX",
  "Copy Handle (@MongsayFX)": "ចម្លង (@MongsayFX)",
  "Scan with Telegram App": "ស្កេនជាមួយកម្មវិធី Telegram",
  "Transmit Strategic Inquiry": "ផ្ញើសំណើជាយុទ្ធសាស្ត្រ",
  "View All Updates on Telegram": "មើលព័ត៌មានថ្មីៗទាំងអស់លើ Telegram",
  "Open Full Channel": "ចូលទៅកាន់ Channel ពេញលេញ",
  "Claim Whitelisted Rebate Rate via @MongsayFX": "ទទួលបានអត្រា Rebate តាមរយៈ @MongsayFX",
  "Copy Link": "ចម្លងតំណ",
  "Schedule Strategy Call": "កំណត់កាលវិភាគពិភាក្សា",

  // Footer & Disclaimers
  "Ecosystem": "ប្រព័ន្ធអេកូឡូស៊ី",
  "Institutional Advisory": "ការប្រឹក្សាស្ថាប័ន",
  "Direct Desk": "ការិយាល័យផ្ទាល់",
  "Compliance & Transparency": "ការអនុលោមតាមច្បាប់ & តម្លាភាព",
  "All Rights Reserved.": "រក្សាសិទ្ធិគ្រប់យ៉ាង។",
  "Risk Warning: Financial markets and currency trading involve substantial risk of loss. Historical yields do not guarantee future returns.": "ការព្រមានអំពីហានិភ័យ៖ ការជួញដូរលើទីផ្សារហិរញ្ញវត្ថុ និងរូបិយប័ណ្ណមានហានិភ័យខ្ពស់នៃការខាតបង់។ ទិន្នផលកន្លងមកមិនធានាដល់ប្រាក់ចំណេញនាពេលអនាគតឡើយ។"
});

function initLanguageToggle() {
  const savedLang = localStorage.getItem('mongsay_lang') || 'en';
  applyLanguage(savedLang);

  const langBtns = document.querySelectorAll('.lang-toggle');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = localStorage.getItem('mongsay_lang') || 'en';
      const nextLang = current === 'en' ? 'kh' : 'en';
      applyLanguage(nextLang);
      localStorage.setItem('mongsay_lang', nextLang);
      showToast(nextLang === 'kh' ? 'បានប្តូរទៅជាភាសាខ្មែរ (Khmer Language Active)' : 'Switched to English Language');
    });
  });
}

function applyLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);
  if (lang === 'kh') {
    document.body.classList.add('lang-kh');
  } else {
    document.body.classList.remove('lang-kh');
  }

  // Update language pills in UI
  document.querySelectorAll('.lang-code').forEach(el => {
    if (el.getAttribute('data-lang') === lang) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });

  // 1. Explicit data-i18n elements (e.g. rich hero titles with styled markup)
  const dict = I18N_DICTIONARY[lang] || I18N_DICTIONARY.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // 2. Comprehensive DOM Text-Node Walker: Translates all text nodes in place without breaking tags/SVGs
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: function(node) {
      const p = node.parentElement;
      if (!p) return NodeFilter.FILTER_REJECT;
      const tag = p.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT' || tag === 'CODE') {
        return NodeFilter.FILTER_REJECT;
      }
      if (p.hasAttribute('data-i18n')) {
        return NodeFilter.FILTER_REJECT;
      }
      const val = node.nodeValue;
      if (!val || !val.trim()) return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach(node => {
    if (node._origText === undefined) {
      node._origText = node.nodeValue;
    }
    if (lang === 'kh') {
      const orig = node._origText;
      const clean = orig.replace(/\s+/g, ' ').trim();
      if (PHRASE_DICTIONARY_KH[clean]) {
        const leading = orig.match(/^\s*/)[0];
        const trailing = orig.match(/^\s*$/)[0];
        node.nodeValue = leading + PHRASE_DICTIONARY_KH[clean] + trailing;
      }
    } else {
      if (node._origText !== undefined) {
        node.nodeValue = node._origText;
      }
    }
  });

  // 3. Translate select <option> text
  document.querySelectorAll('option').forEach(opt => {
    if (opt._origText === undefined) {
      opt._origText = opt.textContent;
    }
    const clean = opt._origText.replace(/\s+/g, ' ').trim();
    if (lang === 'kh' && PHRASE_DICTIONARY_KH[clean]) {
      opt.textContent = PHRASE_DICTIONARY_KH[clean];
    } else if (lang === 'en' && opt._origText !== undefined) {
      opt.textContent = opt._origText;
    }
  });

  // 4. Translate form placeholders
  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
    if (!el.hasAttribute('data-en-placeholder')) {
      el.setAttribute('data-en-placeholder', el.getAttribute('placeholder'));
    }
    const origPh = el.getAttribute('data-en-placeholder');
    if (lang === 'kh') {
      if (origPh.includes('Alexander Vance')) {
        el.setAttribute('placeholder', 'ឧ. Alexander Vance / មូលនិធិសកល');
      } else if (origPh.includes('name@fund.com')) {
        el.setAttribute('placeholder', 'ឧ. name@fund.com');
      } else if (origPh.includes('@institutional_trader')) {
        el.setAttribute('placeholder', 'ឧ. @institutional_trader');
      } else if (origPh.includes('capital structure')) {
        el.setAttribute('placeholder', 'រៀបរាប់អំពីរចនាសម្ព័ន្ធទុន, ទំហំច្រកទូទាត់ ឬតម្រូវការយុទ្ធសាស្ត្ររបស់អ្នក...');
      } else if (origPh.includes('Search literature by title')) {
        el.setAttribute('placeholder', 'ស្វែងរកសៀវភៅតាមចំណងជើង, អ្នកនិពន្ធ ឬទស្សនវិជ្ជា...');
      }
    } else {
      el.setAttribute('placeholder', origPh);
    }
  });
}

/* ---------------------------------------------------------
   Smart Pop-Up Floating Toolbar (Pops Up on Scroll Up)
   --------------------------------------------------------- */
function initSmartScrollNav() {
  const navOuter = document.querySelector('.site-nav-outer');
  if (!navOuter) return;

  let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
  let ticking = false;
  const scrollThreshold = 6;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScrollY = Math.max(0, window.pageYOffset || document.documentElement.scrollTop);
        const diff = currentScrollY - lastScrollY;

        // When near top (first 65px), always keep navbar displayed
        if (currentScrollY <= 65) {
          navOuter.classList.remove('nav-hidden');
          navOuter.classList.add('nav-visible');
        } 
        // Scrolling DOWN past threshold -> smoothly hide navbar
        else if (diff > scrollThreshold) {
          navOuter.classList.add('nav-hidden');
          navOuter.classList.remove('nav-visible');
          const mobileMenu = document.getElementById('mobileNavMenu');
          const toggleBtn = document.getElementById('mobileNavToggle');
          if (mobileMenu && mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            if (toggleBtn) toggleBtn.innerHTML = '☰';
          }
        } 
        // Scrolling UP past threshold -> pop up navbar immediately
        else if (diff < -scrollThreshold) {
          navOuter.classList.remove('nav-hidden');
          navOuter.classList.add('nav-visible');
        }

        lastScrollY = currentScrollY;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ---------------------------------------------------------
   1. Interactive 002.jpg Golden Specular Beam & Parallax
   --------------------------------------------------------- */
function initBackgroundLighting() {
  const bgImg = document.querySelector('.bg-img-layer');
  if (!bgImg) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight * 0.25;
  let currentX = mouseX;
  let currentY = mouseY;
  let isMoving = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isMoving = true;
  }, { passive: true });

  function updateLighting() {
    if (isMoving) {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      const xPercent = (currentX / window.innerWidth) * 100;
      const yPercent = (currentY / window.innerHeight) * 100;

      document.documentElement.style.setProperty('--mouse-x', `${xPercent.toFixed(2)}%`);
      document.documentElement.style.setProperty('--mouse-y', `${yPercent.toFixed(2)}%`);

      const xOffset = ((currentX / window.innerWidth) - 0.5) * 14;
      const yOffset = ((currentY / window.innerHeight) - 0.5) * 14;
      bgImg.style.transform = `scale(1.03) translate3d(${xOffset.toFixed(1)}px, ${yOffset.toFixed(1)}px, 0)`;
    }
    requestAnimationFrame(updateLighting);
  }
  updateLighting();
}

/* ---------------------------------------------------------
   1b. Video Background Autoplay Assurance Engine
   --------------------------------------------------------- */
function initVideoBackground() {
  const bgVideos = document.querySelectorAll('.site-bg-video, .video-bg');
  bgVideos.forEach(v => {
    v.muted = true;
    v.setAttribute('playsinline', '');
    const tryPlay = () => {
      const playPromise = v.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback to touch/click resume for mobile power-saver modes
          const resumeOnInteraction = () => {
            v.play().catch(() => {});
            window.removeEventListener('touchstart', resumeOnInteraction);
            window.removeEventListener('click', resumeOnInteraction);
          };
          window.addEventListener('touchstart', resumeOnInteraction, { once: true, passive: true });
          window.addEventListener('click', resumeOnInteraction, { once: true, passive: true });
        });
      }
    };
    tryPlay();
  });
}

/* ---------------------------------------------------------
   2. Starlight Beaming, Stars & Golden Embers Canvas
   --------------------------------------------------------- */
function initGoldDustCanvas() {
  const canvas = document.getElementById('matrixCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = 60;
  let shootingStar = null;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class CosmicParticle {
    constructor() {
      this.reset(true);
    }
    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.vy = -(Math.random() * 0.5 + 0.15);
      this.vx = (Math.random() - 0.5) * 0.3;
      this.size = Math.random() * 2.2 + 0.8;
      this.baseAlpha = Math.random() * 0.5 + 0.25;
      this.alpha = this.baseAlpha;
      this.phase = Math.random() * Math.PI * 2;
      this.speed = Math.random() * 0.03 + 0.012;
      this.isGold = Math.random() > 0.28;
      this.isStar = Math.random() > 0.60;
    }
    update() {
      this.y += this.vy;
      this.x += this.vx;
      this.phase += this.speed;
      this.alpha = this.baseAlpha + Math.sin(this.phase) * 0.25;

      if (this.y < -15 || this.x < -15 || this.x > width + 15) {
        this.reset();
      }
    }
    draw() {
      const currentAlpha = Math.max(0.1, Math.min(1, this.alpha));
      ctx.save();
      ctx.translate(this.x, this.y);

      if (this.isStar) {
        const s = this.size * 2.4;
        const color = this.isGold 
          ? `rgba(255, 242, 198, ${currentAlpha})` 
          : `rgba(56, 189, 248, ${currentAlpha * 0.9})`;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(0, -s);
        ctx.quadraticCurveTo(0, 0, s, 0);
        ctx.quadraticCurveTo(0, 0, 0, s);
        ctx.quadraticCurveTo(0, 0, -s, 0);
        ctx.quadraticCurveTo(0, 0, 0, -s);
        ctx.fill();

        ctx.strokeStyle = color;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(-s * 1.8, 0);
        ctx.lineTo(s * 1.8, 0);
        ctx.moveTo(0, -s * 1.8);
        ctx.lineTo(0, s * 1.8);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.isGold 
          ? `rgba(247, 223, 165, ${currentAlpha})` 
          : `rgba(56, 189, 248, ${currentAlpha * 0.8})`;
        ctx.shadowColor = this.isGold ? 'rgba(229, 185, 95, 0.65)' : 'rgba(14, 165, 233, 0.45)';
        ctx.shadowBlur = this.size * 3.5;
        ctx.fill();
      }
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new CosmicParticle());
  }

  function spawnShootingStar() {
    if (shootingStar) return;
    const startX = Math.random() * (width * 0.7);
    const startY = Math.random() * (height * 0.3);
    shootingStar = {
      x: startX,
      y: startY,
      len: Math.random() * 120 + 80,
      vx: 8 + Math.random() * 4,
      vy: 4 + Math.random() * 2,
      life: 1.0,
      decay: 0.02
    };
  }
  setInterval(spawnShootingStar, 6000);

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 115) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(229, 185, 95, ${0.12 * (1 - dist / 115)})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    if (shootingStar) {
      const grad = ctx.createLinearGradient(
        shootingStar.x, shootingStar.y,
        shootingStar.x - shootingStar.vx * 15, shootingStar.y - shootingStar.vy * 15
      );
      grad.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.life})`);
      grad.addColorStop(0.3, `rgba(229, 185, 95, ${shootingStar.life * 0.8})`);
      grad.addColorStop(1, 'rgba(229, 185, 95, 0)');

      ctx.beginPath();
      ctx.moveTo(shootingStar.x, shootingStar.y);
      ctx.lineTo(shootingStar.x - shootingStar.vx * 15, shootingStar.y - shootingStar.vy * 15);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.stroke();

      shootingStar.x += shootingStar.vx;
      shootingStar.y += shootingStar.vy;
      shootingStar.life -= shootingStar.decay;

      if (shootingStar.life <= 0 || shootingStar.x > width + 50 || shootingStar.y > height + 50) {
        shootingStar = null;
      }
    }

    requestAnimationFrame(render);
  }
  render();
}

/* ---------------------------------------------------------
   3. Interactive 3D Card Tilt & Specular Shine
   --------------------------------------------------------- */
function initCard3DTilt() {
  const tiltCards = document.querySelectorAll(
    '.venture-card, .portrait-frame, .crest-showcase, .pillar-card, .book-card, .telegram-qr-card, .rebate-calc-container, .risk-calc-container'
  );
  if (!tiltCards.length) return;

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/* ---------------------------------------------------------
   4. Statistical Counter Animation
   --------------------------------------------------------- */
function initCounters() {
  const counters = document.querySelectorAll('.counter-val');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetCount = parseInt(target.getAttribute('data-target'), 10);
        const prefix = target.getAttribute('data-prefix') || '';
        const suffix = target.getAttribute('data-suffix') || '';
        let start = 0;
        const duration = 1600;
        const stepTime = 20;
        const increment = targetCount / (duration / stepTime);

        const timer = setInterval(() => {
          start += increment;
          if (start >= targetCount) {
            target.textContent = `${prefix}${targetCount.toLocaleString()}${suffix}`;
            clearInterval(timer);
          } else {
            target.textContent = `${prefix}${Math.floor(start).toLocaleString()}${suffix}`;
          }
        }, stepTime);

        obs.unobserve(target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

/* ---------------------------------------------------------
   5. Mobile Drawer Navigation
   --------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const mobileMenu = document.getElementById('mobileNavMenu');
  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    toggleBtn.innerHTML = mobileMenu.classList.contains('open') ? '✕' : '☰';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      toggleBtn.innerHTML = '☰';
    });
  });
}

/* ---------------------------------------------------------
   6. Executive Consultation Modal
   --------------------------------------------------------- */
function initBookingModal() {
  const modal = document.getElementById('bookingModal');
  const openBtns = document.querySelectorAll('[data-open-modal="booking"]');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

/* ---------------------------------------------------------
   7. Executive Contact Form
   --------------------------------------------------------- */
function initContactForm() {
  const forms = [document.getElementById('executiveContactForm'), document.getElementById('modalBookingForm')];

  forms.forEach(form => {
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Transmitting Protocol...';

      setTimeout(() => {
        submitBtn.innerHTML = 'Inquiry Dispatched ✓';
        showToast('Executive inquiry transmitted. The Office of Mong Say will respond within 24 hours.');
        form.reset();

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          const modal = document.getElementById('bookingModal');
          if (modal && modal.classList.contains('active')) {
            modal.classList.remove('active');
          }
        }, 1800);
      }, 1200);
    });
  });
}

/* ---------------------------------------------------------
   8. SAGFX Real-Time Rebate & Pip Calculator (Tool 1)
   --------------------------------------------------------- */
function initRebateCalculator() {
  const slider = document.getElementById('calcLotsSlider');
  const lotsDisplay = document.getElementById('calcLotsVal');
  const brokerSelect = document.getElementById('calcBrokerSelect');
  const assetSelect = document.getElementById('calcAssetSelect');
  const monthlyRebateOut = document.getElementById('calcMonthlyRebate');
  const annualSavingsOut = document.getElementById('calcAnnualSavings');
  const pipsRecoveredOut = document.getElementById('calcPipsRecovered');
  const spreadReductionOut = document.getElementById('calcSpreadReduction');

  if (!slider || !monthlyRebateOut) return;

  const assetRates = {
    xauusd: 8.50,
    eurusd: 6.00,
    gbpusd: 7.00,
    us30: 5.00,
    crypto: 12.00
  };

  const brokerMultipliers = {
    icmarkets: 1.05,
    vantage: 1.08,
    exness: 1.00,
    fpmarkets: 1.04
  };

  function recalculate() {
    const lots = parseInt(slider.value, 10);
    const assetKey = assetSelect ? assetSelect.value : 'xauusd';
    const brokerKey = brokerSelect ? brokerSelect.value : 'icmarkets';

    const baseRate = assetRates[assetKey] || 8.50;
    const mult = brokerMultipliers[brokerKey] || 1.0;

    const monthlyRebate = lots * baseRate * mult;
    const annualSavings = monthlyRebate * 12;
    const pipsRecovered = (lots * 0.85).toFixed(1);
    const spreadReduction = (38 + (mult - 1) * 60).toFixed(1);

    if (lotsDisplay) lotsDisplay.textContent = `${lots.toLocaleString()} Lots`;
    monthlyRebateOut.textContent = `$${monthlyRebate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (annualSavingsOut) annualSavingsOut.textContent = `$${annualSavings.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    if (pipsRecoveredOut) pipsRecoveredOut.textContent = `${pipsRecovered} Pips`;
    if (spreadReductionOut) spreadReductionOut.textContent = `${spreadReduction}%`;
  }

  slider.addEventListener('input', recalculate);
  if (brokerSelect) brokerSelect.addEventListener('change', recalculate);
  if (assetSelect) assetSelect.addEventListener('change', recalculate);

  recalculate();
}

/* ---------------------------------------------------------
   9. Institutional Lot Size & Fractional Risk Engine (Tool 2)
   --------------------------------------------------------- */
function initPositionSizeRiskCalculator() {
  const balanceInput = document.getElementById('riskBalanceInput');
  const riskSlider = document.getElementById('riskPercentSlider');
  const riskPercentVal = document.getElementById('riskPercentVal');
  const slPipsInput = document.getElementById('riskSlPipsInput');
  const assetSelect = document.getElementById('riskAssetSelect');

  const cashRiskOut = document.getElementById('riskCashOut');
  const lotSizeOut = document.getElementById('riskLotSizeOut');
  const pipValOut = document.getElementById('riskPipValOut');
  const rrGainOut = document.getElementById('riskRRGainOut');

  if (!balanceInput || !lotSizeOut) return;

  function calculateRisk() {
    const balance = parseFloat(balanceInput.value) || 10000;
    const riskPct = parseFloat(riskSlider.value) || 1.0;
    const slPips = parseFloat(slPipsInput.value) || 25;
    const asset = assetSelect ? assetSelect.value : 'xauusd';

    if (riskPercentVal) riskPercentVal.textContent = `${riskPct.toFixed(2)}%`;

    // Cash at risk = balance * (riskPct / 100)
    const cashAtRisk = balance * (riskPct / 100);

    // Standard Pip Value per 1.00 Lot:
    // Gold (XAU/USD) = $10.00 / pip
    // Forex (EUR/USD, GBP/USD) = $10.00 / pip
    // US30 = $5.00 / pt
    let standardPipVal = 10.0;
    if (asset === 'us30') standardPipVal = 5.0;

    // Lot Size = Cash At Risk / (SL Pips * standardPipVal)
    let calculatedLots = cashAtRisk / (slPips * standardPipVal);
    calculatedLots = Math.max(0.01, calculatedLots); // minimum 0.01 micro lot

    const pipDollarValue = calculatedLots * standardPipVal;
    const target1to3Gain = cashAtRisk * 3.0;

    if (cashRiskOut) cashRiskOut.textContent = `$${cashAtRisk.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    lotSizeOut.textContent = `${calculatedLots.toFixed(2)} Lots`;
    if (pipValOut) pipValOut.textContent = `$${pipDollarValue.toFixed(2)} / Pip`;
    if (rrGainOut) rrGainOut.textContent = `+$${target1to3Gain.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  balanceInput.addEventListener('input', calculateRisk);
  riskSlider.addEventListener('input', calculateRisk);
  slPipsInput.addEventListener('input', calculateRisk);
  if (assetSelect) assetSelect.addEventListener('change', calculateRisk);

  calculateRisk();
}

/* ---------------------------------------------------------
   10. Institutional Global Market Sessions Clock
   --------------------------------------------------------- */
function initMarketSessionsClock() {
  const clockContainer = document.querySelector('.market-sessions-bar');
  if (!clockContainer) return;

  function updateSessions() {
    const now = new Date();
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const decimalHours = utcHours + utcMinutes / 60;

    const sessions = {
      sydney: decimalHours >= 22 || decimalHours < 7,
      tokyo: decimalHours >= 0 && decimalHours < 9,
      london: decimalHours >= 8 && decimalHours < 17,
      newyork: decimalHours >= 13 && decimalHours < 22,
      killzone: decimalHours >= 13 && decimalHours < 16
    };

    const sydneyBadge = document.getElementById('sessionSydney');
    const tokyoBadge = document.getElementById('sessionTokyo');
    const londonBadge = document.getElementById('sessionLondon');
    const nyBadge = document.getElementById('sessionNY');
    const killzoneBadge = document.getElementById('sessionKillzone');

    if (sydneyBadge) sydneyBadge.className = `session-badge ${sessions.sydney ? 'active' : ''}`;
    if (tokyoBadge) tokyoBadge.className = `session-badge ${sessions.tokyo ? 'active' : ''}`;
    if (londonBadge) londonBadge.className = `session-badge ${sessions.london ? 'active' : ''}`;
    if (nyBadge) nyBadge.className = `session-badge ${sessions.newyork ? 'active' : ''}`;
    if (killzoneBadge) {
      killzoneBadge.className = `session-badge ${sessions.killzone ? 'killzone active' : ''}`;
    }
  }

  updateSessions();
  setInterval(updateSessions, 60000);
}

/* ---------------------------------------------------------
   11. Executive Books Vault Filter & Instant Search
   --------------------------------------------------------- */
function initBooksFilterAndSearch() {
  const filterBtns = document.querySelectorAll('.btn-book-filter');
  const searchInput = document.getElementById('bookSearchInput');
  const bookCards = document.querySelectorAll('.book-card');

  if (!bookCards.length) return;

  let activeCategory = 'all';
  let searchTerm = '';

  function applyFilters() {
    bookCards.forEach(card => {
      const cardCat = card.getAttribute('data-category') || 'all';
      const text = card.textContent.toLowerCase();

      const matchesCat = (activeCategory === 'all' || cardCat === activeCategory);
      const matchesSearch = (searchTerm === '' || text.includes(searchTerm));

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter') || 'all';
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }
}

/* ---------------------------------------------------------
   12. 1-Click Copy @MongsayFX Telegram Handle
   --------------------------------------------------------- */
function initTelegramCopyButtons() {
  const copyBtns = document.querySelectorAll('[data-copy-telegram]');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const handle = btn.getAttribute('data-copy-telegram') || '@MongsayFX';
      navigator.clipboard.writeText(handle).then(() => {
        showToast(`Copied ${handle} to clipboard! Direct Telegram channel ready.`);
        const originalText = btn.innerHTML;
        btn.innerHTML = `<span>✓ Copied ${handle}</span>`;
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2200);
      }).catch(() => {
        showToast(`Telegram handle: ${handle}`);
      });
    });
  });
}

/* ---------------------------------------------------------
   Global Toast Notification System
   --------------------------------------------------------- */
function showToast(msg) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>⚡</span> <span>${msg}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}