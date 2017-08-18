$(function () {

    /*   $('body').click('on', function(e) {
        if($('.ceil_types').hasClass('open')){
            $('.ceil_types').removeClass('open');
            alert($('.ceil_types').hasClass('open'));
        } else {
            alert('true');
            console.log(e);
        }
    });   */

    $('header nav ul li:nth-child(3)').click('on', function() {
        $('.ceil_types').toggleClass('open');
    });

    $('header .ceil_types a .ceil_types-item').click('on', function() {
        $('.ceil_types').toggleClass('open');
    });




    $("#slider").slider({
        range: "min",
        value: 32,
        min: 1,
        max: 50,
        slide: function (event, ui) {
            $("#amount").val(ui.value);
        }
    });

    $("#amount").val($("#slider").slider("value"));

    /* Menu toggle */

    function menuToggle() {
        $('.menu').toggleClass('open');
        $('.menu_expand').toggleClass('open');
    }

    $('.menu').click(menuToggle);
    $('.menu_item').click(menuToggle);

    /* $('.eighth__section-block-info-color-block_item').click('on', function(){
        console.log($(this).attr('id'));
        var id = $(this).attr('id');
        console.log($('.' + id));
        $('.' + id + ' .eighth__section-block-photo').css('background-image', 'url(../img/pic1.jpg)')
    }); */

});