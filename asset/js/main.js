$(function () {

    loadingTl = gsap.timeline()
    .addLabel("loadingStart")

    loadingTl.to($('.loading-main .line'), .7,{
        xPercent: 100,
    }, 'loadingStart')
    .to($('.loading-main .image'), .7, {
        opacity: 1,
    }, 'loadingStart+=.3')

    .addLabel("loadingEnd", '+=.2')
    .to($('.loading-main .line'), .8, {
        xPercent: 200,
    }, 'loadingEnd')
    .to($('.loading-main .image'), .8, {
        scale: 1.1,
        opacity: 0
    },'loadingEnd')
    .to($('.loading-main'), .8, {
        opacity: 0,
    },'loadingEnd') 
    // 메인로딩이미지



    


    var currentScroll = $(document).scrollTop();
    currentScroll == 0 ? $('.header-main').addClass('transform') : $('.header-main').removeClass('transform');

    $(window).scroll(function () {
        currentScroll = $(document).scrollTop();
        currentScroll == 0 ? $('.header-main').addClass('transform') : $('.header-main').removeClass('transform');
    }) 


    gsap.fromTo($('.title-area em'), .9, {
        opacity: 0,
        y: 10,
    }, {
        opacity: 1,
        y: 0,
        stagger: {
            each: .3
        }
    }) 

    var lastNum = parseInt($('.day-distance span').text()); 


    var startNum = lastNum - (lastNum / 10);

    var count = {
        roll: startNum
    };


    gsap.to(count, 5, {
        roll: lastNum,
        onUpdate: changeNumber,
    });

    function changeNumber() {
        var currentNum = count.roll; 
        var push = parseInt(currentNum).toLocaleString('ko-KR'); 


        $('.day-distance span').text(push)

    }


    gsap.fromTo($('.visual-area p'), 1.2, {
        x: -100,
        delay: 1.6,
        opacity: 0
    }, {
        x: 0,
        opacity: 1
    }) 

})
