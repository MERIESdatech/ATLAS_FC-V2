export function findPlayer(players, id) {
    for (let index = 0; index < players.length; index++) {
        if (players[index].id === id) {
            return players[index];
        }
    }
    return null;
}
