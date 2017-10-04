$( document ).ready(function() {



console.log("Hello World!");
 $("#create-room").on("click", function(event){

 	var artistInput = $("#initialSong").val().trim();

 	var seatGeekQueryUrl = "https://api.seatgeek.com/2/performers?q=" + artistInput + "&client_id=OTEwNzcxOXwxNTA2Nzg1MDAzLjUx&client_secret=2304a5bca33fc869486d659f721fcb26c17d3c5f79b3d1333b81abb57cd58b3a";
 	console.log(seatGeekQueryUrl);
 	$.ajax({
 		url: seatGeekQueryUrl,
 		method: "GET"
 	}).done(function(response){

 		$("#artist-image").attr("src", response.performers[0].image);
 		console.log(response.performers[0].image);
      
      $(".findTickets").addClass("href", response[0].url)
 	});

 });
});

