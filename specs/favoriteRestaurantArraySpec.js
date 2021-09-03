/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
import { itActsAsFavoriteRestoModel } from './contract/favRestoContract';

let favoriteRestos = [];
const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }
    return favoriteRestos.find((restaurant) => restaurant.id === id);
  },
  getAllResto() {
    return favoriteRestos;
  },
  putResto(resto) {
    // eslint-disable-next-line no-prototype-builtins
    if (!resto.hasOwnProperty('id')) {
      return;
    }
    if (this.getResto(resto.id)) {
      return;
    }
    favoriteRestos.push(resto);
  },
  deleteResto(id) {
    favoriteRestos = favoriteRestos.filter((resto) => resto.id !== id);
  },
};
describe('Favorite resto array contract test', () => {
  afterEach(() => (favoriteRestos = []));

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
