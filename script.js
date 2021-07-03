var quickviews = bulmaQuickview.attach();
    
          bulmaCarousel.attach('#carousel-demo', {
              slidesToScroll: 1,
              slidesToShow: 3,
            });

        const navbar = document.querySelector('.navbar');
        const image = document.getElementsByClassName("img-logo").src;
        window.onscroll = (e) => {
          if (window.scrollY > 1) {
              navbar.classList.add('nav-active');
              
          } else { 
              navbar.classList.remove('nav-active');
          }
        };

        $(document).ready(function() {

$(document).scroll(function() {
  if ($(document).scrollTop()>1){
      $('#logo').attr('src', "assets/logo-grabfood.svg");
    } else {
      $('#logo').attr('src', "assets/logo-grabfood-white.svg");
    }
  });
});