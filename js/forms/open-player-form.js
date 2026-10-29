import { playerFormState } from './player-form-state.js';
import { openModal } from '../ui/open-modal.js';
export function openPlayerForm(player) {
    const form = document.getElementById('playerForm');
    playerFormState.previousFocus = document.activeElement;
    playerFormState.id = null;
    form.reset();
    document.getElementById('formError').textContent = '';
    document.getElementById('modalTitle').textContent = 'Add player';
    form.querySelector('[type="submit"]').textContent = 'Add';
    if (player) {
        playerFormState.id = player.id;
        document.getElementById('modalTitle').textContent = 'Edit player';
        form.querySelector('[type="submit"]').textContent = 'Save';
        document.getElementById('playerName').value = player.name;
        document.getElementById('playerNumber').value = player.number;
        const roleSelect = document.getElementById('playerRole');
        if (roleSelect) {
            roleSelect.value = player.role;
        } else {
            form.querySelector('[name="poste"][value="' + player.role + '"]').checked = true;
        }
        const injuredCheckbox = document.getElementById('playerInjured');
        if (injuredCheckbox) {
            injuredCheckbox.checked = player.injured;
        }
        const statusSelect = document.getElementById('playerStatus');
        if (statusSelect) {
            statusSelect.value = 'fit';
            if (player.injured) {
                statusSelect.value = 'injured';
            }
        }
        const ageInput = document.getElementById('playerAge');
        if (ageInput) {
            ageInput.value = player.age || '';
        }
        document.getElementById('playerCaptain').checked = player.captain;
    }
    openModal(document.getElementById('playerModal'));
    document.getElementById('playerName').focus();
}
