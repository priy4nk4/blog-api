var mongoose = require("mongoose");
var PostSchema = require("../model/post");

exports.homepage = function (req, res, next) {
    res.render('index', { title: 'My App' });
};

exports.getData = function (req, res, next) {
    //res.render('mydata');

    PostSchema.find({},(err,posts) => {
        if(err){
            res.send({status: "error", message:err})
        }else{
            res.send({status: "success",posts});
        }
    }).sort({created_date:'desc'})
};

exports.saveData = function (req, res, next) {
    var postData = req.body.postData;
    var post = new PostSchema();
    post.authorName = postData.authorName;
    post.post = postData.post;
    post.title = postData.title;
    post.created_date = new Date();

    post.save((err,postData)=>{
        if(err){
            res.send({status:'error',message:err});
        }else{
            res.send({status:'success',message:'Saved successfully'});
        }
    });
};

exports.likeDislikePost = function (req, res, next) {
    //res.render('mydata');

    var id = req.body._id;
    var action = req.body.action;

    PostSchema.findById(id,(err,post) => {
        if(err){
            res.send({status: "error", message:err})
        }else{
            if(action == "Like"){
                post.voteCount = post.voteCount+1;
            }else{
                post.voteCount = post.voteCount-1;
            }
            post.save((err,updPost)=>{
                if(err){
                    res.send({status: "error", message:err})
                }else{
                    post.save((err,updPost)=>{
                        res.send({status: "success", updPost:updPost})
                    })
                }
            });
        }
    })
};