$(".sl").slick({
  slidesToShow: 6.5,
   slidesToScroll: 4,
  infinite: false,
  dots: true,
  responsive: [{

      breakpoint: 1264,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 4
      }

    },{
      breakpoint: 1182,
      settings: {
        slidesToShow: 5.5,
        slidesToScroll: 4
      }
    },{
      breakpoint: 1078,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4
      }
    },{
      breakpoint: 982,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: false
      }
    },{
      breakpoint: 300,
      settings: "unslick" // destroys slick
    }]
});

$('.sl2').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  CenterMode:true,
  centerpadding:'40px',
  arrows: false,
  dots: true,
  responsive: [{
      breakpoint: 982,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    },{
      breakpoint: 300,
      settings: "unslick" // destroys slick
    }]
});


$('.sl3').slick({
  slidesToShow: 5,
  slidesToScroll: 4,
  arrows: false,
  dots: true,
  responsive: [{
      breakpoint: 982,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    },{
      breakpoint: 300,
      settings: "unslick" // destroys slick
    }]
});