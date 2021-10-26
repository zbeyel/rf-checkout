const mongoose = require("mongoose");
// const { Schema } = mongoose;

mongoose.connect("mongodb://localhost:27017/rf-checkout");

const Users = mongoose.model("users", {
  badge_number: Number,
  employee_id: Number,
  first_name: String,
  last_name: String,
});
const users = new Users({
  badge_number: 9105,
  employee_id: 101661,
  first_name: "Zach",
  last_name: "Beyel",
});

users.save().then(() => console.log("meow"));
