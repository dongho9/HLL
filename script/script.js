$(document).ready(function(){
    $('.sub').hide();
    $('.gnb button').click(function(){
        $('.gnb > ul').toggleClass('ham');
    })
    $('.gnb > ul > li').mouseover(function(){
        $(this).find('.sub').show();
    })
    $('.gnb > ul > li').mouseleave(function(){
        $(this).find('.sub').hide();
    })

    function mobile(){
            if(window.innerWidth < 768){
                $('.gnb > ul > li').off('mouseover mouseleave'); // 데스크탑 이벤트 제거
                $('.gnb > ul > li').click(function(){
                    $(this).find('.sub').toggle();
                })
            }else{
                $('.gnb > ul > li').off('click');
                $('.gnb > ul > li').mouseover(function(){
                    $(this).find('.sub').show();
                })
                $('.gnb > ul > li').mouseleave(function(){
                    $(this).find('.sub').hide();
                })
            }
    }
    
    mobile();
    
    $(window).resize(function() {
        mobile();
    });
})