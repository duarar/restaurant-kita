class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav>
        <div class="menu-hp">
          <div>
            <a href="/" class="logo-font">Restaurant Kita</a>
          </div>
          <div class="menu-container">
            <button
              class="menu"
              aria-label="button menu dropdown on mobile" type="button">
              <span class="fa fa-bars"></span>
            </button>
          </div>
        </div>
        <ul class="nav-list">
          <li class="nav-item"><a href="/">Home</a></li>
          <li class="nav-item"><a href="#/favorite">Favorite</a></li>
          <li class="nav-item">
          <a href="https://github.com/blog-triandi/" target="_blank" rel="noopener ">About</a >
      </li>
      <li class="nav-item">
        <button
          tabindex="0"
          aria-label="button for toggle light or dark mode"
          type="button"
          id="dark-mode"
          class="light">
          <i class="fas fa-moon"></i>
        </button>
        </ul>
      </nav>
    `;
  }
}

customElements.define('nav-bar', Navbar);
