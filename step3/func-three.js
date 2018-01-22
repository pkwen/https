var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function getAndPrintHTMLChunks (options) {

  var long = "";

  https.get(options, function(response) {

    response.setEncoding('utf-8');

    response.on('data', function(data) {
      long += data;
      // console.log(data);
      // console.log('---------------------------chunk------------------------------');
    });

    response.on('end', function() {
      console.log(long);
      console.log('End of stream.');
    });
  });
  // console.log(long);
}

getAndPrintHTMLChunks(requestOptions);