// Skills section. Edit the `categories` list below — each entry is a
// group label plus the skills under it.

const categories = [
  { label: "ML/Systems", items: ["CUDA", "OpenCL", "Vulkan", "PyTorch", "TensorFlow", "Scikit-learn", "MNN", "TNN"] },
  { label: "Languages", items: ["C++", "Python", "Java", "JavaScript/TypeScript", "Swift", "Kotlin"] },
  { label: "Distributed Systems", items: ["Node.js", "Express", "Spring", "Django"] },
  { label: "Databases/Cloud", items: ["MySQL", "PostgreSQL", "AWS", "Docker"] },
];

export function renderSkills() {
  const root = document.getElementById("skills-root");
  root.innerHTML = `
    <section id="skills" class="skills reveal">
      <h2>Skills</h2>
      <div class="skills-grid">
        ${categories.map(renderCategory).join("")}
      </div>
    </section>
  `;
}

function renderCategory(category) {
  return `
    <div class="skills-category">
      <h3>${category.label}</h3>
      <div class="skills-tags">
        ${category.items.map((item) => `<span class="skill-tag">${item}</span>`).join("")}
      </div>
    </div>
  `;
}
