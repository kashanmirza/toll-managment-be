var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var tollSchema = new Schema({
  numberPlate: {
    type: String,
  },
  dateAndTime: {
    type: Date,
  },
  interChange: {
    type: String,
  },
},{ timestamps: true });

module.exports = mongoose.model("toll", tollSchema);
