const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const referralSchema = new Schema(
  {
    referredBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    refereeName: {
      type: String,
      required: true,
    },
    referralCourse: {
      type: String,
      required: true,
    },
    refereeEmail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Referral", referralSchema);
