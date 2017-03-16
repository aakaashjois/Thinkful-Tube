function getDataFromApi(searchTerm, callback) {
    $.getJSON("https://www.googleapis.com/youtube/v3/search", {
        part: "snippet",
        key: "Your Youtube Data API Key here",
        q: searchTerm
    }, callback);
}

function makeSearch() {
    $('.thumbnail-holder').empty();
    getDataFromApi($('.search').find('#search').val(), extractData);
}

function extractData(data) {
    var results = data.items;
    for (var i = 0; i < results.length; i++)
        if (results[i].id.kind == "youtube#video")
            $('.thumbnail-holder').append('<img src=' + results[i].snippet.thumbnails.medium.url + '>');
}
