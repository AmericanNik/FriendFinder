$(document).ready(function(){

console.log('ready');

$('select').formSelect();

let userAnswer = []

let survey = function(param1, arr) {
  newAnswer = param1.split(",")
  newAnswer.forEach(function(g) {
    arr.push(g);
  });
}

let classSelector = function(array) {
  console.log(array)
  if (array.length == 0)
    return null;
  var modeMap = {};
  var maxEl = array[0],
    maxCount = 1;
  for (var i = 0; i < array.length; i++) {
    var el = array[i];
    if (modeMap[el] == null) {
      modeMap[el] = 1;
    } else {
      modeMap[el]++;
    }
    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    }
  }
  console.log('The Winner Is: ' + maxEl);
  runClassQuery(maxEl);
  return maxEl;
};



$('#surveySubmit').on('click', function(p) {
  answer1 = $('#question1').val();
  answer2 = $('#question2').val();
  answer3 = $('#question3').val();
  answer4 = $('#question4').val();
  answer5 = $('#question5').val();
  answer6 = $('#question6').val();
  answer7 = $('#question7').val();
  answer8 = $('#question8').val();
  answer9 = $('#question9').val();
  answer10 = $('#question10').val();

  survey(answer1, userAnswer);
  survey(answer2, userAnswer);
  survey(answer3, userAnswer);
  survey(answer4, userAnswer);
  survey(answer5, userAnswer);
  survey(answer6, userAnswer);
  survey(answer7, userAnswer);
  survey(answer8, userAnswer);
  survey(answer9, userAnswer);
  survey(answer10, userAnswer);
  classSelector(userAnswer);
  $(".subheader").hide();

  $('#surveyQuestions').hide();
});


});

  $("#surveyStart").on("click", function(e){

  });

function runUserQuery() {
let currentURL = window.location.origin;
$.ajax({
    url: currentURL + "/api/userData",
    method: "GET"
  })
  .done(function(userData) {
    console.log("---------------------------");
    console.log("URL: " + currentURL + "/api/userData");
    console.log("---------------------------");
    console.log(userData);
    console.log("---------------------------")

    for (i = 0; i < userData.length; i++) {
      console.log(userData[i]);
      let userSection = $("<div>");
      userSection.addClass("user");
      userSection.attr('id', 'user' + i + 1);
      $("#userSection").append(userSection);

      let userNumber = i + 1;

      $("#user" + i + 1).append('<h2><span class="label label-primary">' + userNumber + "</span> | " + userData[i].userName + "</h2>")
    }

  });
}

function runClassQuery(userClass) {
console.log('USER CLASSSSSS' + userClass);
let currentURL = window.location.origin;
$.ajax({
    url: currentURL + "/api/dndClassData",
    method: "GET"
  })
  .done(function(classData) {
    console.log("---------------------------");
    console.log("URL: " + currentURL + "/api/userData");
    console.log("---------------------------");
    console.log(classData);
    console.log("---------------------------");

    for (i = 0; i < classData.length; i++) {
      if (userClass === classData[i].className) {
        console.log(classData[i]);

        console.log(classData[i])
        let classSection = $("<div>");
        classSection.addClass("class");
        classSection.attr('id', 'class' + i + 1);
        $("#classSection").append(classSection);

        let classNumber = i + 1;

        $("#class" + i + 1).append('<h2>'+ classData[i].className + "</h2><br><img src=" + classData[i].picture + "><br><p>"+ classData[i].classBio+"</p>")
        .append('<p>Primary Ability:'+classData[i].primaryAbility+'</p><p>Saving Proficiencies:'+classData[i].savingProficiencies+'</p><p>Equipment Proficiencies: '+classData[i].equipmentProficiencies+'</p>');
      }
    }
  });

}
