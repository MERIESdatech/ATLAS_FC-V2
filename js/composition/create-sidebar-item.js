import { positions, images, colors } from '../data/settings.js';
import { createActionButton } from './create-action-button.js';
import { isPositionTaken } from './is-position-taken.js';
export function createSidebarItem(player, players) {
  let li = document.createElement('li');
  li.className = 'sidebar-player grid grid-cols-[31px_minmax(0,1fr)_auto] items-center gap-2 min-h-[75px] px-1 py-2 border-b border-[#20343b] odd:bg-[#10232b85]';
  li.dataset.role = player.role;
  li.dataset.playerId = player.id;
  if (player.position) li.classList.add('player-placed');
  li.draggable = !player.injured;
  li.title = 'Glisser vers une position of le terrain';
  li.style.borderLeft = '3px solid ' + colors[player.role];
  let shirt = document.createElement('img');
  shirt.src = images[player.role];
  shirt.alt = 'Shirt of ' + player.name;
  shirt.className = 'sidebar-shirt w-[31px] h-[35px] object-contain';
  let info = document.createElement('span');
  info.className = 'sidebar-player-info grid gap-0.5 min-w-0';
  let name = document.createElement('strong');
  name.className = 'sidebar-player-name text-xs font-extrabold text-white break-words';
  name.textContent = player.name;
  let status = 'Bench';
  if (player.position) status = 'Pitch';
  if (player.injured) status = 'Injured';
  if (player.captain) status += ' · Captain';
  let meta = document.createElement('small');
  meta.className = 'sidebar-player-meta text-[10px]';
  meta.style.color = colors[player.role];
  meta.textContent = '#' + player.number + ' · ' + player.role + ' · ' + status;

  if (player.captain) {
    const badge = document.createElement('span');
    badge.className = 'captain-badge sidebar-captain-badge';
    badge.textContent = 'C';
    badge.setAttribute('aria-label', 'Captain');
    name.append(' ', badge);
    li.classList.add('is-captain');
  }
  info.append(name, meta);

  
  let selectLabel = 'Select';
  if (player.position) {
    selectLabel = 'Return to bench';
  }
  let selectButton = createActionButton('check', 'select-action', selectLabel, player);
  let editButton = createActionButton('pen', 'edit-action', 'Edit', player);
  let removeButton = createActionButton('trash', 'remove-action', 'Delete', player);

  selectButton.dataset.action = 'select';
  editButton.dataset.action = 'edit';
  removeButton.dataset.action = 'delete';
  let positionSelect = document.createElement('select');
  positionSelect.className = 'position-select rounded bg-[#102731] text-white text-[10px] border border-[#35505a] max-w-[90px]';
  positionSelect.setAttribute('aria-label', 'Position of ' + player.name);
  positionSelect.dataset.playerId = player.id;
  const benchOption = document.createElement('option');
  benchOption.value = '';
  benchOption.textContent = 'Bench';
  positionSelect.append(benchOption);
  const playerPositions = positions[player.role];
  for (let index = 0; index < playerPositions.length; index++) {
    const position = playerPositions[index];
    const option = document.createElement('option');
    option.value = position;
    option.textContent = position.toUpperCase();
    option.disabled = isPositionTaken(players, position, player.id);
    positionSelect.append(option);
  }
  positionSelect.value = player.position || '';
  positionSelect.disabled = player.injured;
  info.append(positionSelect);
  let actions = document.createElement('span');
  actions.className = 'sidebar-actions flex items-center gap-1';
  actions.append(selectButton, editButton, removeButton);

  li.append(shirt, info, actions);
  return li;
}
