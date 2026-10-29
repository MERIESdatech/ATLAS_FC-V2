export function isPositionTaken(players, position, playerId) {
    for (let index = 0; index < players.length; index++) {
        if (players[index].position === position && players[index].id !== playerId) {
            return true;
        }
    }
    return false;
}
