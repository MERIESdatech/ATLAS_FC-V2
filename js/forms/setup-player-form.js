import { playerFormState } from './player-form-state.js';
import { readPlayerForm } from './read-player-form.js';
import { openPlayerForm } from './open-player-form.js';
import { closePlayerForm } from './close-player-form.js';
import { setupModal } from '../ui/setup-modal.js';
import { showMessage } from '../ui/show-message.js';
import { validatePlayer } from '../players/validate-player.js';
import { loadPlayers } from '../storage/load-players.js';
import { addPlayer } from '../players/add-player.js';
import { editPlayer } from '../players/edit-player.js';
export function setupPlayerForm(refreshPage) {
    const form = document.getElementById('playerForm');
    const errorText = document.getElementById('formError');
    const addButton = document.getElementById('openPlayerModal');
    if (addButton) {
        addButton.addEventListener('click', function () {
            openPlayerForm(null);
        });
    }
    document.getElementById('closePlayerModal').addEventListener('click', closePlayerForm);
    document.getElementById('cancelPlayerModal').addEventListener('click', closePlayerForm);
    setupModal(document.getElementById('playerModal'), closePlayerForm);
    form.addEventListener('input', function () {
        errorText.textContent = validatePlayer(readPlayerForm(), loadPlayers(), playerFormState.id);
    });
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        try {
            const isNew = playerFormState.id === null;
            if (isNew) {
                addPlayer(readPlayerForm());
            } else {
                editPlayer(playerFormState.id, readPlayerForm());
            }
            closePlayerForm();
            refreshPage(isNew);
            showMessage('Player saved.');
        } catch (error) {
            errorText.textContent = error.message;
        }
    });
}
