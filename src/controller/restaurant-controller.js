const { RestaurantService } = require("../services/index");

const restaurantService = new RestaurantService();

const getRestaurants = async (req, res) =>{
    try {
        const info = req.query;
        const response =await restaurantService.getRestaurants({
            lat : info.lat,
            lng : info.lng
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            data : [],
            success : false,
            message : 'Something went wrong!'
        });
    }
};

const getRestaurantMenu = async (req, res) =>{
    try {
        const info = req.query;
        const response =await restaurantService.getRestaurantMenu({
            lat : info.lat,
            lng : info.lng,
            restaurantId : info.restaurantId
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            data : [],
            success : false,
            message : 'Something went wrong!'
        });
    }
};

module.exports = {
    getRestaurants,
    getRestaurantMenu
}