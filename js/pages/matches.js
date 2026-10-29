import { setupMatchForm } from '../forms/setup-match-form.js';
import { setupMatchActions } from '../matches/setup-match-actions.js';
import { displayMatches } from '../matches/display-matches.js';
if (document.getElementById('matchList')) {
    setupMatchForm(displayMatches);
    setupMatchActions();
    document.getElementById('searchMatch').addEventListener('input', displayMatches);
    document.getElementById('matchState').addEventListener('change', displayMatches);
    window.addEventListener('storage', displayMatches);
    displayMatches();
}
