
alert(
  "Recuerde que ahora se le pedira la cantidad que desea comprar y esta no puede sobrepasar la cantidad de 10"
);
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
  } else if (CantidadProducto > 10 ) {
    alert("Seleccione una cantidad permitida");
    CantidadProducto = prompt("Ingrese la cantidad que desee comprar: ");
    continue;
}
}
// Variable para validar el bucle while 
let validar = true

// Bucle con validador para evitar generar un string vacio o null 

while (validar) {

  // Si ejecuto el prompt por fuera del ciclo, el scope no lo registra y no genera un bucle, por eso  
  
  let Localidad = prompt("Ingrese su localidad: ")

  if (CantidadProducto == 1 && isNaN(Localidad) && Localidad.length > 2) {
    alert(`${CantidadProducto} cantidad seleccionada sera enviada a ${Localidad}`);
    break;
  } else if (isNaN(Localidad) && Localidad.length > 2) {
    alert(`${CantidadProducto} cantidades seleccionada seran enviadas a ${Localidad}`);
    break;
  } 
  else {
    alert('¡Localidad Invalidad!');
    continue;
}
}
