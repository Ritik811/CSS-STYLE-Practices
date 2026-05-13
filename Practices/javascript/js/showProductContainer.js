import { homeQuantityToggle } from "./homeQuantityToggle.js";
import { addToCart } from "./addToCart.js";

export const showProductContainer = (products) => {
  const productTemplate = document.querySelector("#productTemplate");
  const productContainer = document.querySelector("#productContainer");

  products.forEach((curProd) => {
    const { id, name, category, brand, price, stock, description, image } =
      curProd;
    const templateClone = document.importNode(productTemplate.content, true);
    templateClone.querySelector(".productName").textContent = name;
    templateClone.querySelector(".productImage").src = image;
    templateClone.querySelector(".productImage").alt = name;
    templateClone.querySelector(".productDescription").textContent =
      description;
    templateClone.querySelector(".productPrice").textContent = price;
    templateClone.querySelector(".productActualPrice").textContent = price * 4;
    templateClone.querySelector(".productStock").textContent = stock;
    templateClone.querySelector(".category").textContent = category;
    templateClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    templateClone
      .querySelector(".stockElement")
      .addEventListener("click", (evt) => {
        homeQuantityToggle(evt, id, stock);
      });

    templateClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (evt) => {
        addToCart(evt, id, stock);
      });

    productContainer.append(templateClone);
  });
};
