import { loadPlayers } from '../storage/load-players.js';
import { findPlayer } from '../players/find-player.js';
import { deletePlayer } from '../players/delete-player.js';
import { changeCaptain } from '../players/change-captain.js';
import { openPlayerForm } from '../forms/open-player-form.js';
import { showMessage } from '../ui/show-message.js';
import { displayPlayers } from './display-players.js';
export function setupCardActions() {
    document.getElementById('players-grid').addEventListener('click', function (event) {
        const button = event.target.closest('[data-action]');
        if (!button) {
            return;
        }
        const card = button.closest('[data-player-id]');
        const player = findPlayer(loadPlayers(), card.dataset.playerId);
        if (!player) {
            return;
        }
        try {
            if (button.dataset.action === 'edit') {
                openPlayerForm(player);
            }
            if (button.dataset.action === 'delete' && confirm('Delete ' + player.name + ' ?')) {
                deletePlayer(player.id);
                displayPlayers();
                showMessage('Player deleted.');
            }
            if (button.dataset.action === 'captain') {
                let captainId = player.id;
                if (player.captain) {
                    captainId = null;
                }
                changeCaptain(captainId);
                displayPlayers();
            }
        } catch (error) {
            showMessage(error.message);
        }
    });
}
