const toll = require("../Models/tollSchema");

const { isNumberPlateValid } = require("../utils/isNumberPlateValid");
const { checkWeekend } = require("../utils/checkWeekend");
const { compareArrays } = require("../utils/compareArrays");
const { checkMondayandWednesday } = require("../utils/checkMondayandWednesday");
const { checkTuesdayAndThursday } = require("../utils/checkTuesdayAndThursday");
const { checkHolidays } = require("../utils/checkHolidays");
const { checkNumberIsEvenOrOdd } = require("../utils/checkNumberIsEvenOrOdd");
const { calculateDiscount } = require("../utils/calculateDiscount");

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
  const response = {};

  if (!isNumberPlateValid(query.numberPlate)) {
    res.send({
      status: 422,
      message: "Number plate is not valid",
    });
  }
  const plateNumber = numberPlate.split("-")[1];

  toll.find(criteria, function (error, result) {
    if (error) throw error;
    else {
      let discountInPercent = 0;
      let subTotal = 0;
      const interChanges = compareArrays(entryPoints, result, "interChange");

      const totalKilometers = interChanges.reduce(
        (total, item) => total + item.km,
        0
      );
      const costPerKilometer = checkWeekend(dateAndTime)
        ? totalKilometers * weekendRate
        : totalKilometers * distanceRate;

      subTotal = baseCharges + costPerKilometer;

      if (
        checkMondayandWednesday(dateAndTime) &&
        checkNumberIsEvenOrOdd(+plateNumber)
      ) {
        console.log("checkMondayandWednesday");
        discountInPercent = discountInPercent + evenDiscount;
      }
      if (
        checkTuesdayAndThursday(dateAndTime) &&
        !checkNumberIsEvenOrOdd(+plateNumber)
      ) {
        console.log("checkTuesdayAndThursday");

        discountInPercent = discountInPercent + oddDiscount;
      }
      if (checkHolidays(dateAndTime)) {
        console.log("checkHolidays");

        discountInPercent = discountInPercent + holidayDiscount;
      }

      const discountedCharges = calculateDiscount(subTotal, discountInPercent);

      response.baseRate = baseCharges;
      response.distanceCostBreakDown = interChanges;
      response.subTotal = baseCharges + costPerKilometer;
      response.discount = discountInPercent;
      response.totalCharges = discountedCharges;

      res.send({
        status: 200,
        data: response,
      });
    }
  });
};
