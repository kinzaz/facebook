const User = require('../models/User');
const {
	validateEmail,
	validateLength,
	validateUsername,
} = require('../helpers/validation');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { generateToken } = require('../helpers/tokens');
const { sendVerificationEmail } = require('../helpers/mailer');

exports.register = async (req, res) => {
	try {
		const {
			first_name,
			last_name,
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

		let tempUsername = first_name + last_name;

		let newUserName = await validateUsername(tempUsername);
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

		const emailVerificationToken = generateToken(
			{ id: user._id.toString() },
			'30m'
		);

		const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
		sendVerificationEmail(user.email, user.first_name, url);

		const token = generateToken({ id: user._id.toString() }, '7d');

		res.send({
			id: user._id,
			username: user.username,
			picture: user.picture,
			first_name: user.first_name,
			last_name: user.last_name,
			token,
			verified: user.verified,
			message: 'Register success. Please, activate your email to start.',
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};

exports.activateAccount = async (req, res) => {
	try {
		const { token } = req.body;
		const user = jwt.verify(token, process.env.TOKEN_SECRET);
		const check = await User.findById(user.id);
		if (check.verified == true) {
			return res
				.status(400)
				.json({ message: 'this email is already activated' });
		} else {
			await User.findByIdAndUpdate(user.id, { verified: true });
			return res
				.status(200)
				.json({ message: 'account has been activated successfully' });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({
				message:
					'the email address you entered is not connected to an account.',
			});
		}
		const check = await bcrypt.compare(password, user.password);
		if (!check) {
			return res.status(400).json({
				message: 'Invalid credentials. Please try again.',
			});
		}
		const token = generateToken({ id: user._id.toString() }, '7d');
		res.send({
			id: user._id,
			username: user.username,
			picture: user.picture,
			first_name: user.first_name,
			last_name: user.last_name,
			token,
			verified: user.verified,
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
