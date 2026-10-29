import { images, colors, cardColors } from '../data/settings.js';
export function createPlayerCard(player) {
    const card = document.createElement('article');
    card.className = `relative isolate min-h-[258px] overflow-hidden rounded-[18px] border-2 bg-gradient-to-br ${cardColors[player.role]} to-[#061321] p-5 shadow-xl transition-transform hover:-translate-y-1`;
    card.classList.add('effectif-player-card');
    card.classList.toggle('is-captain', player.captain);
    if (player.captain) {
        const badge = document.createElement('span');
        badge.className = 'captain-badge card-captain-badge';
        badge.textContent = 'C';
        badge.title = 'Captain';
        badge.setAttribute('aria-label', 'Captain');
        card.append(badge);
    }
    card.style.setProperty('--player-accent', colors[player.role]);
    const number = document.createElement('strong');
    number.className = 'card-number text-4xl font-black';
    number.textContent = player.number;
    const role = document.createElement('div');
    role.className = 'card-role mt-3 w-fit rounded-md bg-white/15 px-3 py-1 text-xs font-black';
    role.textContent = player.role;
    const image = document.createElement('img');
    image.src = images[player.role];
    image.alt = '';
    image.className = 'card-shirt absolute right-3 top-9 h-28 w-28 object-contain opacity-75 pointer-events-none';
    const details = document.createElement('div');
    details.className = 'card-details absolute inset-x-5 bottom-5';
    const name = document.createElement('h3');
    name.className = 'text-lg font-extrabold';
    name.textContent = player.name;
    const info = document.createElement('p');
    info.className = 'mt-1 text-sm text-slate-200';
    info.textContent = 'Age: not provided';
    if (player.age) {
        info.textContent = 'Age: ' + player.age + ' years';
    }
    const footer = document.createElement('div');
    footer.className = 'mt-4 flex items-center justify-between gap-2';
    const status = document.createElement('span');
    status.className = 'rounded-full px-3 py-1.5 text-xs font-bold bg-emerald-800 text-emerald-100';
    status.textContent = 'Fit';
    if (player.injured) {
        status.className = 'rounded-full px-3 py-1.5 text-xs font-bold bg-rose-900 text-rose-100';
        status.textContent = 'Injured';
    }
    const actions = document.createElement('div');
    actions.className = 'flex gap-2';
    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.className = 'rounded-lg border border-white/30 bg-black/25 px-3 py-2 hover:bg-white/20';
    editButton.innerHTML = '<i class="fa-solid fa-pen" aria-hidden="true"></i>';
    editButton.setAttribute('aria-label', 'Edit ' + player.name);
    editButton.dataset.action = 'edit';
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = editButton.className;
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can" aria-hidden="true"></i>';
    deleteButton.setAttribute('aria-label', 'Delete ' + player.name);
    deleteButton.dataset.action = 'delete';
    const captainButton = document.createElement('button');
    captainButton.type = 'button';
    captainButton.className = 'captain-button';
    captainButton.textContent = 'C';
    captainButton.title = 'Make captain';
    if (player.captain) {
        captainButton.title = 'Remove captain';
    }
    captainButton.setAttribute('aria-label', captainButton.title + ' : ' + player.name);
    captainButton.setAttribute('aria-pressed', String(player.captain));
    captainButton.dataset.action = 'captain';
    actions.append(captainButton, editButton, deleteButton);
    footer.append(status, actions);
    details.append(name, info, footer);
    card.append(number, role, image, details);
    card.dataset.playerId = player.id;
    return card;
}
