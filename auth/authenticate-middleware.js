/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require("jsonwebtoken");

// hardcoded for time constraint
const secret = "notsosecretsecret";

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: "Invalid token" });
            } else {
                req.decodedJWT = decodedToken;
                next();
            }
        });
    } else {
        res.status(401).json({ you: "shall not pass!" });
    }
};
