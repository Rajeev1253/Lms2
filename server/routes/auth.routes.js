import express from "express";
import authController from "../controllers/auth.controller.js";
import { IsAdmin, requireSignIn } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
router.get("/admin-auth", requireSignIn, IsAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
export default router;
