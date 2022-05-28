const bcrypt = require("bcrypt");

exports.checkLogin = async function (query, req, res) {
  const { password } = req.body;
  req.session.isLogin = 0;
  if (password == "Admin") {
    req.session.isLogin = 1;
    res.send(re);
  } else {
    res.send("false");
  }
};
