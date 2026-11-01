/* Presentation content. Sources and speaker notes travel with each slide. */
(() => {
  const U = {
    search: 'https://exa.ai/docs/reference/search',
    contents: 'https://exa.ai/docs/reference/contents-retrieval',
    architecture: 'https://exa.ai/blog/how-to-build-nextgen-search',
    hybrid: 'https://exa.ai/blog/bm25-optimization',
    highlights: 'https://exa.ai/blog/dynamic-highlights',
    deep: 'https://exa.ai/docs/search/deep-search',
    pricing: 'https://exa.ai/pricing',
    interview: 'https://www.felicis.com/blog/exa-series-c-search-in-the-age-of-agents',
    video: 'https://www.youtube.com/watch?v=zY4qtpG68Ww',
    architectureTalk: 'https://www.youtube.com/watch?v=qvwjHF3_J84&t=668s',
    freshCaseStudy: 'https://www.freshconsulting.com/insights/blog/exa-ai-is-revolutionizing-search-capabilities-with-llms/',
    engineer: 'https://www.youtube.com/watch?v=xnXqpUW_Kp8',
    ads: 'https://www.google.com/intl/en_us/search/howsearchworks/our-approach/ads-on-search/',
    seo: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
    ranking: 'https://developers.google.com/search/docs/appearance/ranking-systems-guide',
    grounding: 'https://ai.google.dev/gemini-api/docs/generate-content/google-search',
    pruning: 'https://ojs.aaai.org/index.php/AAAI/article/view/40772',
    traffic: 'https://blog.cloudflare.com/agentic-web/'
  };
  const source = (label, url) => ({ label, url });

  window.EXA_SLIDES = [
    {
      chapter: '01 / THE SHIFT', eyebrow: 'Meet Exa',
      title: 'Web search built for<br><em>Autonomous AI.</em>',
      body: 'The modern web was built for human eyes and ad auctions. Exa transforms billions of live web pages into a clean, programmatic database of truth for AI agents.',
      layout: 'hero', scene: 'opening',
      sources: [source('Exa Search API', U.search), source('Inside Agent Search Talk', U.architectureTalk)],
      notes: 'Open with the central thesis: the web was never architected for autonomous software. Human search optimizes for attention, time-on-page, and ad clicks; AI agents require programmatic truth, structured JSON payloads, and low-latency retrieval. This presentation explores the technological and economic shift behind Exa, drawing from Exa\'s agent search architecture and enterprise implementations like Fresh Consulting.'
    },
    {
      chapter: '01 / THE SHIFT', eyebrow: 'The 30-Year Paradigm',
      title: 'The web was built<br><em>for human eyeballs.</em>',
      body: 'For three decades, search engines answered a single human journey: type keywords, scan blue links, dodge popups, and click into a website.',
      layout: 'intro', scene: 'browse',
      sources: [source('Google Search', U.ads), source('Fresh Consulting: LLM Search', U.freshCaseStudy)],
      notes: 'Establish the historical context. The entire consumer web stack—HTTP, HTML, SEO, ad auctions, cookie banners—assumes a human brain is sitting behind the monitor filtering out the noise. When autonomous software enters this environment, the traditional browser interaction model fundamentally collapses.'
    },
    {
      chapter: '01 / THE SHIFT', eyebrow: 'Incentives & Monetization',
      title: 'Optimized for attention,<br><em>not raw truth.</em>',
      body: 'Legacy search engines are commercial ad platforms. Revenue is tied to eyeball retention and sponsored bids, not delivering instantaneous, machine-ready intelligence.',
      layout: 'split', scene: 'ads',
      sources: [source('Google Ads Architecture', U.ads), source('Felicis: Search in the Age of Agents', U.interview)],
      notes: 'Will Bryk (Exa CEO) frames this as an alignment gap: consumer search makes money when humans linger, browse, and click sponsored links. Software agents don\'t buy sponsored clicks—they need factual answers returned directly in clean data structures without marketing distractions.'
    },
    {
      chapter: '01 / THE SHIFT', eyebrow: 'The Extraction Nightmare',
      title: 'Drowning in boilerplate<br><em>and SEO games.</em>',
      body: 'Modern web pages are clogged with 50KB+ of cookie consents, tracking scripts, affiliate fluff, and keyword stuffing engineered to game search algorithms.',
      layout: 'split', scene: 'seo',
      sources: [source('Google SEO Starter Guide', U.seo), source('Inside Exa\'s Architecture', U.architectureTalk)],
      notes: 'Nitia\'s architecture talk details why building web search for agents is so challenging: raw web pages are 95% garbage to an LLM. An autonomous agent fetching raw HTML wastes massive compute and latency simply stripping scripts, styling, cookie walls, and navigation headers.'
    },
    {
      chapter: '01 / THE SHIFT', eyebrow: 'The Cognitive Gap',
      title: 'Humans filter noise instantly.<br><em>Agents break on it.</em>',
      body: 'A human scanning for market data ignores cookie banners and ads in milliseconds. An autonomous crawler ingests every byte, exploding context windows and triggering hallucinations.',
      layout: 'split', scene: 'scan',
      sources: [source('Fresh Consulting Case Study', U.freshCaseStudy), source('Agent Context Research', U.pruning)],
      notes: 'Illustrate the contrast: human visual perception handles visual clutter effortlessly; an AI agent feeding raw HTML directly into a language model suffers from context bloat and hallucination. The failure mode of raw web scraping in production agents is severe.'
    },
    {
      chapter: '02 / THE AGENT ECONOMY', eyebrow: 'A New Class of User',
      title: 'Software is now<br><em>the primary reader.</em>',
      body: 'AI agents are autonomously driving complex business workflows: competitive intelligence, CRM enrichment, automated due diligence, and enterprise ideation.',
      layout: 'intro', scene: 'agent',
      sources: [source('Cloudflare: The Agentic Web', U.traffic), source('Fresh Consulting: Invent Value', U.freshCaseStudy)],
      notes: 'Highlight the transition from chat assistants to autonomous task-executing agents. Fresh Consulting\'s Invent Value platform is a prime enterprise example: combining frontier LLMs with Exa to brainstorm innovations and ground ideas with live, real-time market research.'
    },
    {
      chapter: '02 / THE AGENT ECONOMY', eyebrow: 'Autonomous Workflows',
      title: 'One business goal.<br><em>Dozens of deep queries.</em>',
      body: 'An enterprise agent doesn\'t execute one search. It maps competitors, cross-checks pricing, verifies compliance, and tracks executive moves in continuous multi-step loops.',
      layout: 'split', scene: 'fanout',
      sources: [source('Exa Deep Search', U.deep), source('Architecture Talk · 3:26', U.architectureTalk)],
      notes: 'In multi-agent systems, agents fan out multiple queries simultaneously. As Nitia explains in the architecture talk, an agent needs comprehensive candidate discovery. Inefficiency, stale data, or hallucination in step one compounds exponentially through subsequent reasoning steps.'
    },
    {
      chapter: '02 / THE AGENT ECONOMY', eyebrow: 'The Context Window Bottleneck',
      title: 'For a frontier model,<br><em>every token is cost & latency.</em>',
      body: 'Dumping uncurated web pages into an LLM burns cloud budgets, triggers rate limits, causes "lost-in-the-middle" reasoning failures, and slows response times.',
      layout: 'split', scene: 'processing',
      sources: [source('Dynamic Highlights', U.highlights), source('Token Efficiency · Nitia Talk', U.architectureTalk)],
      notes: 'Nitia emphasizes token efficiency: LLM context isn\'t infinite or free. If each search retrieves 20,000 tokens of raw webpage text, a 5-step agent run burns 100k tokens before doing any real work. High-density context extraction is an economic necessity.'
    },
    {
      chapter: '02 / THE AGENT ECONOMY', eyebrow: 'Market Velocity',
      title: 'Agentic traffic is<br><em>exploding exponentially.</em>',
      body: 'Cloudflare recorded over 1,700% annual growth in AI-agent network requests. Autonomous systems are rapidly becoming the dominant consumer of the global web.',
      layout: 'metric', scene: 'growth',
      sources: [source('Cloudflare Radar · Agentic Web', U.traffic), source('Felicis Series C Report', U.interview)],
      notes: 'Cloudflare\'s measured network growth of over 1,700% in daily AI agent requests demonstrates that autonomous web retrieval is not an experimental niche. It is the fastest-growing traffic segment on the internet, demanding a dedicated retrieval infrastructure.'
    },
    {
      chapter: '03 / THE SEARCH LAYER', eyebrow: 'The Paradigm Shift',
      title: 'What if the entire web<br><em>were a queryable API?</em>',
      body: 'Stop forcing AI agents to scrape websites with headless browsers. Give them a direct semantic data pipeline built from the ground up for models.',
      layout: 'intro', scene: 'direct',
      sources: [source('Exa Search API', U.search), source('Exa Engineering Blog', U.architecture)],
      notes: 'Instead of maintaining fragile Puppeteer or Selenium scrapers that constantly break on Cloudflare turnstiles, bot-blockers, or DOM mutations, developers need an API that treats the web as a queryable database with clean, deterministic outputs.'
    },
    {
      chapter: '03 / THE SEARCH LAYER', eyebrow: 'The Retrieval Engine',
      title: 'Natural intent in.<br><em>Structured intelligence out.</em>',
      body: 'Your agent asks in natural language or by example. Exa traverses the indexed web, strips the noise, and returns clean, verified text with inspectable source citations.',
      layout: 'split', scene: 'desk',
      sources: [source('Exa Search Docs', U.search), source('Contents Retrieval API', U.contents)],
      notes: 'Exa returns clean JSON payloads containing metadata, clean markdown, dynamic highlights, and published dates. Agents ingest pure signal with zero boilerplate parsing, ready for immediate inference.'
    },
    {
      chapter: '03 / THE SEARCH LAYER', eyebrow: 'Architectural Division',
      title: 'Exa retrieves.<br><em>Your models reason.</em>',
      body: 'Exa handles the massive distributed engineering of crawling, neural indexing, and parsing. Your models dedicate 100% of their compute to synthesis and decision-making.',
      layout: 'wide', scene: 'roles',
      sources: [source('Exa Architecture Guide', U.architecture), source('Fresh Consulting Analysis', U.freshCaseStudy)],
      notes: 'Clear architectural division: retrieval is a search engine problem, not an LLM generation problem. Delegating retrieval to Exa preserves model context and compute for high-order reasoning.'
    },
    {
      chapter: '03 / THE SEARCH LAYER', eyebrow: 'Aligned Incentives',
      title: 'Information vs. Attention:<br><em>Two different business models.</em>',
      body: 'Google consumer search monetizes human ad clicks. Exa charges software developers for high-precision data delivery. Our incentive is giving your agent the exact truth instantly.',
      layout: 'wide', scene: 'economics',
      sources: [source('Bryk · Felicis Interview', U.interview), source('Exa Pricing', U.pricing)],
      notes: 'Economics dictate engineering. When your customer is an autonomous agent builder, there are zero ads, zero sponsored rankings, and zero tracking tricks. The only metric is retrieval precision, latency, and token density.'
    },
    {
      chapter: '04 / UNDER THE HOOD', eyebrow: 'Inside The Engine',
      title: 'Treating the web<br><em>as a database.</em>',
      body: 'How Exa builds a custom AI search engine: billions of live web pages pre-crawled, semantically indexed, and mapped into high-dimensional vector space.',
      layout: 'intro', scene: 'mechanism',
      sources: [source('How to Build NextGen Search', U.architecture), source('Nitia Talk · The Web as a Database', U.architectureTalk)],
      notes: 'Nitia specifically describes "treating the web as a database": not relying on external SERPs or slow real-time scraping, but creating an independent, AI-native crawl index updated continuously.'
    },
    {
      chapter: '04 / HOW EXA THINKS', eyebrow: 'The Core Concept: Vectors',
      title: 'What is a vector?<br><em>A GPS coordinate for ideas.</em>',
      body: 'Just like latitude and longitude pinpoint any city on a physical map, a vector is a list of numbers that pinpoints where an idea lives on a map of meaning. Close coordinates mean close concepts.',
      layout: 'wide', scene: 'index',
      sources: [source('How to Build NextGen Search', U.architecture), source('Nitia Architecture Talk', U.architectureTalk)],
      notes: 'Explain vectors without mathematical jargon. If you want a computer to understand language, you cannot just feed it letters. You turn words into coordinates—a vector. On a 2D map, two numbers tell you where a city is. In AI, a vector has hundreds of numbers describing the concept\'s topic, tone, industry, and intent.'
    },
    {
      chapter: '04 / HOW EXA THINKS', eyebrow: 'Vector Embeddings',
      title: 'Words become coordinates.<br><em>Meanings become neighbors.</em>',
      body: '“Affordable coastal cottage” and “cheap family beach trip” share zero keywords—yet their vector coordinates land side-by-side because their meaning is identical.',
      layout: 'split', scene: 'meaning',
      sources: [source('Exa Neural Approach', U.architecture), source('Founder Talk · Embeddings', U.engineer)],
      notes: 'Explain vector embeddings with a real, everyday example. Traditional keyword search is blind: if you search for "cheap family beach trip", it looks only for the literal words "cheap", "family", and "beach". An embedding model translates human sentences into vector coordinates based on meaning. Even if two websites use completely different words to describe the same vacation or product, their embeddings sit in the exact same neighborhood.'
    },
    {
      chapter: '04 / HOW EXA THINKS', eyebrow: 'Pre-Mapping the Internet',
      title: 'Exa embeds the web<br><em>before your question arrives.</em>',
      body: 'Exa crawls billions of web pages continuously, translates each one into an embedding coordinate, and organizes the entire internet into a living, pre-computed map of knowledge.',
      layout: 'wide', scene: 'query',
      sources: [source('Exa Indexing Architecture', U.architecture), source('Nitia Talk · Web as a Database', U.architectureTalk)],
      notes: 'This is how Exa achieves sub-200ms speed. You cannot read and understand the entire web in real time when someone asks a question. Exa does the heavy lifting ahead of time: continuously reading billions of web pages, generating their vector embeddings, and storing them in an organized vector database. When a search happens, the map of the web is already built and waiting.'
    },
    {
      chapter: '04 / HOW EXA THINKS', eyebrow: 'Matching the Query',
      title: 'Drop a pin on the map.<br><em>Find the nearest neighbors.</em>',
      body: 'When your agent asks a question, Exa turns the query into a coordinate too. Retrieval simply draws a circle and grabs the web pages sitting closest to that pin.',
      layout: 'wide', scene: 'exact',
      sources: [source('Exa Hybrid Search', U.hybrid), source('Exa Search API', U.search)],
      notes: 'Explain query matching as dropping a pin. Step 1: An agent asks "Show me tools that automate clinical doctor paperwork". Step 2: Exa turns that question into an embedding coordinate (a pin on the map). Step 3: Fast vector math finds the pre-indexed web pages with the closest coordinates—surfacing "ambient AI medical scribes" instantly, even though the query never used the word "scribe". If needed, exact filters (like "HIPAA compliant") can be added for precision.'
    },
    {
      chapter: '04 / HOW EXA THINKS', eyebrow: 'The Search Superpower',
      title: 'Search by what it does,<br><em>not just what it repeats.</em>',
      body: 'Legacy search rewards SEO blogs that repeat keywords 50 times. Vector search rewards pages whose true meaning actually answers your agent\'s task.',
      layout: 'split', scene: 'rank',
      sources: [source('Exa Ranking Systems', U.architecture), source('Fresh Consulting Analysis', U.freshCaseStudy)],
      notes: 'Bring it back to why this matters to the user and business. Anyone can game traditional search engines by stuffing keywords into an article. But with vector embeddings, a document\'s position on the map is determined by its deep semantic content, not keyword tricks. Exa brings genuinely useful, high-signal technical documentation and solutions to the top for autonomous agents.'
    },
    {
      chapter: '05 / USEFUL EVIDENCE', eyebrow: 'The Surgical Context Problem',
      title: 'Finding the URL<br><em>is only step one.</em>',
      body: 'A search engine that returns 10 raw URLs forces an agent to download, parse, and clean gigabytes of HTML. True agent search must deliver surgical context.',
      layout: 'intro', scene: 'passages',
      sources: [source('Dynamic Highlights Blog', U.highlights), source('Contents Retrieval API', U.contents)],
      notes: 'Introduce the core differentiator: Exa does not stop at returning links. It returns the exact extracted passages required to answer the question, formatted for immediate model consumption.'
    },
    {
      chapter: '05 / USEFUL EVIDENCE', eyebrow: 'Dynamic Highlights',
      title: 'Dynamic Highlights:<br><em>Extracting complementary evidence.</em>',
      body: 'Exa\'s custom model reads across all retrieved documents simultaneously, allocating context dynamically to extract complementary facts while pruning repetitive fluff.',
      layout: 'wide', scene: 'extraction',
      sources: [source('Dynamic Highlights Announcement', U.highlights), source('Nitia Talk · Context Bloat', U.architectureTalk)],
      notes: 'Explain Dynamic Highlights: rather than extracting a fixed 200 words from each page in isolation, Exa\'s multi-document model allocates tokens across all sources, ensuring diverse, non-redundant evidence across the whole task.'
    },
    {
      chapter: '05 / USEFUL EVIDENCE', eyebrow: 'Traceable Ground Truth',
      title: 'Zero hallucinations:<br><em>Every sentence carries a verified link.</em>',
      body: 'In enterprise finance, legal, and healthcare, ungrounded AI is a liability. Exa anchors every highlight to its live source URL, enabling instant verification.',
      layout: 'split', scene: 'source',
      sources: [source('Exa Response Metadata', U.search), source('Fresh Consulting: Governance', U.freshCaseStudy)],
      notes: 'Fresh Consulting highlights data security, governance, and citation auditability as paramount for enterprise adoption. Exa provides an unbreakable audit trail from model output back to the original source web page.'
    },
    {
      chapter: '05 / USEFUL EVIDENCE', eyebrow: 'Granular Parameters',
      title: 'Programmable search<br><em>for every agent persona.</em>',
      body: 'Filter by trusted domains, set exact publication date boundaries, specify subpage depth, or trigger live real-time crawling—all with a single API call.',
      layout: 'split', scene: 'controls',
      sources: [source('Exa API Reference', U.search), source('Deep Search Documentation', U.deep)],
      notes: 'Give agents surgical parameters: whitelist regulatory sites (e.g. sec.gov, github.com), filter for news published in the last 24 hours, or crawl linked subpages for deep research.'
    },
    {
      chapter: '05 / USEFUL EVIDENCE', eyebrow: 'Context Optimization',
      title: 'Slashing retrieved tokens<br><em>by up to 95%.</em>',
      body: 'Exa reports an average 95% reduction in retrieved tokens with Dynamic Highlights compared to full-page content—drastically cutting context bloat.',
      layout: 'metric', scene: 'retrieved',
      sources: [source('Exa Highlights Benchmark', U.highlights), source('Nitia Architecture Talk', U.architectureTalk)],
      notes: 'Highlight the math: full-page scraping easily generates 20k-50k tokens per search. Dynamic Highlights reduces that to ~1,000 tokens of high-density signal, keeping the model fast and within rate limits.'
    },
    {
      chapter: '05 / USEFUL EVIDENCE', eyebrow: 'Production Economics',
      title: 'Slashing total agent cost<br><em>by ~30% with higher accuracy.</em>',
      body: 'Across rigorous benchmarks (BrowseComp & WideSearch), Exa reduced end-to-end agent token consumption by ~30% while delivering a 2.1% boost in final task accuracy.',
      layout: 'metric', scene: 'total',
      sources: [source('Exa Agent Benchmark Evaluation', U.highlights), source('Agent Efficiency Research', U.architectureTalk)],
      notes: 'Crucial business distinction: reducing retrieved tokens is great, but reducing total agent tokens across the entire multi-step reasoning workflow by 30% while boosting accuracy transforms unit economics at scale.'
    },
    {
      chapter: '06 / ENTERPRISE SCALE', eyebrow: 'Production Architecture',
      title: 'The Generator-Verifier loop:<br><em>How top teams build.</em>',
      body: 'In the Exa architecture talk, Nitia details how world-class agent systems separate coordinator generation, Exa retrieval, and verifier sub-agents.',
      layout: 'intro', scene: 'builder',
      sources: [source('YouTube: Nitia Architecture Talk (11:08)', U.architectureTalk), source('Fresh Consulting: Invent Value', U.freshCaseStudy)],
      notes: 'Deep-dive into the reference video timestamp (11:08 / 668s): the Generator-Verifier loop. A high-capability coordinator LLM plans queries, Exa retrieves clean highlights, and fast, low-cost verifier sub-agents check citations and filter hallucinations before finalizing.'
    },
    {
      chapter: '06 / ENTERPRISE SCALE', eyebrow: 'Strategic Evaluation',
      title: 'Choosing your search layer:<br><em>Google vs Grounding vs Exa.</em>',
      body: 'Consumer search is built for browsing. Proprietary grounding locks you into single-vendor LLM ecosystems. Exa provides an open, model-agnostic retrieval engine for your custom agent stack.',
      layout: 'wide', scene: 'comparison',
      sources: [source('Google AI Grounding', U.grounding), source('Exa Search API', U.search), source('Fresh Consulting Analysis', U.freshCaseStudy)],
      notes: 'Compare product architectures objectively: Google SERP is for human browsing; Google AI Grounding is tightly coupled to Gemini; Exa gives you total autonomy to pair the web with any LLM (Claude, OpenAI, DeepSeek, open-source weights) and orchestrate your own agent loops.'
    },
    {
      chapter: '06 / ENTERPRISE SCALE', eyebrow: 'Enterprise Case Studies',
      title: 'Proven enterprise impact:<br><em>Ideation, Diligence & Support.</em>',
      body: 'Fresh Consulting uses Exa inside their "Invent Value" platform to automate brainstorming with live market grounding. Enterprises deploy Exa for CRM enrichment, competitor intelligence, and automated support.',
      layout: 'wide', scene: 'payoff',
      sources: [source('Fresh Consulting Case Study', U.freshCaseStudy), source('Exa Customer Stories', U.interview)],
      notes: 'Showcase the Fresh Consulting case study: combining OpenAI and Exa AI inside Invent Value to generate innovation concepts grounded with live web intelligence. Also highlight customer support automation and financial due diligence.'
    },
    {
      chapter: '06 / ENTERPRISE SCALE', eyebrow: 'The Evaluation Scorecard',
      title: 'Measure what matters:<br><em>Speed, Cost, and Accuracy.</em>',
      body: 'Evaluate Exa on your production workloads: sub-200ms latency for voice agents, exhaustive precision for deep research, 95% token savings, and zero web scraper maintenance.',
      layout: 'split', scene: 'checks',
      sources: [source('Exa Architecture Talk', U.architectureTalk), source('Exa Pricing & ROI', U.pricing)],
      notes: 'Provide an executive scorecard: 1) Latency spectrum (fast sub-200ms vs deep search), 2) Grounded accuracy with citations, 3) 30-95% inference cost reduction, 4) Zero engineering overhead maintaining broken scrapers.'
    },
    {
      chapter: '06 / ENTERPRISE SCALE', eyebrow: 'Exa · The Search Engine for AI',
      title: 'Give your AI agents<br><em>the web they deserve.</em>',
      body: 'The internet is the world\'s largest living knowledge base. Exa gives autonomous AI the programmatic search layer to turn that knowledge into enterprise action.',
      layout: 'hero', scene: 'closing',
      sources: [source('Start Building with Exa', U.search), source('Watch Architecture Talk', U.architectureTalk)],
      notes: 'Close with a bold, memorable call to action: traditional search built the web for humans; Exa is building the web for the next trillion AI agents. Invite the audience to test Exa on their hardest enterprise workflows.'
    }
  ];
})();
