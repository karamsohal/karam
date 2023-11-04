$(function(){
    $('.accord-list').on('click', '.label', function(e)
    {
        e.preventDefault();
        $(this)
        .next('.info')
        .not(':animated')
        .slideToggle();

        $(this).toggleClass('active');

        const lis = $(this).parent().siblings();
        lis.each((index, li)=>{
            $(li.children[0]).removeClass('active');
            $(li.children[1]).slideUp();
        });
    });

    $('.btn').click((e) => {
        $(e.target).addClass('active');
        $(e.target).siblings().removeClass("active");

        $('.panel').each((index, el) =>{
            if(e.target.id[4] == index+1){
                $(el).show().addClass('active');
            } else {
                $(el).hide().removeClass('active');
            }
        });
    });
    $('.bttn').click((e) => {
        $(e.target).addClass('active');
        $(e.target).siblings().removeClass("active");

        $('.t-panel').each((index, el) =>{
            if(e.target.id[5] == index+1){
                $(el).show().addClass('active');
            } else {
                $(el).hide().removeClass('active');
            }
        });
    });
});