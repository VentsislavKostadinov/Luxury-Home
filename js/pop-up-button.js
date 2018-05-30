
// SCROLLING BUTTON

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("top-button").style.display = "block";
    } else {
        document.getElementById("top-button").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topUpFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

