var firebaseConfig = {
   apiKey: "AIzaSyCRqX4GmBVGbGe2w9CU2GCZT1LgDSmIKR4",
    authDomain: "fbwebauth10.firebaseapp.com",
    projectId: "fbwebauth10",
    storageBucket: "fbwebauth10.appspot.com",
    messagingSenderId: "685889139313",
    appId: "1:685889139313:web:96df646e3c3f797d78e1d0",
    measurementId: "G-0HQBLHD2QS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

 let arregloUsuarios = [];
  db.collection("usuarios").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

      var obj = doc.data()
        obj.id = doc.id;
        arregloUsuarios.push(obj);
    });
});
  function registrarse() {
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
