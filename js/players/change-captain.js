import { loadPlayers } from '../storage/load-players.js';
import { savePlayers } from '../storage/save-players.js';
import { selectCaptain } from './select-captain.js';
export function changeCaptain(id) {
    const players = loadPlayers();
    selectCaptain(players, id);
    savePlayers(players);
}
