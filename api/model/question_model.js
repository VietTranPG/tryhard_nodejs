var Promise = require("bluebird");
var connection = require("../common/database");
function AddType(type) {
    return new Promise(function (resolve, reject) {
        connection.acquire(function (err, con) {
            let query = con.query(`insert into type set ?`, type, function (error, results, fields) {
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
function UpdateType(data) {
    return new Promise(function (resolve, reject) {
        connection.acquire(function (err, con) {
            let query = con.query(`UPDATE type SET description = ? where id = ?`, [data.description, data.id], function (error, results, fields) {
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
function DeleteType(id) {
    return new Promise(function (resolve, reject) {
        connection.acquire(function (err, con) {
            let query = con.query(`Delete from type where id = ?`, [id], function (error, results, fields) {
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
function GetType(){
     return new Promise(function (resolve, reject) {
        connection.acquire(function (err, con) {
            let query = con.query(`Select * from type`, function (error, results, fields) {
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
function GetTypeById(id){
    return new Promise(function (resolve, reject) {
        connection.acquire(function (err, con) {
            let query = con.query(`Select * from type where id = ?`,[id], function (error, results, fields) {
                con.release();
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    });
}
function AddQuestion(data) {
    return new Promise(function (resolve, reject) {
        connection.acquire((err, con) => {
            let query = con.query(`insert into question set ?`, [data.question], function (error, results, fields) {

                if (error) {
                    reject(error);
                } else {
                    let answers = data.answers;
                    let arrAnswer = [];
                    for (let i = 0; i < answers.length; i++) {
                        answers[i].question_id = results.insertId;
                        arrAnswer.push([answers[i].title, answers[i].status, answers[i].question_id])
                    }
                    console.log(arrAnswer)
                    let queryAddAnswer = con.query(`INSERT INTO answer (title,status,question_id) values  ? `, [arrAnswer], function (error, results, fields) {
                        con.release();
                        console.log(queryAddAnswer.sql);
                        if (error) {
                            reject(error);
                        }
                        else {
                            resolve(results);
                        }
                    });
                }
            });
        });
    });
};

module.exports = {
    AddType: AddType,
    UpdateType: UpdateType,
    DeleteType: DeleteType,
    GetType:GetType,
    GetTypeById:GetTypeById,
    AddQuestion: AddQuestion
}