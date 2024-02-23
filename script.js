cambiarApi();
var sopa = 0;
function cambiarSlide() {
  // Array de imágenes y textos para cada opción
  const imagenes = ["./img/slider1/main-banner-2-1.webp", "./img/slider1/main-banner-1-1.webp"];
  const textos = ["Sopa de Pollo con extra de sal", "Sopa de Pollo sin extra de sal"];


  const img = document.querySelector('.slider1_container #main-slide');
  const h1 = document.querySelector('.slider1_container h1');
  const botoner = document.querySelector('.slider1_input button');

  img.style.opacity = 0;
  botoner.style.opacity = 0;


  setTimeout(() => {

    img.src = imagenes[sopa];
    h1.textContent = textos[sopa];

    botoner.style.opacity = 1;
    img.style.opacity = 1;
  }, 500);


  sopa == 0 ? sopa = 1 : sopa = 0;
}

function cambiarCapibara(apos) {

  const imagenes = ["./img/people/papipop.jpg", "./img/people/mopa.png", "./img/people/sopas.jpg"];
  const nombre = ["Papipop", "Mopa", "Elsopas"];
  const trabajo = ["Administrador de Sistemas", "Videógrafo", "Desarrollador Web"];


  const img = document.querySelector('.parallax .people');
  const nombre_v = document.querySelector('.parallax #person_name');
  const titulo = document.querySelector('.parallax #person_occupation');

  img.style.opacity = 0.1;


  setTimeout(() => {

    img.src = imagenes[apos];
    nombre_v.textContent = nombre[apos];
    titulo.textContent = trabajo[apos];


    img.style.opacity = 1;
  }, 500);


}