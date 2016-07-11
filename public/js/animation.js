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

for (let i = 0; i < 13; i++) {
  let description = 'description' + (i + 1);
  let image = 'image' + (i + 1);
  image.addEventListener('mouseover', function(|) {
    for (let j = 0; j < 13; j++) {
      document.getElementById(description).className = 'container';
      document.getElementById(image).className = 'container';
    }
    document.getElementById(description).className = 'container containerDark';
    document.getElementById(image).className = 'container containerDark';

  });
}
