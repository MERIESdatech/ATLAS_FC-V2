export function validatePlayer(player, players, id) {
    const namePattern = /^[\p{L}][\p{L} '\-]{2,29}$/u;
    const numberPattern = /^[1-9][0-9]?$/;
    if (!namePattern.test(player.name)) {
        return 'Name: 3 to 30 letters, spaces, apostrophes or hyphens.';
    }
    if (player.role !== 'GB' && player.role !== 'DEF' && player.role !== 'MIL' && player.role !== 'ATT') {
        return 'Choose a role.';
    }
    if (!numberPattern.test(String(player.number))) {
        return 'Number from 1 to 99.';
    }
    if (player.age !== null && (!Number.isInteger(player.age) || player.age < 15 || player.age > 60)) {
        return 'Age from 15 to 60.';
    }
    let goalkeeperCount = 0;
    for (let index = 0; index < players.length; index++) {
        const currentPlayer = players[index];
        if (currentPlayer.id === id) {
            continue;
        }
        if (Number(currentPlayer.number) === Number(player.number)) {
            return 'This number is already used.';
        }
        if (currentPlayer.role === 'GB') {
            goalkeeperCount++;
        }
    }
    if (player.role === 'GB' && goalkeeperCount >= 2) {
        return 'Two goalkeepers maximum.';
    }
    return '';
}
