// Inicio
alert("Bienvenido/a a la Pasteleria ");

let opciones = prompt(
  'Seleccione entre : \n -"Bizcochuelo de chocolate" \n -"Bizcochuelo de vainilla" '
);
let relleno;
let Validar = true;
let a = "Bizcochuelo de chocolate";
let b = "Bizcochuelo de Vainilla";

//Seleccion de opciones + seleccion de sabor
while (Validar) {
  if (
    opciones == "Bizcochuelo de chocolate" ||
    opciones == "bizcochuelo de chocolate"
  ) {
    alert(`Usted selecciono el ${a} `);
    Sabor(relleno);
    break;
  } else if (
    opciones == "Bizcochuelo de vainilla" ||
    opciones == "bizcochuelo de vainilla"
  ) {
    alert(`Usted selecciono el ${b}`);
    Sabor(relleno);
    break;
  } else {
    alert("Ingrese una de las opciones por favor");
    opciones = prompt(
      'Seleccione entre : \n A-"Bizcochuelo de chocolate" \n B-"Bizcochuelo de vainilla" '
    );
  }
}

function Sabor(relleno){
//Seleccion de sabor   
    relleno = prompt('¿Quiere un relleno de "Dulce de leche", de "Nutella" o sin relleno ?')
    if (relleno == "Dulce De Leche" || relleno == "Nutella" || relleno == "Dulce de leche" || relleno == "dulce de leche" || relleno == "nutella") {
      relleno= "con relleno de " + relleno
      alert(`Usted eligio ${opciones} ${relleno},`);
      cantidadYLocalidad(relleno); // Llamado de funcion para continuar con el ciclo 
    } else if (relleno == "sin relleno") {
      alert(`Usted eligio ${opciones} ${relleno}`);
      cantidadYLocalidad(relleno);
}else{
  relleno= "sin relleno"
  alert(`Usted eligio ${opciones} ${relleno}`);
      cantidadYLocalidad(relleno);
}
}

function cantidadYLocalidad(relleno) {
  let CantidadProducto = prompt("Ingrese la cantidad que desee comprar: ");
  //Bucle de cantidad * 10

  for (let i = 10; i <= 100; i += 10) {
    if (CantidadProducto <= 10) {
      alert(
        "Usted ingreso la cantidad de " +
          CantidadProducto +
          " la cual equivale a " +
          CantidadProducto * i +
          " + IVA "
      );
      break;
    } else if (CantidadProducto > 10) {
      alert("Seleccione una cantidad permitida");
      CantidadProducto = prompt("Ingrese la cantidad que desee comprar: ");
      continue;
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
      
      break;
    } else if (isNaN(Localidad) && Localidad.length > 2) {
      alert(
        `${CantidadProducto} unidades de  ${opciones} ${relleno} seran enviadas a ${Localidad} \n ¡Gracias por elegirnos!`
      );
      break;
    } else {
      alert("¡Localidad Invalidad!");
      continue;
    }
  }
}

