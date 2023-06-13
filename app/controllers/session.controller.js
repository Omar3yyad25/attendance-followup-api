const db = require('../models');
const decode = require('../utils/jwtdecode')
const http = require('http');
const url = require('url');

exports.retriveAll = async (req, res) => {
  const session = await db.session.findAll(
      {
          where: {
            sessionCode: "IME4121",
          }
      }
  );
 try{
  if (!session) {
    return res.status(404).send({ message: "session Not found." });
  }
    res.status(200).send(session);
 }
 catch(error){
    res.status(500).send({ message: error.message });
 }  
};

// create api to confirm attendance of a student
exports.confirmAttendance = async (req, res) => {
  const session = await db.session.findOne(
      {
          where: {
            sessionCode: req.body.sessioncode,
            studentId: req.body.id,
          }
      }
  );
  try{
    if (!session) {
      return res.status(404).send({ message: "session Not found." });
    }
    else{
      session.update({
        Attended: "YES",
        totalAttended: session.totalAttended + 1,
      });
      return res.redirect('http://34.29.19.112/pages/student-dashboard.html');
    }
  }
  catch(error){
    res.status(500).send({ message: error.message });
  }

};