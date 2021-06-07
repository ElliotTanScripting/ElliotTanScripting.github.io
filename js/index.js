const navItems = document.querySelectorAll(".nav_menu ul li a");
function resetNav(){
    // first remove all class 'active' from all nav items
    for (var i = 0; i < navItems.length; i++){
        navItems[i].classList.remove("active");
    }
}

// scrolling 
const findersAbout = document.querySelectorAll(".about_finder");
const findersExperience = document.querySelectorAll(".experience_finder");
const findersLangTools = document.querySelectorAll(".langTools_finder")
const findersPersonal = document.querySelectorAll(".personal_finder");
const findersContact = document.querySelectorAll(".contact_finder");

const nav_options = {
    threshold: 1
};
const observerAbout = new IntersectionObserver(function(entries, observerAbout) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        resetNav();
        document.querySelector("#About_button").classList.add("active")
    })
}, nav_options);
findersAbout.forEach(item => {
    observerAbout.observe(item);
})

const observerExperience = new IntersectionObserver(function(entries, observerExperience) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        resetNav();
        document.querySelector("#Experience_button").classList.add("active")
    })
}, nav_options);
findersExperience.forEach(item => {
    observerExperience.observe(item);
})

const observerLangTools = new IntersectionObserver(function(entries, observerLangTools) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        resetNav();
        document.querySelector("#LangTools_button").classList.add("active")
    })
}, nav_options);
findersLangTools.forEach(item => {
    observerLangTools.observe(item);
})

const observerPersonal = new IntersectionObserver(function(entries, observerPersonal) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        resetNav();
        document.querySelector("#Personal_button").classList.add("active")
    })
}, nav_options);
findersPersonal.forEach(item => {
    observerPersonal.observe(item);
})

const observerContact = new IntersectionObserver(function(entries, observerContact) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        resetNav();
        document.querySelector("#Contact_button").classList.add("active")
    })
}, nav_options);
findersContact.forEach(item => {
    observerContact.observe(item);
})
// menu toggle
$(".nav_toggle").click(function() {
    $(".nav_menu").toggleClass("nav_menu_dropped", 400);
    // change hamburger to x
    $(this).toggleClass('open');
})

// clicking menu item closes menu and reverts x to hamburger
$(".nav_button").click(function() {
    if (document.querySelector(".nav_toggle").classList.contains('open')){
        $(".nav_toggle").toggleClass('open');
    }
    document.querySelector(".nav_menu").classList.remove("nav_menu_dropped");
})

// $(".card_title_layer").click(function() {
//     $(this).toggleClass("card_title_layer_up", 100);
//     $(this).children(".card_title_layer").removeClass("card_title_layer_peek");   
// })

$(".experience_card").click(function() {
    $(this).children(".card_title_layer").toggleClass("card_title_layer_out", 300);
})

// hovering contact icons
$(".contact_icons").hover(function() {
    $(this).addClass("contact_icons_hover", 1500);
}, function() {
    $(this).removeClass("contact_icons_hover", 1500);
})

// language and tools typewriter effect
const langToolSpans = document.querySelectorAll(".langTool_to_fill")
const timeBetweenLetters = 100; // in ms
const fullTextPause = 1800; // in ms
langToolSpans.forEach(ltSpan => {
    // get text already in body
    var fullText = ltSpan.innerHTML;
    let shownText = "";
    ltSpan.innerHTML = shownText;
    var i = 0;
    function addLetters () {
        console.log(shownText)
        if (shownText.length >= fullText.length) {
            setTimeout(delLetters, fullTextPause);
            return;
        }
        shownText = fullText.slice(0, ++i)
        ltSpan.innerHTML = shownText;
        setTimeout(addLetters, timeBetweenLetters);
    }
    function delLetters () {
        console.log(shownText)
        if (shownText.length <= 0) {
            i = 0;
            setTimeout(addLetters, timeBetweenLetters);
            return;
        }
        shownText = shownText.substring(0, (shownText.length - 1));
        ltSpan.innerHTML = shownText;
        setTimeout(delLetters, timeBetweenLetters);
    }
    addLetters()
})


// bounce loop
const titleTexts = document.querySelectorAll(".title_text");
// bouncing title text
let i = 0;
function bounceLoop() {
    if (i >= titleTexts.length){
        return;
    }
    titleTexts[i].classList.add("title_text_bounce");
    i++
    setTimeout(bounceLoop, 1000);
} 
setTimeout(bounceLoop, 1000);

