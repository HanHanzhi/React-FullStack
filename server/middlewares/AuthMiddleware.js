/*what we want to do here, is grab the token that is sent through
the front end, then validate using JWT function call verify
to see if it is valid, if it is valid, we continue with certain
action, else we return a json response with error msg*/
const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (!accessToken) return res.json({ error: "User Not Logged In" });
  try {
    const validToken = verify(accessToken, "importantsecret");
    req.user = validToken;
    if (validToken) {
      return next();
    }
  } catch (error) {
    return res.json({ error: err });
  }
};

module.exports = { validateToken };
