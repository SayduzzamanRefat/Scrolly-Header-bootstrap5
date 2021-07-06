// Scroll Nav Effect
$(window).on("scroll", function () {
      if ($(window).scrollTop()) {
            $('nav').addClass('bg-black');
      }

      else {
            $('nav').removeClass('bg-black');
      }
});