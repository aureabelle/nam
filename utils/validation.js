// Validation
const Joi = require("@hapi/joi");

const registerValidation = data => {
  const schema = Joi.object({
    email: Joi.string()
      .required()
      .email(),
    password: Joi.string()
      .pattern(/^[a-zA-Z0-9]{3,30}$/)
      .min(6)
      .required()
  });

  return schema.validate(data);
};

const loginValidation = data => {
  const schema = Joi.object({
    email: Joi.string()
      .required()
      .email(),
    password: Joi.string()
      .pattern(/^[a-zA-Z0-9]{3,30}$/)
      .min(6)
      .required()
  });

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
