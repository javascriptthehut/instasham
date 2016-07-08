const container = document.getElementsByClassName('container');

let arr = Array.prototype.slice.call(container);

arr.forEach(function(item){
  item.addEventListener('mouseover', function(e){
    for(let i = 1; i <= 12; i++) {
      let description = 'description' + i;
      let image = 'image' + i;
      document.getElementById(description).className += ' containerDark';
      document.getElementById(image).className += ' containerDark';
    };
    e.target.className = 'container';
  });
});
