// 1) nav bar hide and show////////////////////////////
let lastScrollTop = 0;
const navBar = document.getElementById("header");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navBar.classList.add("hide-nav");
        navBar.classList.remove("show-nav");
    } else {
        // Scrolling up
        navBar.classList.remove("hide-nav");
        navBar.classList.add("show-nav");    
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
});

