import { images } from '../data/settings.js';
export function createPitchPlayer(player) {
  let article = document.createElement('article');
  article.className = 'pitch-player ' + player.position + ' color-' + player.role.toLowerCase();
  article.title = player.name;
  article.setAttribute('aria-label', player.name + ', number ' + player.number);

  let figure = document.createElement('figure');
  figure.className = 'shirt';

  let image = document.createElement('img');
  image.src = images[player.role];
  image.alt = 'Shirt of ' + player.name;

  let number = document.createElement('span');
  number.textContent = player.number;

  figure.append(image, number);

  let role = document.createElement('small');
  role.className = 'pitch-role';
  role.textContent = player.position.replace(/[0-9]/g, '').toUpperCase();

  let playerLabel = document.createElement('strong');
  playerLabel.className = 'pitch-name';
  playerLabel.textContent = player.name;
  article.append(playerLabel, figure, role);
  if (player.captain) {
    const badge = document.createElement('span');
    badge.className = 'captain-badge pitch-captain-badge';
    badge.textContent = 'C';
    badge.setAttribute('aria-label', 'Captain');
    article.append(badge);
  }
  return article;
}
