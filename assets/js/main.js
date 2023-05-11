console.log('%c Crafted by Insight Creative, Inc. Designed and Developed by Justin Parsons', 'background: #1d1d1d; color: white; padding: 5px 10px;')

document.addEventListener("DOMContentLoaded", function() {
  // Get all the buttons in the components
  var buttons = document.querySelectorAll(".btn--component-control");

  // Get the success message div
  var successMessage = document.getElementById("copy-success-message");

  // Loop through each button
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Get the component parent of the current button
      var component = this.closest('.component');

      // Get the type from the button's data attributes
      var type = this.dataset.type;

      // Get the code blocks within the current component
      var preview = component.querySelector(".component__preview");
      var htmlCode = component.querySelector(".component__code-html");
      var cssCode = component.querySelector(".component__code-css");

      // Get all the buttons within the current component
      var componentButtons = component.querySelectorAll(".btn--component-control");
      
      componentButtons.forEach(button => {
        button.classList.remove("btn--active");
      });

      // Based on the type, show/hide code blocks and copy code to clipboard
      switch(type) {
        case "preview":
          preview.style.display = "block";
          htmlCode.style.display = "none";
          cssCode.style.display = "none";
          this.classList.add("btn--active");
          break;
        case "html":
          preview.style.display = "none";
          htmlCode.style.display = "block";
          cssCode.style.display = "none";
          this.classList.add("btn--active");
          break;
        case "css":
          preview.style.display = "none";
          htmlCode.style.display = "none";
          cssCode.style.display = "block";
          this.classList.add("btn--active");
          break;
        case "copy-html":
          navigator.clipboard.writeText(htmlCode.textContent);
          showSuccessMessage("HTML");
          break;
        case "copy-css":
          navigator.clipboard.writeText(cssCode.textContent);
          showSuccessMessage("CSS");
          break;
      }
    });
  });

  function showSuccessMessage(codeType) {
    // Set the success message
    successMessage.textContent = codeType + " block copied to clipboard!";

    // Show the success message
    successMessage.style.display = "block";

    // Hide the success message after 2 seconds
    setTimeout(function() {
      successMessage.style.display = "none";
    }, 2000);
  }
});
