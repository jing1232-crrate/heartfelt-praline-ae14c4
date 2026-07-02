//========================
// Sticky Navbar
//========================

window.addEventListener("scroll",function(){

const navbar=document.querySelector(".navbar");

if(window.scrollY>60){

navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";

}else{

navbar.style.boxShadow="none";

}

});

//========================
// Smooth Scroll
//========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});



/*==========================
CORE VALUE SWIPER
==========================*/

const valueSwiper = new Swiper(".valueSwiper", {

    loop: true,

    speed: 700,

    spaceBetween: 25,

    slidesPerView: 3,

    navigation: {

        nextEl: ".swiper-button-next",

        prevEl: ".swiper-button-prev",

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true,

    },

    autoplay: {

        delay: 3500,

        disableOnInteraction: false,

    },

    breakpoints: {

        0: {

            slidesPerView: 1,

        },

        768: {

            slidesPerView: 2,

        },

        1100: {

            slidesPerView: 3,

        }

    }

});

/*==========================
Mouse Glow
==========================*/

const glow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});