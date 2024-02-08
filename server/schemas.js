const yup = require('yup');

const createSchema = yup.object().shape({
  name: yup.string().required(),
  category: yup.string().required(),
  price: yup.number().required(),
});

module.exports = { createSchema };
