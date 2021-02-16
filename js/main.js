$(document).ready(function(){
    var speed = 1000;
    var easing = 'swing';
    var btn = '.main .click';

    $(btn).click(function(){

        var pageHeight = $('.main').outerHeight();
        $('html, body').animate({
            scrollTop: pageHeight
        },speed,easing);

    });

});