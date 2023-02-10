const User = require('../models/User');
const { validateEmail, validateLength, validateUsername } = require('../helpers/validation');
const bcrypt = require('bcrypt');
exports.register = async (req, res) => {
	try {
		const {
			first_name,
			last_name,
			username,
			email,
			password,
			gender,
			bYear,
			bMonth,
			bDay,
		} = req.body;

		if (!validateEmail(email)) {
			return res.status(400).json({
				message: 'Invalid email address',
			});
		}
		const checkEmail = await User.findOne({ email });
		if (checkEmail) {
			return res.status(400).json({
				message:
					'The email address already exists, try with a different email address',
			});
		}

		if (!validateLength(first_name, 3, 30)) {
			return res.status(400).json({
				message: 'firstname must be between 3 and 30 characters',
			});
		}
		if (!validateLength(last_name, 3, 30)) {
			return res.status(400).json({
				message: 'lastname must be between 3 and 30 characters',
			});
		}
		if (!validateLength(password, 6, 40)) {
			return res.status(400).json({
				message: 'password must be at least 6 characters',
			});
		}

		const hashPassword = await bcrypt.hash(password, 12);

		let tempUsername = first_name + last_name

		let newUserName = await validateUsername(tempUsername)
		const user = await new User({
			first_name,
			last_name,
			username: newUserName,
			email,
			password: hashPassword,
			gender,
			bYear,
			bMonth,
			bDay,
		}).save();

		res.json(user);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};
