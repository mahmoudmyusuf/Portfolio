(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }

    // Modal Video - Play & Stop
    $(document).ready(function () {
        $('.btn-play').click(function () {
            var $videoSrc = $(this).data("src").replace("watch?v=", "embed/");
            $("#video").attr('src', $videoSrc + "?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&showinfo=0&enablejsapi=1").attr("allow", "autoplay");
        });

        $('#videoModal').on('hide.bs.modal', function () {
            $("#video").attr('src', ""); // Stops video when modal closes
        });
    });

    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });

    // Skills Animation
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });

    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });

    // Portfolio Modal with Link
    $(document).ready(function () {
    var modal = $('#portfolioModal');
    var modalImg = $('#modalImage');
    var modalTitle = $('#modalTitle');
    var modalDescription = $('#modalDescription');
    var modalLink = $('#modalLink'); // Separate link element

    $('.portfolio-btn').click(function () {
        var modalData = $(this).data('modal'); // Get the data-modal attribute

        // Ensure modalData is parsed properly
        if (typeof modalData === 'string') {
            modalData = JSON.parse(modalData);
        }

        if (modalData) {
            modalTitle.text(modalData.title); 
            modalImg.attr('src', modalData.image);
            modalDescription.text(modalData.description);
            modalLink.attr('href', modalData.link).text('More Details Click Here 🔗'); // ✅ Properly setting the link
            modal.css('display', 'flex');
        }
    });

    $('.close').click(function () {
        modal.css('display', 'none');
    });

    $(window).click(function (event) {
        if ($(event.target).is(modal)) {
            modal.css('display', 'none');
        }
    });
});


})(jQuery);