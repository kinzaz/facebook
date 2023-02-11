const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const { EMAIL, CLIENT_ID, REFRESH_TOKEN, CLIENT_SECRET } = process.env;
const oauth_link = 'https://developers.google.com/oauthplayground';

exports.sendVerificationEmail = (email, name, url) => {

	const createTransporter = async () => {
		const oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, oauth_link);

		oauth2Client.setCredentials({
			refresh_token: REFRESH_TOKEN,
		});

		const accessToken = await new Promise((resolve, reject) => {
			oauth2Client.getAccessToken((err, token) => {
				if (err) {
					reject('Failed to create access token :(');
				}
				resolve(token);
			});
		});

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				type: 'OAuth2',
				user: EMAIL,
				clientId: CLIENT_ID,
				clientSecret: CLIENT_SECRET,
				refreshToken: REFRESH_TOKEN,
				accessToken,
			},
			tls: {
				rejectUnauthorized: false,
			},
		});

		return transporter;
	};

	const sendEmail = async emailOptions => {
		let emailTransporter = await createTransporter();
		await emailTransporter.sendMail(emailOptions);
	};

	const mailOptions = {
		from: EMAIL,
		to: email,
		subject: 'Facebook email verification',
		html: `<div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:sans-serif;font-weight:600;color:#3b5998"><img src="https://res.cloudinary.com/dmhcnhtng/image/upload/v1645134414/logo_cs1si5.png" alt="" style="width:30px"><span style="font-family:sans-serif">Action required: Activate your facebook account</span></div><div style="padding:1rem 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;color:#141823;font-size:17px;font-family:sans-serif"><span style="font-family:sans-serif">Hello, ${name}!</span><div style="padding:20px 0"><span style="padding:1.5rem 0;font-family:sans-serif;">You recently created an account on Facebook. To complete your registration, please confirm your account.</span></div><a href=${url} style="width:200px;padding:10px 15px;background:#4c649b;color:#fff;text-decoration:none;font-weight:600;font-family:sans-serif;">Confirm your account</a><br><div style="padding-top:20px"><span style="margin:1.5rem 0;color:#898f9c;font-family:sans-serif;">Facebook allows you to stay in touch with all your friends, once refistered on facebook,you can share photos,organize events and much more.</span></div></div>`,
	};

	sendEmail(mailOptions);
};
