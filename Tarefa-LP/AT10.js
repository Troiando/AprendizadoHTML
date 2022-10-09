let vet=[0.11,0.02,0.33,0.004,1.2]
let e = vet.reduce((e,sum)=>{
    return e+=sum;

},)

console.log(e)