// Exercice 1

let bernardPoid = 78 ;
let bernardTaille = 1.69 ;
let marcelPoid = 92 ;
let marcelTaille = 1.95 ;

let imcBernard = (bernardPoid / (bernardTaille ** 2));
let imcMarcel = (marcelPoid / (marcelTaille ** 2));

let bernardHigherIMC = ((imcBernard > imcMarcel) ? true : false) ;
console.log(bernardHigherIMC);

bernardPoid = 95 ;
bernardTaille = 1.88 ;
marcelPoid = 85 ;
marcelTaille = 1.76 ;

imcBernard = (bernardPoid / (bernardTaille ** 2));
imcMarcel = (marcelPoid / (marcelTaille ** 2));

bernardHigherIMC = ((imcBernard > imcMarcel) ? true : false) ;

console.log(bernardHigherIMC);

// Exercice 2

if(bernardHigherIMC) {
    console.log('Bernard a un IMC :  ' + imcBernard +  ' plus élevé que Marcel, qui a un IMC de : ' + imcMarcel)
} else {
    console.log('Marcel a un IMC : ' + imcMarcel + ' plus élevé que Bernard qui a un IMC de : ' + imcBernard)
}


// Exercice 3

if(imcBernard < 27) {
    console.log('Bernard : poid normal')
}
if(imcMarcel > 27) {
    console.log('Marcel : surpoid ')
}
