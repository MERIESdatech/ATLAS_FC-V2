import { loadMatches } from '../storage/load-matches.js';
import { editMatch } from './edit-match.js';
export function updateScore(id, homeScore, awayScore) {
    const matches = loadMatches();
    for (let index = 0; index < matches.length; index++) {
        if (matches[index].id === id) {
            const match = matches[index];
            match.homeScore = homeScore;
            match.awayScore = awayScore;
            editMatch(id, match);
            return;
        }
    }
    throw new Error('Match not found.');
}
