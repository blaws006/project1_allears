  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB9w7aVljxcr4EvPhQkguucg77mUWPCqrY",
    authDomain: "all-ears.firebaseapp.com",
    databaseURL: "https://all-ears.firebaseio.com",
    projectId: "all-ears",
    storageBucket: "all-ears.appspot.com",
    messagingSenderId: "960933503335"
  };
  firebase.initializeApp(config);


 var provider = new firebase.auth.GoogleAuthProvider();
var database = firebase.database();

function addingUsersAndTheirObject(other){

  var secondaryUsers = {
    name: userName,
    chat: "",

  }

}
function returnUserObject(userName){

  var user = {
    name: userName,
    chat: "",
    song: name,
  }
  return user
}

//this is the start of the login function!!
$("#signUpButton").on("click", function(event) {
  event.preventDefault();
  console.log("button press");
  var userName = $("#usernameInput").val().trim();
  userId=null
  //var password = $("#passwordInput").val();
  console.log(userName);
  var email = $("#emailInput");
  var password =$("#passwordInput");
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    // make this more eloquent and update the html modal with an error message!!
    //console.log("there was an error");
   // var errorCode = error.code;
   // var errorMessage = error.message;
    //console.log(errorMessage);
    // ...
    
  
   
}
$("#usernameInput").val("");
$("#emailInput").val("");
$("#passwordInput").val("");


var refData = database.ref("users");
refData.transaction(
  function(currentData){
  console.log("transaction called")
  if (currentData === null){
    var user = { 
      "1" : returnUserObject(userName)
    }
    console.log(user)
    userId = 1
    return user
  }

  var UserOneExists = currentData.hasOwnProperty(1);
  console.log(UserOneExists)
  if (UserOneExists){
    $("#create").on("click", function(event){
      var songSelect = $("#initialSong").val().trim();
      console.log(songSelect)

    })
  }
  
})


})


Apperyio("tog").val("off");
Apperyio("tog").flipswitch("refresh");
