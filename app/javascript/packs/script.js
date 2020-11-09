$(document).ready(function(){

    //header fixed on scroll
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }
    });
    
    // mobileNav
    $('.js-mobile-btn').click(function(e){
        e.preventDefault();
        $('.js-header-mobile').toggleClass('active');
    });
    
    //slick(frontFace slide)
   /* $('.js-frontFace-slide').slick({
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    
    //fancybox
    $(".single_img").fancybox({
        helpers : {
            title : {
                type : 'over'
            }
        }
    });*/
    
    /**
    **panier
    **/
    //increment input number
    $('body').on('click', '[class*="js-calc-"]', function(){
        var btn = $(this);
        var value = btn.siblings('input').val();
        if(btn.hasClass('js-calc-plus')){
            var newValue = parseInt(value) + 1;
        }else{
            var newValue = parseInt(value) - 1;
        }
        btn.siblings('input').val(newValue);
    });
    
    
    //tab
    $('body').on('click', '.i-tabs-nav>li>a', function(e){
        e.preventDefault();
        let link = $(this);
        let tabs = link.closest('.i-tabs');
        let IdActiveBlock = link.attr('href');
        link.addClass('active').closest('li').addClass('active').siblings().removeClass('active').find('a').removeClass('active');
        $(IdActiveBlock).addClass('active').siblings().removeClass('active');
    });
    
    //system gris
    $("#btn_line").click(function(){
        $(".p__item").addClass('active');
        $(".p_desc").removeClass('active');
    });
    
    $("#btn_card").click(function(){
        $(".p__item").removeClass('active');
        $(".p_desc").addClass('active');
    });
    
    });