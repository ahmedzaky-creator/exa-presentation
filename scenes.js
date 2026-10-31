/* Separate, replayable illustrations. Every base style is a readable final state. */
(() => {
  'use strict';
  const EPA_USE = 'https://www.epa.gov/watersense/how-we-use-water';
  const EPA_REUSE = 'https://www.epa.gov/waterreuse/basic-information-about-water-reuse';
  const link = (url, label, cls = '') => `<a class="scene-source ${cls}" href="${url}" target="_blank" rel="noopener noreferrer">${label}<span aria-hidden="true">↗</span></a>`;
  const label = text => `<span class="scene-kicker">${text}</span>`;
  const caption = text => `<div class="scene-caption">${text}</div>`;
  const arrow = '<span class="flow-arrow" aria-hidden="true">→</span>';
  const card = (number, text, url, source) => `<span class="passage-number">${number}</span><p>${text}</p>${link(url, source)}`;
  const useCard = () => card('01', 'Use water efficiently to help protect local supplies.', EPA_USE, 'EPA · water use');
  const reuseCard = () => card('02', 'Treat and reuse water for purposes such as irrigation.', EPA_REUSE, 'EPA · water reuse');
  const question = '<div class="question-chip"><span aria-hidden="true">⌕</span> How can cities save water?</div>';
  const docLines = '<i></i><i></i><i></i>';

  function browser(mode) {
    return `<div class="scene scene--${mode}"><div class="browser-card"><div class="browser-chrome"><span class="browser-dots" aria-hidden="true">● ● ●</span><span>Illustrative results page</span></div>${question}<div class="browser-results"><article class="result-row result-ad">${label('Sponsored · paid placement')}<strong>A water solution for your city</strong><p>Products and services compete for attention.</p></article><article class="result-row result-organic">${label('Organic · title and snippet')}<strong>How communities use water</strong><p>Clear titles help people decide what to open.</p></article><article class="result-row result-useful">${label('A source to inspect')}<strong>Understanding water use</strong>${link(EPA_USE, 'Open the EPA source')}</article></div><div class="scan-line" aria-hidden="true"></div></div>${caption('Conceptual illustration · not a live Google result')}</div>`;
  }

  function intro(name) {
    const motifs = {
      browse: '<div class="intro-browser"><div class="intro-browser-bar"><i></i><i></i><i></i></div><div class="intro-browser-body"><b></b><i></i><i></i><i></i></div><svg class="intro-cursor" viewBox="0 0 80 100" aria-hidden="true"><path d="M8 8 L66 52 L39 58 L26 84 Z"/></svg></div>',
      agent: '<div class="intro-agent"><span class="agent-bracket">{</span><div class="agent-face"><i></i><i></i><b></b></div><span class="agent-bracket">}</span></div>',
      direct: '<div class="intro-envelope"><div class="intro-page"><span>Useful evidence</span><i></i><i></i><b>Source attached</b></div><div class="envelope-front"></div></div>',
      mechanism: '<div class="intro-map"><div class="intro-map-ring"></div><i style="--x:22%;--y:27%"></i><i style="--x:70%;--y:25%"></i><i style="--x:35%;--y:67%"></i><i style="--x:76%;--y:66%"></i><b>exa<span>.</span></b></div>',
      passages: '<div class="intro-page large"><span>One page.</span><i></i><i></i><b class="intro-highlight">The part you need.</b><i></i><i></i></div>',
      builder: '<div class="intro-plug"><span>exa</span><i aria-hidden="true"></i><b>Your AI</b></div>'
    };
    return `<div class="scene scene--intro scene--${name}"><div class="intro-halo" aria-hidden="true"></div><div class="intro-motif">${motifs[name]}</div></div>`;
  }

  function opening() {
    return `<div class="scene scene--opening"><div class="opening-orbit" aria-hidden="true"></div><div class="opening-request">How can cities save water?</div><div class="opening-core">exa<span>.</span><small>Search + retrieval</small></div><div class="opening-evidence">${label('Useful material for your AI')}<strong>Relevant sources.<br>Selected passages.</strong><div class="evidence-lines" aria-hidden="true">${docLines}</div>${link(EPA_USE, 'Example source · EPA')}</div>${caption('Illustrative question and source')}</div>`;
  }

  function fanout() {
    return `<div class="scene scene--fanout"><div class="task-core">${label('One task')}<strong>Help a city<br>save water.</strong></div><div class="fan-branches" aria-hidden="true"><span></span><span></span><span></span></div><div class="fan-steps"><article>${label('01 / Search')}<strong>What could help?</strong></article><article>${label('02 / Compare')}<strong>What do sources say?</strong></article><article>${label('03 / Follow up')}<strong>What is still missing?</strong></article></div>${caption('An illustrative workflow · the number of searches varies')}</div>`;
  }

  function processing() {
    return `<div class="scene scene--processing"><div class="process-page">${label('Opened page')}<div class="page-chrome strip-noise">Menu · Topics · About</div><div class="page-noise strip-noise">An introduction and<br>related information</div><div class="process-origin"></div><div class="page-chrome strip-noise">Related pages · Footer</div></div><div class="process-context">${label('Selected context')}<div class="context-empty">For the agent to read</div></div><article class="moving-passage process-passage">${useCard()}</article><div class="process-step"><span>Select</span><i>→</i><span>Extract</span><i>→</i><span>Process</span></div>${caption('Illustrative summary · agents can filter; selection is part of the system')}</div>`;
  }

  function growth() {
    return `<div class="scene scene--growth"><div class="growth-chart" aria-hidden="true">${[12,16,21,28,36,46,60,78,96].map((v,i)=>`<i style="--height:${v}%;--order:${i}"></i>`).join('')}</div><div class="growth-number">&gt;1,700<span>%</span></div><strong class="growth-unit">Growth in daily AI-agent<br>network requests</strong><div class="measurement-note">Cloudflare · preceding year<br>Reported 30 September 2026</div>${caption('Illustrative growth motif · network requests ≠ search queries')}</div>`;
  }

  function desk() {
    return `<div class="scene scene--desk">${question}<div class="desk-web"><span class="mini-document doc-one">Web pages${docLines}</span><span class="mini-document doc-two">Source text${docLines}</span></div><div class="desk-pipe pipe-one" aria-hidden="true"><i></i></div><div class="desk-exa">exa<span>.</span></div><div class="desk-pipe pipe-two" aria-hidden="true"><i></i></div><article class="desk-return">${label('Returned to your application')}<strong>Useful text.<br>Original sources.</strong>${link(EPA_REUSE, 'Example source · EPA')}</article>${caption('A software request returns material the agent can use')}</div>`;
  }

  function roles() {
    return `<div class="scene scene--roles"><article class="role-block role-exa">${label('The retrieval layer')}<h3>Exa finds.</h3><div class="role-actions"><span>Find sources</span><span>Select content</span><span>Return links</span></div></article><div class="role-transfer" aria-hidden="true">→</div><article class="role-block">${label('The reasoning layer')}<h3>Your AI reasons.</h3><div class="role-actions"><span>Read evidence</span><span>Compare claims</span><span>Write a response</span></div></article></div>`;
  }

  function economics() {
    return `<div class="scene scene--economics"><article class="business-card">${label('Google consumer Search')}<h3>Attention</h3><p>People browse.<br>Advertisers pay for placements.</p><div class="business-meter"><i></i></div><small>Ads are labeled. Organic ranking is separate.</small></article><article class="business-card business-exa">${label('Exa retrieval service')}<h3>Information</h3><p>Applications pay for search<br>and returned content.</p><div class="business-meter"><i></i></div><small>Built to deliver material to software.</small></article>${caption('Business-model framing attributed to Will Bryk · not a quality benchmark')}</div>`;
  }

  function map(name) {
    const dots = Array.from({length:34},(_,i)=>{const target=i<23;const a=i*2.39996,r=Math.sqrt((i%23)+1)/Math.sqrt(23);const x=(target?66:20)+Math.cos(a)*r*(target?19:12);const y=(target?45:40)+Math.sin(a)*r*(target?30:26);return `<i class="meaning-dot ${target?'related':'distant'}" style="left:${x}%;top:${y}%;--order:${i}"></i>`}).join('');
    const isIndex=name==='index';
    return `<div class="scene scene--map scene--${name}"><div class="meaning-map"><div class="map-neighborhood"></div>${dots}<div class="map-topic topic-related">Water conservation</div><div class="map-topic topic-distant">Other topics</div>${!isIndex?'<div class="map-search-ring" aria-hidden="true"></div><div class="map-query">“How can cities<br>save water?”</div>':'<div class="map-input-pages"><i></i><i></i><i></i><span>Web pages</span></div>'}<div class="map-term term-one">“urban water efficiency”</div><div class="map-term term-two">“water reuse”</div></div><div class="map-legend">${isIndex?'<span>Crawl</span><b>→</b><span>Parse</span><b>→</b><span>Prepare index</span>':name==='meaning'?'<span>Related ideas form neighborhoods.</span>':'<span>Represent the question</span><b>→</b><span>Retrieve candidates</span>'}</div>${caption('Conceptual map · not actual embedding coordinates')}</div>`;
  }

  function exact() {
    return `<div class="scene scene--exact"><article class="signal-card"><span class="signal-symbol" aria-hidden="true">≈</span>${label('Meaning')}<h3>Related language.</h3><p>“water recycling”<br><span>connects with</span><br>“water reuse”</p></article><span class="signal-plus" aria-hidden="true">+</span><article class="signal-card signal-precise"><span class="signal-symbol" aria-hidden="true">“ ”</span>${label('Precise words')}<h3>A specific place.</h3><p>“San Antonio”<br><span>keeps the search focused</span><br>on the named city.</p></article>${caption('Exa describes both neural and lexical retrieval · Google also uses semantics')}</div>`;
  }

  function rank() {
    return `<div class="scene scene--rank"><div class="rank-question">For this question, which sources help?</div><div class="rank-stack"><article class="ranking-card rank-first"><b>01</b><div><strong>How communities use water</strong><span>Relevant background</span></div>${link(EPA_USE,'EPA')}</article><article class="ranking-card rank-second"><b>02</b><div><strong>How water can be reused</strong><span>A complementary approach</span></div>${link(EPA_REUSE,'EPA')}</article><article class="ranking-card rank-third"><b>03</b><div><strong>A less relevant page</strong><span>Less useful for this task</span></div><span class="rank-muted">Lower priority</span></article></div>${caption('Illustrative ordering · not a live result or relevance benchmark')}</div>`;
  }

  function extraction() {
    return `<div class="scene scene--extraction"><div class="extract-sources"><div class="extract-document">${label('Source 01 · water use')}<div class="extract-origin origin-one"></div><div class="document-tail" aria-hidden="true">${docLines}</div></div><div class="extract-document">${label('Source 02 · reuse')}<div class="extract-origin origin-two"></div><div class="document-tail" aria-hidden="true">${docLines}</div></div></div><div class="extract-tray">${label('Selected passages')}<span class="tray-note">Different sources.<br>Complementary information.</span></div><article class="moving-passage passage-one">${useCard()}</article><article class="moving-passage passage-two">${reuseCard()}</article>${caption('Illustrative summaries · selected text travels with its source')}</div>`;
  }

  function source() {
    return `<div class="scene scene--source"><div class="source-proof-card">${label('Illustrative summary')}<p class="source-proof-text">Treat and reuse water for purposes such as irrigation.</p><div class="source-tether" aria-hidden="true"></div>${link(EPA_REUSE, 'Read the original EPA page', 'source-proof-link')}<small>Open the source. Check the context.</small></div>${caption('A source trail enables inspection; it does not guarantee correctness')}</div>`;
  }

  function controls() {
    return `<div class="scene scene--controls"><div class="control-options"><div class="control-option"><span>Where</span><strong>Selected domains</strong><i aria-hidden="true"></i></div><div class="control-option"><span>When</span><strong>Publication dates</strong><i aria-hidden="true"></i></div><div class="control-option"><span>How much</span><strong>Results + content</strong><i aria-hidden="true"></i></div></div><div class="control-result">${label('Your application chooses')}<strong>The scope.<br>The evidence.<br>The next step.</strong></div>${caption('Available options vary by mode · publication date is not crawl freshness')}</div>`;
  }

  function metric(name) {
    const retrieved=name==='retrieved';
    return `<div class="scene scene--efficiency scene--${name}">${label('Exa-reported evaluations')}<div class="efficiency-big">≈${retrieved?'95':'30'}<span>%</span></div><strong class="efficiency-unit">fewer ${retrieved?'retrieved':'total agent'} tokens</strong><div class="token-comparison"><div><span>${retrieved?'Full-page text':'Baseline agent usage'}</span><div class="token-bar"><i class="token-before"></i></div><b>100%</b></div><div><span>${retrieved?'Selected passages':'With Dynamic Highlights'}</span><div class="token-bar"><i class="token-after" style="--remaining:${retrieved?'5':'70'}%"></i></div><b>${retrieved?'≈5':'≈70'}%</b></div></div><div class="metric-caveat">${retrieved?'Average retrieved tokens versus full-page content.':'Selected Exa Agent evaluations; results vary by task.'}<br>Bars show tokens remaining. Not a Google comparison.</div></div>`;
  }

  function comparison() {
    return `<div class="scene scene--comparison"><article class="product-card">${label('Consumer browsing')}<h3>Google<br>Search</h3><div class="product-glyph" aria-hidden="true"><span></span><span></span><span></span></div><p>Browse results.<br>Open pages.<br>Select information.</p><small>A finished search experience.</small></article><article class="product-card">${label('Integrated grounding')}<h3>Gemini +<br>Google Search</h3><div class="product-glyph ground-glyph" aria-hidden="true"><span>✧</span></div><p>Let the model search<br>and generate a<br>grounded response.</p><small>Google also serves AI applications.</small></article><article class="product-card product-exa">${label('Direct retrieval')}<h3>Exa</h3><div class="product-glyph exa-glyph" aria-hidden="true"><span>exa.</span></div><p>Request sources.<br>Receive useful text.<br>Use your chosen model.</p><small>A retrieval layer for your workflow.</small></article></div>`;
  }

  function payoff() {
    return `<div class="scene scene--payoff"><div class="handoff-evidence">${label('1 / Retrieved evidence')}<article class="handoff-passage">${useCard()}</article><article class="handoff-passage">${reuseCard()}</article></div><div class="handoff-link first" aria-hidden="true"><i></i></div><div class="handoff-model">${label('2 / Your model')}<div class="model-symbol" aria-hidden="true">✧</div><strong>Read.<br>Compare.<br>Reason.</strong></div><div class="handoff-link second" aria-hidden="true"><i></i></div><div class="handoff-answer">${label('3 / Response')}<strong>Consider efficiency<br>and water reuse.</strong><p>Check local conditions<br>and supporting evidence.</p>${link(EPA_REUSE, 'Inspect the source')}</div>${caption('Illustrative response · retrieval supplies evidence; the model generates the answer')}</div>`;
  }

  function checks() {
    return `<div class="scene scene--checks">${[['01','Relevance','Does it answer the task?'],['02','Freshness','Is it current enough?'],['03','Speed','Time to useful evidence.'],['04','Total cost','Retrieval + model processing.']].map(a=>`<article class="evaluation-card"><span>${a[0]}</span><div><h3>${a[1]}</h3><p>${a[2]}</p></div><i aria-hidden="true">✓</i></article>`).join('')}</div>`;
  }

  function closing() {
    return `<div class="scene scene--closing"><div class="closing-ring ring-one" aria-hidden="true"></div><div class="closing-ring ring-two" aria-hidden="true"></div><div class="closing-emblem">exa<span>.</span></div><div class="closing-tag tag-sources">Relevant sources</div><div class="closing-tag tag-content">Useful content</div><div class="closing-tag tag-trail">A clear trail</div><div class="closing-path">Search <span>→</span> Retrieve <span>→</span> Reason</div></div>`;
  }

  const builders = {opening,ads:()=>browser('ads'),seo:()=>browser('seo'),scan:()=>browser('scan'),fanout,processing,growth,desk,roles,economics,index:()=>map('index'),meaning:()=>map('meaning'),query:()=>map('query'),exact,rank,extraction,source,controls,retrieved:()=>metric('retrieved'),total:()=>metric('total'),comparison,payoff,checks,closing};
  ['browse','agent','direct','mechanism','passages','builder'].forEach(name=>builders[name]=()=>intro(name));

  function animate(name, root) {
    const scene=root.matches?.('.scene')?root:root.querySelector('.scene');
    if (!scene) return [];
    const animations=[];
    const one=s=>scene.querySelector(s), all=s=>[...scene.querySelectorAll(s)];
    const run=(el,frames)=>{if(el) animations.push(el.animate(frames,{duration:6000,fill:'both',easing:'linear'}));};
    const reveal=(el,start=.12,end=.42,dx=0,dy=18)=>run(el,[{offset:0,opacity:0,transform:`translate(${dx}px,${dy}px)`},{offset:start,opacity:0,transform:`translate(${dx}px,${dy}px)`,easing:'cubic-bezier(.22,.7,.2,1)'},{offset:end,opacity:1,transform:'translate(0,0)'},{offset:1,opacity:1,transform:'translate(0,0)'}]);
    const draw=(el,start=.12,end=.55)=>run(el,[{offset:0,transform:'scaleX(0)'},{offset:start,transform:'scaleX(0)'},{offset:end,transform:'scaleX(1)'},{offset:1,transform:'scaleX(1)'}]);
    const move=(el,origin,start=.18,end=.63)=>{
      if(!el||!origin)return;
      const a=el.getBoundingClientRect(),b=origin.getBoundingClientRect();
      const dx=b.left-a.left,dy=b.top-a.top,scale=b.width/a.width;
      const from=`translate(${dx}px,${dy}px) scale(${scale})`;
      el.style.transformOrigin='top left';
      run(el,[{offset:0,transform:from},{offset:start,transform:from,easing:'cubic-bezier(.22,.7,.2,1)'},{offset:end,transform:'translate(0,0) scale(1)'},{offset:1,transform:'translate(0,0) scale(1)'}]);
    };
    const pulse=(el,start=.15,end=.65)=>run(el,[{offset:0,boxShadow:'0 0 0 0 rgba(66,92,245,0)'},{offset:start,boxShadow:'0 0 0 0 rgba(66,92,245,0)'},{offset:(start+end)/2,boxShadow:'0 0 0 12px rgba(66,92,245,.11)'},{offset:end,boxShadow:'0 0 0 0 rgba(66,92,245,0)'},{offset:1,boxShadow:'0 0 0 0 rgba(66,92,245,0)'}]);

    if(scene.classList.contains('scene--intro')) {
      reveal(one('.intro-motif'),.02,.29,0,24);
      run(one('.intro-halo'),[{offset:0,opacity:0,transform:'scale(.7)'},{offset:.4,opacity:1,transform:'scale(1)'},{offset:1,opacity:1,transform:'scale(1)'}]);
      return animations;
    }
    switch(name) {
      case 'opening':
        reveal(one('.opening-request'),.02,.24,0,-16);pulse(one('.opening-core'),.16,.55);reveal(one('.opening-evidence'),.32,.65,35,0);break;
      case 'ads':
        run(one('.result-ad'),[{offset:0,background:'#ffffff',boxShadow:'0 0 0 0 #e8be6d00'},{offset:.15,background:'#ffffff',boxShadow:'0 0 0 0 #e8be6d00'},{offset:.4,background:'#fff3dc',boxShadow:'0 0 0 3px #e8be6d80'},{offset:.65,background:'#fff3dc',boxShadow:'0 0 0 1px #e8be6d50'},{offset:1,background:'#fff3dc',boxShadow:'0 0 0 1px #e8be6d50'}]);reveal(one('.scene-callout'),.35,.65,20,0);break;
      case 'seo':
        pulse(one('.result-organic'),.15,.6);reveal(one('.scene-callout'),.35,.65,20,0);break;
      case 'scan':
        run(one('.scan-line'),[{offset:0,top:'29%',opacity:0},{offset:.12,top:'29%',opacity:1},{offset:.45,top:'73%',opacity:1},{offset:.6,top:'73%',opacity:0},{offset:1,top:'73%',opacity:0}]);
        all('.result-row:not(.result-useful)').forEach(el=>run(el,[{offset:0,opacity:1},{offset:.4,opacity:1},{offset:.65,opacity:.4},{offset:1,opacity:.4}]));
        pulse(one('.result-useful'),.4,.7);reveal(one('.scene-callout'),.45,.68,15,0);break;
      case 'fanout':
        all('.fan-steps article').forEach((el,i)=>reveal(el,.12+i*.1,.35+i*.12,-30,0));all('.fan-branches span').forEach((el,i)=>draw(el,.12+i*.1,.35+i*.12));break;
      case 'processing':
        move(one('.process-passage'),one('.process-origin'),.2,.64);
        all('.strip-noise').forEach(el=>run(el,[{offset:0,opacity:1},{offset:.18,opacity:1},{offset:.58,opacity:.35},{offset:1,opacity:.35}]));
        reveal(one('.process-step'),.46,.66,0,8);break;
      case 'growth':
        all('.growth-chart i').forEach((el,i)=>run(el,[{offset:0,transform:'scaleY(.05)'},{offset:.1+i*.025,transform:'scaleY(.05)'},{offset:.45+i*.025,transform:'scaleY(1)'},{offset:1,transform:'scaleY(1)'}]));break;
      case 'desk':
        draw(one('.pipe-one i'),.12,.33);pulse(one('.desk-exa'),.27,.5);draw(one('.pipe-two i'),.37,.57);reveal(one('.desk-return'),.45,.68,25,0);break;
      case 'roles':
        all('.role-exa .role-actions span').forEach((el,i)=>reveal(el,.1+i*.07,.3+i*.07,0,12));reveal(one('.role-transfer'),.32,.5,-10,0);all('.role-block:not(.role-exa) .role-actions span').forEach((el,i)=>reveal(el,.36+i*.07,.52+i*.07,0,12));break;
      case 'economics':all('.business-meter i').forEach((el,i)=>draw(el,.15+i*.12,.48+i*.12));break;
      case 'index':
        all('.meaning-dot').forEach((el,i)=>{
          const x=parseFloat(el.style.left),y=parseFloat(el.style.top);
          const box=one('.meaning-map').getBoundingClientRect();
          const dx=(12-x)*box.width/100,dy=(53-y)*box.height/100;
          const start=.1+i*.004,end=.42+i*.005;
          run(el,[{offset:0,opacity:0,transform:`translate(${dx}px,${dy}px) scale(.3)`},{offset:start,opacity:0,transform:`translate(${dx}px,${dy}px) scale(.3)`},{offset:end,opacity:1,transform:'translate(0,0) scale(1)'},{offset:1,opacity:1,transform:'translate(0,0) scale(1)'}]);
        });reveal(one('.map-neighborhood'),.3,.65,0,0);all('.map-term').forEach(el=>reveal(el,.48,.7,0,10));break;
      case 'meaning':
        pulse(one('.map-search-ring'),.1,.65);all('.map-term').forEach((el,i)=>reveal(el,.18+i*.12,.45+i*.12,0,10));break;
      case 'query':
        reveal(one('.map-query'),.08,.27,-25,0);pulse(one('.map-search-ring'),.2,.6);all('.meaning-dot.related').forEach((el,i)=>run(el,[{offset:0,opacity:.4},{offset:.25+i*.005,opacity:.4},{offset:.55+i*.004,opacity:1},{offset:1,opacity:1}]));break;
      case 'exact':reveal(one('.signal-plus'),.2,.4,0,0);reveal(one('.signal-precise'),.28,.6,25,0);break;
      case 'rank':
        all('.ranking-card').forEach((el,i)=>run(el,[{offset:0,transform:`translateY(${[55,-45,0][i]}px) rotate(${[-3,3,-1][i]}deg)`,opacity:1},{offset:.16,transform:`translateY(${[55,-45,0][i]}px) rotate(${[-3,3,-1][i]}deg)`,opacity:1},{offset:.6,transform:'translateY(0) rotate(0deg)',opacity:i===2?.55:1},{offset:1,transform:'translateY(0) rotate(0deg)',opacity:i===2?.55:1}]));break;
      case 'extraction':move(one('.passage-one'),one('.origin-one'),.18,.55);move(one('.passage-two'),one('.origin-two'),.28,.67);reveal(one('.tray-note'),.57,.75,0,10);break;
      case 'source':draw(one('.source-tether'),.18,.48);pulse(one('.source-proof-link'),.34,.65);break;
      case 'controls':all('.control-option i').forEach((el,i)=>run(el,[{offset:0,transform:'translateX(-18px)',background:'#cad3df'},{offset:.12+i*.1,transform:'translateX(-18px)',background:'#cad3df'},{offset:.3+i*.1,transform:'translateX(0)',background:'#425cf5'},{offset:1,transform:'translateX(0)',background:'#425cf5'}]));reveal(one('.control-result'),.4,.67,20,0);break;
      case 'retrieved':case 'total':
        run(one('.token-after'),[{offset:0,width:'100%'},{offset:.18,width:'100%'},{offset:.65,width:name==='retrieved'?'5%':'70%'},{offset:1,width:name==='retrieved'?'5%':'70%'}]);break;
      case 'comparison':all('.product-card').forEach((el,i)=>reveal(el,.04+i*.13,.28+i*.13,0,18));break;
      case 'payoff':draw(one('.handoff-link.first i'),.12,.3);pulse(one('.handoff-model'),.25,.55);draw(one('.handoff-link.second i'),.4,.58);reveal(one('.handoff-answer'),.45,.68,20,0);break;
      case 'checks':all('.evaluation-card i').forEach((el,i)=>reveal(el,.12+i*.1,.32+i*.1,0,8));break;
      case 'closing':reveal(one('.closing-emblem'),.02,.27,0,16);all('.closing-tag').forEach((el,i)=>reveal(el,.15+i*.1,.4+i*.1,0,10));reveal(one('.closing-path'),.45,.67,0,12);break;
    }
    return animations;
  }

  window.ExaScenes = {render(name,opts={}) {return (builders[name]||builders.opening)(opts);},animate};
})();
