// Article model

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema ({
    title : {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: String,
        required: true
    },
    comment: {
        type: String
    }
})

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;