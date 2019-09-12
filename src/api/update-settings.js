const mongoose = require('mongoose');
const Settings = require('./models/settings');
const CONSTANTS = require('./config/CONSTANTS');
mongoose.connect(CONSTANTS.DATABASE_AUTH, {useNewUrlParser: true});

exports.handler = function(event, context, callback) {  
  const data = JSON.parse(event.body);
  let currentTime = Date.now();
  
  if (data) {
    data.created = currentTime;
    updateSettings(data)
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

function updateSettings(data) {
  return new Promise((resolve, reject) => {
    var NewSettings = new Settings(data);
    NewSettings.save(function(err) {
      if (!err) {
        resolve("Success");
      } else {
        reject(err);
      }
    });
  });
}