var mongoose = require("mongoose");
var schema = mongoose.Schema;

var postSchema = new schema({
    authorName:{type:String},
    post:{type:String},
    title:{type:String},
    voteCount: {type:Number, default: 0},
    created_date: Date
});

module.exports = mongoose.model('postSchema',postSchema);

