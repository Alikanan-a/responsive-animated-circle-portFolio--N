
// /*=============== sticky navbar ===============*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach( sec => {
    let top = window.screenY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        // console.log('hello')
       links.classList.remove('active');
       document.querySelector('header nav a[href*='+id+']').classList.add('active');
      });
    };
  });
// /*=============== sticky navbar ===============*/
let header = document.querySelector('.header');
header.classList.toggle('sticky',window.scrollY > 100);
};
// /*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})


// /*=============== sticky navbar ===============*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor : true ,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// console.log('hello')
// <!--=============== colors ===============-->
const blue = document.querySelector('#blue')
const purple = document.querySelector('#purple')
const pink = document.querySelector('#pink')
const teal = document.querySelector('#teal')
const red = document.querySelector('#red')
const orange = document.querySelector('#orange')
const brown = document.querySelector('#brown')
const gray = document.querySelector('#gray')
const body = document.querySelector('body')

$(function () {
  $('body').mousemove(function(){
    console.log('hellooooooooooooooo')
  })
  console.log('hello')
  $(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });
  $('#purple').click(function (e) {
    e.preventDefault()
    $("body").removeClass('blue');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('purple')
    console.log('hello')
  })
  $('#blue').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('blue')
  })
  $('#pink').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('blue');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('pink')
  })
  $('#teal').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('blue');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('teal')
  })
  $('#red').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('blue');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('red')
  })
  $('#orange').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('blue');
    $("body").removeClass('brown');
    $("body").removeClass('gray');
    $('body').addClass('orange')
  })
  $('#brown').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('blue');
    $("body").removeClass('gray');
    $('body').addClass('brown')
  })
  $('#gray').click(function (e) {
    e.preventDefault()
    $("body").removeClass('purple');
    $("body").removeClass('pink');
    $("body").removeClass('teal');
    $("body").removeClass('red');
    $("body").removeClass('orange');
    $("body").removeClass('brown');
    $("body").removeClass('blue');
    $('body').addClass('gray')
  })
  console.log('hello')
})




let menuIcon = document.querySelector('#menu_icon i');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
  
}
$(function () {
  $('.bx-menu').click(function (e) {
    $(header).css("background-color", "var(--back-ground-color)");
    // $(header).css("background-color", "transparent");
    })
  $('.bx-x').click(function (e) {
    $(header).css("background-color", "transparent");
    // $(header).css("background-color", "transparent");
    })
})