var classData = require ('../data/dndClassData.js');
var raceData = require ('../data/dndRaceData.js');
var userData = require ('../data/userData.js');

module.exports = function (app) {

  app.get('/api/dndClassData', function(req,res){
    res.json(classData);
  });

  app.get('/api/dndRaceData', function(req,res){
    res.json(raceData);
  });

  app.get('/api/userData', function(req,res){
    res.json(userData);
  });

  app.post('/api/classQuiz', function(req,res){
    if(userData.length < 5){
      userData.push(req.body);
      res.json(true);
    }else{
      
    }

  });

};
