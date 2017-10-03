// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
    $('#search-button').attr('disabled', false);
}

googleApiClientReady = function() {
    gapi.auth.init(function() {
        setupYoutube();
    });
}

function setupYoutube() {
    gapi.client.init({
            apiKey: "AIzaSyB9w7aVljxcr4EvPhQkguucg77mUWPCqrY",
        })
        .then(function() {
            gapi.client.load('youtube', 'v3', function() {
                handleAPILoaded();
            });
        })
}

// Search for a specified string.
function search() {
    var q = $('#query').val();
    var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet',
        type: 'video',
        maxResults: 1,
    });

    $('#search-container').empty();
    request.execute(function(response) {
        var str = JSON.stringify(response.result);
        console.log(response);

        for (var item of response.result.items) {
            var id = item.id;
            var videoId = id.videoId;
            get_video(videoId);
        }
    });
}

function get_video(id) {
    var request = gapi.client.youtube.videos.list({
        id: id,
        part: "snippet,player"
    });
    request.execute(function(response) {
        console.log(response);
        $('#search-container').append(response.result.items[0].player.embedHtml);

    })

}