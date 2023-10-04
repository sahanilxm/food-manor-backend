const fetch = require('cross-fetch');

const { SWIGGY_RESTAURANTS, SWIGGY_RESTAURANT_MENU } = require('../config/server-config.js');

class RestaurantService{

    async getRestaurants ({lat, lng}){
        try {
            const URL = `${SWIGGY_RESTAURANTS}lat=${lat}&lng=${lng}` ;
            let response  = await fetch(URL, {
                headers:{
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
                }
            });
            response = await response.json();
            return response;
        } catch (error) {
            console.log('Something Wrong at Service layer.');
            throw error;
        }
    };

    async getRestaurantMenu ({lat, lng, restaurantId}){
        try {
            const URL = `${SWIGGY_RESTAURANT_MENU}lat=${lat}&lng=${lng}&restaurantId=${restaurantId}` ;
            let response  = await fetch(URL, {
                headers:{
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
                }
            });
            response = await response.json();
            return response;
        } catch (error) {
            console.log('Something Wrong at Service layer.');
            throw error;
        }
    }
};

module.exports = RestaurantService;