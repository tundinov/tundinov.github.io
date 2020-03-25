$(window).load(function() {
  $(".before-after").twentytwenty({
    before_label: "Без скинали", // Set a custom before label
    after_label: "Со скинали" // Set a custom after label
  });
  $(".before-slider").slick({
    draggable: false,
    dotsClass: "before-slider__dots",
    dots: true,
    prevArrow: $(".arrow-left"),
    nextArrow: $(".arrow-right")
  });
  $(".menu-button").on("click", function() {
    $(".menu").toggleClass("menu_active");
    $(".menu-button").toggleClass("decoration");
  });
  /*Настройка селект*/
  $(".select_checked").on("click", function() {
    $(".select__dropdown").toggleClass("select__dropdown_open");
  });
  $(".select__option").on("click", function() {
    var value = $(this).attr("data-value");
    $("#select-type").val(value);
    $(".select_checked").text(value);
    $(".select__dropdown").toggleClass("select__dropdown_open");
  });
  $("a[href^='#']").click(function() {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top - 100 + "px" });
    return false;
  });
  $('input[type="tel"]').mask("+7 (999) 999-99-99");
  /*Показывать карту только когда докрутили до него */
  var reviews = $('.reviews');
  var reviewsTop = reviews.offset().top;
  $(window).bind('scroll', function () {
    var windowTop = $(this).scrollTop();
    if (windowTop > reviewsTop) {
      $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2fa61a176d1b2b941bc5c4be5847f708a2fefa1c1d3c02c7fa9cff7a04b394aa&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>')
      $(window).unbind('scroll')
    }
  })
});
