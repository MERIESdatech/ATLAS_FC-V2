export function validateMatch(match) {
    if (match.opponent.length < 2 || match.opponent.length > 50) {
        return 'Opponent: 2 to 50 characters.';
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(match.date) || Number.isNaN(Date.parse(match.date))) {
        return 'Choose a valid date.';
    }
    const emptyScores = match.homeScore === '' && match.awayScore === '';
    const scorePattern = /^\d{1,2}$/;
    if (!emptyScores && (!scorePattern.test(String(match.homeScore)) || !scorePattern.test(String(match.awayScore)))) {
        return 'Enter both scores from 0 to 99, or leave both empty.';
    }
    return '';
}
