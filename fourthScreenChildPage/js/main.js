$(function () {
    //导航栏动画
    $('.nav li').mouseenter(function () {
        $(this).children('.child-nav').show();
        $(this).find('.spot i').eq(0).stop().animate({ left: 0 }, 1000);
        $(this).find('.spot i').eq(1).stop().animate({ bottom: -22 }, 1000);
    })

    $('.nav li').mouseleave(function () {
        $(this).children('.child-nav').hide();
        $(this).find('.spot i').eq(0).stop().animate({ left: 100 + '%' }, 1000);
        $(this).find('.spot i').eq(1).stop().animate({ bottom: 100 + '%' }, 1000);
    })

    //侧边导航展开及隐藏
    $(".menu-box").click(function () {
        $(".black-box").show();
        $(".nav-main").stop().animate({ marginLeft: 0, }, 500);

        //展开侧边栏,主页面往右移动100
        $(".main").stop().animate({ marginLeft: 100, }, 500);
        event.stopPropagation(); //阻止冒泡
    })

    $(".black-box").click(function () {
        $(".black-box").fadeOut(500);
        $(".nav-main").stop().animate({ marginLeft: -100, }, 500);

        //隐藏侧边栏,主页面往左移动100
        $(".main").stop().animate({ marginLeft: 0, }, 500);
    })

    //侧边导航二级菜单
    var thisTime;//定义  定时器

    function thisMouseOut() {
        $('.nav-slide').removeClass('hover');
    }
    //鼠标离开侧边栏一级导航   开启定时器   移除二级导航的hover样式
    $('.nav-ul li').mouseleave(function (even) {
        thisTime = setTimeout(thisMouseOut, 1000);
    })

    $('.nav-ul li').mouseenter(function () {
        clearTimeout(thisTime);
        var thisUB = $('.nav-ul li').index($(this));
        //鼠标移入侧边栏一级导航    判断二级导航是否为空    
        //不为空则显示二级导航
        if ($.trim($('.nav-slide-o').eq(thisUB).html()) != "") {
            $('.nav-slide').addClass('hover');
            $('.nav-slide-o').hide();
            $('.nav-slide-o').eq(thisUB).show();
        }
        else {
            $('.nav-slide').removeClass('hover');
        }

    })

    //侧边栏二级导航  显示列表   

    $(".nav-slide-o > ul > li").mouseenter(function () {
        $(this).children(".child-menu").show();
    })

    $(".nav-slide-o > ul > li").mouseleave(function () {
        $(this).children(".child-menu").hide();
    })

    //鼠标移入侧边栏二级导航  关闭定时器  重新给二级导航添加hover
    $('.nav-slide').mouseenter(function () {
        clearTimeout(thisTime);
        $('.nav-slide').addClass('hover');
    })

    $('.nav-slide').mouseleave(function () {
        $('.nav-slide').removeClass('hover');
    })
})