var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  var long = "";

  https.get(requestOptions, function(response) {

    response.setEncoding('utf-8');

    response.on('data', function(data) {
      long += "\n" + data;
      console.log(data);
      // console.log('---------------------------chunk------------------------------');
    });

    response.on('end', function() {
      console.log('End of stream.');
    });
  });
  // console.log(long);
}

getAndPrintHTMLChunks();