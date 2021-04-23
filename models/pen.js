const mongoose = require("mongoose")
const penSchema = mongoose.Schema({
pentype:{
    type: String,
    minLength: 3,
    maxLength:10
},
color: String,
price: {
    type:Number,
    min:1,
    max:500
}
})
module.exports = mongoose.model("Pen", penSchema)