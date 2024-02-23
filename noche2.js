// A

var documento = document.querySelector("html");
var dia = document.querySelector("#elDia");
var noche = document.querySelector("#laNoche");
var cosita = document.querySelector(".desterrado");
let valorCookie = localStorage.getItem("colorin");

if (valorCookie == "1") {
  localStorage.setItem("colorin", "1");
  documento.setAttribute("data-bs-theme", "dark");
  //console.log(noche.classList);
  noche.classList.add("desterrado");
  dia.classList.remove("desterrado");
  document.documentElement.style.setProperty('--gris-suave', '#4d4d4d');
  document.querySelector("header").style.setProperty("background-color", "darkgrey");
  document.documentElement.style.setProperty('--button-green', '#3a6b06');
  document.documentElement.style.setProperty('--dark-green', '#5bb000');
} else {
  localStorage.setItem("colorin", "0");
  documento.setAttribute("data-bs-theme", "white");
  dia.classList.add("desterrado");
  noche.classList.remove("desterrado");
  document.documentElement.style.setProperty('--gris-suave', '#d3d3d3');
  document.querySelector("header").style.setProperty("background-color", "var(--blanco)");
  document.documentElement.style.setProperty('--button-green', '#5bb000');
  document.documentElement.style.setProperty('--dark-green', '#3a6b06');
  
}

function cambiar(a) {
  let valorCookie = localStorage.getItem("colorin");
  if (valorCookie == "0") {
    localStorage.setItem("colorin", "1");
    documento.setAttribute("data-bs-theme", "dark");
    console.log(noche.classList);
    noche.classList.add("desterrado");
    dia.classList.remove("desterrado");
    document.documentElement.style.setProperty('--gris-suave', '#4d4d4d');
    document.querySelector("header").style.setProperty("background-color", "darkgrey");
    document.documentElement.style.setProperty('--button-green', '#3a6b06');
    document.documentElement.style.setProperty('--dark-green', '#5bb000');
  } else {
    localStorage.setItem("colorin", "0");
    documento.setAttribute("data-bs-theme", "white");
    dia.classList.add("desterrado");
    noche.classList.remove("desterrado");
    document.documentElement.style.setProperty('--gris-suave', '#d3d3d3');
    document.querySelector("header").style.setProperty("background-color", "var(--blanco)");
    document.documentElement.style.setProperty('--button-green', '#5bb000');
    document.documentElement.style.setProperty('--dark-green', '#3a6b06');
  }


}

