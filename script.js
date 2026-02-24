/* ===========================
   DATA — Easy to edit later
=========================== */

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "80+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
];

const skills = [
  {
    icon: "✦",
    title: "Brand Identity",
    description:
      "Building coherent visual systems from the ground up — logos, typography, color theory, brand guidelines, and the stories that make a brand unforgettable.",
    tags: [
      "Logo Design",
      "Brand Strategy",
      "Visual Identity",
      "Style Guides",
      "Typography",
    ],
  },
  {
    icon: "◈",
    title: "UI/UX Design",
    description:
      "Designing digital products that are intuitive, accessible, and beautifully crafted — from early research and wireframes to polished, production-ready interfaces.",
    tags: [
      "Wireframing",
      "Prototyping",
      "Figma",
      "User Research",
      "Interaction Design",
    ],
  },
  {
    icon: "⬡",
    title: "Graphic Design",
    description:
      "Creating visual communication that commands attention — editorial layouts, poster design, marketing collateral, and print materials with a strong point of view.",
    tags: [
      "Editorial Design",
      "Print",
      "Illustration",
      "Poster Art",
      "Infographics",
    ],
  },
  {
    icon: "◉",
    title: "Product Design",
    description:
      "End-to-end product thinking: from discovery and ideation through iteration and delivery, collaborating closely with engineering and product teams.",
    tags: [
      "Design Systems",
      "Accessibility",
      "Handoff",
      "User Testing",
      "Agile",
    ],
  },
  {
    icon: "⟡",
    title: "Motion & Animation",
    description:
      "Adding life and personality to static designs with purposeful motion — micro-interactions, UI animations, and brand motion identity.",
    tags: [
      "After Effects",
      "Lottie",
      "Principle",
      "CSS Animation",
      "Transitions",
    ],
  },
  {
    icon: "◌",
    title: "Art Direction",
    description:
      "Shaping the visual narrative for campaigns, lookbooks, and digital experiences — from concept and moodboarding to final execution and production.",
    tags: [
      "Concept Development",
      "Moodboarding",
      "Photo Direction",
      "Campaign Design",
    ],
  },
];

const projects = [
  {
    num: "01",
    category: "Brand Identity · Strategy",
    title: "Verdant — Sustainable Lifestyle Brand",
    description:
      "Complete brand identity for a Scandinavian sustainable lifestyle company. The visual system balances organic warmth with refined minimalism, communicating both approachability and conviction.",
    color1: "#0d1f14",
    color2: "#1a3d24",
    accentColor: "#4caf82",
    link: "#",
  },
  {
    num: "02",
    category: "UI/UX · Product Design",
    title: "Meridian — Financial Dashboard",
    description:
      "A data-dense financial analytics platform redesigned for clarity. Complex information architecture restructured into a calm, scannable interface that reduced user errors by 40%.",
    color1: "#0d0d2b",
    color2: "#1a1a4d",
    accentColor: "#6c8cf5",
    link: "#",
  },
  {
    num: "03",
    category: "Editorial · Print",
    title: "Parallax — Cultural Magazine",
    description:
      "Art direction and design for a quarterly print publication covering architecture, design, and contemporary culture. Each issue features a bespoke typographic system and visual identity.",
    color1: "#2b0d0d",
    color2: "#4d1a1a",
    accentColor: "#f56c6c",
    link: "#",
  },
  {
    num: "04",
    category: "Mobile · UI/UX",
    title: "Bloom — Wellness & Mindfulness App",
    description:
      "iOS app design for a guided mindfulness and habit-tracking platform. Soft, layered visuals and thoughtful micro-interactions create a daily ritual that feels genuinely restorative.",
    color1: "#1a0d2b",
    color2: "#2e1a4d",
    accentColor: "#b580f5",
    link: "#",
  },
];

const experiences = [
  {
    period: "2022 — Present",
    role: "Senior Product Designer",
    company: "Studio Koto, Berlin",
    description:
      "Leading design across brand identity, digital product, and motion for global clients. Mentoring a team of three junior designers and establishing internal design system practices.",
  },
  {
    period: "2020 — 2022",
    role: "UI/UX Designer",
    company: "Klarna, Stockholm",
    description:
      "Owned the design of Klarna's merchant-facing dashboard — from research and concept through delivery. Collaborated daily with engineering, product, and data teams in an agile environment.",
  },
  {
    period: "2018 — 2020",
    role: "Graphic & Brand Designer",
    company: "Pentagram (Associate), London",
    description:
      "Contributed to visual identity and brand strategy projects for clients in culture, technology, and retail. Developed a deep understanding of brand systems and multi-platform consistency.",
  },
  {
    period: "2016 — 2018",
    role: "Junior Designer",
    company: "Freelance & Agencies",
    description:
      "Built a varied foundation across editorial design, digital illustration, and web UI — working with independent brands, agencies, and cultural institutions across Europe.",
  },
];

/* ===========================
   RENDER FUNCTIONS
=========================== */

function renderStats() {
  const container = document.getElementById("aboutStats");
  if (!container) return;
  container.innerHTML = stats
    .map(
      (s) => `
    <div class="stat-item reveal" role="listitem">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `,
    )
    .join("");
}

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;
  grid.innerHTML = skills
    .map(
      (skill, i) => `
    <article class="skill-card" role="listitem" aria-label="${skill.title} skill" style="transition-delay:${i * 0.07}s">
      <span class="skill-card-icon" aria-hidden="true">${skill.icon}</span>
      <h3 class="skill-card-title">${skill.title}</h3>
      <p class="skill-card-desc">${skill.description}</p>
      <div class="skill-tags" aria-label="Tools and methods">
        ${skill.tags.map((t) => `<span class="skill-tag">${t}</span>`).join("")}
      </div>
    </article>
  `,
    )
    .join("");
}

function renderProjects() {
  const list = document.getElementById("projectsList");
  if (!list) return;
  list.innerHTML = projects
    .map(
      (p, i) => `
    <article class="project-item" role="listitem" aria-label="${p.title}">
      <div class="project-visual">
        <div class="project-visual-inner" style="background: linear-gradient(135deg, ${p.color1} 0%, ${p.color2} 100%);">
          <div style="
            position:absolute; inset:0;
            display:flex; align-items:center; justify-content:center;
            flex-direction:column; gap:0.5rem;
          ">
            <div style="
              font-family: var(--font-display);
              font-size: clamp(3rem,8vw,6rem);
              font-weight:900;
              color:${p.accentColor};
              opacity:0.25;
              letter-spacing:-0.02em;
              line-height:1;
              user-select:none;
            ">${p.num}</div>
            <div style="
              width:80px; height:80px;
              border-radius:50%;
              background: ${p.accentColor};
              opacity:0.15;
              filter:blur(20px);
            "></div>
          </div>
        </div>
        <span class="project-num" aria-hidden="true">${p.num}</span>
      </div>
      <div class="project-info">
        <p class="project-category">${p.category}</p>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <a href="${p.link}" class="project-link" aria-label="View ${p.title} project">
          View Project <span class="arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  `,
    )
    .join("");
}

function renderExperience() {
  const timeline = document.getElementById("timeline");
  if (!timeline) return;
  timeline.innerHTML = experiences
    .map(
      (exp, i) => `
    <article class="timeline-item" role="listitem" aria-label="${exp.role} at ${exp.company}" style="transition-delay:${i * 0.1}s">
      <p class="timeline-period">${exp.period}</p>
      <h3 class="timeline-role">${exp.role}</h3>
      <p class="timeline-company">${exp.company}</p>
      <p class="timeline-desc">${exp.description}</p>
    </article>
  `,
    )
    .join("");
}

/* ===========================
   CUSTOM CURSOR
=========================== */

function initCursor() {
  const cursor = document.getElementById("cursor");
  const dot = document.getElementById("cursorDot");
  if (!cursor || !dot) return;

  let mouseX = 0,
    mouseY = 0;
  let curX = 0,
    curY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
  });

  function animateCursor() {
    curX += (mouseX - curX) * 0.12;
    curY += (mouseY - curY) * 0.12;
    cursor.style.left = curX + "px";
    cursor.style.top = curY + "px";
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  const hoverTargets = document.querySelectorAll(
    "a, button, .skill-card, .project-item",
  );
  hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hovering"));
    el.addEventListener("mouseleave", () =>
      cursor.classList.remove("hovering"),
    );
  });

  document.addEventListener("mousedown", () =>
    cursor.classList.add("clicking"),
  );
  document.addEventListener("mouseup", () =>
    cursor.classList.remove("clicking"),
  );
}

/* ===========================
   CURSOR PARALLAX (Hero orbs)
=========================== */

function initParallax() {
  const orbs = [
    { el: document.querySelector(".orb-1"), factor: 0.015 },
    { el: document.querySelector(".orb-2"), factor: -0.02 },
    { el: document.querySelector(".orb-3"), factor: 0.025 },
  ];

  let targetX = 0,
    targetY = 0;
  let currentX = 0,
    currentY = 0;

  document.addEventListener("mousemove", (e) => {
    targetX = e.clientX - window.innerWidth / 2;
    targetY = e.clientY - window.innerHeight / 2;
  });

  function tick() {
    currentX += (targetX - currentX) * 0.06;
    currentY += (targetY - currentY) * 0.06;
    orbs.forEach(({ el, factor }) => {
      if (el) {
        el.style.transform = `translate(${currentX * factor}px, ${currentY * factor}px)`;
      }
    });
    requestAnimationFrame(tick);
  }
  tick();
}

/* ===========================
   SCROLL ANIMATIONS
=========================== */

function initScrollAnimations() {
  // Generic reveal elements
  const revealEls = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
  );

  revealEls.forEach((el) => observer.observe(el));

  // Skill cards
  const skillCards = document.querySelectorAll(".skill-card");
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );
  skillCards.forEach((card) => skillObserver.observe(card));

  // Timeline items
  const timelineItems = document.querySelectorAll(".timeline-item");
  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 },
  );
  timelineItems.forEach((item) => timelineObserver.observe(item));
}

/* ===========================
   SCROLL-BASED HEADER
=========================== */

function initHeader() {
  const header = document.querySelector(".header");
  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("scrolled", window.scrollY > 40);
    },
    { passive: true },
  );
}

/* ===========================
   MOBILE NAV
=========================== */

function initMobileNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const open = toggle.classList.toggle("open");
    links.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  });

  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      toggle.classList.remove("open");
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

/* ===========================
   SCROLL-JACK: Project Items
   (parallax on project visuals while scrolling)
=========================== */

function initProjectParallax() {
  const items = document.querySelectorAll(".project-visual-inner");

  function update() {
    items.forEach((el) => {
      const rect = el.closest(".project-item").getBoundingClientRect();
      const wh = window.innerHeight;
      const progress = (wh - rect.top) / (wh + rect.height);
      const offset = (progress - 0.5) * 80;
      el.style.transform = `translateY(${offset}px) scale(1.12)`;
    });
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ===========================
   MAGNETIC BUTTONS
=========================== */

function initMagneticButtons() {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.3}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });
}

/* ===========================
   HORIZONTAL SCROLL TICKER
   (decorative role text in hero area)
=========================== */

function addScrollingTicker() {
  // Inject a subtle scrolling text behind the hero
  const hero = document.querySelector(".hero-bg");
  if (!hero) return;

  const words = [
    "Design",
    "·",
    "Brand",
    "·",
    "UI/UX",
    "·",
    "Identity",
    "·",
    "Motion",
    "·",
    "Product",
    "·",
  ];
  const track = document.createElement("div");
  track.setAttribute("aria-hidden", "true");
  track.style.cssText = `
    position:absolute; bottom:3rem; left:0; right:0;
    overflow:hidden; white-space:nowrap; z-index:1;
    pointer-events:none;
  `;

  const inner = document.createElement("div");
  inner.style.cssText = `
    display:inline-flex; gap:2rem;
    font-family:'Playfair Display',serif;
    font-size:clamp(4rem,10vw,8rem);
    font-weight:900;
    letter-spacing:-0.02em;
    color:rgba(108,43,217,0.07);
    animation: ticker 25s linear infinite;
    white-space:nowrap;
  `;

  const repeated = [...words, ...words, ...words].join(" ");
  inner.textContent = repeated;

  // Add keyframe via style tag
  if (!document.getElementById("ticker-style")) {
    const style = document.createElement("style");
    style.id = "ticker-style";
    style.textContent = `
      @keyframes ticker {
        from { transform: translateX(0); }
        to { transform: translateX(-33.33%); }
      }
    `;
    document.head.appendChild(style);
  }

  track.appendChild(inner);
  hero.appendChild(track);
}

/* ===========================
   YEAR
=========================== */

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ===========================
   INIT
=========================== */

document.addEventListener("DOMContentLoaded", () => {
  // Render data
  renderStats();
  renderSkills();
  renderProjects();
  renderExperience();

  // UI
  setYear();
  initHeader();
  initMobileNav();

  // Animations (after render so elements exist)
  requestAnimationFrame(() => {
    initCursor();
    initParallax();
    initScrollAnimations();
    initProjectParallax();
    initMagneticButtons();
    addScrollingTicker();

    // Re-init cursor hover on dynamically rendered elements
    const hoverTargets = document.querySelectorAll(
      "a, button, .skill-card, .project-item",
    );
    const cursor = document.getElementById("cursor");
    if (cursor) {
      hoverTargets.forEach((el) => {
        el.addEventListener("mouseenter", () =>
          cursor.classList.add("hovering"),
        );
        el.addEventListener("mouseleave", () =>
          cursor.classList.remove("hovering"),
        );
      });
    }
  });
});
