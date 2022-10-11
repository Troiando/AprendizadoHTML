//Gerador Numeros aleatorios
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Quantidade
let array = [];
for (let i = 0 ; i < 40 ; i++){
  array.push(getRandom(0,40));
}
//Soma dos valores do vetor
let e = array.reduce((e,sum)=>{
    return e+=sum;

},)
console.log(array);
console.log("Soma "+e);