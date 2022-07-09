

export const destinos = (contenedor, data, template) => {
    const template1 = document.querySelector('#template1');


    data.forEach(element => {
        const{id, image, name} = element;
        template1.innerHTML += `
        <a  class="img1" >
                <img class="seleccion" id=${id} src=${image} alt=${name} >
        </a>
        `
    });
    const clone = document.importNode(template, true)
    contenedor.appendChild( clone )
}










