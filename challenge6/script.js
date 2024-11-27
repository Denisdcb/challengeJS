// Fonction de calcul de la moyenne 
const calcAverage = array => (array.reduce((total, number) => total + number)) / array.length;

// Fonctione de calcul du gagnant
function checkWinner(team1Name, averageTeam1, team2Name, averageTeam2) {
    if(averageTeam1 > (averageTeam2 * 2)) {
        return `${team1Name} win with : ${averageTeam1}pts vs ${team2Name} with : ${averageTeam2}pts`;
    } else if(averageTeam2 > (averageTeam1 * 2)) {
        return `${team2Name} win with : ${averageTeam2}pts vs ${team1Name} with ${averageTeam1}pts`;
    }
    return 'No Winner ..';
}

// Données 1

let dauphinsScores = [44, 23, 71];
let koalasScores = [65, 54, 49];

let moyDauphinsScores = calcAverage(dauphinsScores);
let moyKoalasScores = calcAverage(koalasScores);

console.log('First match :');
console.log(checkWinner("Dauphin's Team", moyDauphinsScores, "Koala's Team", moyKoalasScores));

// Données 2

dauphinsScores = [85, 54, 41];
koalasScores = [23, 34, 27];

moyDauphinsScores = calcAverage(dauphinsScores);
moyKoalasScores = calcAverage(koalasScores);

console.log('Second match :');
console.log(checkWinner("Dauphin's Team", moyDauphinsScores, "Koala's Team", moyKoalasScores));