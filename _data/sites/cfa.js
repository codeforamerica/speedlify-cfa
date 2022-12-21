module.exports = {
  name: "Code for America", // optional, falls back to object key
  description: "Code for America",
  options: {
    frequency: 60 * 4, // (in minutes), 4 hours
    chromeFlags: ['--headless', '--disable-dev-shm-usage'],
  },
  urls: [
    "https://www.getcalfresh.org/",
    "https://www.getyourrefund.org/en",
    "https://mnbenefits.mn.gov/",
    "https://demo.mnbenefits.org/",
    "https://www.clearmyrecord.org",
    "https://www.codeforamerica.org",
    "https://www.getctc.org/en",
    "http://app-46361.on-aptible.com/"
  ]
};
