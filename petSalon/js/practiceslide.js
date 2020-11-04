function increaseImg(){
    $(this).animate({'width': '80%'});
}

function decreaseImg(){
    $(this).animate({'width': '150px'});
}

//$('#register-dog').on('mouseenter', increaseImg);
//$('#register-dog').on('mouseleave', decreaseImg);

//slideUp
$('#register-dog').on('click', function(){
    $('.container').slideUp(1000);
});

//slideDown
$('header h1').on('click', function(){
    $('.container').slideDown(1000);
});