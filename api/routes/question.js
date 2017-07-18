var express = require('express');
var router = express.Router();
var question_model = require("../model/question_model");
router.post('/addtype', function (req, res, next) {
    var type = req.body;
    var description = type.description;
    if (description) {
        question_model.AddType(type)
            .then(function (result) {
                res.json({
                    Data: type,
                    Message: "Add type successfully!",
                    Status: "success"
                });
            }).error(function (error) {
                console.log(error);
            });
    } else {
        res.json({
            Data: [],
            Message: "Description is required!",
            Status: "error"
        });
    }
});
router.post('/updatetype', function (req, res, next) {
    var data = req.body;
    if (data.description && data.id) {
        question_model.UpdateType(data)
            .then(function (result) {
                if (result.changedRows > 0) {
                    res.json({
                        Data: data,
                        Message: "Update type successfully!",
                        Status: "success"
                    });
                } else {
                    res.json({
                        Data: [],
                        Message: "Please change description when update.",
                        Status: "error"
                    });
                }

            }).error(function (error) {
                res.json({
                    Data: [],
                    Message: "Description is required!",
                    Status: "error"
                });
            });
    } else {
        res.json({
            Data: [],
            Message: "Invalid input",
            Status: "error"
        });
    }
});
router.post('/deletetype', function (req, res, next) {
    var data = req.body;
    var id = data.id;
    if (id) {
        question_model.DeleteType(id)
            .then(function (result) {
                if (result.affectedRows > 0) {
                    res.json({
                        Data: [],
                        Message: "Delete type successfully!",
                        Status: "success"
                    });
                } else {
                    res.json({
                        Data: [],
                        Message: "Not found this type",
                        Status: "error"
                    });
                }

            }).error(function (error) {
                res.json({
                    Data: [],
                    Message: "Delete type fail",
                    Status: "error"
                });
            });
    } else {
        res.json({
            Data: [],
            Message: "Id is required!",
            Status: "error"
        });
    }
});
router.get('/type', function (req, res, next) {
    question_model.GetType()
        .then(function (result) {
            res.json({
                Data: result,
                Message: "",
                Status: "success"
            });
        }).error(function (error) {
            res.json({
                Data: [],
                Message: "Get type fail",
                Status: "error"
            });
        });

});
router.get('/type/:id', function (req, res, next) {
    let id = req.params.id;
    question_model.GetTypeById(id)
        .then(function (result) {
            if (result.length < 1) {
                res.json({
                    Data: result,
                    Message: "Not found",
                    Status: "error"
                });
            } else {
                res.json({
                    Data: result,
                    Message: "",
                    Status: "success"
                });
            }
        }).error(function (error) {
            res.json({
                Data: [],
                Message: "Get type fail",
                Status: "error"
            });
        });

});
router.post('/add', function (req, res, next) {
    var data = req.body;
    if (data.question.length < 0 || data.answers.length < 4) {
        res.json({
            Data: [],
            Message: "Invalid input",
            Status: "error"
        });
    } else {
        question_model.AddQuestion(data)
            .then(function (result) {
                res.json({
                    Data: result,
                    Message: "Add question and answer successfully",
                    Status: "success"
                });
            }).error(function (error) {
                res.json({
                    Data: [],
                    Message: "Invalid input",
                    Status: "error"
                });
            })
    }

});
module.exports = router;