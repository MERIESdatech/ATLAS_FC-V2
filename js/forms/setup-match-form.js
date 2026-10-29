import { matchFormState } from './match-form-state.js';
import { readMatchForm } from './read-match-form.js';
import { openMatchForm } from './open-match-form.js';
import { closeMatchForm } from './close-match-form.js';
import { setupModal } from '../ui/setup-modal.js';
import { showMessage } from '../ui/show-message.js';
import { validateMatch } from '../matches/validate-match.js';
import { addMatch } from '../matches/add-match.js';
import { editMatch } from '../matches/edit-match.js';
export function setupMatchForm(refreshPage) {
    const form = document.getElementById('matchForm');
    const errorText = document.getElementById('matchError');
    setupModal(document.getElementById('matchModal'), closeMatchForm);
    document.getElementById('addMatch').addEventListener('click', function () {
        openMatchForm(null);
    });
    document.getElementById('cancelMatch').addEventListener('click', closeMatchForm);
    form.addEventListener('input', function () {
        errorText.textContent = validateMatch(readMatchForm());
    });
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        try {
            if (matchFormState.id === null) {
                addMatch(readMatchForm());
            } else {
                editMatch(matchFormState.id, readMatchForm());
            }
            closeMatchForm();
            refreshPage();
            showMessage('Match saved.');
        } catch (error) {
            errorText.textContent = error.message;
        }
    });
}
