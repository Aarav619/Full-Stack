const JWT = require("jsonwebtoken");

exports.isTokenValid = (req, res, next) => { //Callback argument to the middleware function, called "next" by convention.
    try {
        if (!req.headers.token) {
            console.error("No token was sent");
            return res.status(403).send("Invalid token");
        }
        //.verify(wheretoaccesstoken ,TokenKey)
        const decodedToken = JWT.verify(req.headers.token, "TESTSecretKey");//Token verification with Provided key
        if (decodedToken.email === req.body.email) {
            return next();
        }
        console.warn("Please send valid token");
        return res.status(417).send("Token Mismatch");
    }

    catch (error) {
        console.error("Token validation failed.");
        return res.status(401).send("Not a Token.");
    }
}