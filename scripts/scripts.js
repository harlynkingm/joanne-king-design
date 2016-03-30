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
  
  $.fn.scrollTo = function( target, options, callback ){
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : 50,
    duration      : 500,
    easing        : 'swing'
  }, options);
  return this.each(function(){
    var scrollPane = $(this);
    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
      if (typeof callback == 'function') { callback.call(this); }
    });
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