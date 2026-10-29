export function getMatchState(match) {
    if (match.homeScore !== '' && match.awayScore !== '') {
        return 'Finished';
    }
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const date = year + '-' + month + '-' + day;
    if (match.date < date) {
        return 'Score needed';
    }
    return 'Upcoming';
}
