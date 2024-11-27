// Données 1

let dauphinsScores = [96, 108, 89];
let koalasScores = [88, 91, 110];

let winner = '';

moyDauphinsScores = (dauphinsScores[0] + dauphinsScores[1] + dauphinsScores[2]) / 3 ;
moyKoalasScores = (koalasScores[0] + koalasScores[1] + koalasScores[2]) / 3;

if(moyDauphinsScores === moyKoalasScores) {
    winner = 'Equality !!';
} else if(moyDauphinsScores > moyKoalasScores && moyDauphinsScores >= 100) {
    winner = 'Dauphins Team Win !!';
} else if(moyKoalasScores > moyDauphinsScores && moyKoalasScores > 100) {
    winner = 'Koalas Team Win !!';
} else {
    winner = 'No winner..'
}

console.log(winner);

// Données 2

dauphinsScores = [97, 112, 101];
koalasScores = [109, 95, 123];

winner = '';

moyDauphinsScores = (dauphinsScores[0] + dauphinsScores[1] + dauphinsScores[2]) / 3 ;
moyKoalasScores = (koalasScores[0] + koalasScores[1] + koalasScores[2]) / 3;

if(moyDauphinsScores === moyKoalasScores) {
    winner = 'Equality !!';
} else if(moyDauphinsScores > moyKoalasScores && moyDauphinsScores >= 100) {
    winner = 'Dauphins Team Win !!';
} else if(moyKoalasScores > moyDauphinsScores && moyKoalasScores > 100) {
    winner = 'Koalas Team Win !!';
} else {
    winner = 'No winner..'
}

console.log(winner);

// Données 3

dauphinsScores = [97, 112, 101];
koalasScores = [109, 95, 106];

winner = '';

moyDauphinsScores = (dauphinsScores[0] + dauphinsScores[1] + dauphinsScores[2]) / 3 ;
moyKoalasScores = (koalasScores[0] + koalasScores[1] + koalasScores[2]) / 3;


if(moyDauphinsScores === moyKoalasScores) {
    winner = 'Equality !!';
} else if(moyDauphinsScores > moyKoalasScores && moyDauphinsScores >= 100) {
    winner = 'Dauphins Team Win !!';
} else if(moyKoalasScores > moyDauphinsScores && moyKoalasScores > 100) {
    winner = 'Koalas Team Win !!';
} else {
    winner = 'No winner..'
}

console.log(winner);