var https = require('https');

function getHTML (options, callback) {

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
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);