$(document).ready(function () {

    $('.scroll-top').hide()
    $(window).scroll(function () {

        var a = $(window).scrollTop()

        if (a > 200) {
            $('.hdr').addClass('fixed-header')
            $('.scroll-top').fadeIn(400)
            $('.hdr .logo img').attr('src','./assets/logo-dark.png')
        }
        else {
            $('.hdr').removeClass('fixed-header')
            $('.scroll-top').fadeOut(400)
            $('.hdr .logo img').attr('src','./assets/logo-light.png')
        }
    })

    //click to top website
    $('.scroll-top').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1500)
    })
    // loading js
    setInterval(() => {
        $('.loader').slideUp(500)
    }, 3000);
})