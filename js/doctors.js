var apiKey = require('./../.env').ApiKey;

function Doctor() {
}

Doctor.prototype.search = function(condition) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + condition + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=25&user_key=' + apiKey).then(function(response) {
    for (var i = 0; i <= response.data.length; i++) {
      var doctorFirstName = response.data[i].profile.first_name;
      var doctorLastName = response.data[i].profile.last_name;
      var doctorPicture = response.data[i].profile.image_url;
      var doctorTitle = response.data[i].profile.title;
      var doctorSpecialties = [];
      for (var j = 0; j < response.data[i].specialties.length; j++) {
        doctorSpecialties.push(response.data[i].specialties[j].name);
      }
      $('#found-doctors').append('<li>' + doctorFirstName + ' ' + doctorLastName + ', ' + doctorTitle + '<br><img src="' + doctorPicture + '"><br>' + 'Specialties: ' + doctorSpecialties + '</li><br>');
    }
    console.log(response);
  }).fail(function(error) {

  });
};

exports.doctorModule = Doctor;
