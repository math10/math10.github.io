// Work/research experience timeline. Add, remove, or edit entries in
// `roles`, most recent first.

const roles = [
  {
    role: "Summer Research Intern",
    org: "Qualcomm",
    location: "San Diego, CA",
    dates: "May 2026 – Aug 2026",
    description: "Researched throughput (tokens/sec) vs. efficiency (tokens/joule) trade-offs for running LLMs on mobile SoCs.",
  },
  {
    role: "Graduate Research Assistant",
    org: "University of Georgia",
    location: "Athens, GA",
    dates: "Aug 2023 – Present",
    description: "Advised by Dr. Gagan Agrawal and Dr. Wei Niu. Conduct research on machine learning systems and GPU optimization, designing experiments and implementing performance improvements for deep learning workloads.",
  },
  {
    role: "Technical Lead",
    org: "Enosis Solutions",
    location: "Dhaka, Bangladesh",
    dates: "Feb 2020 – Jul 2023",
    description: "Directed R&D for mobile and backend systems, deploying large-scale applications on AWS using Docker; designed ML-powered features for production applications, bridging applied research and engineering.",
  },
  {
    role: "Senior Software Engineer",
    org: "Enosis Solutions",
    location: "Dhaka, Bangladesh",
    dates: "Feb 2017 – Jan 2020",
    description: "Led migration of an IoT app to Ionic2 + Angular, cutting development time 50%; boosted backend throughput 25% via optimized authentication and caching.",
  },
  {
    role: "Software Engineer",
    org: "Enosis Solutions",
    location: "Dhaka, Bangladesh",
    dates: "Nov 2015 – Jan 2017",
    description: "Led development of a native iOS app (Objective-C) and a cross-platform collaboration app for Android, iOS, and Windows UWP.",
  },
];

export function renderExperience() {
  const root = document.getElementById("experience-root");
  root.innerHTML = `
    <section id="experience" class="experience reveal">
      <h2>Experience</h2>
      <ul class="experience-list">
        ${roles.map(renderRole).join("")}
      </ul>
    </section>
  `;
}

function renderRole(item) {
  return `
    <li class="experience-item">
      <div class="experience-header">
        <div>
          <h3>${item.role}</h3>
          <p class="experience-org">${item.org} · ${item.location}</p>
        </div>
        <span class="experience-dates">${item.dates}</span>
      </div>
      <p class="experience-description">${item.description}</p>
    </li>
  `;
}
