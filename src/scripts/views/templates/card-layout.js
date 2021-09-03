/* eslint-disable indent */
import CONFIG from '../../global/config';

// eslint-disable-next-line camelcase
const card_layout = (resto) => `
    <div tabindex="0" class="card">
      <a title="home restoran" href="#/resto/${resto.id}" class="card-a-tag">
      <div class="img-container">
      <img tabindex="0" class="card-image lazyload" crossorigin="anonymous" 
      src="./images/loading-300.jpg"
        alt="${resto.name}" 
        data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"
      />
      <span tabindex="0" class="card-rating">
        <i title="ratings" class="fa fa-star"></i>
        <span>${resto.rating}</span>
      </span>
    </div>
    <div tabindex="0" title="menampilkan informas restoran" class="card-content">
      <h2 tabindex="0" class="card-content-title">${resto.name}</h2>
      <h3 tabindex="0" class="card-content-city">${resto.city}</h3>
      <p tabindex="0" class="truncate">${resto.description}</p>
    </div>
  </a>
</div>
`;

// eslint-disable-next-line camelcase
export default card_layout;
