document.addEventListener('mousemove', function(me) {
    $('#cursor').css({ left: me.clientX, top: me.clientY })
})

function mobmenuclick() {
    $('.mob-icon-left').toggleClass('toggleLeft')
    $('.mob-icon-left').toggleClass('toggleLeft-alt')
    $('.mob-icon-right').toggleClass('toggleRight')
    $('.mob-icon-right').toggleClass('toggleRight-alt')
}

function mobarrowleft1() {
    $('#mob-card-1').css({ display: 'none' })
    $('#mob-card-2').css({ display: 'none' })
    $('#mob-card-3').css({ display: 'block' })
    $('#mobarrowleft-3').css({ opacity: '1' })
    $('#mobarrowright-3').css({ opacity: '50%' })
}

function mobarrowleft2() {
    $('#mob-card-1').css({ display: 'block' })
    $('#mob-card-2').css({ display: 'none' })
    $('#mob-card-3').css({ display: 'none' })
    $('#mobarrowleft-1').css({ opacity: '50%' })
    $('#mobarrowright-1').css({ opacity: '1' })
}

function mobarrowleft3() {
    $('#mob-card-1').css({ display: 'none' })
    $('#mob-card-2').css({ display: 'block' })
    $('#mob-card-3').css({ display: 'none' })
    $('#mobarrowleft-2').css({ opacity: '1' })
    $('#mobarrowright-2').css({ opacity: '1' })
}

function mobarrowright1() {
    $('#mob-card-1').css({ display: 'none' })
    $('#mob-card-2').css({ display: 'block' })
    $('#mob-card-3').css({ display: 'none' })
    $('#mobarrowleft-2').css({ opacity: '1' })
    $('#mobarrowright-2').css({ opacity: '1' })
}

function mobarrowright2() {
    $('#mob-card-1').css({ display: 'none' })
    $('#mob-card-2').css({ display: 'none' })
    $('#mob-card-3').css({ display: 'block' })
    $('#mobarrowleft-3').css({ opacity: '1' })
    $('#mobarrowright-3').css({ opacity: '50%' })
}

function mobarrowright3() {
    $('#mob-card-1').css({ display: 'block' })
    $('#mob-card-2').css({ display: 'none' })
    $('#mob-card-3').css({ display: 'none' })
    $('#mobarrowleft-1').css({ opacity: '50%' })
    $('#mobarrowright-1').css({ opacity: '1' })
}

function mobcardclick1() {
    $('#mob-img-1').css({ display: 'none' })
    $('#mob-sub-img-1').css({ display: 'block' })
    $('#mob-subcard-1').css({ display: 'none' })
    $('#mob-submaincard-1').css({ display: 'block' })
    $('.mob-dots').css({ display: 'none' })
    $('#mob-sub-arrow-1').css({ display: 'block' })
}

function mobcardhide1() {
    $('#mob-img-1').css({ display: 'block' })
    $('#mob-sub-img-1').css({ display: 'none' })
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
