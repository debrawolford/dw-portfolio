// Collapsable Side Navbar
$(document).ready(function () {
  $(".side-nav-link").mouseover(function () {
    $(this).siblings().toggleClass("d-none");
  });

  $(".side-nav-link").mouseleave(function () {
    $(this).siblings().toggleClass("d-none");
  });
});
