console.log('%c Crafted by Insight Creative, Inc. Designed and Developed by Justin Parsons', 'background: #1d1d1d; color: white; padding: 5px 10px;')

function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

document.addEventListener("DOMContentLoaded", function() {
  const copyHtmlButtons = document.querySelectorAll("[id^=copyHtmlBtn]");
  const copyCssButtons = document.querySelectorAll("[id^=copyCssBtn]");

  copyHtmlButtons.forEach(function(button) {
      button.addEventListener("click", function() {
          const htmlExample = button.getAttribute("data-html-example");
          copyToClipboard(htmlExample);
      });
  });

  copyCssButtons.forEach(function(button) {
      button.addEventListener("click", function() {
          const cssExample = button.getAttribute("data-css-example");
          copyToClipboard(cssExample);
      });
  });
});

document.querySelectorAll('.component__code-btn').forEach(function (button) {
  button.addEventListener('click', function () {
      const index = this.getAttribute('data-index');
      const type = this.getAttribute('data-type');
      const preview = document.getElementById('preview-' + index);
      const htmlCode = document.getElementById('htmlCode-' + index);
      const cssCode = document.getElementById('cssCode-' + index);

      if (type === 'preview') {
          preview.style.display = 'block';
          htmlCode.style.display = 'none';
          cssCode.style.display = 'none';
      } else if (type === 'html') {
          preview.style.display = 'none';
          htmlCode.style.display = 'block';
          cssCode.style.display = 'none';
      } else if (type === 'css') {
          preview.style.display = 'none';
          htmlCode.style.display = 'none';
          cssCode.style.display = 'block';
      } else if (type === 'copy-html') {
          copyToClipboard(htmlCode.textContent);
      } else if (type === 'copy-css') {
          copyToClipboard(cssCode.textContent);
      }
  });
});


