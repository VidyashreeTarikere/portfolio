$(window).on("load", function () {
    $(".loader .inner").fadeOut(1000, function () {
        $(".loader").fadeOut(1500);
    });
});

var countDate = new Date('July 9, 2021 00:00:00').getTime();
function newDay() {
    var now = new Date().getTime();
    var difference = countDate - now;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(difference / (day));
    var h = Math.floor((difference % (day)) / (hour));
    var m = Math.floor((difference % (hour)) / (minute));
    var s = Math.floor((difference % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(function () {
    newDay();
}, 1000)

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

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        },
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

    var skillsTopOffset = $(".skillsSection").offset().top;

    $(window).scroll(function () {
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#f0f2f8',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                animate: { duration: 2000, enabled: true },
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });

    $(".becode").click(function () {
        $("#becode").removeClass("#becode").toggle();

    });

    $(".nieit").click(function () {
        $("#nieit").removeClass("#nieit").toggle();

    });

    $(".nie").click(function () {
        $("#nie").removeClass("#nie").toggle();

    });

    $(".vsr").click(function () {
        $("#vsr").removeClass("#vsr").toggle();

    });


    $("#navigation li a").click(function (e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html,body").animate({ scrollTop: targetPosition - 50 }, "slow")
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        const body = $("body");

        if ($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        } else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }

});
