

var h=$(window).height();

$(document).on('ready',function(){
    // alert(h);
    $('.groupSection').css('height',h);

    $('.groupTable').css('height',h-100)
});