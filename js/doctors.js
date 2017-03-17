var apiKey = require('./../.env').ApiKey;

function Doctor() {
}

Doctor.prototype.search = function(condition, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + condition + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=25&user_key=' + apiKey).then(function(response) {
    for (var i = 0; i < response.data.length; i++) {
      var doctorFirstName = response.data[i].profile.first_name;
      var doctorLastName = response.data[i].profile.last_name;
      var doctorTitle = response.data[i].profile.title;
      var doctorPicture = response.data[i].profile.image_url;
      var doctorSpecialties = [];
      for (var j = 0; j < response.data[i].specialties.length; j++) {
        doctorSpecialties.push(response.data[i].specialties[j].name);
      }
      var doctorEducation = [];
      if (response.data[i].educations.length > 0) {
        for (var k = 0; k < response.data[i].educations.length; k++) {
          var schoolName = response.data[i].educations[k].school;
          var schoolDegree = response.data[i].educations[k].degree;
          if (response.data[i].educations[k].graduation_year) {
            var gradYear = response.data[i].educations[k].graduation_year;
            doctorEducation.push(schoolName + ' (' + schoolDegree + ') ' + '- Graduated in ' + gradYear);
          } else {
            doctorEducation.push(schoolName + ' (' + schoolDegree + ')');
          }

        }
      } else {
        doctorEducation.push('Not Available');
      }

      displayDoctors(doctorFirstName, doctorLastName, doctorTitle, doctorPicture, doctorSpecialties, doctorEducation);
    }
    console.log(response);

  }).fail(function(error) {

  });
};

exports.doctorModule = Doctor;
