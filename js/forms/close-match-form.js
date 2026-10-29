import { matchFormState } from './match-form-state.js';
import { closeModal } from '../ui/close-modal.js';
export function closeMatchForm() {
    closeModal(document.getElementById('matchModal'));
    if (matchFormState.previousFocus) {
        matchFormState.previousFocus.focus();
    }
}
