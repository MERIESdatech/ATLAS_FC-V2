import { loadPlayers } from '../storage/load-players.js';
import { savePlayers } from '../storage/save-players.js';
export function deletePlayer(id) {
    const players = loadPlayers();
    for (let index = 0; index < players.length; index++) {
        if (players[index].id === id) {
            players.splice(index, 1);
            savePlayers(players);
            return;
        }
    }
}
