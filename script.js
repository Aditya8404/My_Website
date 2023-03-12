$(window).scroll(function(){
    var scroll = $(window).scrollTop();
  
    if (scroll >= 10) {
      $(".navbar").addClass("nav-scroll");
    } else {
      $(".navbar").removeClass("nav-scroll");
    }
  });
  
  $('.slider').slick({
      dots: false,
      infinite: true,
      speed: 1100,
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });