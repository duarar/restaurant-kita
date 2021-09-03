class footerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer tabindex="0">
    <ul>
      <li>
        Copyright © 2021 - Restaurant Kita
      </li>
      <li>
        Submision 3 with <i title="love" class="fa fa-heart"></i> by
        Triandii
      </li>
    </ul>
  </footer>
    `;
  }
}

customElements.define('footer-bar', footerBar);
