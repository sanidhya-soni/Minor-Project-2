const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
const axios = require('axios')
router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		const userName2 = await User.findOne({ userName: req.body.userName });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });
		if (userName2)
			return res
				.status(409)
				.send({ message: "User with given user name already Exist!" });
		var config = {
			method: 'post',
			url: 'https://api.chatengine.io/users/',
			headers: {
				'PRIVATE-KEY': '8901e435-bd35-4e3e-9583-1d50fdd7ceca'
			},
			data: req.body
		};

		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
			})
			.catch(function (error) {
				console.log(error);
			});
		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.secret, salt);

		await new User({ ...req.body, secret: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
