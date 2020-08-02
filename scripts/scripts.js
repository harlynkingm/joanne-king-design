jQuery(document).ready(function(){

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