$( document ).ready(function(){
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
})

$(function() {
    $('.card').hover(
        function() {
            $(this).find('> .card-image > img.activator').click();
        }, function() {
            $(this).find('> .card-reveal > .card-title').click();
        }
    );
});
