function calcularMedia(lista) {
  const sumaLista = lista.reduce(
    function(valorAcumulado = 0, elemento) {
      return valorAcumulado + elemento;
    }
  )

  const promedioLista1 = sumaLista1 / lista.length;

  return promedioLista1;
}

function esPar(numero) {
  if(numero % 2 === 0) return true
  else return false
}

const lista = [100, 200, 500, 10566565];

function mediana(lista) {
  const listaOrdenada = lista.sort((a, b) => a - b)
  const mitadLista = parseInt(listaOrdenada.length / 2);

  let mediana;
  
  if(esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadLista], elemento2 = listaOrdenada[mitadLista - 1];
    const promedio = calcularMedia([elemento1, elemento2])
  
    mediana = promedio / 2;
  } else {
    mediana = listaOrdenada[mitadLista]
  }
}

