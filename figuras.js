// Código del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
  return lado * 4
}

console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
  return lado * lado;
}

console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();


// Código del triángulo
console.group("Triángulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triangulo miden: " 
  + ladoTriangulo1 + " cm, " 
  + ladoTriangulo2 + " cm, " 
  + baseTriangulo + " cm, "
  + "La altura del triangulo es: " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + " cm^2");

console.groupEnd();

// Código del circulo
// Código del cuadrado
console.group("Círculos");
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
console.log("El radio del círculo es : " + radioCirculo + " cm");
console.log("El diametro del círculo es : " + diametroCirculo + " cm");

const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: " + perimetroCirculo.toFixed(2) + " cm");

const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log("El área del círculo es: " + areaCirculo.toFixed(2) + " cm^2");
console.groupEnd();

