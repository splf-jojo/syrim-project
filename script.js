var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  var header = document.getElementById("header");
  if (prevScrollpos > currentScrollPos || currentScrollPos < 10) {
    header.classList.remove("hidden");
  } else {
    header.classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
};
