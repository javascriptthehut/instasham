const pushResults = (resultsArray) => {
  for(let i = 1; i <= resultsArray.length; i++) {
    document.getElementById('image' + (resultsArray.length + 1 - i).toString()).style.backgroundImage = 'url(' + resultsArray[i-1].imageUrl + ')';
    document.getElementById('description' + (resultsArray.length + 1 - i).toString()).innerHTML = resultsArray[i-1].username + '<br>' + getTime(resultsArray[i-1].currentTime);
  }
};

const getTime = (time) => {
  let date = new Date(time * 1);
  return date.toString().substring(4, 24);
};
