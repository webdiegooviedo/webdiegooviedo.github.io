var firebaseConfig = {
   apiKey: "AIzaSyDdjHQTT4oGuZ6wT2cEI1bNr2hZD0LLmuo",
    authDomain: "webauth17.firebaseapp.com",
    projectId: "webauth17",
    storageBucket: "webauth17.appspot.com",
    messagingSenderId: "472978946657",
    appId: "1:472978946657:web:557bce776d76de3b5e0820",
    measurementId: "G-DHYY9W4YN3"
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
