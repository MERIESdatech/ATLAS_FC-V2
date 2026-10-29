import { rosterState } from './roster-state.js';
import { displayPlayers } from './display-players.js';
export function setupSearch() {
    document.getElementById('player-search').addEventListener('input', function () {
        rosterState.page = 1;
        displayPlayers();
    });
}
