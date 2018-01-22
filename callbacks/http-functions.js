module.exports = function getHTML (options, callback) {
  var https = require('https');

  var long = "";

  https.get(options, function(response) {

    response.setEncoding('utf-8');

    response.on('data', function(data) {
      long += data;
      // console.log(data);
      // console.log('---------------------------chunk------------------------------');
    });

    response.on('end', function() {
      callback(long);
      console.log('End of stream.');
    });
  });
};