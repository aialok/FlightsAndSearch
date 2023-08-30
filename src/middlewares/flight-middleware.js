const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
  ) {
    return res.status(400).json({
      data: {},
      message: "Invalid Request",
      success: false,
      err: "Missing mandatory properties to create a flight",
    });
  }

  next();
};

module.exports = {
  validateCreateFlight,
};
