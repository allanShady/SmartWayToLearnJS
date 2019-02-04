function sayHello(elementId) {
    var home = document.getElementById(elementId).innerHTML;
    alert('You have choosed the ' + home + " item");
}

function applySiteColor(elementId) {
    document.getElementById(elementId).style.color = "#FCA311";
}

function applyOriginalColor(elementId) {
    document.getElementById(elementId).style.color = "black";
}

function changeImage(elementId) {
    document.getElementById(elementId).src = "imgs/1234203_525059767579053_1623289160_n.jpg";
}