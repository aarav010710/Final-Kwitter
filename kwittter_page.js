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

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        likes: 0
  });
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['likes'];
name_tag = "<h4>"+name+"<img class= 'user_tick' src='tick.png'></h4> ";
message_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: "+like+"</span></button><hr>";
row = name_tag + message_tag + like_button + span_tag ;
document.getElementById("output").innerHTML += row;
//End code
} });  }); }
getData();

function updateLike(message_id)
{
console.log(message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes)+1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
     likes: updated_likes      });
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
function back()
{
    window.location = "kwitter_room.html";
}