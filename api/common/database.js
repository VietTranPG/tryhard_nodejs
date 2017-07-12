var mysql = require('mysql');
var config = require("config");
function Connection() {
    this.pool = null;
    this.init = function () {
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: config.get("mysql.host"),
            user: config.get("mysql.user"),
            password: config.get("mysql.password"),
            database: config.get("mysql.database")
        });
    };
    this.acquire = function (callback) {
        this.pool.getConnection(function (err, connection) {
            callback(err, connection);
        });
    };

};
module.exports = new Connection();