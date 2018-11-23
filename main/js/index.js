var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项

    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        progressbarOpposite: true,
    },
    on: {
        init: function () {
            swiperAnimateCache(this); //隐藏动画元素 
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function () {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});

var x = document.getElementById("media");
$(function () {
    $("#audio_btn").click(function () {
        $(this).toggleClass("rotate");  //控制音乐图标自转或暂停
        //控制背景音乐播放或暂停            
        if ($(this).hasClass("rotate")) {
            x.play();
        } else {
            x.pause();
        }
    })
});
