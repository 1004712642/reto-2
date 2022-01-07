
const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorall('.peliculas');

const  flechaizquierda = document.getElementByid('flecha-izquierda');
const  flechaderecha = document.getElementByid('flecha-derecha');


flechaderecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetwidth;
})


flechaizquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetwidth;
})

const numeropaginas = math.ceil(pelicula.length / 5);
for(let i = 0; i < numeropaginas; i++){
    const indicador = document.createElement('button');
    document.querySelector('.indicadores').appendChild(indicador);
}


peliculas.forEach(pelicula => {
    pelicula.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            peliculas.forEach(pelicula => pelicula.classlist.remove('.hover'))
            elemento.classlist.add('hover');    
            
        },300);
    });
    
});

fila.addEventListener('mouseleave', () => {
    peliculas.forEach(pelicula => pelicula.classlist.remove('.hover'))
})









const formulario = document.getElementById("formulario")
const lista = document.getElementById("lista")



formulario .addEventListener("formulario", => {
    lista .preventdefaut();
    let 

})

const agregarusuario = (nom, correo, telefono)=>{
    let  registro = {
        nombre:nom,
        correo:correo,
        telefono:telefono,
        direccion:direccion
    }

    
}