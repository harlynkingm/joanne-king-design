jQuery(document).ready(function(){
  $("header .menu-icon").click(function(){
    $(this).toggleClass('rotated');
    $(".menu").slideToggle(400);
  });
  
//  var $grid = $('.grid').imagesLoaded( function() {
//  // init Packery after all images have loaded
//  $('.grid').packery({
//    itemSelector: '.grid-item',
//    gutter: 0
//  });
  
  $('#top').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    initialSlide: 1,
    variableWidth: true,
    lazyLoad: 'progressive',
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000
  });
  
//  $('.gallery img').click(function(){
//    var obj = this;
//    $(obj).css('transform', 'rotateY(90deg)');
//    $(obj).css('transition', '.4s');
//    window.setTimeout(function(){
//      temp = obj.src;
//      obj.src = obj.dataset.swap;
//      obj.dataset.swap = temp;
//      $(obj).css('transform', '');
//    }, 400);
//    window.setTimeout(function(){
//      $(obj).css('transition', '.2s');
//    }, 800);
//  });
  
  var swaps = [['diningroom.png', 'office2.png', 'livingroom2.png'], ['IMG_3084.jpg', 'IMG_1863.jpg', 'IMG_3095.jpg'], ['livingroom1.png', 'landscape.png', 'bedroom.png']];
  
//  var refresh = setInterval(swapIn, 5000);
  
  function swapIn(){
    var rand = Math.floor((Math.random() * swaps.length));
    $(".grid img").each(function(){
      if (this.src.split('/').pop() == swaps[rand][0]){
        swap(this, swaps[rand][1]);
      }
      else if (this.src.split('/').pop() == swaps[rand][1]){
        swap(this, swaps[rand][2]);
      }
      else if (this.src.split('/').pop() == swaps[rand][2]){
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
  
  $('#toAbout').click(function(){
    $("header .menu-icon").toggleClass('rotated');
    $(".menu").slideToggle(400);
    $('#about').ScrollTo();
  });
  
  $('#toGallery').click(function(){
    $("header .menu-icon").toggleClass('rotated');
    $(".menu").slideToggle(400);
    $('#glry').ScrollTo();
  });
  
  $('#toContact').click(function(){
    $("header .menu-icon").toggleClass('rotated');
    $(".menu").slideToggle(400);
    $('#contact').ScrollTo();
  });
  
  $('#title').click(function(){
    $('#top').ScrollTo();
  });
  
});