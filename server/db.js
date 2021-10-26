const { Users, Hardware } = require("./models.js");

//USER Database Functions
const createUser = (userObject) => {
  let { badge_number, employee_id, first_name, last_name } = userObject;
  let newUser = new Users({
    badge_number,
    employee_id,
    first_name,
    last_name,
  });
  newUser.save().then(() => console.log("addition complete"));
};

const findUserByBadgeNumber = async (badge_number) => {
  const query = await Users.where({ badge_number });
  return query;
};

const updateUserByBadgeNumber = async (badge_number, updateToBeApplied) => {
  // updateToBeApplied is an object that will be replacing data in the found document
  await Users.updateOne({ badge_number }, updateToBeApplied);
};

const deleteUserByBadgeNumber = async (badge_number) => {
  await Users.deleteOne({ badge_number });
};

//HARDWARE Database Functions
//TODO Add equipment functions
//TODO Remove equipment functions
//TODO Edit equipment functions
//TODO Delete equipment functions

//ISSUE Functions
//TODO Add issue query
//TODO update existing issue query
//TODO delete existing issue query

//CheckoutLog functions
//TODO Check Out equipment functions
//TODO Check In equipment functions
//TODO Check out history functions
