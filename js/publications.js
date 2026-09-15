// Publications list. Add, remove, or edit entries in `publications`.
// Leave a link as "#" (or delete the key) if you don't have one yet.
// `yourName` must match how your name appears in each `authors` string
// exactly, so it can be highlighted in the rendered list.

const yourName = "M.M.R. Sanim";

const publications = [
  {
    title: "Mask-Aware Execution for Efficient JEPA Training",
    authors: "M.M.R. Sanim, Z. Shu, B. Afsharmanesh, A.A. Mirian, W. Niu, G. Agrawal",
    venue: "PACT '26, Chicago, IL, USA",
    year: "2026",
    tags: ["ML Systems", "Training"],
    summary: "Exploits cross-mask redundancy via shared execution, fused mask-aware routing, and sparse computation — up to 1.7× faster end-to-end training.",
    links: { pdf: "#" },
  },
  {
    title: "FlashMem: Supporting Modern DNN Workloads on Mobile with GPU Memory Hierarchy Optimizations",
    authors: "Z. Shu, M.M.R. Sanim, H. Zheng, K. Zhu, M. Yin, G. Agrawal, W. Niu",
    venue: "ASPLOS '26",
    year: "2026",
    tags: ["Mobile Systems", "DNN"],
    links: { pdf: "#" },
  },
  {
    title: "Optimizing 3D Gaussian Splatting for Mobile GPUs",
    authors: "M.M.R. Sanim, Z. Shu, B. Afsharmanesh, A.A. Mirian, J. Guan, W. Niu, B. Ren, G. Agrawal",
    venue: "PACT '25, Irvine, CA, USA",
    year: "2025",
    tags: ["Mobile GPUs", "Graphics"],
    summary: "A novel sorting algorithm and memory-aware data placement for the 2D texture cache — up to 4.1× faster sorting and 1.7× faster overall 3D scene reconstruction with reduced memory usage.",
    links: { pdf: "https://doi.org/10.1109/PACT65351.2025.00040" },
  },
  {
    title: "Poster: HeteroSched: Co-Optimizing Scheduling and Parallelization for Deep Learning Workloads",
    authors: "B. Afsharmanesh, M.M.R. Sanim, A.A. Mirian, G. Agrawal",
    venue: "PACT '25",
    year: "2025",
    tags: ["Scheduling", "DNN"],
    links: { pdf: "#" },
  },
  {
    title: "SmartMem: Layout Transformation Elimination and Adaptation for Efficient DNN Execution on Mobile",
    authors: "W. Niu, M.M.R. Sanim, Z. Shu, J. Guan, X. Shen, M. Yin, G. Agrawal, B. Ren",
    venue: "ASPLOS '24, La Jolla, CA, USA",
    year: "2024",
    tags: ["Mobile Systems", "DNN"],
    summary: "Eliminates costly layout transformations by unifying tensor layouts across operators — up to 7.9× speedup over existing frameworks on mobile devices.",
    links: { pdf: "https://doi.org/10.1145/3620666.3651384" },
  },
  {
    title: "A Simple 2-Approximation Algorithm for Minimum Manhattan Network Problem",
    authors: "M.M.R. Sanim, S. Saira, F.F. Ahsan, R. Bardhan, S.M. Ferdous",
    venue: "arXiv:2403.11811",
    year: "2024",
    tags: ["Algorithms"],
    links: { arxiv: "https://arxiv.org/abs/2403.11811" },
  },
];

export function renderPublications() {
  const root = document.getElementById("publications-root");
  root.innerHTML = `
    <section id="publications" class="publications reveal">
      <h2>Publications</h2>
      <div class="pub-grid">
        ${publications.map(renderCard).join("")}
      </div>
    </section>
  `;
}

function renderCard(pub) {
  const linkLabels = { pdf: "Paper", arxiv: "arXiv", code: "Code" };
  const links = Object.entries(pub.links || {})
    .filter(([, url]) => url && url !== "#")
    .map(([key, url]) => `<a href="${url}" class="pub-link">${linkLabels[key] || key}</a>`)
    .join("");

  const tags = (pub.tags || [])
    .map((tag) => `<span class="pub-tag">${tag}</span>`)
    .join("");

  const authors = pub.authors.replaceAll(
    yourName,
    `<strong class="pub-you">${yourName}</strong>`
  );

  const summary = pub.summary ? `<p class="pub-summary">${pub.summary}</p>` : "";

  return `
    <article class="pub-card">
      <div class="pub-tags">${tags}</div>
      <h3>${pub.title}</h3>
      <p class="pub-authors">${authors}</p>
      <p class="pub-venue">${pub.venue}, ${pub.year}</p>
      ${summary}
      <div class="pub-links">${links}</div>
    </article>
  `;
}
