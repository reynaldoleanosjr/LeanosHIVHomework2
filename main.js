$(document).ready(function() {
$(".facts").on("click",function(e){
  e.preventDefault();
  var clickedspot= $(this);
  var description= clickedspot.data("description");
  $(".modal").find(".inner").find("p").text(description);
  $(".modal").addClass("active");
});

$(".close").on("click", function(e){
  e.preventDefault();
  $(".modal").removeClass("active");
});
});
