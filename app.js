/**
 * app.js — hash router + renderers.
 * Views: "#/" (home) and "#/<section-id>".
 * Content comes from data.js; images from images.js.
 */
(() => {
  "use strict";

  const view = document.getElementById("view");
  const nav = document.getElementById("site-nav");
  const navToggle = document.getElementById("nav-toggle");
  const header = document.getElementById("site-header");
  const pageBg = document.getElementById("page-bg");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const LEAVE_MS = reduceMotion ? 0 : 260;

  /* ---------- DOM helper ---------- */
  const el = (tag, props = {}, ...children) => {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(props)) {
      if (value == null || value === false) continue;
      if (key === "class") node.className = value;
      else if (key === "dataset") Object.assign(node.dataset, value);
      else if (key in node && key !== "list") node[key] = value;
      else node.setAttribute(key, value);
    }
    for (const child of children.flat()) {
      if (child == null || child === false) continue;
      node.append(child.nodeType ? child : document.createTextNode(child));
    }
    return node;
  };

  const initials = (name) =>
    name.replace(/[^A-Za-z0-9 ]/g, "").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

  /* ---------- Shared components ---------- */
  function media(id, name) {
    const wrap = el("div", { class: "media" });
    const placeholder = () =>
      el("div", { class: "media__ph", role: "img", "aria-label": name }, el("span", {}, initials(name)));
    const file = WIKI_FILES[id];
    if (!file) {
      wrap.append(placeholder());
      return wrap;
    }
    const img = el("img", { src: wikiUrl(file), alt: name, loading: "lazy", decoding: "async", referrerPolicy: "no-referrer" });
    const fit = typeof IMAGE_FIT !== "undefined" && IMAGE_FIT[id];
    const focus = typeof IMAGE_FOCUS !== "undefined" && IMAGE_FOCUS[id];
    if (fit) img.style.objectFit = fit;
    if (focus) img.style.objectPosition = focus;
    img.addEventListener("load", () => img.classList.add("is-loaded"));
    img.addEventListener("error", () => { img.remove(); wrap.append(placeholder()); }, { once: true });
    wrap.append(img);
    return wrap;
  }

  const tagClass = (type) => `tag tag--${type || "neutral"}`;

    function card(item, layout, plain = false) {
    return el("article", { class: `card${layout === "wide" ? " card--wide" : ""}${plain ? " card--plain" : ""} reveal`, id: item.id },
      !plain && media(item.id, item.name),
      el("div", { class: "card__body" },
        item.tag && el("span", { class: tagClass(item.tagType) }, item.tag),
        el("h3", { class: "card__title" }, item.name),
        el("p", { class: "card__text" }, item.text),
        item.facts && el("ul", { class: "card__facts" }, item.facts.map((f) => el("li", {}, f)))
      )
    );
  }

  /* ---------- Views ---------- */

  /* ---------- Story act (Lore): narrative, key moments, mission tiers ---------- */
  function storyCard(act) {
    const bulletList = (items) => el("ul", { class: "card__facts" }, items.map((m) => el("li", {}, m)));
    return el("article", { class: "story reveal", id: act.id },
      el("header", { class: "story__head" },
        el("span", { class: tagClass(act.tagType) }, act.tag),
        el("h3", { class: "story__title" }, act.name),
        act.tagline && el("p", { class: "story__tagline" }, act.tagline)
      ),
      el("div", { class: "story__body" },
        el("div", { class: "story__col" },
          el("div", { class: "story__text" }, act.story.map((p) => el("p", {}, p))),
          act.moments && el("section", { class: "story__panel" }, el("h4", {}, "Key story moments"), bulletList(act.moments)),
          act.mission && el("section", { class: "story__panel story__panel--mission" }, el("h4", {}, `Story mission: ${act.mission.name}`), el("p", {}, act.mission.text))
        ),
        act.tiers && el("div", { class: "story__col" },
          el("h4", { class: "story__label" }, "Tier missions"),
          act.tiersNote && el("p", { class: "story__note" }, act.tiersNote),
          act.tiers.map((tier) =>
            el("section", { class: "story__tier" },
              el("h5", {}, tier.title),
              el("ul", { class: "story__missions" }, tier.missions.map((m) => el("li", {}, el("strong", {}, m.name), " — ", m.text)))
            )
          )
        )
      )
    );
  }

   /* ---------- Map atlas: one image, tiers highlight on hover ---------- */
    function atlas(group) {
    const NS = "http://www.w3.org/2000/svg";
    const spots = group.layout === "atlas-spots";          // rifts: circular spotlights
    const W = 100;
    const H = spots ? 75 : 100;                            // spots use a 4:3 grid so circles stay round
    // Threat tiers: [outer inset %, inner inset %] of each ring (Tier III is the centre block)
    const INSETS = { "tier-1": [0, 16], "tier-2": [16, 32], "tier-3": [32, null] };
    const rect = (i) => `M${i} ${i}H${W - i}V${H - i}H${i}Z`;
    const circle = ({ x, y, r }) => `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0Z`;
    const zonePath = (item) => (spots ? circle(item.spot) : INSETS[item.id].filter((v) => v !== null).map(rect).join(""));
    const byId = Object.fromEntries(group.items.map((item) => [item.id, item]));
    const svgEl = (name, attrs) => {
      const node = document.createElementNS(NS, name);
      Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
      return node;
    };

    const dim = svgEl("path", { class: "atlas__dim", "fill-rule": "evenodd" });
    const zones = group.items.map((item) =>
      svgEl("path", { class: "atlas__zone", d: zonePath(item), "fill-rule": "evenodd", "data-tier": item.id })
    );
    const svg = svgEl("svg", { viewBox: `0 0 ${W} ${H}`, preserveAspectRatio: "none", "aria-hidden": "true" });
    svg.append(dim, ...zones);

    if (spots) {
      group.items.forEach((item) => {
        const label = svgEl("text", { class: "atlas__pinlabel", x: item.spot.x, y: item.spot.y + 0.9 });
        label.textContent = item.pin || "";
        svg.append(svgEl("circle", { class: "atlas__pin", cx: item.spot.x, cy: item.spot.y, r: 1.8 }), label);
      });
    }

    const frame = el("div", { class: "atlas__map" });
    const img = el("img", { src: group.image, alt: "Operation Deadbolt map", referrerPolicy: "no-referrer", decoding: "async" });
    img.addEventListener("error", () => img.remove(), { once: true });
    frame.append(img, svg);

    // Placement helper: open the page with ?calibrate in the address and click the map to log coordinates.
    if (location.search.includes("calibrate")) {
      frame.addEventListener("click", (e) => {
        const box = frame.getBoundingClientRect();
        console.log(`spot: { x: ${(((e.clientX - box.left) / box.width) * W).toFixed(1)}, y: ${(((e.clientY - box.top) / box.height) * H).toFixed(1)}, r: 11 }`);
      });
    }

    const tiers = group.items.map((item) =>
      el("article", { class: "atlas__tier", tabindex: "0", dataset: { tier: item.id }, id: item.id },
        item.tag && el("span", { class: tagClass(item.tagType) }, item.tag),
        el("h3", { class: "card__title" }, item.name),
        el("p", { class: "card__text" }, item.text),
        item.facts && el("ul", { class: "card__facts" }, item.facts.map((f) => el("li", {}, f)))
      )
    );

    const root = el("div", { class: "atlas reveal" }, frame, el("div", { class: "atlas__tiers" }, tiers));

    const setActive = (id) => {
      if (id) dim.setAttribute("d", rect(0) + zonePath(byId[id]));
      root.classList.toggle("is-dimmed", Boolean(id));
      zones.forEach((z) => z.classList.toggle("is-active", z.dataset.tier === id));
      tiers.forEach((t) => t.classList.toggle("is-active", t.dataset.tier === id));
    };
    [...zones, ...tiers].forEach((node) => {
      const id = node.dataset.tier;
      node.addEventListener("mouseenter", () => setActive(id));
      node.addEventListener("mouseleave", () => setActive(null));
      node.addEventListener("focus", () => setActive(id));
      node.addEventListener("blur", () => setActive(null));
      node.addEventListener("click", () => setActive(id)); // keeps the highlight on touch screens
    });
    return root;
  }

  function renderNav(activeId) {
    nav.replaceChildren(
      ...SECTIONS.map((s) =>
        el("a", { href: `#/${s.id}`, class: s.id === activeId ? "is-active" : "", "aria-current": s.id === activeId ? "page" : null }, s.title)
      )
    );
  }

  function renderHome() {
    const { summary, steps, stats, credits, creditsNote } = HOME;
    return el("div", { class: "page page--home" },
      el("section", { class: "hero" },
        el("p", { class: "eyebrow" }, SITE.subtitle),
        el("h1", { class: "hero__title" }, "Operation ", el("span", {}, "Deadbolt")),
        el("p", { class: "hero__lead" }, "Survive the Exclusion Zone, outsmart Terminus Outcomes and escape the Aether Storm. This is your friendly guide to every corner of the mode."),
        el("a", { class: "btn", href: "#home-guide", onclick: (e) => { e.preventDefault(); document.getElementById("home-guide").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }); } }, "Start the briefing")
      ),
      el("section", { class: "block reveal", id: "home-guide" },
        el("h2", { class: "block__title" }, "What is Operation Deadbolt?"),
        summary.map((p) => el("p", { class: "prose" }, p)),
        el("ul", { class: "stats" }, stats.map((s) => el("li", {}, el("strong", {}, s.value), el("span", {}, s.label))))
      ),
      el("section", { class: "block reveal" },
        el("h2", { class: "block__title" }, "How to play"),
        el("ol", { class: "steps" }, steps.map((s) => el("li", {}, el("h3", {}, s.title), el("p", {}, s.text))))
      ),
      el("section", { class: "block reveal" },
        el("h2", { class: "block__title" }, "Made by"),
        el("div", { class: "credits" }, credits.map((c) =>
          el("div", { class: "credit" }, el("h3", {}, c.name), el("span", { class: "tag tag--neutral" }, c.role), el("p", {}, c.text))
        )),
        el("p", { class: "fineprint" }, creditsNote)
      ),
      el("section", { class: "block", id: "home-menu" },
        el("h2", { class: "block__title" }, "Choose your briefing"),
        el("div", { class: "menu-grid" }, SECTIONS.map((s, i) =>
          el("a", { class: "menu-btn reveal", href: `#/${s.id}`, style: `--i:${i}` },
            el("span", { class: "menu-btn__num" }, String(i + 1).padStart(2, "0")),
            el("span", { class: "menu-btn__title" }, s.title),
            el("span", { class: "menu-btn__blurb" }, s.blurb)
          )
        ))
      )
    );
  }

  function renderSection(section) {
    const index = SECTIONS.indexOf(section);
    const prev = SECTIONS[index - 1];
    const next = SECTIONS[index + 1];
    const pagerLink = (target, dir) =>
      target ? el("a", { class: `pager__link pager__link--${dir}`, href: `#/${target.id}` }, el("small", {}, dir === "prev" ? "Previous" : "Next"), target.title) : el("span");

    return el("div", { class: "page" },
      el("header", { class: "page-head" },
        el("a", { class: "crumb", href: "#/" }, "← Home"),
        el("p", { class: "eyebrow" }, `Briefing ${String(index + 1).padStart(2, "0")}`),
        el("h1", { class: "page-head__title" }, section.title),
        el("p", { class: "page-head__intro" }, section.intro)
      ),
      section.groups.map((group) =>
        el("section", { class: "group" },
          el("div", { class: "group__head reveal" },
            el("h2", {}, group.title),
            group.note && el("p", {}, group.note)
          ),
            ["atlas", "atlas-spots"].includes(group.layout)
            ? atlas(group)
            : group.layout === "story"
            ? el("div", { class: "story-list" }, group.items.map(storyCard))
            : el("div", { class: `grid${section.layout === "wide" || group.layout === "feature" ? " grid--wide" : ""}${group.layout === "text" ? " grid--split" : ""}${group.layout === "feature" ? " grid--feature" : ""}` }, group.items.map((item) => card(item, group.layout === "feature" ? "wide" : section.layout, group.layout === "text")))
        )
      ),
      el("nav", { class: "pager", "aria-label": "Section navigation" }, pagerLink(prev, "prev"), pagerLink(next, "next"))
    );
  }

  /* ---------- Reveal on scroll ---------- */
  const observer = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 })
    : null;

  function armReveals() {
    view.querySelectorAll(".reveal").forEach((node) => (observer ? observer.observe(node) : node.classList.add("is-visible")));
  }

  /* ---------- Background (wiki image, optional) ---------- */
  function setBackground(id) {
    const file = WIKI_BACKGROUNDS[id];
    pageBg.style.backgroundImage = file ? `url("${wikiUrl(file)}")` : "";
    pageBg.classList.toggle("has-image", Boolean(file));
  }

  /* ---------- Router ---------- */
  let current = null;
  let timer = null;

  function route() {
    const id = location.hash.replace(/^#\/?/, "");
    const section = SECTIONS.find((s) => s.id === id) || null;
    const key = section ? section.id : "home";
    if (key === current) return;

    const isFirst = current === null;
    current = key;
    clearTimeout(timer);
    view.classList.add("is-leaving");

    timer = setTimeout(() => {
      view.replaceChildren(section ? renderSection(section) : renderHome());
      renderNav(section ? section.id : null);
      setBackground(key);
      document.title = section ? `${section.title} — Operation Deadbolt` : "Operation Deadbolt — MWIII Zombies Field Guide";
      window.scrollTo({ top: 0, behavior: "auto" });
      view.classList.remove("is-leaving");
      view.classList.add("is-entering");
      requestAnimationFrame(() => requestAnimationFrame(() => view.classList.remove("is-entering")));
      armReveals();
      closeNav();
      if (!isFirst) view.focus({ preventScroll: true });
    }, isFirst ? 0 : LEAVE_MS);
  }

  /* ---------- Mobile nav & header ---------- */
  function closeNav() {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 12), { passive: true });

  window.addEventListener("hashchange", route);
  route();
})();
