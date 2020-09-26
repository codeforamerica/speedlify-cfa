module.exports = {
	name: "Safety Net North", // optional, falls back to object key
	description: "Safety Net North",
	options: {
		runs: 1,
		frequency: 60 * 12, // (in minutes)
		freshChrome: "run",
	},
	urls: [
    "https://abe.illinois.gov/abe/access/",
    "https://fssabenefits.in.gov/bp/#/",
    "https://secureapp.dhs.state.ia.us/oasis/OASIS0100.aspx",
    "https://dhsservices.iowa.gov/apspssp/ssp.portal",
    "http://www.dcf.ks.gov/services/ees/Pages/Application-for-benefits.aspx",
    // "https://newmibridges.michigan.gov/s/isd-landing-page?language=en_US",
    // "https://applymn.dhs.mn.gov/online-app-web/spring/public/process-login?execution=e1s1",
    // "https://auth.mnsure.org/RIDP/?account_type=Individual",
    // "https://mydss.mo.gov/",
    // "https://mydss.mo.gov/",
    // "http://www.nd.gov/dhs/eligibility/index.html",
    // "http://dhhs.ne.gov/Children_Family_Services/AccessNebraska/Pages/accessnebraska_index.aspx",
    // "https://odjfsbenefits.ohio.gov/SelfServiceSplash.jsf",
    // "https://apps.sd.gov/ss36snap/web/Portal/Default.aspx",
    // "https://access.wisconsin.gov/access/",
	]
};
