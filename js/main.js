/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const header = document.getElementById('header')
        // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') :
        header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)
bgHeader()








/*=============== SHOW SCROLL UP ===============*/

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/**
 * filter function
 */


let swiperCards; // إعلان المتغير بشكل عام

document.addEventListener('DOMContentLoaded', function() {
    swiperCards = new Swiper(".card__content", {
        loop: true,
        spaceBetween: 32,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 5000, // الوقت بالميلي ثانية (5000ms يعني 5 ثوانٍ)
            disableOnInteraction: false, // استمرار التشغيل التلقائي حتى بعد التفاعل
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
            },
            968: {
                slidesPerView: 3,
            },
        }
    });
});



/*=============== SCROLL REVEAL ANIMATION ===============*/
function sendMessage() {
    // الحصول على البيانات من النموذج
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var category = document.getElementById('category').value;
    var message = document.getElementById('message').value;

    // تكوين النص الذي سيتم إرساله عبر واتساب
    var text = `*New Message from Website*\n\n*Name:* ${name}\n*Email:* ${email}\n*Date:* ${date}\n*Category:* ${category}\n*Message:* ${message}`;

    // رابط واتساب لإرسال الرسالة
    var whatsappUrl = `https://wa.me/2012000181164?text=${encodeURIComponent(text)}`;

    // إعادة توجيه المستخدم إلى رابط واتساب
    window.open(whatsappUrl, '_blank');
}