var Doctor = require('./../js/doctors.js').doctorModule;

$(document).ready(function() {
var newDoctor = new Doctor();

  $('#search-form').submit(function(event) {
    event.preventDefault();
    var condition = $('#condition').val();
    newDoctor.search(condition);

  });

});
