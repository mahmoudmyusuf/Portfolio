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


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
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
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
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

    $(document).ready(function () {
        // ====== MODAL FUNCTIONALITY ======
        var modal = $('#portfolioModal');
        var modalImg = $('#modalImage');
        var modalTitle = $('#modalTitle');
        var modalDescription = $('#modalDescription');
        var modalLink = $('#modalLink');
        var closeModal = $('.close');

        // ✅ Ensure modal is hidden initially
        modal.hide();

        // ✅ Open Modal & Set Content (Event Delegation for dynamically loaded elements)
        $(document).on('click', '.portfolio-btn', function () {
            var modalData = $(this).attr('data-modal'); // Retrieve data attribute

            try {
                modalData = JSON.parse(modalData); // Parse JSON
            } catch (e) {
                console.error("Invalid JSON data:", e);
                return;
            }

            if (modalData) {
                modalImg.attr('src', modalData.image); // ✅ Set modal image
                modalTitle.text(modalData.title); // ✅ Set title
                modalDescription.text(modalData.description); // ✅ Set description
                modalLink.attr('href', modalData.link); // ✅ Set link
                
                modal.fadeIn(300).css("display", "flex"); // ✅ Ensure modal opens
            }
        });

        // ✅ Close modal on button click
        closeModal.on('click', function () {
            modal.fadeOut(300);
        });

        // ✅ Close modal when clicking outside the modal-content
        $(window).on('click', function (event) {
            if ($(event.target).is(modal)) {
                modal.fadeOut(300);
            }
        });



        // ====== PORTFOLIO FILTER FUNCTIONALITY ======
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $('#portfolio-filters li').on('click', function () {
            $("#portfolio-filters li").removeClass('active');
            $(this).addClass('active');

            var filterValue = $(this).attr('data-filter');
            portfolioIsotope.isotope({ filter: filterValue });
        });

        // ====== NAVBAR SHOW/HIDE ON SCROLL ======
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.navbar').fadeIn(300).css('display', 'flex');
            } else {
                $('.navbar').fadeOut(300);
            }
        });

        // ====== BACK TO TOP BUTTON ======
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.back-to-top').fadeIn(300);
            } else {
                $('.back-to-top').fadeOut(300);
            }
        });

        $('.back-to-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 800, 'easeInOutExpo');
            return false;
        });

        // ====== SKILLS PERCENTAGE ANIMATION ======
        $('.skill').waypoint(function () {
            $('.progress .progress-bar').each(function () {
                $(this).css("width", $(this).attr("aria-valuenow") + "%");
            });
        }, { offset: '80%' });

        // ====== TYPING EFFECT IN HEADER ======
        if ($('.typing').length) {
            var typed = new Typed('.typing', {
                strings: ["Data Analyst", "Power BI Expert", "DAX Enthusiast", "SQL Developer"],
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000,
                loop: true
            });
        }

        // ====== TESTIMONIALS CAROUSEL ======
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            dots: true,
            loop: true,
            items: 1
        });

    });

})(jQuery);
