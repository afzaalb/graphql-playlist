const mongoose = require("mongoose");
const bookSchema = require("../schema/book");

module.exports = mongoose.model("book", bookSchema);
