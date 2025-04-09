export class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
          <a href="/">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      `;
    }
}
