console.log(document.title);
// 1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
document.querySelector('#gen-1').textContent="Generasión 1 Pokimon"
//2. Cambia el color de fondo de la primera generación de Pokimon.
document.querySelector(".infocard-list").style.backgroundColor= "#9ac3ec";
//3. Imprime por consola la URL de la página.
var URLactual = window.location;
console.log(URLactual);
//4. Imprime por consola el dominio de la página.
var URLdomain = window.location.host;
console.log(URLdomain);
//5. Imprime todos los nodos de imagen.
var allImg=document.querySelectorAll(".img-fixed")
// console.log(allImg);
// 6. Sustituye el atributo "src" de todas las imágenes 
//por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

let newSrc=document.querySelectorAll(".imf-fixed").src="https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
console.log(newSrc)

//7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`
let newC=document.querySelectorAll(".infocard-lg-data small a.flying")
function changeColor(){
    for(i=0;i<newC.length;i++){
        newC[i].style.color="#0f3d6c";

    }
}
changeColor()
console.log(newC)