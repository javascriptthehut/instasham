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
      //
    }
  };
  xhr.open('post', '/post');
  xhr.send(/*data*/);
};
