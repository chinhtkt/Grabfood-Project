


const navbar = document.querySelector('.navbar');
window.onscroll = (e) => {
  if (window.scrollY > 1) {
    navbar.classList.add('nav-active');
  } else {
    navbar.classList.remove('nav-active');
  }
};

$('.tabs ul li ').on('click', function(event) {
  $(this).parent().find('li').removeClass('is-active');
  $(this).addClass('is-active');
});


// $(window).on('scroll', function() {
//   $('.target').each(function() {
//       if($(window).scrollTop() >= $(this).offset().top) {
//           var id = $(this).attr('id');
//           $('.tabs ul li a').removeClass('is-active');
//           $('.tabs ul li a [href=#'+ id +']').addClass('is-active');
//       }
//   });
// });



$("#showModal").click(function() {
  $(".modal").addClass("is-active");  
});

$(".modal-close").click(function() {
   $(".modal").removeClass("is-active");
});


var quickviews = bulmaQuickview.attach();