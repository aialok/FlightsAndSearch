const { Airport } = require("../models/index");
const CrudRepository = require("../repository/crud-repository");
const { Op } = require("sequelize");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }

  async getAllAirports(filter) {
    try {
      if (filter.name) {
        const airports = await Airport.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return airports;
      }
      console.log(filter.name);

      const airports = await Airport.findAll();
      return airports;
    } catch (error) {
      console.log("There is error in Repository Layer");
      throw { error };
    }
  }
}

module.exports = AirportRepository;
