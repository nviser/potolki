$(function () {

    $('header nav ul li:nth-child(3)').click(function() {
            $('.ceil_types').toggleClass('open');
    });


    $('header .ceil_types a .ceil_types-item').click('on', function() {
        $('.ceil_types').toggleClass('open');
    });

    $('header .menu_item:nth-child(3)').click('on', function() {
        $('header .menu_item ul').css('display', 'block');
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
    /* $('.menu_item').click(menuToggle); */


});
    
    function changecolor(arg) {
        var el = arg.parentElement.parentElement.parentElement.parentElement;
        var name = arg.value;
        var src = 'img/lamps/';
        el.children[0].style.backgroundImage = 'url(' + src + name + '.jpg)';
    };

    /* document.onclick = function() {
        console.log('in x');
        document.getElementById('ceil_types').style.display = 'none'
    }  */