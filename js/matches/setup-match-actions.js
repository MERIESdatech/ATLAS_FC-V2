import { loadMatches } from '../storage/load-matches.js';
import { deleteMatch } from './delete-match.js';
import { displayMatches } from './display-matches.js';
import { openMatchForm } from '../forms/open-match-form.js';
import { showMessage } from '../ui/show-message.js';
export function setupMatchActions() {
    document.getElementById('matchList').addEventListener('click', function (event) {
        const button = event.target.closest('[data-action]');
        if (!button) {
            return;
        }
        const id = button.closest('[data-match-id]').dataset.matchId;
        const matches = loadMatches();
        for (let index = 0; index < matches.length; index++) {
            if (matches[index].id !== id) {
                continue;
            }
            try {
                if (button.dataset.action === 'edit') {
                    openMatchForm(matches[index]);
                }
                if (button.dataset.action === 'delete' && confirm('Delete this match?')) {
                    deleteMatch(id);
                    displayMatches();
                    showMessage('Match deleted.');
                }
            } catch (error) {
                showMessage(error.message);
            }
            return;
        }
    });
}
