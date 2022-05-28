let count = 0;

const db = [];
exports.entry = async function (req, res) {
  const { interChange, numberPlate, dateTime } = req.body;

  const tuple = {
    id: count++,
    interChange,
    numberPlate,
    dateTime,
    numberPlate,
    charges: 20,
  };
  db.push(tuple);
  res.send({
    status: 200,
    message: "Successfully submitted",
  });
};
