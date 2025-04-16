// No bloated frameworks, just vanilla JS and HTML5

import { NavBar } from './navbar.js';
import { Reviews } from './reviews.js';
import { Projects } from './projects.js';
import { Faq } from './faq.js';
import { Cv } from './cv.js';

customElements.define('nav-bar', NavBar);
customElements.define('reviews-section', Reviews);
customElements.define('projects-section', Projects);
customElements.define('faq-section', Faq);
customElements.define('cv-section', Cv);