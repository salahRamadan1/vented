$(window).scroll(function () {

  let navbar = $(".navbar").offset().top;
  $(".iconUpPadge").css("display", "flex");
  $(".navbar").css("backgroundColor", "rgba(0,0,0,0.8)");


  if (navbar < "10") {
    $(".navbar").css("backgroundColor", "transparent");
    $(".navbar").css("padding-left", "50px");

    $(".iconUpPadge").css("display", "none");

    logoImg.src = "../img/logo-light.png";
  }
  else{
    $(".navbar").css("padding-left", "0px");

  }
});
//  loading
$(document).ready(function () {
  $(".spinner-border").fadeOut(500, function () {
    $(".loading").fadeOut(1000, function () {
      $("body , html").css("overflow-y", "auto");
      $(".navbar").css("display", "flex");
    });
  });
});
