$('.btn-show-hide').on('click', function () {
  $('.box').toggleClass('show');
});

$('.btn-move').on('click', function () {
  $('.diamond').toggleClass('move');
});

$('.btn-collapse-expand').on('click', function () {
  $('.panel').toggleClass('collapse');
});

$('.btn-bounce').on('click', function () {
  $('.circle').toggleClass('bounce');
});

$('circle').on('animationend', function () {
  $('.circle').removeClass('bounce');
});
