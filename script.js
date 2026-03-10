const chartData = [40, 60, 30, 80, 50, 90, 45, 70, 85, 40, 60, 100];
const menu = document.getElementById("mobileMenu");
const btn = document.getElementById("mobileButton");
const closeBtn = document.getElementById("menuClose");
const avatarGroup = document.getElementById("avatarGroup");
const specsLeft = document.getElementById("specsLeft");
const specsRight = document.getElementById("specsRight");
const guideCircles = document.getElementById("guideCircles");
//Chart Elements
const chartBars = document.getElementById("chartBars");
const chartValue = document.getElementById("chartValue");

let hoveredBar = null;
//Services Element
const servicesGrid = document.getElementById("servicesGrid");
// SERVICES DATA
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

btn.addEventListener("click", () => {
  // 1) Toggle OPEN state on the BUTTON first (so icon swaps)
  const open = btn.classList.toggle("is-open");
  // 2) Update aria

  btn.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-hidden", String(!open));
  // 3) Then slide the panel in on the next paint frame
  if (open) {
    menu.style.transition = "transform 600ms cubic-bezier(0.76, 0, 0.24, 1)";

    requestAnimationFrame(() => {
      menu.classList.toggle("is-open", open);

      closeBtn.focus();
    });
  } else {
    menu.style.transition = "none";
    menu.classList.remove("is-open");
    btn.focus();
  }
});
closeBtn.addEventListener("click", () => {
  btn.classList.remove("is-open");
  menu.classList.remove("is-open");
  btn.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-hidden", "true");
  btn.focus();
});

//avatars

[1, 2, 3].forEach((i) => {
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
  chartValue.textContent = `${value}%`;
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
    const column = createBarColumn(height, i);
    chartBars.appendChild(column);
  });
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
  card.className = "services-section__card";

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
  item.className = "product-showcase__spec-item";

  const topRow = document.createElement("div");
  topRow.className = "product-showcase__spec-top";

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
renderGuideCircles();
renderSpecs();
renderChartBars();
renderServices();
