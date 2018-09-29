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

<<<<<<< HEAD
// for pdp page product images slide & thumbnail
$(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    centerMode: false,
    prevArrow: "<i class=\"fas fa-angle-left\" style=\"position: absolute; top: calc(50% - 15px); left: -15px; font-size: 35px; display: inline; color: #555;\"></i>",
    nextArrow: "<i class=\"fas fa-angle-right\" style=\"position: absolute; top: calc(50% - 15px); right: -15px; font-size: 35px; display: inline; color: #555;\"></i>",
    focusOnSelect: true
  });
});
=======
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
    if ($(window).scrollTop() >= 190) {
        $('.sticky-header').addClass('fixed');
        $('.promotion-wrapper').addClass('d-none')
    }
    else {
        $('.sticky-header').removeClass('fixed');
    }
    });

$(document).ready(function() {
        $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
        $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
    }); 
    
    $(document).ready(function() {
        $("#toggle").click(function() {
          var elem = $("#toggle").text();
          if (elem == "Read More") {
            //Stuff to do when btn is in the read more state
            $("#toggle").text("Read Less");
            $("#text").slideDown();
          } else {
            //Stuff to do when btn is in the read less state
            $("#toggle").text("Read More");
            $("#text").slideUp();
          }
        });
      });
      
document.getElementById("showpass").addEventListener("click", function(e){
        var pwd = document.getElementById("InputPassword");
        if(pwd.getAttribute("type")=="password"){
            pwd.setAttribute("type","text");
        } else {
            pwd.setAttribute("type","password");
        }
    });      

>>>>>>> dev
