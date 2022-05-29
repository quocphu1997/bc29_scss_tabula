window.onscroll = function () {
  if (window.scrollY > 100) {
    document.querySelector(".header-wavy").classList.add("header-scroll");
    document.querySelector(".header-wavy").classList.remove("header-scroll-two");

  } else {
    document.querySelector(".header-wavy").classList.remove("header-scroll");
    document.querySelector(".header-wavy").classList.add("header-scroll-two");

  }
};
