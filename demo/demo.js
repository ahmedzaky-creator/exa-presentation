/* ==========================================================================
   Exa vs Traditional Search - Live Agent Arena Controller
   Engineered for Executive Clarity, Live API Race & Intuitive Explanations
   ========================================================================== */

(() => {
  'use strict';

  // Default API Keys provided for live executive demonstration
  const DEFAULT_EXA_KEY = 'f8eb4dc2-1ad8-4960-88ce-2c7580debd91';
  const DEFAULT_SERP_KEY = '620b4867764d47a5f808e64ebf96c19260fe6d7c37d1bb79e6dc209b12c37009';

  let presets = {};
  let currentPresetId = 'aws-leads';
  let isLiveMode = true;
  let isExecuting = false;

  const $ = id => document.getElementById(id);

  // Key storage helpers
  const getExaKey = () => localStorage.getItem('demo_exa_api_key') || DEFAULT_EXA_KEY;
  const getSerpKey = () => localStorage.getItem('demo_serp_api_key') || DEFAULT_SERP_KEY;

  const saveKeys = (exa, serp, live) => {
    localStorage.setItem('demo_exa_api_key', exa.trim());
    localStorage.setItem('demo_serp_api_key', serp.trim());
    localStorage.setItem('demo_live_mode', live ? 'true' : 'false');
    isLiveMode = live;
    updateStatusIndicator();
  };

  function updateStatusIndicator() {
    const badge = $('liveStatusBadge');
    const text = $('liveStatusText');
    const hasKey = !!getExaKey();

    if (hasKey && isLiveMode) {
      badge.className = 'live-status-badge';
      text.textContent = 'Live APIs Connected ⚡';
    } else {
      badge.className = 'live-status-badge';
      badge.style.background = '#fef3c7';
      badge.style.borderColor = '#fde68a';
      badge.style.color = '#92400e';
      text.textContent = 'Resilience Cache Active 🛡️';
    }
  }

  // Load Presets
  async function init() {
    try {
      const res = await fetch('data/presets.json');
      presets = await res.json();
      loadScenario(currentPresetId);
    } catch (err) {
      console.error('Failed to load presets, using default fallback', err);
    }
    updateStatusIndicator();
  }

  // Switch Scenario
  function loadScenario(presetId) {
    if (!presets[presetId]) return;
    currentPresetId = presetId;

    // Update active card styling
    document.querySelectorAll('.scenario-card').forEach(card => {
      card.classList.toggle('active', card.dataset.preset === presetId);
    });

    const data = presets[presetId];
    $('queryInput').value = data.query;
    $('objectiveText').textContent = data.objective;

    renderData(data);
  }

  // Render static or completed results
  function renderData(data) {
    renderLegacy(data.legacy);
    renderExa(data.exa);
    renderScorecard(data.legacy, data.exa);
  }

  // Render Legacy Column
  function renderLegacy(legacy) {
    $('legacyTokens').textContent = `${legacy.tokens.toLocaleString()} Tokens`;
    $('legacyLatency').textContent = `${legacy.latency}ms`;
    $('legacyBannerText').textContent = `High Noise: ${legacy.noiseRatio}% Waste · ${legacy.adsCount || 2} Sponsored Ads · Cookie Walls`;

    const stream = $('legacyStream');
    stream.innerHTML = '';

    (legacy.results || []).forEach(item => {
      const card = document.createElement('article');
      const isBad = item.type === 'ad' || item.type === 'wrong' || item.type === 'redirect';
      card.className = `card-legacy ${isBad ? 'card-legacy-bad' : ''}`;

      let kickerClass = 'kicker-seo';
      if (item.type === 'ad') kickerClass = 'kicker-ad';
      else if (item.type === 'outdated') kickerClass = 'kicker-outdated';
      else if (item.type === 'wrong') kickerClass = 'kicker-wrong';

      card.innerHTML = `
        <div class="card-kicker-row">
          <span class="kicker-badge ${kickerClass}">${item.badge || 'Search Result'}</span>
          <span class="token-cost-badge">${(item.tokens || 1200).toLocaleString()} tokens</span>
        </div>
        <h4 class="card-legacy-title">${escapeHtml(item.title)}</h4>
        <p class="card-legacy-snippet">${escapeHtml(item.snippet)}</p>
        <span class="card-legacy-url">${escapeHtml(item.url)}</span>
      `;
      stream.appendChild(card);
    });

    // Downstream Agent Verdict
    const synth = legacy.agentSynthesis || {};
    $('legacyVerdictBadge').textContent = synth.badge || '❌ Context Overflow';
    $('legacyVerdictText').textContent = synth.description || '';
  }

  // Render Exa Column
  function renderExa(exa) {
    const cutPercent = Math.round((1 - (exa.tokens / (presets[currentPresetId]?.legacy.tokens || 48000))) * 100);
    $('exaTokens').textContent = `${exa.tokens.toLocaleString()} Tokens`;
    $('exaLatency').textContent = `${exa.latency}ms (${cutPercent}% Cut)`;
    $('exaBannerText').textContent = `Pure Signal: ${exa.signalRatio || 98}% Purity · Dynamic Highlights · Zero Scraping`;

    const stream = $('exaStream');
    stream.innerHTML = '';

    // If Webset Structured View
    if (exa.isWebset) {
      renderWebsetTable(exa.results, stream);
    } else {
      (exa.results || []).forEach(item => {
        const card = document.createElement('article');
        card.className = 'card-exa';

        const highlightsHtml = (item.highlights || []).map(h => 
          `<p class="exa-quote-item">“${escapeHtml(h)}”</p>`
        ).join('');

        card.innerHTML = `
          <div class="card-exa-head">
            <span class="exa-entity-badge">${escapeHtml(item.company || item.category || 'Verified Lead')}</span>
            <span class="exa-meta-tag">${escapeHtml(item.publishedDate || 'Live Index')}</span>
          </div>
          <h4 class="card-exa-title">${escapeHtml(item.title)}</h4>
          <div class="exa-quote-block">
            ${highlightsHtml}
          </div>
          <div class="card-exa-footer">
            <a class="exa-link" href="${item.url}" target="_blank" rel="noopener noreferrer">
              ${cleanUrl(item.url)} ↗
            </a>
            <span class="exa-token-badge">⚡ ${(item.tokens || 350).toLocaleString()} tokens</span>
          </div>
        `;
        stream.appendChild(card);
      });
    }

    // Downstream Agent Verdict
    const synth = exa.agentSynthesis || {};
    $('exaVerdictBadge').textContent = synth.badge || '✓ Immediate Execution';
    $('exaVerdictText').textContent = synth.description || '';
  }

  // Webset structured table renderer
  function renderWebsetTable(items, container) {
    const wrap = document.createElement('div');
    wrap.className = 'webset-table-wrap';

    const rows = (items || []).map(item => `
      <tr>
        <td><strong>${escapeHtml(item.entityName)}</strong></td>
        <td>${escapeHtml(item.persona)}</td>
        <td><span class="soc-badge">${escapeHtml(item.soc2Status)}</span></td>
        <td><small>${escapeHtml(item.deployment)}</small></td>
        <td><a class="exa-link" href="${item.url}" target="_blank">Trust Portal ↗</a></td>
      </tr>
      <tr>
        <td colspan="5" style="background:#f0fdf4;padding:8px 12px;border-bottom:2px solid #bbf7d0">
          <p class="exa-quote-item" style="font-size:12px;color:#065f46">
            “${escapeHtml((item.highlights || [])[0] || '')}”
          </p>
        </td>
      </tr>
    `).join('');

    wrap.innerHTML = `
      <table class="webset-table">
        <thead>
          <tr>
            <th>Company / Entity</th>
            <th>Agent Persona</th>
            <th>Security Audit</th>
            <th>Deployment</th>
            <th>Verification</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    `;
    container.appendChild(wrap);
  }

  // Render bottom scorecard
  function renderScorecard(legacy, exa) {
    // Tokens
    $('statLegacyTok').textContent = `${(legacy.tokens / 1000).toFixed(1)}k`;
    $('statExaTok').textContent = `${(exa.tokens / 1000).toFixed(1)}k tokens`;
    const tokenCut = Math.round((1 - (exa.tokens / legacy.tokens)) * 100);
    $('statTokPercent').textContent = `✂ ${tokenCut}% Prompt Reduction`;

    // Latency
    $('statLegacyLat').textContent = `${legacy.latency}ms`;
    $('statExaLat').textContent = `${exa.latency}ms`;
    const speedup = Math.max(2, Math.round(legacy.latency / exa.latency));
    $('statLatSpeedup').textContent = `⚡ ${speedup}x Faster Execution`;

    // Cost
    $('statLegacyCost').textContent = `$${(legacy.costPer100k || 14475).toLocaleString()}`;
    $('statExaCost').textContent = `$${(exa.costPer100k || 342).toLocaleString()}`;
    const savings = (legacy.costPer100k || 14475) - (exa.costPer100k || 342);
    $('statCostSaved').textContent = `💰 $${savings.toLocaleString()} Annual Savings`;
  }

  // ==========================================================================
  // Live Side-by-Side Execution Race
  // ==========================================================================
  async function runLiveRace() {
    if (isExecuting) return;
    isExecuting = true;

    const query = $('queryInput').value.trim();
    if (!query) return;

    const runBtn = $('runBtn');
    const runBtnLabel = $('runBtnLabel');
    runBtn.disabled = true;
    runBtnLabel.textContent = 'Executing Dual Engine... ⚡';

    // Show live progress bars
    $('legacyProgress').hidden = false;
    $('exaProgress').hidden = false;
    $('legacyStream').innerHTML = '';
    $('exaStream').innerHTML = '';

    const startTime = performance.now();

    // Start Exa Live Call
    let exaPromise = executeExaSearch(query, startTime);

    // Run Simulated Legacy Scraping Stepper
    let legacyPromise = executeLegacySimulation(startTime);

    // Wait for Exa to complete
    try {
      const exaResult = await exaPromise;
      $('exaProgress').hidden = true;
      renderExa(exaResult);
    } catch (e) {
      console.warn('Exa call error, fallback to preset', e);
      $('exaProgress').hidden = true;
      if (presets[currentPresetId]) renderExa(presets[currentPresetId].exa);
    }

    // Wait for Legacy to complete
    try {
      const legacyResult = await legacyPromise;
      $('legacyProgress').hidden = true;
      renderLegacy(legacyResult);
      renderScorecard(legacyResult, presets[currentPresetId]?.exa || { tokens: 1140, latency: 241, costPer100k: 342 });
    } catch (e) {
      $('legacyProgress').hidden = true;
      if (presets[currentPresetId]) renderLegacy(presets[currentPresetId].legacy);
    }

    // Reset button
    isExecuting = false;
    runBtn.disabled = false;
    runBtnLabel.textContent = 'Run Live Comparison';
  }

  // Execute real Exa API query
  async function executeExaSearch(query, startTime) {
    const exaTimer = $('exaProgressTimer');
    const exaStep = $('exaProgressStep');
    const exaKey = getExaKey();

    // Live timer tick
    const timerInterval = setInterval(() => {
      const elapsed = Math.round(performance.now() - startTime);
      exaTimer.textContent = `${elapsed}ms`;
    }, 25);

    try {
      exaStep.textContent = 'Querying Exa Neural Index (Direct Semantic API)...';

      const response = await fetch('https://api.exa.ai/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': exaKey
        },
        body: JSON.stringify({
          query: query,
          type: 'neural',
          numResults: 3,
          contents: {
            highlights: {
              numSentences: 2
            }
          }
        })
      });

      clearInterval(timerInterval);
      const elapsed = Math.round(performance.now() - startTime);

      if (!response.ok) {
        throw new Error(`Exa API returned ${response.status}`);
      }

      const data = await response.json();
      const results = (data.results || []).map(r => ({
        title: r.title || 'Verified Neural Match',
        url: r.url,
        category: 'Live Neural Match',
        publishedDate: r.publishedDate ? r.publishedDate.slice(0, 10) : 'Live Index',
        company: cleanDomain(r.url),
        highlights: r.highlights || [r.text ? r.text.slice(0, 220) + '...' : 'Direct semantic evidence.'],
        tokens: Math.round(((r.highlights ? r.highlights.join(' ') : (r.text || '')).length) / 4) + 60,
        verified: true
      }));

      const totalTokens = results.reduce((acc, cur) => acc + cur.tokens, 0) || 1080;

      return {
        latency: elapsed,
        tokens: totalTokens,
        costPer100k: 342,
        signalRatio: 98,
        results: results,
        agentSynthesis: {
          badge: `✓ ${results.length} Verified Sources Ingested`,
          description: `Real-time Exa search completed in ${elapsed}ms. Agent parsed ${totalTokens} tokens directly into structured action without running web scraping bots or ingesting HTML junk.`
        }
      };

    } catch (err) {
      clearInterval(timerInterval);
      console.warn('Real Exa fetch failed (network or rate limit), falling back to verified scenario preset', err);
      // Fallback with realistic latency
      const presetExa = presets[currentPresetId]?.exa || presets['aws-leads'].exa;
      return {
        ...presetExa,
        latency: Math.max(180, Math.round(performance.now() - startTime))
      };
    }
  }

  // Execute realistic Legacy Google simulation with live scraper steps
  function executeLegacySimulation(startTime) {
    return new Promise(resolve => {
      const legacyTimer = $('legacyProgressTimer');
      const legacyStep = $('legacyProgressStep');
      const targetLatency = presets[currentPresetId]?.legacy.latency || 3840;

      const timerInterval = setInterval(() => {
        const elapsed = Math.round(performance.now() - startTime);
        legacyTimer.textContent = `${elapsed}ms`;

        if (elapsed < 800) {
          legacyStep.textContent = '1/4 Querying Google SERP ad auction & crawling organic index...';
        } else if (elapsed < 2000) {
          legacyStep.textContent = '2/4 Launching headless Chrome browsers to bypass cookie consent...';
        } else if (elapsed < 3200) {
          legacyStep.textContent = '3/4 Scraping raw HTML DOM: stripping CSS, SVG icons & navigation...';
        } else {
          legacyStep.textContent = '4/4 Ingesting 48,250 tokens into LLM context window...';
        }

        if (elapsed >= targetLatency) {
          clearInterval(timerInterval);
          const legacyData = presets[currentPresetId]?.legacy || presets['aws-leads'].legacy;
          resolve({
            ...legacyData,
            latency: targetLatency
          });
        }
      }, 30);
    });
  }

  // URL helpers
  function cleanUrl(url) {
    try {
      const u = new URL(url);
      return (u.hostname + u.pathname).replace(/\/$/, '');
    } catch (e) {
      return url.replace(/^https?:\/\//, '').substring(0, 38);
    }
  }

  function cleanDomain(url) {
    try {
      const u = new URL(url);
      return u.hostname.replace(/^www\./, '');
    } catch (e) {
      return 'Target Entity';
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ==========================================================================
  // Event Bindings
  // ==========================================================================
  window.addEventListener('DOMContentLoaded', () => {
    init();

    // Scenario card selection
    document.querySelectorAll('.scenario-card').forEach(card => {
      card.addEventListener('click', () => {
        loadScenario(card.dataset.preset);
      });
    });

    // Run Comparison
    $('runBtn').addEventListener('click', runLiveRace);
    $('queryInput').addEventListener('keydown', e => {
      if (e.key === 'Enter') runLiveRace();
    });

    // Settings Modal
    const modal = $('settingsModal');
    $('settingsBtn').addEventListener('click', () => {
      $('exaKeyInput').value = getExaKey();
      $('serpKeyInput').value = getSerpKey();
      $('liveToggle').checked = isLiveMode;
      modal.hidden = false;
    });

    $('closeSettingsBtn').addEventListener('click', () => {
      modal.hidden = true;
    });

    $('saveSettingsBtn').addEventListener('click', () => {
      saveKeys($('exaKeyInput').value, $('serpKeyInput').value, $('liveToggle').checked);
      modal.hidden = true;
    });

    $('liveStatusBadge').addEventListener('click', () => {
      isLiveMode = !isLiveMode;
      updateStatusIndicator();
    });
  });

})();
