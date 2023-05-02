const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		const userName2 = await User.findOne({ username: req.body.username });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });
		if (userName2)
			return res
				.status(409)
				.send({ message: "User with given user name already Exist!" });
		console.log(req.body);	
		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.secret, salt);

		await new User({ ...req.body, secret: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
