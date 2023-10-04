const express = require('express');
const cors = require('cors');

const { PORT } = require('./src/server-config.js');
const Service  = require('./src/index.js');

const setupAndRunServer = () => {
    const app = express();

    app.use(cors());

    app.get('/api/restaurants', Service.getRestaurants);
    app.get('/api/restaurants/menu', Service.getRestaurantMenu);

    app.listen(PORT, ()=>{
        console.log(`Server started on Port number: ${PORT}`);
    })
};

setupAndRunServer();