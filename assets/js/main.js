console.log('%c Crafted by Insight Creative, Inc. Designed and Developed by Justin Parsons', 'background: #1d1d1d; color: white; padding: 5px 10px;')

document.addEventListener("DOMContentLoaded", function() {
  // Get all the buttons in the components
  var buttons = document.querySelectorAll(".component__code-btn");

  // Loop through each button
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Get the index and type from the button's data attributes
      var index = this.dataset.index;
      var type = this.dataset.type;

      // Get the code blocks for the current index
      var preview = document.getElementById("preview-" + index);
      var htmlCode = document.getElementById("htmlCode-" + index);
      var cssCode = document.getElementById("cssCode-" + index);

      // Based on the type, show/hide code blocks and copy code to clipboard
      switch(type) {
        case "preview":
          preview.style.display = "block";
          htmlCode.style.display = "none";
          cssCode.style.display = "none";
          break;
        case "html":
          preview.style.display = "none";
          htmlCode.style.display = "block";
          cssCode.style.display = "none";
          break;
        case "css":
          preview.style.display = "none";
          htmlCode.style.display = "none";
          cssCode.style.display = "block";
          break;
        case "copy-html":
          navigator.clipboard.writeText(htmlCode.textContent);
          break;
        case "copy-css":
          navigator.clipboard.writeText(cssCode.textContent);
          break;
      }
    });
  });
});




