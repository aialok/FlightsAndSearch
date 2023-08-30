const CrudServices = require("../services/crud-services");
const { AirportRepository } = require("../repository/index");

const airportRepository = new AirportRepository();

class AirportServices extends CrudServices {
  constructor() {
    super(airportRepository);
  }

  async getAllAirports(filter) {
    try {
      const airport = await airportRepository.getAllAirports({
        name: filter.name,
      });
      return airport;
    } catch (error) {
      console.log("There is something wrong in service layer");
      throw { error };
    }
  }
}

module.exports = AirportServices;
