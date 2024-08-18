const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const burgerElement = document.querySelector('.burger');

burgerElement.addEventListener('click', () => {
  abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
  const isExpanded = burgerElement.getAttribute('aria-expanded') === 'true'; 
  //burgerElement.setAttribute('aria-expanded', !isExpanded);
});