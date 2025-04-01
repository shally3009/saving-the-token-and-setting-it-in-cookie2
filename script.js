const jwt = require('jsonwebtoken');


const encrypt = (payload, secret) => {
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  return token;
};


const verifyToken = (token, secret) => {
  try {
    const decoded = jwt.verify(token, secret);
    console.log("Token is valid:", decoded);
    return decoded;
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      console.log("Token has expired.");
    } else {
      console.log("Invalid token.");
    }
    return null;
  }
};

module.exports = { encrypt, verifyToken };