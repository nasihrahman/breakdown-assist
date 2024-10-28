$(document).ready(function() {
    // Function to check if element is in viewport
    function isElementInView(element) {
        const elementTop = $(element).offset().top;
        const elementBottom = elementTop + $(element).outerHeight();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }

    // Animate the cards when they come into view
    function animateCards() {
        $('.benefit-card').each(function(index) {
            if (isElementInView(this)) {
                $(this).delay(index * 150).queue(function(next) {
                    $(this).addClass('show');
                    next();
                });
            }
        });
    }

    // Trigger animation on scroll
    $(window).on('scroll', animateCards);
    
    // Trigger animation on page load (if already in view)
    animateCards();
});