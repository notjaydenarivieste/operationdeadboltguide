/**
 * music.js — background music
 * --------------------------------------------------------------
 * - Plays on a loop across every tab of the site (the page never reloads).
 * - Fades out and mutes whenever the visitor leaves the site (switches browser
 *   tabs, minimises the window or clicks another app) and fades back in on return.
 * - Browsers block sound until the visitor interacts, so playback begins on
 *   the first click, key press or tap. The player (bottom-right) lets them
 *   switch it off and adjust the volume; their choice is remembered.
 */
(() => {
  "use strict";

  // Paste a link or a file path, e.g. "audio/theme.mp3". Leave "" to hide the player.
  // Add your songs here: a display name and a link or file path for each. Leave the list empty to hide the player.
  const PLAYLIST = [
    //i just think these songs are cool actually.
    {title: "Rising Tide - Jack Wall (Black Ops 6)", src: "music/Rising Tide.mp3"},
    {title: "Damned 6 - Jack Wall (Modern Warfare 3 (2023))", src: "music/Damned 6.mp3"},
    {title: "El Sonidito - Hechizeros Band (GTA Taxi Radio)", src: "music/El Sonidito.mp3"},
    {title: "Where Are We Going? (Instrumental) - Kevin Sherwood (Black Ops 4)", src: "music/Where Are We Going.mp3"},
    {title: "115 (Instrumental) - Kevin Sherwood (Black Ops 4)", src: "music/115.mp3"},
    {title: "Forever (Instrumental) - AJDiSipirito (Murder Drones)", src: "music/FOREVER.mp3"},
    {title: "The Place Below Creation: Starting Theme - Jack Wall (Modern Warfare 3 (2023))", src: "music/Starting Theme.mp3"},
    {title: "The Place Below Creation: Contract Theme - Jack Wall (Modern Warfare 3 (2023))", src: "music/Contract Theme.mp3"},
    {title: "Portal Radio - Valve (Portal)", src: "music/Portal Radio Tune.mp3"},
    {title: "The Doomsday Heist Original Score - Oh No / Rockstar Games (GTA Online - The Doomsday Heist)", src: "music/CMH Heist Two.mp3"},
    {title: "For The King - Valve (Deadlock)", src: "music/For the King.mp3"},
    {title: "Damned 100ae - Kevin Sherwood (Black Ops 2)", src: "music/Damned 100ae.mp3"},
    {title: "Willard Wyler's Theme - Infinity Ward (Infinite Warfare)", src: "music/Willard Wyler Theme.mp3"},

    // { title: "Song name", src: "audio/song-1.mp3" },
    // { title: "Another song", src: "https://example.com/song-2.mp3" },
  ];
  const DEFAULT_VOLUME = 0.4;
  const FADE_MS = 500;
  const TOAST_MS = 4500;   // how long the "Now playing" pop-up stays on screen

  if (!PLAYLIST.length) return;

  /* ---------- Safe storage ---------- */
  const store = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch { /* storage unavailable */ } },
  };

  /* ---------- State ---------- */
    const audio = new Audio();
  audio.preload = "auto";

  /* ---------- Shuffled playlist ---------- */
  const shuffle = (list) => {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };
  let queue = [];
  let current = null;
  let pendingAnnounce = false;   // true until the current song has been announced
  let failures = 0;              // songs in a row that failed to load

  const loadNext = () => {
    if (!queue.length) {
      queue = shuffle(PLAYLIST);
      if (queue.length > 1 && queue[0] === current) queue.push(queue.shift());   // never repeat the same song back to back
    }
    current = queue.shift();
    pendingAnnounce = true;
    audio.src = current.src;
  };
  loadNext();

  /* ---------- "Now playing" pop-up ---------- */
  const toast = document.createElement("div");
  toast.className = "music-toast";
  toast.setAttribute("role", "status");
  toast.innerHTML = '<span class="music-toast__label">NOW PLAYING:</span> <span class="music-toast__title"></span>';
  document.body.append(toast);

  let toastTimer = null;
  const showToast = (title) => {
    toast.querySelector(".music-toast__title").textContent = `'${title}'`;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), TOAST_MS);
  };
  const maybeAnnounce = () => {
    if (!pendingAnnounce || !inFocus || audio.paused) return;   // wait until the visitor can actually see it
    pendingAnnounce = false;
    showToast(current.title);
  };

  let wantsMusic = store.get("deadbolt-music") !== "off";               // the visitor's own on/off choice
  let volume = Number(store.get("deadbolt-volume")) || DEFAULT_VOLUME;
  let inFocus = !document.hidden && document.hasFocus();
  let fadeTimer = null;

  audio.volume = 0;
  audio.muted = !inFocus;

  /* ---------- Player UI ---------- */
  const button = document.createElement("button");
  button.className = "music__btn";
  button.type = "button";
  button.innerHTML = '<span class="music__bars" aria-hidden="true"><i></i><i></i><i></i></span><span class="sr-only">Toggle background music</span>';

  const slider = document.createElement("input");
  slider.className = "music__vol";
  slider.type = "range";
  slider.min = "0";
  slider.max = "1";
  slider.step = "0.05";
  slider.value = String(volume);
  slider.setAttribute("aria-label", "Music volume");

  const player = document.createElement("div");
  player.className = "music";
  player.append(button, slider);
  document.body.append(player);

  const renderState = () => {
    const playing = wantsMusic && !audio.paused;
    player.classList.toggle("is-playing", playing);
    button.setAttribute("aria-pressed", String(wantsMusic));
    button.title = wantsMusic ? "Turn music off" : "Turn music on";
  };

  /* ---------- Volume fading ---------- */
  const fadeTo = (target) => {
    clearInterval(fadeTimer);
    if (target > 0) audio.muted = false;
    const from = audio.volume;
    const steps = 10;
    let step = 0;
    fadeTimer = setInterval(() => {
      step += 1;
      audio.volume = Math.min(1, Math.max(0, from + ((target - from) * step) / steps));
      if (step >= steps) {
        clearInterval(fadeTimer);
        if (target === 0) audio.muted = true;
      }
    }, FADE_MS / steps);
  };

  /* ---------- Playback ---------- */
  const start = () => {
    if (!wantsMusic) return;
    audio.play().then(() => {
      renderState();
      if (inFocus) fadeTo(volume);
    }).catch(() => { /* blocked until the visitor interacts */ });
  };

  const unlockEvents = ["pointerdown", "keydown", "touchstart"];
  const removeUnlockListeners = () => {
    unlockEvents.forEach((name) => window.removeEventListener(name, unlockOnFirstInteraction));
  };
  const unlockOnFirstInteraction = (event) => {
    if (event.target.closest?.(".music__btn")) return;
    removeUnlockListeners();
    start();
  };
  unlockEvents.forEach((name) => window.addEventListener(name, unlockOnFirstInteraction));

  button.addEventListener("click", () => {
    removeUnlockListeners();
    if (wantsMusic && audio.paused) {
      start();
      return;
    }
    wantsMusic = !wantsMusic;
    store.set("deadbolt-music", wantsMusic ? "on" : "off");
    if (wantsMusic) {
      start();
    } else {
      fadeTo(0);
      setTimeout(() => { if (!wantsMusic) audio.pause(); renderState(); }, FADE_MS);
    }
    renderState();
  });

  slider.addEventListener("input", () => {
    volume = Number(slider.value);
    store.set("deadbolt-volume", String(volume));
    if (inFocus && !audio.paused) audio.volume = volume;
  });

  /* ---------- Mute when the visitor leaves the site ---------- */
  const syncFocus = () => {
    const nowInFocus = !document.hidden && document.hasFocus();
    if (nowInFocus === inFocus) return;
    inFocus = nowInFocus;
    if (audio.paused) return;
    fadeTo(inFocus ? volume : 0);
    if (inFocus) maybeAnnounce();
  };
  window.addEventListener("blur", syncFocus);
  window.addEventListener("focus", syncFocus);
  document.addEventListener("visibilitychange", syncFocus);

  audio.addEventListener("playing", () => { failures = 0; maybeAnnounce(); });
  audio.addEventListener("ended", () => { loadNext(); start(); });   // song finished: pick the next random one
  audio.addEventListener("error", () => {
    failures += 1;
    if (failures >= PLAYLIST.length) { player.remove(); return; }    // every link failed: hide the player
    loadNext();                                                       // skip a broken link
    start();
  });
  audio.addEventListener("play", renderState);
  audio.addEventListener("pause", renderState);

  renderState();
  start();   // works immediately if the browser allows autoplay; otherwise waits for the first interaction
})();