const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect("mongodb://localhost:27017/rf-checkout");
// Define schemas for each of the tables

const hardwareSchema = new Schema({
  unit_name: String,
  unit_type: String,
  assigned_user: Number,
  status: String,
});

const userSchema = new Schema({
  badge_number: Number,
  employee_id: Number,
  first_name: String,
  last_name: String,
});

const issueSchema = new Schema({
  keypad: Boolean,
  notes: String,
  other: Boolean,
  screen: Boolean,
  unit_number: String,
  unresponsive: Boolean,
  status: String,
});

const checkoutSchema = new Schema({
  unit: String,
  date_in: Date,
  date_out: Date,
});

// set models formally

const Hardware = mongoose.model("hardware", hardwareSchema);

const Users = mongoose.model("users", userSchema);

const Issues = mongoose.model("issue_log", issueSchema);

const Checkout = mongoose.model("checkout_log", checkoutSchema);

module.exports = { Hardware, Users, Issues, Checkout };
