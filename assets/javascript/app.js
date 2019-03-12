//Giphy homework - AJAX 05-09
//Call the Giphy API and use JavaScript and JQuery to change the HTML 
//Giphy Parameters - q, limit, rating

// var APIKey = "pUQxAeyd7mmJQpZYgXXUmvzxHWPi1ZD6";



var topics = ["Puppy", "Kitten", "Koala", "Alpaca"];



function displayGif() {
    var gif = $(this).attr("data-name")
    console.log(this)
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=pUQxAeyd7mmJQpZYgXXUmvzxHWPi1ZD6";

    $.ajax({
        method: "GET",
        url: queryURL
    }).then(function (response) {
        console.log(response);
        for (var i = 0; i < 10; i++) {
            //ADD STILLIMAGE, ANIMATES & DATA SOURCE
            var gifInfoDiv = $("<div class='gifInfo'></div>");

            var rating = response.data[i].rating;
            var ratingText = $("<p>").text("Rating: " + rating);
            gifInfoDiv.append(ratingText);

            var stillURL = response.data[i].images.fixed_height_still.url;
            var animateURL = response.data[i].images.fixed_height.url;
            var gifImg = $("<img>");
            gifImg.attr("src", stillURL);
            gifImg.attr("data-still", stillURL);
            gifImg.attr("data-animate", animateURL);
            gifImg.attr("data-state", "still");
            gifImg.addClass("gif");




            $("#gifView").prepend(gifInfoDiv, gifImg);
        }
    });
};

//PAUSE & ANIMATE
$("#gifView").on("click", ".gif", function () {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }

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


//on click of button, grab 10 static, non animated gif images and display on the page
$("#addGif").on("click", function (event) {
    event.preventDefault();
    var newGif = $("#gifInput").val().trim();
    topics.push(newGif);
    renderButtons();
});



$("#buttons").on("click", ".gif", displayGif)
renderButtons();



//on click of still image, gif animate. on click of animate, make still (if/else)

//display the rating for every gif








//*****IF AMBITIOUS*****//
//add form to page that adds user in put to the topics array. 
//make a function call for each topic and remakes the buttons on the page
