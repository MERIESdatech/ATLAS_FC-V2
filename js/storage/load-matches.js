import { loadData } from './load.js';
import { startingMatches } from '../data/settings.js';
export function loadMatches() {
    return loadData('tachkila-empty-matches-v1', startingMatches);
}
