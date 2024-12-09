// Données 1

const bernard = {
    name: "Bernard",
    poid: 78,
    taille: 1.69,
    calcBMI: function () {
        return this.poid / (this.taille ** 2)
    },
    get imc() {
        return this.calcBMI();
    }
}

const marcel= {
    name: "Marcel",
    poid: 92,
    taille: 1.95,
    calcBMI: function () {
        return this.poid / (this.taille ** 2)
    },
    get imc() {
        return this.calcBMI();
    }
}

if(bernard.imc > marcel.imc) {
    console.log(`L'IMC de ${bernard.name} (${bernard.imc}) est plus élevé que celui de ${marcel.name} (${marcel.imc})`)
} else {
    console.log(`L'IMC de ${marcel.name} (${marcel.imc}) est plus élevé que celui de ${bernard.name} (${bernard.imc})`)
}

// Données 2

bernard.poid = 95;
bernard.taille = 1.88;
marcel.poid = 85;
marcel.taille = 1.76;

if(bernard.imc > marcel.imc) {
    console.log(`L'IMC de ${bernard.name} (${bernard.imc}) est plus élevé que celui de ${marcel.name} (${marcel.imc})`)
} else {
    console.log(`L'IMC de ${marcel.name} (${marcel.imc}) est plus élevé que celui de ${bernard.name} (${bernard.imc})`)
}