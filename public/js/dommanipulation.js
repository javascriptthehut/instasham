const pushResults = (resultsArray) => {
  for(let i = 1; i <= 12; i++) {
    document.getElementById('image' + i).style.backgroundImage = 'url(' + imageUrl + ')';
    document.getElementById('description' + i).innerHTML = description;
  }
};
