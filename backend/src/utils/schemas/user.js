const Joi = require("joi");

const name = Joi.string()
  .pattern(/^[a-zA-Z]+$/)
  .min(3)
  .max(20);

const lastName = Joi.string()
  .pattern(/^[a-zA-Z]+$/)
  .min(3)
  .max(20);

const username = Joi.string().alphanum().min(3).max(20);

const email = Joi.string().email();

const password = Joi.string().min(8);

const userSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  username: username.required(),
  email: email.required(),
  password: password.required(),
});

module.exports = {
  userSchema,
};
