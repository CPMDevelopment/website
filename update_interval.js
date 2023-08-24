$(document).ready(function() {
  // ... Your existing script ...

  $('form').submit(function(event) {
    event.preventDefault();
    const interval = $('#interval').val();
    const startTime = $('#start-time').val();
    const endTime = $('#end-time').val();
    const daysOfWeek = {
      monday: $('#monday').is(':checked'),
      tuesday: $('#tuesday').is(':checked'),
      wednesday: $('#wednesday').is(':checked'),
      thursday: $('#thursday').is(':checked'),
      friday: $('#friday').is(':checked'),
      saturday: $('#saturday').is(':checked'),
      sunday: $('#sunday').is(':checked')
    };

    $.ajax({
      type: 'POST',
      url: 'http://192.168.20.11:5000/update_interval',
      data: { interval: interval, startTime: startTime, endTime: endTime, daysOfWeek: daysOfWeek },
      success: function(data) {
        console.log(data);
      },
      dataType: 'json'
    });
  });

  function fetchAndUpdateVoltage() {
    $.ajax({
      type: 'GET', // Assuming you have a server-side route for voltage retrieval
      url: 'http://192.168.20.11:5000/get_voltage',
      success: function(data) {
        // Update the voltage value in the HTML
        $('#voltage-value').text('Voltage: ' + data.voltage + ' V');
      },
      error: function() {
        // If the request fails, display the default voltage value
        $('#voltage-value').text('Voltage: 8.1 V (Default)');
      },
      dataType: 'json'
    });
  }

  // Fetch and update voltage on page load
  fetchAndUpdateVoltage();

  // Fetch and update voltage on a regular interval
  setInterval(fetchAndUpdateVoltage, 5000); // Fetch every 5 seconds
});



  $('#capture-button').click(function(event) {
    event.preventDefault();

    $.ajax({
      type: 'POST',
      url: 'http://192.168.20.11:5000/capture',
      success: function(data) {
        console.log(data);
      },
      dataType: 'json'
    });
  });
});
