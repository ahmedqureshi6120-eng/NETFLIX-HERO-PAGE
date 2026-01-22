
var hoverImages = [
  "images/king.jpg",
  "images/got.jpg",
  "images/money.avif",
  "images/stranger.webp"
];


var images = document.getElementsByClassName('over');


for (let i = 0; i < images.length; i++) {

  let originalSrc = images[i].src;


  images[i].onmouseover = function () {
    this.src = hoverImages[i];
  }


  images[i].onmouseout = function () {
    this.src = originalSrc;
  }
}



var questions = document.querySelectorAll('.item h2');

questions.forEach(function (question) {

  question.addEventListener('click', function () {

    var answer = this.nextElementSibling;


    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});
