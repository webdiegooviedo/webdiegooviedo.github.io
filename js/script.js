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
