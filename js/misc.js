var bod = $("body");
var tog = $("button");

tog.on("click", function () {
  $(this).toggleClass("is-closed");
  if (!$(this).hasClass("is-closed")) {
    bod.addClass("is-open");
  } else {
    bod.removeClass("is-open");
  }
    
});



