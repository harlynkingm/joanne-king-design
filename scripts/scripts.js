jQuery(document).ready(function(){
  $("header .menu-icon").click(function(){
    $(this).toggleClass('rotated');
    $(".menu").slideToggle(400);
  });
  
  var $grid = $('.grid').imagesLoaded( function() {
  // init Packery after all images have loaded
  $('.grid').packery({
    itemSelector: '.grid-item',
    gutter: 0
  });
});
  
  var swaps = [['mural.png', 'piano.png'], ['bedroom.png', 'diningroom.png'], ['livingroom3.png', 'office.png'], ['landscape.png', 'livingroom2.png']];
  
  var refresh = setInterval(swapIn, 5000);
  
  function swapIn(){
    var rand = Math.floor((Math.random() * swaps.length));
    $(".grid img").each(function(){
      if (this.src.split('/').pop() == swaps[rand][0]){
        swap(this, swaps[rand][1]);
      }
      else if (this.src.split('/').pop() == swaps[rand][1]){
        swap(this, swaps[rand][0]);
      }
    });
  }
  
  function swap(obj, img){
    $(obj).fadeOut(400, function(){
      obj.src = "images/" + img;
      $(obj).fadeIn(400);
    });
  }
  
});