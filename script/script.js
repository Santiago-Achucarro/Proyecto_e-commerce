// UTILIZACION DEL DOM PARA GENERAR EL JS LUEGO DE QUE EL MISMO CARGUE POR COMPLETO
document.addEventListener("DOMContentLoaded", () => {

  // LOS PRODUCTOS A UTILIZAR EN FUNCION DE OBJETOS
  const producto1 = { tortas: "Cake 1" };
  const producto2 = { tortas: "Cake 2" };
  const producto3 = { tortas: "Cake 3" };
  const producto4 = { tortas: "Cake 4" };
  const producto5 = { tortas: "Cake 5" };
  const producto6 = { tortas: "Cake 6" };
  const producto7 = { tortas: "Cake 7" };
  const producto8 = { tortas: "Cake 8" };
  const producto9 = { tortas: "Cake 9" };

  // VARIABLES DESIGNADAS GLOBALMENTE PARA LA UTILIZACION DE VALORES Y CANTIDADES (ESPECIFICADAS EN 0 PARA PODER AUMENTAR SU VALOR)
  let bton1 = document.getElementById("btn1");
  let bton2 = document.getElementById("btn2");
  let bton3 = document.getElementById("btn3");
  let bton4 = document.getElementById("btn4");
  let bton5 = document.getElementById("btn5");
  let bton6 = document.getElementById("btn6");
  let bton7 = document.getElementById("btn7");
  let bton8 = document.getElementById("btn8");
  let bton9 = document.getElementById("btn9");
  
  // VARIABLE PARA LA SUMA DE ITEMS EN EL CART
  let cart = document.getElementById("carrito")

  // VARIABLE DEL INPUT SEARCH 
  let buscador = document.getElementById("search");
  
  // VARIABLES DESIGNADAS PARA EL USO DE LOS BOTONES DE RESTAR 
  let rest1 = document.getElementById("btn1-1");
  let rest2 = document.getElementById("btn2-2");
  let rest3 = document.getElementById("btn3-3");
  let rest4 = document.getElementById("btn4-4");
  let rest5 = document.getElementById("btn5-5");
  let rest6 = document.getElementById("btn6-6");
  let rest7 = document.getElementById("btn7-7");
  let rest8 = document.getElementById("btn8-8");
  let rest9 = document.getElementById("btn9-9");


  // UNIDADES DE LOS PRODUCTOS IGUALADOS A 0 PARA QUE CUANDO GENEREN EL EVENTO DEL BOTON CORRESPONDIENTE AUMENTE EN 1
  let unidades = 0;
  let unidades2 = 0;
  let unidades3 = 0;
  let unidades4 = 0;
  let unidades5 = 0;
  let unidades6 = 0;
  let unidades7 = 0;
  let unidades8 = 0;
  let unidades9 = 0;
  
  // PRECIO DE LOS PRODUCTOS IGUALADOS A 0 PARA PODER IR AUMENTANDO EN CORRELACION A SU VALOR * UNIDAD

  let precio = 0;
  let precio2 = 0;
  let precio3 = 0;
  let precio4 = 0;
  let precio5 = 0;
  let precio6 = 0;
  let precio7 = 0;
  let precio8 = 0;
  let precio9 = 0;
 

  // VALORES CORRESPONDIENTES DE LOS PRODUCTOS INDIVUALMENTE 
  let valor = 200;
  let valor2 = 250;
  let valor3 = 300;
  let valor4 = 400
  let valor5 = 350
  let valor6 = 150
  let valor7 = 500
  let valor8 = 700
  let valor9 = 1000
 

  // UTILIZACION DEL JSON + INTERACCION CON EL LOCAL STORAGE
  const json1 = JSON.stringify(producto1);
  const json2 = JSON.stringify(producto2);
  const json3 = JSON.stringify(producto3);
  const json4 = JSON.stringify(producto4);
  const json5 = JSON.stringify(producto5);
  const json6 = JSON.stringify(producto6);
  const json7 = JSON.stringify(producto7);
  const json8 = JSON.stringify(producto8);
  const json9 = JSON.stringify(producto9);


  localStorage.setItem("producto1", json1);
  localStorage.setItem("producto2", json2);
  localStorage.setItem("producto3", json3);
  localStorage.setItem("producto4", json4);
  localStorage.setItem("producto5", json5);
  localStorage.setItem("producto6", json6);
  localStorage.setItem("producto7", json7);
  localStorage.setItem("producto8", json8);
  localStorage.setItem("producto9", json9);
 


 
  
  // FUNCIONES DE SUMA DE CANTIDADES DEPENDIENTES DE CADA PRODUCTO CON SU RESPECTIVA VARIABLE Y VALOR DESIGNADO ANTERIORMENTE
  function SumCantidades(x) {
    if (x && unidades <= 9) {
      unidades++;
      precio = valor * unidades;
    } else {
      const biz1 = JSON.parse(localStorage.getItem("producto1"));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Alcanzaste la cantidad validad de stock de ${biz1.tortas} `,
      });
    }
  }
  function SumCantidades2(x) {
    if (x && unidades2 <= 5) {
      unidades2++;
      precio2 = valor2 * unidades2;
    } else {
      const biz2 = JSON.parse(localStorage.getItem("producto2"));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Alcanzaste la cantidad validad de stock de ${biz2.tortas} `,
      });
        
     
    }
  }
  function SumCantidades3(x) {
    if (x && unidades3 <= 3) {
      unidades3++;
      precio3 = valor3 * unidades3;
    } else {
      const biz3 = JSON.parse(localStorage.getItem("producto3"));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Alcanzaste la cantidad validad de stock de ${biz3.tortas} `,
      });
        
     
    }
  }
  function SumCantidades4(x) {
    if (x && unidades4 <= 1) {
      unidades4++;
      precio4 = valor4 * unidades4;
    } else {
      const biz4 = JSON.parse(localStorage.getItem("producto4"));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Alcanzaste la cantidad validad de stock de ${biz4.tortas} `,
      });
       
     
    }
  }
  function SumCantidades5(x) {
    if (x && unidades5 <= 6) {
      unidades5++;
      precio5 = valor5 * unidades5;
    } else {
      const biz5 = JSON.parse(localStorage.getItem("producto5"));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Alcanzaste la cantidad validad de stock de ${biz5.tortas} `,
      });
       
     
    }
  }
  function SumCantidades6(x) {
    if (x && unidades6<= 2) {
      unidades6++;6
      precio6 = valor6 * unidades6;
    } else {
      const biz6 = JSON.parse(localStorage.getItem("producto6"));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Alcanzaste la cantidad validad de stock de ${biz6.tortas} `,
      });
       
     
    }
  }
  function SumCantidades7(x) {
    if (x && unidades7 <= 0) {
      unidades7++;
      precio7 = valor7 * unidades7;
    } else {
      const biz7 = JSON.parse(localStorage.getItem("producto7"));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Alcanzaste la cantidad validad de stock de ${biz7.tortas} `,
      });
        
     
    }
  }
  function SumCantidades8(x) {
    if (x && unidades8 <= 2) {
      unidades8++;
      precio8 = valor8 * unidades8;
    } else {
      const biz8 = JSON.parse(localStorage.getItem("producto8"));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Alcanzaste la cantidad validad de stock de ${biz8.tortas} `,
      });
        
     
    }
  }
  function SumCantidades9(x) {
    if (x && unidades9 <= 9) {
      unidades9++;
      precio9 = valor9 * unidades9;
    } else {
      const biz9 = JSON.parse(localStorage.getItem("producto9"));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Alcanzaste la cantidad validad de stock de ${biz9.tortas} `,
      });
        
     
    }
  }
 // 


// FUNCIONES DE RESTA DEPENDIENTES DE CADA PRODUCTO
  function RestCantidades(e) {
    if (e) {
      unidades--;
      precio = valor * unidades;
    }
  }
  function RestCantidades2(e) {
    if (e) {
      unidades2--;
      precio2 = valor2 * unidades2;
    }
  }
  function RestCantidades3(e) {
    if (e) {
      unidades3--;
      precio3 = valor3 * unidades3;
    }
  }
  function RestCantidades4(e) {
    if (e) {
      unidades4--;
      precio4 = valor4 * unidades4;
    }
  }
  function RestCantidades5(e) {
    if (e) {
      unidades5--;
      precio5 = valor5 * unidades5;
    }
  }
  function RestCantidades6(e) {
    if (e) {
      unidades6--;
      precio6 = valor6 * unidades6;
    }
  }
  function RestCantidades7(e) {
    if (e) {
      unidades7--;
      precio7 = valor7 * unidades7;
    }
  }
  function RestCantidades8(e) {
    if (e) {
      unidades8--;
      precio8 = valor8 * unidades8;
    }
  }
  function RestCantidades9(e) {
    if (e) {
      unidades9--;
      precio9 = valor9 * unidades9;
    }
  }
 

// FUNCIONES DE CADA PRODUCTO PARA LA REALIZACION DE SUMAS 
  function Add1(e) {
    let cantidades = document.getElementById("cantidad");
    let unidad = document.getElementById("unidad");
    let valores = document.getElementById("valor");
    SumCantidades(e);
    const biz1 = JSON.parse(localStorage.getItem("producto1"));

    if (unidades <= 10 && unidades >= 1) {
      cantidades.innerText = `${unidades} Un. `;
      unidad.innerText = ` ${biz1.tortas} `;
      valores.innerText = ` $ ${precio} `;
      rest1.style.display = "block";
      cart.innerText = `${unidades}`
      
    }
  }
  function Add2(e) {
    // LLAMADO DE FUNCION TANTO DE SUMA DE CANTIDAD COMO DE VALOR, MAS LA INTEGRACION DEL PARSEO DE LOS PRODUCTOS EN JSON DEL LOCALSTORAGE
    let cantidades = document.getElementById("cantidad2");
    let unidad = document.getElementById("unidad2");
    let valores = document.getElementById("valor2");
    SumCantidades2(e);
    const biz2 = JSON.parse(localStorage.getItem("producto2"));

    if (unidades2 <= 6 && unidades2 >= 1) {
      cantidades.innerText = `${unidades2} Un. `;
      unidad.innerText = `${biz2.tortas} `;
      valores.innerText = ` $ ${precio2} `;
      rest2.style.display = "block";
      // bton2.disabled= false;
    } else {
      // ALERTA DE EXCEDENTE DE CANTIDAD
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Alcanzaste la cantidad validad de stock de ${biz2.tortas} `,
      });
    }
  }
  function Add3(e) {
    // LLAMADO DE FUNCION TANTO DE SUMA DE CANTIDAD COMO DE VALOR, MAS LA INTEGRACION DEL PARSEO DE LOS PRODUCTOS EN JSON DEL LOCALSTORAGE
    let cantidades3 = document.getElementById("cantidad3");
    let unidad3 = document.getElementById("unidad3");
    let valores3 = document.getElementById("valor3");
    const biz3 = JSON.parse(localStorage.getItem("producto3"));
    SumCantidades3(e);
    if (unidades3 <= 4 && unidades3 >= 1) {
      cantidades3.innerText = `${unidades3} Un.`;
      unidad3.innerText = `${biz3.tortas}`;
      valores3.innerText = `$ ${precio3}`;
      rest3.style.display = "block";
      // bton3.disabled= false;
    } else {
      // ALERTA DE EXCEDENTE DE CANTIDAD
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Alcanzaste la cantidad validad de stock de ${biz3.tortas} `,
      });
    }
  }
  function Add4(e) {
    // LLAMADO DE FUNCION TANTO DE SUMA DE CANTIDAD COMO DE VALOR, MAS LA INTEGRACION DEL PARSEO DE LOS PRODUCTOS EN JSON DEL LOCALSTORAGE
    let cantidades4 = document.getElementById("cantidad4");
    let unidad4 = document.getElementById("unidad4");
    let valores4 = document.getElementById("valor4");
    const biz4 = JSON.parse(localStorage.getItem("producto4"));
    SumCantidades4(e);
    if (unidades4 <= 2 && unidades4 >= 1) {
      cantidades4.innerText = `${unidades4} Un.`;
      unidad4.innerText = `${biz4.tortas}`;
      valores4.innerText = `$ ${precio4}`;
      rest4.style.display = "block";
      // bton4.disabled= false;
    }
  }
  function Add5(e) {
    // LLAMADO DE FUNCION TANTO DE SUMA DE CANTIDAD COMO DE VALOR, MAS LA INTEGRACION DEL PARSEO DE LOS PRODUCTOS EN JSON DEL LOCALSTORAGE
    let cantidades5 = document.getElementById("cantidad5");
    let unidad5 = document.getElementById("unidad5");
    let valores5 = document.getElementById("valor5");
    const biz5 = JSON.parse(localStorage.getItem("producto5"));
    SumCantidades5(e);
    if (unidades5 <= 7 && unidades5 >= 1) {
      cantidades5.innerText = `${unidades5} Un.`;
      unidad5.innerText = `${biz5.tortas}`;
      valores5.innerText = `$ ${precio5}`;
      rest5.style.display = "block";
      // bton5.disabled= false;
    } else {
      // ALERTA DE EXCEDENTE DE CANTIDAD
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Alcanzaste la cantidad validad de stock de ${biz5.tortas} `,
      });
    }
  }
  function Add6(e) {
    // LLAMADO DE FUNCION TANTO DE SUMA DE CANTIDAD COMO DE VALOR, MAS LA INTEGRACION DEL PARSEO DE LOS PRODUCTOS EN JSON DEL LOCALSTORAGE
    let cantidades6 = document.getElementById("cantidad6");
    let unidad6 = document.getElementById("unidad6");
    let valores6 = document.getElementById("valor6");
    const biz6 = JSON.parse(localStorage.getItem("producto6"));
    SumCantidades6(e);
    if (unidades6 <= 3 && unidades6 >= 1) {
      cantidades6.innerText = `${unidades6} Un.`;
      unidad6.innerText = `${biz6.tortas}`;
      valores6.innerText = `$ ${precio6}`;
      rest6.style.display = "block";
      // bton6.disabled= false;
    } else {
      // ALERTA DE EXCEDENTE DE CANTIDAD
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Alcanzaste la cantidad validad de stock de ${biz6.tortas} `,
      });
    }
  }
  function Add7(e) {
    // LLAMADO DE FUNCION TANTO DE SUMA DE CANTIDAD COMO DE VALOR, MAS LA INTEGRACION DEL PARSEO DE LOS PRODUCTOS EN JSON DEL LOCALSTORAGE
    let cantidades7 = document.getElementById("cantidad7");
    let unidad7 = document.getElementById("unidad7");
    let valores7 = document.getElementById("valor7");
    const biz7 = JSON.parse(localStorage.getItem("producto7"));
    SumCantidades7(e);
    if (unidades7 <= 1 && unidades7 >= 1) {
      cantidades7.innerText = `${unidades7} Un.`;
      unidad7.innerText = `${biz7.tortas}`;
      valores7.innerText = `$ ${precio7}`;
      rest7.style.display = "block";
      // bton7.disabled= false;
    } else {
      // ALERTA DE EXCEDENTE DE CANTIDAD
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Alcanzaste la cantidad validad de stock de ${biz7.tortas} `,
      });
    }
  }
  function Add8(e) {
    // LLAMADO DE FUNCION TANTO DE SUMA DE CANTIDAD COMO DE VALOR, MAS LA INTEGRACION DEL PARSEO DE LOS PRODUCTOS EN JSON DEL LOCALSTORAGE
    let cantidades8 = document.getElementById("cantidad8");
    let unidad8 = document.getElementById("unidad8");
    let valores8 = document.getElementById("valor8");
    const biz8 = JSON.parse(localStorage.getItem("producto8"));
    SumCantidades8(e);
    if (unidades8 <= 3 && unidades8>= 1) {
      cantidades8.innerText = `${unidades8} Un.`;
      unidad8.innerText = `${biz8.tortas}`;
      valores8.innerText = `$ ${precio8}`;
      rest8.style.display = "block";
      // bton8.disabled= false;
    } else {
      // ALERTA DE EXCEDENTE DE CANTIDAD
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Alcanzaste la cantidad validad de stock de ${biz8.tortas} `,
      });
    }
  }
  function Add9(e) {
    // LLAMADO DE FUNCION TANTO DE SUMA DE CANTIDAD COMO DE VALOR, MAS LA INTEGRACION DEL PARSEO DE LOS PRODUCTOS EN JSON DEL LOCALSTORAGE
    let cantidades9 = document.getElementById("cantidad9");
    let unidad9 = document.getElementById("unidad9");
    let valores9 = document.getElementById("valor9");
    const biz9 = JSON.parse(localStorage.getItem("producto9"));
    SumCantidades9(e);
    if (unidades9 <= 10 && unidades9 >= 1) {
      cantidades9.innerText = `${unidades9} Un.`;
      unidad9.innerText = `${biz9.tortas}`;
      valores9.innerText = `$ ${precio9}`;
      rest9.style.display = "block";
      // bton9.disabled= false;
    } else {
      // ALERTA DE EXCEDENTE DE CANTIDAD
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Alcanzaste la cantidad validad de stock de ${biz9.tortas} `,
      });
    }
  }

  // EVENTO DE LOS BOTONES CORRESPONDIENTES PARA LA SUMA DE CANTIDADES Y VALORES A LA HORA DE CLICKEARLOS, MAS SUS CORRESPONDIENTES BOTONES DE RESTA

  bton1.addEventListener("click", (e) => {
    Add1(e);
  
  });
  rest1.addEventListener("click", (e) => {
    let cantidades = document.getElementById("cantidad");
    let unidad = document.getElementById("unidad");
    let valores = document.getElementById("valor");
    const biz1 = JSON.parse(localStorage.getItem("producto1"));
    RestCantidades(e);
    if (unidades <= 0) {
    // RESET DE LOS INNER TEXT CREADOS POR EL BOTON CORRESPONDIENTE DE SUMA DE PRODUCTOS AL ALCANZAR LA CANTIDAD DE 0 UNIDADES
      rest1.style.display = "none";
      cart.innerText = " "
      cantidades.innerText = ` `;
      unidad.innerText = `  `;
      valores.innerText = ` `;
    } else if (unidades >= 1) {
      // RESET DE LOS INNER TEXT CON EL NUEVO VALOR DE LAS VARIABLES 
      cantidades.innerText = `${unidades} Un. `;
      unidad.innerText = ` ${biz1.tortas} `;
      valores.innerText = ` $ ${precio} `;
      cart.innerText =  `${unidades}`
    }
  });

  bton2.addEventListener("click", (e) => {
    Add2(e);
  });
  rest2.addEventListener("click", (e) => {
    let cantidades2 = document.getElementById("cantidad2");
    let unidad2 = document.getElementById("unidad2");
    let valores2 = document.getElementById("valor2");
    const biz2 = JSON.parse(localStorage.getItem("producto2"));
    RestCantidades2(e);
    if (unidades2 <= 0) {
      rest2.style.display = "none";
      cantidades2.innerText = ``;
      unidad2.innerText = `  `;
      valores2.innerText = ` `;
    } else if (unidades2 >= 1) {
      cantidades2.innerText = `${unidades2} Un. `;
      unidad2.innerText = ` ${biz2.tortas} `;
      valores2.innerText = ` $ ${precio2} `;
    }
  });

  bton3.addEventListener("click", (e) => {
    Add3(e);
  });
  rest3.addEventListener("click", (e) => {
    let cantidades3 = document.getElementById("cantidad3");
    let unidad3 = document.getElementById("unidad3");
    let valores3 = document.getElementById("valor3");
    const biz3 = JSON.parse(localStorage.getItem("producto3"));
    RestCantidades3(e);
    if (unidades3 <= 0) {
      rest3.style.display = "none";
      cantidades3.innerText = ``;
      unidad3.innerText = `  `;
      valores3.innerText = ` `;
    } else if (unidades3 >= 1) {
      cantidades3.innerText = `${unidades3} Un. `;
      unidad3.innerText = ` ${biz3.tortas} `;
      valores3.innerText = ` $ ${precio3} `;
    }
  });
  
  bton4.addEventListener("click", (e) => {
    Add4(e);
  });
  rest4.addEventListener("click", (e) => {
    let cantidades4 = document.getElementById("cantidad4");
    let unidad4 = document.getElementById("unidad4");
    let valores4 = document.getElementById("valor4");
    const biz4 = JSON.parse(localStorage.getItem("producto4"));
    RestCantidades4(e);
    if (unidades4 <= 0) {
      rest4.style.display = "none";
      cantidades4.innerText = ``;
      unidad4.innerText = `  `;
      valores4.innerText = ` `;
    } else if (unidades4 >= 1) {
      cantidades4.innerText = `${unidades4} Un. `;
      unidad4.innerText = ` ${biz4.tortas} `;
      valores4.innerText = ` $ ${precio4} `;
    }
  });
  
  bton5.addEventListener("click", (e) => {
    Add5(e);
  });
  rest5.addEventListener("click", (e) => {
    let cantidades5 = document.getElementById("cantidad5");
    let unidad5 = document.getElementById("unidad5");
    let valores5 = document.getElementById("valor5");
    const biz5 = JSON.parse(localStorage.getItem("producto5"));
    RestCantidades5(e);
    if (unidades5 <= 0) {
      rest5.style.display = "none";
      cantidades5.innerText = ``;
      unidad5.innerText = `  `;
      valores5.innerText = ` `;
    } else if (unidades5 >= 1) {
      cantidades5.innerText = `${unidades5} Un. `;
      unidad5.innerText = ` ${biz5.tortas} `;
      valores5.innerText = ` $ ${precio5} `;
    }
  });
  
  bton6.addEventListener("click", (e) => {
    Add6(e);
  });
  rest6.addEventListener("click", (e) => {
    let cantidades6 = document.getElementById("cantidad6");
    let unidad6 = document.getElementById("unidad6");
    let valores6 = document.getElementById("valor6");
    const biz6 = JSON.parse(localStorage.getItem("producto6"));
    RestCantidades6(e);
    if (unidades6 <= 0) {
      rest6.style.display = "none";
      cantidades6.innerText = ``;
      unidad6.innerText = `  `;
      valores6.innerText = ` `;
    } else if (unidades6 >= 1) {
      cantidades6.innerText = `${unidades6} Un. `;
      unidad6.innerText = ` ${biz6.tortas} `;
      valores6.innerText = ` $ ${precio6} `;
    }
  });
  
  bton7.addEventListener("click", (e) => {
    Add7(e);
  });
  rest7.addEventListener("click", (e) => {
    let cantidades7 = document.getElementById("cantidad7");
    let unidad7 = document.getElementById("unidad7");
    let valores7 = document.getElementById("valor7");
    const biz7 = JSON.parse(localStorage.getItem("producto7"));
    RestCantidades7(e);
    if (unidades7 <= 0) {
      rest7.style.display = "none";
      cantidades7.innerText = ``;6
      unidad7.innerText = `  `;
      valores7.innerText = ` `;
    } else if (unidades7 >= 1) {
      cantidades7.innerText = `${unidades7} Un. `;
      unidad7.innerText = ` ${biz7.tortas} `;
      valores7.innerText = ` $ ${precio7} `;
    }
  });
  
  bton8.addEventListener("click", (e) => {
    Add8(e);
  });
  rest8.addEventListener("click", (e) => {
    let cantidades8 = document.getElementById("cantidad8");
    let unidad8 = document.getElementById("unidad8");
    let valores8 = document.getElementById("valor8");
    const biz8 = JSON.parse(localStorage.getItem("producto8"));
    RestCantidades8(e);
    if (unidades8 <= 0) {
      rest8.style.display = "none";
      cantidades8.innerText = ``;
      unidad8.innerText = `  `;
      valores8.innerText = ` `;
    } else if (unidades8 >= 1) {
      cantidades8.innerText = `${unidades8} Un. `;
      unidad8.innerText = ` ${biz8.tortas} `;
      valores8.innerText = ` $ ${precio8} `;
    }
  });
  
  bton9.addEventListener("click", (e) => {
    Add9(e);
  });
  rest9.addEventListener("click", (e) => {
    let cantidades9 = document.getElementById("cantidad9");
    let unidad9 = document.getElementById("unidad9");
    let valores9 = document.getElementById("valor9");
    const biz9 = JSON.parse(localStorage.getItem("producto9"));
    RestCantidades9(e);
    if (unidades9 <= 0) {
      rest9.style.display = "none";
      cantidades9.innerText = ``;
      unidad9.innerText = `  `;
      valores9.innerText = ` `;
    } else if (unidades9 >= 1) {
      cantidades9.innerText = `${unidades9} Un. `;
      unidad9.innerText = ` ${biz9.tortas} `;
      valores9.innerText = ` $ ${precio9} `;
    }
  });
  
 
 


  // FILTRO/BUSCADOR DE PRODUCTOS POR STOCK, UNIDAD Y VALOR
  buscador.addEventListener("keyup", (e)=>{
    if (e.target.matches("#search")){

      if (e.key ==="Escape")e.target.value = ""

        document.querySelectorAll(".card").forEach(producto =>{
            producto.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?producto.classList.remove("buscador")
            :producto.classList.add("buscador") 
        })
    }
  })
  

  
 // BOTON DE PROXIMAMENTE 

  anchor.addEventListener("click", (e) =>  {
    OneDay(e);
    
  })

  anchor2.addEventListener("click", (e) =>  {
    OneDay(e);
    
  })
});
