textscalin();
$(window).resize(function () {
  textscalin();
});
function textscalin() {
  $('.title').css('font-size', $('.title').width() / 20 + 'px');
  $('.title').css('padding', $('.title').width() / 100 + 'px');
  $('.cardtype').css('padding', $('.cardtype').width() / 100 + 'px');
  $('.cardtype').css('font-size', $('.cardtype').width() / 20 + 'px');
  $('.artist').css('font-size', $('.artist').width() / 18 + 'px');
  $('.copyright').css('font-size', $('.copyright').width() / 18 + 'px');
  $('.str').css('font-size', $('.str').width() / 2 + 'px');
  $('.desc').css('font-size', $('.desc').width() / 17 + 'px');
  $('.desc').css('padding', $('.desc').width() / 15 + 'px');
}
