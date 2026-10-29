export function filterPlayers(players, search, role) {
    const result = [];
    const searchText = search.trim().toLowerCase();
    for (let index = 0; index < players.length; index++) {
        const player = players[index];
        const matchingName = player.name.toLowerCase().includes(searchText);
        const matchingRole = role === 'Tous' || role === player.role;
        if (matchingName && matchingRole) {
            result.push(player);
        }
    }
    return result;
}
