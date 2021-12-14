var height = $(".header").height();
$(window).scroll(function () {
  if ($(this).scrollTop() > height) {
    $("#nav-bar").addClass("fixed");
  } else {
    $("#nav-bar").removeClass("fixed");
  }
})
