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
  initCleanUrls();
  initThemeToggle();
  initFxFreezeToggle();
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
  initHedgingCalculator();
  initMarketSessionsClock();
  initBooksFilterAndSearch();
  initTelegramCopyButtons();
  initVideoBackground();
  initFaqAccordion();
  initSagfxPlatformCalculator();
  initSagfxCardPop();
  initSagfxSlideDeck();
  initSagfxTimeframeRadar();
  initSagfxClearingLoop();
  initBrokerTerminalShowcase();
  initHedgingLedgerStack();
  initLibraryReadingStack();
  initPinterestMobileHud();
  initDisciplineLoopAnimation();
});

/* ---------------------------------------------------------
   0. Clean URL Engine & Modern Section Routing
   Eliminates index.html / .html in browser address bars in production
   and routes requests to clean modern section paths: /homepage, /hedging, etc.
   --------------------------------------------------------- */
function initCleanUrls() {
  if (typeof window === 'undefined' || !window.location) return;

  if (window.location.protocol === 'file:') {
    // Local offline disk preview: map clean links back to .html so clicking works offline
    document.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:') && !href.endsWith('.html')) {
        const parts = href.split('#');
        if (parts[0] && !parts[0].includes('.')) {
          parts[0] = parts[0] + '.html';
          a.setAttribute('href', parts.join('#'));
        }
      }
    });
  } else {
    // Production HTTP/HTTPS:
    const path = window.location.pathname;
    if (path.endsWith('/index.html') || path === '/index') {
      const cleanPath = path.replace(/\/index(\.html)?$/, '/homepage');
      window.history.replaceState(null, '', cleanPath + window.location.search + window.location.hash);
    } else if (path.endsWith('.html')) {
      const cleanPath = path.replace(/\.html$/, '');
      window.history.replaceState(null, '', cleanPath + window.location.search + window.location.hash);
    }
  }
}

/* ---------------------------------------------------------
   A. Theme Toggle: Dark Mode & Luxury High-Contrast Light Mode
   --------------------------------------------------------- */
function initThemeToggle() {
  const savedTheme = localStorage.getItem('mongsay_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const themeBtns = document.querySelectorAll('.theme-toggle');
  themeBtns.forEach(btn => {
    btn.setAttribute('aria-pressed', savedTheme === 'light' ? 'true' : 'false');
    btn.addEventListener('click', (e) => {
      if (e) e.preventDefault();
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('mongsay_theme', nextTheme);
      themeBtns.forEach(b => b.setAttribute('aria-pressed', nextTheme === 'light' ? 'true' : 'false'));
      showToast(nextTheme === 'light' ? 'Switched to Dim Blue Sea Mode (Oceanic Sapphire)' : 'Switched to Institutional Dark Obsidian Mode');
    });
  });
}

/* ---------------------------------------------------------
   A2. FX Freeze / Eco Performance Toggle Engine
   Stops heavy animations, particle CPU/GPU loops, continuous video
   decoding, and replaces backdrop-filters with 60-120 FPS glass.
   --------------------------------------------------------- */
function initFxFreezeToggle() {
  const savedFx = localStorage.getItem('mongsay_fx_frozen');
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isFrozen = savedFx === 'true' || (savedFx === null && prefersReduced);

  applyFxState(isFrozen, false);

  const fxBtns = document.querySelectorAll('.fx-toggle');
  fxBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentFrozen = document.documentElement.classList.contains('fx-frozen');
      const nextFrozen = !currentFrozen;
      applyFxState(nextFrozen, true);
    });
  });
}

function applyFxState(frozen, showToastNotice = false) {
  if (frozen) {
    document.documentElement.classList.add('fx-frozen');
    localStorage.setItem('mongsay_fx_frozen', 'true');
  } else {
    document.documentElement.classList.remove('fx-frozen');
    localStorage.setItem('mongsay_fx_frozen', 'false');
  }

  // Handle Video Backgrounds
  const bgVideos = document.querySelectorAll('.site-bg-video, .video-bg');
  bgVideos.forEach(v => {
    if (frozen) {
      v.pause();
    } else {
      v.play().catch(() => {});
    }
  });

  // Handle Canvas Starfield & Embers
  if (window.mongsayCanvas) {
    if (frozen) {
      window.mongsayCanvas.pause();
    } else {
      window.mongsayCanvas.resume();
    }
  }

  if (showToastNotice) {
    const isKhmer = document.documentElement.getAttribute('lang') === 'kh';
    if (frozen) {
      showToast(isKhmer 
        ? '⚡ មុខងារ Eco សន្សំសំចៃ៖ ចលនាត្រូវបានផ្អាកដើម្បីល្បឿនលឿនបំផុត' 
        : '⚡ Eco Performance Mode: Visual animations frozen for maximum mobile speed');
    } else {
      showToast(isKhmer 
        ? '✨ បើកដំណើរការចលនាធម្មតាវិញ៖ ពន្លឺនិងបែបផែនពេញលេញ' 
        : '✨ Dynamic FX Restored: Full cinematic lighting active');
    }
  }
}

/* ---------------------------------------------------------
   B. Bilingual Engine: English & Khmer (ភាសាខ្មែរ)
   --------------------------------------------------------- */
const I18N_DICTIONARY = {
  en: {
    theme_light_label: "Light",
    theme_dark_label: "Dark",
    nav_overview: "Overview",
    nav_ventures: "Ventures",
    nav_advisory: "Lead Brokerage",
    nav_sagfx: "SAGFX",
    nav_hedging: "Gold Hedging",
    nav_media: "Media",
    nav_library: "Library",
    nav_contact: "Enroll / Contact",
    hero_badge_payment: "INSTITUTIONAL LIQUIDITY",
    hero_badge_advisory: "SAGFX RAILS",
    hero_badge_sagfx: "SAGFX RAILS",
    hero_badge_cm: "GOLD (XAU/USD)",
    hero_badge_mongsay: "MONGSAY HOUSE",
    hero_subtitle: "Trading • Infrastructure • Mongsay House",
    hero_title: "Trading Gold, <br><span class=\"gold-text\">Building Market Rails,</span> & <br><span class=\"gold-text\">Cutting Out The Noise.</span>",
    hero_desc: "I spend most of my days reading price behavior on Gold (XAU/USD), helping run institutional clearing rails at <strong>SAGFX</strong> (<a href=\"https://sagfx.org\" target=\"_blank\" class=\"gold-text\">sagfx.org</a>), and building <strong>Mongsay House</strong>. No corporate jargon or indicator clutter — just pure market structure, disciplined risk, and helping traders keep more of what they make through real rebates.",
    hero_cta_enroll: "Connect with @MongsayFX",
    hero_cta_ventures: "Explore The Systems",
    stat_gateway: "Execution Availability",
    stat_rebate: "Trader Rebate Yield",
    stat_community: "Community Reach",
    sessions_title: "Institutional Trading Sessions (Live Schedule)",

    // Strategic Promotions Section (3 Columns)
    promo_sec_tag: 'EXCLUSIVE COMMERCIAL PROMOTIONS & PARTNER PRIVILEGES',
    promo_sec_title: 'Strategic Ecosystem <span class="gold-gradient-text">Promotions & High-Value Offers</span>',
    promo_sec_desc: 'High-value institutional programs engineered across SAGFX.ORG (<a href="https://sagfx.org" target="_blank" class="gold-text">sagfx.org</a>) and Mongsay House VIP. Whitelist tier-1 interbank trading rebates, scale turnkey brokerage infrastructure, and access private market intelligence.',

    // Promo 1: Brokerage Infrastructure
    promo_1_ribbon: 'PROMO 01 // PHYSICAL HEDGING DESK',
    promo_1_badge: '🛡️ DELTA-NEUTRAL INVENTORY PROTECTION',
    promo_1_title: 'Physical Gold & Silver Delta-Neutral Hedging Desk',
    promo_1_desc: 'Mechanical price-drop defense engineered for Cambodian gold shops, bullion traders, and jewelry merchants. Convert Damlung (តម្លឹង) and Chi (ជី) directly into exact MT4/MT5 contract lot sizes with live market sync and local counter valuation.',
    promo_1_b1: '<strong>100% Price-Drop Immunity:</strong> Eliminate spot market variance through exact digital short lot calibration.',
    promo_1_b2: '<strong>Local Cambodian Valuation:</strong> Live calculation of USD/Damlung and USD/Chi with customizable shop premiums.',
    promo_1_b3: '<strong>Tier-1 Raw Spreads via SAGFX:</strong> Ultra-tight interbank clearing with zero retail markups and swap optimization.',
    promo_1_b4: '<strong>Executive Desk Priority:</strong> Direct escalation to Lead Brokerage Desk (@MongsayFX).',
    promo_1_cta: 'Launch Interactive Hedging Desk →',

    // Promo 2: SAGFX.ORG Rebates
    promo_2_ribbon: 'PROMO 02 // SAGFX.ORG REBATES',
    promo_2_badge: '🔥 RECOVER UP TO 85% TRADING COMMISSIONS',
    promo_2_title: 'Tier-1 Institutional Rebate Whitelist',
    promo_2_desc: 'Exclusive cost-reduction protocol for active Gold (XAU/USD) and FX market participants, algorithmic traders, and asset managers.',
    promo_2_b1: '<strong>Recover $30 to $45+ Per Lot:</strong> Institutional volume rebates directly returned to you weekly.',
    promo_2_b2: '<strong>Raw 0.0 Pip ECN Spreads:</strong> Trade directly against Tier-1 bank liquidity with zero retail broker markups.',
    promo_2_b3: '<strong>Automated Weekly Settlement:</strong> Payouts credited directly to your trading account or crypto wallet (USDT).',
    promo_2_b4: '<strong>VIP Community Access:</strong> Free lifetime pass to <a href="https://t.me/mongsayhouse17" target="_blank" class="gold-text">t.me/mongsayhouse17</a> (Gold S&D maps).',
    promo_2_cta: 'Claim Tier-1 Rebate Rate →',

    // Promo 3: VIP Private Desk
    promo_3_ribbon: 'PROMO 03 // VIP PRIVATE DESK',
    promo_3_badge: '💎 LIFETIME PRIVATE SIGNALS & INTEL',
    promo_3_title: 'Mongsay House VIP 100% Free Lifetime Access',
    promo_3_desc: 'Complete institutional mentorship, institutional daily Gold (XAU/USD) supply & demand maps, and real-time execution coordinates.',
    promo_3_b1: '<strong>Zero Subscription Fees:</strong> Verified members receive 100% free lifetime access with zero monthly dues.',
    promo_3_b2: '<strong>Mechanical S&D Levels:</strong> Real-time institutional buy/sell zones, invalidation points, and 1:3+ RR targets.',
    promo_3_b3: '<strong>Weekly Live Technical Breakdowns:</strong> Deep-dive webinars covering institutional liquidity pool sweeps.',
    promo_3_b4: '<strong>Direct Desk Interaction:</strong> Direct Telegram contact with Mong Say for portfolio risk discussions.',
    promo_3_cta: 'Access Mongsay House VIP →',

    // Ventures Section (2 Columns)
    venture_sec_tag: 'PORTFOLIO ARCHITECTURE',
    venture_sec_title: 'Institutional Ventures & <span class="gold-gradient-text">Strategic Holdings</span>',
    venture_sec_desc: 'Integrated financial technology, lead brokerage partnerships, and institutional liquidity infrastructure founded and advised by Mong Say.',

    // Venture 1: Mongsay House VIP
    venture_1_role: 'Founder & Lead Analyst',
    venture_1_title: 'Mongsay House VIP',
    venture_1_tagline: 'Institutional Trading Community | Pure S&D Mechanics',
    venture_1_desc: 'Elite private community for institutional Gold (XAU/USD) and FX traders. Providing algorithmic trade journals, mechanical supply & demand maps, live market commentary, and comprehensive technical architecture.',
    spec_official_channel: 'Official Channel',
    venture_1_role_val: 'Founder & Lead Analyst',
    spec_analytical_model: 'Analytical Model',
    venture_1_model_val: 'Pure S&D & Liquidity',
    spec_focus_asset: 'Focus Asset',
    venture_1_asset_val: 'Gold (XAU/USD)',
    venture_1_btn_join: 'Join Telegram Community',
    venture_1_btn_alpha: 'Community Alpha →',

    // Venture 2: SAGFX.ORG
    venture_2_role: 'Lead Institutional Brokerage',
    venture_2_title: 'SAGFX.ORG',
    venture_2_tagline: 'Financial Markets Advisors | Institutional Rebate Network',
    venture_2_desc: 'Premier brokerage development management and institutional rebate network. Connecting high-net-worth clients and active market participants directly to regulated liquidity providers with up to 85% commission cashbacks, tightened raw spreads, and weekly payouts.',
    partner_brokers_label: 'Partner Brokers:',
    spec_official_portal: 'Official Portal',
    spec_executive_role: 'Executive Role',
    venture_2_role_val: 'Lead Brokerage Director',
    spec_cashback: 'Cashback Rebate',
    venture_2_cashback_val: 'Up to $8.50 / Lot',
    spec_payout: 'Payout Schedule',
    venture_2_payout_val: 'Automated Weekly',
    venture_2_btn_portal: 'Visit SAGFX Portal',
    venture_2_btn_frameworks: 'Brokerage Frameworks →',

    // Crest & Community Showcase Section
    crest_tag: 'PRIVATE COMMUNITY & EDUCATION',
    crest_title: 'Mongsay House & Trading Alpha',
    crest_desc: 'Under the insignia of the Golden Lion, <strong>Mongsay House</strong> brings together elite market operators, currency strategists, and fintech founders. Daily institutional market structure analyses on Gold (XAU/USD), macro volatility breakdowns, and real-time community execution.',
    crest_p1: '⚡ XAU/USD Structure Mapping',
    crest_p2: '🛡️ Institutional Risk Models',
    crest_p3: '💎 Broker Commission Rebates',
    crest_p4: '🌐 Global FinTech Network',
    crest_cta: 'Join Official Channel: t.me/mongsayhouse17',

    // Advisory Pillars Section (2 Columns)
    pillars_sec_tag: 'EXECUTIVE CAPABILITIES',
    pillars_sec_title: 'Institutional <span class="gold-gradient-text">Advisory Pillars</span>',
    pillars_sec_desc: 'Strategic frameworks delivered to institutions, fintech startups, and high-volume trading desks.',
    pillar_1_num: '01 / BROKERAGE SCALING',
    pillar_1_title: 'Brokerage Expansion & Liquidity Scale',
    pillar_1_desc: 'Structuring strategic IB contracts, prime liquidity bridges, raw STP/ECN feed configurations, and rebate redistribution pipelines via SAGFX.ORG.',
    pillar_2_num: '02 / QUANTITATIVE DISCIPLINE',
    pillar_2_title: 'Mechanical Market Structure',
    pillar_2_desc: 'Rigorous high-probability liquidity sweep tracking, displacement validation, and fractional risk architecture tailored for institutional Gold (XAU/USD) operations.',

    // Media Section
    media_sec_tag: 'MEDIA & MULTI-CHANNEL ECOSYSTEM',
    media_sec_title: 'Connect with <span class="gold-gradient-text">Mongsay Across Platforms</span>',
    media_sec_desc: 'Real-time broadcasts, trading education, financial market insights, and executive perspectives.',
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
    contact_desc: "Direct channel to the Office of Mong Say for institutional inquiries, lead brokerage partnerships, institutional consulting, and keynote strategic engagements.",
    contact_btn_submit: "Transmit Strategic Inquiry",
    fx_label: "FX",
    eco_label: "ECO",
    fx_mode_active: "FX Active",
    fx_mode_eco: "ECO Freeze",

    // FAQ Section
    faq_sec_tag: "KNOWLEDGE ARCHITECTURE",
    faq_sec_title: "Frequently Asked <span class=\"gold-gradient-text\">Questions</span>",
    faq_sec_desc: "Key institutional operational guidelines, rebate mechanics, mechanical market structure methodologies, and partnership protocols.",
    faq_q1: "What is SAGFX and how does the institutional rebate mechanism function?",
    faq_a1: "SAGFX (<a href=\"https://sagfx.org\" target=\"_blank\" class=\"gold-text\">sagfx.org</a>) connects retail, prop, and institutional traders directly to tier-1 regulated prime brokerages (including IC Markets, OANDA, BlackBull Markets, and FP Markets) with raw 0.0 pip ECN spreads. Traded volume automatically accrues institutional rebates up to $45+ per lot, credited weekly directly to the trader's account with zero retail markup.",
    faq_q2: "What analytical framework is utilized in Mongsay House?",
    faq_a2: "Mongsay House relies strictly on Pure Institutional Supply & Demand (S&D), Liquidity Sweeps, and Mechanical Market Structure. Trend continuation (BOS) and character change (CHoCH) are confirmed exclusively by full candle-body closes past major swing points originating from displacement base formations (RBD, DBR, RBR, DBD) primarily on Gold (XAU/USD). All retail indicator clutter and speculative guesswork are eliminated.",
    faq_q3: "How do physical gold shops and bullion merchants protect capital through the Hedging Desk?",
    faq_a3: "Through delta-neutral physical bullion hedging on MT4/MT5 via SAGFX, gold shops and jewelry merchants eliminate spot price drop variance. When physical inventory is acquired, an equal and opposite digital short contract is executed at raw institutional spreads, locking store inventory cash value at 100% against macro market reversals.",
    faq_q4: "What are the qualification requirements to join Mongsay House VIP?",
    faq_a4: "Access to Mongsay House VIP is complimentary for verified community traders who maintain institutional risk discipline (fractional risk modeling 0.5%–1.0% per trade, minimum 1:3 RR targeting external structural liquidity pools) and hold active whitelisted trading accounts via official partner brokers.",
    faq_q5: "How can I verify official communications from Mong Say?",
    faq_a5: "All official correspondence, direct consultations, and whitelist enrollments are conducted exclusively through verified personal Telegram handle <a href=\"https://t.me/MongsayFX\" target=\"_blank\" class=\"gold-text\">@MongsayFX</a> and official community channel <a href=\"https://t.me/mongsayhouse17\" target=\"_blank\" class=\"gold-text\">t.me/mongsayhouse17</a>. Always verify handles carefully to protect against impersonators.",

    // Delta-Neutral Gold Hedging Architecture
    // 3D Studio Display Cascading Ledger Stack
    // 3D Studio Display Cascading Reading Console (Library)
    lib_stack_tag: "// INTELLECTUAL CAPITAL & READING VAULT",
    lib_stack_headline: "Decades of wisdom.<br><span class=\"blue-gradient-text\">One reading console.</span>",
    lib_stack_desc: "Search seminal texts, key mental models, and chapter takeaways across Quantitative Finance, Trading Psychology, Asymmetric Risk, and Macro Market Architecture.",
    lib_stack_badge: "8 Seminal Master Volumes Curated",
    lib_stack_brand_left: "MONGSAY // EXECUTIVE READING VAULT",
    lib_stack_brand_right: "CURATED VOLUMES: 8 TITLES",
    lib_stack_card_6_title: "Trading in the Zone (Mark Douglas)",
    lib_stack_card_5_title: "The Psychology of Money (Morgan Housel)",
    lib_stack_card_4_title: "Reminiscences of a Stock Operator",
    lib_stack_card_3_title: "Principles: Life and Work (Ray Dalio)",
    lib_stack_card_2_title: "Antifragile (Nassim Nicholas Taleb)",
    lib_stack_card_1_title: "The Sovereign Individual (Rees-Mogg)",
    lib_stack_query_btn: "QUERY VAULT &#8629;",
    lib_stack_metric_vols: "Volumes:",
    lib_stack_metric_doctrine: "Doctrine:",
    lib_stack_metric_framework: "Framework:",
    hedge_stack_tag: "// DELTA-NEUTRAL BULLION VAULT LEDGER",
    hedge_stack_headline: "Years of inventory.<br><span class=\"blue-gradient-text\">One hedge.</span>",
    hedge_stack_desc: "Consolidate physical gold shop balances, historical bullion risk ledgers, and Cambodian Damlung (តម្លឹង) & Chi (ជី) metrics into a unified, zero-downside delta-neutral execution terminal.",
    hedge_stack_badge: "Active across Cambodian Bullion Desks",
    hedge_stack_card_6_title: "Weekly Rebate Cashflow Recovery",
    hedge_stack_card_5_title: "Zero-Spread Volatility Shield",
    hedge_stack_card_4_title: "Interbank XAU/USD Short Routing",
    hedge_stack_card_3_title: "Physical Store Inventory Audit",
    hedge_stack_card_2_title: "Damlung & Chi Formula",
    hedge_stack_card_1_title: "Real-Time Delta-Neutral Defense",
    hedge_stack_return_btn: "RETURN &Delta; = 0",
    hedge_stack_metric_exposure: "Exposure:",
    hedge_stack_metric_collat: "Collat:",
    hedge_stack_metric_downside: "Downside:",
    hedge_hero_tag: "QUANTITATIVE BULLION DESK // DELTA-NEUTRAL ARCHITECTURE",
    hedge_hero_desc: "Engineering delta-neutral liquidity execution for physical gold shops, jewelry merchants, and bullion vaults. Neutralize spot market price swings, eliminate directional inventory risk, and lock in 100% of dealer spreads and fabrication premiums.",
    hedge_badge_1: "⚖️ 1 Damlung (តម្លឹង) = 37.50 g ≈ 1.20565 Troy oz",
    hedge_badge_2: "📐 1.00 Standard Lot = 82.9426 Damlung (3,110.35 g)",
    hedge_badge_3: "🛡️ Delta-Neutral Equation: Digital = −Physical",
    hedge_badge_4: "⚡ Direct Clearing via SAGFX.ORG",
    hedge_calc_tag: "INTERACTIVE DEALER HEDGING ENGINE",
    hedge_calc_title: "Physical Bullion <span class=\"gold-gradient-text\">Delta-Neutral Hedging Desk</span>",
    hedge_calc_desc: "Calculate exact digital MT4/MT5 contract lot sizes, required margin collateral, local Cambodian counter valuations, and adverse volatility buffers for your shop's physical gold & silver inventory in real time.",
    hedge_flow_steps_tag: "🇰🇭 3-STEP CAMBODIAN BULLION GUIDE",
    hedge_step_1_title: "Step 1: Select Metal & Shop Inventory",
    hedge_step_1_desc: "Select Gold or Silver, then input your physical Damlung (តម្លឹង) or Chi (ជី) stored in your counter safe.",
    hedge_step_2_title: "Step 2: Check Cambodian Counter Valuation",
    hedge_step_2_desc: "System calculates local cash price per Damlung/Chi and total physical inventory value in USD.",
    hedge_step_3_title: "Step 3: Execute Protective Hedge via SAGFX",
    hedge_step_3_desc: "Execute the exact MT4/MT5 lots on SAGFX to lock in your shop value and eliminate price-drop losses 100%.",
    hedge_label_asset: "Precious Metal Commodity",
    metal_gold_opt: "Gold / មាស (XAU/USD)",
    metal_silver_opt: "Silver / ប្រាក់ (XAG/USD)",
    btn_sync_price: "Sync Live Price",
    hedge_local_title: "🇰🇭 LOCAL CAMBODIAN COUNTER VALUATION (OUTSIDE DIGITAL)",
    hedge_local_premium_tag: "Local Shop Premium:",
    hedge_local_per_damlung: "Price / Damlung (តម្លឹង)",
    hedge_local_per_chi: "Price / Chi (ជី)",
    hedge_local_weight_troy: "Equivalent Weight (Troy Oz)",
    hedge_total_inventory_val_label: "🏦 TOTAL PHYSICAL SHOP INVENTORY CASH VALUE",
    hedge_total_inventory_val_sub: "Physical counter cash value protected at 100% against macro price drop",
    hedge_presets_label: "Quick Presets:",
    hedge_capital_card_title: "💼 CAPITAL & BALANCE ADVISORY (HOW MUCH BALANCE SHOULD YOU INPUT?)",
    hedge_capital_card_tag: "How Much Balance Should You Deposit?",
    hedge_user_balance_label: "Your Current Trading Account Balance ($USD)",
    hedge_min_capital_rec: "Recommended Safe Deposit (ប្រាក់តម្កល់សុវត្ថិភាព):",
    hedge_sim_title: "📊 ADVERSE PRICE SHOCK STRESS-TEST SIMULATION",
    sim_phys_label: "Physical Store Inventory",
    sim_hedge_label: "Digital SAGFX Hedge",
    sim_net_label: "Net Combined Shop P&L",
    sim_net_desc: "When spot price drops, your digital Short gains cash on MT4/MT5, perfectly cancelling the loss on physical inventory. 100% Delta-Neutral (Δ = 0).",
    hedge_label_flow: "Physical Inventory Transaction Flow",
    hedge_flow_buy: "📥 Shop Buys Bullion (Inventory UP)",
    hedge_flow_sell: "📤 Shop Sells Bullion (Inventory DOWN)",
    hedge_label_unit: "Inventory Unit of Measure",
    unit_damlung: "Damlung (តម្លឹង - 37.5g)",
    unit_chi: "Chi (ជី - 3.75g)",
    unit_kilograms: "Kilograms (គីឡូ - Kg)",
    unit_grams: "Grams (g)",
    unit_ounces: "Troy Ounces (oz)",
    hedge_label_quantity: "Physical Quantity to Hedge",
    hedge_label_spot: "Gold Spot Price ($USD/oz)",
    hedge_label_leverage: "Clearing Leverage",
    hedge_label_buffer: "Adverse Volatility Defense Buffer",
    hedge_directive_title: "DIGITAL EXECUTION DIRECTIVE",
    hedge_metric_lots: "Exact Contract Lots",
    hedge_metric_margin: "Initial Margin Required",
    hedge_metric_buffer: "Safe Buffer Deposit",
    hedge_metric_weight: "Converted Weight",
    hedge_btn_dispatch: "Dispatch Hedge Ticket to @MongsayFX",
    hedge_pillars_tag: "DEALER RISK MANAGEMENT PLAYBOOK",
    hedge_pillars_title: "Institutional <span class=\"gold-gradient-text\">Physical Gold Hedging Frameworks</span>",
    hedge_pillars_desc: "Four mechanical pillars that transform physical gold retail from a volatile speculative gamble into a reliable, delta-neutral cash-flow enterprise.",
    hedge_p1_title: "The Delta-Neutral Dealer Principle",
    hedge_p1_desc: "Physical retail jewellers generate revenue purely through bid/ask spreads, design/casting markups, and minting premiums. Holding unhedged gold exposes inventory to macro price drops. By opening an equal and opposite digital short, the dealer's net market exposure remains exactly zero (Δ = 0).",
    hedge_p1_badge: "Risk Elimination: Spot Variance Neutralized",
    hedge_p2_title: "Weight Translation & Standard Lots",
    hedge_p2_desc: "Traditional Cambodian gold merchants operate in Damlung (តម្លឹង = 37.5g) and Chi (ជី = 3.75g), while digital liquidity clearing is executed in Troy Ounces (31.1035g). We establish the institutional conversion ratio: exactly 82.9426 Damlung per 1.00 Standard Contract Lot (100 oz).",
    hedge_p2_badge: "Exact Formula: Lots = Damlung / 82.9426",
    hedge_p3_title: "Volatility Buffer & Drawdown Defense",
    hedge_p3_desc: "A digital hedge requires margin collateral. If gold spikes while a short hedge is open, the physical inventory gains equal value, but the trading account must possess adequate cash buffer to avoid broker margin calls. We enforce a minimum ±$100/oz adverse volatility buffer for safety.",
    hedge_p3_badge: "Buffer Standard: Margin + ($100 × Oz)",
    hedge_p4_title: "Tier-1 Institutional Clearing via SAGFX",
    hedge_p4_desc: "Hedging margins are destroyed by wide retail spreads and punitive overnight swaps. Through SAGFX.ORG institutional liquidity bridges, physical bullion desks clear contracts at raw interbank spreads (0.0–0.8 pips on XAU/USD) with swap-optimized institutional accounts.",
    hedge_p4_badge: "Execution Rails: Raw Spreads & Weekly Rebates",
    hedge_cases_tag: "EXECUTION CASE STUDIES",
    hedge_cases_title: "Physical Shop Scenarios: <span class=\"gold-gradient-text\">Before & After Hedging</span>",
    hedge_cases_desc: "How mechanical delta-neutral execution saves physical bullion merchants tens of thousands of dollars during violent gold market reversals.",
    hedge_case1_title: "The Unhedged Flash Crash Trap",
    hedge_case2_title: "Wholesale Replacement Surge Defense",
    hedge_matrix_tag: "STANDARDIZED CONVERSION MATRIX",
    hedge_matrix_title: "Cambodian Damlung to <span class=\"gold-gradient-text\">MT4/MT5 Contract Matrix</span>",
    hedge_matrix_desc: "Quick-reference institutional conversion table based on standard $2,720 spot gold and 1:100 leverage with $100/oz drawdown defense buffer.",
    th_damlung: "Cambodian Damlung",
    th_chi: "Chi (ជី)",
    th_grams: "Weight (Grams)",
    th_oz: "Troy Ounces",
    th_lots: "MT4/MT5 Lots",
    th_margin: "Initial Margin (1:100)",
    th_safe_balance: "Safe Buffer Balance",
    table_scroll_hint: "Swipe horizontally to view full matrix",
    hedge_consult_tag: "BULLION TREASURY ONBOARDING",
    hedge_consult_title: "Establish a Dedicated <span class=\"gold-gradient-text\">Gold Hedging Desk</span>",
    hedge_consult_desc: "Direct institutional setup with Mong Say for Cambodian physical gold merchants, jewelry wholesale houses, and pawn lenders looking to deploy automated delta-neutral risk mitigation with institutional SAGFX broker clearing.",

    // SAGFX Futuristic Fintech Presentation Showcase (Pinterest Spec)
    sagfx_hero_tag: "INSTITUTIONAL PRESENTATION 2026 // SAGFX.ORG",
    sagfx_hero_title: "Modern Rebate Rails & <br><span class=\"cyan-glow-text\">Institutional Liquidity.</span>",
    sagfx_hero_desc: "Smart finance solutions engineered to eliminate trading fee drag, deliver direct Tier-1 interbank clearing, and automate weekly cashback settlements for modern high-volume traders.",
    sagfx_cta_whitelist: "Start Whitelisting",
    sagfx_stat_users: "+15K Active Traders",
    sagfx_badge_secure: "0.0 Pip Raw Spreads",
    sagfx_engine_tag: "CENTRAL REBATE CLEARING ENGINE",
    sagfx_engine_title: "Modern Rebate Engine <br><span class=\"cyan-glow-text\">For Seamless Institutional Clearing</span>",
    sagfx_engine_desc: "Institutional-grade infrastructure routing high-volume trade flow through direct prime broker bridges, returning spreads directly to traders every single week.",
    pedestal_badge_node: "CENTRAL CLEARING NODE",
    pedestal_badge_title: "SAGFX Fix 4.4 Prime Bridge",
    sagfx_wallet_tag: "SMART REBATE RAILS",
    sagfx_wallet_title: "Automated Weekly Cashback",
    sagfx_wallet_desc: "Direct settlement to your USDT wallet, Cambodian local bank account, or straight into your MT4/MT5 trading account balance every Monday.",
    sagfx_security_tag: "ZERO SPREAD MARKUP",
    sagfx_security_title: "Direct Prime Clearing",
    sagfx_security_desc: "100% pass-through interbank spreads from regulated global brokers. We never widen spreads or add latency to fund cashback.",
    sagfx_explore_btn: "Explore SAGFX.org Official Gateway",
    sagfx_volume_tag: "LIQUIDITY & YIELD METRICS",
    sagfx_volume_title: "Smart Liquidity <br><span class=\"cyan-glow-text\">For High-Volume Traders</span>",
    sagfx_volume_desc: "Manage your volume with simple, secure, and automated institutional rebate rails. Real-time transparent trade volume auditing, zero broker conflict, and instant reconciliation.",
    sagfx_view_platform: "Launch SAGFX Portal",
    sagfx_chart_badge: "Performance & Volume",
    sagfx_stat_monthly_lots: "Lots Cleared Monthly",
    sagfx_stat_max_rebate: "Max Rebate / Lot (Gold)",
    sagfx_nodes_tag: "SECURE SYSTEM ARCHITECTURE",
    sagfx_nodes_title: "Secure Institutional Rails <br><span class=\"cyan-glow-text\">Engineered for Zero Slippage</span>",
    sagfx_nodes_desc: "Built for fast execution, raw interbank spreads, and automated weekly rebate settlements across top-tier clearing brokers.",
    sagfx_feat_1: "Direct ECN Bridges",
    sagfx_feat_2: "Zero Hidden Markups",
    sagfx_feat_3: "Automated Settlement",
    sagfx_tech_1_title: "Regulated Prime Brokers",
    sagfx_tech_1_desc: "Direct bridge connections to Megafusion, GTC GO, LiteFinance, and 8Eightcap with multi-asset liquidity and tier-1 bank feeds.",
    sagfx_tech_2_title: "Automated Weekly Payouts",
    sagfx_tech_2_desc: "Returning up to 85% of institutional commission spread markups directly to traders with zero delays or withdrawal limits.",
    sagfx_tech_3_title: "Multi-Asset Depth",
    sagfx_tech_3_desc: "Raw Gold (XAU/USD) spreads from 0.0 pips, major FX pairs, and global indices with pure institutional market mechanics.",
    sagfx_tech_4_title: "Bullion Hedging Interlink",
    sagfx_tech_4_desc: "Seamless bridge to Mongsay House Delta-Neutral physical gold hedging rails for local jewellery shops and bullion merchants.",
    calc_widget_title: "Interactive Rebate Yield Simulator",
    calc_widget_desc: "Slide your monthly trading volume to compute your guaranteed weekly and annual cashback payout.",
    calc_vol_label: "Monthly Volume (Lots)",
    calc_asset_label: "Primary Trading Asset",
    calc_weekly_title: "Guaranteed Weekly Cashback",
    calc_monthly_title: "Monthly Cashback:",
    calc_annual_title: "Annual Recovered:",
    calc_cta_whitelist: "Claim Whitelist via @MongsayFX",

    // SAGFX Presentation Deck (English)
    sagfx_hero_tag: "INSTITUTIONAL PRESENTATION 2026 // SAGFX.ORG",
    sagfx_hero_title: "Modern Rebate Rails & <br><span class=\"cyan-glow-text\">Institutional Liquidity.</span>",
    sagfx_hero_desc: "Smart finance solutions engineered to eliminate trading fee drag, deliver direct Tier-1 interbank clearing, and automate weekly cashback settlements for modern high-volume traders.",
    sagfx_cta_whitelist: "Start Whitelisting",
    sagfx_stat_users: "+15,000+ Active Traders",
    sagfx_badge_secure: "Raw Spreads from 0.0 Pips",
    sagfx_engine_tag: "CENTRAL CLEARING ENGINE",
    sagfx_engine_title: "Cutting-Edge Rebate Engine <br><span class=\"cyan-glow-text\">Engineered for Seamless Volume Clearing.</span>",
    sagfx_engine_desc: "Institutional-grade infrastructure routing high-volume trade flow through direct prime broker bridges, returning spreads directly to traders every single week.",
    pedestal_badge_node: "CENTRAL CLEARING NODE",
    pedestal_badge_title: "SAGFX Fix 4.4 Prime Bridge",
    sagfx_wallet_tag: "SMART CASHBACK RAILS",
    sagfx_wallet_title: "Automated Weekly Distributions",
    sagfx_wallet_desc: "Direct settlements routed into USDT wallets, Cambodian local bank transfer (ABA / Bakong), or back into your MT4/MT5 trading balance every Monday.",
    sagfx_security_tag: "ZERO SPREAD MARKUPS",
    sagfx_security_title: "Direct Prime Clearing",
    sagfx_security_desc: "100% genuine interbank spreads from top regulated tier-1 prime brokers worldwide. Zero markups, zero execution artificial delays.",
    sagfx_explore_btn: "Explore Official SAGFX.org Portal",
    sagfx_volume_tag: "LIQUIDITY METRICS & VOLUME YIELD",
    sagfx_volume_title: "Smart Liquidity Flow <br><span class=\"cyan-glow-text\">For High-Volume Traders</span>",
    sagfx_volume_desc: "Manage your volume with simple, secure, and automated institutional rebate rails. Real-time transparent trade volume auditing, zero broker conflict, and instant reconciliation.",
    sagfx_view_platform: "Launch SAGFX Portal",
    sagfx_chart_badge: "Performance & Volume",
    sagfx_stat_monthly_lots: "Lots Cleared Monthly",
    sagfx_stat_max_rebate: "Max Rebate / Lot (Gold)",
    sagfx_nodes_tag: "HARDENED SECURITY ARCHITECTURE",
    sagfx_nodes_title: "Security & Infrastructure <br><span class=\"cyan-glow-text\">Engineered for Zero Slippage</span>",
    sagfx_nodes_desc: "Built from the ground up for ultra-low latency execution, raw interbank spreads, and automated weekly rebate distributions with tier-1 prime brokers.",
    sagfx_feat_1: "Direct ECN Bridge",
    sagfx_feat_2: "Zero Hidden Fees",
    sagfx_feat_3: "Automated Weekly Payouts",
    sagfx_tech_1_title: "Licensed Tier-1 Prime Brokers",
    sagfx_tech_1_desc: "Direct connectivity to Megafusion, GTC GO, LiteFinance, and 8Eightcap with multi-asset liquidity and top-tier bank pricing.",
    sagfx_tech_2_title: "Automated Weekly Cashbacks",
    sagfx_tech_2_desc: "Up to 85% commission rebates returned directly to your account with zero delays or withdrawal limits.",
    sagfx_tech_3_title: "Multi-Asset Depth of Market",
    sagfx_tech_3_desc: "Gold (XAU/USD) spreads from 0.0 pips, major FX pairs, and global indices aligned with institutional market structure.",
    sagfx_tech_4_title: "Bullion Hedging Desk Bridge",
    sagfx_tech_4_desc: "Seamless execution bridge to Mongsay House Delta-Neutral physical gold hedging for local jewelry merchants.",
    calc_widget_title: "Interactive Rebate Calculator",
    calc_widget_desc: "Slide your monthly trading volume to calculate your estimated weekly and annual cashback returns.",
    calc_vol_label: "Monthly Volume (Lots)",
    calc_asset_label: "Primary Traded Asset",

    // SAGFX Institutional FAQ Repository (English)
    faq_sagfx_tag: "KNOWLEDGE REPOSITORY",
    faq_sagfx_title: "Frequently Asked <span class=\"cyan-glow-text\">Questions</span>",
    faq_sagfx_desc: "Clear, candid answers regarding broker rebate mechanics, safety of funds, and institutional clearing.",
    faq_sagfx_q1: "How do broker rebates work and why does SAGFX pay them?",
    faq_sagfx_a1: "When you trade through a broker, the broker charges a commission or spread mark-up. As an institutional partner, SAGFX receives wholesale volume clearing compensation from the broker. Rather than keeping all fees, SAGFX passes up to 85% of this revenue directly back to you as weekly cashback. You trade identical conditions, but recover significant transaction costs.",
    faq_sagfx_q2: "Does registering through SAGFX widen my trading spreads?",
    faq_sagfx_a2: "No, absolutely not. Your spreads, slippage, and execution speeds remain 100% untouched and identical to opening an account directly with the prime broker. In fact, SAGFX accounts frequently benefit from custom ECN pool routing and zero-swap institutional profiles unavailable to regular retail clients.",
    faq_sagfx_q3: "Can I connect an existing live trading account to SAGFX?",
    faq_sagfx_a3: "Yes. If you already maintain an active account with any of our partner prime brokers, you do not need to create a new profile or close existing positions. You can easily request your broker support to transfer your account under the SAGFX institutional clearing code, or open an additional sub-account under our whitelist to begin earning rebates immediately.",
    faq_sagfx_q4: "Which global prime brokers are whitelisted under SAGFX?",
    faq_sagfx_a4: "We maintain direct clearing partnerships with top regulated prime brokerages, including Megafusion (www.megafusion.com), GTC GO, LiteFinance, and 8Eightcap. Traders can link existing accounts or deploy new sub-accounts under the SAGFX whitelist.",
    faq_sagfx_q5: "How and when are weekly cashback distributions paid out?",
    faq_sagfx_a5: "All trading volume is calculated on Sunday midnight GMT. Cashback is credited automatically every Monday directly to your USDT (TRC20/BEP20) crypto wallet, Cambodian local bank transfer (ABA / Bakong), or routed back into your MT4/MT5 trading account balance with zero withdrawal delay.",
    faq_sagfx_q6: "How does SAGFX integrate with physical bullion hedging for gold shops?",
    faq_sagfx_a6: "SAGFX provides the low-latency execution bridge that connects local Cambodian physical gold shops and bullion merchants directly to Tier-1 interbank liquidity. By executing calculated digital short hedge positions on MT4/MT5 via SAGFX, merchants neutralize inventory price drops during market downturns, while receiving weekly rebate cashbacks that offset broker financing costs.",

    // Slide 5: Clearing Nexus Loop
    loop_sec_tag: "// 05 MULTI-CHANNEL CLEARING LOOP",
    loop_sec_title: "Unified Institutional <span class=\"cyan-glow-text\">Clearing &amp; Liquidity Loop</span>",
    loop_sec_desc: "Continuous multi-channel volume ingestion routing Tier-1 interbank liquidity, high-volume retail trading, delta-neutral bullion hedging, and weekly rebate cashbacks into the SAGFX central clearing core.",
    loop_ch1_title: "Licensed Prime Brokers",
    loop_ch1_meta: "MEGAFUSION • GTC GO • LITEFINANCE • 8EIGHTCAP",
    loop_ch2_title: "High-Volume Traders",
    loop_ch2_meta: "GOLD (XAU/USD) • 0.0 RAW PIP",
    loop_ch3_title: "Bullion Hedging Desk",
    loop_ch3_meta: "DELTA-NEUTRAL INVENTORY",
    loop_ch4_title: "Rebate Yield Engine",
    loop_ch4_meta: "85% PASS-THROUGH • $45+/LOT",
    loop_ch5_title: "Automated Settlements",
    loop_ch5_meta: "USDT • ABA / BAKONG • MT4/5",

    // Brokerage Page: 3D Terminal & ECN Gateway (Pinterest Ref)
    terminal_sec_tag: "// DIRECT BROKERAGE TERMINAL &amp; ECN GATEWAY",
    terminal_sec_title: "Next-Generation <span class=\"cyan-glow-text\">Institutional Execution Rails</span>",
    terminal_sec_desc: "Direct fiber-optic cross-connect routing to whitelisted Tier-1 prime brokers with 0.0 raw spread, sub-millisecond latency, and automated weekly cashback.",
    terminal_card_title: "Megafusion Gateway",
    terminal_card_meta: "NODE 01 // FIX 4.4 LIQUIDITY BRIDGE",
    terminal_field_whitelabel: "WHITELIST ID",
    terminal_field_spread: "RAW 0.0 PIP",
    terminal_remember: "Remember me",
    terminal_forgot: "Get Whitelist Key",
    terminal_btn_connect: "Connect Megafusion Rails",
    terminal_toast_title: "Bridge Connected",
    terminal_toast_desc: "ROUTING 0.0 RAW SPREAD LIVE",

    // Cambodian Statutory Legal Protection & IP Notice
    legal_badge: "KINGDOM OF CAMBODIA STATUTORY PROTECTION & IP NOTICE",
    legal_statute_ref: "ROYAL KRAM NO. NS/RKM/0303/008 • NS/RKM/1119/017",
    legal_quote: "\"All intellectual property, proprietary financial architectures, mechanical market models, quantitative systems, visual identity assets, and published research contained within mongsay.com are protected under the <strong>Law on Copyright and Related Rights (Royal Kram No. NS/RKM/0303/008)</strong> and the <strong>Law on Electronic Commerce (Royal Kram No. NS/RKM/1119/017)</strong> of the Kingdom of Cambodia. Unauthorized reproduction, programmatic scraping, distribution, translation mirroring, or commercial exploitation is strictly prohibited and subject to civil remedies and penal prosecution under Cambodian law.\"",
    legal_disclaimer: "<strong>Institutional Notice:</strong> Content published by Mong Say and Mongsay House is strictly educational and analytical research. It does not constitute retail financial advice, collective investment solicitation, or custodial deposit taking under the regulatory remits of the Securities and Exchange Regulator of Cambodia (SERC) or the National Bank of Cambodia (NBC). All trading in leveraged instruments involves substantial risk of capital loss."
  },
  kh: {
    theme_light_label: "ពន្លឺ",
    theme_dark_label: "ងងឹត",
    nav_overview: "ទិដ្ឋភាព",
    nav_ventures: "អាជីវកម្ម",
    nav_advisory: "ឈ្មួញជើងសាឈានមុខ",
    nav_sagfx: "ប្រព័ន្ធ SAGFX",
    nav_hedging: "ការពារហានិភ័យមាស",
    nav_media: "ផ្សព្វផ្សាយ",
    nav_library: "បណ្ណាល័យ",
    nav_contact: "ទំនាក់ទំនង",
    hero_badge_payment: "សាច់ប្រាក់ងាយស្រួលស្ថាប័ន",
    hero_badge_advisory: "ប្រព័ន្ធ SAGFX",
    hero_badge_sagfx: "ប្រព័ន្ធ SAGFX",
    hero_badge_cm: "ទីផ្សារមាស (XAU/USD)",
    hero_badge_mongsay: "MONGSAY HOUSE",
    hero_subtitle: "ការជួញដូរ • ហេដ្ឋារចនាសម្ព័ន្ធ • Mongsay House",
    hero_title: "ជួញដូរមាស <br><span class=\"gold-text\">រៀបចំប្រព័ន្ធសាច់ប្រាក់</span> & <br><span class=\"gold-text\">លុបបំបាត់ភាពរញ៉េរញ៉ៃ</span>",
    hero_desc: "ខ្ញុំចំណាយពេលភាគច្រើនលើការវិភាគទីផ្សារមាស (XAU/USD) ជួយរៀបចំប្រព័ន្ធសាច់ប្រាក់នៅ <strong>SAGFX</strong> (<a href=\"https://sagfx.org\" target=\"_blank\" class=\"gold-text\">sagfx.org</a>) និងដឹកនាំ <strong>Mongsay House</strong>។ គ្មានពាក្យបច្ចេកទេសស្មុគស្មាញ ឬសូចនាករ Indicator រញ៉េរញ៉ៃឡើយ — ផ្តោតលើរចនាសម្ព័ន្ធទីផ្សារជាក់ស្តែង ការគ្រប់គ្រងហានិភ័យ និងការជួយឱ្យ Trader ចំណេញថ្លៃជួញដូរត្រឡប់មកវិញតាមរយៈ Rebate។",
    hero_cta_enroll: "ជជែកជាមួយ @MongsayFX",
    hero_cta_ventures: "ស្វែងយល់ពីប្រព័ន្ធការងារ",
    stat_gateway: "ភាពអាចរកបាននៃប្រព័ន្ធប្រតិបត្តិ",
    stat_rebate: "ទិន្នផល Rebate ឈ្មួញជើងសា",
    stat_community: "បណ្តាញសហគមន៍",
    sessions_title: "ម៉ោងបើកទីផ្សារជួញដូរស្ថាប័ន (កាលវិភាគបន្តផ្ទាល់)",

    // Strategic Promotions Section (3 Columns)
    promo_sec_tag: 'កម្មវិធីប្រូម៉ូសិនពាណិជ្ជកម្មផ្តាច់មុខ & អភ័យឯកសិទ្ធិដៃគូ',
    promo_sec_title: 'ប្រព័ន្ធយុទ្ធសាស្ត្រ <span class="gold-gradient-text">ប្រូម៉ូសិន & ការផ្តល់ជូនពិសេស</span>',
    promo_sec_desc: 'កម្មវិធីស្ថាប័នតម្លៃខ្ពស់បង្កើតឡើងនៅទូទាំង SAGFX.ORG (<a href="https://sagfx.org" target="_blank" class="gold-text">sagfx.org</a>) និង Mongsay House VIP។ ទទួលបាន Rebate ជួញដូរធនាគារកម្រិត Tier-1 ពង្រីកហេដ្ឋារចនាសម្ព័ន្ធឈ្មួញជើងសាស្ថាប័ន និងទទួលបានព័ត៌មានទីផ្សារសម្ងាត់។',

    // Promo 1: Brokerage Infrastructure
    promo_1_ribbon: 'ប្រូម៉ូសិន ០១ // តុការពារហានិភ័យមាស & ប្រាក់រូបវន្ត',
    promo_1_badge: '🛡️ ការការពារស្តុកមាសបែប DELTA-NEUTRAL',
    promo_1_title: 'តុការពារហានិភ័យមាស & ប្រាក់រូបវន្ត Delta-Neutral',
    promo_1_desc: 'ប្រព័ន្ធការពារការខាតបង់ពេលមាសធ្លាក់ថ្លៃសម្រាប់ហាងមាស អាជីវករគ្រឿងអលង្ការ និងឃ្លាំងស្តុកមាសកម្ពុជា។ បំប្លែងទម្ងន់ តម្លឹង និង ជី ទៅជាទំហំកិច្ចសន្យា MT4/MT5 ជាក់លាក់ ជាមួយតម្លៃទីផ្សារបច្ចុប្បន្ន និងតម្លៃផ្សារក្នុងស្រុក។',
    promo_1_b1: '<strong>ការពារហានិភ័យ ១០០%៖</strong> បន្សាបការប្រែប្រួលតម្លៃទីផ្សារមាសតាមរយៈកិច្ចសន្យា Short ឌីជីថលស្មើគ្នា។',
    promo_1_b2: '<strong>គណនាតម្លៃផ្សារកម្ពុជា៖</strong> បង្ហាញតម្លៃសាច់ប្រាក់ក្នុង ១តម្លឹង/ជី និងតម្លៃស្តុកសរុបក្នុងហាងភ្លាមៗ។',
    promo_1_b3: '<strong>Spread ដើមពីធនាគារតាម SAGFX៖</strong> ជម្រះកិច្ចសន្យាក្នុង Spread ទាបបំផុត និងមិនគិតថ្លៃ Swap លើសកម្រិត។',
    promo_1_b4: '<strong>ទំនាក់ទំនងអាទិភាព៖</strong> ពិភាក្សាផ្ទាល់ជាមួយតុជួញដូរ Mong Say (@MongsayFX)។',
    promo_1_cta: 'បើកផ្ទាំងគណនា Hedging អន្តរកម្ម →',

    // Promo 2: SAGFX.ORG Rebates
    promo_2_ribbon: 'ប្រូម៉ូសិន ០២ // REBATES SAGFX.ORG',
    promo_2_badge: '🔥 ទទួលបានកម្រៃជើងសារជួញដូរត្រឡប់មកវិញរហូតដល់ ៨៥%',
    promo_2_title: 'បញ្ជីសម្រាំង Rebate ស្ថាប័នកម្រិត Tier-1',
    promo_2_desc: 'ពិធីសារកាត់បន្ថយថ្លៃដើមផ្តាច់មុខសម្រាប់អ្នកជួញដូរមាស (XAU/USD) និងរូបិយប័ណ្ណសកម្ម អ្នកជួញដូរតាមក្បួនដោះស្រាយ និងអ្នកគ្រប់គ្រងទ្រព្យសកម្ម។',
    promo_2_b1: '<strong>ទទួលបាន $30 ដល់ $45+ ក្នុងមួយ Lot៖</strong> Rebate ស្ថាប័នផ្ទេរផ្ទាល់ជូនអ្នករៀងរាល់សប្តាហ៍។',
    promo_2_b2: '<strong>Spread ECN 0.0 Pip ដើម៖</strong> ជួញដូរផ្ទាល់ជាមួយសាច់ប្រាក់ធនាគារ Tier-1 ដោយគ្មានការបូកតម្លៃបន្ថែម។',
    promo_2_b3: '<strong>ការទូទាត់ស្វ័យប្រវត្តិប្រចាំសប្តាហ៍៖</strong> ផ្ទេរប្រាក់ផ្ទាល់ទៅកាន់គណនីជួញដូរ ឬកាបូបគ្រីបតូ (USDT) របស់អ្នក។',
    promo_2_b4: '<strong>ចូលរួមសហគមន៍ VIP ឥតគិតថ្លៃ៖</strong> សមាជិកភាពមួយជីវិតទៅកាន់ <a href="https://t.me/mongsayhouse17" target="_blank" class="gold-text">t.me/mongsayhouse17</a> (ផែនទី Gold S&D)។',
    promo_2_cta: 'ទាមទារអត្រា Rebate Tier-1 →',

    // Promo 3: VIP Private Desk
    promo_3_ribbon: 'ប្រូម៉ូសិន ០៣ // តុជំនួញឯកជន VIP',
    promo_3_badge: '💎 សញ្ញាជួញដូរ & ព័ត៌មានសម្ងាត់មួយជីវិត',
    promo_3_title: 'Mongsay House VIP ចូលរួមឥតគិតថ្លៃ ១០០% មួយជីវិត',
    promo_3_desc: 'ការបណ្តុះបណ្តាលកម្រិតស្ថាប័នពេញលេញ ផែនទីតម្រូវការ & ការផ្គត់ផ្គង់ (S&D) មាស (XAU/USD) ប្រចាំថ្ងៃ និងកូអរដោនេប្រតិបត្តិការផ្ទាល់។',
    promo_3_b1: '<strong>គ្មានថ្លៃសមាជិកភាពប្រចាំខែ៖</strong> សមាជិកដែលបានផ្ទៀងផ្ទាត់ទទួលបានការចូលប្រើប្រាស់ឥតគិតថ្លៃមួយជីវិត។',
    promo_3_b2: '<strong>កម្រិត S&D មេកានិក៖</strong> តំបន់ទិញ/លក់ស្ថាប័នជាក់ស្តែង ចំណុចអសារបង់ និងគោលដៅ 1:3+ RR។',
    promo_3_b3: '<strong>ការវិភាគបច្ចេកទេសផ្ទាល់ប្រចាំសប្តាហ៍៖</strong> វគ្គសិក្ខាសាលាស៊ីជម្រៅស្តីពីការបោសសម្អាត Liquidity Pool របស់ស្ថាប័ន។',
    promo_3_b4: '<strong>ការទំនាក់ទំនងផ្ទាល់៖</strong> ជជែកផ្ទាល់តាម Telegram ជាមួយ Mong Say សម្រាប់ការពិភាក្សាអំពីហានិភ័យផលប័ត្រ។',
    promo_3_cta: 'ចូលរួម Mongsay House VIP →',

    // Ventures Section (2 Columns)
    venture_sec_tag: 'ស្ថាបត្យកម្មផលប័ត្រ',
    venture_sec_title: 'អាជីវកម្មស្ថាប័ន & <span class="gold-gradient-text">ការកាន់កាប់ជាយុទ្ធសាស្ត្រ</span>',
    venture_sec_desc: 'បច្ចេកវិទ្យាហិរញ្ញវត្ថុរួមបញ្ចូលគ្នា ភាពជាដៃគូឈ្មួញជើងសាឈានមុខ និងសាច់ប្រាក់ងាយស្រួលស្ថាប័នដែលបានបង្កើត និងផ្តល់ប្រឹក្សាដោយ Mong Say។',

    // Venture 1: Mongsay House VIP
    venture_1_role: 'ស្ថាបនិក & អ្នកវិភាគឈានមុខ',
    venture_1_title: 'Mongsay House VIP',
    venture_1_tagline: 'សហគមន៍ជួញដូរស្ថាប័ន | មេកានិក S&D សុទ្ធសាធ',
    venture_1_desc: 'សហគមន៍ឯកជនលំដាប់ខ្ពស់សម្រាប់អ្នកជួញដូរមាស (XAU/USD) និងរូបិយប័ណ្ណកម្រិតស្ថាប័ន។ ផ្តល់កំណត់ត្រាជួញដូរជាក់លាក់ ផែនទីតម្រូវការ & ការផ្គត់ផ្គង់ (S&D) មតិវិភាគទីផ្សារផ្ទាល់ និងស្ថាបត្យកម្មបច្ចេកទេសទូលំទូលាយ។',
    spec_official_channel: 'បណ្តាញផ្លូវការ',
    venture_1_role_val: 'ស្ថាបនិក & អ្នកវិភាគឈានមុខ',
    spec_analytical_model: 'គំរូវិភាគ',
    venture_1_model_val: 'S&D សុទ្ធសាធ & Liquidity',
    spec_focus_asset: 'ទ្រព្យសកម្មគោលដៅ',
    venture_1_asset_val: 'មាស (XAU/USD)',
    venture_1_btn_join: 'ចូលរួមសហគមន៍ Telegram',
    venture_1_btn_alpha: 'Community Alpha →',

    // Venture 2: SAGFX.ORG
    venture_2_role: 'ប្រធានដឹកនាំឈ្មួញជើងសាស្ថាប័ន',
    venture_2_title: 'SAGFX.ORG',
    venture_2_tagline: 'ទីប្រឹក្សាទីផ្សារហិរញ្ញវត្ថុ | បណ្តាញ Rebate ស្ថាប័ន',
    venture_2_desc: 'ការគ្រប់គ្រង និងអភិវឌ្ឍន៍ឈ្មួញជើងសាឈានមុខ និងបណ្តាញ Rebate ស្ថាប័ន។ ភ្ជាប់ទំនាក់ទំនងអតិថិជនលំដាប់ខ្ពស់ និងអ្នកជួញដូរសកម្មដោយផ្ទាល់ទៅកាន់អ្នកផ្តល់សាច់ប្រាក់ស្របច្បាប់ ជាមួយប្រាក់ Rebate រហូតដល់ ៨៥%, Spread ECN ដើមទាបបំផុត និងការទូទាត់ប្រចាំសប្តាហ៍។',
    partner_brokers_label: 'ឈ្មួញជើងសាដៃគូ៖',
    spec_official_portal: 'គេហទំព័រផ្លូវការ',
    spec_executive_role: 'តួនាទីប្រតិបត្តិ',
    venture_2_role_val: 'ប្រធានដឹកនាំឈ្មួញជើងសា',
    spec_cashback: 'ប្រាក់ Rebate ត្រឡប់មកវិញ',
    venture_2_cashback_val: 'រហូតដល់ $8.50 / Lot',
    spec_payout: 'កាលវិភាគទូទាត់',
    venture_2_payout_val: 'ស្វ័យប្រវត្តប្រចាំសប្តាហ៍',
    venture_2_btn_portal: 'ចូលទៅកាន់ SAGFX Portal',
    venture_2_btn_frameworks: 'ក្របខ័ណ្ឌឈ្មួញជើងសា →',

    // Crest & Community Showcase Section
    crest_tag: 'សហគមន៍ឯកជន & ការអប់រំ',
    crest_title: 'Mongsay House & ភាពជាអ្នកដឹកនាំជួញដូរ',
    crest_desc: 'ក្រោមនិមិត្តសញ្ញារាជសីហ៍មាស <strong>Mongsay House</strong> ប្រមូលផ្តុំអ្នកជួញដូរកម្រិតខ្ពស់ អ្នកយុទ្ធសាស្ត្ររូបិយប័ណ្ណ និងស្ថាបនិក FinTech។ ផ្តល់ការវិភាគរចនាសម្ព័ន្ធទីផ្សារស្ថាប័នលើមាស (XAU/USD) ប្រចាំថ្ងៃ ការវិភាគការប្រែប្រួលម៉ាក្រូ និងការជួញដូរជាក់ស្តែងក្នុងសហគមន៍។',
    crest_p1: '⚡ ផែនទីរចនាសម្ព័ន្ធ XAU/USD',
    crest_p2: '🛡️ គំរូគ្រប់គ្រងហានិភ័យស្ថាប័ន',
    crest_p3: '💎 ប្រាក់ Rebate កម្រៃជើងសាឈ្មួញ',
    crest_p4: '🌐 បណ្តាញ FinTech សកល',
    crest_cta: 'ចូលរួមបណ្តាញផ្លូវការ៖ t.me/mongsayhouse17',

    // Advisory Pillars Section (2 Columns)
    pillars_sec_tag: 'សមត្ថភាពប្រតិបត្តិ',
    pillars_sec_title: 'សសរស្តម្ភ <span class="gold-gradient-text">ប្រឹក្សាស្ថាប័ន</span>',
    pillars_sec_desc: 'ក្របខ័ណ្ឌយុទ្ធសាស្ត្រផ្តល់ជូនស្ថាប័ន ធុរកិច្ចថ្មី FinTech និងតុជួញដូរទំហំធំ។',
    pillar_1_num: '០១ // ការពង្រីកឈ្មួញជើងសា',
    pillar_1_title: 'ការពង្រីកឈ្មួញជើងសា & សាច់ប្រាក់ងាយស្រួល',
    pillar_1_desc: 'រៀបចំកិច្ចសន្យា IB ជាយុទ្ធសាស្ត្រ ស្ពានសាច់ប្រាក់ងាយស្រួល Prime ការកំណត់រចនាសម្ព័ន្ធ STP/ECN ដើម និងបំពង់បែងចែក Rebate តាមរយៈ SAGFX.ORG។',
    pillar_2_num: '០២ // វិន័យបរិមាណ',
    pillar_2_title: 'រចនាសម្ព័ន្ធទីផ្សារមេកានិក',
    pillar_2_desc: 'ការតាមដានការបោសសម្អាត Liquidity កម្រិតប្រូបាប៊ីលីតេខ្ពស់ ការផ្ទៀងផ្ទាត់ Displacement និងស្ថាបត្យកម្មហានិភ័យប្រភាគសម្រាប់ប្រតិបត្តិការមាស (XAU/USD)។',

    // Media Section
    media_sec_tag: 'ប្រព័ន្ធផ្សព្វផ្សាយ & អេកូឡូស៊ីពហុបណ្តាញ',
    media_sec_title: 'ភ្ជាប់ទំនាក់ទំនងជាមួយ <span class="gold-gradient-text">Mongsay លើគ្រប់បណ្តាញ</span>',
    media_sec_desc: 'ការផ្សាយផ្ទាល់ជាក់ស្តែង ការអប់រំការជួញដូរ ការយល់ដឹងស៊ីជម្រៅពីទីផ្សារហិរញ្ញវត្ថុ និងទស្សនវិស័យប្រតិបត្តិ។',
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
    contact_desc: "បណ្តាញផ្ទាល់ទៅកាន់ការិយាល័យ Mong Say សម្រាប់ការសាកសួរកម្រិតស្ថាប័ន ភាពជាដៃគូដឹកនាំឈ្មួញជើងសាស្ថាប័ន និងការពិគ្រោះយោបល់យុទ្ធសាស្ត្រ។",
    contact_btn_submit: "ផ្ញើសំណើជាយុទ្ធសាស្ត្រ",
    fx_label: "ចលនា",
    eco_label: "សន្សំ",
    fx_mode_active: "ចលនាបើក",
    fx_mode_eco: "សន្សំសំចៃ",

    // FAQ Section
    faq_sec_tag: "ស្ថាបត្យកម្មចំណេះដឹង & សំណួរញឹកញាប់",
    faq_sec_title: "សំណួរដែលសួរ <span class=\"gold-gradient-text\">ញឹកញាប់ (FAQ)</span>",
    faq_sec_desc: "គោលការណ៍ណែនាំប្រតិបត្តិការស្ថាប័នសំខាន់ៗ យន្តការ Rebate វិធីសាស្ត្ររចនាសម្ព័ន្ធទីផ្សារមេកានិក និងពិធីសារភាពជាដៃគូ។",
    faq_q1: "តើ SAGFX ជាអ្វី ហើយយន្តការ Rebate ស្ថាប័នដំណើរការយ៉ាងដូចម្តេច?",
    faq_a1: "SAGFX (<a href=\"https://sagfx.org\" target=\"_blank\" class=\"gold-text\">sagfx.org</a>) ភ្ជាប់ទំនាក់ទំនងអ្នកជួញដូរលក់រាយ Prop និងស្ថាប័នដោយផ្ទាល់ទៅកាន់ឈ្មួញជើងសាធនាគារ Tier-1 ដែលមានអាជ្ញាប័ណ្ណ (រួមមាន IC Markets, OANDA, BlackBull Markets និង FP Markets) ជាមួយ Spread ECN 0.0 Pip ដើម។ ទំហំជួញដូរនឹងបង្កើតជាប្រាក់ Rebate ស្ថាប័នរហូតដល់ $45+ ក្នុងមួយ Lot ដោយស្វ័យប្រវត្តិ ហើយទូទាត់រៀងរាល់សប្តាហ៍ផ្ទាល់ទៅកាន់គណនីជួញដូរ។",
    faq_q2: "តើ Mongsay House ប្រើប្រាស់គំរូវិភាគបែបណា?",
    faq_a2: "Mongsay House ពឹងផ្អែកលើតម្រូវការ & ការផ្គត់ផ្គង់ស្ថាប័នសុទ្ធសាធ (Pure Institutional S&D), ការបោសសម្អាត Liquidity (Liquidity Sweeps) និងរចនាសម្ព័ន្ធទីផ្សារមេកានិក។ ការបន្តនិន្នាការ (BOS) និងការផ្លាស់ប្តូរចរិតលក្ខណៈទីផ្សារ (CHoCH) ត្រូវបានបញ្ជាក់ដោយការបិទតួទៀនពេញលេញហួសពី Swing High/Low សំខាន់ៗដែលមានប្រភពមកពី Base Formations (RBD, DBR, RBR, DBD) លើមាស (XAU/USD)។ គ្មានការប្រើប្រាស់ Indicator រញ៉េរញ៉ៃឡើយ។",
    faq_q3: "តើហាងមាស និងអាជីវករគ្រឿងអលង្ការអាចការពារដើមទុនតាមរយៈតុ Hedging យ៉ាងដូចម្តេច?",
    faq_a3: "តាមរយៈការការពារហានិភ័យមាសរូបវន្តបែប Delta-Neutral លើ MT4/MT5 តាម SAGFX ហាងមាសអាចលុបបំបាត់ហានិភ័យតម្លៃធ្លាក់ចុះបាន ១០០%។ នៅពេលហាងទិញមាសចូលស្តុក បញ្ជា Short ឌីជីថលក្នុងទំហំស្មើគ្នាត្រូវបានបើកក្នុង Spread ធនាគារដើម ដែលធានាថាតម្លៃសាច់ប្រាក់ស្តុកក្នុងហាងមិនរងផលប៉ះពាល់ឡើយទោះបីទីផ្សារមាសដាំក្បាលចុះខ្លាំងយ៉ាងណាក្តី។",
    faq_q4: "តើអ្វីជាលក្ខខណ្ឌតម្រូវដើម្បីចូលរួម Mongsay House VIP?",
    faq_a4: "ការចូលរួម Mongsay House VIP គឺឥតគិតថ្លៃ ១០០% មួយជីវិតសម្រាប់សមាជិកដែលបានផ្ទៀងផ្ទាត់ និងរក្សាវិន័យគ្រប់គ្រងហានិភ័យស្ថាប័ន (គំរូហានិភ័យប្រភាគ ០.៥%–១.០% ក្នុងមួយ Trade និងគោលដៅចំណេញអប្បបរមា 1:3 RR សំដៅលើ Structural Liquidity Pools) ព្រមទាំងមានគណនីជួញដូរក្នុងបញ្ជីស។",
    faq_q5: "តើខ្ញុំអាចផ្ទៀងផ្ទាត់ការទំនាក់ទំនងផ្លូវការពីលោក ម៉ុង សាយ យ៉ាងដូចម្តេច?",
    faq_a5: "រាល់ការឆ្លើយឆ្លងផ្លូវការ ការពិគ្រោះយោបល់ និងការចុះឈ្មោះ Whitelist ត្រូវបានធ្វើឡើងផ្តាច់មុខតាមរយៈ Telegram ផ្ទាល់ខ្លួនដែលបានផ្ទៀងផ្ទាត់ <a href=\"https://t.me/MongsayFX\" target=\"_blank\" class=\"gold-text\">@MongsayFX</a> និងឆានែលសហគមន៍ផ្លូវការ <a href=\"https://t.me/mongsayhouse17\" target=\"_blank\" class=\"gold-text\">t.me/mongsayhouse17</a>។ សូមផ្ទៀងផ្ទាត់ឈ្មោះគណនីជានិច្ចដើម្បីជៀសវាងគណនីក្លែងបន្លំ។",

    // Delta-Neutral Gold Hedging Architecture
    // 3D Studio Display Cascading Ledger Stack
    // 3D Studio Display Cascading Reading Console (Library)
    lib_stack_tag: "// បណ្ណាល័យមូលធនបញ្ញា & ទស្សនវិជ្ជាស្នូល",
    lib_stack_headline: "ប្រាជ្ញារាប់ទសវត្សរ៍។<br><span class=\"blue-gradient-text\">ផ្ទាំងអានតែមួយកន្លែង។</span>",
    lib_stack_desc: "ស្វែងរកស្នាដៃឯក គំរូផ្នត់គំនិតសំខាន់ៗ និងខ្លឹមសារសង្ខេបជំពូកជុំវិញ ហិរញ្ញវត្ថុបរិមាណ ចិត្តវិទ្យាជួញដូរ ហានិភ័យមិនស៊ីមេទ្រី និងរចនាសម្ព័ន្ធទីផ្សារម៉ាក្រូ។",
    lib_stack_badge: "សៀវភៅស្នូលទាំង ៨ ក្បាលត្រូវបានរៀបចំយ៉ាងហ្មត់ចត់",
    lib_stack_brand_left: "MONGSAY // បណ្ណាល័យថ្នាក់ដឹកនាំ",
    lib_stack_brand_right: "សៀវភៅស្នូល៖ ៨ ក្បាល",
    lib_stack_card_6_title: "Trading in the Zone (Mark Douglas)",
    lib_stack_card_5_title: "The Psychology of Money (Morgan Housel)",
    lib_stack_card_4_title: "Reminiscences of a Stock Operator",
    lib_stack_card_3_title: "Principles: Life and Work (Ray Dalio)",
    lib_stack_card_2_title: "Antifragile (Nassim Nicholas Taleb)",
    lib_stack_card_1_title: "The Sovereign Individual (Rees-Mogg)",
    lib_stack_query_btn: "ស្វែងរក &#8629;",
    lib_stack_metric_vols: "ចំនួនសៀវភៅ:",
    lib_stack_metric_doctrine: "ទស្សនវិជ្ជា:",
    lib_stack_metric_framework: "រចនាសម្ព័ន្ធ:",
    hedge_stack_tag: "// បញ្ជីគណនេយ្យការពារហានិភ័យមាស DELTA-NEUTRAL",
    hedge_stack_headline: "ស្តុកមាសរាប់ឆ្នាំ។<br><span class=\"blue-gradient-text\">ការពារតែមួយប្រព័ន្ធ។</span>",
    hedge_stack_desc: "បង្រួបបង្រួមសមតុល្យហាងមាសរូបវន្ត បញ្ជីហានិភ័យមាសប្រវត្តិសាស្ត្រ និងរូបមន្តគណនាតម្លឹង និងជី នៃប្រទេសកម្ពុជា ទៅក្នុងប្រព័ន្ធការពារហានិភ័យ Delta-Neutral គ្មានការខាតបង់។",
    hedge_stack_badge: "កំពុងដំណើរការនៅតាមបណ្តាហាងមាសកម្ពុជា",
    hedge_stack_card_6_title: "ប្រាក់ Rebate ប្រចាំសប្តាហ៍ដើម្បីទូទាត់ចំណាយ",
    hedge_stack_card_5_title: "ខែលការពារការប្រែប្រួលតម្លៃ Zero-Spread",
    hedge_stack_card_4_title: "ការបញ្ជូន Short XAU/USD ទៅប្រព័ន្ធអន្តរធនាគារ",
    hedge_stack_card_3_title: "សវនកម្មស្តុកមាសជាក់ស្តែងក្នុងហាង",
    hedge_stack_card_2_title: "រូបមន្តបម្លែង តម្លឹង និង ជី",
    hedge_stack_card_1_title: "ប្រព័ន្ធការពារ Delta-Neutral ពេលវេលាជាក់ស្តែង",
    hedge_stack_return_btn: "ដំណើរការ &Delta; = 0",
    hedge_stack_metric_exposure: "ទំហំ Short:",
    hedge_stack_metric_collat: "ប្រាក់តម្កល់:",
    hedge_stack_metric_downside: "ហានិភ័យ:",
    hedge_hero_tag: "តុជួញដូរមាសស្ថាប័ន // រចនាសម្ព័ន្ធ DELTA-NEUTRAL",
    hedge_hero_desc: "ការរៀបចំប្រព័ន្ធការពារហានិភ័យមាស Delta-Neutral សម្រាប់ហាងមាស អាជីវកម្មគ្រឿងអលង្ការ និងឃ្លាំងស្តុកមាស។ បន្សាបការប្រែប្រួលតម្លៃទីផ្សារមាស លុបបំបាត់ហានិភ័យស្តុក និងការពារប្រាក់ចំណេញពីថ្លៃឈ្នួល និងគម្លាតតម្លៃទិញ-លក់បាន ១០០%។",
    hedge_badge_1: "⚖️ ១ តម្លឹង = ៣៧.៥០ ក្រាម ≈ ១.២០៥៦៥ Troy oz",
    hedge_badge_2: "📐 ១.០០ Standard Lot = ៨២.៩៤២៦ តម្លឹង (៣,១១០.៣៥ ក្រាម)",
    hedge_badge_3: "🛡️ សមីការ Delta-Neutral: Digital = −Physical",
    hedge_badge_4: "⚡ ជម្រះកិច្ចសន្យាផ្ទាល់តាម SAGFX.ORG",
    hedge_calc_tag: "ម៉ាស៊ីនគណនាការពារហានិភ័យមាសសម្រាប់ហាង",
    hedge_calc_title: "ការគណនាការពារហានិភ័យលោហធាតុរូបវន្ត <span class=\"gold-gradient-text\">Delta-Neutral</span>",
    hedge_calc_desc: "គណនាទំហំកិច្ចសន្យា MT4/MT5 (Lots) ប្រាក់កក់តម្កល់ Margin តម្លៃទីផ្សារក្នុងស្រុកកម្ពុជា និងទុនបម្រុងសុវត្ថិភាពសម្រាប់ស្តុកមាស និងប្រាក់នៃហាងរបស់អ្នកតាមពេលវេលាជាក់ស្តែង។",
    hedge_flow_steps_tag: "🇰🇭 របៀបប្រើប្រាស់សម្រាប់ហាងមាសកម្ពុជា",
    hedge_step_1_title: "ជំហាន ១: ជ្រើសរើសទំនិញ & ស្តុក",
    hedge_step_1_desc: "ជ្រើសរើស មាស (Gold) ឬ ប្រាក់ (Silver) ហើយបញ្ចូលទម្ងន់ តម្លឹង (Damlung) ឬ ជី (Chi) ដែលមានក្នុងទូហាង។",
    hedge_step_2_title: "ជំហាន ២: ពិនិត្យតម្លៃផ្សារកម្ពុជា",
    hedge_step_2_desc: "ប្រព័ន្ធគណនាតម្លៃមាស ១តម្លឹង/ជី និងតម្លៃស្តុកសរុបជាសាច់ប្រាក់ USD តាមផ្សារក្នុងស្រុកជាក់ស្តែង។",
    hedge_step_3_title: "ជំហាន ៣: បើកបញ្ជាការពារហានិភ័យ",
    hedge_step_3_desc: "អនុវត្តតាមបញ្ជា Lots លើ MT4/MT5 តាមរយៈ SAGFX ដើម្បីការពារតម្លៃស្តុក ១០០% មិនឱ្យខាតបង់ពេលមាសធ្លាក់ថ្លៃ។",
    hedge_label_asset: "ទំនិញលោហធាតុមានតម្លៃ",
    metal_gold_opt: "មាស / Gold (XAU/USD)",
    metal_silver_opt: "ប្រាក់ / Silver (XAG/USD)",
    btn_sync_price: "ទាញយកតម្លៃបច្ចុប្បន្ន",
    hedge_local_title: "🇰🇭 តម្លៃផ្សារកម្ពុជាក្រៅឌីជីថល / LOCAL CAMBODIAN COUNTER VALUATION",
    hedge_local_premium_tag: "កម្រៃបន្ថែមលើទីផ្សារក្នុងស្រុក៖",
    hedge_local_per_damlung: "តម្លៃក្នុង ១តម្លឹង (Price / Damlung)",
    hedge_local_per_chi: "តម្លៃក្នុង ១ជី (Price / Chi)",
    hedge_local_weight_troy: "ទម្ងន់ស្មើ Ounce (Troy Oz)",
    hedge_total_inventory_val_label: "🏦 តម្លៃស្តុកមាសសរុបក្នុងហាង (Total Shop Physical Value)",
    hedge_total_inventory_val_sub: "តម្លៃសាច់ប្រាក់ស្តុកក្នុងហាងត្រូវបានការពារ ១០០% មិនឱ្យបាត់បង់",
    hedge_presets_label: "ជ្រើសរើសទំហំរហ័ស៖",
    hedge_capital_card_title: "💼 ការណែនាំអំពីដើមទុន & ទឹកប្រាក់គណនី (CAPITAL & BALANCE ADVISORY)",
    hedge_capital_card_tag: "តើគួរមានទឹកប្រាក់តម្កល់ប៉ុន្មាន?",
    hedge_user_balance_label: "សមតុល្យទឹកប្រាក់ក្នុងគណនីជួញដូររបស់អ្នក ($USD)",
    hedge_min_capital_rec: "ប្រាក់កក់តម្កល់សុវត្ថិភាពដែលណែនាំ (Recommended Deposit):",
    hedge_sim_title: "📊 ការសាកល្បងហានិភ័យពេលទីផ្សារប្រែប្រួល (MARKET STRESS-TEST SIMULATION)",
    sim_phys_label: "ស្តុកមាសរូបវន្តក្នុងហាង",
    sim_hedge_label: "កិច្ចសន្យាការពារលើ SAGFX",
    sim_net_label: "ផលចំណេញ/ខាតសរុបសុទ្ធ (Delta-Neutral)",
    sim_net_desc: "នៅពេលតម្លៃមាសធ្លាក់ចុះ កិច្ចសន្យា Short ឌីជីថលទទួលបានប្រាក់ចំណេញលើ MT4/MT5 ដែលមកទូទាត់ការខាតបង់លើស្តុកមាសរូបវន្តស្មើគ្នា ១០០% Delta-Neutral (Δ = 0)។",
    hedge_label_flow: "ទិសដៅលំហូរស្តុកមាសរូបវន្ត",
    hedge_flow_buy: "📥 ហាងទិញចូល (ស្តុកកើនឡើង)",
    hedge_flow_sell: "📤 ហាងលក់ចេញ (ស្តុកថយចុះ)",
    hedge_label_unit: "ខ្នាតរង្វាស់ស្តុកមាស",
    unit_damlung: "តម្លឹង (៣៧.៥ ក្រាម)",
    unit_chi: "ជី (៣.៧៥ ក្រាម)",
    unit_kilograms: "គីឡូក្រាម (Kg)",
    unit_grams: "ក្រាម (g)",
    unit_ounces: "Troy Ounces (oz)",
    hedge_label_quantity: "បរិមាណមាសត្រូវការពារហានិភ័យ",
    hedge_label_spot: "តម្លៃមាសពិភពលោក ($USD/oz)",
    hedge_label_leverage: "អនុបាត Leverage",
    hedge_label_buffer: "ទុនបម្រុងសុវត្ថិភាពការពារការប្រែប្រួលតម្លៃ",
    hedge_directive_title: "បទបញ្ជាប្រតិបត្តិឌីជីថល",
    hedge_metric_lots: "ទំហំកិច្ចសន្យា Lots",
    hedge_metric_margin: "ប្រាក់កក់ Margin ដំបូង",
    hedge_metric_buffer: "ទុនបម្រុងសុវត្ថិភាពសរុប",
    hedge_metric_weight: "ទម្ងន់មាសបំប្លែង",
    hedge_btn_dispatch: "ផ្ញើព័ត៌មាន Hedging ទៅកាន់ @MongsayFX",
    hedge_pillars_tag: "សៀវភៅយុទ្ធសាស្ត្រគ្រប់គ្រងហានិភ័យហាងមាស",
    hedge_pillars_title: "ក្របខ័ណ្ឌស្ថាប័ន <span class=\"gold-gradient-text\">ការពារហានិភ័យមាសរូបវន្ត</span>",
    hedge_pillars_desc: "សសរស្តម្ភមេកានិកចំនួន ៤ ដែលបំប្លែងអាជីវកម្មលក់រាយមាសរូបវន្តពីការផ្សងព្រេងតម្លៃ ទៅជាសហគ្រាសរកចំណេញបែប Delta-Neutral ប្រកបដោយនិរន្តរភាព។",
    hedge_p1_title: "គោលការណ៍ Delta-Neutral សម្រាប់ហាងមាស",
    hedge_p1_desc: "ហាងលក់គ្រឿងអលង្ការរកប្រាក់ចំណេញពីគម្លាតតម្លៃទិញ-លក់ និងកម្រៃកែច្នៃ/ឈ្នួលជាង។ ការទុកស្តុកមាសដោយមិនការពារ ធ្វើឱ្យប្រឈមការខាតបង់ធំពេលមាសធ្លាក់ថ្លៃ។ ការបើកកិច្ចសន្យា Short ក្នុងទំហំស្មើគ្នា ធ្វើឱ្យហានិភ័យទីផ្សារសុទ្ធស្មើសូន្យ (Δ = 0)។",
    hedge_p1_badge: "ការលុបបំបាត់ហានិភ័យ៖ បន្សាបការប្រែប្រួលតម្លៃ",
    hedge_p2_title: "ការបំប្លែងទម្ងន់មាសខ្មែរទៅជាស្តង់ដារ Lots អន្តរជាតិ",
    hedge_p2_desc: "អាជីវករខ្មែរប្រើខ្នាត តម្លឹង (៣៧.៥ ក្រាម) និង ជី (៣.៧៥ ក្រាម) ខណៈទីផ្សារហិរញ្ញវត្ថុអន្តរជាតិប្រើខ្នាត Troy Ounces (៣១.១០៣៥ ក្រាម)។ យើងបង្កើតសមាមាត្រស្ថាប័ន៖ ៨២.៩៤២៦ តម្លឹង ស្មើនឹង ១.០០ Standard Lot (១០០ oz)។",
    hedge_p2_badge: "រូបមន្តជាក់លាក់៖ Lots = តម្លឹង / ៨២.៩៤២៦",
    hedge_p3_title: "ទុនបម្រុងសុវត្ថិភាព & ការពារ Drawdown",
    hedge_p3_desc: "ការការពារតាមប្រព័ន្ធឌីជីថលទាមទារប្រាក់កក់ Margin។ ប្រសិនបើតម្លៃមាសហក់ឡើងខ្លាំង ស្តុកមាសរូបវន្តឡើងថ្លៃ ប៉ុន្តែគណនីឌីជីថលត្រូវមានទុនបម្រុងគ្រប់គ្រាន់ដើម្បីជៀសវាង Margin Call។ យើងកំណត់ទុនបម្រុងយ៉ាងតិច ±$100/oz សម្រាប់សុវត្ថិភាព។",
    hedge_p3_badge: "ស្តង់ដារទុនបម្រុង៖ Margin + ($100 × Oz)",
    hedge_p4_title: "ការជម្រះកិច្ចសន្យាស្ថាប័ន Tier-1 តាមរយៈ SAGFX",
    hedge_p4_desc: "ប្រាក់ចំណេញ Hedging អាចបាត់បង់ដោយសារ Spread ធំ និងថ្លៃ Swap ខ្ពស់របស់ឈ្មួញជើងសាលក់រាយ។ តាមរយៈ SAGFX.ORG ហាងមាសអាចជម្រះកិច្ចសន្យាក្នុង Spread ដើមពីធនាគារ (0.0–0.8 pips) និងគណនីអំណោយផល Swap។",
    hedge_p4_badge: "ប្រព័ន្ធប្រតិបត្តិ៖ Raw Spread & Rebate ប្រចាំសប្តាហ៍",
    hedge_cases_tag: "ករណីសិក្សាជាក់ស្តែង",
    hedge_cases_title: "ស្ថានភាពហាងមាស៖ <span class=\"gold-gradient-text\">មុន និងក្រោយពេល Hedging</span>",
    hedge_cases_desc: "របៀបដែលការអនុវត្ត Delta-Neutral ជួយសង្គ្រោះអាជីវករមាសពីការខាតបង់រាប់ពាន់ដុល្លារពេលទីផ្សារមាសប្រែប្រួលខ្លាំង។",
    hedge_case1_title: "អន្ទាក់នៃការទិញមាសចូលដោយមិនការពារ",
    hedge_case2_title: "ការការពារថ្លៃជំនួសស្តុកពេលមានការកុម្ម៉ង់ទុកមុន",
    hedge_matrix_tag: "តារាងបំប្លែងស្តង់ដារ",
    hedge_matrix_title: "តារាងបំប្លែងតម្លឹងខ្មែរទៅជា <span class=\"gold-gradient-text\">កិច្ចសន្យា MT4/MT5</span>",
    hedge_matrix_desc: "តារាងបំប្លែងស្ថាប័នផ្អែកលើតម្លៃមាសជាក់ស្តែង $2,720 និង Leverage 1:100 ជាមួយទុនបម្រុង $100/oz។",
    th_damlung: "តម្លឹងខ្មែរ",
    th_chi: "ជី",
    th_grams: "ទម្ងន់ (ក្រាម)",
    th_oz: "Troy Ounces",
    th_lots: "ទំហំ Lots (MT4/MT5)",
    th_margin: "ប្រាក់កក់ Margin (1:100)",
    th_safe_balance: "ទុនបម្រុងសុវត្ថិភាព",
    table_scroll_hint: "អូសទៅឆ្វេង/ស្តាំដើម្បីមើលតារាងពេញ",
    hedge_consult_tag: "ការបង្កើតប្រព័ន្ធការពារហានិភ័យមាស",
    hedge_consult_title: "បង្កើតតុជួញដូរ <span class=\"gold-gradient-text\">ការពារហានិភ័យមាសសម្រាប់ហាង</span>",
    hedge_consult_desc: "ការរៀបចំប្រព័ន្ធស្ថាប័នផ្ទាល់ជាមួយ Mong Say សម្រាប់ហាងមាស អាជីវកម្មលក់ដុំគ្រឿងអលង្ការ និងសេវាបញ្ចាំនៅកម្ពុជា ដើម្បីការពារហានិភ័យ Delta-Neutral ជាមួយ SAGFX។",

    // SAGFX Presentation Deck (Khmer)
    sagfx_hero_tag: "បទបង្ហាញស្ថាប័ន ២០២៦ // SAGFX.ORG",
    sagfx_hero_title: "ប្រព័ន្ធ Rebate ទំនើប & <br><span class=\"cyan-glow-text\">សាច់ប្រាក់ងាយស្រួលស្ថាប័ន</span>",
    sagfx_hero_desc: "ដំណោះស្រាយហិរញ្ញវត្ថុឆ្លាតវៃ បង្កើតឡើងដើម្បីកាត់បន្ថយថ្លៃដើមប្រតិបត្តិការ ផ្ដល់នូវការទូទាត់ផ្ទាល់កម្រិត Tier-1 អន្តរធនាគារ និងសងត្រឡប់ប្រាក់ Rebate ប្រចាំសប្តាហ៍ដោយស្វ័យប្រវត្តិ។",
    sagfx_cta_whitelist: "ចាប់ផ្ដើមចុះឈ្មោះ Whitelist",
    sagfx_stat_users: "+១៥,០០០+ ពាណិជ្ជករសកម្ម",
    sagfx_badge_secure: "Spread សុទ្ធចាប់ពី 0.0 Pip",
    sagfx_engine_tag: "ម៉ាស៊ីនទូទាត់ REBATE កណ្ដាល",
    sagfx_engine_title: "ម៉ាស៊ីន Rebate ទំនើប <br><span class=\"cyan-glow-text\">សម្រាប់ការទូទាត់កម្រិតស្ថាប័នរលូនបំផុត</span>",
    sagfx_engine_desc: "ហេដ្ឋារចនាសម្ព័ន្ធកម្រិតស្ថាប័នដែលបញ្ជូនបរិមាណជួញដូរធំៗតាមរយៈស្ពាន Broker ផ្ទាល់ ដោយសងប្រាក់ spread ត្រឡប់មក trader វិញរៀងរាល់សប្តាហ៍។",
    pedestal_badge_node: "ថ្នាំងទូទាត់កណ្ដាល",
    pedestal_badge_title: "ស្ពាន SAGFX Fix 4.4 Prime",
    sagfx_wallet_tag: "ប្រព័ន្ធ REBATE ឆ្លាតវៃ",
    sagfx_wallet_title: "ប្រាក់ត្រឡប់មកវិញប្រចាំសប្តាហ៍ស្វ័យប្រវត្តិ",
    sagfx_wallet_desc: "ទូទាត់ដោយផ្ទាល់ទៅកាន់កាបូប USDT គណនីធនាគារក្នុងស្រុក (ABA/Bakong) ឬចូលទៅក្នុងសមតុល្យគណនី MT4/MT5 រៀងរាល់ថ្ងៃចន្ទ។",
    sagfx_security_tag: "គ្មានការដំឡើង SPREAD",
    sagfx_security_title: "ការទូទាត់ផ្ទាល់កម្រិត Prime",
    sagfx_security_desc: "Spread អន្តរធនាគារសុទ្ធ ១០០% ពី Broker ពិភពលោកដែលមានអាជ្ញាប័ណ្ណត្រឹមត្រូវ។ គ្មានការបំប៉ោង spread ឬពន្យារពេលបញ្ជាទិញឡើយ។",
    sagfx_explore_btn: "ចូលមើលគេហទំព័រផ្លូវការ SAGFX.org",
    sagfx_volume_tag: "ស្ថិតិសាច់ប្រាក់ងាយស្រួល និងទិន្នផល",
    sagfx_volume_title: "សាច់ប្រាក់ងាយស្រួលឆ្លាតវៃ <br><span class=\"cyan-glow-text\">សម្រាប់ពាណិជ្ជករបរិមាណធំ</span>",
    sagfx_volume_desc: "គ្រប់គ្រងបរិមាណជួញដូររបស់អ្នកជាមួយប្រព័ន្ធ Rebate ស្ថាប័នដ៏មានសុវត្ថិភាព តម្លាភាព ១០០% គ្មានជម្លោះផលប្រយោជន៍ និងទូទាត់រហ័សទាន់ចិត្ត។",
    sagfx_view_platform: "បើកប្រព័ន្ធ SAGFX Portal",
    sagfx_chart_badge: "ប្រសិទ្ធភាព និងបរិមាណ",
    sagfx_stat_monthly_lots: "ទំហំ Lot ទូទាត់ប្រចាំខែ",
    sagfx_stat_max_rebate: "Rebate អតិបរមា / Lot (មាស)",
    sagfx_nodes_tag: "ស្ថាបត្យកម្មប្រព័ន្ធសុវត្ថិភាព",
    sagfx_nodes_title: "ហេដ្ឋារចនាសម្ព័ន្ធស្ថាប័នសុវត្ថិភាព <br><span class=\"cyan-glow-text\">រចនាឡើងដើម្បីកាត់បន្ថយ Slippage ដល់សូន្យ</span>",
    sagfx_nodes_desc: "បង្កើតឡើងសម្រាប់ការបញ្ជាទិញលឿនបំផុត spread អន្តរធនាគារសុទ្ធ និងការទូទាត់ប្រាក់ rebate ប្រចាំសប្តាហ៍ជាមួយ Prime Broker លំដាប់កំពូល។",
    sagfx_feat_1: "ស្ពាន ECN ផ្ទាល់",
    sagfx_feat_2: "គ្មានការបំប៉ោងថ្លៃលាក់កំបាំង",
    sagfx_feat_3: "ការទូទាត់ស្វ័យប្រវត្តិ",
    sagfx_tech_1_title: "Prime Broker មានអាជ្ញាប័ណ្ណពិភពលោក",
    sagfx_tech_1_desc: "តភ្ជាប់ផ្ទាល់ទៅកាន់ IC Markets, Vantage, Exness និង FP Markets ជាមួយសាច់ប្រាក់ងាយស្រួលទ្រព្យសម្បត្តិច្រើន និងតម្លៃពីធនាគារលំដាប់កំពូល។",
    sagfx_tech_2_title: "ទូទាត់ប្រាក់ប្រចាំសប្តាហ៍ស្វ័យប្រវត្តិ",
    sagfx_tech_2_desc: "សងត្រឡប់រហូតដល់ ៨៥% នៃកម្រៃជើងសារទៅ trader ផ្ទាល់ដោយគ្មានការពន្យារពេល ឬកំណត់ដែនដកប្រាក់ឡើយ។",
    sagfx_tech_3_title: "ជម្រៅទីផ្សារពហុទ្រព្យសកម្ម",
    sagfx_tech_3_desc: "Spread មាស (XAU/USD) ចាប់ពី 0.0 pip គូរូបិយប័ណ្ណសំខាន់ៗ និងសន្ទស្សន៍សកល ស្របតាមយន្តការទីផ្សារស្ថាប័នពិតប្រាកដ។",
    sagfx_tech_4_title: "ការតភ្ជាប់ការពារហានិភ័យមាស",
    sagfx_tech_4_desc: "ស្ពានតភ្ជាប់រលូនទៅកាន់តុការពារហានិភ័យមាសសុទ្ធ Delta-Neutral របស់ Mongsay House សម្រាប់ហាងលក់មាសក្នុងស្រុក។",
    calc_widget_title: "ឧបករណ៍គណនាប្រាក់ចំណេញ Rebate ជាក់ស្តែង",
    calc_widget_desc: "រំកិលទំហំ Lot ជួញដូរប្រចាំខែរបស់អ្នក ដើម្បីគណនាប្រាក់ត្រឡប់មកវិញប្រចាំសប្តាហ៍ និងប្រចាំឆ្នាំ។",
    calc_vol_label: "ទំហំជួញដូរប្រចាំខែ (Lots)",
    calc_asset_label: "ប្រភេទទ្រព្យសកម្មចម្បង",
    calc_weekly_title: "ប្រាក់ Rebate ធានាប្រចាំសប្តាហ៍",
    calc_monthly_title: "សរុបប្រចាំខែ៖",
    calc_annual_title: "សរុបប្រចាំឆ្នាំដែលសន្សំបាន៖",
    calc_cta_whitelist: "ស្នើសុំ Whitelist តាម @MongsayFX",

    // SAGFX Institutional FAQ Repository (Khmer)
    faq_sagfx_tag: "ឃ្លាំងចំណេះដឹង",
    faq_sagfx_title: "សំណួរដែលសួរ <span class=\"cyan-glow-text\">ញឹកញាប់ (FAQ)</span>",
    faq_sagfx_desc: "ចម្លើយច្បាស់លាស់ ត្រង់ទៅត្រង់មក អំពីយន្តការ Broker Rebate សុវត្ថិភាពមូលនិធិ និងការទូទាត់កម្រិតស្ថាប័ន។",
    faq_sagfx_q1: "តើ Broker Rebate ដំណើរការដូចម្តេច ហើយហេតុអ្វី SAGFX បង់ប្រាក់ត្រឡប់មកវិញ?",
    faq_sagfx_a1: "នៅពេលអ្នកជួញដូរតាមរយៈ Broker ពួកគេនឹងគិតថ្លៃកម្រៃជើងសារ ឬ Spread។ ក្នុងនាមជាដៃគូស្ថាប័ន SAGFX ទទួលបានចំណែកចំណូលបរិមាណពី Broker។ ជំនួសឱ្យការរក្សាទុកទាំងអស់ SAGFX បានបង្វែររហូតដល់ ៨៥% នៃប្រាក់ចំណូលនេះសងត្រឡប់ទៅកាន់អ្នកវិញជារៀងរាល់សប្តាហ៍។ អ្នកទទួលបានលក្ខខណ្ឌជួញដូរដូចគ្នាទាំងស្រុង ប៉ុន្តែកាត់បន្ថយថ្លៃដើមយ៉ាងច្រើន។",
    faq_sagfx_q2: "តើការចុះឈ្មោះតាម SAGFX ធ្វើឱ្យ spread រីកធំជាងមុនឬទេ?",
    faq_sagfx_a2: "មិនមានជាដាច់ខាត។ SAGFX ដំណើរការលើប្រព័ន្ធ Tier-1 ECN ផ្ទាល់ដោយគ្មានការដំឡើង Spread សូម្បីតែបន្តិច។ Spread ល្បឿនប្រតិបត្តិការ និងលក្ខខណ្ឌរបស់អ្នកគឺដូចគ្នា ១០០% ទៅនឹងការបើកគណនីផ្ទាល់ជាមួយ Prime Broker។ ប្រាក់ Cashback របស់យើងបានមកពីកម្រៃជើងសារស្ថាប័ន មិនមែនដោយសារការបំប៉ោងតម្លៃរបស់អ្នកឡើយ។",
    faq_sagfx_q3: "តើខ្ញុំអាចភ្ជាប់គណនីជួញដូរផ្ទាល់ដែលមានស្រាប់ទៅកាន់ SAGFX បានទេ?",
    faq_sagfx_a3: "បាទ/ចាស។ ប្រសិនបើអ្នកមានគណនីសកម្មរួចហើយជាមួយ Prime Broker ដៃគូណាមួយរបស់យើង អ្នកមិនចាំបាច់បង្កើតគណនីថ្មី ឬបិទការជួញដូរដែលមានស្រាប់ឡើយ។ អ្នកអាចស្នើសុំផ្នែកគាំទ្ររបស់ Broker ដើម្បីផ្ទេរគណនីរបស់អ្នកក្រោមលេខកូដ SAGFX ឬបើកគណនីរងបន្ថែមក្រោមប្រព័ន្ធ Whitelist របស់យើងដើម្បីចាប់ផ្តើមទទួលប្រាក់ Rebate ភ្លាមៗ។",
    faq_sagfx_q4: "តើ Broker ពិភពលោកណាខ្លះស្ថិតនៅក្រោមប្រព័ន្ធ Whitelist របស់ SAGFX?",
    faq_sagfx_a4: "យើងមានកិច្ចសហការជាមួយ Prime Broker ដែលមានអាជ្ញាប័ណ្ណ Tier-1 ដូចជា IC Markets (ASIC/FSA), Vantage Markets (ASIC/CIMA), Exness (FCA/CySEC) និង FP Markets (ASIC/CySEC)។ អ្នកអាចភ្ជាប់គណនីដែលមានស្រាប់ ឬបង្កើតគណនីថ្មីក្រោមប្រព័ន្ធ SAGFX។",
    faq_sagfx_q5: "តើការទូទាត់ប្រាក់ Cashback ប្រចាំសប្តាហ៍ធ្វើឡើងរបៀបណា និងពេលណា?",
    faq_sagfx_a5: "បរិមាណជួញដូរទាំងអស់ត្រូវបានគណនាបញ្ចប់ត្រឹមរាត្រីថ្ងៃអាទិត្យ (GMT)។ ប្រាក់ Cashback នឹងត្រូវផ្ទេរដោយស្វ័យប្រវត្តិនារៀងរាល់ថ្ងៃចន្ទ ទៅកាន់កាបូប USDT (TRC20/BEP20) គណនីធនាគារក្នុងស្រុក (ABA / Bakong) ឬបញ្ចូលទៅក្នុងសមតុល្យគណនី MT4/MT5 របស់អ្នកផ្ទាល់។",
    faq_sagfx_q6: "តើ SAGFX ជួយដល់ការការពារហានិភ័យមាស (Hedging) សម្រាប់ហាងមាសយ៉ាងដូចម្តេច?",
    faq_sagfx_a6: "ហាងមាស និងអាជីវករគ្រឿងអលង្ការដែលប្រើប្រាស់តុការពារហានិភ័យ Delta-Neutral របស់ Mongsay House អាចបើកកិច្ចសន្យា Short លើ XAU/USD តាមរយៈ SAGFX។ ប្រព័ន្ធនេះផ្តល់នូវ Raw Spread 0.0 pip ថ្លៃសេវាទាបបំផុត និងទទួលបានប្រាក់ Rebate ត្រឡប់មកវិញ ដែលជួយកាត់បន្ថយថ្លៃដើមការពារហានិភ័យស្ទើរតែស្មើនឹងសូន្យ។",

    // Slide 5: Clearing Nexus Loop
    loop_sec_tag: "// ០៥ ប្រព័ន្ធទូទាត់ចរន្តពហុបណ្តាញ",
    loop_sec_title: "ប្រព័ន្ធចរន្តទូទាត់ <span class=\"cyan-glow-text\">និងសាច់ប្រាក់ងាយស្រួលស្ថាប័នរួម</span>",
    loop_sec_desc: "ការបញ្ជូនបរិមាណពហុបណ្តាញជាបន្តបន្ទាប់ តភ្ជាប់សាច់ប្រាក់អន្តរធនាគារ Tier-1 ការជួញដូរបរិមាណធំ ការការពារហានិភ័យមាស និងប្រាក់ Rebate ចូលទៅក្នុងស្នូលទូទាត់កណ្តាល SAGFX។",
    loop_ch1_title: "Prime Broker មានអាជ្ញាប័ណ្ណ",
    loop_ch1_meta: "IC MARKETS • VANTAGE • EXNESS",
    loop_ch2_title: "ពាណិជ្ជករបរិមាណធំ",
    loop_ch2_meta: "មាស (XAU/USD) • 0.0 RAW PIP",
    loop_ch3_title: "តុការពារហានិភ័យមាស",
    loop_ch3_meta: "ការពារស្តុកបែប DELTA-NEUTRAL",
    loop_ch4_title: "ម៉ាស៊ីនទិន្នផល Rebate",
    loop_ch4_meta: "សងត្រឡប់ ៨៥% • $45+/LOT",
    loop_ch5_title: "ប្រព័ន្ធទូទាត់ស្វ័យប្រវត្ត",
    loop_ch5_meta: "USDT • ABA / BAKONG • MT4/5",

    // Brokerage Page: 3D Terminal & ECN Gateway (Pinterest Ref)
    terminal_sec_tag: "// ស្ថានីយជួញដូរផ្ទាល់ &amp; ច្រកតភ្ជាប់ ECN",
    terminal_sec_title: "ប្រព័ន្ធប្រតិបត្តិការ <span class=\"cyan-glow-text\">កម្រិតស្ថាប័នជំនាន់ថ្មី</span>",
    terminal_sec_desc: "ការតភ្ជាប់បណ្តាញអុបទិក Fiber ផ្ទាល់ទៅកាន់ Prime Broker កំពូលៗ Tier-1 ជាមួយ Raw Spread 0.0 pip ល្បឿនលឿនជាងមីលីវិនាទី និងប្រាក់ Cashback ស្វ័យប្រវត្តប្រចាំសប្តាហ៍។",
    terminal_card_title: "ច្រកតភ្ជាប់ Megafusion",
    terminal_card_meta: "ថ្នាំង ០១ // ស្ពានសាច់ប្រាក់ FIX 4.4",
    terminal_field_whitelabel: "លេខសម្គាល់ WHITELIST",
    terminal_field_spread: "RAW 0.0 PIP",
    terminal_remember: "ចងចាំគណនីខ្ញុំ",
    terminal_forgot: "ស្នើសុំកូដ Whitelist",
    terminal_btn_connect: "តភ្ជាប់ Megafusion Rails",
    terminal_toast_title: "បានតភ្ជាប់ស្ពានជោគជ័យ",
    terminal_toast_desc: "កំពុងដំណើរការ RAW SPREAD 0.0 ផ្ទាល់",

    // Cambodian Statutory Legal Protection & IP Notice
    legal_badge: "សេចក្តីជូនដំណឹងស្តីពីកិច្ចការពារផ្លូវច្បាប់ & កម្មសិទ្ធិបញ្ញានៃព្រះរាជាណាចក្រកម្ពុជា",
    legal_statute_ref: "ព្រះរាជក្រមលេខ នស/រកម/០៣០៣/០០៨ • នស/រកម/១១១៩/០១៧",
    legal_quote: "«រាល់កម្មសិទ្ធិបញ្ញា ស្ថាបត្យកម្មហិរញ្ញវត្ថុផ្តាច់មុខ គំរូរចនាសម្ព័ន្ធទីផ្សារមេកានិក ប្រព័ន្ធបរិមាណ ទ្រព្យសកម្មអត្តសញ្ញាណ និងឯកសារស្រាវជ្រាវដែលបានបោះពុម្ពផ្សាយនៅលើ mongsay.com ត្រូវបានការពារយ៉ាងតឹងរ៉ឹងបំផុតក្រោម <strong>ច្បាប់ស្តីពីសិទ្ធិអ្នកនិពន្ធ និងសិទ្ធិប្រហាក់ប្រហែល (ព្រះរាជក្រមលេខ នស/រកម/០៣០៣/០០៨)</strong> និង <strong>ច្បាប់ស្តីពីពាណិជ្ជកម្មតាមប្រព័ន្ធអេឡិចត្រូនិក (ព្រះរាជក្រមលេខ នស/រកម/១១១៩/០១៧)</strong> នៃព្រះរាជាណាចក្រកម្ពុជា។ ការចម្លង ការទាញយកទិន្នន័យដោយស្វ័យប្រវត្តិ ការចែកចាយ ការកែច្នៃ ឬការទាញយកផលប្រយោជន៍ពាណិជ្ជកម្មដោយគ្មានការអនុញ្ញាតជាលាយលក្ខណ៍អក្សរ គឺជាអំពើខុសច្បាប់ និងត្រូវប្រឈមមុខនឹងចំណាត់ការផ្លូវច្បាប់រដ្ឋប្បវេណី និងព្រហ្មទណ្ឌ។»",
    legal_disclaimer: "<strong>សេចក្តីជូនដំណឹងកម្រិតស្ថាប័ន៖</strong> ខ្លឹមសារដែលបានផ្សព្វផ្សាយដោយ Mong Say និង Mongsay House គឺជាការស្រាវជ្រាវបែបអប់រំ និងការវិភាគបច្ចេកទេសសុទ្ធសាធ។ វាមិនមែនជាការផ្តល់ដំបូន្មានហិរញ្ញវត្ថុលក់រាយ ឬការកៀរគរប្រាក់បញ្ញើក្រោមដែនសមត្ថកិច្ចរបស់និយ័តករមូលបត្រកម្ពុជា (SERC) ឬធនាគារជាតិនៃកម្ពុជា (NBC) ឡើយ។ ការជួញដូរឧបករណ៍ហិរញ្ញវត្ថុ Leverage មានហានិភ័យខ្ពស់នៃការបាត់បង់ដើមទុន។"
  }
};

/* Comprehensive site-wide phrase dictionary for complete full-page Khmer translations */
const PHRASE_DICTIONARY_KH = {
  // FX Freeze & Performance Controls
  "FX Active": "ចលនាបើក",
  "ECO Freeze": "សន្សំសំចៃ",
  "FX": "ចលនា",
  "ECO": "សន្សំ",
  "Eco Mode": "មុខងារសន្សំ",
  "Performance Mode": "មុខងារល្បឿនខ្ពស់",
  // Navigation & Identifiers
  "Overview": "ទិដ្ឋភាព",
  "Ventures": "អាជីវកម្ម",
  "Lead Brokerage": "ឈ្មួញជើងសាឈានមុខ",
  "Gold Hedging": "ការពារហានិភ័យមាស",
  "Physical Gold Hedging": "ការពារហានិភ័យមាសរូបវន្ត",
  "Gold Hedging Desk": "តុការពារហានិភ័យមាស",
  "Physical Bullion Risk": "ហានិភ័យមាសដុំរូបវន្ត",
  "Swipe horizontally to view full matrix": "អូសទៅឆ្វេង/ស្តាំដើម្បីមើលតារាងពេញ",
  "Advisory & BDM": "ឈ្មួញជើងសាឈានមុខ",
  "Media": "ផ្សព្វផ្សាយ",
  "Library": "បណ្ណាល័យ",
  "Enroll / Contact": "ចុះឈ្មោះ / ទំនាក់ទំនង",
  "LEAD BROKERAGE DIRECTOR": "ប្រធានដឹកនាំឈ្មួញជើងសាស្ថាប័ន",
  "Lead Brokerage Director": "ប្រធានដឹកនាំឈ្មួញជើងសាស្ថាប័ន",
  "Lead Institutional Brokerage": "ប្រធានដឹកនាំឈ្មួញជើងសាស្ថាប័ន",
  "Lead Institutional Brokerage Director": "ប្រធានដឹកនាំឈ្មួញជើងសាស្ថាប័ន",
  "INSTITUTIONAL LIQUIDITY": "សាច់ប្រាក់ងាយស្រួលស្ថាប័ន",
  "SAGFX LEAD BROKERAGE": "ឈ្មួញជើងសាឈានមុខ SAGFX",
  "SAGFX.ORG ADVISOR": "ឈ្មួញជើងសាឈានមុខ SAGFX",
  "Trading • Infrastructure • Mongsay House": "ការជួញដូរ • ហេដ្ឋារចនាសម្ព័ន្ធ • Mongsay House",
  "Gold Trader & Builder • SAGFX": "អ្នកជួញដូរមាស & អ្នកកសាងប្រព័ន្ធ • SAGFX",
  "Gold Trader & SAGFX Lead": "អ្នកជួញដូរមាស & អ្នកដឹកនាំ SAGFX",
  "Explore The Systems": "ស្វែងយល់ពីប្រព័ន្ធការងារ",
  "Connect with @MongsayFX": "ជជែកជាមួយ @MongsayFX",
  "SAGFX RAILS": "ប្រព័ន្ធ SAGFX",
  "GOLD (XAU/USD)": "ទីផ្សារមាស (XAU/USD)",
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
  "PROMO 01 // PHYSICAL HEDGING DESK": "ប្រូម៉ូសិន ០១ // តុការពារហានិភ័យមាស & ប្រាក់រូបវន្ត",
  "PROMO 01 // BROKERAGE INFRASTRUCTURE": "ប្រូម៉ូសិន ០១ // តុការពារហានិភ័យមាស & ប្រាក់រូបវន្ត",
  "PROMO 01 // WHITE-LABEL SCALE": "ប្រូម៉ូសិន ០១ // តុការពារហានិភ័យមាស & ប្រាក់រូបវន្ត",
  "PROMO 02 // SAGFX.ORG": "ប្រូម៉ូសិន ០២ // SAGFX.ORG",
  "PROMO 03 // LEAD BROKERAGE": "ប្រូម៉ូសិន ០៣ // ឈ្មួញជើងសាឈានមុខ",
  "PROMO 03 // BDM & BROKER INCEPTION": "ប្រូម៉ូសិន ០៣ // ឈ្មួញជើងសាឈានមុខ",
  "PHYSICAL HEDGING DESK": "តុការពារហានិភ័យមាស & ប្រាក់រូបវន្ត",
  "WHITE-LABEL PROMOTION": "ការការពារហានិភ័យមាស & ប្រាក់រូបវន្ត",
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
  "0% Setup Fee Merchant Launchpad": "ការគ្រប់គ្រងប្រទេស & ការពង្រីក White-Label",
  "Institutional Brokerage Infrastructure & Liquidity Scale": "ហេដ្ឋារចនាសម្ព័ន្ធឈ្មួញជើងសាស្ថាប័ន & ការពង្រីកសាច់ប្រាក់",
  "TURNKEY BROKERAGE & LIQUIDITY SUITE": "កញ្ចប់ឈ្មួញជើងសា & សាច់ប្រាក់ងាយស្រួលពេញលេញ",
  "Institutional Brokerage Architecture": "ស្ថាបត្យកម្មឈ្មួញជើងសាស្ថាប័ន",
  "Institutional Brokerage Inception & Enterprise Solutions": "ការចាប់ផ្តើមឈ្មួញជើងសាស្ថាប័ន & ដំណោះស្រាយសហគ្រាស",
  "Prime liquidity bridges & CRM infrastructure guidance": "ស្ពានសាច់ប្រាក់ងាយស្រួល Prime & ការណែនាំ CRM",
  "Southeast Asia regional market expansion playbooks": "យុទ្ធសាស្ត្រពង្រីកទីផ្សារក្នុងតំបន់អាស៊ីអាគ្នេយ៍",
  "Brokerage Infrastructure & White-Label Scale": "ហេដ្ឋារចនាសម្ព័ន្ធឈ្មួញជើងសា & ការពង្រីក White-Label",
  "Waived integration and API gateway setup costs for eligible enterprise merchants integrating SAG Payment. Rapid settlement, multi-currency acquiring, and dedicated technical integration support.": "ហេដ្ឋារចនាសម្ព័ន្ធឈ្មួញជើងសាស្ថាប័នពេញលេញ និងការគ្រប់គ្រងប្រទេសជាយុទ្ធសាស្ត្រសម្រាប់អ្នកគ្រប់គ្រងមូលនិធិ ឈ្មួញជើងសាកម្រិតមធ្យម (IBs) និងស្ថាប័នហិរញ្ញវត្ថុដែលចង់ពង្រីកប្រតិបត្តិការទីផ្សារក្នុងតំបន់។",
  "GATEWAY LAUNCHPAD": "ហេដ្ឋារចនាសម្ព័ន្ធឈ្មួញជើងសា",
  "Apply via SAG Payment →": "សាកសួរការពង្រីកឈ្មួញជើងសា →",
  "Inquire for Brokerage Scale →": "សាកសួរការពង្រីកឈ្មួញជើងសា →",
  "Tier-1 Institutional Rebate Whitelist": "បញ្ជីសម្រាំង Rebate ស្ថាប័នកម្រិត Tier-1",
  "Enhanced commission rebate rates on Gold (XAU/USD) and FX majors with direct partner brokers. Up to $8.50 per lot cashback credited weekly to trading accounts.": "អត្រា Rebate កម្រៃជើងសារខ្ពស់លើមាស (XAU/USD) និងរូបិយប័ណ្ណចម្បងជាមួយឈ្មួញជើងសាដៃគូផ្ទាល់។ ទឹកប្រាក់ត្រឡប់មកវិញរហូតដល់ $8.50 ក្នុង ១ Lot ទូទាត់ប្រចាំសប្តាហ៍។",
  "HIGH VOLUME YIELD": "ទិន្នផលទំហំធំ",
  "Whitelist Account →": "ចុះឈ្មោះគណនី →",
  "Brokerage Inception & Master IB Scale": "ការបង្កើត Brokerage & ពង្រីក Master IB",
  "Comprehensive turnkey advisory for regional funds, master introducing brokers, and fintech founders looking to structure institutional liquidity bridges and IB networks.": "ការប្រឹក្សាយុទ្ធសាស្ត្រពេញលេញសម្រាប់មូលនិធិក្នុងតំបន់, Master IB និងស្ថាបនិក FinTech ដែលចង់រៀបចំស្ពានសាច់ប្រាក់ងាយស្រួល និងបណ្តាញ IB។",
  "LEAD BROKERAGE": "ឈ្មួញជើងសាឈានមុខ",
  "INSTITUTIONAL BDM": "ឈ្មួញជើងសាឈានមុខ",
  "Book Strategy Session →": "កក់ការប្រជុំយុទ្ធសាស្ត្រ →",
  "Architecture Audit": "ការត្រួតពិនិត្យស្ថាបត្យកម្មប្រព័ន្ធ",
  "Comprehensive evaluation of current brokerage rails, liquidity bridges, and IB payout friction.": "ការវាយតម្លៃទូលំទូលាយលើផ្លូវឈ្មួញជើងសាបច្ចុប្បន្ន ស្ពានសាច់ប្រាក់ងាយស្រួល និងការកាត់បន្ថយកម្រៃជើងសារ IB។",
  "Comprehensive evaluation of current payment rails, liquidity bridges, and IB payout friction.": "ការវាយតម្លៃទូលំទូលាយលើផ្លូវឈ្មួញជើងសាបច្ចុប្បន្ន ស្ពានសាច់ប្រាក់ងាយស្រួល និងការកាត់បន្ថយកម្រៃជើងសារ IB។",
  "Structural Blueprint": "ប្លង់មេនៃរចនាសម្ព័ន្ធ",
  "Formulating custom white-label brokerage integration, rebate distribution tiers, and risk models.": "ការរៀបចំការតភ្ជាប់ White-Label Brokerage, កម្រិតបែងចែក Rebate និងគំរូគ្រប់គ្រងហានិភ័យ។",
  "Formulating custom institutional brokerage integration, rebate distribution tiers, and risk models.": "ការរៀបចំការតភ្ជាប់ឈ្មួញជើងសាស្ថាប័ន, កម្រិតបែងចែក Rebate និងគំរូគ្រប់គ្រងហានិភ័យ។",
  "Formulating custom SAG Payment integration, rebate distribution tiers, and risk models.": "ការរៀបចំការតភ្ជាប់ White-Label Brokerage, កម្រិតបែងចែក Rebate និងគំរូគ្រប់គ្រងហានិភ័យ។",
  "Pipeline Deployment": "ការដាក់ពង្រាយប្រព័ន្ធ",
  "Rapid deployment of verified brokerage infrastructure, automated tracking scripts, and regulated liquidity bridges.": "ការដាក់ពង្រាយហេដ្ឋារចនាសម្ព័ន្ធឈ្មួញជើងសាដែលបានផ្ទៀងផ្ទាត់ ស្គ្រីបតាមដានស្វ័យប្រវត្តិ និងស្ពានសាច់ប្រាក់ងាយស្រួលដែលមានបទប្បញ្ញត្តិត្រឹមត្រូវយ៉ាងឆាប់រហ័ស។",
  "Rapid deployment of verified payment APIs, automated tracking scripts, and regulated broker bridges.": "ការដាក់ពង្រាយហេដ្ឋារចនាសម្ព័ន្ធឈ្មួញជើងសាដែលបានផ្ទៀងផ្ទាត់ ស្គ្រីបតាមដានស្វ័យប្រវត្តិ និងស្ពានសាច់ប្រាក់ងាយស្រួលដែលមានបទប្បញ្ញត្តិត្រឹមត្រូវយ៉ាងឆាប់រហ័ស។",
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
  "Institutional Brokerage & Liquidity Architecture": "ស្ថាបត្យកម្មឈ្មួញជើងសាស្ថាប័ន & សាច់ប្រាក់",
  "Institutional Brokerage BDM & Tier-1 Liquidity": "ឈ្មួញជើងសាស្ថាប័ន & សាច់ប្រាក់ Tier-1",
  "Lead Brokerage & Strategic Architecture": "ស្ថាបត្យកម្មឈ្មួញជើងសាជាយុទ្ធសាស្ត្រ",
  "Lead Broker BDM Strategy & Architecture": "យុទ្ធសាស្ត្រ & ស្ថាបត្យកម្មឈ្មួញជើងសាឈានមុខ",
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
  "Brokerage Expansion & Scale": "ការពង្រីកឈ្មួញជើងសា & ការពង្រីក",
  "Regional Brokerage Expansion & Scale": "ការពង្រីកឈ្មួញជើងសាក្នុងតំបន់ & ការពង្រីក",
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
  "Brokerage Infrastructure & White-Label Rails": "ហេដ្ឋារចនាសម្ព័ន្ធឈ្មួញជើងសា & ផ្លូវ White-Label",
  "Lead Brokerage & Institutional Liquidity Channel": "ឈ្មួញជើងសាឈានមុខ & បណ្តាញសាច់ប្រាក់ស្ថាប័ន",
  "SAG Payment Merchant Rail Direct Channel": "ការគ្រប់គ្រងប្រទេស & ផ្លូវ White-Label",
  "SAGFX Lead Brokerage & Liquidity Partnership": "ភាពជាដៃគូឈ្មួញជើងសាឈានមុខ & សាច់ប្រាក់ងាយស្រួល SAGFX",
  "SAGFX Broker BDM & Liquidity Partnership": "ភាពជាដៃគូឈ្មួញជើងសាឈានមុខ & សាច់ប្រាក់ងាយស្រួល SAGFX",
  "White-Label Brokerage Launchpad": "ប្រព័ន្ធ White-Label Brokerage",
  "Institutional Brokerage Rails": "ប្រព័ន្ធ White-Label Brokerage",
  "SAG Payment Gateway Merchant Rails": "ប្រព័ន្ធ White-Label Brokerage",
  "SAGFX Institutional Brokerage & Liquidity Setup": "ការរៀបចំឈ្មួញជើងសាស្ថាប័ន & សាច់ប្រាក់ងាយស្រួល SAGFX",
  "SAGFX Institutional Broker BDM & Liquidity Setup": "ការរៀបចំឈ្មួញជើងសាស្ថាប័ន & សាច់ប្រាក់ងាយស្រួល SAGFX",
  "SAGFX Institutional Rebate Whitelisting": "ការចុះឈ្មោះបញ្ជីស Rebate ស្ថាប័ន SAGFX",
  "Institutional Liquidity Bridge Integration": "ការតភ្ជាប់ស្ពានសាច់ប្រាក់ងាយស្រួលស្ថាប័ន",
  "SAG Payment Gateway High-Volume Integration": "ការតភ្ជាប់ស្ពានសាច់ប្រាក់ងាយស្រួលស្ថាប័ន",
  "SAGFX.ORG Advisory": "ការប្រឹក្សា SAGFX.ORG",
  "SAGFX.ORG Brokerage": "ឈ្មួញជើងសា SAGFX.ORG",
  "Financial Markets Advisors | Institutional Rebate Network": "ទីប្រឹក្សាទីផ្សារហិរញ្ញវត្ថុ | បណ្តាញ Rebate ស្ថាប័ន",
  "Lead Brokerage & Scale": "ប្រធានដឹកនាំឈ្មួញជើងសាស្ថាប័ន",
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

  // Additional Institutional & System Phrases
  "Tier-1 Liquidity Bridges:": "ស្ពានសាច់ប្រាក់ងាយស្រួល Tier-1:",
  "Master IB Commission Engines:": "ប្រព័ន្ធកម្រៃជើងសារ Master IB:",
  "Rapid Turnkey Deployment:": "ការដាក់ពង្រាយ Turnkey រហ័ស:",
  "Estimated Monthly Volume": "ទំហំជួញដូរប្រចាំខែប៉ាន់ស្មាន",
  "Partner Broker": "ឈ្មួញជើងសាដៃគូ",
  "Projected Monthly Cashback": "ប្រាក់ត្រឡប់មកវិញប្រចាំខែប៉ាន់ស្មាន",
  "Annual Compound Savings": "ការសន្សំរួមប្រចាំឆ្នាំ",
  "Pips Recovered / Month": "Pips ទទួលបានមកវិញ / ខែ",
  "Spread Cost Reduction": "ការកាត់បន្ថយថ្លៃដើម Spread",
  "Rebate Settlement": "ការទូទាត់ប្រាក់ Rebate",
  "Automated / Weekly": "ស្វ័យប្រវត្តិ / ប្រចាំសប្តាហ៍",
  "Fractional Risk Engine": "ម៉ាស៊ីនគ្រប់គ្រងហានិភ័យប្រភាគ",
  "Standard Pip Scaling Matrix": "ម៉ាទ្រីសកម្រិត Pip ស្តង់ដារ",
  "Contract Type": "ប្រភេទកិច្ចសន្យា",
  "1 Pip Movement": "ចលនា 1 Pip",
  "SAGFX Rebate Yield": "ទិន្នផល Rebate SAGFX",
  "Institutional Friction": "ការកកិតថ្លៃដើមស្ថាប័ន",
  "Standard Lot (1.00)": "ឡូតស្តង់ដារ (1.00)",
  "Mini Lot (0.10)": "ឡូតមីនី (0.10)",
  "Micro Lot (0.01)": "ឡូតមីក្រូ (0.01)",
  "Standard Lot": "ឡូតស្តង់ដារ",
  "Mini Lot": "ឡូតមីនី",
  "Micro Lot": "ឡូតមីក្រូ",
  "Troy Ounces": "អោន Troy",
  "Troy Ounce": "អោន Troy",
  "Raw ECN Interbank (0.0 - 0.2 pips)": "ECN ធនាគារដើម (0.0 - 0.2 pips)",
  "Direct Bridge Route": "ផ្លូវតភ្ជាប់ស្ពានផ្ទាល់",
  "Fractional Liquidity Feed": "ទិន្នន័យសាច់ប្រាក់ងាយស្រួលប្រភាគ",
  "Account Capital (USD)": "ដើមទុនគណនី (USD)",
  "Risk Percentage per Trade": "ភាគរយហានិភ័យក្នុងមួយជួញដូរ",
  "Stop Loss Distance (Pips)": "ចម្ងាយ Stop Loss (Pips)",
  "Recommended Lot Size": "ទំហំ Lot ដែលបានណែនាំ",
  "Monetary Risk Amount": "ទំហំទឹកប្រាក់ប្រឈមហានិភ័យ",
  "Pip Value at Lot Size": "តម្លៃ Pip តាមទំហំ Lot",
  "Institutional Tier-1 Standard": "ស្តង់ដារ Tier-1 ស្ថាប័ន",
  "Market Liquidity": "សាច់ប្រាក់ងាយស្រួលទីផ្សារ",
  "Brokerage Leadership": "ភាពជាអ្នកដឹកនាំឈ្មួញជើងសា",
  "Institutional Network": "បណ្តាញស្ថាប័ន",
  "Promotions & High-Value Offers": "ប្រូម៉ូសិន & ការផ្តល់ជូនពិសេស",
  "Institutional Rails": "ផ្លូវតភ្ជាប់ស្ថាប័ន",
  "White-Label Infrastructure": "ហេដ្ឋារចនាសម្ព័ន្ធ White-Label",
  "Institutional Liquidity": "សាច់ប្រាក់ងាយស្រួលស្ថាប័ន",
  "Brokerage Expansion & Scale": "ការពង្រីកឈ្មួញជើងសា & ការពង្រីក",
  "Cashback & Rebate Networks": "បណ្តាញ Cashback & Rebate",
  "Strictly Institutional & Confidential. Zero Retail Clutter.": "កម្រិតស្ថាប័ន & ការសម្ងាត់ខ្ពស់បំផុត។ គ្មានភាពរញ៉េរញ៉ៃកម្រិតរាយ។",
  "Pioneering institutional brokerage infrastructure, regional liquidity bridges, and mechanical market execution.": "ត្រួសត្រាយផ្លូវលើហេដ្ឋារចនាសម្ព័ន្ធឈ្មួញជើងសាស្ថាប័ន ស្ពានសាច់ប្រាក់ងាយស្រួលក្នុងតំបន់ និងការប្រតិបត្តិទីផ្សារតាមប្រព័ន្ធមេកានិក។",
  "Initiate Executive Partnership": "ចាប់ផ្តើមភាពជាដៃគូកម្រិតប្រតិបត្តិ",
  "Direct channel to the Office of Mong Say for institutional inquiries, SAGFX brokerage consulting, lead brokerage partnerships, and keynote strategic engagements.": "បណ្តាញផ្ទាល់ទៅកាន់ការិយាល័យលោក ម៉ុង សាយ សម្រាប់ការសាកសួរកម្រិតស្ថាប័ន ការប្រឹក្សាឈ្មួញជើងសា SAGFX ភាពជាដៃគូដឹកនាំឈ្មួញជើងសាស្ថាប័ន និងកិច្ចសហការយុទ្ធសាស្ត្រ។",
  "Direct private access to Mong Say for institutional traders, brokerage partnerships, and regional scaling (SAGFX.ORG). Connect directly on Telegram to enroll in private mentorship and VIP institutional channels.": "ការតភ្ជាប់ផ្ទាល់ជាមួយលោក ម៉ុង សាយ សម្រាប់ពាណិជ្ជករស្ថាប័ន ភាពជាដៃគូឈ្មួញជើងសា និងការពង្រីកក្នុងតំបន់ (SAGFX.ORG)។ ភ្ជាប់ទំនាក់ទំនងតាម Telegram ដើម្បីចូលរួមការបណ្តុះបណ្តាលឯកជន និងបណ្តាញ VIP ស្ថាប័ន។",
  "Book a direct strategy consultation with Mong Say regarding SAGFX institutional broker partnerships, liquidity infrastructure, or trading mentorship.": "កក់ការពិគ្រោះយោបល់យុទ្ធសាស្ត្រផ្ទាល់ជាមួយលោក ម៉ុង សាយ អំពីភាពជាដៃគូឈ្មួញជើងសាស្ថាប័ន SAGFX ហេដ្ឋារចនាសម្ព័ន្ធសាច់ប្រាក់ ឬការបណ្តុះបណ្តាលការជួញដូរ។",
  "SAGFX Institutional White-Label Brokerage": "ប្រព័ន្ធ White-Label ឈ្មួញជើងសាស្ថាប័ន SAGFX",
  "SAGFX Regional Liquidity & Rebate Partnership": "ភាពជាដៃគូសាច់ប្រាក់ងាយស្រួល & Rebate តំបន់ SAGFX",
  "SAGFX Regional Brokerage Expansion & White-Label": "ការពង្រីកឈ្មួញជើងសាក្នុងតំបន់ & White-Label SAGFX",
  "SAGFX Institutional Liquidity & Rebate Setup": "ការរៀបចំសាច់ប្រាក់ងាយស្រួលស្ថាប័ន & Rebate SAGFX",
  "Strategic Venture Investment & Partnership": "ការវិនិយោគលើអាជីវកម្មយុទ្ធសាស្ត្រ & ភាពជាដៃគូ",
  "Executive Name": "ឈ្មោះថ្នាក់ដឹកនាំ",
  "Corporate Email": "អ៊ីមែលសាជីវកម្ម",
  "Consultation Scope": "វិសាលភាពនៃការពិគ្រោះយោបល់",
  "Confirm Session Request": "បញ្ជាក់ការស្នើសុំកាលវិភាគ",
  "Preferred Date & Timeframe": "កាលបរិច្ឆេទ & ពេលវេលាដែលចង់បាន",
  "Schedule Executive Session": "កាលវិភាគកិច្ចប្រជុំប្រតិបត្តិ",
  "EXECUTIVE PROTOCOL": "ពិធីការប្រតិបត្តិ",
  "Sydney": "ស៊ីដនី",
  "Tokyo": "តូក្យូ",
  "London Open": "បើកទីផ្សារឡុងដ៍",
  "New York": "ញូវយ៉ក",
  "NY/London Killzone (XAU/USD)": "តំបន់ Killzone ញូវយ៉ក/ឡុងដ៍ (XAU/USD)",
  "NY/London Killzone": "តំបន់ Killzone ញូវយ៉ក/ឡុងដ៍",
  "Killzone": "តំបន់ Killzone",
  "Subscribe →": "ជាវ →",
  "Follow Feed →": "តាមដាន →",
  "Connect →": "ភ្ជាប់ទំនាក់ទំនង →",
  "Watch Masterclass →": "ទស្សនា Masterclass →",
  "Watch Analysis →": "ទស្សនាការវិភាគ →",
  "Watch Breakdown →": "ទស្សនាការពន្យល់ →",
  "Watch Session →": "ទស្សនាមេរៀន →",
  "Channel:": "ប៉ុស្តិ៍:",
  "Live Schedule": "កាលវិភាគបន្តផ្ទាល់",
  "Lots": "ឡូត",
  "Lot": "ឡូត",
  "Pips": "Pips",
  "Pip": "Pip",
  "Spread": "Spread",

  // Footer & Disclaimers
  "Ecosystem": "ប្រព័ន្ធអេកូឡូស៊ី",
  "Institutional Advisory": "ការប្រឹក្សាស្ថាប័ន",
  "Direct Desk": "ការិយាល័យផ្ទាល់",
  "Compliance & Transparency": "ការអនុលោមតាមច្បាប់ & តម្លាភាព",
  "All Rights Reserved.": "រក្សាសិទ្ធិគ្រប់យ៉ាង។",
  "Risk Warning: Financial markets and currency trading involve substantial risk of loss. Historical yields do not guarantee future returns.": "ការព្រមានអំពីហានិភ័យ៖ ការជួញដូរលើទីផ្សារហិរញ្ញវត្ថុ និងរូបិយប័ណ្ណមានហានិភ័យខ្ពស់នៃការខាតបង់។ ទិន្នផលកន្លងមកមិនធានាដល់ប្រាក់ចំណេញនាពេលអនាគតឡើយ។"
});

// Pre-computed sorted phrases list by length descending for greedy substring matching
const SORTED_PHRASE_LIST = Object.entries(PHRASE_DICTIONARY_KH).sort((a, b) => b[0].length - a[0].length);

// English DOM Cache: captured once from initial clean HTML
let IS_DOM_CACHED = false;
const CACHED_TEXT_NODES = [];

function ensureEnglishDOMCached() {
  if (IS_DOM_CACHED) return;

  // 1. Cache all data-i18n elements original HTML
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (!el.dataset.enHtml) {
      el.dataset.enHtml = el.innerHTML;
    }
  });

  // 2. Cache placeholders
  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
    if (!el.dataset.enPh) {
      el.dataset.enPh = el.getAttribute('placeholder') || '';
    }
  });

  // 3. Cache select options
  document.querySelectorAll('option').forEach(opt => {
    if (opt._enText === undefined) {
      opt._enText = opt.textContent;
    }
  });

  // 4. Cache all DOM text nodes across body (excluding scripts/styles)
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: function(node) {
      const p = node.parentElement;
      if (!p) return NodeFilter.FILTER_REJECT;
      const tag = p.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT' || tag === 'CODE') {
        return NodeFilter.FILTER_REJECT;
      }
      const val = node.nodeValue;
      if (!val || !val.trim()) return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node._enText === undefined) {
      node._enText = node.nodeValue;
    }
    CACHED_TEXT_NODES.push(node);
  }

  IS_DOM_CACHED = true;
}

function initLanguageToggle() {
  ensureEnglishDOMCached();

  const savedLang = localStorage.getItem('mongsay_lang') || 'en';
  applyLanguage(savedLang);

  // Global event delegation catching all language clicks (desktop pill, mobile menu)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-toggle');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();

    const codeEl = e.target.closest('.lang-code');
    const current = document.documentElement.getAttribute('lang') || 'en';
    let nextLang;

    if (codeEl && codeEl.getAttribute('data-lang')) {
      nextLang = codeEl.getAttribute('data-lang');
    } else {
      nextLang = current === 'kh' ? 'en' : 'kh';
    }

    localStorage.setItem('mongsay_lang', nextLang);
    applyLanguage(nextLang);
    showToast(nextLang === 'kh' ? 'បានប្តូរទៅជាភាសាខ្មែរ (Khmer Language Active)' : 'Switched to English Language');
  });
}

function applyLanguage(lang) {
  ensureEnglishDOMCached();

  document.documentElement.setAttribute('lang', lang);
  if (lang === 'kh') {
    document.body.classList.add('lang-kh');
  } else {
    document.body.classList.remove('lang-kh');
  }

  // Synchronize language buttons
  document.querySelectorAll('.lang-code').forEach(el => {
    if (el.getAttribute('data-lang') === lang) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });

  if (lang === 'en') {
    // ---------------------------------------------
    // RESTORE 100% ORIGINAL PRISTINE ENGLISH
    // ---------------------------------------------
    // 1. Restore data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (el.dataset.enHtml) {
        el.innerHTML = el.dataset.enHtml;
      } else if (I18N_DICTIONARY.en && I18N_DICTIONARY.en[key]) {
        el.innerHTML = I18N_DICTIONARY.en[key];
      }
    });

    // 2. Restore cached text nodes
    CACHED_TEXT_NODES.forEach(node => {
      if (node && node.parentNode && node._enText !== undefined) {
        node.nodeValue = node._enText;
      }
    });

    // 3. Restore select options
    document.querySelectorAll('option').forEach(opt => {
      if (opt._enText !== undefined) {
        opt.textContent = opt._enText;
      }
    });

    // 4. Restore form placeholders
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
      if (el.dataset.enPh !== undefined) {
        el.setAttribute('placeholder', el.dataset.enPh);
      }
    });

  } else {
    // ---------------------------------------------
    // TRANSLATE 100% TO AUTHENTIC KHMER
    // ---------------------------------------------
    // 1. Explicit data-i18n elements
    const khDict = I18N_DICTIONARY.kh || {};
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (khDict[key]) {
        el.innerHTML = khDict[key];
      }
    });

    // 2. Comprehensive text node translation (Exact + Greedy Substring matching)
    CACHED_TEXT_NODES.forEach(node => {
      if (!node || !node.parentNode) return;
      if (node.parentElement && node.parentElement.closest('[data-i18n]')) {
        return; // Handled by data-i18n
      }

      const orig = node._enText || node.nodeValue;
      if (!orig || !orig.trim()) return;

      const clean = orig.replace(/\s+/g, ' ').trim();
      if (PHRASE_DICTIONARY_KH[clean]) {
        const leadingMatch = orig.match(/^\s*/);
        const trailingMatch = orig.match(/\s*$/);
        const leading = leadingMatch ? leadingMatch[0] : '';
        const trailing = trailingMatch ? trailingMatch[0] : '';
        node.nodeValue = leading + PHRASE_DICTIONARY_KH[clean] + trailing;
      } else {
        let translated = orig;
        let modified = false;
        for (let i = 0; i < SORTED_PHRASE_LIST.length; i++) {
          const enPhrase = SORTED_PHRASE_LIST[i][0];
          const khPhrase = SORTED_PHRASE_LIST[i][1];
          if (translated.includes(enPhrase)) {
            translated = translated.split(enPhrase).join(khPhrase);
            modified = true;
          }
        }
        if (modified) {
          node.nodeValue = translated;
        }
      }
    });

    // 3. Translate select options
    document.querySelectorAll('option').forEach(opt => {
      const clean = (opt._enText || opt.textContent).replace(/\s+/g, ' ').trim();
      if (PHRASE_DICTIONARY_KH[clean]) {
        opt.textContent = PHRASE_DICTIONARY_KH[clean];
      }
    });

    // 4. Translate form placeholders
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
      const orig = el.dataset.enPh || el.getAttribute('placeholder') || '';
      for (let i = 0; i < SORTED_PHRASE_LIST.length; i++) {
        const enPhrase = SORTED_PHRASE_LIST[i][0];
        const khPhrase = SORTED_PHRASE_LIST[i][1];
        if (orig.includes(enPhrase)) {
          el.setAttribute('placeholder', orig.split(enPhrase).join(khPhrase));
          break;
        }
      }
    });
  }

  // Update active FAQ accordion body height after translation text size change
  const activeFaqBody = document.querySelector('.faq-item.active .faq-body');
  if (activeFaqBody) {
    activeFaqBody.style.maxHeight = activeFaqBody.scrollHeight + 'px';
  }

  // Update real-time clearing loop telemetry card language
  if (typeof window.updateSagfxLoopLanguage === 'function') {
    window.updateSagfxLoopLanguage(lang);
  }

  // Update 3D Brokerage Terminal gateway card language
  if (typeof window.updateBrokerTerminalLanguage === 'function') {
    window.updateBrokerTerminalLanguage(lang);
  }

  // Update 3D Bullion Ledger Cascading Stack typewriter queries language
  if (typeof window.updateHedgingStackLanguage === 'function') {
    window.updateHedgingStackLanguage(lang);
  }

  // Update 3D Library Reading Console typewriter queries language
  if (typeof window.updateLibraryStackLanguage === 'function') {
    window.updateLibraryStackLanguage(lang);
  }
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
    if (document.documentElement.classList.contains('fx-frozen')) {
      requestAnimationFrame(updateLighting);
      return;
    }
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
  let animId = null;
  let isRunning = false;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    if (!isRunning && document.documentElement.classList.contains('fx-frozen')) {
      drawStaticStarfield();
    }
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
    if (!isRunning || shootingStar) return;
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

  function drawStaticStarfield() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.draw();
    });
  }

  function render() {
    if (!isRunning) return;

    ctx.clearRect(0, 0, width, height);

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

    animId = requestAnimationFrame(render);
  }

  window.mongsayCanvas = {
    pause: () => {
      isRunning = false;
      if (animId) {
        cancelAnimationFrame(animId);
        animId = null;
      }
      drawStaticStarfield();
    },
    resume: () => {
      if (!isRunning) {
        isRunning = true;
        render();
      }
    }
  };

  if (document.documentElement.classList.contains('fx-frozen')) {
    isRunning = false;
    drawStaticStarfield();
  } else {
    isRunning = true;
    render();
  }
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
      if (document.documentElement.classList.contains('fx-frozen')) return;
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
   9B. Institutional Delta-Neutral Physical Gold Hedging Engine
   --------------------------------------------------------- */
function initHedgingCalculator() {
  const metalButtons = document.querySelectorAll('#hedgeMetalAssetToggle .metal-asset-btn');
  const flowButtons = document.querySelectorAll('#hedgeFlowToggle .hedge-flow-btn');
  const unitButtons = document.querySelectorAll('#hedgeUnitToggle .hedge-unit-btn');
  const quantityInput = document.getElementById('hedgeQuantityInput');
  const quantitySlider = document.getElementById('hedgeQuantitySlider');
  const quantityLabel = document.getElementById('hedgeQuantityLabel');
  const quantityValDisplay = document.getElementById('hedgeQuantityVal');
  const presetButtons = document.querySelectorAll('#presetPillsContainer .preset-pill-btn');

  const spotPriceInput = document.getElementById('hedgeSpotPriceInput');
  const spotPriceLabel = document.getElementById('hedgeSpotPriceLabel');
  const leverageSelect = document.getElementById('hedgeLeverageSelect');
  const bufferSelect = document.getElementById('hedgeBufferSelect');
  const bufferLabel = document.getElementById('hedgeBufferLabel');

  // Live Ticker Elements
  const livePriceAssetLabel = document.getElementById('livePriceAssetLabel');
  const livePriceDisplayVal = document.getElementById('livePriceDisplayVal');
  const livePriceSourceTag = document.getElementById('livePriceSourceTag');
  const btnRefreshLivePrice = document.getElementById('btnRefreshLivePrice');

  // Local Cambodian Counter Pricing Elements
  const localPremiumInput = document.getElementById('hedgeLocalPremiumInput');
  const localPricePerDamlung = document.getElementById('localPricePerDamlung');
  const localPricePerChi = document.getElementById('localPricePerChi');
  const localWeightTroyOz = document.getElementById('localWeightTroyOz');
  const localTotalInventoryValue = document.getElementById('localTotalInventoryValue');

  // Capital Guidance Elements
  const userBalanceInput = document.getElementById('hedgeUserBalanceInput');
  const recommendedDepositOut = document.getElementById('hedgeRecommendedDepositOut');
  const depositPercentComparison = document.getElementById('hedgeDepositPercentComparison');
  const capitalHealthMeter = document.getElementById('hedgeCapitalHealthMeter');
  const meterIcon = document.getElementById('hedgeMeterIcon');
  const meterText = document.getElementById('hedgeMeterText');

  // Stress-Test Simulation Elements
  const simMoveSlider = document.getElementById('simMoveSlider');
  const simMoveDisplayVal = document.getElementById('simMoveDisplayVal');
  const simPhysicalPnlVal = document.getElementById('simPhysicalPnlVal');
  const simDigitalPnlVal = document.getElementById('simDigitalPnlVal');
  const simNetPnlVal = document.getElementById('simNetPnlVal');

  // Primary Directive & Metrics Outputs
  const actionCard = document.getElementById('hedgeActionCard');
  const directionBadge = document.getElementById('hedgeDirectionBadge');
  const commandOut = document.getElementById('hedgeCommandOut');
  const explanationOut = document.getElementById('hedgeActionExplanation');
  const lotsOut = document.getElementById('hedgeLotsOut');
  const marginOut = document.getElementById('hedgeMarginOut');
  const safeDepositOut = document.getElementById('hedgeSafeDepositOut');
  const weightOut = document.getElementById('hedgeWeightOut');
  const formulaCode = document.getElementById('hedgeFormulaCode');
  const telegramLink = document.getElementById('hedgeTelegramLink');

  if (!quantityInput || !commandOut) return;

  let currentMetal = 'gold'; // 'gold' | 'silver'
  let currentFlow = 'buy';    // 'buy' | 'sell'
  let currentUnit = 'damlung'; // 'damlung' | 'chi' | 'grams' | 'ounces'
  let liveGoldSpot = 3952.13;
  let liveSilverSpot = 32.50;

  // Commodity Configuration Matrix
  const COMMODITY_CONFIG = {
    gold: {
      symbol: 'XAU/USD',
      lotSizeOz: 100, // 1 Standard Lot = 100 Troy Ounces
      gramsPerLot: 3110.34768,
      damlungPerLot: 82.9426, // 3110.34768 / 37.5
      chiPerLot: 829.426,
      defaultSpot: 3952.00,
      defaultBuffer: 100,
      bufferOptions: [
        { val: 50, text: '±$50/oz Adverse Move (Low Buffer)' },
        { val: 100, text: '±$100/oz Adverse Move (Recommended Safe Buffer)' },
        { val: 150, text: '±$150/oz Adverse Move (Maximum Macro Defense)' },
        { val: 200, text: '±$200/oz Adverse Move (Extreme Volatility Buffer)' }
      ],
      presets: [1, 5, 10, 50, 100, 500],
      simRange: { min: -300, max: 300, step: 10, def: -100 },
      defaultPremium: 30, // $30/damlung counter spread in Cambodia
      unitLabel: 'Damlung (តម្លឹង)'
    },
    silver: {
      symbol: 'XAG/USD',
      lotSizeOz: 5000, // 1 Standard Lot = 5000 Troy Ounces
      gramsPerLot: 155517.384,
      damlungPerLot: 4147.1302, // 155517.384 / 37.5
      chiPerLot: 41471.302,
      defaultSpot: 32.50,
      defaultBuffer: 3.0,
      bufferOptions: [
        { val: 1.5, text: '±$1.50/oz Adverse Move (Low Buffer)' },
        { val: 3.0, text: '±$3.00/oz Adverse Move (Recommended Safe Buffer)' },
        { val: 5.0, text: '±$5.00/oz Adverse Move (Maximum Macro Defense)' },
        { val: 8.0, text: '±$8.00/oz Adverse Move (Extreme Volatility Buffer)' }
      ],
      presets: [10, 50, 100, 500, 1000, 5000],
      simRange: { min: -10, max: 10, step: 0.5, def: -3 },
      defaultPremium: 1.5, // $1.5/damlung counter spread in Cambodia
      unitLabel: 'Damlung (តម្លឹង)'
    }
  };

  async function fetchLivePrice(isManual = false) {
    if (btnRefreshLivePrice) btnRefreshLivePrice.classList.add('rotating');
    try {
      if (currentMetal === 'gold') {
        const res = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=PAXGUSDT');
        if (res.ok) {
          const data = await res.json();
          const parsed = parseFloat(data.price);
          if (!isNaN(parsed) && parsed > 1000) {
            liveGoldSpot = parsed;
            if (spotPriceInput) spotPriceInput.value = Math.round(parsed);
            if (livePriceDisplayVal) livePriceDisplayVal.textContent = `$${parsed.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            if (livePriceSourceTag) livePriceSourceTag.textContent = '(Live Binance PAXG Feed)';
            if (isManual) showToast(`Live Gold Spot Synced: $${parsed.toFixed(2)}/oz`);
          }
        }
      } else {
        const res = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=PAXGUSDT');
        if (res.ok) {
          const data = await res.json();
          const goldP = parseFloat(data.price) || 3950;
          const silverDerived = parseFloat((goldP / 88.5).toFixed(2));
          liveSilverSpot = silverDerived;
          if (spotPriceInput) spotPriceInput.value = silverDerived.toFixed(2);
          if (livePriceDisplayVal) livePriceDisplayVal.textContent = `$${silverDerived.toFixed(2)}`;
          if (livePriceSourceTag) livePriceSourceTag.textContent = '(Live Ratio Benchmark)';
          if (isManual) showToast(`Live Silver Spot Synced: $${silverDerived.toFixed(2)}/oz`);
        }
      }
    } catch (e) {
      console.warn('Live ticker sync fallback:', e);
      if (isManual) showToast('Benchmark spot active (offline fallback)');
    } finally {
      if (btnRefreshLivePrice) {
        setTimeout(() => btnRefreshLivePrice.classList.remove('rotating'), 600);
      }
      recalculateHedge();
    }
  }

  function updateBufferOptions() {
    if (!bufferSelect) return;
    const cfg = COMMODITY_CONFIG[currentMetal];
    bufferSelect.innerHTML = '';
    cfg.bufferOptions.forEach((opt, idx) => {
      const el = document.createElement('option');
      el.value = opt.val;
      el.textContent = opt.text;
      if (idx === 1) el.selected = true;
      bufferSelect.appendChild(el);
    });
  }

  function updatePresets() {
    const cfg = COMMODITY_CONFIG[currentMetal];
    const pillsWrap = document.getElementById('presetPillsContainer');
    if (!pillsWrap) return;
    pillsWrap.innerHTML = '';

    let presets = cfg.presets;
    let unitText = currentUnit === 'chi' ? 'ជី' : 'តម្លឹង';

    if (currentUnit === 'kilograms') {
      presets = currentMetal === 'gold' ? [0.5, 1, 2, 5, 10, 25] : [1, 5, 10, 25, 50, 100];
      unitText = 'Kg';
    } else if (currentUnit === 'grams') {
      presets = currentMetal === 'gold' ? [100, 250, 500, 1000, 2500, 5000] : [500, 1000, 2500, 5000, 10000, 25000];
      unitText = 'g';
    } else if (currentUnit === 'ounces') {
      presets = currentMetal === 'gold' ? [1, 5, 10, 50, 100, 300] : [10, 50, 100, 500, 1000, 5000];
      unitText = 'oz';
    } else if (currentUnit === 'chi') {
      presets = currentMetal === 'gold' ? [10, 50, 100, 500, 1000, 5000] : [100, 500, 1000, 5000, 10000, 50000];
      unitText = 'ជី';
    } else {
      presets = cfg.presets;
      unitText = 'តម្លឹង';
    }

    presets.forEach(p => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'preset-pill-btn';
      if (parseFloat(quantityInput.value) === p) btn.classList.add('active');
      btn.setAttribute('data-preset', p);
      btn.textContent = `${p.toLocaleString('en-US')} ${unitText}`;
      btn.addEventListener('click', () => {
        quantityInput.value = p;
        quantitySlider.value = p;
        pillsWrap.querySelectorAll('.preset-pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        recalculateHedge();
      });
      pillsWrap.appendChild(btn);
    });
  }

  function updateUnitSliderLimits() {
    const cfg = COMMODITY_CONFIG[currentMetal];
    if (currentUnit === 'damlung') {
      quantitySlider.min = currentMetal === 'gold' ? 1 : 10;
      quantitySlider.max = currentMetal === 'gold' ? 500 : 5000;
      quantitySlider.step = currentMetal === 'gold' ? 1 : 10;
      quantityInput.min = 0.1;
      quantityInput.step = currentMetal === 'gold' ? 0.5 : 1;
      if (quantityLabel) quantityLabel.textContent = `Physical Quantity to Hedge (${cfg.symbol} Damlung / តម្លឹង)`;
    } else if (currentUnit === 'chi') {
      quantitySlider.min = currentMetal === 'gold' ? 5 : 50;
      quantitySlider.max = currentMetal === 'gold' ? 5000 : 50000;
      quantitySlider.step = currentMetal === 'gold' ? 5 : 50;
      quantityInput.min = 1;
      quantityInput.step = 1;
      if (quantityLabel) quantityLabel.textContent = `Physical Quantity to Hedge (${cfg.symbol} Chi / ជី)`;
    } else if (currentUnit === 'kilograms') {
      quantitySlider.min = currentMetal === 'gold' ? 0.1 : 1;
      quantitySlider.max = currentMetal === 'gold' ? 50 : 500;
      quantitySlider.step = currentMetal === 'gold' ? 0.1 : 1;
      quantityInput.min = 0.01;
      quantityInput.step = currentMetal === 'gold' ? 0.1 : 1;
      if (quantityLabel) quantityLabel.textContent = `Physical Quantity to Hedge (${cfg.symbol} Kilograms / គីឡូក្រាម)`;
    } else if (currentUnit === 'grams') {
      quantitySlider.min = currentMetal === 'gold' ? 10 : 100;
      quantitySlider.max = currentMetal === 'gold' ? 10000 : 100000;
      quantitySlider.step = 10;
      quantityInput.min = 1;
      quantityInput.step = 1;
      if (quantityLabel) quantityLabel.textContent = `Physical Quantity to Hedge (Grams / ក្រាម)`;
    } else if (currentUnit === 'ounces') {
      quantitySlider.min = 1;
      quantitySlider.max = currentMetal === 'gold' ? 300 : 5000;
      quantitySlider.step = 1;
      quantityInput.min = 0.1;
      quantityInput.step = 0.5;
      if (quantityLabel) quantityLabel.textContent = `Physical Quantity to Hedge (Troy Ounces / អោន)`;
    }
  }

  function recalculateHedge() {
    const cfg = COMMODITY_CONFIG[currentMetal];
    const qty = parseFloat(quantityInput.value) || 0;
    const spot = parseFloat(spotPriceInput ? spotPriceInput.value : cfg.defaultSpot) || cfg.defaultSpot;
    const leverage = parseFloat(leverageSelect ? leverageSelect.value : 100) || 100;
    const buffer = parseFloat(bufferSelect ? bufferSelect.value : cfg.defaultBuffer) || cfg.defaultBuffer;
    const localPremium = parseFloat(localPremiumInput ? localPremiumInput.value : cfg.defaultPremium) || cfg.defaultPremium;
    const userBalance = parseFloat(userBalanceInput ? userBalanceInput.value : 10000) || 10000;

    let grams = 0;
    let troyOz = 0;
    let exactLots = 0;
    let totalDamlung = 0;

    if (currentUnit === 'damlung') {
      totalDamlung = qty;
      grams = qty * 37.5;
      troyOz = grams / 31.1034768;
      exactLots = qty / cfg.damlungPerLot;
      if (quantityValDisplay) quantityValDisplay.textContent = `${qty.toLocaleString('en-US', { maximumFractionDigits: 1 })} Damlung`;
    } else if (currentUnit === 'chi') {
      totalDamlung = qty / 10;
      grams = qty * 3.75;
      troyOz = grams / 31.1034768;
      exactLots = qty / cfg.chiPerLot;
      if (quantityValDisplay) quantityValDisplay.textContent = `${qty.toLocaleString('en-US', { maximumFractionDigits: 1 })} Chi`;
    } else if (currentUnit === 'kilograms') {
      grams = qty * 1000;
      totalDamlung = grams / 37.5;
      troyOz = grams / 31.1034768;
      exactLots = grams / cfg.gramsPerLot;
      if (quantityValDisplay) quantityValDisplay.textContent = `${qty.toLocaleString('en-US', { minimumFractionDigits: (qty % 1 !== 0 ? 2 : 0), maximumFractionDigits: 2 })} Kg`;
    } else if (currentUnit === 'grams') {
      grams = qty;
      totalDamlung = grams / 37.5;
      troyOz = grams / 31.1034768;
      exactLots = grams / cfg.gramsPerLot;
      if (quantityValDisplay) quantityValDisplay.textContent = `${qty.toLocaleString('en-US', { maximumFractionDigits: 0 })} g`;
    } else if (currentUnit === 'ounces') {
      troyOz = qty;
      grams = troyOz * 31.1034768;
      totalDamlung = grams / 37.5;
      exactLots = troyOz / cfg.lotSizeOz;
      if (quantityValDisplay) quantityValDisplay.textContent = `${qty.toLocaleString('en-US', { maximumFractionDigits: 1 })} oz`;
    }

    const roundedLots = Math.max(0.01, Math.round(exactLots * 100) / 100);
    const contractUnits = roundedLots * cfg.lotSizeOz;
    const initialMargin = (contractUnits * spot) / leverage;
    const bufferReserve = contractUnits * buffer;
    const safeBufferBalance = initialMargin + bufferReserve;

    if (weightOut) {
      weightOut.textContent = `${grams.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} g / ${troyOz.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} oz`;
    }

    if (lotsOut) lotsOut.textContent = `${roundedLots.toFixed(2)} Lots`;
    if (marginOut) marginOut.textContent = `$${initialMargin.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (safeDepositOut) safeDepositOut.textContent = `$${safeBufferBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    // Local Cambodian Counter Pricing Calculations
    const cambodiaPricePerDamlung = (spot * 1.205653) + localPremium;
    const cambodiaPricePerChi = cambodiaPricePerDamlung / 10;
    const totalPhysicalCashVal = totalDamlung * cambodiaPricePerDamlung;

    if (localPricePerDamlung) localPricePerDamlung.textContent = `$${cambodiaPricePerDamlung.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (localPricePerChi) localPricePerChi.textContent = `$${cambodiaPricePerChi.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (localWeightTroyOz) localWeightTroyOz.textContent = `${troyOz.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} oz`;
    if (localTotalInventoryValue) localTotalInventoryValue.textContent = `$${totalPhysicalCashVal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    // Capital Advisory Guidance & Health Meter
    if (recommendedDepositOut) recommendedDepositOut.textContent = `$${safeBufferBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (depositPercentComparison && totalPhysicalCashVal > 0) {
      const pctOfInventory = ((safeBufferBalance / totalPhysicalCashVal) * 100).toFixed(1);
      depositPercentComparison.textContent = `~${pctOfInventory}% of your total physical shop inventory ($${Math.round(totalPhysicalCashVal).toLocaleString('en-US')})`;
    }

    if (capitalHealthMeter && meterText && meterIcon) {
      capitalHealthMeter.classList.remove('optimal', 'moderate', 'danger');
      if (userBalance >= safeBufferBalance) {
        capitalHealthMeter.classList.add('optimal');
        meterIcon.textContent = '🟢';
        meterText.textContent = `OPTIMAL CAPITALIZATION: Your deposit ($${userBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}) exceeds the safe requirement ($${safeBufferBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}). 100% immune from margin-call risk.`;
      } else if (userBalance >= initialMargin) {
        capitalHealthMeter.classList.add('moderate');
        meterIcon.textContent = '🟡';
        meterText.textContent = `MODERATE CAUTION: Balance ($${userBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}) covers opening margin ($${initialMargin.toLocaleString('en-US', { minimumFractionDigits: 2 })}), but has limited adverse volatility cushion. Consider depositing $${safeBufferBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })} for safe holding.`;
      } else {
        capitalHealthMeter.classList.add('danger');
        meterIcon.textContent = '🔴';
        meterText.textContent = `UNDER-COLLATERALIZED: Balance ($${userBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}) is below the required minimum margin ($${initialMargin.toLocaleString('en-US', { minimumFractionDigits: 2 })}). Deposit at least $${initialMargin.toLocaleString('en-US', { minimumFractionDigits: 2 })} before opening this hedge.`;
      }
    }

    // Directives
    if (currentFlow === 'buy') {
      if (directionBadge) {
        directionBadge.textContent = `NET ${cfg.symbol} INVENTORY: LONG`;
        directionBadge.style.borderColor = '#f43f5e';
        directionBadge.style.color = '#f43f5e';
        directionBadge.style.background = 'rgba(244, 63, 94, 0.2)';
      }
      if (commandOut) {
        commandOut.textContent = `SELL ${roundedLots.toFixed(2)} LOTS ${cfg.symbol}`;
        commandOut.style.color = '#f43f5e';
        commandOut.style.textShadow = '0 0 16px rgba(244, 63, 94, 0.4)';
      }
      if (actionCard) actionCard.classList.remove('action-buy');
      if (explanationOut) {
        explanationOut.textContent = `Shop holds physical ${currentMetal === 'gold' ? 'gold' : 'silver'} in showcase/safe. Open Digital Short to neutralize spot market price drops.`;
      }
    } else {
      if (directionBadge) {
        directionBadge.textContent = `NET ${cfg.symbol} INVENTORY: SHORT`;
        directionBadge.style.borderColor = '#10b981';
        directionBadge.style.color = '#10b981';
        directionBadge.style.background = 'rgba(16, 185, 129, 0.2)';
      }
      if (commandOut) {
        commandOut.textContent = `BUY ${roundedLots.toFixed(2)} LOTS ${cfg.symbol}`;
        commandOut.style.color = '#10b981';
        commandOut.style.textShadow = '0 0 16px rgba(16, 185, 129, 0.4)';
      }
      if (actionCard) actionCard.classList.add('action-buy');
      if (explanationOut) {
        explanationOut.textContent = `Shop sold physical inventory or pre-booked forward orders. Open Digital Long to eliminate replenishment price surges.`;
      }
    }

    if (formulaCode) {
      if (currentUnit === 'damlung') {
        formulaCode.textContent = `Lots = ${qty} Damlung ÷ ${cfg.damlungPerLot.toFixed(2)} = ${exactLots.toFixed(4)} Lots → ${roundedLots.toFixed(2)} Lots MT4/MT5 (${cfg.symbol})`;
      } else if (currentUnit === 'chi') {
        formulaCode.textContent = `Lots = ${qty} Chi ÷ ${cfg.chiPerLot.toFixed(2)} = ${exactLots.toFixed(4)} Lots → ${roundedLots.toFixed(2)} Lots MT4/MT5 (${cfg.symbol})`;
      } else if (currentUnit === 'kilograms') {
        const kgPerLot = (cfg.gramsPerLot / 1000).toFixed(2);
        formulaCode.textContent = `Lots = ${qty} Kg ÷ ${kgPerLot} Kg = ${exactLots.toFixed(4)} Lots → ${roundedLots.toFixed(2)} Lots MT4/MT5 (${cfg.symbol})`;
      } else if (currentUnit === 'grams') {
        formulaCode.textContent = `Lots = ${qty} g ÷ ${cfg.gramsPerLot.toFixed(2)} g = ${exactLots.toFixed(4)} Lots → ${roundedLots.toFixed(2)} Lots MT4/MT5 (${cfg.symbol})`;
      } else if (currentUnit === 'ounces') {
        formulaCode.textContent = `Lots = ${qty} oz ÷ ${cfg.lotSizeOz} oz = ${exactLots.toFixed(4)} Lots → ${roundedLots.toFixed(2)} Lots MT4/MT5 (${cfg.symbol})`;
      }
    }

    // Stress-Test Simulation Calculation
    const simShift = parseFloat(simMoveSlider ? simMoveSlider.value : (currentMetal === 'gold' ? -100 : -3)) || (currentMetal === 'gold' ? -100 : -3);
    const shiftSign = simShift >= 0 ? '+' : '';
    if (simMoveDisplayVal) {
      simMoveDisplayVal.textContent = `${shiftSign}$${simShift.toFixed(currentMetal === 'gold' ? 0 : 2)} / oz (${simShift < 0 ? 'Spot Market Drop' : 'Spot Market Rally'})`;
      simMoveDisplayVal.style.color = simShift < 0 ? '#f43f5e' : '#10b981';
    }

    const physicalPnl = (currentFlow === 'buy' ? 1 : -1) * (troyOz * simShift);
    const digitalPnl = (currentFlow === 'buy' ? -1 : 1) * (contractUnits * simShift);
    const netCombinedPnl = physicalPnl + digitalPnl;

    if (simPhysicalPnlVal) {
      simPhysicalPnlVal.textContent = `${physicalPnl >= 0 ? '+' : '-'}$${Math.abs(physicalPnl).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      simPhysicalPnlVal.style.color = physicalPnl >= 0 ? '#10b981' : '#f43f5e';
    }

    if (simDigitalPnlVal) {
      simDigitalPnlVal.textContent = `${digitalPnl >= 0 ? '+' : '-'}$${Math.abs(digitalPnl).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      simDigitalPnlVal.style.color = digitalPnl >= 0 ? '#10b981' : '#f43f5e';
    }

    if (simNetPnlVal) {
      const netRounded = Math.abs(netCombinedPnl) < 1 ? 0 : netCombinedPnl;
      simNetPnlVal.textContent = `${netRounded >= 0 ? '+' : '-'}$${Math.abs(netRounded).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (Delta-Neutral)`;
      simNetPnlVal.style.color = 'var(--text-gold)';
    }

    if (telegramLink) {
      const action = currentFlow === 'buy' ? 'SELL' : 'BUY';
      const unitLabel = currentUnit === 'kilograms' ? 'Kg' : currentUnit;
      const msg = encodeURIComponent(`Hello Mong Say, I am establishing a physical ${currentMetal.toUpperCase()} hedging desk via SAGFX. Execution Request: ${action} ${roundedLots.toFixed(2)} Lots ${cfg.symbol} for ${qty} ${unitLabel} (${grams.toFixed(1)}g / ${troyOz.toFixed(2)}oz) at Spot $${spot}. Physical Value: $${Math.round(totalPhysicalCashVal).toLocaleString()}. Required Margin: $${initialMargin.toFixed(2)}.`);
      telegramLink.href = `https://t.me/MongsayFX?text=${msg}`;
    }
  }

  metalButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      metalButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMetal = btn.getAttribute('data-metal') || 'gold';
      const cfg = COMMODITY_CONFIG[currentMetal];

      if (livePriceAssetLabel) livePriceAssetLabel.textContent = `${cfg.symbol} LIVE SPOT:`;
      if (spotPriceLabel) spotPriceLabel.textContent = `${currentMetal === 'gold' ? 'Gold' : 'Silver'} Spot Price ($USD/oz)`;
      if (spotPriceInput) spotPriceInput.value = currentMetal === 'gold' ? Math.round(liveGoldSpot) : liveSilverSpot.toFixed(2);
      if (localPremiumInput) localPremiumInput.value = cfg.defaultPremium;

      if (simMoveSlider) {
        simMoveSlider.min = cfg.simRange.min;
        simMoveSlider.max = cfg.simRange.max;
        simMoveSlider.step = cfg.simRange.step;
        simMoveSlider.value = cfg.simRange.def;
      }

      updateBufferOptions();
      updatePresets();
      updateUnitSliderLimits();
      fetchLivePrice(false);
    });
  });

  flowButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      flowButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFlow = btn.getAttribute('data-flow') || 'buy';
      recalculateHedge();
    });
  });

  unitButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      unitButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentUnit = btn.getAttribute('data-unit') || 'damlung';
      updateUnitSliderLimits();
      updatePresets();
      recalculateHedge();
    });
  });

  quantityInput.addEventListener('input', () => {
    quantitySlider.value = quantityInput.value;
    recalculateHedge();
  });

  quantitySlider.addEventListener('input', () => {
    quantityInput.value = quantitySlider.value;
    recalculateHedge();
  });

  if (spotPriceInput) spotPriceInput.addEventListener('input', recalculateHedge);
  if (leverageSelect) leverageSelect.addEventListener('change', recalculateHedge);
  if (bufferSelect) bufferSelect.addEventListener('change', recalculateHedge);
  if (localPremiumInput) localPremiumInput.addEventListener('input', recalculateHedge);
  if (userBalanceInput) userBalanceInput.addEventListener('input', recalculateHedge);
  if (simMoveSlider) simMoveSlider.addEventListener('input', recalculateHedge);

  if (btnRefreshLivePrice) {
    btnRefreshLivePrice.addEventListener('click', () => fetchLivePrice(true));
  }

  updateBufferOptions();
  updatePresets();
  updateUnitSliderLimits();
  fetchLivePrice(false);
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

/* ---------------------------------------------------------
   13. Institutional FAQ Accordion Controller
   --------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header') || item.querySelector('.faq-question') || item.querySelector('button');
    const body = item.querySelector('.faq-body') || item.querySelector('.faq-answer');
    if (!header || !body) return;

    header.addEventListener('click', (e) => {
      if (e) e.preventDefault();
      const isExpanded = header.getAttribute('aria-expanded') === 'true';
      const parentAccordion = item.closest('.faq-accordion') || document;
      const siblingItems = parentAccordion.querySelectorAll('.faq-item');

      // Close all other open items in this accordion
      siblingItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          const otherHeader = otherItem.querySelector('.faq-header') || otherItem.querySelector('button');
          const otherBody = otherItem.querySelector('.faq-body') || otherItem.querySelector('.faq-answer');
          if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
          if (otherBody) otherBody.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isExpanded) {
        item.classList.remove('active');
        header.setAttribute('aria-expanded', 'false');
        body.style.maxHeight = null;
      } else {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // Recalculate heights on resize
  window.addEventListener('resize', () => {
    const activeBodies = document.querySelectorAll('.faq-item.active .faq-body, .faq-item.active .faq-answer');
    activeBodies.forEach(activeBody => {
      activeBody.style.maxHeight = activeBody.scrollHeight + 'px';
    });
  });
}


/* ---------------------------------------------------------
   SAGFX Presentation Platform — Interactive Rebate Simulator
   Computes real-time weekly, monthly, and annual cashback
   --------------------------------------------------------- */
function initSagfxPlatformCalculator() {
  const volumeRange = document.getElementById('sagfxVolumeRange');
  const volumeValue = document.getElementById('sagfxVolumeValue');
  const assetSelect = document.getElementById('sagfxAssetSelect');
  const weeklyOut = document.getElementById('sagfxWeeklyCashback');
  const monthlyOut = document.getElementById('sagfxMonthlyCashback');
  const annualOut = document.getElementById('sagfxAnnualCashback');

  if (!volumeRange || !weeklyOut) return;

  function recalculate() {
    const lots = parseFloat(volumeRange.value) || 100;
    const ratePerLot = parseFloat(assetSelect ? assetSelect.value : 35) || 35;

    if (volumeValue) {
      volumeValue.textContent = lots.toLocaleString() + ' Lots';
    }

    const monthlyCashback = lots * ratePerLot;
    const weeklyCashback = monthlyCashback / 4;
    const annualCashback = monthlyCashback * 12;

    weeklyOut.textContent = '$' + weeklyCashback.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (monthlyOut) {
      monthlyOut.textContent = '$' + monthlyCashback.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    if (annualOut) {
      annualOut.textContent = '$' + annualCashback.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
  }

  volumeRange.addEventListener('input', () => {
    recalculate();
    // Update active preset button if any match
    document.querySelectorAll('.sagfx-preset-btn').forEach(b => {
      if (b.getAttribute('data-lots') === volumeRange.value) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
  });

  if (assetSelect) {
    assetSelect.addEventListener('change', recalculate);
  }

  document.querySelectorAll('.sagfx-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-lots');
      if (val) {
        volumeRange.value = val;
        document.querySelectorAll('.sagfx-preset-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        recalculate();
      }
    });
  });

  recalculate();
}

/* ---------------------------------------------------------
   SAGFX 3D Credit Cards Pop-Up Engine & Dynamic Parallax Tilt
   --------------------------------------------------------- */
function initSagfxCardPop() {
  const stage = document.getElementById('sagfxCardsStage');
  const stack = document.getElementById('sagfxGlassStack');
  const btnCards = document.getElementById('btnShowCards');
  const btnPortrait = document.getElementById('btnShowPortrait');
  const paneCards = document.getElementById('paneCards');
  const panePortrait = document.getElementById('panePortrait');

  // Interactive View Toggle (3D Cards vs Lead Architect Portrait)
  if (btnCards && btnPortrait && paneCards && panePortrait) {
    btnCards.addEventListener('click', () => {
      btnCards.classList.add('active');
      btnPortrait.classList.remove('active');
      paneCards.classList.add('active');
      panePortrait.classList.remove('active');
    });

    btnPortrait.addEventListener('click', () => {
      btnPortrait.classList.add('active');
      btnCards.classList.remove('active');
      panePortrait.classList.add('active');
      paneCards.classList.remove('active');
    });
  }

  if (!stage || !stack) return;

  let isHovered = false;

  // 3D Parallax Tilt with Mouse Movement
  stage.addEventListener('mouseenter', () => {
    isHovered = true;
    stack.style.animationPlayState = 'paused';
  });

  stage.addEventListener('mousemove', (e) => {
    if (!isHovered) return;
    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotX = (-(y / (rect.height / 2)) * 14 + 10).toFixed(2);
    const rotY = ((x / (rect.width / 2)) * 16 - 12).toFixed(2);
    stack.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(3deg) scale(1.03)`;
  });

  stage.addEventListener('mouseleave', () => {
    isHovered = false;
    stack.style.transform = '';
    stack.style.animationPlayState = 'running';
  });

  // Mobile Tap-to-Pop Toggle
  stage.addEventListener('click', (e) => {
    // Avoid triggering when clicking the internal telegram button
    if (e.target.closest('.hero-arch-action')) return;
    stage.classList.toggle('active-popup');
  });
}

/* ---------------------------------------------------------
   SAGFX Pinterest Presentation Deck - Interactive Slide Navigator
   Handles:
   - 4-Slide Scroll-Spy & Active Dot Tracking
   - Slide Progress Bar & Live Counter (SLIDE 01 / 04)
   - Prev / Next Navigation Buttons
   - Keyboard Arrow Navigation (ArrowDown / ArrowUp / PageDown / PageUp)
   - Interactive Slide Dock Indicator
   --------------------------------------------------------- */
function initSagfxSlideDeck() {
  const slides = Array.from(document.querySelectorAll('.pin-slide-section'));
  if (!slides || slides.length === 0) return;

  const dots = document.querySelectorAll('.pin-dock-dot');
  const counter = document.getElementById('pinDeckCounter');
  const progressBar = document.getElementById('pinDeckProgressBar');
  const prevBtn = document.getElementById('pinDeckPrev');
  const nextBtn = document.getElementById('pinDeckNext');

  let currentSlideIndex = 0;

  function updateSlideUI(index) {
    if (index < 0 || index >= slides.length) return;
    currentSlideIndex = index;

    // Update Counter
    if (counter) {
      counter.textContent = `SLIDE 0${index + 1} / 0${slides.length}`;
    }

    // Update Progress Bar
    if (progressBar) {
      const progress = ((index + 1) / slides.length) * 100;
      progressBar.style.width = `${progress}%`;
    }

    // Update Dots
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  // IntersectionObserver to track active slide
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = slides.indexOf(entry.target);
        if (index !== -1) {
          updateSlideUI(index);
        }
      }
    });
  }, {
    threshold: 0.45
  });

  slides.forEach((slide) => observer.observe(slide));

  // Dock Dots Click
  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const targetId = dot.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Prev & Next Buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentSlideIndex > 0) {
        slides[currentSlideIndex - 1].scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentSlideIndex < slides.length - 1) {
        slides[currentSlideIndex + 1].scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Keyboard Navigation
  window.addEventListener('keydown', (e) => {
    // Only handle if in viewport of sagfx deck page
    if (!document.body.classList.contains('sagfx-deck-page')) return;
    if (['input', 'textarea', 'select'].includes(document.activeElement.tagName.toLowerCase())) return;

    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      if (currentSlideIndex < slides.length - 1) {
        e.preventDefault();
        slides[currentSlideIndex + 1].scrollIntoView({ behavior: 'smooth' });
      }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      if (currentSlideIndex > 0) {
        e.preventDefault();
        slides[currentSlideIndex - 1].scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}

/* ---------------------------------------------------------
   SAGFX Slide 3 - Interactive Timeframe Performance Radar
   --------------------------------------------------------- */
function initSagfxTimeframeRadar() {
  const tfBtns = document.querySelectorAll('.pin-tf-btn');
  const splineLine = document.querySelector('.chart-spline-line');
  const pulseDot = document.querySelector('.chart-pulse-dot');
  const bigStat = document.querySelector('.pin-chart-big-stat');
  const maxRebate = document.getElementById('pinRadarMaxRebate');

  if (!tfBtns || tfBtns.length === 0 || !splineLine) return;

  const radarData = {
    '1M': {
      d: 'M 0 100 Q 55 92, 105 68 T 195 42 T 275 16 L 320 10',
      dotX: 320,
      dotY: 10,
      lots: '135K+',
      rebate: '$45+'
    },
    '6M': {
      d: 'M 0 110 Q 60 85, 120 70 T 210 35 T 280 20 L 320 8',
      dotX: 320,
      dotY: 8,
      lots: '780K+',
      rebate: '$45+'
    },
    '1Y': {
      d: 'M 0 115 Q 70 95, 140 60 T 225 28 T 290 12 L 320 5',
      dotX: 320,
      dotY: 5,
      lots: '1.65M+',
      rebate: '$48+'
    },
    'ALL': {
      d: 'M 0 118 Q 80 88, 150 50 T 235 22 T 300 8 L 320 3',
      dotX: 320,
      dotY: 3,
      lots: '3.2M+',
      rebate: '$50+'
    }
  };

  tfBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tfBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tf = btn.getAttribute('data-tf') || '1M';
      const data = radarData[tf];
      if (!data) return;

      splineLine.setAttribute('d', data.d);
      if (pulseDot) {
        pulseDot.setAttribute('cx', data.dotX);
        pulseDot.setAttribute('cy', data.dotY);
      }
      if (bigStat) {
        bigStat.textContent = data.lots;
      }
      if (maxRebate) {
        maxRebate.textContent = data.rebate;
      }
    });
  });
}

/* ---------------------------------------------------------
   SAGFX Slide 5 - Real-Time Clearing Nexus Loop Engine
   (Multi-Channel Funnel Loop Inspired by Pinterest Reference)
   --------------------------------------------------------- */
const SAGFX_LOOP_DATA = {
  en: [
    {
      title: "Licensed Prime Brokers",
      subtitle: "NODE 01 // FIX 4.4 ECN BRIDGE",
      status: "TIER-1 BRIDGE LIVE",
      latency: "< 1.2ms",
      throughput: "4 Global Prime Brokers",
      bullets: [
        "<strong>Direct ECN Socket:</strong> Multi-asset connectivity to Megafusion, GTC GO, LiteFinance & 8Eightcap.",
        "<strong>Zero Spread Markup:</strong> Pure interbank spreads from 0.0 pips without synthetic retail widening.",
        "<strong>Deep Liquidity Feeds:</strong> Institutional liquidity aggregation from top global investment banks.",
        "<strong>Sub-Millisecond Execution:</strong> Fiber-optic cross-connect routing eliminating adverse slippage."
      ]
    },
    {
      title: "High-Volume Traders",
      subtitle: "NODE 02 // VOLUME EXECUTION FLOW",
      status: "TRADING FLOW ACTIVE",
      latency: "< 0.8ms",
      throughput: "135,000+ Lots Cleared",
      bullets: [
        "<strong>Gold (XAU/USD) Prime:</strong> Tight institutional fills tailored for heavy-lot scalping & swing traders.",
        "<strong>Trade Volume Audit:</strong> Immutable real-time auditing of every closed lot through MT4/MT5 bridge.",
        "<strong>Whitelist ECN Pools:</strong> Dedicated liquidity pools shielding traders from broker B-book conflicts.",
        "<strong>Identical Conditions:</strong> Execution speed, slippage and margin specs match direct accounts 100%."
      ]
    },
    {
      title: "Bullion Hedging Desk",
      subtitle: "NODE 03 // PHYSICAL INVENTORY DEFENSE",
      status: "DELTA-NEUTRAL SYNC",
      latency: "< 2.0ms",
      throughput: "100% Downside Immunity",
      bullets: [
        "<strong>Cambodian Metric Translation:</strong> Mechanical conversion of Damlung (តម្លឹង) & Chi (ជី) into exact lot sizes.",
        "<strong>Delta-Neutral Balance:</strong> Digital short positions neutralize physical store inventory price drops.",
        "<strong>Swap-Advantaged Rails:</strong> Institutional clearing rates minimize overnight financing carrying costs.",
        "<strong>Weekly Cash Rebates:</strong> Volume cashback payouts offset hedging execution expenses to near-zero."
      ]
    },
    {
      title: "Rebate Yield Engine",
      subtitle: "NODE 04 // ALGORITHMIC CASHBACK ENGINE",
      status: "YIELD ENGINE COMPUTING",
      latency: "Real-Time Ledger",
      throughput: "Up to $45+ / Lot Cash",
      bullets: [
        "<strong>85% Fee Pass-Through:</strong> Wholesale broker volume revenue returned directly to traders every week.",
        "<strong>Transparent Weekly Audits:</strong> Sunday midnight GMT ledger reconciliation with detailed trade breakdowns.",
        "<strong>Substantial Fee Recovery:</strong> High-volume accounts recover thousands in trading drag annually.",
        "<strong>Zero Client Cost:</strong> Free whitelist membership funded strictly by prime broker volume compensation."
      ]
    },
    {
      title: "Automated Multi-Rail Settlement",
      subtitle: "NODE 05 // MULTI-RAIL DISPATCH CORE",
      status: "AUTOMATED SETTLEMENT",
      latency: "Every Monday 09:00",
      throughput: "100% On-Time Weekly",
      bullets: [
        "<strong>Crypto Rails (USDT):</strong> Instant low-fee payouts via TRC20 and BEP20 blockchain networks.",
        "<strong>Cambodian Local Banking:</strong> Direct automated transfers into ABA Bank and Bakong QR rails.",
        "<strong>MT4/MT5 Trading Credit:</strong> Direct routing back into broker account balance for compounding liquidity.",
        "<strong>Zero Delays & Limits:</strong> Automated execution without withdrawal thresholds or holding periods."
      ]
    }
  ],
  kh: [
    {
      title: "Prime Broker មានអាជ្ញាប័ណ្ណ",
      subtitle: "ថ្នាំង ០១ // ស្ពានតភ្ជាប់ FIX 4.4 ECN",
      status: "ស្ពាន TIER-1 សកម្ម",
      latency: "< 1.2ms",
      throughput: "Prime Broker ពិភពលោក ៤",
      bullets: [
        "<strong>រន្ធ ECN ផ្ទាល់៖</strong> ការតភ្ជាប់ពហុទ្រព្យសកម្មទៅកាន់ IC Markets, Vantage Markets, Exness & FP Markets។",
        "<strong>គ្មានការតម្លើង Spread៖</strong> Spread អន្តរធនាគារសុទ្ធចាប់ពី 0.0 pip ដោយគ្មានការកើនឡើងសម្រាប់លក់រាយឡើយ។",
        "<strong>ប្រភពសាច់ប្រាក់ងាយស្រួលជ្រៅ៖</strong> ការប្រមូលផ្តុំសាច់ប្រាក់ងាយស្រួលកម្រិតស្ថាប័នពីធនាគារវិនិយោគពិភពលោកកំពូលៗ។",
        "<strong>ប្រតិបត្តិការលឿនជាងមីលីវិនាទី៖</strong> ការបញ្ជូនតាមរយៈបណ្តាញអុបទិក Fiber កាត់បន្ថយ Slippage ដល់កម្រិតសូន្យ។"
      ]
    },
    {
      title: "ពាណិជ្ជករបរិមាណធំ",
      subtitle: "ថ្នាំង ០២ // ចរន្តប្រតិបត្តិការបរិមាណ",
      status: "ចរន្តជួញដូរសកម្ម",
      latency: "< 0.8ms",
      throughput: "ទូទាត់លើសពី ១៣៥,០០០+ Lot",
      bullets: [
        "<strong>ជួញដូរមាស (XAU/USD) Prime៖</strong> ការបំពេញការបញ្ជាទិញកម្រិតស្ថាប័នយ៉ាងរលូនសម្រាប់ Scalper និង Swing Trader។",
        "<strong>សវនកម្មបរិមាណជាក់ស្តែង៖</strong> ការធ្វើសវនកម្មផ្ទាល់រាល់ Lot ដែលបានបិទតាមរយៈស្ពាន MT4/MT5 ដោយតម្លាភាព។",
        "<strong>អាងសាច់ប្រាក់ ECN Whitelist៖</strong> អាងសាច់ប្រាក់ពិសេសការពារពាណិជ្ជករពីទំនាស់ផលប្រយោជន៍ B-Book របស់ Broker។",
        "<strong>លក្ខខណ្ឌដូចគ្នា ១០០%៖</strong> ល្បឿនប្រតិបត្តិការ Slippage និង Margin ដូចគ្នាបេះបិទនឹងការបើកគណនីផ្ទាល់ជាមួយ Broker។"
      ]
    },
    {
      title: "តុការពារហានិភ័យមាស",
      subtitle: "ថ្នាំង ០៣ // ការពារស្តុកមាសជាក់ស្តែង",
      status: "ធ្វើសមកាលកម្ម DELTA-NEUTRAL",
      latency: "< 2.0ms",
      throughput: "ការពារការធ្លាក់ចុះ ១០០%",
      bullets: [
        "<strong>ការបម្លែងរង្វាស់ខ្នាតខ្មែរ៖</strong> ការគណនាបម្លែងខ្នាត «តម្លឹង» និង «ជី» ទៅជាទំហំ Lot អន្តរជាតិយ៉ាងសុក្រឹត។",
        "<strong>សមតុល្យ Delta-Neutral៖</strong> បើកកិច្ចសន្យា Short ឌីជីថល ដើម្បីទប់ទល់នឹងការធ្លាក់ថ្លៃនៃស្តុកមាសក្នុងហាង។",
        "<strong>អត្រា Swap ពិសេស៖</strong> អត្រាទូទាត់កម្រិតស្ថាប័នជួយកាត់បន្ថយថ្លៃរក្សាទុកកិច្ចសន្យាឆ្លងយប់ (Swap)។",
        "<strong>ប្រាក់ Rebate ប្រចាំសប្តាហ៍៖</strong> ប្រាក់ Cashback ពីបរិមាណជួញដូរជួយទូទាត់ថ្លៃដើមការពារហានិភ័យស្ទើរតែស្មើនឹងសូន្យ។"
      ]
    },
    {
      title: "ម៉ាស៊ីនទិន្នផល Rebate",
      subtitle: "ថ្នាំង ០៤ // ម៉ាស៊ីន CASHBACK ស្វ័យប្រវត្ត",
      status: "ម៉ាស៊ីនទិន្នផលកំពុងដំណើរការ",
      latency: "បញ្ជីទូទាត់ពេលវេលាជាក់ស្តែង",
      throughput: "រហូតដល់ $45+ / Lot",
      bullets: [
        "<strong>សងត្រឡប់កម្រៃជើងសារ ៨៥%៖</strong> ប្រាក់ចំណូលកម្រៃជើងសារលក់ដុំពី Broker ត្រូវបានប្រគល់ជូនពាណិជ្ជករវិញជារៀងរាល់សប្តាហ៍។",
        "<strong>សវនកម្មប្រចាំសប្តាហ៍ច្បាស់លាស់៖</strong> ការផ្ទៀងផ្ទាត់បញ្ជីទូទាត់នៅរាត្រីថ្ងៃអាទិត្យ (GMT) ជាមួយរបាយការណ៍លម្អិត។",
        "<strong>ការស្តារថ្លៃដើមបានយ៉ាងច្រើន៖</strong> គណនីបរិមាណធំអាចសន្សំសំចៃបានរាប់ពាន់ដុល្លារពីថ្លៃសេវាជួញដូរប្រចាំឆ្នាំ។",
        "<strong>ឥតគិតថ្លៃសម្រាប់អតិថិជន៖</strong> សមាជិកភាព Whitelist ឥតគិតថ្លៃ ឧបត្ថម្ភដោយផ្ទាល់ពីកម្រៃជើងសាររបស់ Prime Broker។"
      ]
    },
    {
      title: "ប្រព័ន្ធទូទាត់ពហុបណ្តាញស្វ័យប្រវត្ត",
      subtitle: "ថ្នាំង ០៥ // ស្នូលបញ្ជូនទូទាត់ប្រាក់",
      status: "ទូទាត់ស្វ័យប្រវត្ត",
      latency: "រៀងរាល់ថ្ងៃចន្ទ ម៉ោង ០៩:០០",
      throughput: "ទាន់ពេលវេលា ១០០% ប្រចាំសប្តាហ៍",
      bullets: [
        "<strong>បណ្តាញ Crypto (USDT)៖</strong> ទូទាត់រហ័ស ថ្លៃសេវាទាបបំផុត តាមរយៈបណ្តាញ TRC20 និង BEP20។",
        "<strong>ធនាគារក្នុងស្រុកកម្ពុជា៖</strong> ផ្ទេរប្រាក់ដោយស្វ័យប្រវត្តិចូលធនាគារ ABA និងប្រព័ន្ធ Bakong QR ផ្ទាល់។",
        "<strong>បញ្ចូលទៅក្នុង MT4/MT5៖</strong> បញ្ចូលប្រាក់ត្រឡប់ទៅក្នុងសមតុល្យជួញដូរលើ Broker វិញសម្រាប់បង្កើនដើមទុន។",
        "<strong>គ្មានការពន្យារពេល ឬកម្រិតកំណត់៖</strong> ប្រតិបត្តិការទូទាត់ស្វ័យប្រវត្តដោយគ្មានកម្រិតដកប្រាក់អប្បបរមាឡើយ។"
      ]
    }
  ]
};

function initSagfxClearingLoop() {
  const container = document.getElementById('sagfxLoopContainer');
  if (!container) return;

  const cards = document.querySelectorAll('.sagfx-loop-card');
  const beams = document.querySelectorAll('.loop-beam-path');
  const pulseGroups = document.querySelectorAll('.pulse-group');
  const hubTitle = document.getElementById('hubTitle');
  const hubSubtitle = document.getElementById('hubSubtitle');
  const hubStatus = document.getElementById('hubStatus');
  const hubLatency = document.getElementById('hubLatency');
  const hubThroughput = document.getElementById('hubThroughput');
  const hubTelemetryList = document.getElementById('hubTelemetryList');

  let currentIndex = 0;
  let autoTimer = null;
  let isPaused = false;

  function getCurrentLang() {
    return document.documentElement.getAttribute('lang') === 'kh' ? 'kh' : 'en';
  }

  function renderHub(index, animate = true) {
    const lang = getCurrentLang();
    const dataList = SAGFX_LOOP_DATA[lang] || SAGFX_LOOP_DATA.en;
    const data = dataList[index] || dataList[0];

    if (!animate) {
      if (hubTitle) hubTitle.textContent = data.title;
      if (hubSubtitle) hubSubtitle.textContent = data.subtitle;
      if (hubStatus) hubStatus.textContent = data.status;
      if (hubLatency) hubLatency.textContent = data.latency;
      if (hubThroughput) hubThroughput.textContent = data.throughput;
      if (hubTelemetryList) {
        hubTelemetryList.innerHTML = data.bullets.map(bullet => `
          <li class="hub-telemetry-item">
            <span class="hub-item-bullet"></span>
            <span>${bullet}</span>
          </li>
        `).join('');
      }
      return;
    }

    if (hubTitle) hubTitle.style.opacity = '0';
    if (hubTelemetryList) hubTelemetryList.style.opacity = '0';

    setTimeout(() => {
      if (hubTitle) hubTitle.textContent = data.title;
      if (hubSubtitle) hubSubtitle.textContent = data.subtitle;
      if (hubStatus) hubStatus.textContent = data.status;
      if (hubLatency) hubLatency.textContent = data.latency;
      if (hubThroughput) hubThroughput.textContent = data.throughput;
      if (hubTelemetryList) {
        hubTelemetryList.innerHTML = data.bullets.map(bullet => `
          <li class="hub-telemetry-item">
            <span class="hub-item-bullet"></span>
            <span>${bullet}</span>
          </li>
        `).join('');
      }
      if (hubTitle) hubTitle.style.opacity = '1';
      if (hubTelemetryList) hubTelemetryList.style.opacity = '1';
    }, 140);
  }

  function setActiveNode(index, animateHub = true) {
    if (index < 0 || index >= 5) return;
    currentIndex = index;

    // Update left node cards
    cards.forEach((card, i) => {
      if (i === index) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    // Update middle SVG beams & pulse photons
    beams.forEach((beam, i) => {
      if (i === index) {
        beam.classList.add('active');
      } else {
        beam.classList.remove('active');
      }
    });

    pulseGroups.forEach((pg, i) => {
      if (i === index) {
        pg.classList.add('active');
      } else {
        pg.classList.remove('active');
      }
    });

    renderHub(index, animateHub);
  }

  function startAutoCycle() {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      if (!isPaused) {
        const nextIndex = (currentIndex + 1) % 5;
        setActiveNode(nextIndex);
      }
    }, 3500);
  }

  // Interactive card event listeners
  cards.forEach((card) => {
    const idx = parseInt(card.getAttribute('data-index'), 10);
    card.addEventListener('click', () => {
      setActiveNode(idx);
      startAutoCycle();
    });
    card.addEventListener('mouseenter', () => {
      isPaused = true;
      setActiveNode(idx);
    });
    card.addEventListener('mouseleave', () => {
      isPaused = false;
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setActiveNode(idx);
        startAutoCycle();
      }
    });
  });

  // Pause cycling on container hover
  container.addEventListener('mouseenter', () => { isPaused = true; });
  container.addEventListener('mouseleave', () => { isPaused = false; });

  // Expose global hook for real-time language toggling
  window.updateSagfxLoopLanguage = function() {
    renderHub(currentIndex, false);
  };

  // Initial activation
  setActiveNode(0, false);
  startAutoCycle();
}

/* ---------------------------------------------------------
   Brokerage Page - 3D Institutional Terminal & ECN Gateway
   (Autonomous 3D Cursor & Interactive Candlestick Showcase
    Inspired by Pinterest Reference https://pin.it/3qQLEkg24)
   --------------------------------------------------------- */
const BROKER_TERMINAL_REGISTRY = {
  en: [
    {
      id: 'megafusion',
      name: 'Megafusion',
      urlText: 'www.megafusion.com',
      url: 'https://www.megafusion.com',
      meta: 'NODE 01 // FIX 4.4 LIQUIDITY BRIDGE',
      tag: 'MEGAFUSION',
      latency: 'ECN BRIDGE: <0.4ms',
      spreadTag: 'RAW 0.0 PIP // <0.4ms',
      theme: 'megafusion',
      toastMeta: 'ROUTING 0.0 RAW SPREAD VIA WWW.MEGAFUSION.COM',
      depth: [
        { askPrice: '2,750.10', askSize: '58.5L', askW: 78, bidPrice: '2,748.65', bidSize: '78.0L', bidW: 95 },
        { askPrice: '2,749.60', askSize: '36.0L', askW: 52, bidPrice: '2,748.20', bidSize: '49.2L', bidW: 68 },
        { askPrice: '2,749.15', askSize: '21.4L', askW: 32, bidPrice: '2,747.75', bidSize: '32.8L', bidW: 48 },
        { askPrice: '2,748.70', askSize: '15.2L', askW: 24, bidPrice: '2,747.30', bidSize: '24.5L', bidW: 34 }
      ],
      logoSvg: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="#ffffff" stroke-width="2" fill="rgba(255, 255, 255, 0.25)"/><path d="M7 15L12 8L17 15M9.5 12H14.5" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
      id: 'gtcgo',
      name: 'GTC GO',
      urlText: 'www.gtcfx.com',
      url: 'https://www.gtcfx.com',
      meta: 'NODE 02 // GLOBAL TRADE CAPITAL ECN',
      tag: 'GTC GO',
      latency: 'ECN BRIDGE: <0.6ms',
      spreadTag: 'RAW 0.0 PIP // <0.6ms',
      theme: 'gtcgo',
      toastMeta: 'CONNECTED TO GTC GLOBAL TRADE CAPITAL POOL',
      depth: [
        { askPrice: '2,749.95', askSize: '42.0L', askW: 65, bidPrice: '2,748.50', bidSize: '64.2L', bidW: 84 },
        { askPrice: '2,749.50', askSize: '31.5L', askW: 48, bidPrice: '2,748.10', bidSize: '42.0L', bidW: 58 },
        { askPrice: '2,749.05', askSize: '19.8L', askW: 28, bidPrice: '2,747.65', bidSize: '28.5L', bidW: 42 },
        { askPrice: '2,748.60', askSize: '14.0L', askW: 20, bidPrice: '2,747.20', bidSize: '18.0L', bidW: 28 }
      ],
      logoSvg: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#ffffff" stroke-width="2" fill="rgba(255, 255, 255, 0.25)"/><path d="M15 9A4.5 4.5 0 1 0 15 15H11.5V12.5H15" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
      id: 'litefinance',
      name: 'LiteFinance',
      urlText: 'www.litefinance.com',
      url: 'https://www.litefinance.com',
      meta: 'NODE 03 // MULTI-ASSET ECN POOL',
      tag: 'LITE FINANCE',
      latency: 'ECN BRIDGE: <0.7ms',
      spreadTag: 'RAW 0.0 PIP // <0.7ms',
      theme: 'litefinance',
      toastMeta: 'CONNECTED TO LITEFINANCE ECN CLEARING',
      depth: [
        { askPrice: '2,750.25', askSize: '36.8L', askW: 55, bidPrice: '2,748.70', bidSize: '52.4L', bidW: 72 },
        { askPrice: '2,749.80', askSize: '28.0L', askW: 42, bidPrice: '2,748.30', bidSize: '38.0L', bidW: 50 },
        { askPrice: '2,749.35', askSize: '16.5L', askW: 25, bidPrice: '2,747.85', bidSize: '24.0L', bidW: 36 },
        { askPrice: '2,748.90', askSize: '11.0L', askW: 18, bidPrice: '2,747.40', bidSize: '16.5L', bidW: 24 }
      ],
      logoSvg: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="#ffffff" stroke-width="2" fill="rgba(255, 255, 255, 0.25)"/><path d="M7 8V16H13M12 8H17M12 12H16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
      id: 'eightcap',
      name: '8Eightcap',
      urlText: 'www.eightcap.com',
      url: 'https://www.eightcap.com',
      meta: 'NODE 04 // TRADINGVIEW & ULTRA-LOW LATENCY',
      tag: '8EIGHTCAP',
      latency: 'ECN BRIDGE: <0.5ms',
      spreadTag: 'RAW 0.0 PIP // <0.5ms',
      theme: 'eightcap',
      toastMeta: 'CONNECTED TO 8EIGHTCAP PRIME ROUTER',
      depth: [
        { askPrice: '2,749.60', askSize: '68.0L', askW: 86, bidPrice: '2,748.60', bidSize: '85.5L', bidW: 100 },
        { askPrice: '2,749.20', askSize: '45.0L', askW: 60, bidPrice: '2,748.15', bidSize: '56.0L', bidW: 75 },
        { askPrice: '2,748.80', askSize: '29.5L', askW: 38, bidPrice: '2,747.70', bidSize: '39.0L', bidW: 52 },
        { askPrice: '2,748.40', askSize: '18.0L', askW: 24, bidPrice: '2,747.25', bidSize: '22.0L', bidW: 30 }
      ],
      logoSvg: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="#ffffff" stroke-width="2" fill="rgba(255, 255, 255, 0.25)"/><circle cx="12" cy="8.5" r="3.5" stroke="#ffffff" stroke-width="2"/><circle cx="12" cy="15.5" r="4" stroke="#ffffff" stroke-width="2"/></svg>'
    }
  ],
  kh: [
    {
      id: 'megafusion',
      name: 'Megafusion',
      urlText: 'www.megafusion.com',
      url: 'https://www.megafusion.com',
      meta: 'ថ្នាំង ០១ // ស្ពានសាច់ប្រាក់ FIX 4.4',
      tag: 'MEGAFUSION',
      latency: 'ស្ពាន ECN: <0.4ms',
      spreadTag: 'RAW 0.0 PIP // <0.4ms',
      theme: 'megafusion',
      toastMeta: 'តភ្ជាប់ទៅកាន់ WWW.MEGAFUSION.COM ដោយជោគជ័យ',
      depth: [
        { askPrice: '2,750.10', askSize: '58.5L', askW: 78, bidPrice: '2,748.65', bidSize: '78.0L', bidW: 95 },
        { askPrice: '2,749.60', askSize: '36.0L', askW: 52, bidPrice: '2,748.20', bidSize: '49.2L', bidW: 68 },
        { askPrice: '2,749.15', askSize: '21.4L', askW: 32, bidPrice: '2,747.75', bidSize: '32.8L', bidW: 48 },
        { askPrice: '2,748.70', askSize: '15.2L', askW: 24, bidPrice: '2,747.30', bidSize: '24.5L', bidW: 34 }
      ],
      logoSvg: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="#ffffff" stroke-width="2" fill="rgba(255, 255, 255, 0.25)"/><path d="M7 15L12 8L17 15M9.5 12H14.5" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
      id: 'gtcgo',
      name: 'GTC GO',
      urlText: 'www.gtcfx.com',
      url: 'https://www.gtcfx.com',
      meta: 'ថ្នាំង ០២ // សាច់ប្រាក់ពាណិជ្ជកម្មសកល ECN',
      tag: 'GTC GO',
      latency: 'ស្ពាន ECN: <0.6ms',
      spreadTag: 'RAW 0.0 PIP // <0.6ms',
      theme: 'gtcgo',
      toastMeta: 'តភ្ជាប់ទៅកាន់បណ្តុំសាច់ប្រាក់ GTC GLOBAL TRADE CAPITAL',
      depth: [
        { askPrice: '2,749.95', askSize: '42.0L', askW: 65, bidPrice: '2,748.50', bidSize: '64.2L', bidW: 84 },
        { askPrice: '2,749.50', askSize: '31.5L', askW: 48, bidPrice: '2,748.10', bidSize: '42.0L', bidW: 58 },
        { askPrice: '2,749.05', askSize: '19.8L', askW: 28, bidPrice: '2,747.65', bidSize: '28.5L', bidW: 42 },
        { askPrice: '2,748.60', askSize: '14.0L', askW: 20, bidPrice: '2,747.20', bidSize: '18.0L', bidW: 28 }
      ],
      logoSvg: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#ffffff" stroke-width="2" fill="rgba(255, 255, 255, 0.25)"/><path d="M15 9A4.5 4.5 0 1 0 15 15H11.5V12.5H15" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
      id: 'litefinance',
      name: 'LiteFinance',
      urlText: 'www.litefinance.com',
      url: 'https://www.litefinance.com',
      meta: 'ថ្នាំង ០៣ // បណ្តុំទ្រព្យចម្រុះ ECN POOL',
      tag: 'LITE FINANCE',
      latency: 'ស្ពាន ECN: <0.7ms',
      spreadTag: 'RAW 0.0 PIP // <0.7ms',
      theme: 'litefinance',
      toastMeta: 'តភ្ជាប់ទៅកាន់ការទូទាត់ LITEFINANCE ECN',
      depth: [
        { askPrice: '2,750.25', askSize: '36.8L', askW: 55, bidPrice: '2,748.70', bidSize: '52.4L', bidW: 72 },
        { askPrice: '2,749.80', askSize: '28.0L', askW: 42, bidPrice: '2,748.30', bidSize: '38.0L', bidW: 50 },
        { askPrice: '2,749.35', askSize: '16.5L', askW: 25, bidPrice: '2,747.85', bidSize: '24.0L', bidW: 36 },
        { askPrice: '2,748.90', askSize: '11.0L', askW: 18, bidPrice: '2,747.40', bidSize: '16.5L', bidW: 24 }
      ],
      logoSvg: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="#ffffff" stroke-width="2" fill="rgba(255, 255, 255, 0.25)"/><path d="M7 8V16H13M12 8H17M12 12H16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
      id: 'eightcap',
      name: '8Eightcap',
      urlText: 'www.eightcap.com',
      url: 'https://www.eightcap.com',
      meta: 'ថ្នាំង ០៤ // TRADINGVIEW & ល្បឿនលឿនបំផុត',
      tag: '8EIGHTCAP',
      latency: 'ស្ពាន ECN: <0.5ms',
      spreadTag: 'RAW 0.0 PIP // <0.5ms',
      theme: 'eightcap',
      toastMeta: 'តភ្ជាប់ទៅកាន់ 8EIGHTCAP PRIME ROUTER',
      depth: [
        { askPrice: '2,749.60', askSize: '68.0L', askW: 86, bidPrice: '2,748.60', bidSize: '85.5L', bidW: 100 },
        { askPrice: '2,749.20', askSize: '45.0L', askW: 60, bidPrice: '2,748.15', bidSize: '56.0L', bidW: 75 },
        { askPrice: '2,748.80', askSize: '29.5L', askW: 38, bidPrice: '2,747.70', bidSize: '39.0L', bidW: 52 },
        { askPrice: '2,748.40', askSize: '18.0L', askW: 24, bidPrice: '2,747.25', bidSize: '22.0L', bidW: 30 }
      ],
      logoSvg: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="#ffffff" stroke-width="2" fill="rgba(255, 255, 255, 0.25)"/><circle cx="12" cy="8.5" r="3.5" stroke="#ffffff" stroke-width="2"/><circle cx="12" cy="15.5" r="4" stroke="#ffffff" stroke-width="2"/></svg>'
    }
  ]
};

function initBrokerTerminalShowcase() {
  const stage = document.getElementById('terminalStage');
  if (!stage) return;

  const card = document.getElementById('floatingGlassCard');
  const cursor = document.getElementById('autoCursor');
  const btn = document.getElementById('glassCtaBtn');
  const ripple = document.getElementById('btnRipple');
  const toast = document.getElementById('executionToast');
  const toastMeta = document.getElementById('toastMeta');
  const fieldAccount = document.getElementById('fieldAccount');
  const fieldKey = document.getElementById('fieldKey');
  const livePrice = document.getElementById('liveTerminalPrice');
  const cardBrokerLogo = document.getElementById('cardBrokerLogo');
  const cardBrokerTitle = document.getElementById('cardBrokerTitle');
  const cardBrokerLinkChip = document.getElementById('cardBrokerLinkChip');
  const cardBrokerUrlText = document.getElementById('cardBrokerUrlText');
  const cardBrokerMeta = document.getElementById('cardBrokerMeta');
  const fieldAccountTag = document.getElementById('fieldAccountTag');
  const fieldSpreadTag = document.getElementById('fieldSpreadTag');
  const btnCtaText = document.getElementById('btnCtaText');
  const ecnLatencyText = document.getElementById('ecnLatencyText');
  const brokerPills = document.querySelectorAll('.terminal-broker-whitelist-pills .broker-pill');
  const tfBtns = document.querySelectorAll('.chart-tf-btn');
  const scene = document.getElementById('terminalScene');
  const liveCandle = document.getElementById('liveTerminalCandle');

  // Depth ladder rows
  const depthLadder = document.querySelector('.terminal-depth-ladder');
  const depthRows = depthLadder ? depthLadder.querySelectorAll('.ladder-row') : [];

  let currentBrokerIdx = 0;
  let isUserHovered = false;
  let choreographyTimer = null;

  function getCurrentLang() {
    return document.documentElement.getAttribute('lang') === 'kh' ? 'kh' : 'en';
  }

  // Live gold price micro-fluctuations
  let currentGold = 2748.65;
  setInterval(() => {
    const delta = (Math.random() * 0.45 - 0.20).toFixed(2);
    currentGold = (parseFloat(currentGold) + parseFloat(delta)).toFixed(2);
    if (livePrice) {
      livePrice.textContent = '$' + Number(currentGold).toLocaleString('en-US', { minimumFractionDigits: 2 });
    }
  }, 2200);

  // Timeframe selector buttons
  tfBtns.forEach(btnEl => {
    btnEl.addEventListener('click', () => {
      tfBtns.forEach(b => b.classList.remove('active'));
      btnEl.classList.add('active');
    });
  });

  // Switch active broker pill & update card with condition-matching values
  function selectBroker(idx) {
    currentBrokerIdx = idx;
    const lang = getCurrentLang();
    const dataList = BROKER_TERMINAL_REGISTRY[lang] || BROKER_TERMINAL_REGISTRY.en;
    const b = dataList[idx] || dataList[0];

    // Update active class on pills
    brokerPills.forEach((p, i) => {
      if (i === idx) p.classList.add('active');
      else p.classList.remove('active');
    });

    // Update stage data-broker-theme for dynamic aura shifts
    stage.setAttribute('data-broker-theme', b.theme);

    // 3D Flip logo icon with fresh SVG
    if (cardBrokerLogo) {
      cardBrokerLogo.classList.remove('flipping');
      void cardBrokerLogo.offsetWidth; // reflow
      cardBrokerLogo.classList.add('flipping');
      cardBrokerLogo.innerHTML = b.logoSvg;
    }

    if (cardBrokerTitle) {
      cardBrokerTitle.textContent = lang === 'kh' ? ('ច្រកតភ្ជាប់ ' + b.name) : (b.name + ' Gateway');
    }
    if (cardBrokerUrlText) cardBrokerUrlText.textContent = b.urlText;
    if (cardBrokerLinkChip) cardBrokerLinkChip.href = b.url;
    if (cardBrokerMeta) cardBrokerMeta.textContent = b.meta;
    if (fieldAccountTag) fieldAccountTag.textContent = b.tag;
    if (fieldSpreadTag) fieldSpreadTag.textContent = b.spreadTag;
    if (btnCtaText) {
      btnCtaText.textContent = lang === 'kh' ? ('តភ្ជាប់ ' + b.name + ' Rails') : ('Connect ' + b.name + ' Rails');
    }
    if (ecnLatencyText) ecnLatencyText.textContent = b.latency;
    if (toastMeta) toastMeta.textContent = b.toastMeta;

    // Update dynamic depth ladder condition values
    if (b.depth && depthRows.length >= 7) {
      // Ask rows: 0, 1, 2
      for (let i = 0; i < 3; i++) {
        const row = depthRows[i];
        const d = b.depth[i];
        if (row && d) {
          const pEl = row.querySelector('.price');
          const sEl = row.querySelector('.size');
          const bEl = row.querySelector('.ladder-bar-bg');
          if (pEl) pEl.textContent = d.askPrice;
          if (sEl) sEl.textContent = d.askSize;
          if (bEl) bEl.style.width = d.askW + '%';
        }
      }
      // Bid rows: 3, 4, 5, 6
      for (let i = 0; i < 4; i++) {
        const row = depthRows[3 + i];
        const d = b.depth[i];
        if (row && d) {
          const pEl = row.querySelector('.price');
          const sEl = row.querySelector('.size');
          const bEl = row.querySelector('.ladder-bar-bg');
          if (pEl) pEl.textContent = d.bidPrice;
          if (sEl) sEl.textContent = d.bidSize;
          if (bEl) bEl.style.width = d.bidW + '%';
        }
      }
    }

    // Tick flash live candle
    if (liveCandle) {
      liveCandle.style.opacity = '0.4';
      setTimeout(() => { liveCandle.style.opacity = '1'; }, 180);
    }
  }

  brokerPills.forEach((p, i) => {
    p.addEventListener('click', () => selectBroker(i));
  });

  // Click trigger on CTA button with tactile feedback
  function triggerButtonClick() {
    if (!btn || !ripple || !toast) return;
    btn.classList.add('clicked');
    ripple.classList.add('radiate');

    setTimeout(() => {
      btn.classList.remove('clicked');
      ripple.classList.remove('radiate');
      toast.classList.add('show');
    }, 350);
  }

  if (btn) {
    btn.addEventListener('click', () => {
      triggerButtonClick();
      setTimeout(() => {
        if (toast) toast.classList.remove('show');
      }, 3000);
    });
  }

  // Choreography timeline for autonomous 3D pointer cursor
  function runCursorChoreography() {
    if (isUserHovered || window.innerWidth < 900) {
      choreographyTimer = setTimeout(runCursorChoreography, 2000);
      return;
    }

    if (!cursor || !fieldAccount || !fieldKey || !btn || !toast) return;

    // Step 1: Cursor moves to Account field
    cursor.style.transition = 'transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)';
    cursor.style.transform = 'translate3d(190px, 130px, 110px)';

    choreographyTimer = setTimeout(() => {
      if (isUserHovered) return;
      fieldAccount.classList.add('focused');

      // Step 2: Cursor glides to Key field
      cursor.style.transition = 'transform 0.9s cubic-bezier(0.25, 1, 0.5, 1)';
      cursor.style.transform = 'translate3d(215px, 185px, 110px)';

      choreographyTimer = setTimeout(() => {
        if (isUserHovered) return;
        fieldAccount.classList.remove('focused');
        fieldKey.classList.add('focused');

        // Step 3: Cursor swoops to CTA button center
        cursor.style.transition = 'transform 1.1s cubic-bezier(0.16, 1, 0.3, 1)';
        cursor.style.transform = 'translate3d(190px, 295px, 120px)';

        choreographyTimer = setTimeout(() => {
          if (isUserHovered) return;
          fieldKey.classList.remove('focused');

          // Step 4: Click button
          triggerButtonClick();

          // Step 5: Cursor glides away and cycles broker
          choreographyTimer = setTimeout(() => {
            cursor.style.transition = 'transform 1.4s cubic-bezier(0.25, 1, 0.5, 1)';
            cursor.style.transform = 'translate3d(370px, 90px, 110px)';

            choreographyTimer = setTimeout(() => {
              toast.classList.remove('show');
              const nextBroker = (currentBrokerIdx + 1) % 4;
              selectBroker(nextBroker);
              choreographyTimer = setTimeout(runCursorChoreography, 2500);
            }, 3000);
          }, 800);

        }, 1200);
      }, 1000);
    }, 1300);
  }

  // Hover detection to pause autonomous cursor gracefully
  if (scene) {
    scene.addEventListener('mouseenter', () => {
      isUserHovered = true;
      if (cursor) cursor.style.opacity = '0.25';
    });
    scene.addEventListener('mouseleave', () => {
      isUserHovered = false;
      if (cursor) cursor.style.opacity = '1';
    });
  }

  // Language update hook
  window.updateBrokerTerminalLanguage = function() {
    selectBroker(currentBrokerIdx);
  };

  // Initial broker selection & start loop
  selectBroker(0);
  setTimeout(runCursorChoreography, 1600);
}

/* ---------------------------------------------------------
   3D Studio Display Cascading Bullion Ledger Stack (Pinterest 7jPuXi96A)
   Dynamic typewriter carousel, interactive card focusing, & bilingual prompt engine
   --------------------------------------------------------- */
function initHedgingLedgerStack() {
  const section = document.getElementById('hedgingShowcaseSection');
  if (!section) return;

  const typewriterEl = document.getElementById('hedgingTypewriterText');
  if (!typewriterEl) return;

  const cards = section.querySelectorAll('.ledger-folder-card');

  const QUERIES_EN = [
    "Hedge 50 Damlung Gold Inventory...",
    "Convert 120 Chi into MT4/MT5 Short lot size...",
    "Compute Delta-Neutral spot crash offset...",
    "Route XAU/USD raw 0.0 pip liquidity via SAGFX...",
    "Balance 24K jewelry inventory price risk...",
    "Calculate weekly rebate cashbacks offset..."
  ];

  const QUERIES_KH = [
    "ការពារហានិភ័យស្តុកមាស ៥០ តម្លឹង...",
    "បម្លែង ១២០ ជី ទៅជាទំហំកិច្ចសន្យា MT4/MT5 Short...",
    "គណនាទំហំទូទាត់ពេលតម្លៃមាសពិភពលោកធ្លាក់ចុះ...",
    "បញ្ជូនបរិមាណ XAU/USD គម្លាត 0.0 pip តាម SAGFX...",
    "ការពារតម្លៃគ្រឿងអលង្ការមាសទឹកដប់ (២៤ការ៉ាត)...",
    "គណនាប្រាក់ Rebate សងត្រឡប់ប្រចាំសប្តាហ៍..."
  ];

  function getCurrentQueries() {
    const isKh = document.documentElement.getAttribute('lang') === 'kh';
    return isKh ? QUERIES_KH : QUERIES_EN;
  }

  let activeQueries = getCurrentQueries();
  let queryIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeTimeout = null;
  let isPausedForManualInput = false;

  function tick() {
    if (document.documentElement.classList.contains('fx-frozen') || isPausedForManualInput) {
      typeTimeout = setTimeout(tick, 1000);
      return;
    }

    const currentQuery = activeQueries[queryIdx];
    if (!currentQuery) {
      queryIdx = 0;
      typeTimeout = setTimeout(tick, 300);
      return;
    }

    if (isDeleting) {
      charIdx--;
      typewriterEl.textContent = currentQuery.substring(0, charIdx);
      if (charIdx <= 0) {
        isDeleting = false;
        queryIdx = (queryIdx + 1) % activeQueries.length;
        typeTimeout = setTimeout(tick, 450);
        return;
      }
      typeTimeout = setTimeout(tick, 35);
    } else {
      charIdx++;
      typewriterEl.textContent = currentQuery.substring(0, charIdx);
      if (charIdx >= currentQuery.length) {
        isDeleting = true;
        typeTimeout = setTimeout(tick, 2200); // Read pause
        return;
      }
      typeTimeout = setTimeout(tick, 65);
    }
  }

  typeTimeout = setTimeout(tick, 800);

  // Allow clicking any card to inject its prompt into the console
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const prompt = card.getAttribute('data-prompt');
      if (prompt) {
        isPausedForManualInput = true;
        if (typeTimeout) clearTimeout(typeTimeout);
        typewriterEl.textContent = prompt;

        // Card flash highlight
        card.style.borderColor = '#e5b95f';
        card.style.boxShadow = '0 0 35px rgba(229, 185, 95, 0.6)';

        setTimeout(() => {
          card.style.borderColor = '';
          card.style.boxShadow = '';
          isPausedForManualInput = false;
          isDeleting = true;
          charIdx = prompt.length;
          tick();
        }, 3200);
      }
    });
  });

  // Global language switch subscriber
  window.updateHedgingStackLanguage = function(lang) {
    activeQueries = lang === 'kh' ? QUERIES_KH : QUERIES_EN;
    charIdx = 0;
    isDeleting = false;
    if (typewriterEl) {
      typewriterEl.textContent = activeQueries[queryIdx] || '';
    }
  };
}


/* ---------------------------------------------------------
   3D Studio Display Cascading Reading Console (Library - Pinterest 7jPuXi96A)
   Dynamic typewriter carousel, interactive book filtering & bilingual prompt engine
   --------------------------------------------------------- */
function initLibraryReadingStack() {
  const section = document.getElementById('libraryShowcaseSection');
  if (!section) return;

  const typewriterEl = document.getElementById('libTypewriterText');
  if (!typewriterEl) return;

  const cards = section.querySelectorAll('.library-folder-card');
  const executeBtn = document.getElementById('libSearchExecuteBtn');
  const bookSearchInput = document.getElementById('bookSearchInput');

  const QUERIES_EN = [
    "Search key takeaways in Trading in the Zone...",
    "Explore Antifragile asymmetric convex payoffs...",
    "Query The Psychology of Money on capital survival...",
    "Analyze Ray Dalio causal feedback machines...",
    "Study Edwin Lefèvre institutional tape reading...",
    "Review The Sovereign Individual monetary rails..."
  ];

  const QUERIES_KH = [
    "ស្វែងរកខ្លឹមសារសំខាន់ក្នុង Trading in the Zone...",
    "ស្វែងយល់ពីផលចំណេញអសមកាលក្នុង Antifragile...",
    "ស្វែងរកទ្រឹស្តីរក្សាទ្រព្យក្នុង The Psychology of Money...",
    "វិភាគប្រព័ន្ធស្វ័យប្រវត្តិកម្មរបស់ Ray Dalio...",
    "សិក្សាពីការអានរលកសន្ទនីយភាពរបស់ Edwin Lefèvre...",
    "ស្វែងរកប្រព័ន្ធរូបិយវត្ថុក្នុង The Sovereign Individual..."
  ];

  function getCurrentQueries() {
    const isKh = document.documentElement.getAttribute('lang') === 'kh';
    return isKh ? QUERIES_KH : QUERIES_EN;
  }

  let activeQueries = getCurrentQueries();
  let queryIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeTimeout = null;
  let isPausedForManualInput = false;

  function tick() {
    if (document.documentElement.classList.contains('fx-frozen') || isPausedForManualInput) {
      typeTimeout = setTimeout(tick, 1000);
      return;
    }

    const currentQuery = activeQueries[queryIdx];
    if (!currentQuery) {
      queryIdx = 0;
      typeTimeout = setTimeout(tick, 300);
      return;
    }

    if (isDeleting) {
      charIdx--;
      typewriterEl.textContent = currentQuery.substring(0, charIdx);
      if (charIdx <= 0) {
        isDeleting = false;
        queryIdx = (queryIdx + 1) % activeQueries.length;
        typeTimeout = setTimeout(tick, 450);
        return;
      }
      typeTimeout = setTimeout(tick, 35);
    } else {
      charIdx++;
      typewriterEl.textContent = currentQuery.substring(0, charIdx);
      if (charIdx >= currentQuery.length) {
        isDeleting = true;
        typeTimeout = setTimeout(tick, 2200); // Read pause
        return;
      }
      typeTimeout = setTimeout(tick, 65);
    }
  }

  typeTimeout = setTimeout(tick, 800);

  // Allow clicking any card to inject its prompt into the console and filter books
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const prompt = card.getAttribute('data-prompt');
      const bookQuery = card.getAttribute('data-book-query');
      if (prompt) {
        isPausedForManualInput = true;
        if (typeTimeout) clearTimeout(typeTimeout);
        typewriterEl.textContent = prompt;

        // Card flash highlight
        card.style.borderColor = '#e5b95f';
        card.style.boxShadow = '0 0 35px rgba(229, 185, 95, 0.6)';

        // If there's an archive input, synchronize and highlight
        if (bookSearchInput && bookQuery) {
          bookSearchInput.value = bookQuery;
          bookSearchInput.dispatchEvent(new Event('input', { bubbles: true }));
        }

        setTimeout(() => {
          card.style.borderColor = '';
          card.style.boxShadow = '';
          isPausedForManualInput = false;
          isDeleting = true;
          charIdx = prompt.length;
          tick();
        }, 3200);
      }
    });
  });

  // Action button scrolls down to library grid
  if (executeBtn) {
    executeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector('.books-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (bookSearchInput) {
          setTimeout(() => bookSearchInput.focus(), 600);
        }
      }
    });
  }

  // Global language switch subscriber
  window.updateLibraryStackLanguage = function(lang) {
    activeQueries = lang === 'kh' ? QUERIES_KH : QUERIES_EN;
    charIdx = 0;
    isDeleting = false;
    if (typewriterEl) {
      typewriterEl.textContent = activeQueries[queryIdx] || '';
    }
  };
}

/* ==========================================================================
   PINTEREST MOBILE TELEMETRY HUD ENGINE (https://pin.it/UAq3Np3yg)
   Radial tick speedometer geometry, tab sync, and Smart Routing switch
   ========================================================================== */
function initPinterestMobileHud() {
  const carousel = document.getElementById('pinMobileCarousel');
  const tabsWrap = document.getElementById('pinHudTabs');
  const ticksGroup = document.getElementById('pinSpeedoTicks');
  const speedoDot = document.getElementById('pinSpeedoDot');
  const speedoVal = document.getElementById('pinSpeedoVal');
  const speedoSub = document.getElementById('pinSpeedoSub');
  const speedoTitle = document.getElementById('pinSpeedoTitle');
  const row1Lbl = document.getElementById('pinRow1Lbl');
  const row1Val = document.getElementById('pinRow1Val');
  const row2Lbl = document.getElementById('pinRow2Lbl');
  const row2Val = document.getElementById('pinRow2Val');
  const presetsWrap = document.getElementById('pinSpeedoPresets');
  const smartSwitch = document.getElementById('pinSmartSwitch');
  const smartStatusTxt = document.getElementById('pinSmartStatusTxt');
  const autoModeText = document.getElementById('pinAutoModeText');
  const autoModeDot = document.getElementById('pinAutoModeDot');
  const prevBtn = document.getElementById('pinSpeedoPrevBtn');

  if (!carousel || !ticksGroup) return;

  // 1. Render radial tick marks spanning -205 deg to +25 deg (230 deg sweep)
  const cx = 110;
  const cy = 104;
  const rInner = 68;
  const rOuter = 82;
  const rDot = 89;
  const totalTicks = 37;
  const startDeg = -205;
  const endDeg = 25;
  const sweepDeg = endDeg - startDeg;
  const tickLines = [];

  for (let i = 0; i < totalTicks; i++) {
    const ratio = i / (totalTicks - 1);
    const rad = ((startDeg + ratio * sweepDeg) * Math.PI) / 180;
    const x1 = (cx + rInner * Math.cos(rad)).toFixed(2);
    const y1 = (cy + rInner * Math.sin(rad)).toFixed(2);
    const x2 = (cx + rOuter * Math.cos(rad)).toFixed(2);
    const y2 = (cy + rOuter * Math.sin(rad)).toFixed(2);

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', 'rgba(255,255,255,0.28)');
    line.setAttribute('stroke-width', '2');
    line.setAttribute('stroke-linecap', 'round');
    ticksGroup.appendChild(line);
    tickLines.push(line);
  }

  function updateGaugePct(pct) {
    const clamped = Math.max(0, Math.min(100, pct));
    const ratio = clamped / 100;
    const activeCount = Math.round(ratio * totalTicks);

    tickLines.forEach((line, idx) => {
      if (idx < activeCount) {
        line.setAttribute('stroke', 'rgba(255,255,255,0.95)');
        line.setAttribute('stroke-width', '2.4');
      } else {
        line.setAttribute('stroke', 'rgba(255,255,255,0.28)');
        line.setAttribute('stroke-width', '2');
      }
    });

    const dotAngle = ((startDeg + ratio * sweepDeg) * Math.PI) / 180;
    if (speedoDot) {
      speedoDot.setAttribute('cx', (cx + rDot * Math.cos(dotAngle)).toFixed(2));
      speedoDot.setAttribute('cy', (cy + rDot * Math.sin(dotAngle)).toFixed(2));
    }
  }

  updateGaugePct(85);

  // 2. Interactive speedometer preset buttons
  if (presetsWrap) {
    const presetBtns = presetsWrap.querySelectorAll('.pin-mini-glass-icon');
    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        presetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const pct = parseInt(btn.getAttribute('data-pct') || '85', 10);
        const sub = btn.getAttribute('data-sub') || 'Max Rebate';
        const title = btn.getAttribute('data-title') || 'SAGFX ECN Rails';

        if (speedoVal) speedoVal.textContent = pct + '%';
        if (speedoSub) speedoSub.textContent = sub;
        if (speedoTitle) speedoTitle.textContent = title;
        if (row1Lbl) row1Lbl.textContent = btn.getAttribute('data-row1-lbl') || 'Latency';
        if (row1Val) row1Val.textContent = btn.getAttribute('data-row1-val') || '<0.4 ms';
        if (row2Lbl) row2Lbl.textContent = btn.getAttribute('data-row2-lbl') || 'Raw Spread';
        if (row2Val) row2Val.textContent = btn.getAttribute('data-row2-val') || '0.0 Pips';

        updateGaugePct(pct);
      });
    });
  }

  // 3. Interactive Smart Routing Toggle Switch
  if (smartSwitch) {
    smartSwitch.addEventListener('click', () => {
      const isOff = smartSwitch.classList.toggle('is-off');
      smartSwitch.setAttribute('aria-pressed', isOff ? 'false' : 'true');
      if (smartStatusTxt) smartStatusTxt.textContent = isOff ? 'Off' : 'On';
      if (autoModeText) autoModeText.textContent = isOff ? 'Manual' : 'Auto mode';
      if (autoModeDot) {
        autoModeDot.style.background = isOff ? '#94a3b8' : '#4ade80';
        autoModeDot.style.boxShadow = isOff ? 'none' : '0 0 8px #4ade80';
      }
      if (speedoDot) {
        speedoDot.setAttribute('fill', isOff ? '#94a3b8' : '#4ade80');
      }
    });
  }

  // 4. Segmented Tab Switcher & Horizontal Snap Scroll Sync
  const tabBtns = tabsWrap ? tabsWrap.querySelectorAll('.pin-hud-tab-btn') : [];
  const cards = carousel.querySelectorAll('.pin-mobile-card');

  function scrollToCardIdx(idx) {
    const targetCard = cards[idx];
    if (!targetCard) return;
    carousel.scrollTo({
      left: idx * (targetCard.offsetWidth + 14),
      behavior: 'smooth'
    });
    tabBtns.forEach((b, i) => b.classList.toggle('active', i === idx));
  }

  tabBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => scrollToCardIdx(idx));
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => scrollToCardIdx(1));
  }

  // Sync active tab on swipe
  let scrollDebounce = null;
  carousel.addEventListener('scroll', () => {
    if (scrollDebounce) clearTimeout(scrollDebounce);
    scrollDebounce = setTimeout(() => {
      const cardW = cards[0] ? cards[0].offsetWidth + 14 : 340;
      const idx = Math.round(carousel.scrollLeft / cardW);
      const clampedIdx = Math.max(0, Math.min(cards.length - 1, idx));
      tabBtns.forEach((b, i) => b.classList.toggle('active', i === clampedIdx));
    }, 60);
  }, { passive: true });
}

/* ==========================================================================
   PINTEREST MOTIVATION VS DISCIPLINE EQUITY CURVE ENGINE (pin.it/4EWCD5mPw)
   Pre-sampled Bezier points, dynamic green->crimson burn, moving arrow,
   live wet-floor reflection, interactive phase pills, and ECO freeze safe
   ========================================================================== */
function initDisciplineLoopAnimation() {
  const stageCard = document.getElementById('pinDisciplineStage');
  const svg = document.getElementById('pinDisciplineSvg');
  const mainPath = document.getElementById('pinCurveMainPath');
  const reflectPath = document.getElementById('pinReflectPath');
  const areaPath = document.getElementById('pinAreaFillPath');
  const arrowTip = document.getElementById('pinCurveArrow');
  const reflectArrow = document.getElementById('pinReflectArrow');
  const phaseTitle = document.getElementById('pinStageTitle');
  const gridDots = document.getElementById('pinGridDots');

  const btnMotivation = document.getElementById('discBtnMotivation');
  const btnDiscipline = document.getElementById('discBtnDiscipline');
  const metricRisk = document.getElementById('discMetricRisk');
  const metricStruct = document.getElementById('discMetricStruct');
  const metricOutcome = document.getElementById('discMetricOutcome');

  if (!stageCard || !svg || !mainPath || !areaPath) return;

  // 1. Render subtle coordinate intersection dots
  if (gridDots && gridDots.children.length === 0) {
    const xs = [88, 134, 180, 226, 272, 318];
    const ys = [58, 90, 122, 154, 186, 218];
    xs.forEach(x => {
      ys.forEach(y => {
        const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dot.setAttribute('cx', x);
        dot.setAttribute('cy', y);
        dot.setAttribute('r', '1.1');
        gridDots.appendChild(dot);
      });
    });
  }

  // 2. Define high-fidelity Bezier curves matching Pinterest Motivation/Discipline motion
  const D_MOTIVATION = 'M 42 250 C 68 175 94 72 126 72 C 154 72 162 168 190 168 C 210 168 216 126 232 126 C 260 126 284 188 314 250';
  const D_DISCIPLINE = 'M 42 250 L 50 247 C 68 238 82 214 98 214 C 110 214 114 224 124 222 C 142 218 156 184 174 184 C 186 184 190 194 202 190 C 222 184 240 144 264 118 C 290 88 308 42 326 4';

  function samplePathPoints(dString, steps = 110) {
    const temp = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    temp.setAttribute('d', dString);
    svg.appendChild(temp);
    const total = temp.getTotalLength();
    const pts = [];
    for (let i = 0; i <= steps; i++) {
      const len = (total * i) / steps;
      const p = temp.getPointAtLength(len);
      const pPrev = temp.getPointAtLength(Math.max(0, len - 2.5));
      const ang = (Math.atan2(p.y - pPrev.y, p.x - pPrev.x) * 180) / Math.PI;
      pts.push({ x: +p.x.toFixed(1), y: +p.y.toFixed(1), ang: +ang.toFixed(1) });
    }
    svg.removeChild(temp);
    return pts;
  }

  const ptsMotivation = samplePathPoints(D_MOTIVATION);
  const ptsDiscipline = samplePathPoints(D_DISCIPLINE);

  function buildPolyD(pts, count) {
    const sliceEnd = Math.max(1, Math.min(pts.length - 1, count));
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i <= sliceEnd; i++) {
      d += ` L ${pts[i].x} ${pts[i].y}`;
    }
    return {
      lineD: d,
      areaD: `${d} L ${pts[sliceEnd].x} 250 L ${pts[0].x} 250 Z`,
      tip: pts[sliceEnd]
    };
  }

  function lerpColorRGB(t) {
    // Smooth interpolation from Neon Green (#22c55e) -> Amber -> Neon Red (#ef4444)
    const r = Math.round(34 + (239 - 34) * t);
    const g = Math.round(197 + (68 - 197) * t);
    const b = Math.round(94 + (68 - 94) * t);
    return `rgb(${r}, ${g}, ${b})`;
  }

  let currentPhase = 'motivation';
  let phaseStartTs = null;
  let rafId = null;
  let manualHold = false;

  const PHASE_DUR_MS = 3800; // ~3.8s per phase (draw ~2.9s + hold ~0.9s)
  const DRAW_RATIO = 0.76;

  function setPhaseMeta(phase, isCrashColor) {
    if (phase === 'motivation') {
      if (phaseTitle && phaseTitle.textContent !== 'MOTIVATION') {
        phaseTitle.textContent = 'MOTIVATION';
      }
      if (btnMotivation) btnMotivation.classList.add('active');
      if (btnDiscipline) btnDiscipline.classList.remove('active');
      if (isCrashColor) {
        stageCard.classList.add('state-crash');
        stageCard.classList.remove('state-compound');
      } else {
        stageCard.classList.remove('state-crash');
        stageCard.classList.add('state-compound');
      }
      if (metricRisk) {
        metricRisk.textContent = 'Over-Leveraged';
        metricRisk.style.color = isCrashColor ? '#f87171' : '#4ade80';
      }
      if (metricStruct) {
        metricStruct.textContent = isCrashColor ? 'Liquidity Wipeout' : 'Euphoria Spike';
        metricStruct.style.color = isCrashColor ? '#fca5a5' : '#38bdf8';
      }
      if (metricOutcome) {
        metricOutcome.textContent = isCrashColor ? '-100% Margin Call' : 'Temporary High';
        metricOutcome.style.color = isCrashColor ? '#ef4444' : '#fbbf24';
      }
    } else {
      if (phaseTitle && phaseTitle.textContent !== 'DISCIPLINE') {
        phaseTitle.textContent = 'DISCIPLINE';
      }
      if (btnDiscipline) btnDiscipline.classList.add('active');
      if (btnMotivation) btnMotivation.classList.remove('active');
      stageCard.classList.remove('state-crash');
      stageCard.classList.add('state-compound');

      if (metricRisk) {
        metricRisk.textContent = '1% Fixed Risk';
        metricRisk.style.color = '#4ade80';
      }
      if (metricStruct) {
        metricStruct.textContent = 'Higher Highs / Lows';
        metricStruct.style.color = '#38bdf8';
      }
      if (metricOutcome) {
        metricOutcome.textContent = 'Compound Edge';
        metricOutcome.style.color = '#4ade80';
      }
    }
  }

  function renderAt(phase, progress) {
    const pts = phase === 'motivation' ? ptsMotivation : ptsDiscipline;
    const drawP = Math.min(1, progress / DRAW_RATIO);
    // Ease out slightly on discipline breakout
    const easedP = phase === 'discipline' ? Math.pow(drawP, 0.96) : drawP;
    const idx = Math.max(1, Math.round(easedP * (pts.length - 1)));
    const poly = buildPolyD(pts, idx);

    let strokeColor = '#22c55e';
    let areaFill = 'url(#pinAreaGreen)';
    let isCrash = false;

    if (phase === 'motivation') {
      // Transition from green -> crimson red as curve drops past first peak (easedP 0.42 -> 0.56)
      if (easedP >= 0.42) {
        const burnT = Math.min(1, (easedP - 0.42) / 0.14);
        strokeColor = lerpColorRGB(burnT);
        isCrash = burnT > 0.5;
        if (isCrash) areaFill = 'url(#pinAreaRed)';
      }
    } else {
      // Subtle red tick at very start of discipline curve (0 -> 0.04) matching Pinterest clip
      if (easedP < 0.04) {
        strokeColor = '#ef4444';
      }
    }

    mainPath.setAttribute('d', poly.lineD);
    mainPath.setAttribute('stroke', strokeColor);
    reflectPath.setAttribute('d', poly.lineD);
    reflectPath.setAttribute('stroke', strokeColor);
    areaPath.setAttribute('d', poly.areaD);
    areaPath.setAttribute('fill', areaFill);

    // Position oriented arrowhead tip
    const showArrow = easedP > 0.01 && (phase === 'motivation' ? easedP < 0.99 : poly.tip.y > 14);
    if (arrowTip && reflectArrow) {
      if (showArrow) {
        const tr = `translate(${poly.tip.x}, ${poly.tip.y}) rotate(${poly.tip.ang})`;
        arrowTip.setAttribute('transform', tr);
        arrowTip.setAttribute('fill', strokeColor);
        arrowTip.style.opacity = '1';
        reflectArrow.setAttribute('transform', tr);
        reflectArrow.setAttribute('fill', strokeColor);
        reflectArrow.style.opacity = '1';
      } else {
        arrowTip.style.opacity = '0';
        reflectArrow.style.opacity = '0';
      }
    }

    setPhaseMeta(phase, isCrash);
  }

  function frameLoop(ts) {
    if (manualHold) {
      rafId = null;
      return;
    }
    if (document.documentElement.classList.contains('fx-frozen')) {
      renderAt('discipline', 1);
      rafId = null;
      return;
    }

    if (!phaseStartTs) phaseStartTs = ts;
    const elapsed = ts - phaseStartTs;
    if (elapsed >= PHASE_DUR_MS) {
      currentPhase = currentPhase === 'motivation' ? 'discipline' : 'motivation';
      phaseStartTs = ts;
      renderAt(currentPhase, 0.01);
    } else {
      renderAt(currentPhase, elapsed / PHASE_DUR_MS);
    }

    rafId = requestAnimationFrame(frameLoop);
  }

  function jumpToPhase(phase) {
    manualHold = false;
    currentPhase = phase;
    phaseStartTs = performance.now();
    renderAt(currentPhase, document.documentElement.classList.contains('fx-frozen') ? 1 : 0.01);
    if (!rafId && !document.documentElement.classList.contains('fx-frozen')) {
      rafId = requestAnimationFrame(frameLoop);
    }
  }

  if (btnMotivation) {
    btnMotivation.addEventListener('click', () => jumpToPhase('motivation'));
  }
  if (btnDiscipline) {
    btnDiscipline.addEventListener('click', () => jumpToPhase('discipline'));
  }

  // Direct phase/progress hook for deterministic visual inspection
  stageCard.setPhaseProgress = (phase, progress, lock = true) => {
    manualHold = lock;
    currentPhase = phase;
    renderAt(phase, progress);
  };

  // Resume smoothly if Eco Freeze toggled off
  const fxObserver = new MutationObserver(() => {
    const frozen = document.documentElement.classList.contains('fx-frozen');
    if (frozen) {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      renderAt('discipline', 1);
    } else if (!rafId) {
      phaseStartTs = performance.now();
      rafId = requestAnimationFrame(frameLoop);
    }
  });
  fxObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

  // Kick off live loop
  if (document.documentElement.classList.contains('fx-frozen')) {
    renderAt('discipline', 1);
  } else {
    rafId = requestAnimationFrame(frameLoop);
  }
}
