$(function () {
  $(".header a").on("click", function () {
    var el = $($(this).attr("href"));
    if (el.length > 0) {
      $("body").animate(
        {
          scrollTop: el.offset().top - 200,
        },
        200
      );
      return false;
    }
  });
});
