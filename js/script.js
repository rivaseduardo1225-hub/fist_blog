/* ============================================================
   TERRAPULSE STS — Behaviour
   Theme toggle, mobile menu, header search, reveal-on-scroll,
   reading progress, article rendering, search/filter/sort,
   the preparedness quiz and the climate-data visualisations.
   No dependencies. Plain ES2015 browser JavaScript.
   ============================================================ */

/* ---------- Helpers ---------- */
function qs(selector, ctx) {
  return (ctx || document).querySelector(selector);
}
function qsa(selector, ctx) {
  return Array.prototype.slice.call((ctx || document).querySelectorAll(selector));
}
function setHidden(el, isHidden) {
  if (!el) return;
  el.hidden = isHidden;
  el.classList.toggle("hidden", isHidden);
}
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function prefersReducedMotion() {
  return (
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
function findById(list, id) {
  for (var i = 0; i < list.length; i += 1) {
    if (list[i].id === id) return list[i];
  }
  return null;
}

/* ============================================================
   THEME
   ============================================================ */
function initTheme() {
  var root = document.documentElement;
  var btn = qs("#theme-toggle");
  if (!btn) return;

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    var label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
    btn.setAttribute("aria-label", label);
    btn.setAttribute("title", label);
  }

  var stored = null;
  try {
    stored = window.localStorage.getItem("tp-theme");
  } catch (e) {
    stored = null;
  }
  var initial =
    stored ||
    (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  apply(initial);

  btn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(next);
    try {
      window.localStorage.setItem("tp-theme", next);
    } catch (e) {
      /* storage unavailable — theme still applied for this session */
    }
  });
}

/* ============================================================
   HEADER CHROME (mobile menu, search, back to top)
   ============================================================ */
function initMobileMenu() {
  var btn = qs("#mobile-menu-btn");
  var menu = qs("#mobile-menu");
  if (!btn || !menu) return;

  btn.addEventListener("click", function () {
    var willOpen = menu.hidden;
    setHidden(menu, !willOpen);
    btn.setAttribute("aria-expanded", willOpen ? "true" : "false");
  });
}

function initHeaderSearch() {
  var btn = qs("#search-toggle");
  var drawer = qs("#head-search");
  if (!btn || !drawer) return;

  btn.addEventListener("click", function () {
    var willOpen = drawer.hidden;
    setHidden(drawer, !willOpen);
    btn.setAttribute("aria-expanded", willOpen ? "true" : "false");
    if (willOpen) {
      var input = qs("#head-search-input");
      if (input) input.focus();
    }
  });
}

function initBackToTop() {
  var btn = qs("#to-top");
  if (!btn) return;
  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth"
    });
  });
}

/* ============================================================
   READING PROGRESS
   ============================================================ */
var ticking = false;
function updateReadingProgress() {
  var bar = qs("#progress-bar");
  if (!bar) return;
  var doc = document.documentElement;
  var max = doc.scrollHeight - doc.clientHeight;
  var y = window.pageYOffset || doc.scrollTop || 0;
  var pct = max > 0 ? (y / max) * 100 : 0;
  bar.style.width = Math.max(0, Math.min(100, pct)) + "%";
}
function initProgress() {
  window.addEventListener(
    "scroll",
    function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        updateReadingProgress();
        ticking = false;
      });
    },
    { passive: true }
  );
  window.addEventListener("resize", updateReadingProgress);
  updateReadingProgress();
}

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
var revealObserver = null;
function observeReveals(scope) {
  if (prefersReducedMotion() || typeof window.IntersectionObserver !== "function") {
    qsa(".reveal", scope || document).forEach(function (el) {
      el.classList.add("is-in");
    });
    return;
  }
  if (!revealObserver) {
    revealObserver = new window.IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
  }
  qsa(".reveal:not(.is-in)", scope || document).forEach(function (el) {
    revealObserver.observe(el);
  });
}

/* ============================================================
   SHARED CARD MARKUP
   ============================================================ */
function articleCardMarkup(article) {
  return (
    '<a class="card reveal" href="article.html?id=' +
    encodeURIComponent(article.id) +
    '">' +
    '<div class="card__media"><img src="' +
    article.cover +
    '" alt="' +
    escapeHtml(article.coverAlt) +
    '" loading="lazy"></div>' +
    '<div class="card__body">' +
    '<span class="card__tag">' +
    escapeHtml(article.category) +
    "</span>" +
    '<h3 class="card__title">' +
    escapeHtml(article.title) +
    "</h3>" +
    '<p class="card__excerpt">' +
    escapeHtml(article.excerpt) +
    "</p>" +
    '<div class="card__foot">' +
    '<span class="card__meta">' +
    article.readingTime +
    " min read</span>" +
    '<span class="tlink">Read more<span class="tlink__arrow" aria-hidden="true">&rarr;</span></span>' +
    "</div></div></a>"
  );
}

/* ============================================================
   HOME
   ============================================================ */
function initHome() {
  var featureWrap = qs("#featured-wrap");
  var grid = qs("#home-grid");

  var featured = articlesData.filter(function (a) {
    return a.featured;
  });
  var feature = featured[0] || articlesData[0];

  if (featureWrap && feature) {
    featureWrap.innerHTML =
      '<a class="feature reveal" href="article.html?id=' +
      encodeURIComponent(feature.id) +
      '">' +
      '<div class="feature__media">' +
      '<span class="feature__badge">Featured research</span>' +
      '<img src="' +
      feature.cover +
      '" alt="' +
      escapeHtml(feature.coverAlt) +
      '">' +
      "</div>" +
      '<div class="feature__body">' +
      '<span class="card__tag">' +
      escapeHtml(feature.category) +
      "</span>" +
      '<h3 class="feature__title">' +
      escapeHtml(feature.title) +
      "</h3>" +
      '<p class="feature__excerpt">' +
      escapeHtml(feature.subtitle) +
      "</p>" +
      '<div class="feature__meta"><span>' +
      feature.readingTime +
      " min read</span><span>Issue 01 &middot; 2026</span></div>" +
      '<span class="tlink" style="margin-top:0.6rem">Read article<span class="tlink__arrow" aria-hidden="true">&rarr;</span></span>' +
      "</div></a>";
  }

  if (grid) {
    var rest = articlesData
      .filter(function (a) {
        return a.id !== feature.id;
      })
      .sort(function (a, b) {
        return a.order - b.order;
      });
    grid.innerHTML = rest.map(articleCardMarkup).join("");
  }

  observeReveals();
}

/* ============================================================
   ARTICLES INDEX (search, filter, sort)
   ============================================================ */
function initArticles() {
  var grid = qs("#articles-grid");
  if (!grid) return;

  var search = qs("#article-search");
  var sort = qs("#sort-select");
  var chips = qsa("#article-filters .chip");
  var count = qs("#results-count");
  var empty = qs("#articles-empty");
  var activeTopic = "all";

  function readParams() {
    var params = new URLSearchParams(window.location.search);
    var q = params.get("q");
    var topic = params.get("topic");
    if (q && search) search.value = q;
    if (topic) activeTopic = topic;
  }

  function matches(article, query) {
    if (activeTopic !== "all" && article.topics.indexOf(activeTopic) === -1) return false;
    if (!query) return true;
    var hay = (
      article.title +
      " " +
      article.subtitle +
      " " +
      article.excerpt +
      " " +
      article.category +
      " " +
      article.topics.join(" ")
    ).toLowerCase();
    return hay.indexOf(query) !== -1;
  }

  function apply() {
    var query = search ? search.value.trim().toLowerCase() : "";
    var list = articlesData.filter(function (a) {
      return matches(a, query);
    });

    var mode = sort ? sort.value : "featured";
    list.sort(function (a, b) {
      if (mode === "az") return a.title.localeCompare(b.title);
      if (mode === "order") return a.order - b.order;
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return a.order - b.order;
    });

    grid.innerHTML = list.map(articleCardMarkup).join("");
    setHidden(empty, list.length > 0);

    if (count) {
      count.textContent =
        list.length === 0
          ? "No articles"
          : list.length + (list.length === 1 ? " article" : " articles");
    }
    observeReveals(grid);
  }

  chips.forEach(function (chip) {
    if (chip.getAttribute("data-filter") === activeTopic) chip.classList.add("is-active");
    else chip.classList.remove("is-active");
  });

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      activeTopic = chip.getAttribute("data-filter");
      chips.forEach(function (c) {
        c.classList.toggle("is-active", c === chip);
      });
      apply();
    });
  });

  if (search) {
    search.addEventListener("input", apply);
  }
  if (sort) {
    sort.addEventListener("change", apply);
  }
  if (empty) {
    var clear = qs("#empty-clear", empty);
    if (clear) {
      clear.addEventListener("click", function () {
        if (search) search.value = "";
        activeTopic = "all";
        chips.forEach(function (c) {
          c.classList.toggle("is-active", c.getAttribute("data-filter") === "all");
        });
        apply();
      });
    }
  }

  readParams();
  apply();
}

/* ============================================================
   ARTICLE READING TEMPLATE
   ============================================================ */
function initArticle() {
  var body = qs("#article-body");
  if (!body) return;

  var params = new URLSearchParams(window.location.search);
  var id = params.get("id");
  var article = id ? findById(articlesData, id) : null;

  var error = qs("#article-error");
  var content = qs("#article-content");

  if (!article) {
    setHidden(content, true);
    setHidden(error, false);
    return;
  }

  setHidden(error, true);
  setHidden(content, false);
  document.title = article.title + " — Terrapulse STS";

  function set(id, value, html) {
    var el = qs(id);
    if (!el) return;
    if (html) el.innerHTML = value;
    else el.textContent = value;
  }

  set("#article-category", article.category);
  set("#article-title", article.title);
  set("#article-subtitle", article.subtitle);
  set("#article-time", article.readingTime + " min read");

  var crumb = qs("#article-crumb");
  if (crumb) {
    crumb.textContent = article.category;
    crumb.href = "articles.html?topic=" + encodeURIComponent(article.topics[0] || "all");
  }

  var cover = qs("#article-cover");
  if (cover) {
    cover.innerHTML =
      '<img src="' +
      article.cover +
      '" alt="' +
      escapeHtml(article.coverAlt) +
      '"><figcaption>' +
      article.coverCaption +
      "</figcaption>";
  }

  var keybox =
    '<aside class="keybox" aria-label="Key findings"><p class="keybox__title">' +
    '<span aria-hidden="true">◆</span> Key findings</p><ul>' +
    article.keyFindings
      .map(function (k) {
        return "<li>" + escapeHtml(k) + "</li>";
      })
      .join("") +
    "</ul></aside>";

  var html = "";
  var toc = "";
  article.sections.forEach(function (section, index) {
    html += '<h2 id="' + section.id + '">' + escapeHtml(section.title) + "</h2>" + section.html;
    if (index === 0) html += keybox;
    toc +=
      '<li><a href="#' +
      section.id +
      '">' +
      escapeHtml(section.title) +
      "</a></li>";
  });
  body.innerHTML = html;

  var tocList = qs("#article-toc");
  if (tocList) tocList.innerHTML = toc;

  var refs = qs("#article-refs");
  if (refs) {
    refs.innerHTML = article.references
      .map(function (refId) {
        var ref = findById(referencesData, refId);
        return "<li>" + (ref ? ref.text : "") + "</li>";
      })
      .join("");
  }

  var related = qs("#article-related");
  if (related) {
    var picks = articlesData
      .filter(function (a) {
        return (
          a.id !== article.id &&
          a.topics.some(function (t) {
            return article.topics.indexOf(t) !== -1;
          })
        );
      })
      .slice(0, 3);
    if (picks.length === 0) {
      picks = articlesData
        .filter(function (a) {
          return a.id !== article.id;
        })
        .slice(0, 3);
    }
    related.innerHTML = picks.map(articleCardMarkup).join("");
  }

  initTocSpy();
  observeReveals();
}

function initTocSpy() {
  var links = qsa("#article-toc a");
  if (links.length === 0 || typeof window.IntersectionObserver !== "function") return;

  var map = {};
  links.forEach(function (link) {
    map[link.getAttribute("href").slice(1)] = link;
  });

  var spy = new window.IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (l) {
          l.classList.remove("is-current");
        });
        var link = map[entry.target.id];
        if (link) link.classList.add("is-current");
      });
    },
    { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
  );

  qsa(".article-body h2").forEach(function (h) {
    spy.observe(h);
  });
}

/* ============================================================
   PREPAREDNESS QUIZ
   ============================================================ */
function initQuiz() {
  var root = qs("#quiz");
  if (!root) return;

  var score = 0;
  var index = 0;
  var locked = false;

  var startBox = qs("#quiz-start");
  var playBox = qs("#quiz-play");
  var resultBox = qs("#quiz-result");

  function updateProgress() {
    var text = qs("#quiz-progress-text");
    var fill = qs("#quiz-fill");
    var total = quizQuestions.length;
    if (text) text.textContent = "Question " + (index + 1) + " of " + total;
    if (fill) fill.style.width = ((index / total) * 100).toFixed(1) + "%";
    var scoreEl = qs("#quiz-score");
    if (scoreEl) scoreEl.textContent = String(score);
  }

  function renderQuestion() {
    locked = false;
    setHidden(resultBox, true);
    setHidden(playBox, false);
    updateProgress();

    var q = quizQuestions[index];
    var questionEl = qs("#quiz-question");
    if (questionEl) questionEl.textContent = q.q;

    var optionsEl = qs("#quiz-options");
    if (!optionsEl) return;
    optionsEl.innerHTML = "";
    q.opts.forEach(function (opt, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option";
      btn.innerHTML =
        '<span class="option__mark" aria-hidden="true">' +
        String.fromCharCode(65 + i) +
        "</span><span>" +
        escapeHtml(opt.text) +
        "</span>";
      btn.addEventListener("click", function () {
        submitAnswer(opt.pts);
      });
      optionsEl.appendChild(btn);
    });
  }

  function submitAnswer(points) {
    if (locked) return;
    locked = true;
    score += points;
    index += 1;
    if (index < quizQuestions.length) {
      renderQuestion();
    } else {
      showResults();
    }
  }

  function showResults() {
    setHidden(playBox, true);
    setHidden(resultBox, false);

    var fill = qs("#quiz-fill");
    if (fill) fill.style.width = "100%";

    var scoreEl = qs("#quiz-score");
    if (scoreEl) scoreEl.textContent = String(score);

    var scoreDisplay = qs("#result-score");
    if (scoreDisplay) scoreDisplay.textContent = score + " / 100";

    var result = resultDescriptions.filter(function (r) {
      return score >= r.minScore;
    })[0];
    if (!result) result = resultDescriptions[resultDescriptions.length - 1];

    var titleEl = qs("#result-title");
    var descEl = qs("#result-desc");
    var recsEl = qs("#result-recs");
    if (titleEl) titleEl.textContent = result.title;
    if (descEl) descEl.textContent = result.description;
    if (recsEl) {
      recsEl.innerHTML =
        "<h3>What to do next</h3><ul>" +
        result.recommendations
          .map(function (r) {
            return "<li>" + escapeHtml(r) + "</li>";
          })
          .join("") +
        "</ul>";
    }
  }

  function reset() {
    score = 0;
    index = 0;
    renderQuestion();
  }

  var startBtn = qs("#quiz-start-btn");
  if (startBtn) {
    startBtn.addEventListener("click", function () {
      setHidden(startBox, true);
      renderQuestion();
    });
  }
  var restartBtn = qs("#quiz-restart-btn");
  if (restartBtn) restartBtn.addEventListener("click", reset);

  setHidden(playBox, true);
  setHidden(resultBox, true);
  setHidden(startBox, false);
}

/* ============================================================
   CLIMATE DATA VISUALISATIONS
   ============================================================ */
function initDataViz() {
  var fills = qsa(".bar__fill[data-w]");
  if (fills.length === 0) return;

  function fillAll() {
    fills.forEach(function (el) {
      el.style.width = el.getAttribute("data-w") + "%";
    });
  }

  if (prefersReducedMotion() || typeof window.IntersectionObserver !== "function") {
    fillAll();
    return;
  }

  var chart = qs("#capacity-chart");
  var done = false;
  var observer = new window.IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !done) {
          done = true;
          fillAll();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.2 }
  );
  observer.observe(chart || fills[0]);
}

/* ============================================================
   CLIMATE JUSTICE GRID
   ============================================================ */
function initJusticeGrid() {
  var grid = qs("#justice-grid");
  if (!grid) return;
  var picks = articlesData.filter(function (a) {
    return a.topics.indexOf("justice") !== -1;
  });
  grid.innerHTML = picks.map(articleCardMarkup).join("");
  observeReveals(grid);
}

/* ============================================================
   TIMELINE + REFERENCES + TEAM
   ============================================================ */
function initTimeline() {
  var list = qs("#timeline");
  if (!list) return;
  list.innerHTML = timelineData
    .map(function (item) {
      return (
        '<li class="tl-item reveal"><time>' +
        escapeHtml(item.date) +
        "</time><h3>" +
        escapeHtml(item.title) +
        "</h3><p>" +
        escapeHtml(item.text) +
        "</p></li>"
      );
    })
    .join("");
  observeReveals(list);
}

function initReferences() {
  var list = qs("#reference-list");
  if (!list) return;
  list.innerHTML = referencesData
    .map(function (ref) {
      return "<li>" + ref.text + "</li>";
    })
    .join("");
}

function initTeam() {
  var wrap = qs("#team-list");
  if (!wrap) return;
  wrap.innerHTML = teamData.leads
    .map(function (lead) {
      return (
        '<article class="team__card"><p class="team__role">' +
        escapeHtml(lead.role) +
        '</p><h3 class="team__name">' +
        escapeHtml(lead.name) +
        '</h3><p class="team__desc">' +
        escapeHtml(lead.desc) +
        "</p></article>"
      );
    })
    .join("");
  var credits = qs("#credits-list");
  if (credits) {
    credits.innerHTML = teamData.researchers
      .map(function (name) {
        return "<li>" + escapeHtml(name) + "</li>";
      })
      .join("");
  }
}

/* ============================================================
   NEWSLETTER (front-end demonstration only)
   ============================================================ */
function initSubscribe() {
  qsa("form[data-subscribe]").forEach(function (form) {
    var status = qs("[data-subscribe-status]", form);
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var email = form.querySelector('input[type="email"]');
      var consent = form.querySelector('input[type="checkbox"]');
      if (!email || !email.value.trim()) {
        if (status) {
          status.textContent = "Enter an email address to continue.";
          status.style.color = "var(--emerald)";
        }
        return;
      }
      if (consent && !consent.checked) {
        if (status) {
          status.textContent = "Please tick the consent box first.";
          status.style.color = "var(--emerald)";
        }
        return;
      }
      if (status) {
        status.textContent =
          "This is a front-end demonstration — nothing was sent or stored.";
        status.style.color = "var(--emerald)";
      }
      form.reset();
    });
  });
}

/* ============================================================
   DISPATCH
   ============================================================ */
function initApp() {
  initTheme();
  initMobileMenu();
  initHeaderSearch();
  initBackToTop();
  initProgress();
  initSubscribe();

  var page = document.body.getAttribute("data-page");

  if (page === "home") initHome();
  if (page === "articles") initArticles();
  if (page === "article") initArticle();
  if (page === "quiz") initQuiz();
  if (page === "climate-justice") initJusticeGrid();
  if (page === "data") {
    initDataViz();
    initTimeline();
  }
  if (page === "about") {
    initReferences();
    initTeam();
  }

  // Any page with a plain reveal (e.g. interior hero blocks)
  if (page !== "home" && page !== "articles" && page !== "article") {
    observeReveals();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

/* Expose a few surfaces for manual testing in the console. */
window.TerraPulse = {
  initApp: initApp,
  articleCardMarkup: articleCardMarkup,
  referencesData: typeof referencesData !== "undefined" ? referencesData : null
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { articleCardMarkup: articleCardMarkup };
}
