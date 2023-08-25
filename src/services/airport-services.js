const {AirportRepository}= require("../repository/index");


class AirportServices{

        constructor(){
            this.airportRepository= new AirportRepository();
        }

        async createAirport(data)
        {
            try {
                const airport= await this.airportRepository.createAirport(data);
                return airport;
            } catch (error) {
                console.log("There is something wrong in service layer");
                throw ({ error });
            }
        }

        async deleteAirport(AirportId){
            try {
                    const response= await this.airportRepository.deleteAirport(AirportId);
                    return response;
            } catch (error) {
                console.log("There is something wrong in service layer");
                throw ({ error });
            }
        }

        async  getAirport(AirportId){
            try {
                const airport= await this.airportRepository.getAirport(AirportId);
                return airport;
            } catch (error) {
                console.log("There is something wrong in service layer");
                throw ({ error });
            }
        }

        async updateAirport(AirportId, data){
            try {
                    const airport= await this.airportRepository.updateAirport(AirportId,data)

                    return airport;
            } catch (error) {
                console.log("There is something wrong in service layer");
                throw ({ error });
            }
        }

        async getAllAirports(filter)
        {
            try {
                const airport=await this.airportRepository.getAllAirports({name:filter.name});
                return airport;
            } catch (error) {
                console.log("There is something wrong in service layer");
                throw ({ error });
            }
        }



}

module.exports= AirportServices;