


export const load = () => {
    const modoOscuro = localStorage.getItem('modoOscuro')

    if(!modoOscuro){
        store(false);
    }else if(modoOscuro == true){
        body.classList.add('modoOscuro');
    }
};

export const store = (value) =>{
    localStorage.setItem('modoOscuro', value)
}; 











