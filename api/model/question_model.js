var Promise = require("bluebird");
var connection = require("../common/database");
const _ = require("lodash");
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
function GetType() {
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
function GetTypeById(id) {
    return new Promise(function (resolve, reject) {
        connection.acquire(function (err, con) {
            let query = con.query(`Select * from type where id = ?`, [id], function (error, results, fields) {
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
function GetQuestion() {
    return new Promise((resolve, reject) => {
        connection.acquire((err, con) => {
            let sql = `SELECT question.id as question_id,question.title,question.type,answer.title as answer,answer.status,answer.id as answer_id,type.id as type_id,type.description as type_description FROM question
INNER JOIN answer ON question.id = answer.question_id
INNER JOIN type ON type.id = question.type`;
            let query = con.query(sql, (error, results) => {
                con.release();
              
                if(error){
                    reject(error);
                }else{
                    let data = [];
                    data = _.chain(results);
                    resolve(data);
                }
            })

        })
    })
};
module.exports = {
    AddType: AddType,
    UpdateType: UpdateType,
    DeleteType: DeleteType,
    GetType: GetType,
    GetTypeById: GetTypeById,
    AddQuestion: AddQuestion,
    GetQuestion:GetQuestion
}