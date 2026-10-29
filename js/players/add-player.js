import { loadPlayers } from '../storage/load-players.js';
import { savePlayers } from '../storage/save-players.js';
import { validatePlayer } from './validate-player.js';
import { createPlayer } from './create-player.js';
import { selectCaptain } from './select-captain.js';

import { createId } from '../helpers/create-id.js';
export function addPlayer(values) {
    const players = loadPlayers();
    const error = validatePlayer(values, players, null);
    if (error !== '') {
        throw new Error(error);
    }
    const player = createPlayer(values, createId());
    players.push(player);
    if (player.captain) {
        selectCaptain(players, player.id);
    }
    savePlayers(players);
}
