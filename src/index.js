const fetch = require('cross-fetch');

const { SWIGGY_RESTAURANT } = require('./server-config.js');

const getRestaurants = async (req, res) =>{
    try {
        const { lat, lng } = req.query;
        const URL = `${SWIGGY_RESTAURANT}lat=${lat}&lng=${lng}` ;
        console.log(URL);
        let response  = await fetch(URL, {
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
            }
        });
        response = await response.json();
        console.log(response);
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
};
