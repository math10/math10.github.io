// Contact / footer section. Edit `data` with your real email.
// Social/profile links (Scholar, LinkedIn, GitHub) live in js/social.js.

const data = {
  email: "sanim314159@gmail.com",
};

export function renderContact() {
  const root = document.getElementById("contact-root");
  root.innerHTML = `
    <footer id="contact" class="contact reveal">
      <h2>Get in Touch</h2>
      <a class="contact-email" href="mailto:${data.email}">${data.email}</a>
      <p class="contact-copyright">© ${new Date().getFullYear()} Md. Musfiqur Rahman Sanim</p>
    </footer>
  `;
}
