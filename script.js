// gauntlet-1 solution
// your code here... Don't look anywhere near the bottom of this file!















































































































setTimeout(function(){
    $('ul').append('<button id="hint">Need a Hint?</button>')
},300000)

$('body').on('click','#hint',function(){
    $('ul').append('<li>check out the .html() method.  It will GET you innerHTML content of any element and it can SET innerHTML content as well</li>')
})

// gauntlet-2
$('#main-board').on('submit', 'form', function(e){
    e.preventDefault();  // prevents form from reloading page
    var x = $('#input-x');
    var y = $('#input-y');
    x.removeClass('correct incorrect');
    y.removeClass('correct incorrect');
    var bothCorrect = true;

    if (x.val() == "-6"){
        x.addClass('correct')
    } else {
        x.addClass('incorrect')
        bothCorrect = false;
    }
    if (y.val() == "-10"){
        y.addClass('correct')
    } else {
        y.addClass('incorrect')
        bothCorrect = false;
    }
    if (bothCorrect){
        $('#main-board').html($('#gauntlet-3').html());
    }
})

// gauntlet 3
$('body').on('click', '#algo-guess', function(){
    if ($('#secret-code').val() == "webfundamentals"){
        $('#main-board').html($('#success').html());
        $('body').addClass('fireworks');
    } else {
        $('#algo-guess').text("Guess Again");
    }
})