const express = require('express');
const cors = require('cors');

const { PORT } = require('./src/config/server-config');
const Router = require('./src/router/index.js');

const setupAndRunServer = () => {
    const app = express();

    app.use(cors());

    app.use('/api', Router);

    app.listen(PORT, ()=>{
        console.log(`Server started on Port number: ${PORT}`);
    })
};

setupAndRunServer();