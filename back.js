
document.body.addEventListener("click", function(event) {

    if (event.target.id === "butn1") {
        window.location.href = "sqd.html"; 
    } else if (event.target.id === "butn2") {
        window.location.href = "exp1.html"; 

    }

});


document.getElementById("bututube").addEventListener("click", function() {

    var url = "https://www.youtube.com/@phunipith1383"; 

    window.open(url, "_blank");
});


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




$(document).ready(function(){
  $(".btn-toggle1").click(function(){
    var contentDiv = $("#content1");

    if (contentDiv.is(":visible")) {
      contentDiv.slideUp();
    } else {
      contentDiv.slideDown();
    }
  });
});
$(document).ready(function(){
  $(".btn-toggle2").click(function(){
    var contentDiv = $("#content2");

    if (contentDiv.is(":visible")) {
      contentDiv.slideUp();
    } else {
      contentDiv.slideDown();
    }
  });
});
$(document).ready(function(){
  $(".btn-toggle3").click(function(){
    var contentDiv = $("#content3");

    if (contentDiv.is(":visible")) {
      contentDiv.slideUp();
    } else {
      contentDiv.slideDown();
    }
  });
});



