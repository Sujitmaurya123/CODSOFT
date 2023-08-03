// Responsive
$(function () {
  menu = $('nav ul');

  $('#openup').on('click', function (e) {
    e.preventDefault(); menu.slideToggle();
  });

  $(window).resize(function () {
    var w = $(this).width(); if (w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li').on('click', function (e) {
    var w = $(window).width(); if (w < 480) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());
});

//text animation
const the_animation = document.querySelectorAll('.animation')
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('scroll-animation')
      }
          else {
              entry.target.classList.remove('scroll-animation')
          }
      
  })
},
 { threshold: 0.5
 });
//
for (let i = 0; i < the_animation.length; i++) {
 const elements = the_animation[i];

  observer.observe(elements);
} 
