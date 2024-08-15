window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = "5px 20px";
    } else {
        navbar.style.padding = "10px 20px";
    }
};
