import express from "express";
import User from "../model/User.js";

const router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  res.render("users/index", { users: await User.findAll(), title: "Etudiants" });
});

router.get("/:id", async function (req, res, next) {
  // Get user, eager loading his absences
  let user = await User.findByPk(parseInt(req.params.id), { include: "absences" });
  if (user) {
    res.render("users/show", { student: user });
  } else {
    res.render("error", { message: "Oups! Utilisateur inconnu" });
  }
});

export default router;
