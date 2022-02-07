const User = require("../models/User");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const handleRefreshToken = async (req, res) => {
   const cookies = req.cookies;
   if (!cookies?.jwt) return res.sendStatus(401);
   console.log(cookies.jwt)
   const refreshToken = cookies.jwt;

   const user = await User.findOne({ refreshToken }).exec();
   if (!user) return res.sendStatus(403); //Forbidden
   // evaluate jwt
   jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
         if (err || user.email !== decoded.email) return res.sendStatus(403);
         const roles = Object.values(user.roles);
         const accessToken = jwt.sign(
            {
               UserInfo: {
                  email: decoded.email,
                  roles: roles,
               },
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "30s" }
         );
         res.json({ accessToken });
      }
   );
};

module.exports = { handleRefreshToken };
