jQuery(document).ready(function(){
//  var os = new OnScreen({
//    tolerance: 300,
//    debounce: 0
//  });
//  
//  os.on('enter', '.image-shade', (element, event) => {
//    element.style.opacity = '0.2';
//  });
//  
//  os.on('leave', '.image-shade', (element, event) => {
//    element.style.opacity = '0.6';
//  });
//  
//  $(window).scroll(() => {
//    $(".image-shade").each( (index, elem) => {
//      if (!isScrolledIntoView(elem)) {
//        elem.style.opacity = '0.2';
//      } else {
//        elem.style.opacity = '0.6';
//      }
//    });
//  });
//  
//  function isScrolledIntoView(elem) {
//    var win = $(window);
//    var viewport = {
//        top : win.scrollTop(),
//        left : win.scrollLeft()
//    };
//    viewport.right = viewport.left + win.width();
//    viewport.bottom = viewport.top + win.height();
//    var bounds = elem.offset();
//    bounds.right = bounds.left + elem.outerWidth();
//    bounds.bottom = bounds.top + elem.outerHeight();
//    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
//  }
});