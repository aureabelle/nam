const jwt = require("jsonwebtoken");

// Middleware function that checks if the user has a token
// Add function to any routes that need to be proctected / private -- only accessible using a token.

module.exports = function(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access denied!");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send("Invalid token!");
  }
};
