var toggleBtnOpen = document.querySelector("#navbar-responsive-toggle-open");
var toggleBtnClose = document.querySelector("#navbar-responsive-toggle-close");
var responsiveNav = document.querySelector("div.overlay");
var navContentContainer = document.querySelector(".overlay-container");
var body = document.querySelector("body");

// If toggle open btn exist run this code
if (toggleBtnOpen) {
    // Add click listener for the toggle open button
    toggleBtnOpen.addEventListener("click", function() {
            //set the responsiveNav animation name to open
            responsiveNav.style.animationName = "open-res-nav";
            //set the showNavContent animation name to true
            navContentContainer.style.animationName = "showNavContent";
            console.log("Display");
            //set the body scroll feature to dont allow
            body.style.overflow = "hidden"
            //set the responsiveNav display to show
            responsiveNav.style.display = "block";
            //set the toggle on btn display to hidden
            toggleBtnOpen.style.display = "none";
            //set the toggle on btn display to show
            toggleBtnClose.style.display = "block";
            // setTimeout(function(){ navContentContainer.style.display = "block"; }, 500);
    });
}
// If toggle close btn exist run this code
if (toggleBtnClose) {
    // Add click listener for the toggle close button
    toggleBtnClose.addEventListener("click", function() {
        //set the responsiveNav animation name to close
            responsiveNav.style.animationName = "close-res-nav";
            //set the showNavContent animation name to false
            navContentContainer.style.animationName = "hideNavContent";
            console.log("Hide");
            //set the body scroll feature to allow
            body.style.overflow = "scroll"
            //set the toggle on btn display to show
            toggleBtnOpen.style.display = "block";
            //set the toggle on btn display to hidden
            toggleBtnClose.style.display = "none";
            // navContentContainer.style.display = "none";

            // create a delay for hiding the overlay to match the duration of the animation
            setTimeout(function(){
                 responsiveNav.style.display = "none"; 
                }, 500);
    });
}


var landingNav = document.querySelector(".landing-nav");
var open = document.querySelector("#landing-nav__open");
var close = document.querySelector("#landing-nav__close");
var text = document.querySelector("#landing-nav__list");
var social = document.querySelector("#landing-nav-social-container");
var backArrow = document.querySelector("#landing-nav__close");

if(open) {
    open.addEventListener("click", function() {
        // landingNav.classList.add("active")
        landingNav.style.animationName = "openNav";
        landingNav.style.display = "block";
        open.style.display = "none"
        close.style.display = "block"
        setTimeout(function(){
            text.style.display = "block";
            social.style.display = "flex";
            backArrow.style.display = "block";
           }, 700);
    })
}

if (close) {
    close.addEventListener("click", function() {
        // landingNav.classList.remove("active")
        landingNav.style.animationName = "closeNav";
        
        // create a delay for hiding the nav/elements to match the duration of the animation
        setTimeout(function(){
            landingNav.style.display = "none";
            open.style.display = "block";
            text.style.display = "none";
            social.style.display = "none";
            backArrow.style.display = "none";
           }, 700);
    
           setTimeout(function(){
            open.style.display = "block";
           }, 400);
        close.style.display = "none"
        
    })
}
