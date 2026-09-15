// Orchestrator: applies the saved theme, renders every section in order,
// then wires up the theme toggle and scroll-reveal animation.
//
// To reorder sections on the page, edit index.html (not this file) —
// each render() call below just fills in the container that's already
// positioned in the HTML.

import { applyStoredTheme, attachThemeToggle } from "./theme.js";
import { renderNav } from "./nav.js";
import { renderHero } from "./math10.js";
import { renderSocial } from "./social.js";
import { renderNews } from "./news.js";
import { renderSkills } from "./skills.js";
import { renderPublications } from "./publications.js";
import { renderExperience } from "./experience.js";
import { renderCV } from "./cv.js";
import { renderContact } from "./contact.js";
import { initScrollReveal } from "./utils.js";

applyStoredTheme();

renderNav();
renderHero();
renderSocial();
renderNews();
renderSkills();
renderPublications();
renderExperience();
renderCV();
renderContact();

attachThemeToggle();
initScrollReveal();
