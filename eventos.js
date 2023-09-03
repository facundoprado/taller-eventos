const buttonElement = document.getElementById("saludarButton");
const divElement = document.querySelector("div");

buttonElement.addEventListener("click", function (event) {
  event.stopPropagation(); // Detener la propagación del evento
  alert("Hola!");
});

divElement.addEventListener("click", function () {
  alert("Hola! Soy el div");
});
