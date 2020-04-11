$(window).load(function() {
    $('#contact').on('click', function() {
      $('.modal').toggleClass('modal_open')
      $('.modal-overlay').toggleClass('modal-overlay_open')
      $('.del').removeClass('li-none')
    });
    $('#join').on('click', function() {
        $('.modal').toggleClass('modal_open')
        $('.modal-overlay').toggleClass('modal-overlay_open')
        $('.del').addClass('li-none')
      });
    $('.modal-close, .modal-menu__link, .modal-menu__button, .modal-overlay').on('click', function() {
        $('.modal').removeClass('modal_open')
        $('.modal-overlay').removeClass('modal-overlay_open')
    });
    
});