function checkSession(req, res, next) {
  if (req.session.isLogin === 1) {
    next();
  }
}

module.exports.checkSession = checkSession;
