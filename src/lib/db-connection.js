var Config = require('./config.js');
var DocumentClient = require('documentdb').DocumentClient;

var DocumentDbConnection = (function (Config, DocumentClient) {

    var instance = null;

    function getInstance() {
        if (!instance) {
            instance = new DocumentClient(
                Config.documentdb.hostEndpoint,
                {masterKey: Config.documentdb.masterKey}
            );
        }
        return instance;
    }

    return {
        getInstance: getInstance
    };

})(Config, DocumentClient);

module.exports = DocumentDbConnection;