const express = require("express");
const router = express.Router();
const wrapAsync = require("../utilit/wrapAsync");

const User = require("../models/user");
const Referral = require("../models/referral");
const { isAuthenticated } = require("../middleware");

router.post(
  "/refer",
  isAuthenticated,
  wrapAsync(async (req, res) => {})
);
