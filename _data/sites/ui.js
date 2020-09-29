module.exports = {
	name: "50 State Benefits", // optional, falls back to object key
	description: "50 State Benefits",
	options: {
		runs: 1,
		frequency: 60 * 12, // (in minutes)
		freshChrome: "run",
	},
	urls: [
    "https://initialclaims.labor.alabama.gov/",
    "https://my.alaska.gov/",
    "https://des.az.gov/services/employment/unemployment-individual/apply-ui-benefits",
    "https://www.ezarc.adws.arkansas.gov/",
    "https://edd.ca.gov/Unemployment/Filing_a_Claim.htm",
    "https://cdle.colorado.gov/unemployment",
    "https://uiclaimsct.force.com/Customers",
    "https://ui.delawareworks.com/telebenefits.php",
    "https://does.dcnetworks.org/InitialClaims/",
    "https://covid19.floridajobs.org/",
	]
};
