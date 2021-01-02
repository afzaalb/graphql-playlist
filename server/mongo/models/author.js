const mongoose = require("mongoose");
const authorSchema = require("../schema/author");

module.exports = mongoose.model("author", authorSchema);
