module.exports = {
	name: "GetYourRefund", // optional, falls back to object key
	description: "Tax credits",
	options: {
		frequency: 60 * 4, // (in minutes), 4 hours
	},
	urls: [
		"https://www.getyourrefund.org/"
	]
};
