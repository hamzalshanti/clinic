$(function () {

    $(".owl-carousel").owlCarousel({
	nav: true,
  	navText: ["<i class='fas fa-arrow-alt-circle-left'></i>","<i class='fas fa-arrow-alt-circle-right'></i>"],
    responsive: {


      0 : {
        items: 1,
    },

    768: {
        items: 2,
    },

    992 : {
        items: 3,
    }
     }
    });
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();



    $('.loader').fadeOut();



});
