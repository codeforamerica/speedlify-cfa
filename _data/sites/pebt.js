module.exports = {
	name: "Pandemic EBT", // optional, falls back to object key
	description: "Pandemic EBT",
	options: {
		runs: 1,
		frequency: 60 * 12, // (in minutes)
		freshChrome: "run",
	},
	urls: [
		"https://ca.p-ebt.org/",
		"https://mn.p-ebt.org/",
		"https://dtaconnect.eohhs.mass.gov/pebt",		
	]
};
