jQuery(document).ready(function(){
  
//  $('#top').slick({
//    arrows: false,
//    infinite: true,
//    slidesToShow: 3,
//    centerMode: true,
//    initialSlide: 1,
//    variableWidth: true,
//    lazyLoad: 'progressive',
//    autoplay: false,
//    autoplaySpeed: 5000,
//    speed: 1000
//  });

  $('.overtext').click(function(e) {
    let imageSource = e.target.previousSibling.previousSibling.src;
    let photoInput = $('.modal-cover').children('.modal-photo')[0];
    $('.modal-cover').addClass('show');
    $(photoInput).attr('src', imageSource);
  });
  
  $('.modal-cover').click(function(e) {
    $(e.target).removeClass('show');
  });
  
});