import products from "../api/product.json" with { type: "json" };
import { showProductContainer } from "./showProductContainer.js";

showProductContainer(products);
