//________________________________________________________
////Todo:
////Write an AJAX function which goes to this url and returns a track ID
//
//@inputs
//apikey
//q_artist
//q_track
//
//https://api.musixmatch.com/ws/1.1/track.search?apikey=somekey&q_artist=pharrell%20williams&q_track=happy
//
//@output
//track_id


var lyrics_id;
var track_id;
var key = "18cac945fc20d40d533e1bcff923f8d3";


function getLyrics(track_id){
 var queryURLLyrics = "https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=" + key + "&track_id=" + track_id; 
 

     $.ajax({
         url: queryURLLyrics,
         method: "GET"
         }).done(function (response) {
             
             var lyrics = JSON.parse(response);
             lyrics = lyrics.message.body.lyrics.lyrics_body;
             console.log(lyrics);
             //////////////
             tempLyrics = lyrics.split("\n");
             console.log(tempLyrics);
             //////////////
             p = "";
             for(i=0; i<tempLyrics.length; i ++){
             	if(tempLyrics[i]){
             		p = p + "<p>" + tempLyrics[i] + "</p>";
             	} else {
             		p = p + "<br>";
             	}
             	
             }
   			  $('.lyrics').html(p);

         });
        
};

function getTrackId(artist, track){

 var queryURL = "https://api.musixmatch.com/ws/1.1/track.search?apikey=" + key + '&q_artist=' + artist + '&q_track=' + track;
     $.ajax({
         url: queryURL,
         method: "GET"
         }).done(function (response) {
             console.log(queryURL);
             var a = JSON.parse(response);
             lyrics_id = a.message.body.track_list[0].track.lyrics_id;
             track_id = a.message.body.track_list[0].track.track_id;
             console.log(track_id);
			 getLyrics(track_id)
				//getLyrics(track_id);

         });
};

/*
__________________________________________________________
Todo:
Write an AJAX function which uses the trackid to get lyrics

@inputs
apikey
lyrics_id

https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=somekey&track_id=130744235

@output
lyrics_body
__________________________________________________________

*/


//track_id = 130744235;
getTrackId("pharrell","happy");