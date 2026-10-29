export function createMatch(values, id) {
    let homeScore = '';
    let awayScore = '';
    if (values.homeScore !== '') {
        homeScore = Number(values.homeScore);
        awayScore = Number(values.awayScore);
    }
    return {
        id: id,
        opponent: values.opponent,
        date: values.date,
        homeScore: homeScore,
        awayScore: awayScore
    };
}
