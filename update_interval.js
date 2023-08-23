$(document).ready(function() {
  // ... Your existing script ...

  $('form').submit(function(event) {
    event.preventDefault();
    // ... Your existing form data extraction ...

    $.ajax({
      type: 'POST',
      url: 'http://192.168.20.11:5000/update_interval', // Flask app URL
      data: { interval: interval, startTime: startTime, endTime: endTime, daysOfWeek: daysOfWeek },
      success: function(data) {
        console.log(data);    
      },
      dataType: 'json' 
    });
  });

  $('#capture-button').click(function(event) {
    event.preventDefault();

    $.ajax({
      type: 'POST',
      url: 'http://192.168.20.11:5000/capture', // Flask app URL
      success: function(data) {
        console.log(data);
      },
      dataType: 'json' 
    });
  });
});
