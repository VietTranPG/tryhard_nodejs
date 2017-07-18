var mysql = require('mysql');
function Connection() {
    this.pool = mysql.createPool({
        connectionLimit: 10,
        host: "localhost",
        user: "root",
        password: "",
        database: "questionapp"
    });
    this.acquire = function (callback) {
        this.pool.getConnection(function (err, connection) {
            callback(err, connection);
        });
    };

};
module.exports = new Connection();