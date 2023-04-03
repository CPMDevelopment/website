$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    const interval = $('#interval').val();
    $.ajax({
      type: 'POST',
      url: 'http://<your_raspberry_pi_ip_address>:5000/update_interval',
      data: { interval: interval },
      success: function(data) {
        console.log(data);
      },
      dataType: 'json'
    });
  });
});
