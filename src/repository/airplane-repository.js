const {airplane} = require("../models/index");

class AirplaneRepository{

    async getAirplane(AirplaneId)
    {
        try {
            const Airplane= await  airplane.findByPk(AirplaneId);
            return Airplane;

        } catch (error) {
            console.log("There is something error in city repository");
            console.log(error);
            throw ({ error });
        }
    }

}

module.exports=AirplaneRepository;