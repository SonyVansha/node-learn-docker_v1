const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Post must have Tittle"],
    },
    body: {
        type: String,
        required: [true, "Post must have Body"],
    },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;