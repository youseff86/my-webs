document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to SolarTech's website!");
});
var scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
};
scrollTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false; 
};
