/*Downloaded from https://www.codeseek.co/hellokatili/responsive-testimonial-slider-rVvMZb */
/*var prevButton = '<button type="button" data-role="none" class="slick-prev" aria-label="prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1"><path fill="#fafbea" d="m 16.8775,15.5825 -4.585,-4.585 -4.585,4.585 -1.415,-1.415 6,-6 6,6 z" /></svg></button>',
    nextButton = '<button type="button" data-role="none" class="slick-next" aria-label="next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1"><path fill="#fafbea" d="m 16.8775,8.1675 -4.585,4.585 -4.585,-4.585 -1.415,1.415 6,6 6,-6 z" /></svg></button>';

$('.single-item').slick({
  infinite: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 1000,
  cssEase: 'ease-in-out',
  prevArrow: prevButton,
  nextArrow: nextButton,
  vertical: true,
  verticalSwiping: true
});

$('.quote-container').mousedown(function(){
  $('.single-item').addClass('dragging');
});
$('.quote-container').mouseup(function(){
  $('.single-item').removeClass('dragging');
});*/


/*Downloaded from https://www.codeseek.co/hellokatili/responsive-testimonial-slider-rVvMZb */
var prevButton = '<button type="button" data-role="none" class="slick-prev" aria-label="prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1"><path fill="#2A2B2A" d="M 16,16.46 11.415,11.875 16,7.29 14.585,5.875 l -6,6 6,6 z" /></svg></button>',
    nextButton = '<button type="button" data-role="none" class="slick-next" aria-label="next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#2A2B2A" d="M8.585 16.46l4.585-4.585-4.585-4.585 1.415-1.415 6 6-6 6z"></path></svg></button>';

$('.single-item').slick({
  infinite: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 1000,
  cssEase: 'ease-in-out',
  prevArrow: prevButton,
  nextArrow: nextButton
});

$('.quote-container').mousedown(function(){
  $('.single-item').addClass('dragging');
});
$('.quote-container').mouseup(function(){
  $('.single-item').removeClass('dragging');
});