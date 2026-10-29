export function selectCaptain(players, id) {
    for (let index = 0; index < players.length; index++) {
        players[index].captain = players[index].id === id;
    }
}
