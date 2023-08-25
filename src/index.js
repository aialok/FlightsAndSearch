const express = require('express');
const bodyParser = require('body-parser');

//Envirooment


const { PORT } = require("./config/serverConfig");
const apiRoutes = require('./routes/index');
const db = require("./models/index");

const { Airport, City } = require('./models/index');

const setupAndStartServer = async () => {

    //create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', apiRoutes);

    // Experiment

    // async function  deleteAirport(AirportId) {


    //     try {
    //         const airport = await Airport.findByPk(AirportId);

    //         if(!airport)
    //         {
    //             console.log("Airport not found");
    //             return false;
    //         }

    //         await airport.destroy();

    //         console.log("Airport Deleted Successfully");
    //         return true;
    //     } catch (error) {
    //         console.log("There is error in Repository Layer");
    //         throw ({ error });
    //     }


    // }

    // deleteAirport(3);



    //DB sync 

    // if (process.env.SYNC_DB) {
    //     db.sequelize.sync({ alter: true });
    // }

    // const city = await City.findOne({
    //     where: {
    //         id: 10
    //     }
    // })

    // const airport = await city.getAirports();
    // airport.forEach(airport => {
    //     console.log(airport.name);
    // });


    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    });

}

setupAndStartServer();



