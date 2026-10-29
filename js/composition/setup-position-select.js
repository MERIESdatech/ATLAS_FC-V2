import { assignPosition } from './assign-position.js';
import { displayComposition } from './display-composition.js';
import { showMessage } from '../ui/show-message.js';
export function setupPositionSelect() {
    document.getElementById('playerList').addEventListener('change', function (event) {
        const select = event.target.closest('.position-select');
        if (!select) {
            return;
        }
        try {
            assignPosition(select.dataset.playerId, select.value);
            showMessage('Position saved.');
        } catch (error) {
            showMessage(error.message);
        }
        displayComposition();
    });
}
