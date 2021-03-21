$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Web Developer", "Living in Ghent", "Loves chai"],
        typeSpeed: 200,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });
});