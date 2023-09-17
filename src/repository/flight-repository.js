const { Flights } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository {
  async #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }

    if (data.minPrice && data.maxPrice) {
      Object.assign(filter, {
        [Op.and]: [
          { price: { [Op.gte]: data.minPrice } },
          { price: { [Op.lte]: data.maxPrice } },
        ],
      });
      return filter;
    }

    if (data.minPrice) {
      Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
      return filter;
    }
    if (data.maxPrice) {
      Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
      return filter;
    }

    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("There is something error in city repository");
      console.log(error);
      throw { error };
    }
  }

  async getAllFlights(filter) {
    try {
      const filterObject = await this.#createFilter(filter);
      const flight = await Flights.findAll({
        where: filterObject,
      });

      return flight;
    } catch (error) {
      console.log("There is something error in city repository");
      console.log(error);
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("There is something error in city repository");
      console.log(error);
      throw { error };
    }
  }

  async updateFlight(flightId, data) {
    try {
      const response = await Flights.update(data, {
        where: {
          id: flightId,
        },
      });

      return response;
    } catch (error) {
      console.log("There is something error in city repository");
      console.log(error);
      throw { error };
    }
  }
}

module.exports = FlightRepository;
