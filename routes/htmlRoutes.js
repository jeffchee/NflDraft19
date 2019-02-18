var path = require("path");
module.exports = function(app) {

    app.get("/form", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/form.html"));
      });
    
      app.get("/finish", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/finish.html"));
      });

      app.get("/ranking", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/ranking.html"));
      });
    
      // If no matching route is found default to home
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
      });
    };