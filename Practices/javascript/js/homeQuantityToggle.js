export const homeQuantityToggle = (evt, id, stock) => {
  const currCardElement = document.querySelector(`#card${id}`);
  let productQuantity = currCardElement.querySelector(".productQuantity");

  let quantity = Number(currCardElement.getAttribute("quantity")) || 1;

  if (evt.target.className === "cartIncrement") {
    if (quantity < stock) quantity += 1;
  }

  if (evt.target.className === "cartDecrement") {
    if (quantity > 0) quantity -= 1;
  }

  productQuantity.textContent = quantity;
  currCardElement.setAttribute("quantity", quantity.toString());
};
