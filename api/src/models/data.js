const mongoose = require("../database/database");

const dataSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    price: Number
  },
  {
    timestamps: { createdAt: false, updatedAt: true }
  }
);

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
