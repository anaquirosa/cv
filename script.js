// script.js
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");

const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");

info1.classList.add("visible");

boton1.addEventListener("click", () => {
    info1.classList.add("visible");
    info2.classList.remove("visible");
    info3.classList.remove("visible");
});

boton2.addEventListener("click", () => {
    info1.classList.remove("visible");
    info2.classList.add("visible");
    info3.classList.remove("visible");
});

boton3.addEventListener("click", () => {
    info1.classList.remove("visible");
    info2.classList.remove("visible");
    info3.classList.add("visible");
});
