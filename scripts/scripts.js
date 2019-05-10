$(document).ready(function(){
	$('#nav-icon4').click(function(){
        $(this).toggleClass('open');
        $('#sideBar').toggleClass('moveSideBar');
        $(".navbar").toggleClass('makeStaticNav');
        $('#openToggleIcon').toggleClass('makeFixed');
        $('.languageOptions').toggleClass('toNone');
       
    });
    
});


function myfunc(){
    let a=document.getElementById("contacts");
    a.scrollIntoView();
    $('#nav-icon4').toggleClass('open');
    $('#sideBar').toggleClass('moveSideBar');
    $(".navbar").toggleClass('makeStaticNav');
    $('#openToggleIcon').toggleClass('makeFixed');
    $('.languageOptions').toggleClass('toNone');
 }

 function myfunc2(){
    window.location.href = "index.html";
 }

// navbar
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 1){
        $('.navbar').css('background', 'transparent');
        $('.navbar').css('box-shadow', '0px transparent');
        $('.navbar').css('box-shadow', '0px 0px 0px transparent');


        // $('.navbar').css('margin-top','60px')
        // $('.navbar').css('box-shadow','0px 2px gray')
    }else{
        $('.navbar').css('background', 'white');
        $('.navbar').css('margin-top', '0');
        $('.navbar').css('transition', '1s ease-in-out');
        $('.navbar').css('box-shadow', '0 1px 3px rgba(0,0,0,.08), 0 3px 5px rgba(0,0,0,.15)');
        
        // $('#nav-icon4 span').css('color:black');
        // $('.navbar').css('box-shadow', '0 1px 3px rgba(0,0,0,.08), 0 3px 5px rgba(0,0,0,.15');
    }
});


//   sidebar
let openToggleIcon = document.getElementById("openToggleIcon");
let openToggleIcon1 = document.getElementById("openToggleIcon1");
let openToggleIcon2 = document.getElementById("openToggleIcon2");
let closeToggleIcon =document.getElementById("closeToggleIcon");
let sideBar = document.getElementById("sideBar");
let closeToggleIcon1 = document.getElementById("closeToggleIcon1");
let closeToggleIcon2 = document.getElementById("closeToggleIcon2");
let servicesButton = document.getElementById("servicesButton");
let servicesSubCategories = document.getElementById("servicesSubCategories");



// sidebar
let homeButton = document.getElementById("homeButton").addEventListener("click",function(){
    window.location.href='index.html';
    sideBar.style.visibility="hidden";
});




// socials
let facebook = document.getElementById("facebook");
let instagram = document.getElementById("instagram");
let youtube = document.getElementById("youtube");

facebook.addEventListener("click",function(){
    window.location.href='http://www.facebook.com';
})
instagram.addEventListener("click",function(){
    window.location.href='http://www.instagram.com';
})
youtube.addEventListener("click",function(){
    window.location.href='http://www.youtube.com';
})






// work section responsiveness
var workScreen = window.matchMedia("(max-width:700px)");
let bigImageOverlay1 =document.getElementById("filmPhoto");
let bigImageOverlay2 =document.getElementById("image06");
let smallImagesRight =document.getElementById("smallImagesRight");
let smallImagesLeft =document.getElementById("work-overlay");


let zoomImage =document.getElementById("zoomImage");

zoomImage.addEventListener("click",function(){
    zoomImage.style.height="100vh";
    zoomImage.style.width="auto";
    zoomImage.style.zIndex="999999";
})


