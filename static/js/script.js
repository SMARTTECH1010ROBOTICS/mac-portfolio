// Clock
function updateClock() {
  const now = new Date();
  document.getElementById("time").textContent =
    now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.getElementById("date").textContent =
    now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
}
setInterval(updateClock, 60000); // update every minute
updateClock();

// Windows
function openWindow(id) {
  document.getElementById(id).style.display = "block";
}
function closeWindow(id) {
  document.getElementById(id).style.display = "none";
}

// Dock magnification
const dock = document.getElementById("dock");
const dockItems = dock.querySelectorAll(".dock-icon");
dock.addEventListener("mousemove", e => {
  dockItems.forEach(it => {
    const rect = it.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    const dist = Math.abs(e.clientX - center);
    const scale = Math.max(1, 2 - dist / 120);
    it.style.transform = `scale(${scale})`;
  });
});
dock.addEventListener("mouseleave", () =>
  dockItems.forEach(it => it.style.transform = "scale(1)")
);

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute("data-theme", current === "dark" ? "light" : "dark");
});

// Hero fade‑in animation
window.addEventListener("load", () => {
  const hero = document.querySelector(".hero");
  hero.style.opacity = 0;
  hero.style.transform = "translate(-50%, -50%) scale(0.8)";
  setTimeout(() => {
    hero.style.transition = "all 1s ease";
    hero.style.opacity = 1;
    hero.style.transform = "translate(-50%, -50%) scale(1)";
  }, 200);
});
