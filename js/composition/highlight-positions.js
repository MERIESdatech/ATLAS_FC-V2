import { loadPlayers } from '../storage/load-players.js';
import { isPositionTaken } from './is-position-taken.js';
export function highlightPositions(player) {
    const players = loadPlayers();
    const slots = document.querySelectorAll('.pitch-slot');
    for (let index = 0; index < slots.length; index++) {
        const slot = slots[index];
        const available = slot.dataset.role === player.role && !isPositionTaken(players, slot.dataset.position, player.id);
        slot.classList.toggle('drop-position', available);
    }
}
