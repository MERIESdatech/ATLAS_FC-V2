import { loadPlayers } from '../storage/load-players.js';
import { filterPlayers } from '../players/filter-players.js';
import { paginatePlayers } from '../players/paginate-players.js';
import { createPlayerCard } from './create-player-card.js';
import { rosterState } from './roster-state.js';
export function displayPlayers() {
    const grid = document.getElementById('players-grid');
    const search = document.getElementById('player-search').value;
    const result = filterPlayers(loadPlayers(), search, rosterState.role);
    const pageCount = Math.max(1, Math.ceil(result.length / rosterState.pageSize));
    rosterState.page = Math.min(rosterState.page, pageCount);
    const visiblePlayers = paginatePlayers(result, rosterState.page, rosterState.pageSize);
    grid.replaceChildren();
    for (let index = 0; index < visiblePlayers.length; index++) {
        grid.append(createPlayerCard(visiblePlayers[index]));
    }
    if (visiblePlayers.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.className = 'col-span-full py-16 text-center text-slate-300';
        emptyMessage.textContent = 'No players found.';
        grid.append(emptyMessage);
    }
    document.getElementById('player-counter').textContent = 'Showing ' + visiblePlayers.length + ' of ' + result.length + ' players';
    document.getElementById('page-label').textContent = 'Page ' + rosterState.page + ' / ' + pageCount;
    document.getElementById('previous-page').disabled = rosterState.page === 1;
    document.getElementById('next-page').disabled = rosterState.page === pageCount;
}
