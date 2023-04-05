$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    const interval = $('#interval').val();
    $.ajax({
      type: 'POST',
      url: 'http://192.168.20.11:5000/update_interval',
      data: { interval: interval },
      success: function(data) {
        console.log(data);
      },
      dataType: 'json' 
    });
  });
});
