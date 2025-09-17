const main = {
  intro: {
    name: "intro",
    background: "storefront",
    script: ["I'm at Green Goods.", "I'm grocery shopping."],
  },
  shopping: {
    name: "shopping",
    background: "lobby",
    script: ["Where will I go first?"],
  },
};

const sectionDetails = {
  produce: "I'm in the produce section. It has fresh fruits and vegetables.",
  bakery:
    "I'm in the bakery section. It has fresh baked goods. They were made in-store.",
  dairy: "I'm in the dairy section. It has refrigerated milk products.",
  meat: "I'm in the meat section. It has fresh cuts of meat.",
  frozen_foods:
    "I'm in the frozen foods section. Frozen foods last longer than fresh foods.",
};

export { main, sectionDetails };
