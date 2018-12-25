// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require snuownd/snuownd

document.addEventListener("DOMContentLoaded", function () {
  var render = function (output, value) {
    output.innerHTML = SnuOwnd.getParser().render(value);
  }
  // Could cause issues since querySelector only selects ONE element.
  var markdown = document.querySelector('#template_content');
  var html = document.querySelector('.snuownd-out');

  debugger;


  if (markdown && html) {
    markdown.addEventListener('input', function (e) {
      render(html, e.target.value);
    });

    render(html, markdown.value);
  }
});
