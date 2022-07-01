  //  loading
  $(document).ready(function () {
    $(".spinner-border").fadeOut(500, function () {
      $(".loading").fadeOut(1000, function () {
        $("body , html").css("overflow-y", "auto");
        $(".navbar").css("display" , "flex")
  
      });
    });
  });
