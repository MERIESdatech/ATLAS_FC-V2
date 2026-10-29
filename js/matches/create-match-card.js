import { createElement } from '../ui/create-element.js';
import { getMatchState } from './get-match-state.js';
import { getMatchResult } from './get-match-result.js';
export function createMatchCard(match) {
    const card = createElement('li', '', 'player-card');
    card.dataset.matchId = match.id;
    const result = getMatchResult(match);
    card.append(createElement('h3', 'Atlas FC — ' + match.opponent, 'font-bold text-lg'));
    card.append(createElement('p', match.date));
    card.append(createElement('p', getMatchState(match)));
    if (getMatchState(match) === 'Finished') {
        card.append(createElement('p', match.homeScore + ' – ' + match.awayScore + ' · ' + result.label, result.color + ' font-bold text-xl'));
    }
    const actions = createElement('div', '', 'flex flex-wrap gap-3 mt-4');
    const editButton = createElement('button', 'Edit / Score');
    editButton.dataset.action = 'edit';
    const deleteButton = createElement('button', 'Delete');
    deleteButton.dataset.action = 'delete';
    actions.append(editButton, deleteButton);
    card.append(actions);
    return card;
}
