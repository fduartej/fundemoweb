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
