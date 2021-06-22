"use strict";
var texto = document.getElementById("form"),
txtNombre = texto["Nombre"],
txtBoleta= texto["Boleta"],
txtGrupo= texto["Grupo"],
txtMateria= texto["Materia"],
txtFecha= texto["Fecha"],
salidaNombre = document.getElementById("salida_nombre"),
salidaBoleta = document.getElementById("salida_boleta"),
salidaGrupo = document.getElementById("salida_grupo"),
salidaMateria = document.getElementById("salida_materia"),
salidaFecha = document.getElementById("salida_fecha");
function procesa() {
console.log("Funcion procesa")
salidaNombre.textContent = txtNombre.value;
salidaGrupo.textContent =txtGrupo.value;
salidaMateria.textContent =txtMateria.value;
salidaFecha.textContent = txtFecha.value;
salidaBoleta.textContent = txtBoleta.value;
}
function registro() {
    var email = document.getElementById("emailNuevoUsuario").value
    var password= document.getElementById("contraseniaNuevoUsuario").value
      if (email == "" || email == null || password == "" || password == null) {
        alert("Llena los campos por favor")
      } else {
        console.log("Entro a funcion registrarse")
        console.log("El correo que se va a registrar es:" + email)
        console.log("El password que se va a registrar es:" + password)
        firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
          console.log(user)
          alert("Tu cuenta se creo correctamente")
          window.location.href = "index.html"
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage)
          // ..
        });
      }
    }
