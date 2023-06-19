import mongoose from "mongoose";

const debtSchema = new mongoose.Schema(
  {
    id: {type: String},
    nameStore: {type: String, required: true},
    value: {type: Number, required: true},
    status: {type: Boolean, required: true},
    day: {type: Number}
  }
);

const debts = mongoose.model('debts', debtSchema)

export default debts;