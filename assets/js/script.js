
    $(".main-cat").hover(
        function () {
          $(this).addClass('active-menu');
          //$(this).parent().addClass('active');
          //$(this).find(".main-cat").addClass('active-menu');
        }, 
        function () {
          $(this).removeClass('active-menu');
        }
        );

$(function(){
          $(".main-slider").slick({
            infinite: true,
            variableWidth: true,
            dots: true,
            arrows: false
            /* prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fas fa-arrow-circle-left'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fas fa-arrow-circle-right'></i></button>" */
          });
        });
$(function(){
    $('.promo-slider').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false
        });        

});
$(function(){
    $('.bestseller-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>"
        });
    
});
$(function(){
    $('.logo-slider').slick({
        infinite: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:"<button type='button' class='slick-min-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
        nextArrow:"<button type='button' class='slick-min-next pull-right'><i class='fas fa-chevron-right'></i></button>"
        });
});

