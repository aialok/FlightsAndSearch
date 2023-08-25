const { City } = require('../models/index');
const { Op } = require("sequelize");

class CityRepository {

    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log("There is something error in city repository");
            throw ({ error });
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("There is something error in city repository");
            throw ({ error });
        }
    }

    async updateCity(cityId, data) {

        try {
            // Either of the both can be use...

            // const cityToUpdate = await City.update(data , {
            //     where: {
            //         id: cityId
            //     }
            // })
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();

            return city;

        } catch (error) {
            console.log("There is something error in city repository");
            throw ({ error });
        }



    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("There is something error in city repository");
            throw ({ error });
        }
    }

    async getAllCities(filter) {
        try {
            if (filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name,
                        }
                    }
                })
                return cities;
            }

            console.log(filter.name);


            const cities = await City.findAll();
            return cities;

        } catch (error) {
            console.log("There is something error in city repository");
            throw ({ error });
        }
    }


    async CreateManyCities(data) {
        try {
            const Cities = await City.bulkCreate(data);
            return Cities;

        } catch (error) {
            console.log("There is something error in city repository");
            throw ({ error });
        }

    }


}

module.exports = CityRepository;

//Database logic is here.