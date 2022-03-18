const bcrypt = require('bcrypt');
const User = require('../models/User');

const getUsers = async (req, res) => {
  try {
    // get all loctions
    const users = await User.find();
    res.status(200).send(users);
  } catch (e) {
    res.status(500).send(e);
  }
};

const getUser = async (req, res) => {
  try {
    // get all loctions
    const users = await User.findOne(
      { _id: req.params.id },
    );
    res.status(200).send(users);
  } catch (e) {
    res.status(500).send(e);
  }
};

const login = async (req, res) => {
  try {
    // validate email
    const validUser = await User.findOne({ email: req.body.email });
    if (!validUser) {
      return res.status(400).send({ error: 'Wrong email or password' });
    }

    // validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      validUser.password,
    );
    if (!validPassword) {
      return res.status(400).send({ error: 'Wrong email or password' });
    }

    return res.status(200).send({
      data: {
        email: validUser.email,
        id: validUser._id,
      },
    });
  } catch (e) {
    return res.status(500).send({ error: e._message });
  }
};

const register = async (req, res) => {
  try {
    // Check if email exists
    const emailExists = await User.findOne({
      email: req.body.email,
    }).exec();

    if (emailExists) {
      return res.status(400).send({ error: 'Email is taken' });
    }

    // generate hashed pw
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create new user
    const body = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: hashedPassword,
      email: req.body.email,
    };

    const user = await User.create(body);

    return res.status(200).send({ data: user._id });
  } catch (e) {
    return res.status(500).send({ error: e._message });
  }
};

module.exports = {
  login, register, getUsers, getUser,
};
