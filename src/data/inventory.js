/**
 * This file contains data for all grocery items,
 * grouped by the section of the store to which they belong.
 */

const inventory = {
  produce: [
    {
      name: "apple",
      unitPrice: 0.8,
      speechUnit: "",
      displayUnit: "each",
    },
    {
      name: "banana",
      unitPrice: 0.28,
      speechUnit: "",
      displayUnit: "each",
    },
    {
      name: "broccoli",
      unitPrice: 1.83,
      speechUnit: "head",
      displayUnit: "each",
    },
    {
      name: "carrots",
      unitPrice: 1.92,
      speechUnit: "pound",
      displayUnit: "lb",
    },
    {
      name: "grapes",
      unitPrice: 4.45,
      speechUnit: "pound",
      displayUnit: "lb",
    },
    {
      name: "tomatoes",
      unitPrice: 4.59,
      speechUnit: "pack",
      displayUnit: "pack",
    },
  ],
  bakery: [
    {
      name: "bread",
      unitPrice: 5.49,
      speechUnit: "loaf",
      displayUnit: "each",
    },
    {
      name: "cake",
      unitPrice: 38.99,
      speechUnit: "",
      displayUnit: "each",
    },
    {
      name: "cookies",
      unitPrice: 6.99,
      speechUnit: "pack",
      displayUnit: "pack (16-ct)",
    },
    {
      name: "donuts",
      unitPrice: 10.99,
      speechUnit: "box",
      displayUnit: "box (6-ct)",
    },
    {
      name: "muffins",
      unitPrice: 7.49,
      speechUnit: "pack",
      displayUnit: "pack (4-ct)",
    },
    {
      name: "pie",
      unitPrice: 13.99,
      speechUnit: "",
      displayUnit: "each",
    },
  ],
};

export default inventory;
