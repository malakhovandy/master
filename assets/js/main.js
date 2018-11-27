(function ($) {
    "use strict";

    // Navbar change color on scroll
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".navbar").addClass('scroll');
        } else {
            $(".navbar").removeClass('scroll');
        }
    });

    // Navbar active change background
    $('.navbar-toggle').on('click', function () {
        $(".navbar").toggleClass('active');
    });

    // Navbar active item change color
    $('.navbar-nav > li').on('click', function () {
        $('.navbar-nav > li.active').removeClass('active');
        $(this).addClass('active');
    });

    // Navbar items animated scroll on click
    $('.home').on('click', function () {
        $("html, body").animate({scrollTop: $('#main').offset().top - 80}, 1000);
    })

    $('.services').on('click', function () {
        $("html, body").animate({scrollTop: $('#services').offset().top - 80}, 1000);
    })

    $('.contact').on('click', function () {
        $("html, body").animate({scrollTop: $('#contacts').offset().top - 80}, 1000);
    })


    // Navbar-collapse hide on click
    $(".navbar-collapse li").on("click", "a:not([data-toggle])", null, function () {
        $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var roadtoservices = $('#main').height() - 100;
        var roadtocontacts = $('#main').height() + 350;



        if (scroll >= roadtoservices) {
            $('.navbar-nav > li.active').removeClass('active');
            $('.navbar-nav > li.services').addClass('active');
        } else {
            $('.navbar-nav > li.active').removeClass('active');
            $('.navbar-nav > li.home').addClass('active');
        }

        if (scroll >= roadtocontacts) {
            $('.navbar-nav > li.active').removeClass('active');
            $('.navbar-nav > li.contact').addClass('active');
        }
    });

})(jQuery);