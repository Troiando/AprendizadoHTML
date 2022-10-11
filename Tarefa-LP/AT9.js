let frase="Olhei para frent"
let e = list(frase)
let lim = e.length
let i = 0

while (i < lim) {
    if (e[i] === " ") {
        delete f[i]
        lim -=1
    }
    i+=1
}
console.log(e)

