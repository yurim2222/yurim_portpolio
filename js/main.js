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

$(document).ready(function(){
    let typingBool = false;
    let typingIdx = 0;
    let liIndex = 0;
    let typingText = ".typingText > ul > li";
    let liLength = $(typingText).length;
    
    let typingTxt = $(typingText).eq(liIndex).text(); //eq: 배열반환
    typingTxt = typingTxt.split(""); //split: 문자열을 분해하여 배열을 반환 => "":한글자씩 자름
    if(typingBool === false){
        typingBool === true;
    }
    let tyInt = setInterval(typing,200);
    
    function typing(){
        if(typingIdx < typingTxt.length){
            $(".typing").append(typingTxt[typingIdx]);
            typingIdx++;
        }else{
            if(liIndex >= liLength-1){
                liIndex=0;
            }else{
                liIndex++;
            }

            typingIdx=0;
            typingBool = false;
            typingTxt = $(typingText).eq(liIndex).text();

            clearInterval(tyInt);
            
            setTimeout(function(){
                $(".typing").html('');
                tyInt = setInterval(typing,200);
            },1000)
        }
    }
});