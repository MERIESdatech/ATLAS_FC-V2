import { playerFormState } from './player-form-state.js';
import { loadPlayers } from '../storage/load-players.js';
import { findPlayer } from '../players/find-player.js';
export function readPlayerForm() {
    const roleSelect = document.getElementById('playerRole');
    const roleRadio = document.querySelector('[name="poste"]:checked');
    let role = '';
    if (roleSelect) {
        role = roleSelect.value;
    } else if (roleRadio) {
        role = roleRadio.value;
    }
    const statusSelect = document.getElementById('playerStatus');
    const injuredCheckbox = document.getElementById('playerInjured');
    let injured = false;
    if (statusSelect) {
        injured = statusSelect.value === 'injured';
    } else if (injuredCheckbox) {
        injured = injuredCheckbox.checked;
    }
    const ageInput = document.getElementById('playerAge');
    let age = null;
    if (ageInput && ageInput.value !== '') {
        age = Number(ageInput.value);
    }
    if (!ageInput && playerFormState.id) {
        const currentPlayer = findPlayer(loadPlayers(), playerFormState.id);
        if (currentPlayer) {
            age = currentPlayer.age;
        }
    }
    return {
        name: document.getElementById('playerName').value.trim(),
        number: document.getElementById('playerNumber').value,
        role: role,
        injured: injured,
        captain: document.getElementById('playerCaptain').checked,
        age: age
    };
}
