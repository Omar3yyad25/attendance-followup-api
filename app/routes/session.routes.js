const { verifySignUp } = require("../middleware");
const sessionController = require("../controllers/session.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });



  app.get("/retriveallsessions", sessionController.retriveAll);

  app.post("/confirmattendance", sessionController.confirmAttendance);

  
};


