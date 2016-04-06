var restify = require('restify');
var sampleModel = require('./SampleModel');

function respond(req, res, next) {

    sampleModel.findAll().toArray(function(err, result) {
        console.log(err, result);
    })

    
    res.header('content-type', 'application/json');
    res.send('hi');
    next();
}

var server = restify.createServer();

server.get('/hello', respond);


server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
