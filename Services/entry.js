const { isNumberPlateValid } = require("../utils/isNumberPlateValid");

const toll = require("../Models/tollSchema");

exports.entry = async function (req, res) {
  const { body } = req;

  if (!isNumberPlateValid(body.numberPlate)) {
    res.send({
      status: 422,
      message: "Number plate is not valid",
    });
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
