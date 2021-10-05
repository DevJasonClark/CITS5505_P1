'use strict';

var harold = ["photos/harold/harold_1.jpg", 
            "photos/harold/harold_2.jpg", 
            "photos/harold/harold_3.jpg"];
var currHarold = 0;

function add () {
    let x = parseInt(document.getElementById("testX").value);
    let y = parseInt(document.getElementById("testY").value);
    alert(x + y);
}
function changeStyle () {
    let element = document.getElementById("styleChange");
    element.style.color = "blue";
    element.style.fontWeight = "bolder";
}
function changeImage () {
    currHarold = (currHarold + 1) % 3;
    document.getElementById("haroldImg").src = harold[currHarold];
}
function domBasic () {
    document.getElementById("domBasicOutput").innerHTML = "Congrats, the text has changed.";
}
function verifyForm () {
    let usrInput = document.getElementById("pword").value;
    let allowed = /^[A-Za-z]\w{5,9}/;
    if(usrInput.match(allowed))
        alert(usrInput + " is valid!");
    else
        alert(usrInput + " is invalid! Try again.");
}
function popSection () {
    var addAfter = document.getElementById("populate");
    addAfter.insertAdjacentHTML("afterend", 
    '<p>JavaScript can even be used to insert more HTML where there previously wasn\'t any!</p>\
    <div class="dev-thumbnail image-shadow">\
    <img src="photos/harold/harold_4.jpg" class="dev-thumbnail" alt="More Harold; you\'re welcome.">\
    </div>\
    <p>By the way, yes. Pressing the button will more Harold.</p>');
}
function ajaxTemp () {
    var addAfter = document.getElementById("quoteDestination");
    addAfter.insertAdjacentHTML("afterend", 
    '<p>This was where my AJAX would have gone, but I was having trouble getting it to work and ran out of time.</p>');
}

//const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
//const quoteDest = document.querySelector("#quoteDestination");

//$("#jquery").click(function(){
//    $.getJSON(url)
//    .done(function(data){
//        quoteDest.innerText = data;
//    })
//  })