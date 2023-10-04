const express = require('express');

const RestaurantController = require('../controller/restaurant-controller');

const router = express.Router();

router.get('/restaurants', RestaurantController.getRestaurants);
router.get('/restaurants/menu', RestaurantController.getRestaurantMenu);

module.exports = router;