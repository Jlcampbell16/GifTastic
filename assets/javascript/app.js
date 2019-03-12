//Giphy homework - AJAX 05-09
//Call the Giphy API and use JavaScript and JQuery to change the HTML 
//Giphy Parameters - q, limit, rating

// var APIKey = "pUQxAeyd7mmJQpZYgXXUmvzxHWPi1ZD6";



var topics = ["Puppy", "Kitten", "Koala", "Alpaca"];

function displayGif() {
    var gif = $(this).attr("data-name")
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=pUQxAeyd7mmJQpZYgXXUmvzxHWPi1ZD6";

    $.ajax({
        method: "GET",
        url: queryURL
    }).then(function (response) {
        // console.log(response)
        // var gifDiv = $("<div class='gif'");

        // var rating = response.data[i].rating;
        // var ratingText = $("<p>").text("Rating: " + rating);
        // gifDiv.append(ratingText);
        
        // var embedURL = response.data[i].embed_url;
        // var url = $("<img>")
        // $("#gifView").prepend(gifDiv);
    });
};

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
