const pushResults = (resultsArray) => {
  for(let i = 1; i <= resultsArray.length; i++) {
    document.getElementById('image' + i).style.backgroundImage = 'url(' + resultsArray[i-1].imageUrl + ')';
    document.getElementById('description' + i).innerHTML = resultsArray[i-1].username;
  }
};
