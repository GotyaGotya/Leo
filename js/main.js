$(document).ready(function () {
  $('.header-slider').slick({
    dots: true,
  });

  $(document).ready(function () {
    $('.header__burger').click(function () {
      $('.header__menu-item').toggleClass('header__menu-item--active');
    });
  });

  $('.tabs').each(function () {
    let ths = $(this);
    ths.find('.tabs-content__item').not(':first').hide();
    ths.find('.tab').click(function () {
      ths.find('.tab').removeClass('tab--active').eq($(this).index()).addClass('tab--active');
      ths.find('.tabs-content__item').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('tab--active');
  });

  $('.footer-slide__nav').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('footer-slide__nav--active');
  });

});

