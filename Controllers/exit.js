const exitService = require('../Services/exit');

exports.exit = (req, res) => {
  exitService.exit(req,res);
};
