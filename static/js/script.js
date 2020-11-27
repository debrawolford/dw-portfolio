// Collapsable Side Navbar
$(document).ready(function () {
  $(".side-nav-link").on("mouseover", function () {
    $(this).siblings().toggleClass("d-none");
  });

  $(".side-nav-link").on("mouseleave", function () {
    $(this).siblings().toggleClass("d-none");
  });
});
