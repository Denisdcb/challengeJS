// Données de test 1

let facture = 275 ;

let pouboire = (facture >= 50 && facture <= 300) ? ((facture * 15) / 100 ) : ((facture * 20) / 100 );

console.log('Facture 1 : ' + facture + '€');
console.log('Pourboire 1 : ' + pouboire + '€');
let total = facture + pouboire ;
console.log('Total 1 : ' + total + '€')

// Données de test 1

facture = 40 ;

pouboire = (facture >= 50 && facture <= 300) ? ((facture * 15) / 100 ) : ((facture * 20) / 100 );

console.log('Facture 2 : ' + facture + '€');
console.log('Pourboire 2 : ' + pouboire + '€');
total = facture + pouboire ;
console.log('Total 2 : ' + total + '€')

// Données de test 1

facture = 430 ;

pouboire = (facture >= 50 && facture <= 300) ? ((facture * 15) / 100 ) : ((facture * 20) / 100 );

console.log('Facture 3 : ' + facture + '€');
console.log('Pourboire 3 : ' + pouboire + '€');
total = facture + pouboire ;
console.log('Total 3 : ' + total + '€')