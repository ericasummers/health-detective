var apiKey = require('./../.env').ApiKey;

function Doctor() {
}

Doctor.prototype.search = function(condition) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + condition + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=25&user_key=' + apiKey).then(function(response) {
    console.log(response);
  }).fail(function(error) {

  });
};

exports.doctorModule = Doctor;
