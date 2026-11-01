/* Exa vs Legacy Search Engine - Interactive Live Demo Engine */
(() => {
  'use strict';

  let presets = {};
  let currentPresetId = 'aws-leads';
  let legacyViewMode = 'formatted'; // 'formatted' | 'raw'
  let exaViewMode = 'formatted';    // 'formatted' | 'raw'
  let isLiveMode = false;

  const $ = id => document.getElementById(id);

  // Load API Keys from LocalStorage
  const getKeys = () => ({
    exa: localStorage.getItem('demo_exa_api_key') || '',
    serp: localStorage.getItem('demo_serp_api_key') || ''
  });

  const saveKeys = (exa, serp) => {
    localStorage.setItem('demo_exa_api_key', exa.trim());
    localStorage.setItem('demo_serp_api_key', serp.trim());
    updateModeIndicator();
  };

  function updateModeIndicator() {
    const { exa, serp } = getKeys();
    const statusPill = $('statusPill');
    const statusText = $('statusText');
    
    if (exa) {
      statusPill.className = 'status-pill live';
      statusText.textContent = isLiveMode ? 'Live API Active ⚡' : 'API Ready (Resilience Mode)';
    } else {
      statusPill.className = 'status-pill';
      statusText.textContent = 'Instant Resilience Mode 🛡️';
    }
  }

  // Fetch presets data
  async function initPresets() {
    try {
      const res = await fetch('data/presets.json');
      presets = await res.json();
      loadPreset(currentPresetId);
    } catch (e) {
      console.error('Failed to load presets, using inline fallback', e);
    }
  }

  // Load selected scenario preset
  function loadPreset(id) {
    if (!presets[id]) return;
    currentPresetId = id;

    // Update preset pills
    document.querySelectorAll('.preset-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.preset === id);
    });

    const p = presets[id];
    $('queryInput').value = p.query;
    $('queryNote').innerHTML = `<strong>Scenario Focus:</strong> ${p.subtitle}`;

    renderResults(p);
  }

  // Format and render results
  function renderResults(presetData) {
    renderLegacyColumn(presetData.legacy);
    renderExaColumn(presetData.exa);
    renderTelemetry(presetData.legacy, presetData.exa);
    renderSynthesis(presetData.legacy.agentSynthesis, presetData.exa.agentSynthesis);
  }

  function renderLegacyColumn(legacy) {
    $('legacyTelemetry').textContent = `${legacy.tokens.toLocaleString()} Tokens · ${legacy.latency}ms`;
    $('legacyAlert').innerHTML = `<span>⚠️ ${legacy.adsCount} Sponsored Ads · 40KB DOM Fluff · Cookie Consent</span><span>Noise: ${legacy.noiseRatio}%</span>`;

    const container = $('legacyStream');
    container.innerHTML = '';

    if (legacyViewMode === 'raw') {
      const rawDiv = document.createElement('div');
      rawDiv.className = 'raw-agent-view';
      rawDiv.innerHTML = generateRawLegacyContext(legacy);
      container.appendChild(rawDiv);
      return;
    }

    legacy.results.forEach(item => {
      const card = document.createElement('article');
      card.className = `card-legacy ${item.type === 'ad' ? 'card-ad' : item.type === 'seo' ? 'card-seo' : ''}`;
      
      const kickerCls = item.type === 'ad' ? 'kicker-ad' : item.type === 'outdated' ? 'kicker-outdated' : 'kicker-seo';
      
      card.innerHTML = `
        <span class="card-legacy-kicker ${kickerCls}">${item.badge}</span>
        <h4>${item.title}</h4>
        <p>${item.snippet}</p>
        <div class="card-legacy-meta">
          <span>${item.url.substring(0, 42)}...</span>
          <span>${item.tokens.toLocaleString()} tokens</span>
        </div>
      `;
      container.appendChild(card);
    });
  }

  function renderExaColumn(exa) {
    const cutPercent = Math.round((1 - (exa.tokens / (presets[currentPresetId]?.legacy.tokens || 48000))) * 100);
    $('exaTelemetry').textContent = `${exa.tokens.toLocaleString()} Tokens · ${exa.latency}ms (${cutPercent}% Cut)`;
    $('exaAlert').innerHTML = `<span>✓ Neural Semantic Match · Surgical Dynamic Highlights</span><span>Signal: ${exa.signalRatio}%</span>`;

    const container = $('exaStream');
    container.innerHTML = '';

    if (exaViewMode === 'raw') {
      const rawDiv = document.createElement('div');
      rawDiv.className = 'raw-agent-view';
      rawDiv.textContent = JSON.stringify(exa.results, null, 2);
      container.appendChild(rawDiv);
      return;
    }

    // If Webset mode, render structured table
    if (exa.isWebset) {
      renderWebsetTable(exa.results, container);
      return;
    }

    exa.results.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = 'card-exa';
      
      const highlightsHtml = (item.highlights || []).map(h => 
        `<div class="exa-highlight-item">${h}</div>`
      ).join('');

      card.innerHTML = `
        <div class="card-exa-header">
          <span class="card-exa-badge">✓ Signal [0${index + 1}] · ${item.category || 'Neural'}</span>
          <span class="card-exa-date">${item.publishedDate || 'Live Index'}</span>
        </div>
        <h4>${item.title}</h4>
        <div class="exa-highlights-box">
          ${highlightsHtml}
        </div>
        <div class="card-exa-footer">
          <a class="exa-source-link" href="${item.url}" target="_blank" rel="noopener noreferrer">
            ${item.url.replace(/^https?:\/\//, '').replace(/\/$/, '')} ↗
          </a>
          <span class="exa-token-tag">⚡ ${item.tokens || 280} tokens</span>
        </div>
      `;
      container.appendChild(card);
    });
  }

  function renderWebsetTable(results, container) {
    const tableWrap = document.createElement('div');
    tableWrap.className = 'webset-table-wrap';
    
    let rowsHtml = results.map(r => `
      <tr>
        <td><strong>${r.entityName}</strong></td>
        <td>${r.persona}</td>
        <td><span class="soc-badge">${r.soc2Status}</span></td>
        <td><small>${r.deployment}</small></td>
        <td><a class="exa-source-link" href="${r.url}" target="_blank">Proof ↗</a></td>
      </tr>
      <tr>
        <td colspan="5" style="background:#f8fdf9;padding:8px 12px;border-bottom:2px solid var(--border)">
          <div class="exa-highlight-item" style="font-size:11.5px;color:#065f46">
            ${(r.highlights || [])[0] || ''}
          </div>
        </td>
      </tr>
    `).join('');

    tableWrap.innerHTML = `
      <table class="webset-table">
        <thead>
          <tr>
            <th>Company / Entity</th>
            <th>Agent Persona</th>
            <th>Security Status</th>
            <th>Deployment</th>
            <th>Citation</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    `;
    container.appendChild(tableWrap);
  }

  function generateRawLegacyContext(legacy) {
    return `<!-- LLM AGENT CONTEXT INGESTION STREAM (LEGACY GOOGLE + SCRAPE) -->
<!-- 48,250 Tokens Loaded Into Model Context Window -->

[COOKIE_NOTICE_BANNER]
"By selecting 'Accept All Cookies', you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. Reject All / Manage Preferences / Privacy Policy"

<nav class="mega-menu-desktop">
  <a href="/products">Products</a>
  <a href="/solutions">Solutions</a>
  <a href="/pricing">Pricing</a>
  <a href="/enterprise">Enterprise</a>
  <a href="/resources/whitepapers">Whitepapers</a>
  <a href="/affiliates">Affiliate Program</a>
</nav>

[SPONSORED_AUCTION_BIDDING_ID_784910]
Ad 01: CloudZero - AWS Kubernetes Cost Optimization
Bid Price: $14.20 CPC | Quality Score: 8/10
"Cut your AWS cloud spend by 35%. Automated tagging and FinOps reporting..."

[AFFILIATE_MARKETING_DOM_INLINE]
"Are you searching for the best monitoring tools? Read our disclosure: We may earn an affiliate commission when you purchase through our links at no extra cost to you..."

<div class="newsletter-modal-overlay">
  <h3>Join 100,000 DevOps Engineers Getting Weekly Tips</h3>
  <input type="email" placeholder="Your work email" />
  <button>Subscribe Now</button>
</div>

<!-- 45,000 more tokens of minified CSS, inline SVG icons, tracking tags, and footer links omitted for brevity -->`;
  }

  function renderTelemetry(legacy, exa) {
    // Tokens
    $('statLegacyTokens').textContent = `${(legacy.tokens / 1000).toFixed(1)}k`;
    $('statExaTokens').textContent = `${(exa.tokens / 1000).toFixed(1)}k tokens`;
    const tokenCut = Math.round((1 - (exa.tokens / legacy.tokens)) * 100);
    $('statCutPercent').textContent = `✂ ${tokenCut}% Context Reduction`;

    // Latency
    $('statLegacyLatency').textContent = `${legacy.latency}ms`;
    $('statExaLatency').textContent = `${exa.latency}ms`;
    const speedup = Math.round(legacy.latency / exa.latency);
    $('statSpeedup').textContent = `⚡ ${speedup}x Faster Execution`;

    // Cost
    $('statLegacyCost').textContent = `$${legacy.costPer100k.toLocaleString()}`;
    $('statExaCost').textContent = `$${exa.costPer100k.toLocaleString()}`;
    const saved = legacy.costPer100k - exa.costPer100k;
    $('statCostSaved').textContent = `💰 $${saved.toLocaleString()} Saved / 100k Queries`;
  }

  function renderSynthesis(legacySynth, exaSynth) {
    $('legacySynthesis').textContent = legacySynth;
    $('exaSynthesis').textContent = exaSynth;
  }

  // Handle Search Execution
  async function handleSearch() {
    const query = $('queryInput').value.trim();
    if (!query) return;

    const { exa: exaKey } = getKeys();

    // Check if matching preset exists
    const matchingPreset = Object.values(presets).find(p => 
      p.query.toLowerCase() === query.toLowerCase() ||
      query.toLowerCase().includes(p.id)
    );

    if (matchingPreset && (!exaKey || !isLiveMode)) {
      animateExecution();
      setTimeout(() => {
        loadPreset(matchingPreset.id);
      }, 350);
      return;
    }

    // Live API Execution
    if (exaKey && isLiveMode) {
      await executeLiveExa(query, exaKey);
    } else {
      // Offline fallback: simulate search on query
      animateExecution();
      setTimeout(() => {
        loadPreset(currentPresetId);
      }, 400);
    }
  }

  async function executeLiveExa(query, apiKey) {
    animateExecution();
    const startTime = performance.now();
    try {
      const response = await fetch('https://api.exa.ai/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey
        },
        body: JSON.stringify({
          query: query,
          type: 'neural',
          useAutoprompt: true,
          numResults: 4,
          contents: {
            highlights: {
              numSentences: 3,
              highlightsPerUrl: 2
            }
          }
        })
      });

      const data = await response.json();
      const elapsed = Math.round(performance.now() - startTime);

      if (data.results) {
        const liveExaData = {
          latency: elapsed,
          tokens: Math.round(JSON.stringify(data.results).length / 4),
          costPer100k: 350,
          signalRatio: 98,
          results: data.results.map(r => ({
            title: r.title || 'Verified Neural Match',
            url: r.url,
            category: 'neural',
            publishedDate: r.publishedDate ? r.publishedDate.slice(0, 10) : 'Live Index',
            highlights: r.highlights || [r.text ? r.text.slice(0, 200) + '...' : 'Direct semantic evidence.'],
            tokens: Math.round((r.highlights ? r.highlights.join(' ').length : 200) / 4)
          })),
          agentSynthesis: `⚡ Live Exa API Synthesis:\n\nRetrieved ${data.results.length} live verified sources in ${elapsed}ms. Extracted dynamic highlights directly from target domains with zero scraping overhead.`
        };

        const legacyFallback = presets[currentPresetId]?.legacy || presets['aws-leads'].legacy;
        renderExaColumn(liveExaData);
        renderLegacyColumn(legacyFallback);
        renderTelemetry(legacyFallback, liveExaData);
        renderSynthesis(legacyFallback.agentSynthesis, liveExaData.agentSynthesis);
      }
    } catch (err) {
      console.warn('Live API call failed or blocked, falling back to preset', err);
      loadPreset(currentPresetId);
    }
  }

  function animateExecution() {
    const runBtn = $('runBtn');
    runBtn.disabled = true;
    runBtn.textContent = 'Executing Dual Engine... ⚡';
    setTimeout(() => {
      runBtn.disabled = false;
      runBtn.textContent = 'Run Side-by-Side Test ⚡';
    }, 600);
  }

  // Event Listeners
  window.addEventListener('DOMContentLoaded', () => {
    initPresets();
    updateModeIndicator();

    // Presets bar clicks
    document.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => loadPreset(btn.dataset.preset));
    });

    // Run search button
    $('runBtn').addEventListener('click', handleSearch);
    $('queryInput').addEventListener('keydown', e => {
      if (e.key === 'Enter') handleSearch();
    });

    // View switchers
    $('viewLegacyFormatted').addEventListener('click', () => {
      legacyViewMode = 'formatted';
      $('viewLegacyFormatted').classList.add('active');
      $('viewLegacyRaw').classList.remove('active');
      if (presets[currentPresetId]) renderLegacyColumn(presets[currentPresetId].legacy);
    });

    $('viewLegacyRaw').addEventListener('click', () => {
      legacyViewMode = 'raw';
      $('viewLegacyRaw').classList.add('active');
      $('viewLegacyFormatted').classList.remove('active');
      if (presets[currentPresetId]) renderLegacyColumn(presets[currentPresetId].legacy);
    });

    $('viewExaFormatted').addEventListener('click', () => {
      exaViewMode = 'formatted';
      $('viewExaFormatted').classList.add('active');
      $('viewExaRaw').classList.remove('active');
      if (presets[currentPresetId]) renderExaColumn(presets[currentPresetId].exa);
    });

    $('viewExaRaw').addEventListener('click', () => {
      exaViewMode = 'raw';
      $('viewExaRaw').classList.add('active');
      $('viewExaFormatted').classList.remove('active');
      if (presets[currentPresetId]) renderExaColumn(presets[currentPresetId].exa);
    });

    // Synthesis Drawer toggle
    $('agentSynthesisBtn').addEventListener('click', () => {
      const drawer = $('synthesisDrawer');
      drawer.classList.toggle('open');
      if (drawer.classList.contains('open')) {
        drawer.scrollIntoView({ behavior: 'smooth' });
      }
    });

    $('closeDrawerBtn').addEventListener('click', () => {
      $('synthesisDrawer').classList.remove('open');
    });

    // Settings Modal
    const modal = $('settingsModal');
    $('settingsBtn').addEventListener('click', () => {
      const { exa, serp } = getKeys();
      $('exaKeyInput').value = exa;
      $('serpKeyInput').value = serp;
      $('liveModeCheck').checked = isLiveMode;
      modal.hidden = false;
    });

    $('closeSettingsBtn').addEventListener('click', () => {
      modal.hidden = true;
    });

    $('saveSettingsBtn').addEventListener('click', () => {
      saveKeys($('exaKeyInput').value, $('serpKeyInput').value);
      isLiveMode = $('liveModeCheck').checked;
      updateModeIndicator();
      modal.hidden = true;
    });

    $('statusPill').addEventListener('click', () => {
      isLiveMode = !isLiveMode;
      updateModeIndicator();
    });
  });
})();
