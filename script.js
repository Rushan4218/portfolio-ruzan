/* ===========================
   DATA — Easy to edit later
=========================== */
const stats = [
  { value: "1.5+", label: "Years of Experience" },
  { value: "4+", label: "Projects Delivered" },
  { value: "5+", label: "Happy Clients" },
];

const skills = [
  {
    icon: "✦",
    title: "UI/UX Design",
    description:
      "Designing intuitive, user-centered digital experiences that balance functionality, clarity, and visual refinement.",
    tags: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Interaction Design",
      "Design Systems",
      "Usability Testing"
    ],
  },
  {
    icon: "◈",
    title: "Product Design",
    description:
      "Transforming complex ideas into scalable, efficient digital products aligned with user needs and business goals.",
    tags: [
      "User Flows",
      "Information Architecture",
      "Accessibility",
      "Developer Handoff",
    ],
  },
  {
    icon: "⬡",
    title: "Branding Design",
    description:
      "Creating distinctive and cohesive brand systems that communicate purpose, personality, and long-term consistency.",
    tags: [
      "Brand Strategy",
      "Logo Design",
      "Visual Identity",
      "Typography",
      "Brand Guidelines",
    ],
  },
  {
    icon: "◉",
    title: "Graphic Design",
    description:
      "Crafting compelling visual assets across digital and print to strengthen communication and brand presence.",
    tags: [
      "Editorial Layout",
      "Marketing Collateral",
      "Social Media Design",
      "Posters",
      "Print Media Design",
    ],
  },
  {
    icon: "⟡",
    title: "Video & Motion Design",
    description:
      "Enhancing storytelling and user engagement through purposeful animation and dynamic visual transitions.",
    tags: [
      "Motion Graphics",
      "Video Editing",
    ],
  },
  // {
  //   icon: "◌",
  //   title: "3D Modeling",
  //   description:
  //     "Producing detailed and realistic 3D visuals for products, branding, and motion applications.",
  //   tags: [
  //     "Modeling",
  //     "Lighting",
  //     "Rendering",
  //     "Product Visualization",
  //   ],
  // },
];

const projects = [
  {
    num: "01",
    category: "UI/UX Design",
    title: "Binary Digits - Portfolio Website Design",
    description:
      "Modern portfolio website for a digital-first tech brand. Designed to showcase innovation and services with clarity and impact.",
    color1: "#0d1f14",
    color2: "#1a3d24",
    accentColor: "#4caf82",
    link: "#",
  },
  {
    num: "02",
    category: "UI/UX Design · Product Design",
    title: "Grocery.co - E-commerce store",
    description:
      "Modern eCommerce website for a grocery store, designed for fast browsing and seamless online shopping.",
    color1: "#0d0d2b",
    color2: "#1a1a4d",
    accentColor: "#6c8cf5",
    link: "#",
  },
  {
    num: "03",
    category: "UI/UX Design · Product Design",
    title: "SkillTraid - Online Course Website",
    description:
      "Modern online learning platform built for seamless course discovery and engagement. Designed to deliver structured content, intuitive navigation, and an accessible learning experience.",
    color1: "#2b0d0d",
    color2: "#4d1a1a",
    accentColor: "#f56c6c",
    link: "#",
  },
  {
    num: "04",
    category: "UI/UX Design",
    title: "Ruzan - Personal Portfolio Website",
    description: "Sleek portfolio website for a creative professional, designed to highlight work and personality with a bold, modern aesthetic.",
    color1: "#1a0d2b",
    color2: "#2e1a4d",
    accentColor: "#b580f5",
    link: "#",
  },
];

const experiences = [
  {
    period: "2024 Nov — Present",
    role: "Product & Visual Desiger",
    company: "Infotraid Technology",
    description: "Leading design for a B2B SaaS platform that streamlines data management and analytics. Responsible for end-to-end product design, from user research and wireframing to high-fidelity UI and developer handoff.",
  },
  {
    period: "2024 July — 2024 Oct",
    role: "Graphic Designer · UI/UX Designer",
    company: "Krimal Tech",
    description: "Designed a modern, user-friendly website for a cybersecurity startup, focusing on clear communication of complex services and building trust with potential clients. Created visual assets for marketing and social media to support brand growth.",
  },
  {
    period: "2024 Mar - 2024 May",
    role: "Graphic Design Intern",
    company: "Kontenify Networks",
    description: "Assisted in creating visual content for a tech startup, including social media graphics, marketing materials, and website assets. Gained experience in brand consistency and digital design best practices.",
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
