const loginService = require('../Services/login');

exports.checkLogin = (req, res) => {
  loginService.checkLogin({

  },req,res);     
}