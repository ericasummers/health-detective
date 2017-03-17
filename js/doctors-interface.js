var Doctor = require('./../js/doctors.js').doctorModule;

var displayDoctors = function(firstName, lastName, title, picture, specialties, education) {
  $('#found-doctors').append('<li>' + firstName + ' ' + lastName + ', ' + title + '<br><img src="' + picture + '"><br>' + 'Specialties: ' + specialties + '<br>Education: ' + education + '</li><br>');
};

$(document).ready(function() {
var newDoctor = new Doctor();

  $('#search-form').submit(function(event) {
    event.preventDefault();
    $('#found-doctors').empty();
    var condition = $('#condition').val();
    newDoctor.search(condition, displayDoctors);

  });

});
