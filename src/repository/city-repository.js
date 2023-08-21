const { City } = require('../models/index');

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

    async updateCity({ cityId ,data }) {

        try {
            const cityToUpdate = await City.update({ data }, {
                where: {
                    id: cityId
                }
            })

            return cityToUpdate;

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

}

module.exports = CityRepository;