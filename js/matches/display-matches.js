import { loadMatches } from '../storage/load-matches.js';
import { filterMatches } from './filter-matches.js';
import { createMatchCard } from './create-match-card.js';
import { createElement } from '../ui/create-element.js';
export function displayMatches() {
    const list = document.getElementById('matchList');
    const search = document.getElementById('searchMatch').value;
    const state = document.getElementById('matchState').value;
    const matches = filterMatches(loadMatches(), search, state);
    list.replaceChildren();
    if (matches.length === 0) {
        list.append(createElement('li', 'No matches found.'));
    }
    for (let index = 0; index < matches.length; index++) {
        list.append(createMatchCard(matches[index]));
    }
}
