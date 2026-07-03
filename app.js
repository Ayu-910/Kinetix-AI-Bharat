// Kinetix AI Bharat - Autonomous Enterprise Business Optimizer Engine

// Simulated Indian Enterprise Datasets (in Lakhs & Crores INR)
const DATASETS = {
  techcorp: {
    name: "Tata Digital Enterprise (IT & SaaS)",
    stalledDeals: "₹4.8 Cr",
    expenseWaste: "₹18.5 Lakhs",
    siloScore: "96.2%",
    rdRoi: "4.5x",
    salesDeals: [
      { name: "Infosys Cloud Solutions", value: "₹1.85 Cr", stage: "Procurement Committee Review", days: 52, status: "Critical Bottleneck", action: "Coaching: Provide MSME compliance certificate & fast-track SLA" },
      { name: "HDFC Digital Banking", value: "₹1.60 Cr", stage: "InfoSec & RBI Audit", days: 44, status: "Review Needed", action: "Deploy automated RBI cyber-security data residency proof bot" },
      { name: "Wipro Infra Division", value: "₹1.35 Cr", stage: "Vendor Empanelment", days: 38, status: "Review Needed", action: "Automate GSTIN & PAN ledger verification packet" }
    ],
    expenses: [
      { category: "Cloud Infra", vendor: "AWS India (Mumbai Region)", spend: "₹8.5 Lakhs/mo", flag: "Unutilized Staging Instances", target: "₹5.2 Lakhs/mo", coaching: "Auto-decommission unattached EBS volumes & non-prod nodes" },
      { category: "SaaS Software", vendor: "Global HR Management Tool", spend: "₹6.2 Lakhs/mo", flag: "Duplicate Darwinbox Seats", target: "₹2.8 Lakhs/mo", coaching: "Consolidate active employee seats onto Darwinbox India portal" },
      { category: "Marketing Tech", vendor: "Legacy Ad Agency Retainer", spend: "₹3.8 Lakhs/mo", flag: "Unclaimed GST Input Credit", target: "₹0/mo", coaching: "Reclaim ₹68,000 ITC credit & reallocate budget to WhatsApp API" }
    ],
    insightDirectives: [
      { title: "Procurement Bottleneck Elimination", desc: "Cross-analyzing Zoho CRM & legal emails shows 72% of delay happens during Vendor Empanelment. Automated GSTIN & MSME compliance packet integrated.", impact: "+₹2.8 Cr ARR Acceleration" },
      { title: "Tally & Cloud Spend Rationalization", desc: "Tally Prime telemetry uncovers 3 divisions paying separately for redundant cloud monitoring. Consolidated under single Tata Cloud enterprise account.", impact: "₹42 Lakhs/yr Net Savings" },
      { title: "WhatsApp Customer Feedback Sync", desc: "WhatsApp API telemetry indicates high enterprise demand for regional language support. Prioritized Hindi/Tamil UI in product backlog.", impact: "-4.2% Churn Reduction" }
    ],
    roadmap: [
      { feature: "AI Automated GSTIN & Invoice Reconciler", demand: "Critical (94%)", effort: "Medium (3 wks)", arr: "+₹1.8 Cr", action: "Fast-track R&D Sprint 24 - Kickoff Approved" },
      { feature: "WhatsApp Enterprise B2B Ordering Bot", demand: "High (88%)", effort: "Low (2 wks)", arr: "+₹1.2 Cr", action: "Deploy beta build for Tier-1 enterprise clients" }
    ]
  },
  logistics: {
    name: "Reliance Logistics & Express",
    stalledDeals: "₹8.2 Cr",
    expenseWaste: "₹28.4 Lakhs",
    siloScore: "93.4%",
    rdRoi: "4.1x",
    salesDeals: [
      { name: "Adani Ports Terminal", value: "₹4.50 Cr", stage: "Customs Tariff Clearance", days: 62, status: "Critical Bottleneck", action: "Dispatch automated Indian Customs e-Way bill audit bot" },
      { name: "Mahindra Logistics Hub", value: "₹3.70 Cr", stage: "Fleet Contract Legal", days: 48, status: "Review Needed", action: "Re-index diesel price fluctuation clause dynamically" }
    ],
    expenses: [
      { category: "Fleet Fuel", vendor: "State Toll & Fuel Network", spend: "₹18.0 Lakhs/mo", flag: "Sub-optimal FASTag Routes", target: "₹12.5 Lakhs/mo", coaching: "Integrate GPS route optimization to bypass toll congested corridors" },
      { category: "Warehousing", vendor: "Bhiwandi Logistics Park", spend: "₹10.4 Lakhs/mo", flag: "40% Idle Warehouse Space", target: "₹6.1 Lakhs/mo", coaching: "Sub-lease pallet capacity to e-commerce sellers" }
    ],
    insightDirectives: [
      { title: "Inter-State Transport Clearing", desc: "Telemetry shows FASTag & e-Way bill delays at state borders. Automated FASTag wallet auto-topup deployed.", impact: "₹6.5 Cr Fleet Efficiency" }
    ],
    roadmap: [
      { feature: "Autonomous FASTag & GPS Fleet Tracker AI", demand: "Critical (97%)", effort: "High (6 wks)", arr: "+₹4.2 Cr", action: "Initiate Architecture Blueprint" }
    ]
  },
  retail: {
    name: "Apollo BioHealth Retail",
    stalledDeals: "₹3.4 Cr",
    expenseWaste: "₹11.2 Lakhs",
    siloScore: "97.1%",
    rdRoi: "5.4x",
    salesDeals: [
      { name: "MedPlus Direct Chain", value: "₹2.10 Cr", stage: "State Drug License Approval", days: 36, status: "Review Needed", action: "Automate state regulatory documentation delivery" }
    ],
    expenses: [
      { category: "Packaging", vendor: "Eco-Polymer Manufacturers", spend: "₹7.5 Lakhs/mo", flag: "Raw Material Price Spike", target: "₹4.8 Lakhs/mo", coaching: "Trigger reverse bidding among local Indian packaging vendors" }
    ],
    insightDirectives: [
      { title: "Direct-to-Consumer Quick Commerce", desc: "Analyzed consumer order logs in Mumbai & Bangalore. Shifted inventory to hyper-local dark stores.", impact: "+28% Order Delivery Speed" }
    ],
    roadmap: [
      { feature: "AI Cold-Chain Temperature Sensor Telemetry", demand: "High (92%)", effort: "Medium (3 wks)", arr: "+₹2.5 Cr", action: "Prioritize in Q3 Engineering Sprint" }
    ]
  }
};

let currentDatasetKey = 'techcorp';
let isAudioPlaying = false;

// Initialize Web Application
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSimulator();
  initAudioBriefing();
  initModal();
  initDatasetSelector();
  initAgentRunButtons();
  initComplianceShield();
  initGstReconciler();
  initSwarmCopilot();

  // Load Initial View Data
  loadDataset(currentDatasetKey);
  streamLogs('sales', [
    "🚀 [SYSTEM] Initializing Kinetix AI Bharat Enterprise Swarm...",
    "🔍 [ANALYSIS] Scanning Zoho CRM, Tally Prime ledgers & WhatsApp feeds...",
    "⚠️ [BOTTLENECK] Identified 3 high-value B2B deals stuck in vendor empanelment > 40 days.",
    "💡 [RECOMMENDATION] Formulated automated GSTIN verification & RBI compliance packets.",
    "✅ [STATUS] Pipeline audit complete. Optimization targets updated in INR."
  ]);
});

// Navigation between Agent Tabs
function initNavigation() {
  const navButtons = document.querySelectorAll('.agent-nav-item');
  const viewPanels = document.querySelectorAll('.agent-view-panel');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetAgent = btn.getAttribute('data-agent');

      navButtons.forEach(b => b.classList.remove('active'));
      viewPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetView = document.getElementById(`view-${targetAgent}`);
      if (targetView) {
        targetView.classList.add('active');
        renderChartForAgent(targetAgent);
      }
    });
  });
}

// Render SVG Charts dynamically
function renderChartForAgent(agent) {
  if (agent === 'sales') {
    const chart = document.getElementById('sales-chart');
    chart.innerHTML = `
      <!-- Background Grid -->
      <line x1="40" y1="200" x2="560" y2="200" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4"/>
      <line x1="40" y1="140" x2="560" y2="140" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4"/>
      <line x1="40" y1="80" x2="560" y2="80" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4"/>

      <!-- Bars for Pipeline Stages -->
      <rect x="70" y="50" width="60" height="150" rx="6" fill="url(#cyan-grad)" opacity="0.9"/>
      <text x="100" y="40" fill="#06B6D4" font-size="12" text-anchor="middle" font-weight="bold">₹9.8 Cr</text>
      <text x="100" y="220" fill="#9CA3AF" font-size="11" text-anchor="middle">Empanelled</text>

      <rect x="190" y="80" width="60" height="120" rx="6" fill="url(#cyan-grad)" opacity="0.9"/>
      <text x="220" y="70" fill="#06B6D4" font-size="12" text-anchor="middle" font-weight="bold">₹7.2 Cr</text>
      <text x="220" y="220" fill="#9CA3AF" font-size="11" text-anchor="middle">Tech Review</text>

      <!-- Stalled Stage (Red Alert) -->
      <rect x="310" y="100" width="60" height="100" rx="6" fill="url(#red-grad)"/>
      <text x="340" y="90" fill="#F43F5E" font-size="12" text-anchor="middle" font-weight="bold">₹4.8 Cr ⚠️</text>
      <text x="340" y="220" fill="#F43F5E" font-size="11" text-anchor="middle" font-weight="bold">Procurement Audit</text>

      <rect x="430" y="140" width="60" height="60" rx="6" fill="url(#emerald-grad)"/>
      <text x="460" y="130" fill="#10B981" font-size="12" text-anchor="middle" font-weight="bold">₹3.6 Cr</text>
      <text x="460" y="220" fill="#10B981" font-size="11" text-anchor="middle">Closed Won</text>

      <!-- Gradients -->
      <defs>
        <linearGradient id="cyan-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#06B6D4"/><stop offset="100%" stop-color="rgba(6,182,212,0.2)"/></linearGradient>
        <linearGradient id="red-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F43F5E"/><stop offset="100%" stop-color="rgba(244,63,94,0.2)"/></linearGradient>
        <linearGradient id="emerald-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#10B981"/><stop offset="100%" stop-color="rgba(16,185,129,0.2)"/></linearGradient>
      </defs>
    `;
  } else if (agent === 'expense') {
    const chart = document.getElementById('expense-chart');
    chart.innerHTML = `
      <!-- Donut / Concentric SVG breakdown -->
      <circle cx="200" cy="130" r="80" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="24"/>
      <circle cx="200" cy="130" r="80" fill="none" stroke="#10B981" stroke-width="24" stroke-dasharray="320 500" stroke-dashoffset="0"/>
      <circle cx="200" cy="130" r="80" fill="none" stroke="#F43F5E" stroke-width="24" stroke-dasharray="120 500" stroke-dashoffset="-320"/>
      <circle cx="200" cy="130" r="80" fill="none" stroke="#6366F1" stroke-width="24" stroke-dasharray="60 500" stroke-dashoffset="-440"/>
      
      <text x="200" y="125" fill="#F3F4F6" font-size="20" text-anchor="middle" font-weight="800">₹64.5 L</text>
      <text x="200" y="145" fill="#9CA3AF" font-size="11" text-anchor="middle">Monthly Spend</text>

      <!-- Metric Highlight side cards -->
      <rect x="340" y="40" width="220" height="50" rx="8" fill="rgba(244,63,94,0.1)" stroke="rgba(244,63,94,0.3)"/>
      <text x="355" y="62" fill="#F43F5E" font-size="12" font-weight="bold">Unutilized SaaS & Infra Waste</text>
      <text x="355" y="80" fill="#F3F4F6" font-size="14" font-weight="800">₹18.5 Lakhs / mo</text>

      <rect x="340" y="110" width="220" height="50" rx="8" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.3)"/>
      <text x="355" y="132" fill="#10B981" font-size="12" font-weight="bold">Optimized Target Spend</text>
      <text x="355" y="150" fill="#F3F4F6" font-size="14" font-weight="800">₹46.0 Lakhs / mo</text>
    `;
  } else if (agent === 'insight') {
    const chart = document.getElementById('insight-chart');
    chart.innerHTML = `
      <path d="M 50,180 Q 150,160 250,110 T 450,50 T 550,30" fill="none" stroke="#6366F1" stroke-width="4"/>
      <path d="M 50,180 Q 150,160 250,110 T 450,50 T 550,30 L 550,220 L 50,220 Z" fill="url(#indigo-area)" opacity="0.3"/>
      <circle cx="250" cy="110" r="6" fill="#06B6D4" stroke="#FFF" stroke-width="2"/>
      <circle cx="450" cy="50" r="6" fill="#10B981" stroke="#FFF" stroke-width="2"/>
      <text x="250" y="95" fill="#06B6D4" font-size="11" font-weight="bold" text-anchor="middle">Tally + GST Sync Point</text>
      <text x="450" y="35" fill="#10B981" font-size="11" font-weight="bold" text-anchor="middle">+38% EBITDA Lift</text>
      <defs>
        <linearGradient id="indigo-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6366F1"/><stop offset="100%" stop-color="transparent"/></linearGradient>
      </defs>
    `;
  } else if (agent === 'product') {
    const chart = document.getElementById('product-chart');
    chart.innerHTML = `
      <!-- Quadrant Lines -->
      <line x1="300" y1="20" x2="300" y2="220" stroke="rgba(255,255,255,0.15)" stroke-dasharray="4"/>
      <line x1="40" y1="120" x2="560" y2="120" stroke="rgba(255,255,255,0.15)" stroke-dasharray="4"/>

      <text x="50" y="40" fill="#10B981" font-size="12" font-weight="bold">HIGH DEMAND / FAST SPRINT (PRIORITY 1)</text>
      <text x="320" y="40" fill="#06B6D4" font-size="12" font-weight="bold">HIGH VALUE / STRATEGIC ROADMAP</text>

      <circle cx="160" cy="65" r="16" fill="rgba(16,185,129,0.3)" stroke="#10B981" stroke-width="2"/>
      <text x="160" y="70" fill="#FFF" font-size="11" text-anchor="middle" font-weight="bold">P1</text>

      <circle cx="420" cy="75" r="20" fill="rgba(6,182,212,0.3)" stroke="#06B6D4" stroke-width="2"/>
      <text x="420" y="80" fill="#FFF" font-size="11" text-anchor="middle" font-weight="bold">P2</text>
    `;
  }
}

// Populate dataset into views
function loadDataset(key) {
  const data = DATASETS[key];
  if (!data) return;

  document.getElementById('metric-stalled-deals').innerText = data.stalledDeals;
  document.getElementById('metric-expense-waste').innerHTML = `${data.expenseWaste}<small>/mo</small>`;
  document.getElementById('metric-silo-score').innerText = data.siloScore;
  document.getElementById('metric-rd-roi').innerText = data.rdRoi;

  // Render Sales Table
  const salesTbody = document.getElementById('sales-deals-table');
  salesTbody.innerHTML = data.salesDeals.map(d => `
    <tr>
      <td><strong>${d.name}</strong></td>
      <td class="text-cyan font-mono">${d.value}</td>
      <td>${d.stage}</td>
      <td><span class="badge ${d.days > 45 ? 'amber' : 'cyan'}">${d.days} Days</span></td>
      <td><span class="text-amber">${d.status}</span></td>
      <td><span class="text-emerald">${d.action}</span></td>
    </tr>
  `).join('');

  // Render Expense Table
  const expenseTbody = document.getElementById('expense-table');
  expenseTbody.innerHTML = data.expenses.map(e => `
    <tr>
      <td><strong>${e.vendor}</strong><br><small class="text-muted">${e.category}</small></td>
      <td class="font-mono">${e.spend}</td>
      <td><span class="badge red">${e.flag}</span></td>
      <td class="text-emerald font-mono">${e.target}</td>
      <td>${e.coaching}</td>
    </tr>
  `).join('');

  // Render Insight Directives Grid
  const insightGrid = document.getElementById('insight-directives-grid');
  insightGrid.innerHTML = data.insightDirectives.map(i => `
    <div class="directive-card">
      <div class="directive-header">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        ${i.title}
      </div>
      <div class="directive-body">${i.desc}</div>
      <div class="directive-impact">Impact Target: ${i.impact}</div>
    </div>
  `).join('');

  // Render Roadmap Table
  const roadTbody = document.getElementById('product-roadmap-table');
  roadTbody.innerHTML = data.roadmap.map(r => `
    <tr>
      <td><strong>${r.feature}</strong></td>
      <td><span class="badge cyan">${r.demand}</span></td>
      <td>${r.effort}</td>
      <td class="text-emerald font-mono">${r.arr}</td>
      <td><span class="text-cyan">${r.action}</span></td>
    </tr>
  `).join('');

  renderChartForAgent('sales');
}

// Simulated Stream Telemetry Logs
function streamLogs(agentKey, logLines) {
  const terminal = document.getElementById(`terminal-${agentKey}`);
  if (!terminal) return;
  terminal.innerHTML = '';

  logLines.forEach((line, index) => {
    setTimeout(() => {
      const timeStr = new Date().toLocaleTimeString();
      const div = document.createElement('div');
      div.className = 'log-line';
      if (line.includes('⚠️') || line.includes('BOTTLENECK')) div.classList.add('warn');
      if (line.includes('✅') || line.includes('Complete') || line.includes('SUCCESS')) div.classList.add('success');
      
      div.innerHTML = `<span class="timestamp">[${timeStr}]</span> ${line}`;
      terminal.appendChild(div);
      terminal.scrollTop = terminal.scrollHeight;
    }, index * 400);
  });
}

// What-If Scenario Simulator logic in INR Lakhs & Crores
function initSimulator() {
  const winLift = document.getElementById('slider-win-lift');
  const expenseCut = document.getElementById('slider-expense-cut');
  const rdVelocity = document.getElementById('slider-rd-velocity');

  function updateSim() {
    document.getElementById('val-win-lift').innerText = `+${winLift.value}%`;
    document.getElementById('val-expense-cut').innerText = `${expenseCut.value}%`;
    document.getElementById('val-rd-velocity').innerText = `${rdVelocity.value}x`;

    const baseSavingsCrores = 0.5;
    const calcSavingsCr = (baseSavingsCrores + (expenseCut.value * 0.03)).toFixed(2);
    const calcRevCr = ((winLift.value * 0.12) + (rdVelocity.value * 0.65)).toFixed(2);

    document.getElementById('sim-projected-savings').innerText = `₹${calcSavingsCr} Cr`;
    document.getElementById('sim-projected-revenue').innerText = `+₹${calcRevCr} Cr`;
  }

  winLift.addEventListener('input', updateSim);
  expenseCut.addEventListener('input', updateSim);
  rdVelocity.addEventListener('input', updateSim);
}

// Executive Audio Briefing Visualizer
function initAudioBriefing() {
  const btn = document.getElementById('btn-play-audio');
  const waveform = document.querySelector('.waveform-container');
  const statusText = document.getElementById('audio-status-text');

  btn.addEventListener('click', () => {
    isAudioPlaying = !isAudioPlaying;
    if (isAudioPlaying) {
      waveform.classList.add('playing');
      statusText.innerHTML = "<strong>Synthesizing Audio (Bharat CXO Briefing):</strong> 'Namaste Executive Leaders. High-priority enterprise deals stuck in vendor empanelment require immediate MSME SLA certificates...'";
      document.getElementById('audio-play-icon').innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
    } else {
      waveform.classList.remove('playing');
      statusText.innerText = "Click to listen to AI-synthesized strategic priorities for Indian CXOs.";
      document.getElementById('audio-play-icon').innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
    }
  });
}

// Dataset Switcher
function initDatasetSelector() {
  const select = document.getElementById('dataset-selector');
  select.addEventListener('change', (e) => {
    currentDatasetKey = e.target.value;
    loadDataset(currentDatasetKey);
  });
}

// Trigger Agent Run Buttons
function initAgentRunButtons() {
  const buttons = document.querySelectorAll('.btn-run-agent');
  buttons.forEach(b => {
    b.addEventListener('click', () => {
      const target = b.getAttribute('data-target');
      streamLogs(target, [
        `🔄 [RE-AUDIT] Triggering autonomous run for ${target.toUpperCase()} agent node...`,
        `📊 [TELEMETRY] Re-indexing Tally Prime, GST Portal & Zoho CRM streams...`,
        `⚡ [NEURAL AGENT] Executing multi-agent optimization routines...`,
        `✅ [COMPLETE] Audit finished. Enterprise indicators updated successfully in INR.`
      ]);
    });
  });
}

// Modal Logic
function initModal() {
  const modal = document.getElementById('ingest-modal');
  const btnOpen = document.getElementById('btn-ingest-data');
  const btnClose = document.getElementById('modal-close');
  const btnCancel = document.getElementById('modal-cancel');
  const btnSubmit = document.getElementById('modal-submit');
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('file-input');

  btnOpen.addEventListener('click', () => modal.classList.add('active'));
  btnClose.addEventListener('click', () => modal.classList.remove('active'));
  btnCancel.addEventListener('click', () => modal.classList.remove('active'));

  dropzone.addEventListener('click', () => fileInput.click());

  btnSubmit.addEventListener('click', () => {
    modal.classList.remove('active');
    streamLogs('insight', [
      "📥 [INGESTION] Received custom Tally / GST telemetry payload...",
      "⚙️ [PARSE] Reconciling HSN codes, ITC credits & deal stages...",
      "🧠 [AGENT SYNTHESIS] Generating dynamic strategic directives...",
      "✅ [SUCCESS] Tally data integrated into swarm workspace successfully."
    ]);
  });

  document.getElementById('btn-export-report').addEventListener('click', () => {
    alert("📑 Executive Strategic Briefing (Bharat Edition) generated successfully! Preparing download packet (PDF/JSON format)...");
  });
}

// B2B Compliance Shield Controller
let activeComplianceDeal = 'infosys';
function initComplianceShield() {
  const dealButtons = document.querySelectorAll('.compliance-deal-btn');
  const activeTitle = document.getElementById('compliance-active-deal-title');
  const verifyBtn = document.getElementById('btn-verify-compliance');
  const msmeBtn = document.getElementById('btn-generate-agreement');
  
  const rbiIcon = document.getElementById('audit-rbi-icon');
  const rbiDesc = document.getElementById('audit-rbi-desc');
  const rbiCheckItem = document.getElementById('audit-rbi-check');

  dealButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      dealButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeComplianceDeal = btn.getAttribute('data-deal');
      
      const dealName = btn.querySelector('span:first-child').innerText;
      activeTitle.innerText = `${dealName} — Compliance Audit`;
      
      // Update check items UI based on deal
      if (activeComplianceDeal === 'wipro') {
        rbiIcon.innerText = '✅';
        rbiDesc.innerText = 'RBI Cyber Security compliance verified';
        rbiCheckItem.classList.add('passed');
        verifyBtn.style.display = 'none';
        msmeBtn.style.display = 'none';
      } else {
        const isVerified = DATASETS.techcorp.salesDeals.some(d => d.name.toLowerCase().includes(activeComplianceDeal) && d.stage === 'Closed Won');
        if (isVerified) {
          rbiIcon.innerText = '✅';
          rbiDesc.innerText = 'RBI Cyber Security compliance verified';
          rbiCheckItem.classList.add('passed');
          verifyBtn.style.display = 'none';
        } else {
          rbiIcon.innerText = '⚠️';
          rbiDesc.innerText = 'Pending verification of data localization compliance certificates';
          rbiCheckItem.classList.remove('passed');
          verifyBtn.style.display = 'inline-flex';
          msmeBtn.style.display = 'inline-flex';
        }
      }
    });
  });

  verifyBtn.addEventListener('click', () => {
    streamLogs('sales', [
      `🔍 [RBI AUDIT] Initializing RBI Cyber Security verification for ${activeComplianceDeal.toUpperCase()}...`,
      `📡 [CONNECT] Fetching localized database hosting telemetry in Mumbai DC...`,
      `🔒 [ENCRYPTION] Auditing TLS 1.3 & data-at-rest keys...`,
      `✅ [SUCCESS] Data localization verified. Sending RBI approval to procurement portal.`
    ]);

    setTimeout(() => {
      rbiIcon.innerText = '✅';
      rbiDesc.innerText = 'RBI Cyber Security compliance verified successfully by Agent Swarm';
      rbiCheckItem.classList.add('passed');
      verifyBtn.style.display = 'none';

      // Update badge
      const activeBadge = document.getElementById(`${activeComplianceDeal}-badge`);
      if (activeBadge) {
        activeBadge.innerText = 'Empanelled';
        activeBadge.className = 'status-indicator success';
      }

      // Update Dataset Values and Recalculate
      if (activeComplianceDeal === 'infosys') {
        DATASETS.techcorp.salesDeals[0].stage = 'Closed Won';
        DATASETS.techcorp.salesDeals[0].status = 'Empanelled (SLA Signed) ✅';
        DATASETS.techcorp.salesDeals[0].action = 'Handoff to project engineering team complete.';
        DATASETS.techcorp.stalledDeals = '₹2.95 Cr';
      } else if (activeComplianceDeal === 'hdfc') {
        DATASETS.techcorp.salesDeals[1].stage = 'Closed Won';
        DATASETS.techcorp.salesDeals[1].status = 'Empanelled (SLA Signed) ✅';
        DATASETS.techcorp.salesDeals[1].action = 'Integration pipeline active.';
        DATASETS.techcorp.stalledDeals = '₹3.20 Cr';
      }

      loadDataset(currentDatasetKey);
      alert(`🎉 Compliance approved! ${activeComplianceDeal === 'infosys' ? 'Infosys' : 'HDFC'} deal has been successfully verified & added to Closed Won.`);
    }, 1600);
  });

  msmeBtn.addEventListener('click', () => {
    streamLogs('sales', [
      `📜 [MSME DRAFT] Compiling standard Class-A MSME agreement clauses...`,
      `✍️ [LEGAL AUDIT] Verifying payment terms and arbitration clauses...`,
      `📤 [DISPATCH] SLA Draft pushed to client procurement officer via email & WhatsApp...`
    ]);
    alert(`📜 MSME Agreement generated successfully for ${activeComplianceDeal === 'infosys' ? 'Infosys' : 'HDFC'}! Sent to procurement office.`);
  });
}

// GST Reconciler Controller
function initGstReconciler() {
  const syncBtn = document.getElementById('btn-run-gst-sync');
  const pingBtn = document.getElementById('btn-ping-vendor');
  const gstBadge = document.getElementById('hdfc-gst-badge');
  const gstAction = document.getElementById('hdfc-gst-action');

  syncBtn.addEventListener('click', () => {
    streamLogs('expense', [
      "🔄 [GSTN SYNC] Authenticating GSTR-2B reconciliation handshake...",
      "📥 [GST Portal] Pulling latest invoice registries for PAN AAACT4218G...",
      "🔍 [MATCHING] Cross-referencing purchase ledger entries with vendor returns...",
      "✅ [SUCCESS] GST sync complete. Missing vendor returns flagged."
    ]);
  });

  pingBtn.addEventListener('click', () => {
    streamLogs('expense', [
      "💬 [WHATSAPP] Dispatching automated GSTR-1 warning to Global HR Management Tool finance lead...",
      "📡 [STATUS] Alert delivered. Log ID: WA-GST-89422."
    ]);
    
    gstBadge.innerText = 'Alerted 💬';
    gstBadge.className = 'badge amber';
    gstAction.innerText = 'WhatsApp reminder sent. Awaiting vendor GSTR-1 filing.';
    pingBtn.disabled = true;
    pingBtn.innerText = 'Alerted';
  });
}

// Swarm Copilot Chat Swarm Simulator
function initSwarmCopilot() {
  const input = document.getElementById('copilot-input');
  const sendBtn = document.getElementById('btn-send-copilot');
  const messagesContainer = document.getElementById('copilot-messages');
  const suggestions = document.querySelectorAll('.suggestion-chip');

  function addMessage(sender, text, type = 'user') {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-message ${type === 'user' ? 'user-msg' : 'agent-msg ' + type}`;
    
    if (type !== 'user') {
      msgDiv.innerHTML = `<span class="chat-agent-tag">${sender}:</span><p>${text}</p>`;
    } else {
      msgDiv.innerHTML = `<p>${text}</p>`;
    }

    messagesContainer.appendChild(msgDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function handleSend() {
    const text = input.value.trim();
    if (!text) return;

    input.value = '';
    addMessage('', text, 'user');

    // Show Swarm Typing Indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'chat-message agent-msg system';
    typingIndicator.id = 'copilot-typing';
    typingIndicator.innerHTML = `<span class="chat-agent-tag">Kinetix Swarm:</span><p>Querying agents...</p>`;
    messagesContainer.appendChild(typingIndicator);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Simulate Agent Swarm Response
    setTimeout(() => {
      const indicator = document.getElementById('copilot-typing');
      if (indicator) indicator.remove();

      addMessage('Swarm Orchestrator', `Processing query: "${text}". Contacting B2B Sales, Expense, and Insights agents...`, 'system');

      setTimeout(() => {
        if (text.toLowerCase().includes('infosys') || text.toLowerCase().includes('unblock')) {
          addMessage('Sales Optimizer Agent', 'Infosys Cloud B2B deal is currently stuck on RBI Cyber Security compliance. Go to B2B Pipeline Optimizer page and click "Verify RBI Compliance" to unblock it.', 'sales');
        } else if (text.toLowerCase().includes('gst') || text.toLowerCase().includes('audit')) {
          addMessage('Expense Intelligence Agent', 'GSTR-2B sync reports Global HR Tool is missing their GSTR-1 return, blocking ₹94,576 in tax credit. Re-syncing Tally ledger to check updates.', 'expense');
        } else if (text.toLowerCase().includes('aws') || text.toLowerCase().includes('waste') || text.toLowerCase().includes('expense')) {
          addMessage('Expense Intelligence Agent', 'AWS Mumbai is reporting ₹3.3 Lakhs in idle staging instances. I recommend de-provisioning.', 'expense');
        } else {
          addMessage('Raw Data Insights Agent', 'Swarm telemetry indicates connected databases are syncing normally. Multi-silo efficiency score is 96.2%. Try auditing compliance check grids.', 'insight');
        }
      }, 1000);

    }, 800);
  }

  sendBtn.addEventListener('click', handleSend);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
  });

  suggestions.forEach(chip => {
    chip.addEventListener('click', () => {
      input.value = chip.getAttribute('data-query');
      handleSend();
    });
  });
}

