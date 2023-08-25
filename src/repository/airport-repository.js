
const { Airport } = require('../models/index');
const { Op } = require("sequelize");


class AirportRepository {

    async createAirport(data) {

        try {
            const airport = await Airport.create(data);
            return airport;
        } catch (error) {
            console.log("There is error in Repository Layer");
            throw ({ error });
        }

    }

    async deleteAirport(AirportId) {


        try {
            const airport = await Airport.findByPk(AirportId);

            if (!airport) {
                console.log("Airport not found");
                return false;
            }

            await airport.destroy();

            console.log("Airport Deleted Successfully");
            return true;

        } catch (error) {
            console.log("There is error in Repository Layer");
            throw ({ error });
        }


    }

    async getAirport(AirportId) {
        try {
            const airport = await Airport.findByPk(AirportId);
            return airport;
        } catch (error) {
            console.log("There is error in Repository Layer");
            throw ({ error });
        }
    }

    async updateAirport( AirportId, data) {
        try {
            const airport = await Airport.update(data, {
                where: {
                    id : AirportId
                }
            })
            return airport;
        } catch (error) {
            console.log("There is error in Repository Layer");
            throw ({ error });
        }

    }

    async getAllAirports(filter) {
        try {
                if(filter.name)
                {
                    const airports= await Airport.findAll({
                        where : {
                            name : {
                                [Op.startsWith]: filter.name,
                            }
                        }
                    })
                    return airports;
                }
                console.log(filter.name);

                const airports=await Airport.findAll();
                return airports;
            
        } catch (error) {
            console.log("There is error in Repository Layer");
            throw ({ error });
        }


    }

}


module.exports = AirportRepository;