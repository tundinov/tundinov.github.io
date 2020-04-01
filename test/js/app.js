$(window).load(function() {
  $('.select_checked').on('click', function() {
    $('.select__dropdown').toggleClass('select__dropdown_open')
    $('.select_checked').toggleClass('select_checked_v')
    $('.bg').toggleClass('bg_v')
  })
  $('.select__option, .bg').on('click', function() {
    var value = $(this).attr('data-value')
    $('#select-type').val(value)
    $('.select_checked').text(value)
    $('.select__dropdown').toggleClass('select__dropdown_open')
    $('.bg').toggleClass('bg_v')
  })
  $('.info__input').change(function(){
    tmpval = $(this).val();
    if(tmpval == '') {
        $('.info__input_wrap_label').removeClass('info__input_wrap_label_v');
    } else {
        $('.info__input_wrap_label').addClass('info__input_wrap_label_v');
    }
});
});

// Cache selectors
var lastId,
  topMenu = $("#top-menu"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function() {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent().removeClass("active")
      .end().filter("[href='#" + id + "']").parent().addClass("active");
  }
});

function fun1() {
    var rng=document.getElementById('r1'); //rng - это Input
    var div=document.getElementById('test'); // div - блок test
    div.style.width=rng.value+'px';
}