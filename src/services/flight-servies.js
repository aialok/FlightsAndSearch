const { FlightRepository, AirplaneRepository } = require("../repository/index");
const {compareTime}= require("../utils/helper");

class FlightServices {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
                if(!compareTime(data.arrivalTime, data.departureTime))
                {
                    console.log("Time Error");
                    throw {error:"Arrival time can be less than departure time"};
                }


            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data,
                totalSeat: airplane.capacity
            });

            return flight;
        } catch (error) {
            console.log("There is something wrong in service layer");
            throw { error };
        }
    }

    async getAllFlights(data){
        try {
                const flight= await this.flightRepository.getAllFlights(data);
                return flight;

        } catch (error) {
            console.log("There is something wrong in service layer");
            throw { error };
        }
    }


}

module.exports = FlightServices;
