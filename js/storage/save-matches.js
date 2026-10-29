import { saveData } from './save.js';
export function saveMatches(matches) {
    saveData('tachkila-empty-matches-v1', matches);
}
