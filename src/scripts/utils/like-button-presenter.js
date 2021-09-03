import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/like-button';
import { initSwalError, initSwalSuccess } from './swal-initiator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, data, favRestoIdb }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = data.restaurant;
    this._favRestoIdb = favRestoIdb;

    await this._renderButton();
  },
  async _renderButton() {
    try {
      const { id } = this._restaurant;
      const restaurant = await this._favRestoIdb.getResto(id);

      if (restaurant) {
        this._renderLikedButtonTemplate();
      } else {
        this._renderLikeButtonTemplate();
      }
    } catch (err) {
      console.error(err);
      initSwalError(err.message);

      throw new Error(err);
    }
  },
  _renderLikeButtonTemplate() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favRestoIdb.putResto(this._restaurant);
      initSwalSuccess('Resto favorited!');
      this._renderButton();
    });
  },

  _renderLikedButtonTemplate() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favRestoIdb.deleteResto(this._restaurant.id);
      initSwalSuccess('Resto unfavorited!');
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
