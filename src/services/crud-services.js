class CrudServices {
  constructor(CrudRepository) {
    this.CrudRepository = CrudRepository;
  }

  async create(data) {
    try {
      const response = await this.CrudRepository.create(data);
      return response;
    } catch (error) {
      console.log("There is error in service layer");
      throw { error };
    }
  }

  async destroy(id) {
    try {
      const response = await this.CrudRepository.destroy(id);
      return response;
    } catch (error) {
      console.log("There is error in service layer");
      throw { error };
    }
  }

  async update(data, id) {
    try {
      const response = await this.CrudRepository.update(id, data);
      return response;
    } catch (error) {
      console.log("There is error in service layer");
      throw { error };
    }
  }

  async get(id) {
    try {
      const response = await this.CrudRepository.get(id);
      return response;
    } catch (error) {
      console.log("There is error in service layer");
      throw { error };
    }
  }
}

module.exports = CrudServices;
