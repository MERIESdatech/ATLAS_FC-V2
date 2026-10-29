import { positions } from '../data/settings.js';
import { loadPlayers } from '../storage/load-players.js';
import { isPositionTaken } from './is-position-taken.js';
import { assignPosition } from './assign-position.js';
export function togglePosition(player) {
    if (player.position) {
        assignPosition(player.id, null);
        return;
    }
    const players = loadPlayers();
    const playerPositions = positions[player.role];
    for (let index = 0; index < playerPositions.length; index++) {
        if (!isPositionTaken(players, playerPositions[index], player.id)) {
            assignPosition(player.id, playerPositions[index]);
            return;
        }
    }
    throw new Error('No available position for this role.');
}
