var btn = document.getElementById('btn') ;
    
btn.onclick = function(){
    namee = document.getElementById('name').value ,
    email = document.getElementById('email').value,
    cell = document.getElementById('tele').value ,
     meg = document.getElementById('mesg').value;
    if(namee !="" && email !="" && cell !="" && meg !=""){
        alert("Message est envoyer avec succes ");
    }
};

//////////////////////////////////////////////////////////////////////////////
const li1 = document.getElementById("notreMession-Li");
const li2 = document.getElementById("service-Li");
const li3 = document.getElementById("pricing-Li");
const li4 = document.getElementById("testMonial-Li");
const li5 = document.getElementById("contact-Li");
const notreMession = $("#notreMession").offset().top;
const service = $("#service").offset().top;
const pricing = $("#pricing").offset().top;
const testMonial = $("#testMonial").offset().top;
const contact = $("#contact").offset().top;
window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (notreMession <= scrolled) {
        $(".nav-link").removeClass("active");
        $(li1).addClass("active"); console.log(scrolled + " -------> " + notreMession);
    } if (service <= scrolled) {
        $(".nav-link").removeClass("active");
        $(li2).addClass("active"); console.log(scrolled + " -------> " + service);
    } if (pricing <= scrolled) {
        $(".nav-link").removeClass("active");
        $(li3).addClass("active"); console.log(scrolled + " -------> " + pricing);
    } if (testMonial <= scrolled) {
        $(".nav-link").removeClass("active");
        $(li4).addClass("active"); console.log(scrolled + " -------> " + testMonial);
    } if (contact <= scrolled) {
        $(".nav-link").removeClass("active");
        $(li5).addClass("active"); console.log(scrolled + " -------> " + contact);
    }
    console.log(scrolled + " -------> " + notreMession);
});

$(function () {
    'use strict';
    //I will get height of element window , upperHeader and navBar

  

    var WinH = $(window).height(), Upper = $(".upper-header").innerHeight(), navbar = $(".navbar").innerHeight();
    $(".slider  ,.carousel-item").innerHeight(WinH - (Upper + navbar));

    //will add  opacity of element not select in section Features work
    //first step iw ill get element click
    $(".feature-work li").on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        var data = $(this).data("class");
        if (data == "ALL") {
            console.log(data);
            $(".feature-work .row img").parent().css("opacity", 1);

        } else {
            $(".feature-work .row img").parent().css("opacity", 0.3);
            $(".feature-work .row img"+data).parent().css("opacity", 1);

        }
    });

    $('.navbar li a').click(function(e){
        e.preventDefault();
        $('html , body').animate({

            scrollTop:$('#' +$(this).data('scroll')).offset().top

        },1050)
    });
    $('.en a').click(function(e){
        e.preventDefault();
        $('html , body').animate({

            scrollTop:$('#' +$(this).data('scroll')).offset().top

        },1050)
    });



    

});


$(document).ready(function(){
    'use strict';
$(window).scroll(function(){
    if($(this).scrollTop() > 40)
    {
         $('#tpbtn').fadeIn();
    }
    else
    {
        $('#tpbtn').fadeOut();
    }
});

$("#tpbtn").on('click',function(){
    $('html,body').animate({scrollTop: 0},800);
});

$(".nav-link").removeClass("active");
    $(".nav-link").click(function (e) {
       // e.preventDefault();
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
        $(".nav-link").css("color", "#fff");

    });

});


/*Spenner */
$(window).on("load",function(){
    'use strict'
    $("body").css("overflow","auto");
    $(".loading-screen").fadeOut(1000 , function(){
      $(this).remove();
    });
  });


  







