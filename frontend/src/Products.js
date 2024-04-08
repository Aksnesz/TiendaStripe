import stripe from 'stripe';
const stripeClient = stripe('sk_test_51P2R7LCPAFoki0Hw0mQY6GyvhOJxJNMruYFTq7RhMJQ8GJbB9g7HkNm1jWAsqbmiSE6EZ0WhKQge9byjj463WnSe00cLDtmLOm');

async function getProductsFromStripe() {
  const products = await stripeClient.products.list();
  const prices = await stripeClient.prices.list();

  return products.data.map((product) => {
    const price = prices.data.find((price) => price.product === product.id);
    return {
      id: price.id,
      name: product.name,
      price: price.unit_amount / 100,
      image: product.images[0] || '',
    };
  });
}

async function getProductData(id) {
  const arrayProducts = await getProductsFromStripe();
  const productData = arrayProducts.find((product) => product.id === id);

  if (!productData) {
    console.log("Product not found for id: " + id);
    return undefined;
  }

  return productData;
}

export { getProductsFromStripe, getProductData };
