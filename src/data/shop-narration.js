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

export default function interpret(e, cart, products) {
  if (
    // Clicked on section link in store nav
    e.target === "nav-bar"
  ) {
    let section = e.section.toLowerCase().replace(" ", "_");
    return overviews[section];
  } else if (
    // Clicked on a product edit-button (Add, Remove, or Number Picker)
    e.target === "product"
  ) {
    let product = products[e.section].find((item) => item.id === e.id);
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
  } else if (
    // Clicked on cart icon
    e.target === "cart"
  ) {
    return `I have ${cart.count} item${
      cart.count === 1 ? "" : "s"
    } in my cart.`;
  }
  return false;
}
