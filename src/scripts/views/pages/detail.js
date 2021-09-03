/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser';
import Spinner from '../templates/spinner';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import favRestoIdb from '../../data/resto-idb';
import RestaurantSource from '../../data/resto-source';
import DETAIL_LAYOUT from '../templates/detail-layout';
import { initSwalError } from '../../utils/swal-initiator';

const Detail = {
  async render() {
    return `
      <div class="container">
        <div id="loading"></div>
        <div id="main-container">
          <h2 class="title-container">Detail Restaurant</h2>
          <section id="detail-resto"></section>
          <div class="like" id="likeButtonContainer"></div>
        </div>
      </div>
    `;
  },

  // Fungsi ini akan dipanggil setelah render()
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const loading = document.querySelector('#loading');
    const mainContainer = document.querySelector('#main-container');
    const detailContainer = document.querySelector('#detail-resto');

    // change main display to spinner
    mainContainer.style.display = 'none';
    loading.innerHTML = Spinner();

    try {
      const data = await RestaurantSource.getRestaurantDetail(url.id);

      // use the detail data
      console.info(data);
      // eslint-disable-next-line no-undef
      detailContainer.innerHTML += DETAIL_LAYOUT(data.restaurant);

      // init like button
      LikeButtonPresenter.init({
        data,
        favRestoIdb,
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
      });

      // change spinner display to main
      mainContainer.style.display = 'block';
      loading.style.display = 'none';
    } catch (err) {
      console.error(err);

      mainContainer.style.display = 'block';
      loading.style.display = 'none';
      detailContainer.innerHTML = `Error: ${err.message}`;
      initSwalError(err.message);
    }
  },
};

export default Detail;
