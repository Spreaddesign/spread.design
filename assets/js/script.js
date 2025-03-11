document.addEventListener('mousemove', function(me) {
    $('#cursor').css({ left: me.clientX, top: me.clientY })
})

function mobmenuclick() {
    $('.mob-icon-left').toggleClass('toggleLeft')
    $('.mob-icon-left').toggleClass('toggleLeft-alt')
    $('.mob-icon-right').toggleClass('toggleRight')
    $('.mob-icon-right').toggleClass('toggleRight-alt')
}

// function dragcard1() {
//     $('#mob-card-1').css({ display: 'none' })
//     $('#mob-card-2').css({ display: 'block' })
//     $('#mob-card-3').css({ display: 'none' })
//     $('#md-dot-1').removeClass('md-active')
//     $('#md-dot-2').addClass('md-active')
//     $('#md-dot-3').removeClass('md-active')
// }

// function dragcard2() {
//     $('#mob-card-1').css({ display: 'none' })
//     $('#mob-card-2').css({ display: 'none' })
//     $('#mob-card-3').css({ display: 'block' })
//     $('#md-dot-1').removeClass('md-active')
//     $('#md-dot-2').removeClass('md-active')
//     $('#md-dot-3').addClass('md-active')
// }

// function dragcard3() {
//     $('#mob-card-1').css({ display: 'block' })
//     $('#mob-card-2').css({ display: 'none' })
//     $('#mob-card-3').css({ display: 'none' })
//     $('#md-dot-1').addClass('md-active')
//     $('#md-dot-2').removeClass('md-active')
//     $('#md-dot-3').removeClass('md-active')
// }

function clickdot1() {
    $('#mob-card-1').css({ display: 'none' })
    $('#mob-card-2').css({ display: 'block' })
    $('#mob-card-3').css({ display: 'none' })
    $('#md-dot-1').removeClass('md-active')
    $('#md-dot-2').addClass('md-active')
    $('#md-dot-3').removeClass('md-active')
}

function clickdot2() {
    $('#mob-card-1').css({ display: 'none' })
    $('#mob-card-2').css({ display: 'none' })
    $('#mob-card-3').css({ display: 'block' })
    $('#md-dot-1').removeClass('md-active')
    $('#md-dot-2').removeClass('md-active')
    $('#md-dot-3').addClass('md-active')
}

function clickdot3() {
    $('#mob-card-1').css({ display: 'block' })
    $('#mob-card-2').css({ display: 'none' })
    $('#mob-card-3').css({ display: 'none' })
    $('#md-dot-1').addClass('md-active')
    $('#md-dot-2').removeClass('md-active')
    $('#md-dot-3').removeClass('md-active')
}

function mobcardclick1() {
    $('#mob-img-1').css({ display: 'none' })
    $('#mob-sub-img-1').css({ display: 'block' })
    // $('#mob-img-1').attr('src','/assets/images/GOX-mob.png')
    $('#mob-subcard-1').css({ display: 'none' })
    $('#mob-submaincard-1').css({ display: 'block' })
    $('.mob-dots').css({ display: 'none' })
    $('#mob-sub-arrow-1').css({ display: 'block' })
    // $('#mob-arrow-1').addClass('mobRotate')
    // if($('#mob-arrow-1').hasClass('mobRotate')) {
    //     $('#mob-arrow-1').css({ transform: 'rotate(-45deg)', top: '-5em', right: '-5em', transition: '2s ease' })
    // }
}

function mobcardhide1() {
    $('#mob-img-1').css({ display: 'block' })
    $('#mob-sub-img-1').css({ display: 'none' })
    // $('#mob-img-1').attr('src','/assets/images/GOX-mob-crop.png')
    $('#mob-subcard-1').css({ display: 'flex' })
    $('#mob-submaincard-1').css({ display: 'none' })
    $('.mob-dots').css({ display: 'flex' })
    $('#mob-sub-arrow-1').css({ display: 'none' })
}

function mobcardclick2() {
    $('#mob-img-2').css({ display: 'none' })
    $('#mob-sub-img-2').css({ display: 'block' })
    $('#mob-subcard-2').css({ display: 'none' })
    $('#mob-submaincard-2').css({ display: 'block' })
    $('.mob-dots').css({ display: 'none' })
    $('#mob-sub-arrow-2').css({ display: 'block' })
}

function mobcardhide2() {
    $('#mob-img-2').css({ display: 'block' })
    $('#mob-sub-img-2').css({ display: 'none' })
    $('#mob-subcard-2').css({ display: 'flex' })
    $('#mob-submaincard-2').css({ display: 'none' })
    $('.mob-dots').css({ display: 'flex' })
    $('#mob-sub-arrow-2').css({ display: 'none' })
}

function mobcardclick3() {
    $('#mob-img-3').css({ display: 'none' })
    $('#mob-sub-img-3').css({ display: 'block' })
    $('#mob-subcard-3').css({ display: 'none' })
    $('#mob-submaincard-3').css({ display: 'block' })
    $('.mob-dots').css({ display: 'none' })
    $('#mob-sub-arrow-3').css({ display: 'block' })
}

function mobcardhide3() {
    $('#mob-img-3').css({ display: 'block' })
    $('#mob-sub-img-3').css({ display: 'none' })
    $('#mob-subcard-3').css({ display: 'flex' })
    $('#mob-submaincard-3').css({ display: 'none' })
    $('.mob-dots').css({ display: 'flex' })
    $('#mob-sub-arrow-3').css({ display: 'none' })
}

function mobmaincardclick1() {
    $('#mob-maincard-1').css({ display: 'block' })
    $('#mob-card-1').css({ display: 'none' })
}

function mobmaincardclick2() {
    $('#mob-maincard-2').css({ display: 'block' })
    $('#mob-card-2').css({ display: 'none' })
}

function mobmaincardclick3() {
    $('#mob-maincard-3').css({ display: 'block' })
    $('#mob-card-3').css({ display: 'none' })
}

function mobmaincardhide1() {
    $('#mob-maincard-1').css({ display: 'none' })
    $('#mob-card-1').css({ display: 'block' })
}

function mobmaincardhide2() {
    $('#mob-maincard-2').css({ display: 'none' })
    $('#mob-card-2').css({ display: 'block' })
}

function mobmaincardhide3() {
    $('#mob-maincard-3').css({ display: 'none' })
    $('#mob-card-3').css({ display: 'block' })
}

//  id="mob-arrow-1" onmouseenter="mobarrowmouseenter()" onmouseleave="mobarrowmouseleave()"
// function mobarrowmouseenter() {
//     $('#mob-arrow-1').css({ transform: 'rotate(-45deg)' })
//     $('#mob-arrow-2').css({ transform: 'rotate(-45deg)' })
//     $('#mob-arrow-3').css({ transform: 'rotate(-45deg)' })
// }

// function mobarrowmouseleave() {
//     $('#mob-arrow-1').css({ transform: 'rotate(0deg)' })
//     $('#mob-arrow-2').css({ transform: 'rotate(0deg)' })
//     $('#mob-arrow-3').css({ transform: 'rotate(0deg)' })
// }
