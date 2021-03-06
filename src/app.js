var restify = require('restify');

function respond(req, res, next) {

    res.send('Hello ' + req.params.name);
    next();
}

var server = restify.createServer();

server.use(restify.CORS());

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
