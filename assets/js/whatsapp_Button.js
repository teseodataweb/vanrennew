$(window).scroll(function () {
  if ($(window).scrollTop() > 20) {
    $(".whatsapp-btn").addClass("show");
  } else {
    $(".whatsapp-btn").removeClass("show");
  }
});
