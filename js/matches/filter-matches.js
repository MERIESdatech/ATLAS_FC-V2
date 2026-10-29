import { getMatchState } from './get-match-state.js';
export function filterMatches(matches, search, state) {
    const result = [];
    const searchText = search.trim().toLowerCase();
    for (let index = 0; index < matches.length; index++) {
        const match = matches[index];
        const matchingName = match.opponent.toLowerCase().includes(searchText);
        const matchingState = state === '' || getMatchState(match) === state;
        if (matchingName && matchingState) {
            result.push(match);
        }
    }
    result.sort(function (firstMatch, secondMatch) {
        return firstMatch.date.localeCompare(secondMatch.date);
    });
    return result;
}
