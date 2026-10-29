export function readMatchForm() {
    return {
        opponent: document.getElementById('opponent').value.trim(),
        date: document.getElementById('matchDate').value,
        homeScore: document.getElementById('homeScore').value,
        awayScore: document.getElementById('awayScore').value
    };
}
