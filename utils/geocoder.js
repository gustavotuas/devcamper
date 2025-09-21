const GeoCoder = require("node-geocoder");

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  httpAdapter: "https",
  apiKey: process.env.GEOCODER_API_KEYS,
  formatter: null,
};

const geocoder = GeoCoder(options);

module.exports = geocoder;
