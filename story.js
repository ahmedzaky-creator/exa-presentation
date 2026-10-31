(() => {
  'use strict';
  const slides = window.EXA_SLIDES;
  const scenes = window.ExaScenes;
  const stage = document.getElementById('stage');
  const $ = id => document.getElementById(id);
  const plain = text => text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const safe = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const sourceLinks = items => (items || []).map(({label,url}) => `<a href="${safe(url)}" target="_blank" rel="noopener noreferrer">${safe(label)} <span aria-hidden="true">↗</span></a>`).join('');
  let current = 0, notesOpen = false, timerStart = null, elapsed = 0, timerInterval = null;
  let animations = [], scenePhase = 'ready', sceneGeneration = 0, sceneFrame = null;
  let returnFocus = null, modalPaused = false, touch = null, resizeTimer = null;
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  let motionOverride = null;
  try { const stored = localStorage.getItem('exa-reduced-motion'); if (stored !== null) motionOverride = stored === 'true'; } catch {}
  const reduced = () => motionOverride === null ? motionPreference.matches : motionOverride;

  stage.innerHTML = slides.map((s,i) => `<section class="slide layout-${s.layout || 'split'}" data-index="${i}" data-scene="${s.scene}" aria-label="Slide ${i+1}: ${safe(plain(s.title))}" aria-hidden="true" inert><div class="slide-inner"><div class="slide-header"><div class="wordmark">exa<b>.</b></div><span>${safe(s.chapter)}</span></div><div class="content"><div class="copy"><div class="eyebrow">${safe(s.eyebrow)}</div><${i===0?'h1':'h2'}>${s.title}</${i===0?'h1':'h2'}><p class="lede">${s.body}</p></div><div class="visual">${scenes.render(s.scene)}</div></div><div class="slide-footer"><div class="sources" aria-label="Sources for this slide">${sourceLinks(s.sources)}</div><span class="slide-number">${String(i+1).padStart(2,'0')} / ${slides.length}</span></div></div></section>`).join('');
  const sections = [...stage.querySelectorAll('.slide')];

  function updateSceneControls() {
    const final = scenePhase === 'finished' || reduced();
    $('pauseBtn').disabled = final || !animations.length;
    $('pauseBtn').innerHTML = scenePhase === 'paused' ? '▶ <span>Resume</span>' : 'Ⅱ <span>Pause</span>';
    $('pauseBtn').setAttribute('aria-label', scenePhase === 'paused' ? 'Resume scene' : 'Pause scene');
    $('pauseBtn').setAttribute('aria-pressed', String(scenePhase === 'paused'));
    $('sceneState').textContent = reduced() ? 'Still view' : ({playing:'Playing',paused:'Paused',finished:'Scene complete',ready:'Scene ready'})[scenePhase];
    $('motionBtn').setAttribute('aria-pressed', String(reduced()));
    document.body.classList.toggle('reduce-motion', reduced());
  }
  function cancelScene() {
    sceneGeneration++;
    clearTimeout(resizeTimer);
    resizeTimer = null;
    if (sceneFrame !== null) cancelAnimationFrame(sceneFrame);
    sceneFrame = null;
    animations.forEach(animation => animation.cancel());
    animations = [];
    scenePhase = 'ready';
  }
  function playScene({finish = false} = {}) {
    cancelScene();
    const generation = sceneGeneration;
    sceneFrame = requestAnimationFrame(() => {
      sceneFrame = null;
      if (generation !== sceneGeneration) return;
      animations = scenes.animate(slides[current].scene, sections[current].querySelector('.visual')) || [];
      if (finish || reduced()) {
        animations.forEach(animation => animation.finish());
        scenePhase = 'finished';
      } else {
        scenePhase = animations.length ? 'playing' : 'finished';
      }
      updateSceneControls();
      Promise.all(animations.map(a => a.finished.catch(() => null))).then(() => {
        if (generation !== sceneGeneration) return;
        scenePhase = 'finished';
        updateSceneControls();
      });
    });
  }
  function pauseScene() {
    if (scenePhase === 'playing') { animations.forEach(a => a.pause()); scenePhase = 'paused'; }
    else if (scenePhase === 'paused') { animations.forEach(a => a.play()); scenePhase = 'playing'; }
    updateSceneControls();
  }
  function fromHash() {
    const hash = location.hash.slice(1);
    const n = /^\d+$/.test(hash) ? Number(hash) : 0;
    return Math.max(0, Math.min(slides.length - 1, n));
  }
  function show(n, update = true) {
    cancelScene();
    current = Math.max(0, Math.min(slides.length - 1, n));
    sections.forEach((el,i) => { el.classList.toggle('active',i===current); el.setAttribute('aria-hidden',String(i!==current)); el.inert = i!==current; });
    $('counter').textContent = `${String(current+1).padStart(2,'0')} / ${slides.length}`;
    $('progress').style.width = `${(current+1)/slides.length*100}%`;
    $('prev').disabled = current === 0;
    $('next').disabled = current === slides.length-1;
    if (update && location.hash !== `#${current}`) history.replaceState(null,'',`#${current}`);
    $('announcement').textContent = `Slide ${current+1} of ${slides.length}. ${plain(slides[current].title)}`;
    if (matchMedia('(max-width: 700px)').matches) window.scrollTo({top:0,behavior:'instant'});
    updateNotes();
    playScene();
  }
  function updateNotes() {
    $('notes').hidden = !notesOpen;
    document.querySelector('.stage-wrap').classList.toggle('with-notes', notesOpen);
    $('notesBtn').setAttribute('aria-pressed',String(notesOpen));
    if (!notesOpen) return;
    $('notes').innerHTML = `<button class="notes-close" aria-label="Close speaker notes">Close</button><h3>Speaker notes / ${current+1}</h3><p>${slides[current].notes}</p><div class="sources" aria-label="Sources in speaker notes">${sourceLinks(slides[current].sources)}</div>`;
    $('notes').querySelector('button').onclick = toggleNotes;
  }
  function toggleNotes() {
    notesOpen = !notesOpen;
    updateNotes();
    playScene({finish:true});
  }
  function openModal(content) {
    returnFocus = document.activeElement;
    modalPaused = scenePhase === 'playing';
    if (modalPaused) pauseScene();
    $('modal').hidden = false;
    $('modal').className = 'overlay';
    $('modal').setAttribute('role','dialog');
    $('modal').setAttribute('aria-modal','true');
    $('modal').setAttribute('aria-labelledby','modal-title');
    $('modal').innerHTML = content;
    document.querySelector('.app').inert = true;
    $('modal').querySelector('.overlay-close').onclick = closeModal;
    $('modal').querySelector('.overlay-close').focus();
  }
  function closeModal() {
    $('modal').hidden = true;
    $('modal').innerHTML = '';
    document.querySelector('.app').inert = false;
    if (modalPaused && scenePhase === 'paused') pauseScene();
    modalPaused = false;
    if (returnFocus?.isConnected && !returnFocus.closest('[inert]')) returnFocus.focus();
  }
  function overview() {
    openModal(`<div class="overlay-head"><h2 id="modal-title">The complete story</h2><button class="overlay-close">Close ✕</button></div><div class="overview-grid">${slides.map((s,i)=>`<button class="overview-card ${i===current?'current':''} ${s.layout==='intro'?'intro-card':''}" data-go="${i}" ${i===current?'aria-current="step"':''}><small>${String(i+1).padStart(2,'0')} · ${safe(s.chapter)}</small><strong>${plain(s.title)}</strong><small>${s.layout==='intro'?'TOPIC INTRODUCTION':'OPEN SLIDE'} ↗</small></button>`).join('')}</div>`);
    $('modal').querySelectorAll('[data-go]').forEach(button => button.onclick = () => { closeModal(); show(Number(button.dataset.go)); });
  }
  function help() {
    openModal(`<div class="overlay-head"><h2 id="modal-title">Presenter shortcuts</h2><button class="overlay-close">Close ✕</button></div><div class="help-body"><p><kbd>←</kbd> <kbd>→</kbd> Navigate slides<br><kbd>Home</kbd> <kbd>End</kbd> First / last slide<br><kbd>O</kbd> Overview<br><kbd>N</kbd> Speaker notes<br><kbd>P</kbd> Pause / resume scene<br><kbd>R</kbd> Replay scene<br><kbd>F</kbd> Fullscreen<br><kbd>Esc</kbd> Close dialog</p><p>Animations play once and hold their final state. You control when the next slide appears. Turn on reduced motion for complete, still diagrams.</p><p>Underlined source links open in a new tab. Every demonstration is illustrative; sources and reported measurements are identified separately.</p></div>`);
  }
  let toastTimer;
  function toast(message) {
    $('toast').className = 'toast'; $('toast').textContent = message; $('toast').hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => $('toast').hidden = true, 2500);
  }
  async function fullscreen() {
    try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); }
    catch { toast('Fullscreen is unavailable in this browser.'); }
  }
  document.addEventListener('fullscreenchange', () => {
    const on = Boolean(document.fullscreenElement);
    $('presentBtn').setAttribute('aria-label', on ? 'Exit fullscreen' : 'Fullscreen presentation');
    $('presentBtn').setAttribute('aria-pressed', String(on));
    $('presentBtn').innerHTML = on ? '⛶ <span>Exit</span>' : '⛶ <span>Present</span>';
  });
  function renderTimer() {
    const seconds = Math.floor((elapsed + (timerStart === null ? 0 : performance.now()-timerStart))/1000);
    $('timer').textContent = `${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;
  }
  $('timerBtn').onclick = () => {
    if (timerStart === null) { timerStart = performance.now(); timerInterval = setInterval(renderTimer,200); }
    else { elapsed += performance.now()-timerStart; timerStart = null; clearInterval(timerInterval); }
    $('timerBtn').textContent = timerStart === null ? 'Start' : 'Pause';
    $('timerBtn').setAttribute('aria-label',timerStart === null ? 'Start timer' : 'Pause timer');
    renderTimer();
  };
  $('timerReset').onclick = () => { elapsed=0; if(timerStart !== null) timerStart=performance.now(); renderTimer(); };
  $('prev').onclick = () => show(current-1);
  $('next').onclick = () => show(current+1);
  $('overviewBtn').onclick = overview;
  $('notesBtn').onclick = toggleNotes;
  $('helpBtn').onclick = help;
  $('presentBtn').onclick = fullscreen;
  $('pauseBtn').onclick = pauseScene;
  $('replayBtn').onclick = () => playScene();
  $('motionBtn').onclick = () => {
    motionOverride = !reduced();
    try { localStorage.setItem('exa-reduced-motion',String(motionOverride)); } catch {}
    playScene();
    toast(motionOverride ? 'Reduced motion: complete diagrams' : 'Motion enabled');
  };
  motionPreference.addEventListener('change', () => { if(motionOverride === null) playScene(); });
  window.addEventListener('hashchange', () => show(fromHash(),false));
  window.addEventListener('keydown', event => {
    if (!$('modal').hidden) {
      if (event.key==='Escape') closeModal();
      if (event.key==='Tab') {
        const focusables = [...$('modal').querySelectorAll('button,a')];
        const first = focusables[0], last = focusables.at(-1);
        if(event.shiftKey && document.activeElement===first){event.preventDefault();last.focus();}
        else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus();}
      }
      return;
    }
    if (event.target.closest('input,textarea,select,[contenteditable=true]') || event.metaKey || event.ctrlKey || event.altKey) return;
    if (event.key===' ' && event.target.closest('button,a')) return;
    if (['ArrowRight','PageDown',' '].includes(event.key)) { event.preventDefault(); show(current+1); }
    else if (['ArrowLeft','PageUp'].includes(event.key)) { event.preventDefault(); show(current-1); }
    else if (event.key==='Home') { event.preventDefault(); show(0); }
    else if (event.key==='End') { event.preventDefault(); show(slides.length-1); }
    else if (event.key.toLowerCase()==='o') overview();
    else if (event.key.toLowerCase()==='n') toggleNotes();
    else if (event.key.toLowerCase()==='p') pauseScene();
    else if (event.key.toLowerCase()==='r') playScene();
    else if (event.key.toLowerCase()==='f') fullscreen();
    else if (event.key==='?') help();
  });
  stage.addEventListener('touchstart',event => {
    if(event.target.closest('a,button')){touch=null;return;}
    touch={x:event.changedTouches[0].clientX,y:event.changedTouches[0].clientY};
  },{passive:true});
  stage.addEventListener('focusin', event => {
    if (event.target.closest('.visual a') && ['playing','paused'].includes(scenePhase)) {
      animations.forEach(animation => animation.finish());
      scenePhase = 'finished';
      updateSceneControls();
    }
  });
  stage.addEventListener('touchend',event => {
    if(!touch)return;
    const dx=event.changedTouches[0].clientX-touch.x,dy=event.changedTouches[0].clientY-touch.y;
    touch=null;
    if(Math.abs(dx)>70 && Math.abs(dx)>Math.abs(dy)*1.5)show(current+(dx<0?1:-1));
  },{passive:true});
  let previousWidth=0;
  new ResizeObserver(entries=>{
    const width=entries[0].contentRect.width;
    if(previousWidth && Math.abs(width-previousWidth)>1){clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>playScene({finish:true}),100);}
    previousWidth=width;
  }).observe(stage);
  show(fromHash(),false);
  const fontGeneration = sceneGeneration;
  document.fonts.ready.then(()=>{ if(sceneGeneration === fontGeneration && scenePhase !== 'paused') playScene(); });
})();
