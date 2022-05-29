const _ = require('lodash')

const { isNumberPlateValid } = require("../utils/isNumberPlateValid");

const toll = require("../Models/tollSchema");

exports.entry = async function (req, res) {
  const { body } = req;

  if (_.isEmpty(body)) {
    res.send({
      status: 404,
      message: "Please provide data",
    });
    return
  }

  if (!isNumberPlateValid(body.numberPlate)) {
    res.send({
      status: 422,
      message: "Number plate is not valid",
    });
    return
  }

  toll.create(body, function (error, result) {
    if (error) throw error;
    else {
      res.send({
        status: 200,
        message: "Data saved",
      });
    }
  });
};
