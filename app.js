
let userAccordion = document.querySelector('.user-accordion')
let cartAccordion = document.querySelector('.cart-accordion')
let searchAccordion = document.querySelector('.search-accordion')
let mobileSideMenu = document.querySelector('.mobile-side-menu')
let mobileMenu = document.querySelector('.mobile-menu')


var isActive1 = true;
var isActive2 = true;
var isActive3 = true;

function removeClass() {
    let arr = [userAccordion,cartAccordion,searchAccordion];
     [...arr].forEach(element => {
        element.classList.remove('active')
     });
    
}

// for search accordion function
function searchAccordionFunc () {
    removeClass()
    if(isActive3){
        searchAccordion.classList.add('active')
        isActive1 = true
        isActive2 = true
    } 
}
// for close search accordion
function closeSearchAccordionFunc() {
    searchAccordion.classList.remove('active')
}

// for user accordion function
function userAccordionFunc () {
  
   if(isActive1){
    removeClass()
       userAccordion.classList.add('active')
       isActive1 = false
       isActive2 = true
       isActive3 = true
   } else {
    userAccordion.classList.remove('active')
    isActive1 = true
   }
}

// for cart accordion fnctino

    function cartAccordionFunc () {
        
        if(isActive2) {
            removeClass()
             cartAccordion.classList.add('active')
             isActive2 = false
             isActive1 = true
             isActive3 = true
        } else {
            cartAccordion.classList.remove('active')
            isActive2 = true
        }
    }

    // for change product image
    function changeImage (e,path) {
        let productMainDiv = e.target.parentElement.closest('.product-wrapper')
        let  productImageDiv = productMainDiv.querySelector('.img-box')
        let productImg = productImageDiv.querySelector('.width')
        productImg.src = path
        ;[...e.target.parentElement.parentElement.children].forEach((elm) => {
            elm.classList.remove('borderd')
        })
        e.target.parentElement.classList.add('borderd')
    }

    // for toggle mobile menu
    function menuOpenFunc () {
        mobileSideMenu.classList.add('active-menu')
    }

    function closeMobileMenuFunc() {
        mobileSideMenu.classList.remove('active-menu')
    }

    // for closing mobile menu on large screen
    window.addEventListener('resize',() => {
        if(window.innerWidth > 1025) {
            mobileSideMenu.classList.remove('active-menu')
        }
    })


$(document).ready(function() {
    let navbar = document.querySelector('.navbar')
    window.addEventListener('scroll',(e) => {
        let scrollTop = document.documentElement.scrollTop
        if(scrollTop > 90) {
            navbar.classList.add('navbar-fixed')
            // mobileMenu.classList.add('navbar-fixed')
        } 
        if(scrollTop === 0){
            navbar.classList.remove('navbar-fixed')
            // mobileMenu.classList.remove('navbar-fixed')
            removeClass()
        }
    })

    $('.slider').slick({

        arrows:false,
        dots:true,
        autoplay:true,
        appendDots:'.slider-dots',
    })


})