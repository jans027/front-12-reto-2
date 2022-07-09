import { getData } from "../modules/getData.js";


const url = "http://localhost:3000/destinos";
const id = localStorage.getItem('id');
const imagenDestino = document.getElementById('imagenDestino');
const nombreDestino = document.getElementById('nombreDestino');
const descripcionDestino = document.getElementById('descripcionDestino');
const precioDestino = document.getElementById('precioDestino');




document.addEventListener('DOMContentLoaded', async()=>{
    try {
        const data = await getData(url);

        const detalleDestino = data.find(item => item.id === parseInt(id));
        const { description, name, image, price } = detalleDestino;
        console.log(detalleDestino)

        imagenDestino.setAttribute('src',image)
        nombreDestino.textContent =  name;
        descripcionDestino.textContent =  description; 
        precioDestino.textContent =  price;

    } catch (error) {
        console.log("ERROR")
    }
});













