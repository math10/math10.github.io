// Recent news / updates. Add or remove entries from `items`,
// most recent first.

const items = [
  { date: "2026", text: "Paper \"Mask-Aware Execution for Efficient JEPA Training\" accepted at PACT 2026." },
  { date: "2026-08", text: "Completed a research internship at Qualcomm (San Diego), researching LLM inference throughput/efficiency trade-offs on mobile SoCs." },
  { date: "2026", text: "Paper \"FlashMem\" accepted at ASPLOS 2026." },
  { date: "2023-08", text: "Started Ph.D. in Computer Science at the University of Georgia." },
];

export function renderNews() {
  const root = document.getElementById("news-root");
  root.innerHTML = `
    <section id="news" class="news reveal">
      <h2>Recent News</h2>
      <ul class="news-list">
        ${items
          .map(
            (item) => `
          <li class="news-item">
            <span class="news-date">${item.date}</span>
            <span class="news-text">${item.text}</span>
          </li>`
          )
          .join("")}
      </ul>
    </section>
  `;
}
