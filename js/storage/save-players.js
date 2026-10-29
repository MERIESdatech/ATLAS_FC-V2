import { saveData } from './save.js';
export function savePlayers(players) {
    saveData('tachkila-empty-players-v1', players);
}
