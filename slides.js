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
    engineer: 'https://www.youtube.com/watch?v=xnXqpUW_Kp8',
    ads: 'https://www.google.com/intl/en_us/search/howsearchworks/our-approach/ads-on-search/',
    seo: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
    ranking: 'https://developers.google.com/search/docs/appearance/ranking-systems-guide',
    grounding: 'https://ai.google.dev/gemini-api/docs/generate-content/google-search',
    pruning: 'https://ojs.aaai.org/index.php/AAAI/article/view/40772',
    traffic: 'https://blog.cloudflare.com/agentic-web/',
    water: 'https://www.epa.gov/watersense/how-we-use-water',
    reuse: 'https://www.epa.gov/waterreuse/basic-information-about-water-reuse'
  };
  const source = (label, url) => ({ label, url });

  window.EXA_SLIDES = [
    {
      chapter: '01 / THE HUMAN WEB', eyebrow: 'Meet Exa',
      title: 'Give your AI<br><em>a research desk.</em>',
      body: 'Exa is web search and retrieval for AI applications. It finds relevant pages and returns useful text with source links.',
      layout: 'hero', scene: 'opening',
      sources: [source('What Exa returns', U.search)],
      notes: 'Start with the definition: Exa is web search and retrieval for AI applications. Its API lets software ask for sources and content directly. The research desk is a metaphor for finding and selecting material, not a guarantee of accuracy. We will follow one illustrative question: how can cities save water? This presentation shows the workflow, not a live search or benchmark.'
    },
    {
      chapter: '01 / THE HUMAN WEB', eyebrow: 'First, the familiar experience',
      title: 'The web was made<br><em>to be browsed.</em>',
      body: 'A person asks a question, scans the results, and decides where to go.',
      layout: 'intro', scene: 'browse',
      sources: [source('Google Search', U.ads)],
      notes: 'Introduce the consumer browsing experience before contrasting it with an application interface. This is a framing of the familiar search journey, not a claim that every part of the web was designed only for humans. The next three slides separate advertising, publisher discovery, and human selection.'
    },
    {
      chapter: '01 / THE HUMAN WEB', eyebrow: 'On the results page',
      title: 'Ads compete<br><em>for attention.</em>',
      body: 'Sponsored placements give advertisers a place to be seen. They are labeled separately from organic results.',
      layout: 'split', scene: 'ads',
      sources: [source('How Google ads work', U.ads)],
      notes: 'Google says advertising supports free access to consumer Search. Paid placements are labeled and separate from organic results. Advertising does not buy a higher organic ranking. Google also says most searches show no ads, so the illustration must not imply that every results page contains them. This is about the interface and business model, not a measured quality comparison.'
    },
    {
      chapter: '01 / THE HUMAN WEB', eyebrow: 'Behind the results page',
      title: 'Publishers work<br><em>to be discovered.</em>',
      body: 'Search engine optimization helps pages appear clearly in search. Titles and snippets help people decide whether to open them.',
      layout: 'split', scene: 'seo',
      sources: [source('Google SEO guide', U.seo)],
      notes: 'Define SEO as search engine optimization. Google describes it as helping search engines understand content and helping users find a site and decide whether to visit. It is not inherently spam or deception. Publishers can improve titles and descriptions, while search engines may generate or adapt displayed titles and snippets. Keep this separate from buying an advertisement.'
    },
    {
      chapter: '01 / THE HUMAN WEB', eyebrow: 'You make the selection',
      title: 'You know what<br><em>to open.</em>',
      body: 'For “How can cities save water?”, you scan past distractions and choose a source worth reading.',
      layout: 'split', scene: 'scan',
      sources: [source('Example: EPA water use', U.water)],
      notes: 'The search page is illustrative, not a screenshot or a claim about an actual Google ranking. The human selects a plausible source, then reads it in context. Do not attach an unmeasured five-second claim to this visual. The EPA link is a real source used for the water example.'
    },
    {
      chapter: '02 / A NEW READER', eyebrow: 'Now change the reader',
      title: 'What if software<br><em>does the reading?</em>',
      body: 'The question stays the same. The work moves into an agent.',
      layout: 'intro', scene: 'agent',
      sources: [source('Bryk: a new search user', U.interview)],
      notes: 'An agent is software that can take steps toward a task, such as searching, reading, and following up. It may use a browser or direct APIs. This transition introduces a different workflow rather than claiming that agents cannot navigate pages or ignore advertising.'
    },
    {
      chapter: '02 / A NEW READER', eyebrow: 'One question opens several directions',
      title: 'One task.<br><em>Several searches.</em>',
      body: 'The agent may investigate water use, compare conservation options, and follow up on water reuse. Each step needs relevant information.',
      layout: 'split', scene: 'fanout',
      sources: [source('Interview · 3:39', U.video + '&t=219s'), source('Exa Deep Search', U.deep)],
      notes: 'Will Bryk describes agents making richer requests and needing complementary evidence from multiple sources. The branches illustrate possible steps in a water-research task; they are not a fixed number of queries per task. The point is that retrieval quality and processing overhead can matter repeatedly within one workflow.'
    },
    {
      chapter: '02 / A NEW READER', eyebrow: 'Every step needs selection',
      title: 'For a model,<br><em>text is work.</em>',
      body: 'An agent system must select, extract, and process useful content. Exa can return focused passages with their source links.',
      layout: 'split', scene: 'processing',
      sources: [source('Exa Highlights', U.highlights), source('Agent filtering research', U.pruning)],
      notes: 'Agents can filter pages, prune a DOM, or request focused excerpts; they are not forced to process every visible element. The illustration shows the work involved in selecting content for a model. Additional text can consume context and processing when it is passed onward. Exa retrieves web information; it does not simply remove advertisements from Google results.'
    },
    {
      chapter: '02 / A NEW READER', eyebrow: 'Why this matters now',
      title: 'The new reader<br><em>is growing fast.</em>',
      body: 'Cloudflare reported over 1,700% growth in daily AI-agent network requests over the preceding year. These are requests, not search counts.',
      layout: 'metric', scene: 'growth',
      sources: [source('Cloudflare · 30 Sep 2026', U.traffic)],
      notes: 'Cloudflare reported this network measurement on 30 September 2026. It covers daily requests identified as AI-agent activity on its network over the preceding year. It is not a measure of all Internet searches, human-versus-agent search volume, or Exa usage. The justified conclusion is rapid growth in measured agent activity, not that agents search as much as people.'
    },
    {
      chapter: '03 / MEET THE SEARCH LAYER', eyebrow: 'A different way to ask',
      title: 'What if useful material<br><em>came back directly?</em>',
      body: 'Give the agent the material it needs for its next step.',
      layout: 'intro', scene: 'direct',
      sources: [source('Exa Search API', U.search)],
      notes: 'Introduce the promise before explaining the machinery. A direct retrieval interface lets the application request sources and content instead of having to build every browsing step itself. Whether this is better for a particular task must still be evaluated.'
    },
    {
      chapter: '03 / MEET THE SEARCH LAYER', eyebrow: 'This is Exa’s role',
      title: 'A question in.<br><em>Evidence out.</em>',
      body: 'The application asks Exa for information. Exa returns relevant pages, useful passages, and original links as requested.',
      layout: 'split', scene: 'desk',
      sources: [source('Search API', U.search), source('Content retrieval', U.contents)],
      notes: 'An API is a direct way for software to request information. Exa Search can return source URLs and metadata plus requested text or highlights. The water example uses illustrative summaries of real EPA pages, not recorded search results. Returned evidence still requires assessment for relevance, completeness, freshness, and correctness.'
    },
    {
      chapter: '03 / MEET THE SEARCH LAYER', eyebrow: 'Two responsibilities',
      title: 'Exa finds.<br><em>Your AI reasons.</em>',
      body: 'Exa retrieves the material. Your model compares it, decides what to do next, and writes the response.',
      layout: 'wide', scene: 'roles',
      sources: [source('Exa Search API', U.search)],
      notes: 'Keep retrieval and generation distinct. In this architecture, Exa supplies evidence to the application’s model; the model interprets it and produces a response. Exa also offers higher-level research and answer products, so this is a focused explanation of the core retrieval role, not the complete product catalog.'
    },
    {
      chapter: '03 / MEET THE SEARCH LAYER', eyebrow: 'The business-model difference',
      title: 'Different customers.<br><em>Different incentives.</em>',
      body: 'Google’s consumer search is ad-supported. Exa charges applications for retrieval. Bryk frames this as a shift from attention to information.',
      layout: 'wide', scene: 'economics',
      sources: [source('Bryk · 10:52', U.video + '&t=652s'), source('Google ads', U.ads), source('Exa pricing', U.pricing)],
      notes: 'Attribute the incentives argument to Will Bryk’s Felicis interview. It is a founder’s thesis in an investor interview, not an independent performance result. Google also sells developer services. Ads do not buy organic ranking, and paid retrieval alone does not prove superior quality. No pricing amounts are shown because the relevant distinction here is who pays for which product.'
    },
    {
      chapter: '04 / HOW EXA FINDS IT', eyebrow: 'Open the search engine',
      title: 'How does Exa<br><em>find the information?</em>',
      body: 'It prepares the web before your question arrives.',
      layout: 'intro', scene: 'mechanism',
      sources: [source('Exa engineering', U.architecture)],
      notes: 'Introduce the mechanism with preparation, then explain the index and learned representations on separate slides. This is an accessible conceptual model of Exa’s documented architecture, not a complete production-system diagram.'
    },
    {
      chapter: '04 / HOW EXA FINDS IT', eyebrow: 'Prepare before the question',
      title: 'Build the index<br><em>ahead of time.</em>',
      body: 'Exa crawls pages, parses their content, and organizes it for retrieval. Each question can use that prepared index.',
      layout: 'wide', scene: 'index',
      sources: [source('Exa’s search infrastructure', U.architecture)],
      notes: 'Exa describes its own crawling, parsing, document representations, and search infrastructure. An index is the prepared structure that makes retrieval possible. Major search engines also build indexes, so indexing itself is not an exclusive Exa invention. Coverage and freshness vary, and a search does not reread the entire web on demand.'
    },
    {
      chapter: '04 / HOW EXA FINDS IT', eyebrow: 'Think of a map of meaning',
      title: 'Related ideas<br><em>become neighbors.</em>',
      body: 'Embeddings are learned lists of numbers. They help connect “saving water” with “water conservation,” even when the wording differs.',
      layout: 'split', scene: 'meaning',
      sources: [source('Exa’s neural approach', U.architecture), source('Founder talk · 4:00', U.engineer + '&t=240s')],
      notes: 'Use the map metaphor first, then name the mechanism: embeddings are learned numeric representations. The map is a two-dimensional illustration, not actual model vectors or proof that distance always equals relevance. Learned representations can capture relationships beyond matching words. Google also uses neural and semantic ranking systems; this capability is not exclusive to Exa.'
    },
    {
      chapter: '04 / HOW EXA FINDS IT', eyebrow: 'Now ask the prepared index',
      title: 'Put the question<br><em>on the map.</em>',
      body: 'The query becomes a representation too. Retrieval uses it to find promising material in the prepared index.',
      layout: 'wide', scene: 'query',
      sources: [source('Exa engineering', U.architecture), source('Founder talk · 4:43', U.engineer + '&t=283s')],
      notes: 'Keep the map in the same arrangement as the previous scene. Animate only the arriving query and relevant area. The mechanism is more sophisticated than a literal two-dimensional nearest-neighbor lookup, and it does not compare every page exhaustively for each query. This scene explains the role of the learned query representation.'
    },
    {
      chapter: '04 / HOW EXA FINDS IT', eyebrow: 'Meaning and precision work together',
      title: 'Understand the idea.<br><em>Keep the exact detail.</em>',
      body: 'Meaning connects “water reuse” and “water recycling.” Precise words can identify a particular place, such as San Antonio.',
      layout: 'wide', scene: 'exact',
      sources: [source('Exa hybrid retrieval', U.hybrid), source('Google ranking systems', U.ranking)],
      notes: 'Exa’s BM25 engineering article describes keyword and embedding methods as complementary. Semantic retrieval can connect related wording; lexical retrieval helps with exact terms. Neither guarantees a correct match. Do not describe Exa as embedding-only or Google as keyword-only. The water-reuse example remains the same story rather than introducing an unrelated demonstration.'
    },
    {
      chapter: '04 / HOW EXA FINDS IT', eyebrow: 'Narrow the field',
      title: 'Bring promising sources<br><em>to the top.</em>',
      body: 'Retrieval finds candidates. Ranking orders them for the question, bringing relevant material into reach.',
      layout: 'split', scene: 'rank',
      sources: [source('Exa Search API', U.search)],
      notes: 'The order shown is illustrative, not a live Exa ranking or measured relevance score. Real results depend on the query, requested mode, filters, index coverage, and ranking behavior. Useful research can need complementary evidence as well as highly relevant individual pages.'
    },
    {
      chapter: '05 / USEFUL EVIDENCE', eyebrow: 'After finding the page',
      title: 'Finding a page<br><em>is half the job.</em>',
      body: 'The next question is which parts deserve the agent’s attention.',
      layout: 'intro', scene: 'passages',
      sources: [source('Dynamic Highlights', U.highlights)],
      notes: 'Pause before introducing passage selection. The search engine has found promising sources, but the application still needs useful material from within them. This sets up the distinction between retrieving documents and selecting context.'
    },
    {
      chapter: '05 / USEFUL EVIDENCE', eyebrow: 'Select across the sources',
      title: 'Choose passages<br><em>that add something.</em>',
      body: 'Dynamic Highlights considers the retrieved pages together, selecting useful passages and reducing repeated or irrelevant text.',
      layout: 'wide', scene: 'extraction',
      sources: [source('Dynamic Highlights', U.highlights), source('Interview · 3:39', U.video + '&t=219s')],
      notes: 'Exa describes a custom model that considers retrieved documents together and dynamically allocates content across them. This can preserve complementary information rather than taking the same budget from every page independently. It is a research preview in the cited announcement. The animated EPA summaries are illustrative, not raw excerpts returned by a recorded API call.'
    },
    {
      chapter: '05 / USEFUL EVIDENCE', eyebrow: 'Make the evidence inspectable',
      title: 'Keep the source<br><em>with the sentence.</em>',
      body: 'A useful passage carries a link back to its original page. Open it, read the context, and check the claim.',
      layout: 'split', scene: 'source',
      sources: [source('Example: EPA water reuse', U.reuse), source('Exa response fields', U.search)],
      notes: 'Click the source badge to demonstrate inspection. A real URL makes it possible to revisit the original context; it does not guarantee that the source is correct or that the passage supports a model’s conclusion. The displayed text is labeled as an illustrative summary of the linked EPA page.'
    },
    {
      chapter: '05 / USEFUL EVIDENCE', eyebrow: 'Give retrieval a brief',
      title: 'Choose what<br><em>comes back.</em>',
      body: 'Set source preferences, publication dates, result limits, and content options to fit the task.',
      layout: 'split', scene: 'controls',
      sources: [source('Exa Search controls', U.search)],
      notes: 'Explain controls as a research brief: where to look, how recent material should be, and how much to return. Exact options and combinations depend on the mode. Publication-date filtering is different from when a page was crawled or how recently content was fetched. Other providers also offer controls; this slide explains Exa’s interface rather than claiming exclusivity.'
    },
    {
      chapter: '05 / USEFUL EVIDENCE', eyebrow: 'First measurement: retrieved text',
      title: 'Less material<br><em>to read.</em>',
      body: 'Exa reports approximately 95% fewer retrieved tokens on average with Dynamic Highlights, compared with full-page content.',
      layout: 'metric', scene: 'retrieved',
      sources: [source('Exa-reported evaluation', U.highlights)],
      notes: 'The denominator here is retrieved content: Dynamic Highlights versus the full content of pages. Exa reports an average reduction of approximately 95%. Tokens are the chunks of text processed by language models. This does not mean 95% less total agent work, 95% lower application cost, or a result measured against Google. Quality must be assessed alongside volume.'
    },
    {
      chapter: '05 / USEFUL EVIDENCE', eyebrow: 'Second measurement: the whole agent',
      title: 'Then measure<br><em>the whole job.</em>',
      body: 'Separately, Exa reports approximately 30% fewer total agent tokens in selected evaluations. This includes more than the text retrieved from search.',
      layout: 'metric', scene: 'total',
      sources: [source('Exa-reported agent evaluation', U.highlights)],
      notes: 'This is a separate denominator. Exa used Exa Agent effort Auto on BrowseComp and WideSearch, and effort Medium on internal company and people datasets. It reports approximately 30% lower total agent token usage, with a 2.1% average quality gain. Results vary across tasks. Reasoning and follow-up searches also consume tokens, so reducing retrieved text alone does not guarantee proportionate savings. These are vendor-reported evaluations, not Google comparisons.'
    },
    {
      chapter: '06 / THE BUILDER’S CHOICE', eyebrow: 'Bring the story back to value',
      title: 'What changes<br><em>for the builder?</em>',
      body: 'A search layer becomes part of the agent you choose to build.',
      layout: 'intro', scene: 'builder',
      sources: [source('Exa Search API', U.search)],
      notes: 'Shift from mechanism to product choice. A direct retrieval layer gives the application sources and content to place in its own workflow. The value depends on whether those results help the agent perform the intended task with acceptable speed, quality, and cost.'
    },
    {
      chapter: '06 / THE BUILDER’S CHOICE', eyebrow: 'Compare the actual products',
      title: 'Choose the interface<br><em>for the job.</em>',
      body: 'Google Search offers browsing. Google AI grounding connects search and generation. Exa offers direct retrieval for your chosen model and workflow.',
      layout: 'wide', scene: 'comparison',
      sources: [source('Google Search', U.ranking), source('Google AI grounding', U.grounding), source('Exa Search', U.search)],
      notes: 'Compare product interfaces, not universal search quality. Google consumer Search is a browsing experience. Gemini’s Google Search grounding can search, process results, and return a grounded answer with citation metadata. Exa provides sources and requested content to use in an application’s chosen model and workflow. Google also serves AI applications; Exa is not the only provider of agent-accessible search.'
    },
    {
      chapter: '06 / THE BUILDER’S CHOICE', eyebrow: 'Complete the original task',
      title: 'Evidence first.<br><em>Response next.</em>',
      body: 'For our water question, the agent combines useful information, checks its support, and produces an answer with a source trail.',
      layout: 'wide', scene: 'payoff',
      sources: [source('EPA: water use', U.water), source('EPA: water reuse', U.reuse)],
      notes: 'Return to the question introduced at the beginning. The answer is generated only after evidence arrives. Show the source links remaining attached throughout the handoff. This is an illustrative workflow, not a verified autonomous decision or a complete municipal water policy recommendation. Any real decision would need local conditions, additional sources, and expert review.'
    },
    {
      chapter: '06 / THE BUILDER’S CHOICE', eyebrow: 'Let your tasks decide',
      title: 'Prove it on<br><em>your questions.</em>',
      body: 'Compare relevance, freshness, time to a useful answer, and total cost across representative tasks.',
      layout: 'split', scene: 'checks',
      sources: [source('Interview · 9:49', U.video + '&t=589s'), source('Exa pricing', U.pricing)],
      notes: 'Evaluate actual questions, including ambiguous, changing, and difficult cases. Use comparable tasks and human judgments of the evidence and final answers. Measure latency end to end and include both retrieval and model-processing costs. Record failures and missing sources instead of selecting only impressive examples. The interview argues that real agent tasks expose weaknesses that narrow public benchmarks may miss.'
    },
    {
      chapter: '06 / THE BUILDER’S CHOICE', eyebrow: 'Exa · web search and retrieval for AI',
      title: 'Give your agent<br><em>a research desk.</em>',
      body: 'Relevant sources. Useful passages. A trail you can inspect. Exa brings the web into the agent’s next step.',
      layout: 'hero', scene: 'closing',
      sources: [source('Explore Exa', U.search), source('Watch the interview', U.video)],
      notes: 'Close with the same plain-language definition and metaphor as the opening. Exa gives AI applications a search and retrieval layer for discovering sources and receiving useful content. The argument is product fit and a clear workflow, supported by attributed evidence. Invite the audience to judge it on their own tasks rather than accepting a universal quality or savings guarantee.'
    }
  ];
})();
