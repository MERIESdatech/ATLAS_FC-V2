import { loadPlayers } from '../storage/load-players.js';
import { createSidebarItem } from './create-sidebar-item.js';
import { createPitchPlayer } from './create-pitch-player.js';
export function displayComposition() {
    const players = loadPlayers();
    const playerList = document.getElementById('playerList');
    const slots = document.querySelectorAll('.pitch-slot');
    playerList.replaceChildren();
    const playerCounter = document.getElementById('playerCount');
    if (playerCounter) {
        playerCounter.textContent = players.length;
    }
    let placedCount = 0;
    for (let index = 0; index < players.length; index++) {
        playerList.append(createSidebarItem(players[index], players));
        if (players[index].position) {
            placedCount++;
        }
    }
    const counter = document.getElementById('placedCount');
    if (counter) {
        counter.textContent = 'Placed players: ' + placedCount + ' / 11';
    }
    for (let index = 0; index < slots.length; index++) {
        const slot = slots[index];
        const oldPlayer = slot.querySelector('.pitch-player');
        if (oldPlayer) {
            oldPlayer.remove();
        }
        slot.classList.remove('drop-position');
        let status = 'Free';
        let description = 'Free';
        for (let playerIndex = 0; playerIndex < players.length; playerIndex++) {
            const player = players[playerIndex];
            if (player.position === slot.dataset.position) {
                slot.append(createPitchPlayer(player));
                status = 'Occupied';
                description = 'Occupied by ' + player.name;
            }
        }
        slot.querySelector('.slot-status').textContent = slot.dataset.position.toUpperCase() + ' · ' + status;
        slot.setAttribute('aria-label', slot.dataset.position.toUpperCase() + ' : ' + description);
    }
}
