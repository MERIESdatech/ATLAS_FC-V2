import { loadPlayers } from '../storage/load-players.js';
import { savePlayers } from '../storage/save-players.js';
import { validatePlayer } from './validate-player.js';
import { createPlayer } from './create-player.js';
import { selectCaptain } from './select-captain.js';

export function editPlayer(id, values) {
    const players = loadPlayers();
    const error = validatePlayer(values, players, id);
    if (error !== '') {
        throw new Error(error);
    }
    for (let index = 0; index < players.length; index++) {
        if (players[index].id === id) {
            const player = createPlayer(values, id);
            if (players[index].role === player.role && !player.injured) {
                player.position = players[index].position;
            }
            players[index] = player;
            if (player.captain) {
                selectCaptain(players, id);
            }
            savePlayers(players);
            return;
        }
    }
    throw new Error('Player not found.');
}
