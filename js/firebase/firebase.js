
// Cole as informações do seu RealTime Database do Firebase abaixo:
const firebaseConfig = {
  apiKey: "AIzaSyDhl44OsQSNolGnX_fbjan77VfWULwXZnM",
  authDomain: "crud-firebase-df321.firebaseapp.com",
  projectId: "crud-firebase-df321",
  storageBucket: "crud-firebase-df321.appspot.com",
  messagingSenderId: "87327883104",
  appId: "1:87327883104:web:ff18d2826d0692ecf62805"
};


/*
* Nas regras do Realtime Database, informe:
* {
  "rules": {
    "clientes":{
    ".read": "auth != null",
    ".write": "auth != null"
  },
    "usuarios":{
    ".read": "auth != null",
    ".write": "auth != null"
  }
 }
}
*/

// Inicializando o Firebase
firebase.initializeApp(firebaseConfig);
// Crie uma referência para o Realtime Database do Firebase
const database = firebase.database();
// Crie uma referência para o armazenamento do Firebase
const storageRef = firebase.storage().ref();
