const categoryFilter = ({ products, category }) => {
  return typeof category !== 'undefined'
    ? products.filter((product) => product.category === category)
    : products;
};

const priceMinFilter = ({ products, minPrice }) => {
  return typeof minPrice !== 'undefined'
    ? products.filter((product) => product.price >= parseFloat(minPrice))
    : products;
};

const priceMaxFilter = ({ products, maxPrice }) => {
  return typeof maxPrice !== 'undefined'
    ? products.filter((product) => product.price <= parseFloat(maxPrice))
    : products;
};

const filters = [categoryFilter, priceMinFilter, priceMaxFilter];

module.exports = filters;
