setTimeout(function(){
   $('.opacity-01').css({
      opacity: '1'
   },1300)
},1500);



setTimeout(function(){
    $('.opacity-02').css({
       opacity: '1'
    },1600)
 },1800);


 setTimeout(function(){
    $('.opacity-03').css({
       opacity: '1'
    },1900)
 },2100);


 setTimeout(function(){
    $('.opacity-04').css({
       opacity: '1'
    },2200)
 },2400);



$("#intro").delay(3500).fadeOut(2000);


$(document).ready(function () {


    // 

    $('.top-bt-img').hover(
        function () {
            $(this).attr('src', "img/ps-top-bt-active.png")
        },
        function () {
            $(this).attr('src', "img/ps-top-bt-inactive.png")
        }
    );


    // main-ps logo active
    $('.img-logo').hover(
        function () {
            $(this).attr('src', "img/playstation-logo-active.png")
        },
        function () {
            $(this).attr('src', "img/playstation-logo.png")
        }
    );

    $('.ps-controller').hover(
        function () {
            $(this).attr('src', "img/playstation-controller-active.png")
        },
        function () {
            $(this).attr('src', "img/playstation-controller.png")
        }
    );


    $('.ps-headset').hover(
        function () {
            $(this).attr('src', "img/playstation-headset-active.png")
        },
        function () {
            $(this).attr('src', "img/playstation-headset.png")
        }
    );


    $('.ps-vr').hover(
        function () {
            $(this).attr('src', "img/playstation-vr-active.png")
        },
        function () {
            $(this).attr('src', "img/playstation-vr.png")
        }
    );


    $('.ps-pluse').hover(
        function () {
            $(this).attr('src', "img/playstation-pluse-active.png")
        },
        function () {
            $(this).attr('src', "img/playstation-pluse.png")
        }
    );



    $('.play-button').hover(
        function () {
            $(this).attr('src', "img/play-button-actrive.png")
        },
        function () {
            $(this).attr('src', "img/play-button-inactive.png")
        }
    );





    $(".game-list-wrap .tab label").click(function(){
        $(this).addClass("on");
        $(this).siblings().removeClass("on");

        if ($(".game-list-wrap .tab label:nth-of-type(1)").hasClass("on")) {
            $(".game-list-wrap .content .content-box-02").removeClass("on");
            $(".game-list-wrap .content .content-box-01").addClass("on");
        }
        else if ($(".game-list-wrap .tab label:nth-of-type(2)").hasClass("on")) {
            $(".game-list-wrap .content .content-box-01").removeClass("on");
            $(".game-list-wrap .content .content-box-02").addClass("on");
        }

    });


    $('.instagram-img').hover(
        function () {
            $(this).attr('src', "img/insta-icon-active.png")
        },
        function () {
            $(this).attr('src', "img/insta-icon-inactive.png")
        }
    );


$('.twitter-img').hover(
    function () {
        $(this).attr('src', "img/twitter-active.png")
    },
    function () {
        $(this).attr('src', "img/twitter-inactive.png")
    }
);


$('.face-book-img').hover(
    function () {
        $(this).attr('src', "img/facebook-active.png")
    },
    function () {
        $(this).attr('src', "img/facebook-inactive.png")
    }
);



$('.youtube-img').hover(
    function () {
        $(this).attr('src', "img/youtube-active.png")
    },
    function () {
        $(this).attr('src', "img/youtube-inactive.png")
    }
);

});

$(function () {
    // bx-slider 시작!
    $('.slide-container').bxSlider({
        mode: 'horizontal',         // 페이드 효과로 슬라이드   : 'horizontal', 'vertical', 'fade'
        captions: false,             // 이미지 하단의 제목 // html 에 이미지 타이틀에 있는 텍스트
        auto: true,                 // 자동재생
        pause: 3200,                // 슬라이드 당 재생 시간 (ms)
        autoControls: false,         // 재생버튼, 중지버튼
        stopAutoOnClick: false,      // 클릭할 때, 자동재생 멈춤
        pager: true,                // 페이지네이션 (밑 하단 닷츠 네비게이션)
        speed: 1900,                // 슬라이드가 전환되는 시간 (ms)
        keyboardEnabled: true,      // 키보드 사용가능 여부
        autoHover: true,            //논리 슬라이드에 마우스 호버시 애니메이션 정지 여부
        moveSlides: 1,     // 슬라이드 이동시 개수
        slideWidth: 1000,   // 슬라이드 너비
        minSlides: 2,      // 최소 노출 개수
        maxSlides: 2,      // 최대 노출 개수
    });


});


$(function () {
    $('.ps_accessories_container').bxSlider({
        mode: 'horizontal',         // 페이드 효과로 슬라이드   : 'horizontal', 'vertical', 'fade'
        captions: false,             // 이미지 하단의 제목 // html 에 이미지 타이틀에 있는 텍스트
        auto: true,                 // 자동재생
        pause: 3200,                // 슬라이드 당 재생 시간 (ms)
        autoControls: false,         // 재생버튼, 중지버튼
        stopAutoOnClick: false,      // 클릭할 때, 자동재생 멈춤
        pager: true,                // 페이지네이션 (밑 하단 닷츠 네비게이션)
        speed: 1900,                // 슬라이드가 전환되는 시간 (ms)
        keyboardEnabled: true,      // 키보드 사용가능 여부
        autoHover: true,            //논리 슬라이드에 마우스 호버시 애니메이션 정지 여부
        moveSlides: 1,     // 슬라이드 이동시 개수
        slideWidth: 1900,   // 슬라이드 너비
        minSlides: 1,      // 최소 노출 개수
        maxSlides: 1,      // 최대 노출 개수
        controls: false,

    });
});




$(function () {
    $('.ps-this-month-container').bxSlider({
        mode: 'horizontal',         // 페이드 효과로 슬라이드   : 'horizontal', 'vertical', 'fade'
        captions: false,             // 이미지 하단의 제목 // html 에 이미지 타이틀에 있는 텍스트
        auto: true,                 // 자동재생
        pause: 3200,                // 슬라이드 당 재생 시간 (ms)
        autoControls: false,         // 재생버튼, 중지버튼
        stopAutoOnClick: false,      // 클릭할 때, 자동재생 멈춤
        pager: false,                // 페이지네이션 (밑 하단 닷츠 네비게이션)
        speed: 1900,                // 슬라이드가 전환되는 시간 (ms)
        keyboardEnabled: true,      // 키보드 사용가능 여부
        autoHover: false,            //논리 슬라이드에 마우스 호버시 애니메이션 정지 여부
        moveSlides: 3,     // 슬라이드 이동시 개수
        slideWidth: 1900,   // 슬라이드 너비
        minSlides: 3,      // 최소 노출 개수
        maxSlides: 3,      // 최대 노출 개수
        controls: false,

    });
});




// playstaion-merchandise-box

$(function () {
    $('.playstaion-merchandise-box').bxSlider({
        mode: 'horizontal',         // 페이드 효과로 슬라이드   : 'horizontal', 'vertical', 'fade'
        captions: false,             // 이미지 하단의 제목 // html 에 이미지 타이틀에 있는 텍스트
        auto: true,                 // 자동재생
        pause: 3200,                // 슬라이드 당 재생 시간 (ms)
        autoControls: false,         // 재생버튼, 중지버튼
        stopAutoOnClick: false,      // 클릭할 때, 자동재생 멈춤
        pager: false,                // 페이지네이션 (밑 하단 닷츠 네비게이션)
        speed: 1900,                // 슬라이드가 전환되는 시간 (ms)
        keyboardEnabled: true,      // 키보드 사용가능 여부
        autoHover: false,            //논리 슬라이드에 마우스 호버시 애니메이션 정지 여부
        moveSlides: 3,     // 슬라이드 이동시 개수
        slideWidth: 490,   // 슬라이드 너비
        minSlides: 3,      // 최소 노출 개수
        maxSlides: 3,      // 최대 노출 개수
        controls: false,

    });
});

