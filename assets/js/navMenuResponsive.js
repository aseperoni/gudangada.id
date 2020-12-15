

$(document).ready(
  function () {
    $('.menu-toggle').click(function () {
      $('nav').toggleClass('active')
    })

    $('ul li').click(function () {
      $(this).siblings().removeClass('active');
      $(this).toggleClass('active');
    })


  }
)



$(function () {

  $('li.dropdown > a').on('click', function (event) {

    event.preventDefault();
    $(this).toggleClass('selected');
    $(this).parent().find('ul').first().toggle(300);

    $(this).parent().siblings().find('ul').hide(200);

    //Hide menu when clicked outside
    $(this).parent().find('ul').parent().mouseleave(function () {
      var thisUI = $(this);
      $('html').click(function () {
        thisUI.children(".dropdown-menu").hide();
        thisUI.children("a").removeClass('selected');

        $('html').unbind('click');
      });
    });


  });

});