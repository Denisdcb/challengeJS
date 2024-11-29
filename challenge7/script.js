function calcTip(noteValue) {
    if(noteValue >= 50 && noteValue <= 300) {
        return noteValue * 0.15;
    } else {
        return noteValue * 0.20;
    }
}

const bills = [125, 555, 44];
const tips = [];
const totals = [];

for(i=0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = tips[i] + bills[i];
}


console.log(bills);
console.log(tips);
console.log(totals);