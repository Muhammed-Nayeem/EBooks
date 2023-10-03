//Top Header Search Form:
let searchForm = document.querySelector(".header__search-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
}

//Sticky Navbar:
window.onscroll = () => {
  searchForm.classList.remove("remove");
  if (window.scrollY > 80) {
    document.querySelector(".header .header__navbar").classList.add("active");
  } else {
    document.querySelector(".header .header__navbar").classList.remove("active");
  }
}
window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header .header__navbar").classList.add("active");
  } else {
    document.querySelector(".header .header__navbar").classList.remove("active");
  }
}
