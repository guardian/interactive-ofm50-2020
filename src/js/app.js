// // js code here
// const images = [
// "https://media.guim.co.uk/3958a4124e6babdfa25c006d04ca55745c04a508/0_0_5000_3000/5000.jpg",
// "https://media.guim.co.uk/84287913c87b22970f604c0485c1c6a1076b83cb/0_0_5000_3000/5000.jpg",
// "https://media.guim.co.uk/d94098cfb2143007e1661a5e6de2bef874c12870/173_0_5000_3000/5000.jpg",
// "https://media.guim.co.uk/b79741bdd37c3c9f3b391f20d37e9abd11032774/0_0_5000_3000/5000.jpg",
// "https://media.guim.co.uk/6238445619d1888b7a62a1a5a5d1aab3e8e6683b/0_0_5000_3000/5000.jpg"
// ];
//
// console.log(images)
//
//
// let i = 0;
// const imageChange = setInterval(() => {
// // document.getElementById('change-lang').innerHTML = images[i];
// document.getElementById('image_header').style.backgroundImage = 'url[images[i]]';
//
// if (i == (images.length - 1)) {
// i = 0;
// } else {
// i++;
// }
// }, 1500)
// }

var carousel = document.querySelectorAll('.carousel');
  carousel[0].classList.add('visible');

setInterval(function(){
    var visible = document.querySelector('.visible');
    var next = document.querySelector('.visible + .carousel');

    if(next) {
      next.classList.add('visible');
    }else {
      carousel[0].classList.add('visible');
    }
    visible.classList.remove('visible');
  }, 3000)


var headers = document.querySelectorAll('.header-click');

for(var i = 0; i < headers.length; i++) {
  headers[i].addEventListener('click', function(){
    //add class to header (classList.toggle)
    this.classList.toggle('animate');
    //use this classname in css to animate the plus by rotating it 45deg
    var data = this.dataset.click;
    console.log(data);
    var selector = '.ofm-contents__wrapper.' + data;
    console.log(selector);
    var blocks = document.querySelectorAll(selector);
    for(var j=0; j < blocks.length; j++){
      blocks[j].classList.toggle('visible');
    }
  });
}
