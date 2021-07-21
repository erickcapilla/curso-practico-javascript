const salariosCol = comlombia.map (
  function(persona) {
    return persona.salary;
  }
);

const salariosColSorted = salariosCol.sort(
  function(salaryA, salaryB) {
    return salaryA - salaryB;
  }
);

function esPar(numero) {
  return (numero % 2 === 0)
}

function mediana(lista) {
  const mitad = parseInt(lista.length / 2)

  if(esPar(lista.length)) {
    const personaMitad = lista[mitad - 1]
    const personaMitad2 = lista[mitad]

    const promedio = calcularMedia([elemento1, elemento2])
    return mediana;
  } else {
    const personaMitad = lista[mitad]
    return personaMitad;
  }
}

function calcularMedia(lista) {
  const sumaLista = lista.reduce(
    function(valorAcumulado = 0, elemento) {
      return valorAcumulado + elemento;
    }
  )

  const promedioLista1 = sumaLista1 / lista.length;

  return promedioLista1;
}

const medianaGeneralCol = mediana(salariosColSorted);

console.log(
  mediana(salariosColSorted)
);

// Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salarios10Col = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = mediana(salarios10Col);

console.log(
  medianaGeneralCol,
  medianaTop10Col
);