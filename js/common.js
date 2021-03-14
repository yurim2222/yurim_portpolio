// common_titlebg
$(document).ready(function(){

    var title = 'h2';
    $(title).addClass('active');

});


//portpolio
$(document).ready(function(){
    var list = '.project_list li';
    var view = '.project_intro > li';
    var btn = '.cbtn';

    $(list).find('a').click(function(){
        $(btn).addClass('active');
        var index = $(this).parent().index();
        $(view).eq(index).addClass('active');
    });

    $(btn).click(function(){
        $(this).removeClass('active');
        $(view).removeClass('active');
    })
});