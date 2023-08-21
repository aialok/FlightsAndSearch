const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require("./config/serverConfig");
const apiRoutes=require('./routes/index');

const setupAndStartServer = async () => {

    //create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', apiRoutes);

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    });

}

setupAndStartServer();



