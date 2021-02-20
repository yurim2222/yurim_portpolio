$(document).ready(function(){
    var page01 = '.main';
    var page02 = '#list';
        var h = $(window).height();
        $(page01).outerHeight(h);
        $(page02).outerHeight(h);
});


$(document).ready(function(){
    var speed = 1000;
    var easing = 'swing';
    var bbtn = '.main .click';

    $(bbtn).click(function(){

        var pageHeight = $('.main').outerHeight();
        $('html, body').animate({
            scrollTop: pageHeight
        },speed,easing);

    });

});

$(document).ready(function(){
    var speed = 1000;
    var easing = 'swing';
    var tbtn = '#list .arrow a';

    $(tbtn).click(function(){

        $('html, body').animate({
            scrollTop: 0
        },speed,easing);

    });

});