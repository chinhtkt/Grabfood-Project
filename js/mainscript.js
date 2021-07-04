var quickviews = bulmaQuickview.attach();
    
          bulmaCarousel.attach('#carousel-demo', {
              slidesToScroll: 1,
              slidesToShow: 4,
              infinite: true,
            });

        const navbar = document.querySelector('.navbar');
        window.onscroll = (e) => {
          if (window.scrollY > 1) {
              navbar.classList.add('nav-active');
              
          } else { 
              navbar.classList.remove('nav-active');
          }
        };