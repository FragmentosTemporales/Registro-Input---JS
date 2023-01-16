const form = document.querySelector("#form");
const usuario = document.querySelector('[name="usuario"]');
const nombreCompleto = document.querySelector('[name="nombreCompleto"]');
const contrasena = document.querySelector('[name="contrasena"]')
let datosUsuario = {
    usuario: "",
    nombreCompleto: "",
    contrasena: "",
};
form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    datosUsuario[usuario.name] = usuario.value
    datosUsuario[nombreCompleto.name] = nombreCompleto.value
    datosUsuario[contrasena.name] = contrasena.value
    console.log(datosUsuario)

})