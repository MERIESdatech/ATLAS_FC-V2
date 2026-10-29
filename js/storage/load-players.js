import { loadData } from './load.js';
import { startingPlayers } from '../data/settings.js';
export function loadPlayers() {
    return loadData('tachkila-empty-players-v1', startingPlayers);
}
