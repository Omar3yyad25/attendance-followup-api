const db = require('../models');
const decode = require('../utils/jwtdecode')
const http = require('http');
const url = require('url');

exports.retriveAll = async (req, res) => {
const session = await db.session.findOne(
    {
        where: {
          sessionCode: "ABCDE",
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