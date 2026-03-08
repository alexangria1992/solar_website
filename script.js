const menu = document.getElementById("mobileMenu");
const btn = document.getElementById("mobileButton");
const closeBtn = document.getElementById("menuClose");

btn.addEventListener("click", () => {
  // 1) Toggle OPEN state on the BUTTON first (so icon swaps)
  const open = btn.classList.toggle("is-open");
  // 2) Update aria

  btn.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-hidden", String(!open));
  // 3) Then slide the panel in on the next paint frame
  requestAnimationFrame(() => {
    menu.classList.toggle("is-open", open);
  });
});

closeBtn.addEventListener("click", () => {
  btn.classList.remove("is-open");
  menu.classList.remove("is-open");
  btn.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-hidden", "true");
});

// closeBtn.addEventListener("click", () => {
//   menu.classList.remove("is-open");
// });
