const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const authMiddleware = async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (error) {
      res
        .status(400)
        .json({
          message: "Token mudati tugagan Iltimos qaytadan ilovaga kiring",
        });
    }
  } else {
    res.status(500).json({ message: "hech qanday token biriktirlmagan" });
  }
};

module.exports = {
  authMiddleware,
};
