// var APIKey = "pUQxAeyd7mmJQpZYgXXUmvzxHWPi1ZD6";

var topics = ["Giraffe", "Otter", "Puppy", "Turtle", "Porcupine", "Kitten", "Koala", "Alpaca", "Elephant", "Tiger", "Polar Bear", "Goat"];

function displayGif() {
    var gif = $(this).attr("data-name")

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=pUQxAeyd7mmJQpZYgXXUmvzxHWPi1ZD6";

    $.ajax({
        method: "GET",
        url: queryURL
    }).then(function (response) {
        for (var i = 0; i < 10; i++) {

            var gifInfoDiv = $("<div class='gifInfo'></div>");
            //ADD RATING TO NEW PARAGRAPH
            var rating = response.data[i].rating;
            var ratingText = $("<p id='rating'>").text("Rating: " + rating);
            gifInfoDiv.append(ratingText);

            //ADD GIF TO IMAGE DIV
            var stillURL = response.data[i].images.fixed_height_still.url;
            var animateURL = response.data[i].images.fixed_height.url;
            var gifImg = $("<img>");
            gifInfoDiv.append(gifImg)

            //ADD STILLIMAGE, ANIMATES & DATA SOURCE
            gifImg.attr("src", stillURL);
            gifImg.attr("data-still", stillURL);
            gifImg.attr("data-animate", animateURL);
            gifImg.attr("data-state", "still");
            gifImg.addClass("gif");

            $("#gifView").prepend(gifInfoDiv);
        };
    });
};

//pause and animate
$("#gifView").on("click", ".gif", function () {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    };

});

//create new buttons for each string in the array
//loop that appends a button for each string
function renderButtons() {
    $("#buttons").empty();
    for (var i = 0; i < topics.length; i++) {
        var newBtn = $("<button>");
        newBtn.addClass("gif");
        newBtn.attr("data-name", topics[i]);
        newBtn.text(topics[i]);
        $("#buttons").append(newBtn);
    }
};

//add a new git button to the page
$("#addGif").on("click", function (event) {
    event.preventDefault();
    var newGif = $("#gifInput").val().trim();
    topics.push(newGif);
    renderButtons();
    $("#gifInput").val("");
});


$("#buttons").on("click", ".gif", displayGif)
renderButtons();










//*****IF AMBITIOUS*****//
//add form to page that adds user in put to the topics array. 
//make a function call for each topic and remakes the buttons on the page
