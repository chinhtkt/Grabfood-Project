var quickviews = bulmaQuickview.attach();

bulmaCarousel.attach('#carousel-top', {
  slidesToScroll: 1,
  slidesToShow: 5,
});

bulmaCarousel.attach('#carousel-main', {
  slidesToScroll: 1,
  slidesToShow: 4,
});







const navbar = document.querySelector('.navbar');
window.onscroll = (e) => {
  if (window.scrollY > 1) {
    navbar.classList.add('nav-active');
  } else {
    navbar.classList.remove('nav-active');
  }
};
