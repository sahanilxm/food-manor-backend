const fetch = require('cross-fetch');

const { SWIGGY_RESTAURANTS, SWIGGY_RESTAURANT_MENU } = require('./server-config.js');

const getRestaurants = async (req, res) =>{
    try {
        const { lat, lng } = req.query;
        const URL = `${SWIGGY_RESTAURANTS}lat=${lat}&lng=${lng}` ;
        let response  = await fetch(URL, {
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
            }
        });
        response = await response.json();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            data: [],
            success: false,
            message: 'Something went wrong!!',
        });
    }
};

const getRestaurantMenu = async (req, res) =>{
    try {
        const { lat, lng, restaurantId } = req.query;
        const URL = `${SWIGGY_RESTAURANT_MENU}lat=${lat}&lng=${lng}&restaurantId=${restaurantId}` ;
        let response  = await fetch(URL, {
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
            }
        });
        response = await response.json();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            data: [],
            success: false,
            message: 'Something went wrong!!',
        });
    }

};

module.exports = {
    getRestaurants,
    getRestaurantMenu
};
