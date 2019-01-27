$(document).ready(function () {
    $(window).on('load', function () {
        console.log($(window).width()) //588
         setInterval(function () {

            if ($(window).width() <= 550) {
                $('.member-cards .card').removeClass('horizontal');

            } else {
                $('.member-cards .card').addClass('horizontal');
            }
         }, 10)
    });


});
