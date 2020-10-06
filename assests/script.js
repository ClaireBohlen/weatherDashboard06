  // This .on("click") function will trigger the AJAX Call
  $("#find-city").on("click", function(event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // Here we grab the text from the input box
    var city = $("#city-input").val();

    // Here we construct our URL
    var queryURL = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=" + city +"&appid=e5a5d4ba5ab1d31ad291b42947d0606b";  

    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of movie-view

    // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $("#city-view").text(JSON.stringify(response));
    });

   

  });