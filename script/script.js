document.addEventListener('DOMContentLoaded', ()=>{

const producto1= {tortas:"Cake 1"}
const producto2= {tortas:"Cake 2"}
const producto3= {tortas:"Cake 3"}

let bton1 = document.getElementById("button1")
let bton2 = document.getElementById("button2")
let bton3 = document.getElementById("button3")
let cantidad  = 0
let cantidad2 = 0 
let cantidad3 = 0
let valor = 200 * cantidad
let valor2 = 250 * cantidad2
let valor3 = 300 * cantidad3


const json1 = JSON.stringify(producto1)
const json2 = JSON.stringify(producto2)
const json3 = JSON.stringify(producto3)

localStorage.setItem("producto1",json1)
localStorage.setItem("producto2",json2)
localStorage.setItem("producto3",json3)


function cantidades (x){
        if(x){
            cantidad++ 
            valor = 200 * cantidad
        }
}
function cantidades2 (x){
    if(x){
        cantidad2++ 
         valor2 = 250 * cantidad2
    }
}
function cantidades3 (x){
    if(x){
        cantidad3++ 
        valor3 = 300 * cantidad3
    }
}

bton1.addEventListener("click",(e)=> {
    let carrito = (document.getElementById("carrito"))
    cantidades(e); 
    const biz1 = JSON.parse(localStorage.getItem("producto1"))
    if(cantidad <= 10){
        // carrito.innerText = `${cantidad} ${biz1.tortas} ${valor} total `
            Toastify({
                text: `${cantidad} ${biz1.tortas} ${valor} total `,
                duration: 2000,
                gravity: 'bottom',
                position: 'left',
                style:{
                    background: 'rgb(46,84,65)',
                    background: 'linear-gradient(90deg, rgba(46,84,65,1) 12%, rgba(33,98,66,1) 26%, rgba(14,156,85,1) 78%)',
                }
            }).showToast();
                
    }else{
        //Alerta de excediente de cantidad
        Swal.fire({
            icon: 'error',
            title: 'Oops...',                                      
            text: `Alcanzaste la cantidad validad de ${biz1.tortas} `,
          })

    }
})

bton2.addEventListener("click",(e)=> {
    let carrito = (document.getElementById("carrito2"))
    cantidades2(e);
    const biz2 = JSON.parse(localStorage.getItem("producto2"))
    if(cantidad2 <= 10){
        // carrito.innerText = `${cantidad2} ${biz2.tortas} ${valor2} total  `
        Toastify({
            text: `${cantidad2} ${biz2.tortas} ${valor2} total  `,
            duration: 2000,
            gravity: 'bottom',
            position: 'left',
            style:{
                background:"blue"
            }
        }).showToast();
    }else{
       //Alerta de excediente de cantidad
       Swal.fire({
        icon: 'error',
        title: 'Oops...',                                      
        text: `Alcanzaste la cantidad validad de ${biz2.tortas} `,
      })
    }
})

bton3.addEventListener("click",(e)=> {
    let carrito = (document.getElementById("carrito3"))
    const biz3 = JSON.parse(localStorage.getItem("producto3"))
    cantidades3(e);
    if(cantidad3 <= 10){
        // carrito.innerText = `${cantidad3} ${biz3.tortas} ${valor3} total  `
        Toastify({
            text: `${cantidad3} ${biz3.tortas} ${valor3} total  `,
            duration: 2000,
            gravity: 'bottom',
            position: 'left',
            
        }).showToast();
    }else{
        //Alerta de excediente de cantidad
       Swal.fire({
        icon: 'error',
        title: 'Oops...',                                      
        text: `Alcanzaste la cantidad validad de ${biz3.tortas} `,
      })
    }
})

})