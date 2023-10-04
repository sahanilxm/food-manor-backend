const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    SWIGGY_RESTAURANTS : process.env.SWIGGY_RESTAURANTS,
    SWIGGY_RESTAURANT_MENU : process.env.SWIGGY_RESTAURANT_MENU
}