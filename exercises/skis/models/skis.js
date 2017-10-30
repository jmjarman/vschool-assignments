const mongoose= require("mongoose");
const Schema = mongoose.Schema;


const skiSchema = new Schema({
    character: {
        type: String
        required: true;

},
    price: Number,
    colorOptions: [String],
    sizeOptions: [String]


});

module.exports = mongoose.model("Ski", skiSchema)
