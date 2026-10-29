import { compositionState } from './composition-state.js';
import { loadPlayers } from '../storage/load-players.js';
import { findPlayer } from '../players/find-player.js';
import { assignPosition } from './assign-position.js';
import { isPositionTaken } from './is-position-taken.js';
import { highlightPositions } from './highlight-positions.js';
import { displayComposition } from './display-composition.js';
import { showMessage } from '../ui/show-message.js';
export function setupDragDrop() {
    const playerList = document.getElementById('playerList');
    const pitch = document.querySelector('.terrain-grid');
    playerList.addEventListener('dragstart', function (event) {
        const item = event.target.closest('li[data-player-id]');
        if (!item) {
            return;
        }
        const player = findPlayer(loadPlayers(), item.dataset.playerId);
        if (!player || player.injured) {
            event.preventDefault();
            return;
        }
        compositionState.draggedPlayerId = player.id;
        event.dataTransfer.setData('text/plain', player.id);
        event.dataTransfer.effectAllowed = 'move';
        highlightPositions(player);
    });
    playerList.addEventListener('dragend', function () {
        compositionState.draggedPlayerId = null;
        displayComposition();
    });
    pitch.addEventListener('dragover', function (event) {
        const slot = event.target.closest('.pitch-slot');
        const players = loadPlayers();
        const player = findPlayer(players, compositionState.draggedPlayerId);
        if (slot && player && slot.dataset.role === player.role && !isPositionTaken(players, slot.dataset.position, player.id)) {
            event.preventDefault();
        }
    });
    pitch.addEventListener('drop', function (event) {
        const slot = event.target.closest('.pitch-slot');
        if (!slot || !compositionState.draggedPlayerId) {
            return;
        }
        event.preventDefault();
        try {
            assignPosition(compositionState.draggedPlayerId, slot.dataset.position);
            showMessage('Player placed on the pitch.');
        } catch (error) {
            showMessage(error.message);
        }
        compositionState.draggedPlayerId = null;
        displayComposition();
    });
}
