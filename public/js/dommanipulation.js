const pushResults = (resultsArray) => {
  for(let i = 1; i <= resultsArray.length; i++) {
    document.getElementById('image' + i).style.backgroundImage = 'url(' + resultsArray[i-1].imageUrl + ')';
    document.getElementById('description' + i).innerHTML = resultsArray[i-1].username + getTime(resultsArray[i-1].currentTime);
    console.log(getTime(resultsArray[i-1].currentTime),resultsArray[i-1].currentTime);
  }
};

const getTime = (time) => {
  let date = new Date(time * 1000);
  return date.toString();
};
