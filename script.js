
var i = 0;
var rererarerarer = document.getElementById('rerrrrrrrearar');
var rorrr1 = document.getElementById('rorrr1');
var rorrr2 = document.getElementById('rorrr2');
var rorrr3 = document.getElementById('rorrr3');
var malfurion = document.getElementById('thecircleoflife');
var isEvil = false

$('body').click(function(e) {
    var rand = Math.random();
    if(rand > 0.995 && !isEvil) {
        theCircleOfLifeIsOver()
    }
    var x = e.clientX;
    var y = e.clientY;

    var img = isEvil ? $('<video class="ui-selected" autoplay src="./img/Jade golem gold ' + i + '.webm" />') : $('<img class="ui-selected" src="./img/Jade golem ' + i + '.png" />')
    img.css('top', img.css('top') + y);
    img.css('left', img.css('left') + x);

    $('body').append(img);
    setToZero()
    playSound(i)


    img.draggable({
        drag: function() {
            // rerrrrrrrearar rerrrrrrrearar rerrrrrrrearar
            rererarerarer.play();
        },
        stop: function() {
            rererarerarer.pause();
            rererarerarer.currentTime = 0;
        },
        multiple: true
    });
    i++;
    if(i > 29) {
        i = 29;
    }
})

function playSound(i) {
    if(i < 3){
        rorrr1.play();
    }
    else if(i < 16) {
        rorrr2.play();
    }
    else {
        rorrr3.play();
    }
}

function setToZero() {
    rorrr1.pause()
    rorrr1.currentTime = 0
    rorrr2.pause()
    rorrr2.currentTime = 0
    rorrr3.pause()
    rorrr3.currentTime = 0
}

function theCircleOfLifeIsOver() {
    malfurion.play()
    $('img').remove();
    $('body').css("background", "url('./MalfurionThePestilent.jpg')");
    isEvil = true;
    i = 0;
}