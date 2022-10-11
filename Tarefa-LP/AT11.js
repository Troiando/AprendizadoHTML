let anagrama, i, lista;
lista = ["a", "r", "a", "r", "a"];
i = lista.length - 1;
anagrama = true;

for (let j = 0, vet = lista.length; j < vet; j += 1) {
  if (lista[j] !== lista[i]) {
    anagrama = false;
  }

  i -= 1;
}

if (anagrama) {
  console.log("É um anagrama");
} else {
  console.log("Não um anagrama");
}
