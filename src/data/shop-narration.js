import { getArticle } from "../utils";
import pluralize, { isPlural } from "pluralize";

const overviews = {
  produce: "I'm in the produce section. It has fresh fruits and vegetables.",
  bakery: "I'm in the bakery section. It has fresh baked goods.",
  dairy: "I'm in the dairy section. It has refrigerated milk products.",
  meat: "I'm in the meat section. It has fresh cuts of meat.",
  frozen_foods:
    "I'm in the frozen foods section. Frozen food lasts a very long time.",
};

export default function interpret(e, products) {
  let clicked = e.target;

  if (
    // Clicked on section link in store nav
    clicked.closest(".store-nav") &&
    clicked.nodeName === "A"
  ) {
    let section = clicked.text.toLowerCase().replace(" ", "_");
    return overviews[section];
  } else if (
    // Clicked on a product edit-button (Add, Remove, or Number Picker)
    clicked.closest(".edit-item-btn") ||
    clicked.closest(".remove-btn")
  ) {
    let product = clicked.closest(".product");

    console.log(product);
    let section = product.dataset.section;
    product = products[section].find((item) => item.id === product.id);
    let unit = product.speechUnit;

    if (product.count === 1) {
      // Either "a [unit] of" or just "a/an"
      return `I will buy ${
        unit !== ""
          ? getArticle(unit) + " " + unit + " of"
          : getArticle(product.name)
      } ${product.name}.`;
    } else if (product.count > 1) {
      return `I will buy ${product.count} ${
        unit !== ""
          ? pluralize(unit) + ` of ${product.name}.`
          : isPlural(product.name)
          ? product.name
          : pluralize(product.name) + "."
      }`;
    } else {
      return `I will not buy the ${product.name}. I removed it from my cart.`;
    }
  }
  return false;
}
