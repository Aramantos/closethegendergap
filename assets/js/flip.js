// $(document).ready(function () {
//   $(".flip-card").click(function () {
//     $(this).children(".flip-card-inner").addClass("flip-card-click");
//     $(this).addClass("move-down");
//     // $(this).children(".flip-card-front").addClass("move-down");
    
//   });
//   $(".flip-card").hover(function () {
//     $(this).not(this).addClass("disappear");
//   });
// });

$(document).ready(function () {
  $(".flip-card-inner").click(function () {
    $("#overlay").css("display", "block");
    $(".container").addClass("blur");
    $(".card").addClass("appear");
  });
  $("#reset-btn").click(function () {
    $("#overlay").css("display", "none");
    $(".container").addClass("unblur");
    $(".card").hide();
  });
});