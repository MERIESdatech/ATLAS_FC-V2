import { loadMatches } from '../storage/load-matches.js';
import { saveMatches } from '../storage/save-matches.js';
export function deleteMatch(id) {
    const matches = loadMatches();
    for (let index = 0; index < matches.length; index++) {
        if (matches[index].id === id) {
            matches.splice(index, 1);
            saveMatches(matches);
            return;
        }
    }
}
