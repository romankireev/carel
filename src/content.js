console.log('DFGD')
$(document).ready(function(){
    console.log('fgg')
    $(".owl-carousel").owlCarousel({
        items:6,
        loop:true,
        margin:10,
        dots:false,
        nav:true,
        navText: [
            "<img src='src/img/prev-arrow.png'>", "<img src='src/img/next-arrow.png'>"
        ],
    });
  });

let arrow = document.querySelector ('.chars-arrow')
arrow.addEventListener('click', function(event){
    event.target.classList.toggle('down')
})  