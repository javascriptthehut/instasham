const constructSend = () => {
  const username = document.getElementById('username').value;
  const imageUrl = document.getElementById('imageurl').value;
  const time = Date.now();
  return 'username=' + username + '&imageUrl=' + imageUrl + '&currentTime=' + time;
};

let xhrGet = () => {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if(xhr.readystate === 4 & xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };
  xhr.open('get', '/get');
  xhr.send();
};

let xhrPost = () => {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if(xhr.readystate === 4 & xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };
  xhr.open('post', '/post');
  xhr.send(constructSend());
};

window.onload = xhrGet();

document.getElementById('submit').addEventListener('click', () => {
  xhrPost();
});
