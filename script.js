const botones = document.querySelectorAll(".boton-curiosidad");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const curiosidad = boton.nextElementSibling;
    curiosidad.hidden = !curiosidad.hidden;
  });
});