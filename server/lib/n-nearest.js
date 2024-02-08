const getNNearest = (id, products, n) => {
  const product = products.find((product) => product.id === id);
  if (!product) {
    return [];
  }

  const sortedProducts = products.sort((a, b) => {
    return (
      Math.abs(a.price - product.price) - Math.abs(b.price - product.price)
    );
  });

  return sortedProducts.slice(1, n + 1);
};

module.exports = getNNearest;
