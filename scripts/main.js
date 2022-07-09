
import { destinos } from "../modules/destinos.js";
import { destinos2 } from "../modules/destinos2.js";
import { getData } from "../modules/getData.js";
import { load, store } from "../modules/modoOscuro.js";


load();

const url = "http://localhost:3000/destinos";
const template1 = document.getElementById('template1');
const divDestinos = document.querySelector('.section4');
const template2 = document.getElementById('template2');
const divDestinos2 = document.querySelector('.section6');

const faMoon = document.querySelector('#botonOscuro');
const botonColores = document.querySelector('#botonColores');
const body = document.querySelector('body');

// ........................................................................

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const data = await getData(url);  // cambiar url
        destinos(divDestinos, data, template1.content )
    } catch (error) {
        console.log("ERROR")
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const data = await getData(url+"2");  // cambiar url
        destinos2(divDestinos2, data, template2.content )
    } catch (error) {
        console.log("ERROR")
    }
});

document.addEventListener('click', ({target}) =>{
    console.log(target)
    if(target.classList.contains('seleccion')){
        localStorage.setItem('id', target.id)

        window.location.href = '../pages/detalles.html'
    }
});

// ............................................................

// ..............modo oscuro....................................

faMoon.addEventListener('click', e =>{
    body.classList.toggle('modoOscuro');
    store(body.classList.contains('modoOscuro'));
})

// ..............boton colores...................................

botonColores.addEventListener('click', e =>{
    body.classList.toggle('botonColores');
    store(body.classList.contains('botonColores'));
})











