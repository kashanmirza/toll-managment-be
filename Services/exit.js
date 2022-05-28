const {
    entryPoints,
    baseCharges,
    distanceRate,
    weekendRate,
    oddDiscount,
    evenDiscount,
    holidayDiscount,
  } = require("../constants/seeds");

exports.entry = async function (req,res) {
    const { interChange, numberPlate, dateTime } = req.query;
  
};
