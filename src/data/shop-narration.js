/**
 * This file determines the content that should be
 * displayed in the narration bar.
 */

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
    return overviews[e.section];
  } else if (
    // Clicked on a product edit-button (Add, Remove, or Number Picker)
    e.target === "product"
  ) {
    // Search all products for item because item could have been removed from cart
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
    // Hover over or clicked on cart icon
    e.target === "cart"
  ) {
    return `I have ${cart.count} item${
      cart.count === 1 ? "" : "s"
    } in my cart.`;
  } else if (
    // Hovered over checkout button, items in cart
    e.target === "pre-checkout"
  ) {
    return "Should I checkout now?";
  } else if (
    // Hovered over checkout button, no items in cart
    e.target === "no-checkout"
  ) {
    return "I don't have anything to checkout.";
  } else if (
    // Clicked checkout button
    e.target === "post-checkout"
  ) {
    return "I checked out. Here's my receipt.";
  } else if (
    // Hovered over receipt header
    e.target === "receipt-header"
  ) {
    return "I went shopping at Green Goods.";
  } else if (
    // Hovered over receipt item
    e.target === "receipt-item"
  ) {
    let product = cart.items.find((item) => item.id === e.id);
    let unit = product.speechUnit;

    if (product.count === 1) {
      return `I bought ${
        unit !== ""
          ? getArticle(unit) + " " + unit + " of"
          : getArticle(product.name)
      } ${product.name} for $${product.unitPrice}.`;
    } else if (product.count > 1) {
      return `I bought ${product.count} ${
        unit !== ""
          ? pluralize(unit) + ` of ${product.name}.`
          : isPlural(product.name)
          ? product.name
          : pluralize(product.name) + ` for $${product.totalCost}.`
      }`;
    }
  } else if (
    // Hovered over receipt total
    e.target === "receipt-total"
  ) {
    return `I spent $${cart.totalCost} on groceries.`;
  }
  return false;
}
