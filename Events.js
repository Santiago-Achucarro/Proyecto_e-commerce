const tortas = ["bizcochuelo de chocolate", "bizcochuelo de vainilla"];
//const sabores = ["nutella", "dulce de leche"];

let boton = document.getElementById("boton")

boton.addEventListener("click",(e)=> {
    e.preventDefault()
    let producto = (document.getElementById("formulario")[0].value)
    let cantidad = (document.getElementById("formulario")[1].value)

        if(tortas.includes(producto) && cantidad == 1 ){
            
            let lista = document.getElementById("lista")
            lista.innerHTML = `<br><li> Seleccionaste un ${producto} </li>`      

        }else if(tortas.includes(producto) && cantidad <= 10 ){
            let lista = document.getElementById("lista")
            lista.innerHTML = `<br><li> Seleccionaste una cantidad de ${cantidad} para ${producto}  </li>`     
        }else(   
            alert("Ingrese una cantiadad o producto valido")
        )
   

})

