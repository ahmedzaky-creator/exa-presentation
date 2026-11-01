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
        <div class="evidence-lines">${docLines}</div>
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
        ${isIndex?'<span>1. Read Web Page</span><b>→</b><span>2. Turn into Vector (GPS)</span><b>→</b><span>3. Pin onto Map</span>':name==='meaning'?'<span>Different words with the same meaning land as neighbors.</span>':'<span>Drop Query Pin</span><b>→</b><span>Instantly Match Closest Pages</span>'}
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

    const DURATION = 5200;

    const run = (el, frames, opts = {}) => {
      if (!el) return null;
      const anim = el.animate(frames, { duration: DURATION, fill: 'both', easing: 'linear', ...opts });
      animations.push(anim);
      return anim;
    };

    const SPRING_EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';
    const BOUNCE_EASE = 'cubic-bezier(0.34, 1.45, 0.64, 1)';
    const SMOOTH_EASE = 'cubic-bezier(0.4, 0, 0.2, 1)';

    const reveal = (el, start = .08, end = .36, dx = 0, dy = 20, ease = SPRING_EASE) => run(el, [
      { offset: 0, opacity: 0, transform: `translate3d(${dx}px,${dy}px,0)` },
      { offset: start, opacity: 0, transform: `translate3d(${dx}px,${dy}px,0)`, easing: ease },
      { offset: end, opacity: 1, transform: 'translate3d(0,0,0)' },
      { offset: 1, opacity: 1, transform: 'translate3d(0,0,0)' }
    ]);

    const pop = (el, start = .1, end = .38, maxScale = 1.15) => run(el, [
      { offset: 0, opacity: 0, transform: 'scale3d(0.5,0.5,1)' },
      { offset: start, opacity: 0, transform: 'scale3d(0.5,0.5,1)', easing: BOUNCE_EASE },
      { offset: (start + end) / 2, opacity: 1, transform: `scale3d(${maxScale},${maxScale},1)` },
      { offset: end, opacity: 1, transform: 'scale3d(1,1,1)' },
      { offset: 1, opacity: 1, transform: 'scale3d(1,1,1)' }
    ]);

    const draw = (el, start = .1, end = .45) => run(el, [
      { offset: 0, transform: 'scaleX(0)' },
      { offset: start, transform: 'scaleX(0)', easing: SMOOTH_EASE },
      { offset: end, transform: 'scaleX(1)' },
      { offset: 1, transform: 'scaleX(1)' }
    ]);

    const pulse = (el, start = .15, end = .55, color = 'rgba(37,99,235,0.35)') => run(el, [
      { offset: 0, boxShadow: '0 0 0 0 rgba(0,0,0,0)' },
      { offset: start, boxShadow: '0 0 0 0 rgba(0,0,0,0)', easing: SMOOTH_EASE },
      { offset: (start + end) / 2, boxShadow: `0 0 0 16px ${color}` },
      { offset: end, boxShadow: '0 0 0 0 rgba(0,0,0,0)' },
      { offset: 1, boxShadow: '0 0 0 0 rgba(0,0,0,0)' }
    ]);

    const move = (el, origin, start = .16, end = .58) => {
      if (!el || !origin) return;
      const a = el.getBoundingClientRect(), b = origin.getBoundingClientRect();
      const dx = b.left - a.left, dy = b.top - a.top, scale = b.width / a.width;
      const from = `translate3d(${dx}px,${dy}px,0) scale(${scale})`;
      el.style.transformOrigin = 'top left';
      run(el, [
        { offset: 0, transform: from, boxShadow: '0 4px 10px rgba(0,0,0,0.05)' },
        { offset: start, transform: from, boxShadow: '0 4px 10px rgba(0,0,0,0.05)', easing: SPRING_EASE },
        { offset: (start + end) / 2, transform: `translate3d(${dx * 0.45}px,${dy * 0.45 - 20}px,0) scale(${(scale + 1) / 2 * 1.05})`, boxShadow: '0 24px 48px rgba(16,185,129,0.22)' },
        { offset: end, transform: 'translate3d(0,0,0) scale(1)', boxShadow: '0 10px 25px rgba(16,185,129,0.12)' },
        { offset: 1, transform: 'translate3d(0,0,0) scale(1)', boxShadow: '0 10px 25px rgba(16,185,129,0.12)' }
      ]);
    };

    if (scene.classList.contains('scene--intro')) {
      reveal(one('.intro-motif'), .02, .26, 0, 24);
      run(one('.intro-halo'), [
        { offset: 0, opacity: 0, transform: 'scale(.6)' },
        { offset: .35, opacity: 1, transform: 'scale(1)', easing: SPRING_EASE },
        { offset: 1, opacity: 1, transform: 'scale(1)' }
      ]);

      if (name === 'browse') {
        run(one('.intro-browser'), [
          { offset: 0, transform: 'perspective(1000px) rotateY(-12deg) scale(0.92)' },
          { offset: .05, transform: 'perspective(1000px) rotateY(-12deg) scale(0.92)', easing: SPRING_EASE },
          { offset: .35, transform: 'perspective(1000px) rotateY(-5deg) scale(1)' },
          { offset: 1, transform: 'perspective(1000px) rotateY(-5deg) scale(1)' }
        ]);
        run(one('.intro-cursor'), [
          { offset: 0, opacity: 0, transform: 'translate3d(40px, 60px, 0) scale(0.8)' },
          { offset: .22, opacity: 1, transform: 'translate3d(40px, 60px, 0) scale(1)', easing: SPRING_EASE },
          { offset: .52, opacity: 1, transform: 'translate3d(-15px, -25px, 0) scale(1)' },
          { offset: .60, opacity: 1, transform: 'translate3d(-15px, -25px, 0) scale(0.82)' },
          { offset: .68, opacity: 1, transform: 'translate3d(-15px, -25px, 0) scale(1)' },
          { offset: 1, opacity: 1, transform: 'translate3d(-15px, -25px, 0) scale(1)' }
        ]);
      } else if (name === 'agent') {
        const brackets = all('.agent-bracket');
        if (brackets.length === 2) {
          run(brackets[0], [
            { offset: 0, transform: 'translateX(35px)' },
            { offset: .08, transform: 'translateX(35px)', easing: BOUNCE_EASE },
            { offset: .36, transform: 'translateX(0)' },
            { offset: 1, transform: 'translateX(0)' }
          ]);
          run(brackets[1], [
            { offset: 0, transform: 'translateX(-35px)' },
            { offset: .08, transform: 'translateX(-35px)', easing: BOUNCE_EASE },
            { offset: .36, transform: 'translateX(0)' },
            { offset: 1, transform: 'translateX(0)' }
          ]);
        }
        pop(one('.agent-face'), .14, .42, 1.12);
        all('.agent-face i').forEach(el => run(el, [
          { offset: 0, transform: 'translateY(-15%) scaleY(0.1)' },
          { offset: .28, transform: 'translateY(-15%) scaleY(0.1)' },
          { offset: .44, transform: 'translateY(-15%) scaleY(1.3)' },
          { offset: .54, transform: 'translateY(-15%) scaleY(1)' },
          { offset: 1, transform: 'translateY(-15%) scaleY(1)' }
        ]));
        pulse(one('.agent-face b'), .45, .75, 'rgba(16,185,129,0.5)');
      } else if (name === 'direct') {
        run(one('.intro-envelope .intro-page'), [
          { offset: 0, transform: 'translate3d(0, 45px, 0) scale(0.9)' },
          { offset: .15, transform: 'translate3d(0, 45px, 0) scale(0.9)', easing: BOUNCE_EASE },
          { offset: .52, transform: 'translate3d(0, -12px, 0) scale(1.03)' },
          { offset: .66, transform: 'translate3d(0, 0, 0) scale(1)' },
          { offset: 1, transform: 'translate3d(0, 0, 0) scale(1)' }
        ]);
      } else if (name === 'mechanism') {
        pop(one('.intro-map > b'), .05, .32, 1.14);
        pulse(one('.intro-map > b'), .26, .58, 'rgba(37,99,235,0.35)');
        all('.intro-map > i').forEach((el, i) => pop(el, .2 + i * .09, .38 + i * .09, 1.35));
      } else if (name === 'passages') {
        reveal(one('.intro-page.large'), .05, .3, 0, -20);
        run(one('.intro-highlight'), [
          { offset: 0, transform: 'scale(0.95)', boxShadow: 'none' },
          { offset: .32, transform: 'scale(0.95)', boxShadow: 'none', easing: BOUNCE_EASE },
          { offset: .62, transform: 'scale(1.05)', boxShadow: '0 0 25px rgba(16,185,129,0.4)' },
          { offset: .75, transform: 'scale(1)', boxShadow: '0 0 16px rgba(16,185,129,0.25)' },
          { offset: 1, transform: 'scale(1)', boxShadow: '0 0 16px rgba(16,185,129,0.25)' }
        ]);
      } else if (name === 'builder') {
        all('.gv-node').forEach((el, i) => pop(el, .08 + i * .13, .3 + i * .13, 1.12));
        all('.gv-arrow').forEach((el, i) => {
          pop(el, .2 + i * .14, .38 + i * .14, 1.3);
          pulse(el, .3 + i * .14, .55 + i * .14, 'rgba(37,99,235,0.4)');
        });
        pulse(one('.gv-ver'), .58, .88, 'rgba(16,185,129,0.4)');
      }
      return animations;
    }

    switch (name) {
      case 'opening':
        reveal(one('.opening-request'), .02, .24, 0, -22);
        pop(one('.opening-core'), .12, .38, 1.14);
        pulse(one('.opening-core'), .28, .65, 'rgba(37,99,235,0.35)');
        reveal(one('.opening-evidence'), .26, .52, 35, 0);
        all('.pill-badge').forEach((el, i) => pop(el, .42 + i * .08, .60 + i * .08, 1.22));
        all('.evidence-lines i').forEach((el, i) => draw(el, .48 + i * .06, .68 + i * .06));
        break;

      case 'ads':
        reveal(one('.question-chip'), .02, .22, 0, -15);
        run(one('.result-ad'), [
          { offset: 0, transform: 'scale(1)', background: '#fff', borderColor: '#e2e8f0', boxShadow: 'none' },
          { offset: .18, transform: 'scale(1)', background: '#fff', borderColor: '#e2e8f0', boxShadow: 'none', easing: SPRING_EASE },
          { offset: .38, transform: 'scale(1.03)', background: '#fef3c7', borderColor: '#f59e0b', boxShadow: '0 0 24px rgba(245,158,11,0.4)' },
          { offset: .52, transform: 'scale(1.01)', background: '#fffbeb', borderColor: '#f59e0b', boxShadow: '0 0 16px rgba(245,158,11,0.25)' },
          { offset: 1, transform: 'scale(1.01)', background: '#fff3dc', borderColor: '#f0dfbd', boxShadow: '0 2px 8px rgba(245,158,11,0.1)' }
        ]);
        all('.result-organic, .result-useful').forEach(el => run(el, [
          { offset: 0, opacity: 1 },
          { offset: .3, opacity: 1 },
          { offset: .55, opacity: .55 },
          { offset: 1, opacity: .55 }
        ]));
        break;

      case 'seo':
        reveal(one('.question-chip'), .02, .22, 0, -15);
        run(one('.result-organic'), [
          { offset: 0, transform: 'scale(1)', borderColor: 'transparent' },
          { offset: .18, transform: 'scale(1)', borderColor: 'transparent' },
          { offset: .32, transform: 'scale(1.025) translateX(-3px)', borderColor: '#818cf8', boxShadow: '0 0 20px rgba(99,102,241,0.3)' },
          { offset: .42, transform: 'scale(1.025) translateX(3px)', borderColor: '#818cf8', boxShadow: '0 0 20px rgba(99,102,241,0.3)' },
          { offset: .55, transform: 'scale(1.01) translateX(0)', borderColor: '#9daee7', background: '#edf1ff', boxShadow: '0 0 14px rgba(99,102,241,0.2)' },
          { offset: 1, transform: 'scale(1.01) translateX(0)', borderColor: '#9daee7', background: '#edf1ff' }
        ]);
        break;

      case 'scan':
        run(one('.scan-line'), [
          { offset: 0, top: '24%', opacity: 0, transform: 'scaleX(0.8)' },
          { offset: .1, top: '24%', opacity: 1, transform: 'scaleX(1)' },
          { offset: .52, top: '76%', opacity: 1, transform: 'scaleX(1)' },
          { offset: .65, top: '76%', opacity: 0, transform: 'scaleX(0.9)' },
          { offset: 1, top: '76%', opacity: 0 }
        ]);
        all('.result-row:not(.result-useful)').forEach((el, i) => run(el, [
          { offset: 0, opacity: 1, filter: 'blur(0px)' },
          { offset: .22 + i * .08, opacity: 1, filter: 'blur(0px)' },
          { offset: .52 + i * .08, opacity: .22, filter: 'blur(1.5px)', transform: 'scale(0.97)' },
          { offset: 1, opacity: .22, filter: 'blur(1.5px)', transform: 'scale(0.97)' }
        ]));
        run(one('.result-useful'), [
          { offset: 0, transform: 'scale(1)', boxShadow: 'none' },
          { offset: .45, transform: 'scale(1)', boxShadow: 'none', easing: BOUNCE_EASE },
          { offset: .68, transform: 'scale(1.04)', boxShadow: '0 0 32px rgba(16,185,129,0.45)', borderColor: '#10b981' },
          { offset: .82, transform: 'scale(1.02)', boxShadow: '0 0 20px rgba(16,185,129,0.3)', borderColor: '#10b981' },
          { offset: 1, transform: 'scale(1.02)', boxShadow: '0 0 20px rgba(16,185,129,0.3)', borderColor: '#10b981' }
        ]);
        break;

      case 'fanout':
        pop(one('.task-core'), .04, .28, 1.12);
        pulse(one('.task-core'), .22, .55, 'rgba(37,99,235,0.3)');
        all('.fan-branches span').forEach((el, i) => draw(el, .22 + i * .12, .38 + i * .12));
        all('.fan-steps article').forEach((el, i) => {
          reveal(el, .28 + i * .12, .48 + i * .12, 30, 0, BOUNCE_EASE);
          pulse(el, .45 + i * .12, .7 + i * .12, 'rgba(37,99,235,0.2)');
        });
        break;

      case 'processing':
        all('.strip-noise').forEach((el, i) => run(el, [
          { offset: 0, opacity: 1, filter: 'blur(0px)' },
          { offset: .15 + i * .03, opacity: 1, filter: 'blur(0px)' },
          { offset: .44 + i * .03, opacity: .18, filter: 'blur(1.2px)' },
          { offset: 1, opacity: .18, filter: 'blur(1.2px)' }
        ]));
        move(one('.process-passage'), one('.process-origin'), .18, .62);
        pulse(one('.process-context'), .55, .85, 'rgba(16,185,129,0.35)');
        all('.process-step span').forEach((el, i) => pop(el, .58 + i * .09, .74 + i * .09, 1.15));
        break;

      case 'growth':
        pop(one('.growth-number'), .06, .36, 1.16);
        pulse(one('.growth-number'), .32, .65, 'rgba(37,99,235,0.3)');
        all('.growth-chart i').forEach((el, i) => run(el, [
          { offset: 0, transform: 'scaleY(0.04)' },
          { offset: .12 + i * .03, transform: 'scaleY(0.04)', easing: BOUNCE_EASE },
          { offset: .42 + i * .03, transform: 'scaleY(1.08)' },
          { offset: .54 + i * .03, transform: 'scaleY(1)' },
          { offset: 1, transform: 'scaleY(1)' }
        ]));
        reveal(one('.measurement-note'), .52, .74, 0, 15);
        break;

      case 'desk':
        reveal(one('.question-chip'), .02, .2, 0, -20);
        draw(one('.pipe-one i'), .15, .34);
        pop(one('.desk-exa'), .28, .5, 1.18);
        pulse(one('.desk-exa'), .35, .65, 'rgba(37,99,235,0.4)');
        draw(one('.pipe-two i'), .44, .62);
        reveal(one('.desk-return'), .52, .76, 30, 0, BOUNCE_EASE);
        pulse(one('.desk-return'), .68, .92, 'rgba(16,185,129,0.3)');
        break;

      case 'roles':
        pop(one('.role-exa'), .05, .28, 1.05);
        all('.role-exa .role-actions span').forEach((el, i) => reveal(el, .12 + i * .07, .28 + i * .07, -15, 0));
        pop(one('.role-transfer'), .3, .48, 1.35);
        pulse(one('.role-transfer'), .36, .6, 'rgba(37,99,235,0.4)');
        pop(one('.role-block:not(.role-exa)'), .44, .66, 1.05);
        all('.role-block:not(.role-exa) .role-actions span').forEach((el, i) => reveal(el, .5 + i * .07, .66 + i * .07, 15, 0));
        break;

      case 'economics':
        run(one('.business-card:first-child .business-meter i'), [
          { offset: 0, transform: 'scaleX(0)' },
          { offset: .15, transform: 'scaleX(0)' },
          { offset: .35, transform: 'scaleX(0.3)' },
          { offset: .45, transform: 'scaleX(0.28)' },
          { offset: .65, transform: 'scaleX(0.48)' },
          { offset: 1, transform: 'scaleX(0.48)' }
        ]);
        draw(one('.business-exa .business-meter i'), .18, .46);
        pulse(one('.business-exa'), .44, .75, 'rgba(16,185,129,0.35)');
        break;

      case 'index':
        reveal(one('.map-input-pages'), .05, .25, -20, 0);
        all('.meaning-dot').forEach((el, i) => {
          const start = .12 + (i % 8) * .03, end = start + .22;
          pop(el, start, end, 1.25);
        });
        reveal(one('.map-neighborhood'), .32, .56, 0, 0);
        pulse(one('.map-neighborhood'), .45, .75, 'rgba(16,185,129,0.25)');
        pop(one('.term-one'), .5, .72, 1.15);
        pop(one('.term-two'), .6, .82, 1.15);
        all('.map-legend > span').forEach((el, i) => pop(el, .4 + i * .12, .56 + i * .12, 1.1));
        break;

      case 'meaning':
        pop(one('.map-neighborhood'), .05, .3, 1.05);
        pulse(one('.map-neighborhood'), .2, .6, 'rgba(16,185,129,0.3)');
        run(one('.term-one'), [
          { offset: 0, opacity: 0, transform: 'translate3d(-50px, -30px, 0) scale(0.8)' },
          { offset: .15, opacity: 1, transform: 'translate3d(-50px, -30px, 0) scale(0.8)', easing: BOUNCE_EASE },
          { offset: .55, opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' },
          { offset: 1, opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' }
        ]);
        run(one('.term-two'), [
          { offset: 0, opacity: 0, transform: 'translate3d(50px, 40px, 0) scale(0.8)' },
          { offset: .25, opacity: 1, transform: 'translate3d(50px, 40px, 0) scale(0.8)', easing: BOUNCE_EASE },
          { offset: .65, opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' },
          { offset: 1, opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' }
        ]);
        pulse(one('.map-search-ring'), .55, .85, 'rgba(16,185,129,0.4)');
        break;

      case 'query':
        run(one('.map-query'), [
          { offset: 0, opacity: 0, transform: 'translate3d(-20px, -60px, 0) scale(0.7)' },
          { offset: .1, opacity: 0, transform: 'translate3d(-20px, -60px, 0) scale(0.7)', easing: BOUNCE_EASE },
          { offset: .38, opacity: 1, transform: 'translate3d(0, 0, 0) scale(1.08)' },
          { offset: .48, opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' },
          { offset: 1, opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' }
        ]);
        pulse(one('.map-search-ring'), .36, .75, 'rgba(16,185,129,0.5)');
        all('.meaning-dot.related').forEach((el, i) => run(el, [
          { offset: 0, opacity: .35, transform: 'scale(1)' },
          { offset: .38 + (i % 6) * .02, opacity: .35, transform: 'scale(1)' },
          { offset: .58 + (i % 6) * .02, opacity: 1, transform: 'scale(1.4)', background: '#10b981', boxShadow: '0 0 10px #10b981' },
          { offset: .72 + (i % 6) * .02, opacity: 1, transform: 'scale(1)', background: '#10b981' },
          { offset: 1, opacity: 1, transform: 'scale(1)', background: '#10b981' }
        ]));
        break;

      case 'exact':
        reveal(one('.signal-card:first-child'), .08, .34, -35, 0);
        run(one('.signal-plus'), [
          { offset: 0, opacity: 0, transform: 'translate3d(0, -30px, 0) rotate(-180deg) scale(0.5)' },
          { offset: .22, opacity: 0, transform: 'translate3d(0, -30px, 0) rotate(-180deg) scale(0.5)', easing: BOUNCE_EASE },
          { offset: .46, opacity: 1, transform: 'translate3d(0, 0, 0) rotate(0deg) scale(1.2)' },
          { offset: .56, opacity: 1, transform: 'translate3d(0, 0, 0) rotate(0deg) scale(1)' },
          { offset: 1, opacity: 1, transform: 'translate3d(0, 0, 0) rotate(0deg) scale(1)' }
        ]);
        reveal(one('.signal-precise'), .36, .62, 35, 0);
        pulse(one('.signal-precise'), .62, .88, 'rgba(16,185,129,0.3)');
        break;

      case 'rank':
        run(one('.rank-first'), [
          { offset: 0, transform: 'translate3d(0, 80px, 0) scale(0.95)', zIndex: 1 },
          { offset: .15, transform: 'translate3d(0, 80px, 0) scale(0.95)', zIndex: 1, easing: BOUNCE_EASE },
          { offset: .52, transform: 'translate3d(0, 0, 0) scale(1.03)', zIndex: 3, boxShadow: '0 0 28px rgba(16,185,129,0.35)' },
          { offset: .65, transform: 'translate3d(0, 0, 0) scale(1)', zIndex: 3 },
          { offset: 1, transform: 'translate3d(0, 0, 0) scale(1)', zIndex: 3 }
        ]);
        run(one('.rank-second'), [
          { offset: 0, transform: 'translate3d(0, -40px, 0)' },
          { offset: .22, transform: 'translate3d(0, -40px, 0)', easing: SPRING_EASE },
          { offset: .55, transform: 'translate3d(0, 0, 0)' },
          { offset: 1, transform: 'translate3d(0, 0, 0)' }
        ]);
        run(one('.rank-third'), [
          { offset: 0, transform: 'translate3d(0, -60px, 0)', opacity: 1 },
          { offset: .28, transform: 'translate3d(0, -60px, 0)', opacity: 1, easing: SPRING_EASE },
          { offset: .62, transform: 'translate3d(0, 0, 0)', opacity: .45 },
          { offset: 1, transform: 'translate3d(0, 0, 0)', opacity: .45 }
        ]);
        pop(one('.rank-muted'), .52, .72, 1.25);
        break;

      case 'extraction':
        move(one('.passage-one'), one('.origin-one'), .16, .56);
        move(one('.passage-two'), one('.origin-two'), .26, .66);
        pulse(one('.extract-tray'), .58, .85, 'rgba(16,185,129,0.3)');
        reveal(one('.tray-note'), .62, .82, 0, 10);
        break;

      case 'source':
        reveal(one('.source-proof-card'), .05, .26, 0, 20);
        draw(one('.source-tether'), .22, .48);
        pop(one('.source-proof-link'), .42, .68, 1.08);
        pulse(one('.source-proof-link'), .55, .85, 'rgba(16,185,129,0.35)');
        break;

      case 'controls':
        all('.control-option').forEach((el, i) => reveal(el, .06 + i * .08, .26 + i * .08, -25, 0));
        all('.control-option i').forEach((el, i) => run(el, [
          { offset: 0, transform: 'translateX(-18px)', background: '#cbd5e1', boxShadow: 'none' },
          { offset: .22 + i * .12, transform: 'translateX(-18px)', background: '#cbd5e1', boxShadow: 'none', easing: BOUNCE_EASE },
          { offset: .38 + i * .12, transform: 'translateX(0)', background: '#2563eb', boxShadow: '0 2px 8px rgba(37,99,235,0.45)' },
          { offset: 1, transform: 'translateX(0)', background: '#2563eb', boxShadow: '0 2px 8px rgba(37,99,235,0.45)' }
        ]));
        reveal(one('.control-result'), .58, .82, 25, 0, BOUNCE_EASE);
        pulse(one('.control-result'), .72, .95, 'rgba(16,185,129,0.3)');
        break;

      case 'retrieved':
        pop(one('.efficiency-big'), .06, .35, 1.18);
        pulse(one('.efficiency-big'), .3, .6, 'rgba(37,99,235,0.35)');
        run(one('.token-after'), [
          { offset: 0, width: '100%' },
          { offset: .22, width: '100%', easing: SMOOTH_EASE },
          { offset: .68, width: '5%' },
          { offset: 1, width: '5%' }
        ]);
        reveal(one('.metric-caveat'), .6, .82, 0, 10);
        break;

      case 'total':
        pop(one('.efficiency-big'), .06, .35, 1.18);
        run(one('.token-after'), [
          { offset: 0, width: '100%' },
          { offset: .22, width: '100%', easing: SMOOTH_EASE },
          { offset: .65, width: '70%' },
          { offset: 1, width: '70%' }
        ]);
        reveal(one('.metric-caveat'), .58, .82, 0, 10);
        break;

      case 'comparison':
        all('.product-card').forEach((el, i) => {
          const isExa = el.classList.contains('product-exa');
          reveal(el, .06 + i * .12, .28 + i * .12, 0, 20, isExa ? BOUNCE_EASE : SPRING_EASE);
          if (isExa) {
            run(el, [
              { offset: 0, transform: 'scale(0.96)' },
              { offset: .3, transform: 'scale(0.96)', easing: BOUNCE_EASE },
              { offset: .6, transform: 'scale(1.04)' },
              { offset: .75, transform: 'scale(1.02)' },
              { offset: 1, transform: 'scale(1.02)' }
            ]);
            pulse(el, .55, .85, 'rgba(16,185,129,0.35)');
          }
        });
        break;

      case 'payoff':
        pop(one('.handoff-evidence'), .06, .26, 1.05);
        draw(one('.handoff-link.first i'), .22, .38);
        run(one('.model-symbol'), [
          { offset: 0, transform: 'rotate(0deg) scale(0.8)' },
          { offset: .32, transform: 'rotate(0deg) scale(0.8)', easing: BOUNCE_EASE },
          { offset: .55, transform: 'rotate(180deg) scale(1.3)' },
          { offset: .68, transform: 'rotate(180deg) scale(1)' },
          { offset: 1, transform: 'rotate(180deg) scale(1)' }
        ]);
        pulse(one('.handoff-model'), .35, .62, 'rgba(37,99,235,0.35)');
        draw(one('.handoff-link.second i'), .52, .68);
        reveal(one('.handoff-answer'), .62, .85, 25, 0, BOUNCE_EASE);
        pulse(one('.handoff-answer'), .75, .98, 'rgba(16,185,129,0.35)');
        break;

      case 'checks':
        all('.evaluation-card').forEach((el, i) => reveal(el, .06 + i * .1, .26 + i * .1, -25, 15));
        all('.evaluation-card i').forEach((el, i) => {
          pop(el, .22 + i * .1, .42 + i * .1, 1.35);
          pulse(el, .32 + i * .1, .6 + i * .1, 'rgba(16,185,129,0.4)');
        });
        break;

      case 'closing':
        pop(one('.closing-emblem'), .05, .35, 1.15);
        pulse(one('.closing-emblem'), .25, .65, 'rgba(37,99,235,0.4)');
        all('.closing-tag').forEach((el, i) => pop(el, .25 + i * .1, .48 + i * .1, 1.15));
        reveal(one('.closing-path'), .55, .78, 0, 15);
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
