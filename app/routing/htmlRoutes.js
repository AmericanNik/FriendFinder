var path = require('path');

module.exports = function(app) {

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "./../public/home.html"));
  });

  app.get("/classQuiz", function(req, res) {
    res.sendFile(path.join(__dirname, "./../public/classQuiz.html"));
  });

  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "./../public/home.html"));
  });

};
