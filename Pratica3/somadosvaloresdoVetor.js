const num = ['Olá',' Mundo']

let e = num.reduce((e,sum)=>{
        return e+=sum;

},)
document.body.innerHTML="<h1>"+e+"</h1>"