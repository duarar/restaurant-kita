class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div tabindex="0" class="hero__text">
        <h1 class="hero__title">Welcome to Restaurant Kita</h1>
        <p class="hero__subtitle">
        Our restaurant not only serves delicious food but also serves refreshing drinks
        </p>
        <a href="#main-content" class="submit-btn">Read More</a>
      </div>
    `;
  }
}

customElements.define('hero-content', HeroContent);
