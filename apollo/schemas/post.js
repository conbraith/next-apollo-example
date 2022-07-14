const mongoose = require("mongoose")
const { comment } = require('./comment')
const { Schema } = mongoose

const postSchema = new Schema({
    id: {
        type: Number,
        trim: false
    },
    content: {
        type: String,
        trim: true
    },
    user_id: {
        type: Number,
        trim: false
    },
    created_time: {
        type: Date,
        trim: false
    },
    updated_time: {
        type: Date,
        trim: false
    },
    comments: [comment.schema]
});

const post = mongoose.model("post", postSchema);
module.exports = { post }