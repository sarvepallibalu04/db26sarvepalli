const mongoose = require("mongoose")
const penSchema = mongoose.Schema({
pentype: String,
color: String,
price: Number
})
module.exports = mongoose.model("Pen", penSchema)