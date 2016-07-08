let imageUrl;
let username;
let currentTime;

const constructUrl = () => {
  return 'username=' + username + '&imageUrl=' + imageUrl + '&currentTime=' + currentTime;
};

xhrGet => {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if(xhr.readystate === 4 & xhr.status === 200) {
      //
    }
  };
  xhr.open('get', '/get');
  xhr.send();
};

xhrPost => {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if(xhr.readystate === 4 & xhr.status === 200) {
      console.log(xhr.response);
    }
  };
  xhr.open('post', '/post');
  xhr.send(constructUrl());
};
