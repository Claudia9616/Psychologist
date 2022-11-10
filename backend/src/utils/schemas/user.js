const Joi = require("joi");

const name = Joi.string()
  .pattern(/^[a-zA-Z]+$/)
  .min(3)
  .max(20);

const email = Joi.string().email();

const password = Joi.string().min(8);

const userSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
});

module.exports = {
  userSchema,
};
