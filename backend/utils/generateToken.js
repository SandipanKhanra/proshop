import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  //set JWT as HTTP-Only cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "Developement",
    sameSite: "strict",
    maxAge: 15 * 24 * 60 * 60 * 1000, //15 days,
  });
};

export default generateToken;
