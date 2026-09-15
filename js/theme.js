// Light/dark theme toggle. Preference is remembered in localStorage.

const STORAGE_KEY = "theme-preference";

// Call this as early as possible (before rendering) to avoid a flash
// of the wrong theme on page load.
export function applyStoredTheme() {
  let stored = null;
  try {
    stored = localStorage.getItem(STORAGE_KEY);
  } catch (err) {
    // localStorage unavailable (private browsing, etc.) — fall back silently.
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
}

// Call this after nav.js has rendered the #theme-toggle button.
export function attachThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  updateButton(btn);
  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (err) {
      // ignore if storage is unavailable
    }
    updateButton(btn);
  });
}

function updateButton(btn) {
  const theme = document.documentElement.getAttribute("data-theme");
  btn.textContent = theme === "dark" ? "☀️" : "🌙";
  btn.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
  );
}
