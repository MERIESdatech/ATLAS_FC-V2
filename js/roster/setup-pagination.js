import { rosterState } from './roster-state.js';
import { displayPlayers } from './display-players.js';
export function setupPagination() {
    document.getElementById('previous-page').addEventListener('click', function () {
        if (rosterState.page > 1) {
            rosterState.page--;
            displayPlayers();
        }
    });
    document.getElementById('next-page').addEventListener('click', function () {
        rosterState.page++;
        displayPlayers();
    });
}
