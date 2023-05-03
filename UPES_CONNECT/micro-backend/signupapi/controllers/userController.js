const UserModel = require('../models/userModel');
const bcrypt = require("bcrypt");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const jwt = require("jsonwebtoken");

class UserController {
  static async registerUser(req, res) {
    const validate = (data) => {
      const schema = Joi.object({
        username: Joi.string().required().label("User Name"),
        secret: passwordComplexity().required().label("Password"),
        email: Joi.string().email().required().label("Email"),
        first_name: Joi.string().regex(/^[a-zA-Z]+$/).required().label("First Name"),
        last_name: Joi.string().regex(/^[a-zA-Z]+$/).required().label("Last Name"),

      });
      return schema.validate(data);
    };
    const { username, secret, email, first_name, last_name } = req.body;
    try {
      const { error } = validate(req.body);
      if (error)
        return res.status(400).send({ message: error.details[0].message });
      const createdUser = await UserModel.createUser(username, secret, email, first_name, last_name);
      res.status(201).json(createdUser);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: error.message });
    }
  }
}

module.exports = UserController;
