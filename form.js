
var current = 1;

// function to go to previous
var prev = function() {
    current -= 1;
    if (current < 1) current = 1; // can't go too far previous
    showContent();
};

// function to go next
var next = function() {
    current += 1;
    if (current > 4) current = 4; // can't go too far next
    showContent();
};

// hide previous and next buttons to submit

var hidebutton = function ()
{


}

// Update what content we are showing based on the "current" index
var showContent = function() {
    var display;
    for (var i = 1; i <= 4; i++) {
        if (i == current) {
            display = 'block';
        } else {
            display = 'none';
        }
        document.getElementById(i).style.display = display;
    }
};

// bind the prev and next function to the links
document.getElementById('prev').onclick = prev;
document.getElementById('next').onclick = next;
