// It is always helpful to use comments in your code!

// For each main menu label, add a mouseover and mouseout event listener
// Add or remove a menu-visible class that toggles the appearance of a
// dropdown submenu
var mainMenuLabels = document.querySelectorAll(".main-menu-labels");

mainMenuLabels.forEach(function(element) {

element.addEventListener("mouseover", function() {
var subMenu = element.nextElementSibling;
subMenu.classList.add("menu-visible");
});

element.addEventListener("mouseout", function() {
var subMenu = element.nextElementSibling;
subMenu.classList.remove("menu-visible");
});

});
