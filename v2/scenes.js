/* Separate, replayable illustrations. Every base style is a readable final state. */
(() => {
  'use strict';
  const EXA_SEARCH = 'https://exa.ai/docs/reference/search';
  const EXA_HIGHLIGHTS = 'https://exa.ai/blog/dynamic-highlights';
  const FRESH_CASE = 'https://www.freshconsulting.com/insights/blog/exa-ai-is-revolutionizing-search-capabilities-with-llms/';
  const ARCH_TALK = 'https://www.youtube.com/watch?v=qvwjHF3_J84&t=668s';

  const link = (url, label, cls = '') => `<a class="scene-source ${cls}" href="${url}" target="_blank" rel="noopener noreferrer">${label}<span aria-hidden="true">↗</span></a>`;
  const label = text => `<span class="scene-kicker">${text}</span>`;
  const caption = text => `<div class="scene-caption">${text}</div>`;
  const card = (number, text, url, source) => `<span class="passage-number">${number}</span><p>${text}</p>${link(url, source)}`;
  const highlightCard = () => card('01', 'Dynamic Highlights dynamically reads across sources, slashing retrieved tokens by up to 95%.', EXA_HIGHLIGHTS, 'Exa · Dynamic Highlights');
  const enterpriseCard = () => card('02', 'Fresh Consulting integrates Exa into Invent Value to ground automated ideation with live market intelligence.', FRESH_CASE, 'Fresh Consulting · Case Study');
  const question = '<div class="question-chip"><span aria-hidden="true">⚡</span> Map enterprise AI search APIs: SOC2, latency & pricing</div>';
  const docLines = '<i></i><i></i><i></i>';

  function browser(mode) {
    return `<div class="scene scene--${mode}">
      <div class="browser-card">
        <div class="browser-chrome">
          <span class="browser-dots" aria-hidden="true">● ● ●</span>
          <span>Legacy Search Engine · 48,000 HTML Tokens</span>
        </div>
        ${question}
        <div class="browser-results">
          <article class="result-row result-ad">
            ${label('Sponsored Placement · $14/click')}
            <strong>Ad · Legacy Cloud Keyword Search</strong>
            <p>Monetized keyword bidding. High latency, sponsored ranks, 45KB DOM.</p>
          </article>
          <article class="result-row result-organic">
            ${label('SEO Farming · 40KB Affiliate Boilerplate')}
            <strong>Top 10 Best AI Search Tools of 2026 (Sponsored Reviews)</strong>
            <p>Popups, cookie consent walls, affiliate tracking, and ad carousels.</p>
          </article>
          <article class="result-row result-useful">
            ${label('Verified Signal · Machine-Ready Documentation')}
            <strong>Exa API: Neural Search & Dynamic Highlights for Agents</strong>
            ${link(EXA_SEARCH, 'Open Exa Developer Specs')}
          </article>
        </div>
        <div class="scan-line" aria-hidden="true"></div>
      </div>
      ${caption('Legacy search returns 95% noise to autonomous software')}
    </div>`;
  }

  function intro(name) {
    const motifs = {
      browse: '<div class="intro-browser"><div class="intro-browser-bar"><i></i><i></i><i></i></div><div class="intro-browser-body"><b></b><i></i><i></i><i></i></div><svg class="intro-cursor" viewBox="0 0 80 100" aria-hidden="true"><path d="M8 8 L66 52 L39 58 L26 84 Z"/></svg></div>',
      agent: '<div class="intro-agent"><span class="agent-bracket">{</span><div class="agent-face"><i></i><i></i><b></b></div><span class="agent-bracket">}</span></div>',
      direct: '<div class="intro-envelope"><div class="intro-page"><span>Verified Intelligence</span><i></i><i></i><b>Source Attached · 0% Noise</b></div><div class="envelope-front"></div></div>',
      mechanism: '<div class="intro-map"><div class="intro-map-ring"></div><i style="--x:22%;--y:27%"></i><i style="--x:70%;--y:25%"></i><i style="--x:35%;--y:67%"></i><i style="--x:76%;--y:66%"></i><b>exa<span>.</span></b></div>',
      passages: '<div class="intro-page large"><span>45,000 Token Web Page</span><i></i><i></i><b class="intro-highlight">Surgical 250-Token Highlight</b><i></i><i></i></div>',
      builder: '<div class="intro-gv-loop"><div class="gv-node gv-gen"><span>Coordinator LLM</span><small>Generate queries</small></div><i class="gv-arrow">→</i><div class="gv-node gv-exa"><span>Exa Retrieval</span><small>Sub-200ms</small></div><i class="gv-arrow">→</i><div class="gv-node gv-ver"><span>Verifier Agent</span><small>Audit citations</small></div></div>'
    };
    return `<div class="scene scene--intro scene--${name}"><div class="intro-halo" aria-hidden="true"></div><div class="intro-motif">${motifs[name]}</div></div>`;
  }

  function opening() {
    return `<div class="scene scene--opening">
      <div class="opening-orbit" aria-hidden="true"></div>
      <div class="opening-request">Map enterprise AI search providers with SOC2 compliance & sub-200ms latency</div>
      <div class="opening-core">exa<span>.</span><small>AI Search Layer</small></div>
      <div class="opening-evidence">
        ${label('Structured Intelligence · Zero Noise')}
        <strong>Verified Sources.<br>Surgical Highlights.</strong>
        <div class="evidence-pills">
          <span class="pill-badge pill-soc">✓ SOC2 Type II</span>
          <span class="pill-badge pill-speed">⚡ 180ms Latency</span>
          <span class="pill-badge pill-cut">✂ 95% Token Cut</span>
        </div>
        ${link(EXA_SEARCH, 'Explore Exa API Specs')}
      </div>
      ${caption('Autonomous web retrieval with 100% auditable source citations')}
    </div>`;
  }

  function fanout() {
    return `<div class="scene scene--fanout">
      <div class="task-core">
        ${label('Enterprise Goal')}
        <strong>Autonomous<br>Intelligence.</strong>
      </div>
      <div class="fan-branches" aria-hidden="true"><span></span><span></span><span></span></div>
      <div class="fan-steps">
        <article>${label('01 / Discover')}<strong>Map direct & indirect competitors</strong></article>
        <article>${label('02 / Extract')}<strong>Extract pricing tiers, latency & models</strong></article>
        <article>${label('03 / Verify')}<strong>Audit security, SOC2 & compliance certs</strong></article>
      </div>
      ${caption('Multi-hop agent loops · candidate discovery compounds across steps')}
    </div>`;
  }

  function processing() {
    return `<div class="scene scene--processing">
      <div class="process-page">
        ${label('Raw Web Page · 45,000 Tokens')}
        <div class="page-chrome strip-noise">Cookie Consent · Navigation · Mega Menu</div>
        <div class="page-noise strip-noise">Tracking pixels, ad banners, inline styling, minified JS, and affiliate widgets</div>
        <div class="process-origin"></div>
        <div class="page-chrome strip-noise">Footer links · Copyright · Privacy policies</div>
      </div>
      <div class="process-context">
        ${label('Surgical LLM Context')}
        <div class="context-empty">Pure high-density signal for model inference</div>
      </div>
      <article class="moving-passage process-passage">${highlightCard()}</article>
      <div class="process-step">
        <span>Crawl</span><i>→</i><span>Prune 95% Noise</span><i>→</i><span>Dynamic Highlights</span>
      </div>
      ${caption('Exa eliminates DOM bloat before text ever reaches your LLM')}
    </div>`;
  }

  function growth() {
    return `<div class="scene scene--growth">
      <div class="growth-chart" aria-hidden="true">
        ${[12,16,21,28,36,46,60,78,96].map((v,i)=>`<i style="--height:${v}%;--order:${i}"></i>`).join('')}
      </div>
      <div class="growth-number">&gt;1,700<span>%</span></div>
      <strong class="growth-unit">Annual Growth in Daily<br>AI-Agent Web Requests</strong>
      <div class="measurement-note">Cloudflare Radar · Global Agentic Web Traffic<br>Autonomous software is becoming the primary web consumer</div>
      ${caption('Measured network activity · AI agents are redefining global search')}
    </div>`;
  }

  function desk() {
    return `<div class="scene scene--desk">
      <div class="question-chip"><span aria-hidden="true">⌕</span> Query: Find enterprise AI agents in YC & Felicis portfolios with SOC2</div>
      <div class="desk-web">
        <span class="mini-document doc-one">Live Web Crawl${docLines}</span>
        <span class="mini-document doc-two">Neural Index${docLines}</span>
      </div>
      <div class="desk-pipe pipe-one" aria-hidden="true"><i></i></div>
      <div class="desk-exa">exa<span>.</span></div>
      <div class="desk-pipe pipe-two" aria-hidden="true"><i></i></div>
      <article class="desk-return">
        ${label('Clean JSON · Model-Ready')}
        <strong>Structured Text.<br>Verified Links.</strong>
        ${link(EXA_HIGHLIGHTS, 'Dynamic Highlights API')}
      </article>
      ${caption('Treating the open web as a queryable, structured database')}
    </div>`;
  }

  function roles() {
    return `<div class="scene scene--roles">
      <article class="role-block role-exa">
        ${label('The Retrieval Layer')}
        <h3>Exa retrieves.</h3>
        <div class="role-actions">
          <span>Continuous Web Crawl</span>
          <span>Pre-Computed Embeddings</span>
          <span>Surgical Highlights & Links</span>
        </div>
      </article>
      <div class="role-transfer" aria-hidden="true">→</div>
      <article class="role-block">
        ${label('The Reasoning Layer')}
        <h3>Your AI reasons.</h3>
        <div class="role-actions">
          <span>Multi-Step Synthesis</span>
          <span>Strategic Decision Loops</span>
          <span>Autonomous Business Action</span>
        </div>
      </article>
    </div>`;
  }

  function economics() {
    return `<div class="scene scene--economics">
      <article class="business-card">
        ${label('Consumer Search Engine')}
        <h3>Attention</h3>
        <p>Monetized by human ad impressions, dwell time, and sponsored auctions.</p>
        <div class="business-meter"><i></i></div>
        <small>Engineered to keep human eyeballs on the SERP.</small>
      </article>
      <article class="business-card business-exa">
        ${label('Exa AI Search Layer')}
        <h3>Information</h3>
        <p>Monetized by programmatic API queries, speed, and token density.</p>
        <div class="business-meter"><i></i></div>
        <small>Engineered to deliver machine-ready truth with zero latency.</small>
      </article>
      ${caption('Aligned incentives: Exa succeeds when your agent gets the exact answer instantly')}
    </div>`;
  }

  function map(name) {
    const dots = Array.from({length:34},(_,i)=>{
      const target=i<23;
      const a=i*2.39996,r=Math.sqrt((i%23)+1)/Math.sqrt(23);
      const x=(target?66:20)+Math.cos(a)*r*(target?19:12);
      const y=(target?45:40)+Math.sin(a)*r*(target?30:26);
      return `<i class="meaning-dot ${target?'related':'distant'}" style="left:${x}%;top:${y}%;--order:${i}"></i>`;
    }).join('');
    const isIndex=name==='index';
    return `<div class="scene scene--map scene--${name}">
      <div class="meaning-map">
        <div class="map-neighborhood"></div>
        ${dots}
        <div class="map-topic topic-related">Same Meaning Neighborhood</div>
        <div class="map-topic topic-distant">Unrelated Topics</div>
        ${!isIndex?'<div class="map-search-ring" aria-hidden="true"></div><div class="map-query">“Budget beach trip<br>with kids”</div>':'<div class="map-input-pages"><i></i><i></i><i></i><span>Web Pages</span></div>'}
        <div class="map-term term-one">“Affordable coastal cottage”</div>
        <div class="map-term term-two">“Cheap family beach trip”</div>
      </div>
      <div class="map-legend">
        ${isIndex?'<span>1. Read Web Page</span><b>→</b><span>2. Turn into Numbers (Vector)</span><b>→</b><span>3. Pin onto Map</span>':name==='meaning'?'<span>Different words with the same meaning land as neighbors.</span>':'<span>Drop Query Pin</span><b>→</b><span>Instantly Match Closest Pages</span>'}
      </div>
      ${caption('A vector is a GPS coordinate for meaning · Embeddings group identical concepts together')}
    </div>`;
  }

  function exact() {
    return `<div class="scene scene--exact">
      <article class="signal-card">
        <span class="signal-symbol" aria-hidden="true">≈</span>
        ${label('Vector Embeddings (Meaning)')}
        <h3>Conceptual Understanding.</h3>
        <p>“Automate clinical paperwork”<br><span>semantically matches</span><br>“Ambient AI medical scribe”</p>
      </article>
      <span class="signal-plus" aria-hidden="true">+</span>
      <article class="signal-card signal-precise">
        <span class="signal-symbol" aria-hidden="true">“ ”</span>
        ${label('Keyword Precision (Exact Details)')}
        <h3>Exact Filters.</h3>
        <p>“HIPAA compliant” + “SOC2”<br><span>guarantees strict hits on</span><br>your exact requirements.</p>
      </article>
      ${caption('Exa pairs vector understanding with exact keyword precision')}
    </div>`;
  }

  function rank() {
    return `<div class="scene scene--rank">
      <div class="rank-question">How Vector Matching Beats Keyword Gaming:</div>
      <div class="rank-stack">
        <article class="ranking-card rank-first">
          <b>01</b>
          <div>
            <strong>Direct Functional Match (AI Clinical Scribe Platform)</strong>
            <span>Nearest vector coordinate · Exactly answers the agent’s task</span>
          </div>
          ${link(EXA_SEARCH,'Docs')}
        </article>
        <article class="ranking-card rank-second">
          <b>02</b>
          <div>
            <strong>Peer-Reviewed Hospital Implementation Case Study</strong>
            <span>High information density · Verified enterprise results</span>
          </div>
          ${link(FRESH_CASE,'Case Study')}
        </article>
        <article class="ranking-card rank-third">
          <b>03</b>
          <div>
            <strong>Demoted: SEO Affiliate Blog (Repeats "Doctor Software" 45x)</strong>
            <span>Distant in true vector meaning · Keyword spam filtered out</span>
          </div>
          <span class="rank-muted">Demoted</span>
        </article>
      </div>
      ${caption('Exa ranks pages by true informational value, not backlink gaming or keyword repetition')}
    </div>`;
  }

  function extraction() {
    return `<div class="scene scene--extraction">
      <div class="extract-sources">
        <div class="extract-document">
          ${label('Source 01 · Fresh Consulting')}
          <div class="extract-origin origin-one"></div>
          <div class="document-tail" aria-hidden="true">${docLines}</div>
        </div>
        <div class="extract-document">
          ${label('Source 02 · Exa Architecture Talk')}
          <div class="extract-origin origin-two"></div>
          <div class="document-tail" aria-hidden="true">${docLines}</div>
        </div>
      </div>
      <div class="extract-tray">
        ${label('Dynamic Highlights Payload')}
        <span class="tray-note">Multi-document cross-reading.<br>Complementary evidence, zero fluff.</span>
      </div>
      <article class="moving-passage passage-one">${highlightCard()}</article>
      <article class="moving-passage passage-two">${enterpriseCard()}</article>
      ${caption('Dynamic Highlights allocates context dynamically across all sources')}
    </div>`;
  }

  function source() {
    return `<div class="scene scene--source">
      <div class="source-proof-card">
        ${label('Auditable Ground Truth · Zero Hallucination')}
        <p class="source-proof-text">Exa Dynamic Highlights reduces retrieved tokens by 95% on average while preserving task accuracy.</p>
        <div class="source-tether" aria-hidden="true"></div>
        ${link(EXA_HIGHLIGHTS, 'Verify Citation: exa.ai/blog/dynamic-highlights', 'source-proof-link')}
        <small>Every sentence returned carries an immutable URL citation for instant verification.</small>
      </div>
      ${caption('Auditable source trails make autonomous AI enterprise-ready')}
    </div>`;
  }

  function controls() {
    return `<div class="scene scene--controls">
      <div class="control-options">
        <div class="control-option">
          <span>Domains</span>
          <strong>includeDomains: ["freshconsulting.com", "sec.gov"]</strong>
          <i aria-hidden="true"></i>
        </div>
        <div class="control-option">
          <span>Freshness</span>
          <strong>startPublishedDate: "2026-01-01" (Live crawl)</strong>
          <i aria-hidden="true"></i>
        </div>
        <div class="control-option">
          <span>Payload</span>
          <strong>highlights: { numSentences: 3 } (Surgical context)</strong>
          <i aria-hidden="true"></i>
        </div>
      </div>
      <div class="control-result">
        ${label('Programmatic Control')}
        <strong>The Scope.<br>The Freshness.<br>The Evidence.</strong>
      </div>
      ${caption('Granular API parameters give builders total control over context payloads')}
    </div>`;
  }

  function metric(name) {
    const retrieved = name === 'retrieved';
    return `<div class="scene scene--efficiency scene--${name}">
      ${label('Exa-Reported Evaluations')}
      <div class="efficiency-big">≈${retrieved?'95':'30'}<span>%</span></div>
      <strong class="efficiency-unit">fewer ${retrieved?'retrieved':'total agent'} tokens</strong>
      <div class="token-comparison">
        <div>
          <span>${retrieved?'Full-Page Web Scraping':'Baseline Agent Inference Cost'}</span>
          <div class="token-bar"><i class="token-before"></i></div>
          <b>100%</b>
        </div>
        <div>
          <span>${retrieved?'With Exa Dynamic Highlights':'With Exa Search (+2.1% Accuracy Gain)'}</span>
          <div class="token-bar"><i class="token-after" style="--remaining:${retrieved?'5':'70'}%"></i></div>
          <b>${retrieved?'≈5':'≈70'}%</b>
        </div>
      </div>
      <div class="metric-caveat">
        ${retrieved?'Average retrieved tokens versus full-page HTML content.':'Rigorous evaluations on BrowseComp & WideSearch benchmarks.'}<br>
        Dramatically lower inference latency & cloud costs at production scale.
      </div>
    </div>`;
  }

  function comparison() {
    return `<div class="scene scene--comparison">
      <article class="product-card">
        ${label('Consumer Search')}
        <h3>Google<br>Search</h3>
        <div class="product-glyph" aria-hidden="true"><span></span><span></span><span></span></div>
        <p>Engineered for human browsing, click auctions, and manual reading.</p>
        <small>HTML SERP for humans.</small>
      </article>
      <article class="product-card">
        ${label('Single-Vendor Grounding')}
        <h3>Model-Locked<br>Grounding</h3>
        <div class="product-glyph ground-glyph" aria-hidden="true"><span>✧</span></div>
        <p>Locked into single-vendor LLMs with black-box answer generation.</p>
        <small>Tightly coupled ecosystem.</small>
      </article>
      <article class="product-card product-exa">
        ${label('The AI Search Layer')}
        <h3>Exa</h3>
        <div class="product-glyph exa-glyph" aria-hidden="true"><span>exa.</span></div>
        <p>Open, model-agnostic API. Pair with Claude, GPT-4o, Gemini, or local models.</p>
        <small>Built for agentic workflows.</small>
      </article>
    </div>`;
  }

  function payoff() {
    return `<div class="scene scene--payoff">
      <div class="handoff-evidence">
        ${label('1 / Exa Web Intelligence')}
        <article class="handoff-passage">${highlightCard()}</article>
        <article class="handoff-passage">${enterpriseCard()}</article>
      </div>
      <div class="handoff-link first" aria-hidden="true"><i></i></div>
      <div class="handoff-model">
        ${label('2 / Your Frontier Model')}
        <div class="model-symbol" aria-hidden="true">✧</div>
        <strong>Synthesize.<br>Cross-Check.<br>Reason.</strong>
      </div>
      <div class="handoff-link second" aria-hidden="true"><i></i></div>
      <div class="handoff-answer">
        ${label('3 / Enterprise Output')}
        <strong>Fresh Consulting<br>Invent Value Report</strong>
        <p>Innovation concepts verified against live market signals & competitors.</p>
        ${link(FRESH_CASE, 'Inspect Invent Value Case Study')}
      </div>
      ${caption('Production agent workflow: clean evidence in, verified enterprise intelligence out')}
    </div>`;
  }

  function checks() {
    return `<div class="scene scene--checks">
      ${[
        ['01','Sub-200ms Latency','Real-time voice and copilot responsiveness.'],
        ['02','95% Token Efficiency','Drastic cloud LLM cost reduction at scale.'],
        ['03','Zero Hallucinations','100% traceable, inspectable source URL links.'],
        ['04','Zero Scraper Ops','No broken Puppeteer scripts or CAPTCHA blocks.']
      ].map(a=>`<article class="evaluation-card">
        <span>${a[0]}</span>
        <div>
          <h3>${a[1]}</h3>
          <p>${a[2]}</p>
        </div>
        <i aria-hidden="true">✓</i>
      </article>`).join('')}
    </div>`;
  }

  function closing() {
    return `<div class="scene scene--closing">
      <div class="closing-ring ring-one" aria-hidden="true"></div>
      <div class="closing-ring ring-two" aria-hidden="true"></div>
      <div class="closing-emblem">exa<span>.</span></div>
      <div class="closing-tag tag-sources">The Web as a Database</div>
      <div class="closing-tag tag-content">Dynamic Highlights</div>
      <div class="closing-tag tag-trail">Generator-Verifier Scale</div>
      <div class="closing-path">Discover <span>→</span> Retrieve <span>→</span> Verify <span>→</span> Act</div>
    </div>`;
  }

  const builders = {
    opening,
    ads: () => browser('ads'),
    seo: () => browser('seo'),
    scan: () => browser('scan'),
    fanout,
    processing,
    growth,
    desk,
    roles,
    economics,
    index: () => map('index'),
    meaning: () => map('meaning'),
    query: () => map('query'),
    exact,
    rank,
    extraction,
    source,
    controls,
    retrieved: () => metric('retrieved'),
    total: () => metric('total'),
    comparison,
    payoff,
    checks,
    closing
  };

  ['browse','agent','direct','mechanism','passages','builder'].forEach(name => {
    builders[name] = () => intro(name);
  });

  function animate(name, root) {
    const scene = root.matches?.('.scene') ? root : root.querySelector('.scene');
    if (!scene) return [];
    const animations = [];
    const one = s => scene.querySelector(s), all = s => [...scene.querySelectorAll(s)];
    const run = (el, frames) => {
      if (el) animations.push(el.animate(frames, { duration: 6000, fill: 'both', easing: 'linear' }));
    };
    const reveal = (el, start = .12, end = .42, dx = 0, dy = 18) => run(el, [
      { offset: 0, opacity: 0, transform: `translate(${dx}px,${dy}px)` },
      { offset: start, opacity: 0, transform: `translate(${dx}px,${dy}px)`, easing: 'cubic-bezier(.22,.7,.2,1)' },
      { offset: end, opacity: 1, transform: 'translate(0,0)' },
      { offset: 1, opacity: 1, transform: 'translate(0,0)' }
    ]);
    const draw = (el, start = .12, end = .55) => run(el, [
      { offset: 0, transform: 'scaleX(0)' },
      { offset: start, transform: 'scaleX(0)' },
      { offset: end, transform: 'scaleX(1)' },
      { offset: 1, transform: 'scaleX(1)' }
    ]);
    const move = (el, origin, start = .18, end = .63) => {
      if (!el || !origin) return;
      const a = el.getBoundingClientRect(), b = origin.getBoundingClientRect();
      const dx = b.left - a.left, dy = b.top - a.top, scale = b.width / a.width;
      const from = `translate(${dx}px,${dy}px) scale(${scale})`;
      el.style.transformOrigin = 'top left';
      run(el, [
        { offset: 0, transform: from },
        { offset: start, transform: from, easing: 'cubic-bezier(.22,.7,.2,1)' },
        { offset: end, transform: 'translate(0,0) scale(1)' },
        { offset: 1, transform: 'translate(0,0) scale(1)' }
      ]);
    };
    const pulse = (el, start = .15, end = .65) => run(el, [
      { offset: 0, boxShadow: '0 0 0 0 rgba(59,130,246,0)' },
      { offset: start, boxShadow: '0 0 0 0 rgba(59,130,246,0)' },
      { offset: (start + end) / 2, boxShadow: '0 0 0 14px rgba(59,130,246,.16)' },
      { offset: end, boxShadow: '0 0 0 0 rgba(59,130,246,0)' },
      { offset: 1, boxShadow: '0 0 0 0 rgba(59,130,246,0)' }
    ]);

    if (scene.classList.contains('scene--intro')) {
      reveal(one('.intro-motif'), .02, .29, 0, 24);
      run(one('.intro-halo'), [
        { offset: 0, opacity: 0, transform: 'scale(.7)' },
        { offset: .4, opacity: 1, transform: 'scale(1)' },
        { offset: 1, opacity: 1, transform: 'scale(1)' }
      ]);
      if (name === 'builder') {
        all('.gv-node').forEach((el, i) => reveal(el, .1 + i * .12, .32 + i * .12, 0, 14));
        all('.gv-arrow').forEach((el, i) => reveal(el, .2 + i * .12, .38 + i * .12, -10, 0));
      }
      return animations;
    }

    switch (name) {
      case 'opening':
        reveal(one('.opening-request'), .02, .24, 0, -16);
        pulse(one('.opening-core'), .16, .55);
        reveal(one('.opening-evidence'), .32, .65, 35, 0);
        all('.pill-badge').forEach((el, i) => reveal(el, .45 + i * .08, .65 + i * .08, 0, 8));
        break;
      case 'ads':
        run(one('.result-ad'), [
          { offset: 0, background: '#ffffff', boxShadow: '0 0 0 0 #f59e0b00' },
          { offset: .15, background: '#ffffff', boxShadow: '0 0 0 0 #f59e0b00' },
          { offset: .4, background: '#fffbeb', boxShadow: '0 0 0 3px #f59e0b60' },
          { offset: .65, background: '#fffbeb', boxShadow: '0 0 0 1px #f59e0b40' },
          { offset: 1, background: '#fffbeb', boxShadow: '0 0 0 1px #f59e0b40' }
        ]);
        break;
      case 'seo':
        pulse(one('.result-organic'), .15, .6);
        break;
      case 'scan':
        run(one('.scan-line'), [
          { offset: 0, top: '29%', opacity: 0 },
          { offset: .12, top: '29%', opacity: 1 },
          { offset: .45, top: '75%', opacity: 1 },
          { offset: .6, top: '75%', opacity: 0 },
          { offset: 1, top: '75%', opacity: 0 }
        ]);
        all('.result-row:not(.result-useful)').forEach(el => run(el, [
          { offset: 0, opacity: 1 },
          { offset: .4, opacity: 1 },
          { offset: .65, opacity: .35 },
          { offset: 1, opacity: .35 }
        ]));
        pulse(one('.result-useful'), .4, .7);
        break;
      case 'fanout':
        all('.fan-steps article').forEach((el, i) => reveal(el, .12 + i * .1, .35 + i * .12, -30, 0));
        all('.fan-branches span').forEach((el, i) => draw(el, .12 + i * .1, .35 + i * .12));
        break;
      case 'processing':
        move(one('.process-passage'), one('.process-origin'), .2, .64);
        all('.strip-noise').forEach(el => run(el, [
          { offset: 0, opacity: 1 },
          { offset: .18, opacity: 1 },
          { offset: .58, opacity: .3 },
          { offset: 1, opacity: .3 }
        ]));
        reveal(one('.process-step'), .46, .66, 0, 8);
        break;
      case 'growth':
        all('.growth-chart i').forEach((el, i) => run(el, [
          { offset: 0, transform: 'scaleY(.05)' },
          { offset: .1 + i * .025, transform: 'scaleY(.05)' },
          { offset: .45 + i * .025, transform: 'scaleY(1)' },
          { offset: 1, transform: 'scaleY(1)' }
        ]));
        break;
      case 'desk':
        draw(one('.pipe-one i'), .12, .33);
        pulse(one('.desk-exa'), .27, .5);
        draw(one('.pipe-two i'), .37, .57);
        reveal(one('.desk-return'), .45, .68, 25, 0);
        break;
      case 'roles':
        all('.role-exa .role-actions span').forEach((el, i) => reveal(el, .1 + i * .07, .3 + i * .07, 0, 12));
        reveal(one('.role-transfer'), .32, .5, -10, 0);
        all('.role-block:not(.role-exa) .role-actions span').forEach((el, i) => reveal(el, .36 + i * .07, .52 + i * .07, 0, 12));
        break;
      case 'economics':
        all('.business-meter i').forEach((el, i) => draw(el, .15 + i * .12, .48 + i * .12));
        break;
      case 'index':
        all('.meaning-dot').forEach((el, i) => {
          const x = parseFloat(el.style.left), y = parseFloat(el.style.top);
          const box = one('.meaning-map').getBoundingClientRect();
          const dx = (12 - x) * box.width / 100, dy = (53 - y) * box.height / 100;
          const start = .1 + i * .004, end = .42 + i * .005;
          run(el, [
            { offset: 0, opacity: 0, transform: `translate(${dx}px,${dy}px) scale(.3)` },
            { offset: start, opacity: 0, transform: `translate(${dx}px,${dy}px) scale(.3)` },
            { offset: end, opacity: 1, transform: 'translate(0,0) scale(1)' },
            { offset: 1, opacity: 1, transform: 'translate(0,0) scale(1)' }
          ]);
        });
        reveal(one('.map-neighborhood'), .3, .65, 0, 0);
        all('.map-term').forEach(el => reveal(el, .48, .7, 0, 10));
        break;
      case 'meaning':
        pulse(one('.map-search-ring'), .1, .65);
        all('.map-term').forEach((el, i) => reveal(el, .18 + i * .12, .45 + i * .12, 0, 10));
        break;
      case 'query':
        reveal(one('.map-query'), .08, .27, -25, 0);
        pulse(one('.map-search-ring'), .2, .6);
        all('.meaning-dot.related').forEach((el, i) => run(el, [
          { offset: 0, opacity: .4 },
          { offset: .25 + i * .005, opacity: .4 },
          { offset: .55 + i * .004, opacity: 1 },
          { offset: 1, opacity: 1 }
        ]));
        break;
      case 'exact':
        reveal(one('.signal-plus'), .2, .4, 0, 0);
        reveal(one('.signal-precise'), .28, .6, 25, 0);
        break;
      case 'rank':
        all('.ranking-card').forEach((el, i) => run(el, [
          { offset: 0, transform: `translateY(${[55, -45, 0][i]}px) rotate(${[-3, 3, -1][i]}deg)`, opacity: 1 },
          { offset: .16, transform: `translateY(${[55, -45, 0][i]}px) rotate(${[-3, 3, -1][i]}deg)`, opacity: 1 },
          { offset: .6, transform: 'translateY(0) rotate(0deg)', opacity: i === 2 ? .55 : 1 },
          { offset: 1, transform: 'translateY(0) rotate(0deg)', opacity: i === 2 ? .55 : 1 }
        ]));
        break;
      case 'extraction':
        move(one('.passage-one'), one('.origin-one'), .18, .55);
        move(one('.passage-two'), one('.origin-two'), .28, .67);
        reveal(one('.tray-note'), .57, .75, 0, 10);
        break;
      case 'source':
        draw(one('.source-tether'), .18, .48);
        pulse(one('.source-proof-link'), .34, .65);
        break;
      case 'controls':
        all('.control-option i').forEach((el, i) => run(el, [
          { offset: 0, transform: 'translateX(-18px)', background: '#cbd5e1' },
          { offset: .12 + i * .1, transform: 'translateX(-18px)', background: '#cbd5e1' },
          { offset: .3 + i * .1, transform: 'translateX(0)', background: '#3b82f6' },
          { offset: 1, transform: 'translateX(0)', background: '#3b82f6' }
        ]));
        reveal(one('.control-result'), .4, .67, 20, 0);
        break;
      case 'retrieved':
      case 'total':
        run(one('.token-after'), [
          { offset: 0, width: '100%' },
          { offset: .18, width: '100%' },
          { offset: .65, width: name === 'retrieved' ? '5%' : '70%' },
          { offset: 1, width: name === 'retrieved' ? '5%' : '70%' }
        ]);
        break;
      case 'comparison':
        all('.product-card').forEach((el, i) => reveal(el, .04 + i * .13, .28 + i * .13, 0, 18));
        break;
      case 'payoff':
        draw(one('.handoff-link.first i'), .12, .3);
        pulse(one('.handoff-model'), .25, .55);
        draw(one('.handoff-link.second i'), .4, .58);
        reveal(one('.handoff-answer'), .45, .68, 20, 0);
        break;
      case 'checks':
        all('.evaluation-card i').forEach((el, i) => reveal(el, .12 + i * .1, .32 + i * .1, 0, 8));
        break;
      case 'closing':
        reveal(one('.closing-emblem'), .02, .27, 0, 16);
        all('.closing-tag').forEach((el, i) => reveal(el, .15 + i * .1, .4 + i * .1, 0, 10));
        reveal(one('.closing-path'), .45, .67, 0, 12);
        break;
    }
    return animations;
  }

  window.ExaScenes = {
    render(name, opts = {}) {
      return (builders[name] || builders.opening)(opts);
    },
    animate
  };
})();
