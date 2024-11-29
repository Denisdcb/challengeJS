// Fonction calcul du pourboire

function calcTip(noteValue) {
    if(noteValue >= 50 && noteValue <= 300) {
        return noteValue * 0.15;
    } else {
        return noteValue * 0.20;
    }
}

//Fonction de calcul de la moyenne
const calcAverage = array => (array.reduce((total, number) => total + number)) / array.length;

const notes = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(i=0; i<notes.length; i++) {
    tips[i] = calcTip(notes[i]);
    totals[i] = tips[i] + notes[i];
}

console.log(notes)
console.log(tips)
console.log(totals)

// Affichage de la moyenne des totaux

console.log(`Moyenne des totaux : ${calcAverage(totals)}€`);