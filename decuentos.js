function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function priceDiscount() {
  const inputPrice = document.getElementById('InputPrice');
  const inputDiscount = document.getElementById('InputDiscount');
  const resultPrice = document.getElementById('ResultPrice');

  const priceValue = inputPrice.value;
  const discountvalue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(priceValue, discountvalue)

  resultPrice.innerText = `El precio con descuento son $${precioConDescuento}`
}


// console.log({
//   precioOriginal, 
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento
// });