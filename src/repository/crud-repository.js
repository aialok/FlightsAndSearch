class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      throw { error };
    }
  }

  async destroy(modelId) {
    try {
      const response = await this.model.destroy({
        where: {
          id: modelId,
        },
      });
      return response;
    } catch (error) {
      throw { error };
    }
  }

  async get(modelId) {
    try {
      const response = await this.model.findByPk(modelId);
      return response;
    } catch (error) {
      throw { error };
    }
  }

  async update(modelId, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: modelId,
        },
      });

      return response;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CrudRepository;
