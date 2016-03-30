jQuery(document).ready(function(){
  $("header .menu-icon").click(function(){
    $(this).toggleClass('rotated');
    $(".menu").slideToggle(400);
  });
  
  $('.grid').packery({
    itemSelector: '.grid-item',
    gutter: 0
  });
  
});