const entryService = require('../Services/entry');

exports.entry = (req, res) => {
    entryService.entry(req,res);
};
