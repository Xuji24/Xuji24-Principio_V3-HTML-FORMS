// Select all elements with the class "button"
var buttons = document.querySelectorAll(".button");

// Loop through each button and add the event listener
buttons.forEach(function(button) {
     button.addEventListener("click", function(event){
         event.preventDefault();

     });
});

// Select all links with the class "food"
var foods = document.querySelectorAll(".food");

// Loop through each link and add the event listener
foods.forEach(function(food) {
    food.addEventListener("click", function(event){
        event.preventDefault();
        
    
    });
});

// Select all links with the class "view-menu"
var viewMenus = document.querySelectorAll(".view-menu");

// Loop through each link and add the event listener
viewMenus.forEach(function(viewMenu) {
    viewMenu.addEventListener("click", function(event){
        event.preventDefault();
        
    
    });
});

// Select all links with the class "link-left"
var linksLeft = document.querySelectorAll(".link-left");

// Loop through each link and add the event listener
linksLeft.forEach(function(linkLeft) {
    linkLeft.addEventListener("click", function(event){
        event.preventDefault();
        
    
    });
});

// Select all links with the class "soc-med"
var socialMedias = document.querySelectorAll(".soc-med");

// Loop through each link and add the event listener
socialMedias.forEach(function(socialMedia) {
    socialMedia.addEventListener("click", function(event){
        event.preventDefault();
        
    });
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}