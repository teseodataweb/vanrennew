$(window).scroll(function () {
  if ($(window).scrollTop() > 60) {
    $(".whatsapp-btn").addClass("show");
  } else {
    $(".whatsapp-btn").removeClass("show");
  }
});
