const pushResults = (resultsArray) => {
  for(let i = 1; i <= 12; i++) {
    document.getElementById('image' + i).style.backgroundImage = 'url(' + resultsArray[i-1].imageUrl + ')';
    document.getElementById('description' + i).innerHTML = resultsArray[i-1].username;
  }
};
