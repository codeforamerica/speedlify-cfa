module.exports = {
	name: "GetCalFresh", // optional, falls back to object key
	description: "SNAP",
	options: {
		frequency: 60 * 4, // (in minutes), 4 hours
	},
	urls: [
		"https://www.getcalfresh.org/"
	]
};
