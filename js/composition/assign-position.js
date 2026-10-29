import { loadPlayers } from '../storage/load-players.js';
import { savePlayers } from '../storage/save-players.js';
import { findPlayer } from '../players/find-player.js';
import { positions } from '../data/settings.js';
import { isPositionTaken } from './is-position-taken.js';
export function assignPosition(id, position) {
    const players = loadPlayers();
    const player = findPlayer(players, id);
    if (player === null) {
        throw new Error('Player not found.');
    }
    if (position && player.injured) {
        throw new Error('An injured player cannot play.');
    }
    if (position && (!positions[player.role].includes(position) || isPositionTaken(players, position, id))) {
        throw new Error('Position incompatible or occupied.');
    }
    player.position = position || null;
    savePlayers(players);
}
