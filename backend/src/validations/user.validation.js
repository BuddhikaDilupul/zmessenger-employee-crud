const Joi = require("joi");

module.exports = {
  create: {
    body: Joi.object({
      _id: Joi.forbidden(),
      email: Joi.string().required().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
      firstName: Joi.string().required().regex(/^[a-zA-Z]+$/).min(6).max(10),
      lastName: Joi.string().required().regex(/^[a-zA-Z]+$/).min(6).max(10),
      contactNumber: Joi.string().required().pattern( /^0\d{9}$/),
      status: Joi.forbidden(),
      gender: Joi.string().required().valid('male', 'female')
    }),
  },
};
