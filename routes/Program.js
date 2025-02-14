const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middleware");

const Program = require("../models/Program");
const wrapAsync = require("../utilit/wrapAsync");

router.get(
  "/",
  isAuthenticated,
  wrapAsync(async (req, res) => {
    let programs = await Program.find({});
    res.status(200).json(programs);
  })
);

module.exports = router;
