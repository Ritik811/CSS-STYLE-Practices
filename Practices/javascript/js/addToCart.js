import { getCartProductFromLSd } from "./getCartProduct.js";
import { updateCardValue } from "./updateCardValue.js";

getCartProductFromLSd();

export const addToCart = (evt, id, stock) => {
  const currCardElement = document.querySelector(`#card${id}`);
  console.log(currCardElement);
  let price = currCardElement.querySelector(".productPrice").textContent;
  let quantity = Number(
    currCardElement.querySelector(".productQuantity").textContent,
  );

  let arrLocalStorageProduct = getCartProductFromLSd();

  let existingProduct = arrLocalStorageProduct.find(
    (curEle) => curEle.id === id,
  );

  if (existingProduct && quantity <= 1) return;

  if (existingProduct && quantity > 1) {
    console.log("I am Come");
    quantity += Number(existingProduct.quantity);
    price = (existingProduct.price * quantity).toFixed(2);

    let updateProduct = {
      id,
      price,
      quantity,
    };

    // console.log(updateProduct);

    updateProduct = arrLocalStorageProduct.map((curEle) =>
      curEle.id === id ? updateProduct : curEle,
    );

    // console.log(updateProduct);

    arrLocalStorageProduct = updateProduct;

    localStorage.setItem(
      "cartProductLS",
      JSON.stringify(arrLocalStorageProduct),
    );
    return;
  }

  price = (quantity * price).toFixed(2);

  arrLocalStorageProduct.push({ id, price, quantity });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  updateCardValue(arrLocalStorageProduct.length);
};
