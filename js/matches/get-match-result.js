export function getMatchResult(match) {
    if (match.homeScore === '' || match.awayScore === '') {
        return { label: 'Not played', color: '' };
    }
    if (Number(match.homeScore) > Number(match.awayScore)) {
        return { label: 'Win', color: 'win' };
    }
    if (Number(match.homeScore) < Number(match.awayScore)) {
        return { label: 'Loss', color: 'loss' };
    }
    return { label: 'Draw', color: 'draw' };
}
