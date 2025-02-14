const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const programSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  referrer: {
    type: Number,
    required: true,
  },
  referee: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Program", programSchema);
