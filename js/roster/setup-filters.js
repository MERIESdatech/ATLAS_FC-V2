import { rosterState } from './roster-state.js';
import { displayPlayers } from './display-players.js';
export function setupFilters() {
    const filters = document.getElementById('position-filters');
    filters.addEventListener('click', function (event) {
        const button = event.target.closest('[data-filter]');
        if (!button) {
            return;
        }
        rosterState.role = button.dataset.filter;
        rosterState.page = 1;
        const buttons = filters.querySelectorAll('[data-filter]');
        for (let index = 0; index < buttons.length; index++) {
            const active = buttons[index] === button;
            buttons[index].classList.toggle('active', active);
            buttons[index].classList.toggle('bg-emerald-700', active);
            buttons[index].classList.toggle('border-emerald-400', active);
            buttons[index].classList.toggle('bg-[#0c2034]', !active);
        }
        displayPlayers();
    });
}
