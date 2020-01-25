const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  publicRuntimeConfig: {
    apiURL: process.env.API_URL
  }
};
