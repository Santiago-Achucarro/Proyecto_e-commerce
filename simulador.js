// Inicio
alert("Bienvenido/a a la Pasteleria ");

let opciones = prompt(
  'Seleccione entre : \n -"Bizcochuelo de chocolate" \n -"Bizcochuelo de vainilla" '
).toLowerCase();
let relleno;
let Validar = true;
const tortas = ["bizcochuelo de chocolate", "bizcochuelo de vainilla"];
const sabores = ["nutella", "dulce de leche"];
const carrito = [];
let suma = 0;

//llamado de funcion para el inicio de la operacion
inicio();

function comprar() {
  for (let i = 0; i < carrito.length; i++) {
    suma += carrito[i];
  }
  alert("Su carrito lleva un total de " + suma);
  let retry = prompt("¿Desea seguir comprando? \n SI \n NO").toLowerCase();
  if (retry == "si") {
    opciones = prompt(
      'Seleccione entre : \n -"Bizcochuelo de chocolate" \n -"Bizcochuelo de vainilla" '
    ).toLowerCase();
    inicio();
  } else {
    alert("Muchas gracias por su compra, su total es de " + suma);
  }
}

//Seleccion de opciones + seleccion de sabor
function inicio() {
  while (Validar) {
    if (opciones == tortas[0]) {
      alert(`Usted selecciono el ${tortas[0]}`);
      Sabor(relleno);
      break;
    } else if (opciones == tortas[1]) {
      alert(`Usted selecciono el ${tortas[1]}`);
      Sabor(relleno);
      break;
    } else {
      alert("Ingrese una de las opciones por favor");
      opciones = prompt(
        'Seleccione entre : \n A-"Bizcochuelo de chocolate" \n B-"Bizcochuelo de vainilla" '
      );
    }
  }
}

function Sabor(relleno) {
  //Seleccion de sabor
  relleno = prompt(
    '¿Quiere un relleno de "Dulce de leche", de "Nutella" o sin relleno ?'
  ).toLowerCase();
  if (sabores.includes(relleno)) {
    relleno = "con relleno de " + relleno;
    alert(`Usted eligio ${opciones} ${relleno},`);
    cantidadYLocalidad(relleno); // Llamado de funcion para continuar con el ciclo
  } else if (relleno == "sin relleno") {
    alert(`Usted eligio ${opciones} ${relleno}`);
    cantidadYLocalidad(relleno);
  } else {
    relleno = "sin relleno";
    alert(`Usted eligio ${opciones} ${relleno}`);
    cantidadYLocalidad(relleno);
  }
}
//funcion con localidad, cantidad y carrito
function cantidadYLocalidad(relleno) {
  let CantidadProducto = prompt("Ingrese la cantidad que desee comprar (10 Un. max. por compra) : ");
  //Bucle de cantidad * 10

  for (let i = 10; i <= 100; i += 10) {
    if (CantidadProducto > 10 || isNaN(CantidadProducto)) {
      alert("Seleccione una cantidad permitida");
      CantidadProducto = prompt("Ingrese la cantidad que desee comprar: ");
    } else if (CantidadProducto <= 10) {
      alert(
        "Usted ingreso la cantidad de " +
          CantidadProducto +
          " la cual equivale a " +
          CantidadProducto * i +
          " + IVA "
      );
      carrito.push(CantidadProducto * i); //push de cantidades al carrito
      break;
    }
  }
  // Bucle con validador para evitar generar un string vacio o null
  while (Validar) {
    // Si ejecuto el prompt por fuera del ciclo, el scope no lo registra y no genera un bucle, por eso

    let Localidad = prompt("Ingrese su localidad: ");

    if (CantidadProducto == 1 && isNaN(Localidad) && Localidad.length > 2) {
      alert(
        `${CantidadProducto} unidad de ${opciones} ${relleno} sera enviado a ${Localidad} \n ¡Gracias por elegirnos!`
      );
      comprar();
      break;
    } else if (isNaN(Localidad) && Localidad.length > 2) {
      alert(
        `${CantidadProducto} unidades de  ${opciones} ${relleno} seran enviadas a ${Localidad} \n ¡Gracias por elegirnos!`
      );
      comprar();
      break;
    } else {
      alert("¡Localidad Invalidad!");
      continue;
    }
  }
}
