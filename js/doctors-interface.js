var Doctor = require('./../js/doctors.js').doctorModule;

var displayDoctors = function(firstName, lastName, title, picture, specialties, education, gender) {
  if (gender === 'female') {
    icon = '<i class="fa fa-female" aria-hidden="true"></i>';
  } else if (gender === 'male'){
    icon = '<i class="fa fa-male" aria-hidden="true"></i>';
  }
  $('#found-doctors').append('<li class="doctor-entry"><img src="' + picture + '" class="doctor-picture"><span class="doctor-name">' + firstName + ' ' + lastName + ', ' + title + '</span> ' + icon + '<br>' + '<span class="doctor-bold">Specialties</span>: ' + specialties + '<br><span class="doctor-bold">Education</span>: ' + education + '</li><br>');
  console.log(gender);
};

$(document).ready(function() {
var newDoctor = new Doctor();
newDoctor.findSpecialties();

  $('#search-form').submit(function(event) {
    event.preventDefault();
    $('#found-doctors').empty();
    var condition = $('#condition').val();
    newDoctor.search(condition, displayDoctors);

  });

});
