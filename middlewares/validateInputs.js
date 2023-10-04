const Joi = require("joi");
const PasswordComplexity = require("joi-password-complexity");

function validateInputs(req, res, next) {
  let inputs = req.body;
  const schema = Joi.object({
    username: Joi.string().min(3).max(255).required(),
    email: Joi.string()
      .min(3)
      .max(255)
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    mobile: Joi.string().min(3).max(14).required(),
    password: PasswordComplexity({
      min: 6,
      max: 20,
      lowerCase: 1,
      upperCase: 1,
      numeric: 1,
      requirementCount: 4
    }),
    confirm_password: Joi.ref("password"),
    created_at: Joi.string()
  });
  let { error } = schema.validate(inputs);
  if (error) return res.status(400).send(error.details[0].message);
  next();
}

module.exports = validateInputs;
