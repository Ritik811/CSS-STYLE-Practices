import { updateCardValue } from "./updateCardValue.js";

export const getCartProductFromLSd = () => {
  let cartProduct = localStorage.getItem("cartProductLS");

  if (!cartProduct) {
    return [];
  }

  cartProduct = JSON.parse(cartProduct);

  updateCardValue(cartProduct.length);
  return cartProduct;
};
