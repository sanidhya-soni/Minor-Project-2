const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	username: { type: String, required: true },
	secret: { type: String, required: true },
	email: { type: String, required: true },
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		username: Joi.string().required().label("User Name"),
		secret: passwordComplexity().required().label("Password"),
		email: Joi.string().email().required().label("Email"),
		first_name: Joi.string().required().label("First Name"),
		last_name: Joi.string().required().label("Last Name"),
		
	});
	return schema.validate(data);
};

module.exports = { User, validate };
