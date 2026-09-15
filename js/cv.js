// CV section. To update your CV, replace assets/cv.pdf with the new
// file (same name), or change `cvPath` below if you use a different name.

const data = {
  blurb: "For full details on my education, publications, and experience, download my CV below.",
  cvPath: "assets/cv.pdf",
};

export function renderCV() {
  const root = document.getElementById("cv-root");
  root.innerHTML = `
    <section id="cv" class="cv reveal">
      <h2>Curriculum Vitae</h2>
      <p>${data.blurb}</p>
      <a class="cv-button" href="${data.cvPath}" download>Download CV (PDF)</a>
    </section>
  `;
}
