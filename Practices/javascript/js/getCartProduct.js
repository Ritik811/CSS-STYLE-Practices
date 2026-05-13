export const getCartProductFromLSd = () => {
  let cartProduct = localStorage.getItem("cartProductLS");

  if (!cartProduct) {
    return [];
  }

  return JSON.parse(cartProduct);
};
