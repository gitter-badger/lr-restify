var DocumentDbConnection = require('./lib/DocumentDbConnection');

var SampleModel = (function(client) {

    var databaseId = {id: "sample database"};
    var collectionId = {id: "sample collection"};
    var documentId = {id: "hello world doc", content: "Hello World!"};

    var databaseUrl = 'dbs/' + encodeURI(databaseId.id);
    var collectionUrl = databaseUrl + '/colls/' + encodeURI(collectionId.id);

    function findAll() {
        return client.queryCollections(databaseUrl, 'SELECT * FROM c')
    }

    return {
        findAll : findAll
    }

})(DocumentDbConnection.getInstance());

module.exports = SampleModel;