export const destinos2 = (contenedor, data, template) => {
    const template2 = document.querySelector('#template2');

    data.forEach(element => {
        const{id, image, name} = element;
        template2.innerHTML += `
        <div class="imgRecomendada"id=${id} >
                <img src=${image} alt=${name}>
        </div>
        `
    });
    const clone = document.importNode(template, true)
    contenedor.appendChild( clone )
}