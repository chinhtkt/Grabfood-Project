const navbar = document.querySelector('.navbar');
window.onscroll = (e) => {
  if (window.scrollY > 1) {
    navbar.classList.add('nav-active');
  } else {
    navbar.classList.remove('nav-active');
  }
};

$("#showModal").click(function() {
  $(".modal").addClass("is-active");  
});

$(".modal-close").click(function() {
   $(".modal").removeClass("is-active");
});


var quickviews = bulmaQuickview.attach();