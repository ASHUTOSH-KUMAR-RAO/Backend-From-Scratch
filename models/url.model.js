const mongoose = require("mongoose");
const Schema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    longURL: {
      type: String,
      required: true,
      unique: true,
    },
    redirect: {
      type: String,
      required: true,
    },

    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
); //  Todo => basically hamne yeha per isiliye kyuki hame pta chal sake ki koi bhi entry kitne baje create hui hogi

const URL = mongoose.model("URL", Schema);

module.exports = URL;
