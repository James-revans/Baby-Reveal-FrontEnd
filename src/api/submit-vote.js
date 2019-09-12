const mongoose = require('mongoose');
const Vote = require('./models/vote');
const CONSTANTS = require('./config/CONSTANTS');
mongoose.connect(CONSTANTS.DATABASE_AUTH, {useNewUrlParser: true});

exports.handler = function(event, context, callback) {  
  const data = JSON.parse(event.body);
  
  if (data.vote && data.vote == 'boy' || data.vote == 'girl') {
    submitVote(data)
    .then((res) => {
      callback(null, {statusCode: 200, body: JSON.stringify(data), headers: CONSTANTS.HEADERS});
    })
    .catch(err => {
      callback(null, {statusCode: 500, body: err || "Please try again", headers: CONSTANTS.HEADERS});
    });
  } else {
    callback(null, {statusCode: 500, body: "Invalid vote value", headers: CONSTANTS.HEADERS});
  }
}

function submitVote(data) {
  return new Promise((resolve, reject) => {
    var NewVote = new Vote(data);
    NewVote.save(function(err) {
      if (!err) {
        resolve("Success");
      } else {
        reject(err);
      }
    });
  });
}