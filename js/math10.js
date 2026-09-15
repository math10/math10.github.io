// Hero / About section. Edit `data` with your own information.

const data = {
  name: "Md. Musfiqur Rahman Sanim",
  title: "Ph.D. Student in Computer Science",
  university: "University of Georgia",
  tagline: "Optimizing ML model performance for edge devices.",
  bio: "I'm a Ph.D. student in Computer Science at the University of Georgia, advised by Dr. Gagan Agrawal and Dr. Wei Niu, focused on ML model performance optimization for edge devices. Before my Ph.D., I spent nearly 8 years as a software engineer and technical lead at Enosis Solutions, and I recently completed a research internship at Qualcomm. I'm actively seeking Summer 2027 internship opportunities.",
  photo: "assets/photo.jpg",
};

export function renderHero() {
  const root = document.getElementById("hero-root");
  root.innerHTML = `
    <section id="hero" class="hero">
      <div class="hero-photo reveal">
        <img src="${data.photo}" alt="Photo of ${data.name}" />
      </div>
      <div class="hero-text reveal">
        <p class="hero-eyebrow">${data.title} · ${data.university}</p>
        <h1>${data.name}</h1>
        <p class="hero-tagline">${data.tagline}</p>
        <p class="hero-bio">${data.bio}</p>
      </div>
    </section>
  `;
}
