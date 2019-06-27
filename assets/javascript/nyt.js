


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=rtJIDuy31VXyL6KHBnaKDaFrwMH6rsVq";

$.ajax({
  url: queryURL,
  method: "GET"
})
  .then(function(response) {
    console.log(response.response.docs[7].headline.main);

  });