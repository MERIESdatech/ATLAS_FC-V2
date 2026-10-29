import { loadMatches } from '../storage/load-matches.js';
import { saveMatches } from '../storage/save-matches.js';
import { validateMatch } from './validate-match.js';
import { createMatch } from './create-match.js';

import { createId } from '../helpers/create-id.js';
export function addMatch(values) {
    const error = validateMatch(values);
    if (error !== '') {
        throw new Error(error);
    }
    const matches = loadMatches();
    matches.push(createMatch(values, createId()));
    saveMatches(matches);
}
