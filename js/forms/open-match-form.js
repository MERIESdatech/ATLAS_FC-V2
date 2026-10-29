import { matchFormState } from './match-form-state.js';
import { openModal } from '../ui/open-modal.js';
export function openMatchForm(match) {
    matchFormState.previousFocus = document.activeElement;
    matchFormState.id = null;
    document.getElementById('matchForm').reset();
    document.getElementById('matchError').textContent = '';
    document.getElementById('matchTitle').textContent = 'Add match';
    if (match) {
        matchFormState.id = match.id;
        document.getElementById('matchTitle').textContent = 'Edit match / score';
        document.getElementById('opponent').value = match.opponent;
        document.getElementById('matchDate').value = match.date;
        document.getElementById('homeScore').value = match.homeScore;
        document.getElementById('awayScore').value = match.awayScore;
    }
    openModal(document.getElementById('matchModal'));
}
