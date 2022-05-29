const toll = require("../Models/tollSchema");

const { isNumberPlateValid } = require("../utils/isNumberPlateValid");
const { checkWeekend } = require("../utils/checkWeekend");
const { compareArrays } = require("../utils/compareArrays");

const {
  entryPoints,
  baseCharges,
  distanceRate,
  weekendRate,
  oddDiscount,
  evenDiscount,
  holidayDiscount,
} = require("../constants/seeds");

exports.exit = async function (req, res) {
  const { query } = req;
  const { numberPlate, dateAndTime, interChange } = query;
  const criteria = { numberPlate, dateAndTime };
  const response = { baseRate: baseCharges };

  if (!isNumberPlateValid(query.numberPlate)) {
    res.send({
      status: 422,
      message: "Number plate is not valid",
    });
  }

  toll.find(criteria, function (error, result) {
    if (error) throw error;
    else {
      console.log("result", result);
      const interChanges = compareArrays(entryPoints, result, "interChange");
      const totalKilometers = interChanges.reduce((total, item) => total + item.km ,0);
      const costPerKilometer = checkWeekend(dateAndTime) ? totalKilometers * 1.5 : totalKilometers * 0.2;
      console.log(costPerKilometer)
    }

    res.send({
      status: 200,
      data: result,
    });
  });
};
