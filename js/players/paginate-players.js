export function paginatePlayers(players, page, pageSize) {
    const start = (page - 1) * pageSize;
    return players.slice(start, start + pageSize);
}
