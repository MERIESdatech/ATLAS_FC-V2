import { playerFormState } from './player-form-state.js';
import { closeModal } from '../ui/close-modal.js';
export function closePlayerForm() {
    closeModal(document.getElementById('playerModal'));
    if (playerFormState.previousFocus) {
        playerFormState.previousFocus.focus();
    }
}
