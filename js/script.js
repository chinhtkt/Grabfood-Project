


var quickviews = bulmaQuickview.attach();
    
          bulmaCarousel.attach('#carousel-demo', {
              slidesToScroll: 1,
              slidesToShow: 4,
              navigationSwipe: true,
              pagination: false,
              breakpoints:[{ changePoint: 768, slidesToShow: 2, navigation: false, slidesToScroll: 1 } ],
              breakpoints:[{ changePoint: 1024, slidesToShow: 2, navigation: false, slidesToScroll: 1 } ],
              breakpoints:[{ changePoint: 414, slidesToShow: 1, navigation: false, slidesToScroll: 1 } ],
            });

        const navbar = document.querySelector('.navbar');
        window.onscroll = (e) => {
          if (window.scrollY > 100) {
              navbar.classList.add('nav-active');
              
          } else { 
              navbar.classList.remove('nav-active');
          }
        };

        $(document).ready(function() {

$(document).scroll(function() {
  if ($(document).scrollTop()>100){
      $('#logo').attr('src', "assets/logo-grabfood.svg");
    } else {
      $('#logo').attr('src', "assets/logo-grabfood-white.svg");
    }
  });
});