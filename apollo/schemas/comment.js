const mongoose = require("mongoose")
const { Schema } = mongoose

const commentSchema = new Schema({
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
    }
});

const comment = mongoose.model("comment", commentSchema);
module.exports = { comment }
