const overviews = {
  produce: "I'm in the produce section. It has fresh fruits and vegetables.",
  bakery: "I'm in the bakery section. It has fresh baked goods.",
  dairy: "I'm in the dairy section. It has refrigerated milk products.",
  meat: "I'm in the meat section. It has fresh cuts of meat.",
  frozen_foods:
    "I'm in the frozen foods section. Frozen food lasts a very long time.",
};

export default function interpret(e) {
  let clicked = e.target;
  console.log(e);
  // Clicked on section in store nav
  if (clicked.closest(".store-nav") && clicked.nodeName === "A") {
    let section = clicked.text.toLowerCase().replace(" ", "_");
    return overviews[section];
  }
  return false;
}
