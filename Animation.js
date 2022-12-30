window.addEventListener("load", function() {

    

    var image = document.querySelector(".slide-up-fade-in");
    image.style.opacity = 1;
    image.style.transform = "translateY(0)";
    



    // Add smooth scrolling to all links
    var links = document.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
  
          // Store hash
          var hash = this.hash;
  
          // Use smooth scroll animation
          var smoothScroll = function() {
            // Calculate how far to scroll
            var scrollDistance = document.querySelector(hash).offsetTop - 50;
  
            // Do the scroll
            window.scroll({
              top: scrollDistance,
              left: 0,
              behavior: "smooth"
            });
          };
  
          // Smooth scroll to anchor
          smoothScroll();
        }
      });
    }
  
    // Add fade-in animation to page elements
    var elementsToFadeIn = document.querySelectorAll(".fade-in");
    for (var i = 0; i < elementsToFadeIn.length; i++) {
      var element = elementsToFadeIn[i];
      element.style.opacity = 0;
      window.setTimeout(function() {
        element.style.transition = "opacity 500ms";
        element.style.opacity = 1;
      }, 500);
    }
  });
  
//   if (window.location.pathname === "/aboutme.html") {
//     // Add smooth scrolling to all links
//     // Add fade-in animation to page elements
//     // ...
//   }
  