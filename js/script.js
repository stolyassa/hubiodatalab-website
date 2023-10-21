/*globals $:false, window:false*/

bubble();
fishes();

function random() {

    return Math.random();
}
//------------FISHES RANDOM MOVEMENT-----------
function fishes() {



    $("#fish1Id").animate({
        left: random() * $(window).width(),
        top: $(window).height() * random()

    }, 6000)
    $("#fish2Id").animate({
        left: random() * $(window).width(),
        top: $(window).height() * random()

    }, 6000, function () {
        fishes();
    })



}


//-------------BUBBLES--------------

//Hidding bubbles on click and calling bubble function
$(".bubbleClass").click(function () {
    $(this).stop(true).fadeOut().animate({
        bottom: -$(window).innerHeight(),
        left: $(window).width() * random()

    }).show(0)
    bubble();
})

//Floating bubbles + apearing random position
function bubble() {

    $("#bubble1Id").animate({
        bottom: -$(window).height(),
        left: $(window).width() * random()

    }, 0, "linear", function () {
        $("#bubble1Id").animate({
            bottom: $(window).height()
        }, 5000, "linear");


    }).delay(500), $("#bubble2Id").animate({
        bottom: -$(window).height(),
        left: $(window).width() * random()

    }, 0, "linear", function () {
        $("#bubble2Id").animate({
            bottom: $(window).height()
        }, 5000, "linear");


    }).delay(500), $("#bubble3Id").animate({
        bottom: -$(window).height(),
        left: $(window).width() * random()
    }, 0, "linear", function () {
        $("#bubble3Id").animate({
            bottom: $(window).height()
        }, 5000, "linear");

        bubble();

    })
}

//---------ORANGE FISH---------

//Following mouse click
$(window).click(function (event) {

    var xCoord = event.pageX;
    var yCoord = event.pageY;

    $("#fish1Id").stop(true).animate({

        left: xCoord - 125,
        top: yCoord - 125
    }, function () {
        fishes();
    })
});

// Increasing size on double click
$("#fish1Id").on("dblclick", function () {

    $(this).stop(true).animate({

        height: 500,
        width: 500



    }).animate({
        height: 250,
        width: 250

    });

});

//---------BLUE FISH-------------
//avoiding hover
$("#fish2Id").hover(function () {
    $("#fish2Id").stop(true).animate({
        left: random() * ($(window).width() - 100),
        top: $(window).height() * random()

    }, 700, function () {
        fishes();
    })
})
