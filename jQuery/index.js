$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });

  $("#voucherButton1").click(function(){
    $(".bimage1").toggle(2000);
  });

  $("#voucherButton2").click(function(){
    $(".bimage2").toggle(2000);
  });


  $("#voucherButton3").click(function(){
    $(".bimage3").toggle(2000);
  });
});