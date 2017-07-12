var Promise = require("bluebird");
var connection = require("../common/database");
function CreateUser(user) {

    return new Promise(function (resolve, reject) {
        connection.acquire(function (err, con) {
            con.query('INSERT INTO user SET ?', user, function (error, results, fields) {
                con.release();
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    });
};
function GetUserByEmail(user) {
    return new Promise(function (resolve, reject) {
        connection.acquire(function (err, con) {
            con.query('select * from user where email = ' + user.email + 'and password = ' + user.password, function (error, results, fields) {
                con.release();
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        })
    });
};
module.exports = {
    CreateUser: CreateUser,
    GetUserByEmail: GetUserByEmail
};