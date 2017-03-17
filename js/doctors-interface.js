var Doctor = require('./../js/doctors.js').doctorModule;

var displayDoctors = function(firstName, lastName, title, picture, specialties, education) {
  $('#found-doctors').append('<li class="doctor-entry"><img src="' + picture + '" class="doctor-picture"><span class="doctor-name">' + firstName + ' ' + lastName + ', ' + title + '</span><br>' + '<span class="doctor-bold">Specialties</span>: ' + specialties + '<br><span class="doctor-bold">Education</span>: ' + education + '</li><br>');
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
