$(window).scroll(function () {
  let logoImg = document.getElementById("logoImg");
  let navbar = $(".navbar").offset().top;
  let afterVd = $("#afterVd").offset().top;
  $(".navbar").css("backgroundColor", "rgb(176, 106, 179)");
  $(".iconUpPadge").css("display", "flex");
  logoImg.src = "../img/logo-dark.png";
  if (navbar < "50") {
    $(".navbar").css("backgroundColor", "transparent");
    $(".iconUpPadge").css("display", "none");

    logoImg.src = "../img/logo-light.png";
  }
  if (navbar < afterVd) {
    upNumberIn();
  }
});

//  StartVd
let iconVd = document.getElementById("iconVd");
let vdFixed = document.getElementById("vdFixed");
let autoPlay = document.getElementById("autoPlay");
iconVd.addEventListener("click", function () {
  vdFixed.style.display = "flex";
  autoPlay.innerHTML = `<video src="../vd/How Google Wifi keeps your Wi-Fi fast.mp4" autoplay></video>`;
});
let iconClose = document.getElementById("iconClose");
function close() {
  autoPlay.innerHTML = ``;

  vdFixed.style.display = "none";
}
iconClose.addEventListener("click", function () {
  close();
});
// endVd
//  loading
$(document).ready(function () {
  $(".spinner-border").fadeOut(500, function () {
    $(".loading").fadeOut(1000, function () {
      $("body , html").css("overflow-y", "auto");
      $(".navbar").css("display", "flex");
    });
  });
});

function upNumberIn() {
  let page1 = document.getElementById("page1");
  let upNumberPage = 0;
  let numberInterval = setInterval(() => {
    upNumberPage++;
    page1.innerHTML = upNumberPage;
    if (upNumberPage == "245") {
      clearInterval(numberInterval);
    }
  }, 1);
  // ****
  let Home2 = document.getElementById("Home2");
  let Home = 0;
  let NumberINtervalHome2 = setInterval(() => {
    Home++;
    Home2.innerHTML = Home;
    if (Home == "325") {
      clearInterval(NumberINtervalHome2);
    }
  }, 1);
  // ****
  let fire3 = document.getElementById("fire3")
  let fire3Number = 0 
  let firInterval = setInterval(()=>{
    fire3Number++;
    fire3.innerHTML =fire3Number ; 
    if(fire3Number == "421"){
      clearInterval(firInterval)
    }

  })
  // *****
  let comment4 = document.getElementById("comment4")
  let comment4Number = 0 
  let comment4Interval = setInterval(()=>{

    comment4Number ++;
    comment4.innerHTML=comment4Number;
    if(comment4Number == "369"){
      clearInterval(comment4Interval)
    }



  })
}
