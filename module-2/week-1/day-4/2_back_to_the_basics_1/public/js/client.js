const burger = document.querySelector(".icon.mobile");
const navMobile = document.getElementById("nav_mobile");
console.log(burger);

function toggleMobileNav(evt) {
    navMobile.classList.toggle("is-active");
}

burger.addEventListener("click", toggleMobileNav);