function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let vet1 = []
let vet2 = []
let vet3 = []
for (let i = 0 ; i < 9 ; i++){
  vet1.push(getRandom(0,9))
  vet2.push(getRandom(0,9))
  vet3.push(getRandom(0,9))
}

//Pega posição de cada vetor
const cont1 = vet1.slice(0, 3);
const cont2 = vet2.slice(3, 6);
const cont3 = vet3.slice(6, 9);

//Concatenação dos vetores 
let cont = cont1.concat(cont2).concat(cont3)

console.log(vet1,vet2,vet3);
console.log("Concatenação dos vetores  "+ cont);