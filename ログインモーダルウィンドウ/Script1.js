// JavaScript source code
$(function () {
    $('.js-open').click(function () {
        $('#overlay, .modal-window').fadeIn();
    });
    $('.js-close,#overlay').click(function () {
        $('#overlay, .modal-window').fadeOut();
    });
});