import Jwt from "jsonwebtoken";

//protected route

export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    console.log(req.headers.Authorization);
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - Token not provided" });
    }
    Jwt.verify(token, "zenmonk", (err, user) => {
      if (err) {
        return res.status(403).json({ error: "Forbidden - Invalid token" });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
export const IsAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    console.log("MIDDLE", user);
    if (user.role !== "User") {
      return res.status(401).send({
        success: false,
        message: `Unauthorized Acess`,
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: `error in admin middleware`,
    });
  }
};
