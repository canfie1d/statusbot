'use strict';
var urlencode = require('urlencode');
var request = require("request");

module.exports.updateStatus = (event, context, callback) => {

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Your function executed successfully!',
      event: event
    })
  };

  var body = JSON.parse(event.body)
  var profile = urlencode(JSON.stringify(body.profile));
  var token = body.token;

  var slackEndpoint = "https://slack.com/api/users.profile.set";
  var urlParams = "?token=" + token + "&profile=" + profile;
  var fullUrl = slackEndpoint + urlParams;
  var requestor = body.profile.first_name;

  request.post(
    fullUrl,
    {},
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      } else {
        console.log(error, requestor);
      }
    }
  );

  callback(null, response);
};
