import { rosterState } from './roster-state.js';
import { displayPlayers } from './display-players.js';
import { loadPlayers } from '../storage/load-players.js';
export function refreshRoster(isNew) {
    if (isNew === true) {
        document.getElementById('player-search').value = '';
        document.querySelector('[data-filter="Tous"]').click();
        rosterState.page = Math.max(1, Math.ceil(loadPlayers().length / rosterState.pageSize));
    }
    displayPlayers();
}
