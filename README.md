# Exa — From attention to information

A 30-slide browser presentation explaining Exa's search and retrieval layer for AI applications. All slides use a warm-white canvas, with separate compositions, topic introductions, source links, and six-second scene animations.

## Present

Open https://ahmedzaky01.github.io/exa-presentation/

- Arrow keys / Page Up / Page Down: change slides.
- Home / End: first / last slide.
- P: pause or resume the scene. R: replay it.
- O: overview. N: speaker notes. F: fullscreen. ?: shortcuts.
- Reduced motion shows complete diagrams immediately and remembers the choice in this browser.
- The presentation timer runs independently of scene animations.
- Links `#0` through `#29` open specific slides. Source links open in a new tab.

## Files

- `slides.js`: story, source URLs, and speaker notes.
- `scenes.js` / `scenes.css`: distinct illustrations and finite Web Animations.
- `story.js` / `story.css`: navigation, scene lifecycle, presenter controls, and responsive shell.
- `index.html`: entrypoint and versioned asset references.

Demonstrations are illustrative summaries, not recorded live Exa results. Vendor-reported measurements and external network measurements are labeled separately.

## Preview and publish

No build step or API key is needed. Serve this directory with a local static HTTP server.

GitHub Pages serves the root of `main`. Check desktop and mobile, update asset query versions in `index.html`, commit, and push. Verify the Pages deployment succeeds and the public assets match the committed files.
