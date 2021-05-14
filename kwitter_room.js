//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyBkMwD9JWVZolMGmhWVgVacU9LXCbs7uKU",
  authDomain: "fishtopia-b902f.firebaseapp.com",
  databaseURL: "https://fishtopia-b902f-default-rtdb.firebaseio.com",
  projectId: "fishtopia-b902f",
  storageBucket: "fishtopia-b902f.appspot.com",
  messagingSenderId: "488055241304",
  appId: "1:488055241304:web:d8ea38804dcd11cb46282d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();