const { hashPassword } = require('../helper/index');
const User = require('../models/user');

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.createUser = async (req, res) => {
  let name = req.body.name || "";
  let password = req.body.password || "";
  let email = req.body.email || "";

  password = await hashPassword(password);

  // Update the req.body or the user object with the hashed password
  const user = new User({
    ...req.body,
    password
  });

  await user.save();
  res.status(200).json(user);
};
