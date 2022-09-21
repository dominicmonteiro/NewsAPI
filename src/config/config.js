require('dotenv/config');

const config = {
    Api: {
      port: process.env.PORT || 8080,
    }
};

module.exports = config;
