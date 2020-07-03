$(function () {
  //scroll-topボタン//
  var btn = $('.top-go-btn');
  btn.hide();
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      btn.fadeIn();
    } else {
      btn.fadeOut();
    }
  });
  ////
  $('.header-right-res').click(function(){
    var a = $('.main_block15').offset().top;
    $('html, body').animate({scrollTop:a},'slow');
  });


  ////
  $('.main_block16-list').click(function(){
    var $bottom = $(this).find('.main_block16-list-bottom');
    $(this).find('a').css('text-decoration' , 'underline');
    $('.main_block16-list').not(this).find('a').css('text-decoration' , 'none');
    
    if ($bottom.hasClass('open')) {
      $bottom.slideUp(300);
      $bottom.removeClass('open');
      $(this).find('i').attr('class' , 'fas fa-chevron-down');
    } else {
      $bottom.slideDown(300);
      $bottom.addClass('open');
      $(this).find('i').attr('class' , 'fas fa-chevron-up');
    }
  });
  ////
  $('.main_block16-list-top a').hover(function(){
    $('.main_block16-list-top a').addClass('hover');
  },function(){
    $('.main_block16-list-top a').removeClass('hover');
  });


  ////
  $('.main_block10-bottom-list').click(function(){
    var $right = $(this).find('.main_block10-bottom-list-right');
    if ($right.hasClass('open')) {
      $right.removeClass('open');
      $right.slideUp(500);
      $(this).find('span').attr('class' , 'fas fa-chevron-down');
      $(this).find('p').css('text-decoration' , 'solid underline black 0');
    } else {
      $right.addClass('open');
      $right.slideDown(500);
      $(this).find('span').attr('class' , 'fas fa-chevron-up');
      $(this).find('p').css('text-decoration' , 'underline');
    }
  });

});
