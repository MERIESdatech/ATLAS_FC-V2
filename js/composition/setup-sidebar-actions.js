import { loadPlayers } from '../storage/load-players.js';
import { findPlayer } from '../players/find-player.js';
import { deletePlayer } from '../players/delete-player.js';
import { openPlayerForm } from '../forms/open-player-form.js';
import { showMessage } from '../ui/show-message.js';
import { displayComposition } from './display-composition.js';
import { togglePosition } from './toggle-position.js';
export function setupSidebarActions() {
    document.getElementById('playerList').addEventListener('click', function (event) {
        const button = event.target.closest('[data-action]');
        if (!button) {
            return;
        }
        const item = button.closest('li');
        const player = findPlayer(loadPlayers(), item.dataset.playerId);
        if (!player) {
            return;
        }
        try {
            if (button.dataset.action === 'edit') {
                openPlayerForm(player);
            }
            if (button.dataset.action === 'delete' && confirm('Delete ' + player.name + ' ?')) {
                deletePlayer(player.id);
                displayComposition();
            }
            if (button.dataset.action === 'select') {
                togglePosition(player);
                displayComposition();
            }
        } catch (error) {
            showMessage(error.message);
        }
    });
}
