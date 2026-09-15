// Top navigation bar: edit `links` or the brand name below.

const links = [
  { href: "#hero", label: "About" },
  { href: "#news", label: "News" },
  { href: "#skills", label: "Skills" },
  { href: "#publications", label: "Publications" },
  { href: "#experience", label: "Experience" },
  { href: "#cv", label: "CV" },
  { href: "#contact", label: "Contact" },
];

const brandName = "Md. Musfiqur Rahman Sanim";

export function renderNav() {
  const root = document.getElementById("nav-root");
  root.innerHTML = `
    <nav class="site-nav">
      <a href="#hero" class="nav-brand">${brandName}</a>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="nav-links">
        ${links.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}
        <li><button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">🌙</button></li>
      </ul>
    </nav>
  `;

  attachNavBehavior();
}

function attachNavBehavior() {
  const toggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}
