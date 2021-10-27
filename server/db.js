const { Users, Hardware, Issues, Checkout } = require("./models.js");

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
const createHardware = async (hardwareObject) => {
  let { unit_name, unit_type, assigned_user, status } = hardwareObject;
  let newHardware = new Hardware({
    unit_name,
    unit_type,
    assigned_user,
    status,
  });
  await newHardware.save();
};

const deleteHardwareByUnitNumber = async (unit_number) => {
  await Hardware.deleteOne({ unit_number });
};

const updateHardware = async (unit_number, updateToBeApplied) => {
  await Hardware.updateOne({ unit_number }, updateToBeApplied);
};

const findHardwareByUnitNumber = async (unit_number) => {
  let res = await Hardware.where({ unit_number });
  return res;
};

//ISSUE Functions
const createIssue = async (issueObject) => {
  let {
    keypad,
    notes,
    other,
    screen,
    unit_number,
    unit_type,
    unresponsive,
    status,
  } = issueObject;
  let newIssue = new Issues({
    keypad,
    notes,
    other,
    screen,
    unit_number,
    unit_type,
    unresponsive,
    status,
  });
  await newIssue.save();
};

const updateIssue = async (_id, updateToBeApplied) => {
  await Issues.updateOne({ _id }, updateToBeApplied);
};

const deleteIssueByID = async (_id) => {
  await Issues.deleteOne({ _id });
};

const findIssueByID = async (_id) => {
  let res = await Issues.where({ _id });
  return res;
};

const findIssueByStatus = async (status) => {
  let res = await Issues.where({ status });
  return res;
};

const findIssuesByHardware = async (status, unit_number) => {
  let res = await Issues.where({ unit_number, status });
  return res;
};

//CheckoutLog functions
const checkOutEquipment = async (unit_number, date_out) => {
  let newCheckout = await Checkout({ unit_number, date_out, date_in: null });
  await newCheckout.save();
};

const checkInEquipment = async (unit_number, date_in) => {
  await Checkout.updateOne({ date_in: null, unit_number }, date_in);
};

const findCheckoutByHardware = async (unit_number) => {
  let res = await Checkout.where({ unit_number });
  return res;
};
