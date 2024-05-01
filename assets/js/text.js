$(function() {
  
  var arr = ['Investing for success<br><span class="logotit2">In ac placerat erat, a pellentesque leo. Praesent justo</span> ', 'wise capital management<br><span class="logotit2">In ac placerat erat, a pellentesque leo. Praesent justo</span>', 'improving national economy<br><span class="logotit2">In ac placerat erat, a pellentesque leo. Praesent justo</span>'];
  
  $('.rotator')
    .data('intervalLink', window.setInterval(function() {
      var i = arguments.callee.i ? arguments.callee.i : 0,
        message = arr[i];
      $('.rotator').animate({
        opacity: 0
      }, 500, function() {
        $(this).html(message);
      }).animate({
        opacity: 1
      }, 500);
      arguments.callee.i = (i++ == (arr.length - 1)) ? 0 : i++;
    }, 5000));
});