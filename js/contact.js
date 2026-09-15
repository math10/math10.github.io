// Contact / footer section. Edit `data` with your real email and links.
// Remove any entry from `links` you don't want to show.

const data = {
  email: "sanim314159@gmail.com",
  links: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=UjooP1UAAAAJ&hl=en" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/math10/" },
    { label: "GitHub", url: "https://github.com/math10" },
  ],
};

export function renderContact() {
  const root = document.getElementById("contact-root");
  root.innerHTML = `
    <footer id="contact" class="contact reveal">
      <h2>Get in Touch</h2>
      <a class="contact-email" href="mailto:${data.email}">${data.email}</a>
      <div class="contact-links">
        ${data.links
          .map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`)
          .join("")}
      </div>
      <p class="contact-copyright">© ${new Date().getFullYear()} Md. Musfiqur Rahman Sanim</p>
    </footer>
  `;
}
