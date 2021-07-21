const lista = [
  1,
  2,
  3,
  5,
  8,
  2,
  1,
  3,
  3,
  2,
  1,
  8,
  3
];

function moda(lista) {
  const listaCount = {};

  lista.map(
    function(elemento) {
      if(listaCount[elemento]) {
        listaCount[elemento] += 1;
      } else {
        listaCount[elemento] = 1;
      }
    }
  )
  
  const listaArray = Object.entries(listaCount).sort(
    function(valorAcumulado, nuevoValor) {
      valorAcumulado[1] - nuevoValor[1]
    }
  )
  
  const moda = listaArray[listaArray.length - 1]
}