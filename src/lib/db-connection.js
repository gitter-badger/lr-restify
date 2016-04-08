var Config = require('./config.js');
var Mongoose = require('mongoose');

var DbConnection = (function (Config, Mongoose) {

    var instance = null;

    function getInstance() {
        if (!instance) {
            instance = Mongoose.connect(Config.mongodb.host)
        }
        return instance;
    }

    return {
        getInstance: getInstance
    };

})(Config, Mongoose);

module.exports = DbConnection;