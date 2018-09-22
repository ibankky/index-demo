$(function(){
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
    });
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

function opensubcate(evt, roomName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(roomName).style.display = "block";
    evt.currentTarget.className += " active";
} 

$(document).ready(function() {
    $(".megamenu").on("click", function(e) {
        e.stopPropagation();
    });
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 220) {
        $('.sticky-header').addClass('fixed');
        $('.promotion-wrapper').addClass('d-none')
    }
    else {
        $('.sticky-header').removeClass('fixed');
    }
    });

