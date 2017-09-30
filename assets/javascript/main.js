//This JS will be responsible for generating a new chat room.

//https://www.googleapis.com/youtube/v3/search?part=snippet&q=falling&maxResults=1&key=AIzaSyASwdpu78n7US8xShgVezu2FsSlYuvwwaE
//https://www.googleapis.com/youtube/v3/search?part=snippet&q=jordan&maxResults=1&key=AIzaSyASwdpu78n7US8xShgVezu2FsSlYuvwwaE
//https://www.googleapis.com/youtube/v3/search?part=snippet&q=jordan&type=video&maxResults=1&key=AIzaSyASwdpu78n7US8xShgVezu2FsSlYuvwwaE
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAthBYx_19itvq6uZTEs5q3918PBgoNIcI",
  authDomain: "allears-cc500.firebaseapp.com",
  databaseURL: "https://allears-cc500.firebaseio.com",
  projectId: "allears-cc500",
  storageBucket: "allears-cc500.appspot.com",
  messagingSenderId: "965176498033"
};

firebase.initializeApp(config);
var songName = "";
var grooveRoomName = "";
var database = firebase.database();

function youtubeApiCall(searchParam){
	$.ajax({
	 method: "GET",
	 url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + searchParam + '&type=video&videoEmbeddable=true&maxResults=1&key=AIzaSyASwdpu78n7US8xShgVezu2FsSlYuvwwaE'
	})
	.done(function(data) { 
		console.log(data);
	});
}



//ON CLICK OF: createGrooveRoom
$("#createGrooveRoom").on("click", function() {
	//VALIDATION
		console.log("Enter user input validation.")
		//need to fill out a song name
		songName = $.trim($("#initialSong").val());
		console.log(songName);
		//need to fill out the name of the chat room.
		grooveRoomName = $.trim($("#grooveRoomInput").val());
		console.log(grooveRoomName);
		//check if either chat room, or song was NOT inputted
		if(songName){
			if(grooveRoomName){
				//YOUTUBE API HIT (we need to store title of song, and the iframe with video id in firebase)
					//this call gets you video ids https://www.googleapis.com/youtube/v3/search?part=snippet&q=buckethead&maxResults=1&key=AIzaSyASwdpu78n7US8xShgVezu2FsSlYuvwwaE
					youtubeApiCall(songName);
					//i want to store this informaton in firebase with some ID

					//and then the link to the ID in firebase to make the calls to the database to pull the information in.


				//stubhub api call


				//lyrics api call
			} else {
				//DID NOT ENTER A GROOVE ROOM NAME
				$("#errorMessageContainer").html("<p class='modal-inline-text'>You did not enter a groove room name BRO!</p>");
			}
		} else {
			//DID NOT ENTER A SONG NAME
			$("#errorMessageContainer").html("<p class='modal-inline-text'>You did not enter a song name BRO!</p>");
		}
		
})
	
//need operation when the cloes button is pressed on the modal
$(".modal-closer").on("click", function() {
	$("#errorMessageContainer").html("");
})


//???