const express = require("express");

const UserService = require("../services/users");
const { validate_data_Joi } = require("../middleware");
const { successResponse, errorResponse } = require("../utils/responses");
const { userSchema } = require("../utils/schemas/user");

const usersService = new UserService();

const router = express.Router();

router.post("/", validate_data_Joi(userSchema, "body"), async (req, res) => {
  try {
    const userData = req.body;
    await usersService.createUser(userData);
    successResponse(req, res, userData);
  } catch (error) {
    errorResponse(req, res, error);
  }
});

module.exports = router;
