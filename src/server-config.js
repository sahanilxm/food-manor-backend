const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    SWIGGY_RESTAURANT : process.env.SWIGGY_RESTAURANT
}