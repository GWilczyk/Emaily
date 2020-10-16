const EMAILREGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emails => {
	const invalidEmails = emails
		.split(',')
		.map(email => email.trim())
		.filter(email => !EMAILREGEX.test(email));

	if (invalidEmails.length === 1) {
		return `This email is invalid: ${invalidEmails}`;
	}
	if (invalidEmails.length > 1) {
		return `These emails are invalid: ${invalidEmails}`;
	}
	return;
};
