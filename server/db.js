const { Users } = require("./models.js");

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
