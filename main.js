// It is always helpful to use comments in your code!


var mainMenuLabels = document.querySelectorAll("main-menu-labels");

mainMenuLabels.forEach(function(element) {

element.addEventListener("mouseover", function() {
element.style.display = "none";
});


element.addEventListener("mouseout", function() {
element.style.display = "block";
});


});
