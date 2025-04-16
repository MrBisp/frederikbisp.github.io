export class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
          <a href="#introduction">Intro</a>
          <a href="#video-section">Video</a>
          <a href="#reviews">Reviews</a>
          <a href="#projects">Projects</a>
          <a href="#why-hire-me">Why Hire Me</a>
          <a href="#faq">FAQ</a>
          <a href="#cv">CV</a>
        </nav>
      `;
    }
}
