$(document).ready(function () {

    // activetion owl carusel 

    $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        navClass: ["owlCarusel-nav-left", "owlCarusel-nav-right"],
        responsive: {
            0: {
                items: 1
            },
            862: {
                items: 2
            },
            1250: {
                items: 3
            }
        }
    });

    // burger menu opening

    $(".openMenu, .closeMenu").on("click", function () {
        $(".burgerMenuSection").toggleClass("burgerMenuSwitch");
        $(".burgerMenuSection ul").toggleClass("burgerMenu_ul_switch");
        $(".openMenu").fadeToggle(0);
        $(".closeMenu").fadeToggle(0);
    });

    // set active/nonactive class for TopPicks block 

    $(".TopPicks_iconBlock1").on("click", function () {
        $(".TopPicks_iconBlock1 .iconBlock_animBlock").addClass("iconBlock_animBlock_active");
        $(".TopPicks_iconBlock2 .iconBlock_animBlock").removeClass("iconBlock_animBlock_active");
        $(".TopPicks_iconBlock3 .iconBlock_animBlock").removeClass("iconBlock_animBlock_active");

        $(".TopPicks_offersContainer1").fadeIn(400);
        $(".TopPicks_offersContainer2").fadeOut(400);
        $(".TopPicks_offersContainer3").fadeOut(400);
        $(".TopPicks_offersContainer1").css({
            'display': 'flex'
        });
    });
    $(".TopPicks_iconBlock2").on("click", function () {
        $(".TopPicks_iconBlock2 .iconBlock_animBlock").addClass("iconBlock_animBlock_active");
        $(".TopPicks_iconBlock1 .iconBlock_animBlock").removeClass("iconBlock_animBlock_active");
        $(".TopPicks_iconBlock3 .iconBlock_animBlock").removeClass("iconBlock_animBlock_active");

        $(".TopPicks_offersContainer1").fadeOut(400);
        $(".TopPicks_offersContainer2").fadeIn(400);
        $(".TopPicks_offersContainer3").fadeOut(400);

        $(".TopPicks_offersContainer2").css({
            'display': 'flex'
        });
    });
    $(".TopPicks_iconBlock3").on("click", function () {
        $(".TopPicks_iconBlock3 .iconBlock_animBlock").addClass("iconBlock_animBlock_active");
        $(".TopPicks_iconBlock1 .iconBlock_animBlock").removeClass("iconBlock_animBlock_active");
        $(".TopPicks_iconBlock2 .iconBlock_animBlock").removeClass("iconBlock_animBlock_active");

        $(".TopPicks_offersContainer1").fadeOut(400);
        $(".TopPicks_offersContainer2").fadeOut(400);
        $(".TopPicks_offersContainer3").fadeIn(400);

        $(".TopPicks_offersContainer3").css({
            'display': 'flex'
        });
    });
    
    $(".owlCarouselBlock_wrapper").mouseenter(function(){
        $(this).children(".ownCarusel_Icon").attr("src", "images/UI/Quotation.png");
    });
    $(".owlCarouselBlock_wrapper").mouseleave(function(){
        $(this).children(".ownCarusel_Icon").attr("src", "images/UI/Quotation2.png");
    });




});
