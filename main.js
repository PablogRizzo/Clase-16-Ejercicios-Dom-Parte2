// 1.
// Crear un boton que al ser clickeado muestre/oculte un elemento (toggle)
// 2.
// Crear un <ul>.
// Crear un input
// Crear un li con el valor del input 
// (como si fueran notas que vas agregando)
// 3.
// Usando new Date() insertar en el html el año actual junto a un saludo
// 4.
// Crear un contenedor de 400x400 con 2 botones.
// Al ser clickeado el contenedor debe cambiar el background a rojo
// Cada boton debe estar dentro del contenedor y al clickear dar un console.log('boton 1/2 se ejecuto')
// 5.
// Crear un form completamente desde javascript
// para insertar en nuestro html

//--EJ 1--//
let boton = document.createElement('button'); 
boton.id = 'btn';                             
boton.innerHTML = 'Soy un boton';             
document.body.before(boton);                  

const w = document.querySelector('#watson');  //traer el div del html
 
boton.addEventListener("click", e=>{
    w.classList.toggle('ocultar');            //classList: accede a las clases (.add , .remove, .toggle[si tiene clase la saca, sino la agrega])
});


//--EJ 2--//
let lista = document.createElement('ul');
let inp = document.createElement('input');

lista.innerHTML = 'Lista';                    
document.body.appendChild(lista);

lista.appendChild(inp);

inp.addEventListener("blur", e =>{
    let contenido = document.createElement('li');
    contenido.innerHTML = inp.value;
    lista.appendChild(contenido);
});


//--EJ 3--//
let p = document.createElement('p');
let date = new Date();


p.innerHTML = `Hola! estas en el año: ${date.getFullYear()}`;
document.body.appendChild(p);


//--EJ 4--//

let contenedor = document.createElement('div');
let boton1 = document.createElement('button');
let boton2 = document.createElement('button');

contenedor.style.background = 'red';
contenedor.style.width = '400px';
contenedor.style.height = '400px';

boton1.innerHTML = 'Soy un boton';
boton2.innerHTML = 'Soy otro boton';

contenedor.appendChild(boton1);
contenedor.appendChild(boton2);

document.body.appendChild(contenedor);

//--EJ 5--//

let formulario = document.createElement('form');
let inputNombre = document.createElement('input');
let inputEdad = document.createElement('input');
let submit = document.createElement('button');
let h2 = document.createElement('h2');

h2.innerHTML = 'FORMULARIO';
h2.style.margin = '50px 0 0 50px';

document.body.appendChild(h2);

inputNombre.placeholder = 'Ingrese nombre';
inputNombre.type = 'text';

inputEdad.placeholder = 'Ingrese edad';
inputEdad.type = 'number';

submit.innerHTML = 'Enviar'

formulario.classList.add('formulario');

formulario.appendChild(inputNombre);
document.body.appendChild(formulario);

formulario.appendChild(inputEdad);
document.body.appendChild(formulario);

formulario.appendChild(submit);
document.body.appendChild(formulario);



