var apiKey = require('./../.env').ApiKey;

function Doctor() {
}

Doctor.prototype.searchBySymptom = function(condition, displayDoctors, displayError) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + condition + '&location=45.523%2C-122.677%2C1000&user_location=37.773%2C-122.413&sort=distance-asc&skip=0&limit=25&user_key=' + apiKey).then(function(response) {
    if (response.data.length > 0) {
      for (var i = 0; i < response.data.length; i++) {
        var doctorFirstName = response.data[i].profile.first_name;
        var doctorLastName = response.data[i].profile.last_name;
        var doctorTitle = response.data[i].profile.title;
        var doctorPicture = response.data[i].profile.image_url;
        var doctorGender = response.data[i].profile.gender;
        var doctorSpecialties = [];
        for (var j = 0; j < response.data[i].specialties.length; j++) {
          doctorSpecialties.push(response.data[i].specialties[j].name);
        }
        var doctorEducation = [];
        if (response.data[i].educations.length > 0) {
          for (var k = 0; k < response.data[i].educations.length; k++) {
            var schoolName = response.data[i].educations[k].school;
            if (response.data[i].educations[k].degree) {
              schoolDegree = response.data[i].educations[k].degree;
            } else {
              schoolDegree = 'Unknown degree';
            }
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
        var doctorPracticesOpen = [];
        var doctorPracticesClosed = [];
        if (response.data[i].practices.length > 0) {
          for (var m = 0; m < response.data[i].practices.length; m++) {
            var practiceName = response.data[i].practices[m].name;
            var acceptsPatients = response.data[i].practices[m].accepts_new_patients;
            if (acceptsPatients) {
              doctorPracticesOpen.push(practiceName);
            } else {
              doctorPracticesClosed.push(practiceName);
            }
          }
        } else {
          doctorPractices.push('Unavailable');
        }

        var doctorInsurances = [];
        if (response.data[i].insurances.length > 0) {
          for (n = 0; n < response.data[i].insurances.length; n++) {
            doctorInsurances.push(response.data[i].insurances[n].insurance_provider.name);
          }
        } else {
          doctorInsurances.push('Unavailable');
        }


        displayDoctors(doctorFirstName, doctorLastName, doctorTitle, doctorPicture, doctorSpecialties, doctorEducation, doctorGender, doctorPracticesOpen, doctorPracticesClosed, doctorInsurances);
      }
    } else {
      displayError();
    }


  }).fail(function(error) {

    displayError();
  });
};

Doctor.prototype.searchBySpecialty = function(specialty, displayDoctors, displayError) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=' + specialty + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&sort=distance-asc&skip=0&limit=25&user_key=' + apiKey).then(function(response) {
    if (response.data.length > 0) {
      for (var i = 0; i < response.data.length; i++) {
        var doctorFirstName = response.data[i].profile.first_name;
        var doctorLastName = response.data[i].profile.last_name;
        var doctorTitle = response.data[i].profile.title;
        var doctorPicture = response.data[i].profile.image_url;
        var doctorGender = response.data[i].profile.gender;
        var doctorSpecialties = [];
        for (var j = 0; j < response.data[i].specialties.length; j++) {
          doctorSpecialties.push(response.data[i].specialties[j].name);
        }
        var doctorEducation = [];
        if (response.data[i].educations.length > 0) {
          for (var k = 0; k < response.data[i].educations.length; k++) {
            var schoolName = response.data[i].educations[k].school;
            if (response.data[i].educations[k].degree) {
              schoolDegree = response.data[i].educations[k].degree;
            } else {
              schoolDegree = 'Unknown degree';
            }
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

        var doctorPracticesOpen = [];
        var doctorPracticesClosed = [];
        if (response.data[i].practices.length > 0) {
          for (var m = 0; m < response.data[i].practices.length; m++) {
            var practiceName = response.data[i].practices[m].name;
            var acceptsPatients = response.data[i].practices[m].accepts_new_patients;
            if (acceptsPatients) {
              doctorPracticesOpen.push(practiceName);
            } else {
              doctorPracticesClosed.push(practiceName);
            }
          }
        } else {
          doctorPractices.push('Unavailable');
        }

        var doctorInsurances = [];
        if (response.data[i].insurances.length > 0) {
          for (n = 0; n < response.data[i].insurances.length; n++) {
            doctorInsurances.push(response.data[i].insurances[n].insurance_provider.name);
          }
        } else {
          doctorInsurances.push('Unavailable');
        }

        displayDoctors(doctorFirstName, doctorLastName, doctorTitle, doctorPicture, doctorSpecialties, doctorEducation, doctorGender, doctorPracticesOpen, doctorPracticesClosed, doctorInsurances);
      }
    } else {
      displayError();
    }
    console.log(response);

  }).fail(function(error) {
    displayError();
  });
};

exports.doctorModule = Doctor;
