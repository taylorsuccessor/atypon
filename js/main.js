
function documentReady(){
$('#tabsList a').click(function(){

    var targetSelector=$(this).data('tab');

    $('.oneSlidePageContainer').hide();
    $(targetSelector).show();

    $('#tabsList li').removeClass('active');
    $(this).parent().addClass('active');
    $('body').addClass('showAside');

    $('#headerBackContainer a').click(function(){
        $('body').removeClass('showAside');
    });

    event.preventDefault();
    event.defaultPrevented();

});

}

function changeWindowHeight(){

    var windowHeight=$(window).height()-80;

    $('.pageContent,.slidesAllContainer').height(windowHeight);

}

$(document).ready(function(){
    documentReady();
    $(window).resize(function() {
        changeWindowHeight();
    });
    changeWindowHeight();
});

