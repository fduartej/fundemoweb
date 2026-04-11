function QuieroAgregar() {
  alert("¡Gracias por querer agregarte ayudanos con los siguientes datos!");
  var nombre = prompt("Nombre completo:");
  var correo = prompt("Correo electrónico:");
  var mensaje =
    "¡Gracias por querer agregarte, " +
    nombre +
    "! Nos pondremos en contacto contigo a través de " +
    correo +
    ".";
  alert(mensaje);
  document.querySelector(".clienteAgregado").textContent =
    nombre + " " + correo;
  document.querySelector(".clienteAgregado").style.fontSize = "18px";
  document.querySelector(".clienteAgregado").style.color = "blue";
  document.querySelector(".clienteAgregado").style.fontWeight = "bold";
  alert("¡Gracias por querer agregarte !");
  document.querySelector(".clienteAgregado").innerHTML +=
    "<table border='1'><thead><tr><th>Nombre</th><th>Correo</th></tr></thead><tbody><tr><td>" +
    nombre +
    "</td><td>" +
    correo +
    "</td></tr></tbody></table>";
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".buttonAgregarmeAdicional");
  button.addEventListener("click", () => {
    alert("¡Gracias por querer agregarte adicionalmente!");
    const nombreAdicional = prompt("Nombre completo adicional:");
    const correoAdicional = prompt("Correo electrónico adicional:");
    const mensajeAdicional = `¡Gracias por querer agregarte adicionalmente, ${nombreAdicional}! Nos pondremos en contacto contigo a través de ${correoAdicional}.`;
    alert(mensajeAdicional);
    document.querySelector(".clienteAgregadoAdicional").textContent =
      `${nombreAdicional} ${correoAdicional}`;
  });
});
