const chartData = [40, 60, 30, 80, 50, 90, 45, 70, 85, 40, 60, 100];
const services = [
  {
    title: "Monitor",
    image: "/assets/images/solar-2.jpg",
    icon: "monitor",
    isComingSoon: false,
  },

  {
    title: "Install",
    image: "/assets/images/solar-1.jpg",
    icon: "sliders",
    isComingSoon: false,
  },
  {
    title: "Design",
    image: "/assets/images/solar-3.jpg",
    icon: "bell",
    isComingSoon: true,
  },
];
// specs data
const specs = [
  {
    icon: "shield",
    title: "Warranty",
    value: "10-Year Protection",
  },
  {
    icon: "sun",
    title: "Operation",
    value: "24/7 Autonomy",
  },
  {
    icon: "zap",
    title: "Switch",
    value: "<10ms Seamless",
  },
  {
    icon: "plus",
    title: "System",
    value: "Modular Expansion",
  },
];

const moreSpecs = [
  { label: "Inverter Dimensions", value: '74.4" x 41.2" x 1.57"' },
  { label: "Inverter Dimensions", value: '26" x 16" x 6"' },
  { label: "Materials", value: '26" x 16" x 6"' },
];

// Testimonials data
const testimonials = [
  {
    text: "Switching to Goreno was the best decision for our home. The Powerwall integration is seamless and the design is stunning.",
    imageSrc: "/assets/images/avatar-1.png",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our monthly energy costs have dropped by 80%. The real-time monitoring makes managing our consumption addictive.",
    imageSrc: "/assets/images/avatar-2.png",
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "The installation process was professional and the aesthetic of the panels actually adds value to our modern roof.",
    imageSrc: "/assets/images/avatar-3.png",
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "Finally, a solar company that cares about design as much as efficiency. It's the Apple of energy.",
    imageSrc: "/assets/images/avatar-4.png",
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Customer support helped me optimize my AI Energy Mode, and now my house runs itself during peak hours.",
    imageSrc: "/assets/images/avatar-5.png",
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The most reliable backup system I've ever used. We had a neighborhood outage and didn't even notice.",
    imageSrc: "/assets/images/avatar-6.png",
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Clean energy shouldn't look industrial. Goreno proved that it can be a beautiful part of home architecture.",
    imageSrc: "/assets//images/avatar-7.png",
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "Assigning energy priorities in the app is so intuitive. We prioritize our EV charging overnight effortlessly.",
    imageSrc: "/assets//images/avatar-8.png",
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Investment-grade hardware with a software experience that is lightyears ahead of the competition.",
    imageSrc: "/assets//images/avatar-9.png",
    name: "Casey Harper",
    username: "@casey09",
  },
];
const footerLinks = {
  Company: ["About us", "Career", "Contact"],
  Product: ["Solar", "Vehicle Recalls"],
  Resources: ["News", "Press"],
};

const socialLinks = [
  { name: "Instagram", iconClass: "fa-brands fa-instagram" },
  { name: "Facebook", iconClass: "fa-brands fa-facebook-f" },
  { name: "Twitter", iconClass: "fa-brands fa-twitter" },
  { name: "Youtube", iconClass: "fa-brands fa-youtube" },
];

const nav = document.querySelector(".navigation");

const menu = document.getElementById("mobileMenu");
const btn = document.getElementById("mobileButton");
const closeBtn = document.getElementById("menuClose");
const mobileLinks = document.querySelectorAll(".mobile-menu__link");

const avatarGroup = document.getElementById("avatarGroup");
const specsLeft = document.getElementById("specsLeft");
const specsRight = document.getElementById("specsRight");
const guideCircles = document.getElementById("guideCircles");
//Chart Elements
const chartBars = document.getElementById("chartBars");
const chartValue = document.getElementById("chartValue");
// More Section
const previewImages = [2, 3];
const sliderDotCount = 4;
const activeDotIndex = 2;
const previewGrid = document.getElementById("previewGrid");
const moreSpecsGrid = document.getElementById("moreSpecsGrid");
const sliderDots = document.getElementById("sliderDots");

const firstTrackElement = document.querySelector(".testimonials__track--first");
const secondTrackElement = document.querySelector(
  ".testimonials__track--second",
);
const thirdTrackElement = document.querySelector(".testimonials__track--third");
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);
const heroAnimatedItems = document.querySelectorAll(".hero-animate");
const aboutHeading = document.querySelector(".about-reveal--heading");
const aboutGrid = document.getElementById("aboutGrid");
const productRevealItems = document.querySelectorAll(".product-reveal");
const productStagger = document.getElementById("productStagger");
const servicesRevealItems = document.querySelectorAll(".services-reveal");
const servicesStagger = document.querySelector(".services-stagger");
const moreRevealItems = document.querySelectorAll(".more-reveal");
const moreStagger = document.getElementById("moreStagger");

let hoveredBar = null;
let chartAnimated = false;
//Services Element
const servicesGrid = document.getElementById("servicesGrid");

window.addEventListener("load", () => {
  heroAnimatedItems.forEach((item) => {
    item.classList.add("is-visible");
  });
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  },
);

if (aboutHeading) revealObserver.observe(aboutHeading);
if (aboutGrid) revealObserver.observe(aboutGrid);

const productObserver = new IntersectionObserver(
  (entries, oberserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      oberserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -80px 0px",
  },
);

productRevealItems.forEach((item) => {
  productObserver.observe(item);
});

if (productStagger) {
  productObserver.observe(productStagger);
}

const servicesObserver = new IntersectionObserver(
  (entries, oberserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      oberserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -80px 0px",
  },
);

servicesRevealItems.forEach((item) => {
  servicesObserver.observe(item);
});

if (servicesStagger) {
  servicesObserver.observe(servicesStagger);
}

const moreObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -80px 0px",
  },
);

moreRevealItems.forEach((item) => {
  moreObserver.observe(item);
});

if (moreStagger) {
  moreObserver.observe(moreStagger);
}
function openMenu() {
  btn.classList.add("is-open");
  menu.classList.add("is-open");
  btn.setAttribute("aria-expanded", "true");
  menu.setAttribute("aria-hidden", "false");
  menu.removeAttribute("inert");
  closeBtn.focus();
}

function closeMenu() {
  btn.classList.remove("is-open");
  menu.classList.remove("is-open");
  btn.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-hidden", "true");
  menu.setAttribute("inert", "");

  btn.focus();
}
btn.addEventListener("click", () => {
  // 1) Toggle OPEN state on the BUTTON first (so icon swaps)
  const isOpen = btn.classList.contains("is-open");

  // 3) Then slide the panel in on the next paint frame
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});
closeBtn.addEventListener("click", closeMenu);

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.classList.contains("is-open")) {
    closeMenu();
  }
});

function updateNavTheme() {
  const scrollY = window.scrollY;
  const footerThreshold = document.documentElement.scrollHeight - 1000;

  const isDarkSection = scrollY > 700 && scrollY < footerThreshold;
  nav.classList.toggle("is-dark-section", isDarkSection);
}

window.addEventListener("scroll", updateNavTheme);
window.addEventListener("load", updateNavTheme);

[
  //avatars

  (1, 2, 3),
].forEach((i) => {
  {
    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.style.backgroundImage = `url('/assets/images/avatar-${i + 1}.png')`;
    avatarGroup.appendChild(avatar);
  }
});

// Chart functions

function updateChartValue() {
  const value = hoveredBar !== null ? chartData[hoveredBar] : 72;
  chartValue.classList.remove("is-changing");
  void chartValue.offsetWidth;

  chartValue.textContent = `${value}%`;
  chartValue.classList.add("is-changing");
}

function createBarColumn(height, i) {
  const column = document.createElement("div");
  column.className = "about-section__chart-bar-column";

  const bar = document.createElement("div");
  bar.className = "about-section__chart-bar transition-colors";
  bar.style.height = `${height}%`;
  if (hoveredBar === i) {
    bar.classList.add("chart-card__bar--active");
  } else if (i > 8) {
    bar.classList.add("chart-card__bar--lime");
  }

  column.addEventListener("mouseenter", () => {
    hoveredBar = i;
    updateChartValue();
    renderChartBars();
  });

  column.addEventListener("mouseleave", () => {
    hoveredBar = null;
    updateChartValue();
    renderChartBars();
  });
  column.appendChild(bar);

  return column;
}

function renderChartBars() {
  chartBars.innerHTML = "";

  chartData.forEach((height, i) => {
    const column = document.createElement("div");
    column.className = "about-section__chart-bar-column";

    const bar = document.createElement("div");
    bar.className = "about-section__chart-bar transition-colors";
    bar.dataset.index = i;
    bar.dataset.height = height;
    bar.style.height = "0%";

    column.addEventListener("mouseenter", () => {
      hoveredBar = i;
      updateChartValue();
      updateBarStyles();
    });

    column.addEventListener("mouseleave", () => {
      hoveredBar = null;
      updateChartValue();
      updateBarStyles();
    });
    column.appendChild(bar);
    chartBars.appendChild(column);
  });
}

function updateBarStyles() {
  const bars = document.querySelectorAll(".about-section__chart-bar");
  bars.forEach((bar, i) => {
    bar.classList.remove("chart-card__bar--active", "chart-card__bar--lime");

    if (hoveredBar === i) {
      bar.classList.add("chart-card__bar--active");
    } else if (i > 8) {
      bar.classList.add("chart-card__bar--lime");
    }
  });
}

function animateChartBars() {
  if (chartAnimated) return;

  const bars = document.querySelectorAll(".about-section__chart-bar");

  bars.forEach((bar, i) => {
    const targetHeight = bar.dataset.height;

    bar.style.transitionDelay = `${i * 50}ms`;

    requestAnimationFrame(() => {
      bar.style.height = `${targetHeight}%`;
    });
  });

  chartAnimated = true;
}
// SERVICES
function getServiceIconClass(iconName) {
  switch (iconName) {
    case "monitor":
      return "fa-solid fa-desktop";
    case "sliders":
      return "fa-solid fa-sliders";
    case "bell":
      return "fa-solid fa-bell";
    default:
      return "fa-solid fa-circle";
  }
}

function createServiceCard(service, index) {
  const card = document.createElement("div");
  card.className = "services-section__card services-stagger-item";

  const imageContainer = document.createElement("div");
  imageContainer.className = "services-section__image-container";

  imageContainer.style.backgroundImage = `url('${service.image}')`;

  if (service.isComingSoon) {
    const comingSoonOverlay = document.createElement("div");
    comingSoonOverlay.className = "services-section__coming-soon-overlay";
    imageContainer.appendChild(comingSoonOverlay);

    const pill = document.createElement("div");
    pill.className = "services-section__coming-soon-pill";

    const dot = document.createElement("div");
    dot.className = "services-section__coming-soon-dot";

    const text = document.createElement("span");
    text.textContent = "Coming soon";

    pill.appendChild(dot);
    pill.appendChild(text);

    comingSoonOverlay.appendChild(pill);
    imageContainer.appendChild(comingSoonOverlay);
  }
  const overlay = document.createElement("div");
  overlay.className = "services-section__image-overlay";

  imageContainer.appendChild(overlay);

  const titleRow = document.createElement("div");
  titleRow.className = "services-section__title-row";

  const iconBox = document.createElement("span");
  iconBox.className = "services-section__icon-box";

  const icon = document.createElement("i");
  icon.className = getServiceIconClass(service.icon);

  const title = document.createElement("span");
  title.className = "services-section__title";
  title.textContent = service.title;

  iconBox.appendChild(icon);
  titleRow.appendChild(iconBox);
  titleRow.appendChild(title);

  card.appendChild(imageContainer);
  card.appendChild(titleRow);

  return card;
}

function renderServices() {
  servicesGrid.innerHTML = "";

  services.forEach((service, index) => {
    const card = createServiceCard(service, index);
    servicesGrid.appendChild(card);
  });
}

function getSpecIconClass(iconName) {
  switch (iconName) {
    case "shield":
      return "fa-solid fa-shield";
    case "sun":
      return "fa-solid fa-sun";
    case "zap":
      return "fa-solid fa-bolt";
    case "plus":
      return "fa-solid fa-plus";
    default:
      return "fa-solid fa-circle";
  }
}

function createSpecItem(spec) {
  const item = document.createElement("div");
  item.className =
    "product-showcase__spec-item product-showcase__spec-item--right";

  const topRow = document.createElement("div");
  topRow.className = "product-showcase__spec-top transition-colors";

  const icon = document.createElement("i");
  icon.className = getSpecIconClass(spec.icon);

  const title = document.createElement("span");
  title.className = "product-showcase__spec-title";
  title.textContent = spec.title;

  topRow.appendChild(icon);
  topRow.appendChild(title);

  const value = document.createElement("div");
  value.className = "product-showcase__spec-value";
  value.textContent = spec.value;

  const line = document.createElement("div");
  line.className = "product-showcase__spec-line";

  item.appendChild(topRow);
  item.appendChild(value);
  item.appendChild(line);

  return item;
}

function renderSpecs() {
  specsLeft.innerHTML = "";
  specsRight.innerHTML = "";

  specs.slice(0, 2).forEach((spec) => {
    specsLeft.appendChild(createSpecItem(spec));
  });

  specs.slice(2, 4).forEach((spec) => {
    specsRight.appendChild(createSpecItem(spec));
  });
}

function renderGuideCircles() {
  guideCircles.innerHTML = "";
  [1, 2, 3].forEach((i) => {
    const circle = document.createElement("div");
    circle.className = "product-showcase__guide-circle";
    circle.textContent = `0${i}`;
    guideCircles.appendChild(circle);
  });
}

// MORE SECTION
function renderPreviewimages() {
  previewGrid.innerHTML = "";

  previewImages.forEach((i) => {
    const card = document.createElement("div");
    card.className = "more-section__preview-card";

    const img = document.createElement("img");
    img.className = "more-section__preview-image";
    img.src = `/assets/images/solar-${i}.jpg`;

    card.appendChild(img);
    previewGrid.appendChild(card);
  });
}

function createMoreSpecItem(spec) {
  const item = document.createElement("div");
  item.className = "more-section__spec-item";

  const label = document.createElement("div");
  label.className = "more-section__spec-label";
  label.innerHTML = `<span>◆</span> ${spec.label}`;

  const value = document.createElement("div");
  value.className = "more-section__spec-value";
  value.textContent = spec.value;

  item.appendChild(label);
  item.appendChild(value);

  return item;
}

function renderMoreSpecs() {
  moreSpecsGrid.innerHTML = "";

  moreSpecs.forEach((spec) => {
    moreSpecsGrid.appendChild(createMoreSpecItem(spec));
  });
}

function renderSliderDots() {
  sliderDots.innerHTML = "";
  [1, 2, 3, 4].forEach((dot, i) => {
    const dotEl = document.createElement("div");
    dotEl.className = "more-section__slider-dot";
    if (i === activeDotIndex) {
      dotEl.classList.add("more-section__slider-dot--active");
    }
    sliderDots.appendChild(dotEl);
  });
}

function createTestimonialCard(item) {
  const card = document.createElement("article");
  card.className = "testimonial-card";

  const text = document.createElement("div");
  text.className = "testimonial-card__text";
  text.textContent = `"${item.text}"`;

  const footer = document.createElement("div");
  footer.className = "testimonial-card__footer";

  const image = document.createElement("img");
  image.className = "testimonial-card__image";
  image.src = item.imageSrc;
  image.alt = item.name;

  const meta = document.createElement("div");
  meta.className = "testimonial-card__meta";

  const name = document.createElement("div");
  name.className = "testimonial-card__name";
  name.textContent = item.name;

  const username = document.createElement("div");
  username.className = "testimonial-card__username";
  username.textContent = item.username;

  meta.appendChild(name);
  meta.appendChild(username);

  footer.appendChild(image);
  footer.appendChild(meta);

  card.appendChild(text);
  card.appendChild(footer);

  return card;
}

function renderTestimonialsColumn(trackElement, items) {
  if (!trackElement) return;

  trackElement.innerHTML = "";

  for (let i = 0; i < 2; i++) {
    items.forEach((item) => {
      const card = createTestimonialCard(item);
      trackElement.appendChild(card);
    });
  }
}

function createSocialButton(item) {
  const button = document.createElement("button");
  button.className = "footer__social-button";
  button.type = "button";

  const icon = document.createElement("i");
  icon.className = item.iconClass;

  const text = document.createElement("span");
  text.textContent = item.name;

  button.appendChild(icon);
  button.appendChild(text);

  return button;
}

function renderFooterSocials() {
  const socialList = document.querySelector(".footer__social-list");

  if (!socialList) return;

  socialLinks.forEach((item) => {
    const button = createSocialButton(item);
    socialList.appendChild(button);
  });
}

function createFooterLinkGroup(category, links) {
  const group = document.createElement("div");
  group.className = "footer__link-group";

  const title = document.createElement("span");
  title.className = "footer__label";
  title.textContent = category;

  const list = document.createElement("ul");
  list.className = "footer__link-list";

  links.forEach((linkText) => {
    const item = document.createElement("li");

    const link = document.createElement("a");
    link.className = "footer__link";
    link.href = "#";
    link.textContent = linkText;

    item.appendChild(link);
    list.appendChild(item);
  });

  group.appendChild(title);
  group.appendChild(list);

  return group;
}

function renderFooterLinks() {
  const linksContainer = document.querySelector(".footer__links");

  if (!linksContainer) return;

  Object.entries(footerLinks).forEach(([category, links]) => {
    const group = createFooterLinkGroup(category, links);
    linksContainer.appendChild(group);
  });
}

function renderFooterCopyright() {
  const copyright = document.querySelector(".footer__copyright");

  if (!copyright) return;

  const currentYear = new Date().getFullYear();
  copyright.textContent = `© ${currentYear} Copyright Goreno Inc.`;
}
renderFooterCopyright();
renderFooterLinks();
renderFooterSocials();
renderPreviewimages();
renderMoreSpecs();
renderSliderDots();
renderGuideCircles();
renderSpecs();
renderChartBars();
updateChartValue();
updateBarStyles();
animateChartBars();
renderServices();
renderTestimonialsColumn(firstTrackElement, firstColumn);
renderTestimonialsColumn(secondTrackElement, secondColumn);
renderTestimonialsColumn(thirdTrackElement, thirdColumn);
