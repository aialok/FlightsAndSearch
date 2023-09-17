const { FlightServices } = require("../services/index");

const flightServices = new FlightServices();

const create = async (req, res) => {
  try {
    const flight = await flightServices.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Flight created successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Not able to create a flight",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const flight = await flightServices.getAllFlights(req.query);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Flight Fetched successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Not able to fetch a flight",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const flight = await flightServices.getFlight(req.params.id);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Flight Fetched successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Not able to fetch a flight",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await flightServices.updateFlight(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Flight updated successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Not able to update a flight",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
  get,
  update,
};
