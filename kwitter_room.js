function addRoom()
{
  window.location("index.html");
}
var firebaseConfig = {
    apiKey: "AIzaSyDo4L0JCKv27pmtz_0f26UUb6kFUvJiBdw",
    authDomain: "kwitter-4d504.firebaseapp.com",
    databaseURL: "https://kwitter-4d504-default-rtdb.firebaseio.com",
    projectId: "kwitter-4d504",
    storageBucket: "kwitter-4d504.appspot.com",
    messagingSenderId: "465424955725",
    appId: "1:465424955725:web:76d093fb8ee7d565e59f04"
  };
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.setItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 

function addRoom()
{
      var room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding a room"
      });
      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      var row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoom(this.id)'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoom(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}
