const assert = require('assert');

Feature('Favorite Resto');
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const emptyFavoriteRestoText = 'Empty favorite Resto';

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#fav-resto');
  I.see(emptyFavoriteRestoText, '#fav-resto');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(emptyFavoriteRestoText, '#fav-resto');

  // URL: /
  I.amOnPage('/');
  I.seeElement('.card a');
  const firstRestoCard = locate('.card-content-title').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedCardTitle = await I.grabTextFrom('.card-content-title');
  assert.strictEqual(firstRestoCardTitle, likedCardTitle); // membandingkan
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(emptyFavoriteRestoText, '#fav-resto');
  // URL: /
  I.amOnPage('/');
  I.seeElement('.card a');
  const firstRestoCard = locate('.card-content-title').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedCardTitle = await I.grabTextFrom('.card-content-title');
  assert.strictEqual(firstRestoCardTitle, likedCardTitle);
  I.click(likedCardTitle);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.dontSeeElement('.card');
  I.dontSeeElement('.card-content-title');
});
