/*var sumar = document.getElementById("mas");
var restar = document.getElementById("menos");
var contador = document.getElementById("contador");
var importe = document.getElementById("importe");
var valorBase = 5.20;
var prevValue;

function calcular() {
  var value = contador.value;
  var isValid = /^[1-9][0-9]*$/.test(value);

  if (!isValid) {
    contador.value = prevValue;
  } else {
    prevValue = value;
  }

  importe.value = Number.parseFloat(contador.value * valorBase).toFixed(2);
}

sumar.onclick = function() {
  contador.value = Number(contador.value) + 1;
  calcular();
};

restar.onclick = function() {
  contador.value = Number(contador.value) - 1;
  calcular();
};

contador.onchange = function() {
  calcular();
};

contador.onkeyup = function() {
  if (contador.value === "") {
    return;
  }
  calcular();
};

calcular();*/

// function totalPrice() {
//   const menuPrice = {
//     cheeseSoup: 14.20,
//     greenSalad: 13.00,
//     beefBurger: 18.00,
//     vanillaIcecream: 8.00,
//     orangeJuice: 7.00
//   }
// }
// const cheeseSoup = document.querySelector(".cheeseSoup").value;
// const greenSalad = document.querySelector(".greenSalad").value;
// const beefBurger = document.querySelector(".beefBurger").value;
// const vanillaIcecream = document.querySelector(".vanillaIcecream").value;
// const orangeJuice = document.querySelector(".orangeJuice").value;
// const amountPersons = document.querySelector('#amountPersons');
// const totalOrder = document.querySelector('')

// const totalCheeseSoup = menuPrice.cheeseSoup * cheeseSoup;
// const totalGreenSalad = menuPrice.greenSalad * greenSalad;
// const totalBeefBurger = menuPrice.beefBurger * beefBurger;
// const totalVanillaIcecream = menuPrice.vanillaIcecream * vanillaIcecream;
// const totalOrangeJuice = menuPrice.orangeJuice * orangeJuice;

// const total = totalCheeseSoup + totalGreenSalad + totalBeefBurger + totalPrice + totalOrangeJuice;

// const totalOrder = total * amountPersons;

var inicio = 0;
function increase() {
  var cantidad = document.getElementById('amount').value = ++inicio;
}

function decrease() {
  var cantidad = document.getElementById('amount').value
  if (amount.value > 0) {
    amount.value= --inicio;
  }
}