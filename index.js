const express = require('express');
const cors = require('cors');

const { PORT } = require('./src/server-config');

const setupAndRunServer = () => {
    const app = express();

    app.use(cors());


    app.listen(PORT, ()=>{
        console.log(`Server started on Port number: ${PORT}`);
    })
};

setupAndRunServer();