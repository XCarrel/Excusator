import express from "express";
const router = express.Router();

/* GET absences listing. */
router.get("/absences", function (req, res, next) {
  res.end(JSON.stringify(null));
});

router.post("/absences", function (req, res, next) {
  res.end("OK");
});
export default router;
