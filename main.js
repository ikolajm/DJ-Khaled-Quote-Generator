// Get Quote from khaledQuotes.json
function getQuote() {
  var xml = new XMLHttpRequest();
  xml.onreadystatechange = function() {
    if (xml.status == 200 && xml.readyState == 4) {
      var data = JSON.parse(xml.responseText);
      // Get random quote from data set
      var randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)].quote;
      // Insert quote into quote container
      var container = document.getElementById('quote-container');
      container.innerHTML =  "<p class=quote>"
                              + '"'
                              + randomQuote
                              + '"'
                              + "</p>";
    }
  }
  // Init request
  xml.open('GET', 'data/khaledQuotes.json', true);
  // Send Request
  xml.send();
}

function getQuote2() {
  var anotherOne = new Audio('sound/another_one.mp3');
  var xml = new XMLHttpRequest();
  xml.onreadystatechange = function() {
    if (xml.status == 200 && xml.readyState == 4) {
      var data = JSON.parse(xml.responseText);
      // Get random quote from data set
      var randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)].quote;
      // Load and play Audio
      anotherOne.load();
      anotherOne.play();
      // Insert quote into quote container
      var container = document.getElementById('quote-container');
      container.innerHTML =  "<p class=quote>"
                              + '"'
                              + randomQuote
                              + '"'
                              + "</p>";
    }
  }
  // Init request
  xml.open('GET', 'data/khaledQuotes.json', true);
  // Send Request
  xml.send();
}
