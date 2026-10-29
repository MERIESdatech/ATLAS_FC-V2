import { loadMatches } from '../storage/load-matches.js';
import { saveMatches } from '../storage/save-matches.js';
import { validateMatch } from './validate-match.js';
import { createMatch } from './create-match.js';

export function editMatch(id, values) {
    const error = validateMatch(values);
    if (error !== '') {
        throw new Error(error);
    }
    const matches = loadMatches();
    for (let index = 0; index < matches.length; index++) {
        if (matches[index].id === id) {
            matches[index] = createMatch(values, id);
            saveMatches(matches);
            return;
        }
    }
    throw new Error('Match not found.');
}
