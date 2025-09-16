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
      section: "produce",
    },
    {
      name: "banana",
      unitPrice: 0.28,
      speechUnit: "",
      displayUnit: "each",
      section: "produce",
    },
    {
      name: "broccoli",
      unitPrice: 1.83,
      speechUnit: "head",
      displayUnit: "each",
      section: "produce",
    },
    {
      name: "carrots",
      unitPrice: 1.92,
      speechUnit: "pound",
      displayUnit: "lb",
      section: "produce",
    },
    {
      name: "grapes",
      unitPrice: 4.45,
      speechUnit: "pound",
      displayUnit: "lb",
      section: "produce",
    },
    {
      name: "tomatoes",
      unitPrice: 4.59,
      speechUnit: "pack",
      displayUnit: "pack",
      section: "produce",
    },
  ],
  bakery: [
    {
      name: "bread",
      unitPrice: 5.49,
      speechUnit: "loaf",
      displayUnit: "each",
      section: "bakery",
    },
    {
      name: "cake",
      unitPrice: 38.99,
      speechUnit: "",
      displayUnit: "each",
      section: "bakery",
    },
    {
      name: "cookies",
      unitPrice: 6.99,
      speechUnit: "pack",
      displayUnit: "pack (16-ct)",
      section: "bakery",
    },
    {
      name: "donuts",
      unitPrice: 10.99,
      speechUnit: "box",
      displayUnit: "box (6-ct)",
      section: "bakery",
    },
    {
      name: "muffins",
      unitPrice: 7.49,
      speechUnit: "pack",
      displayUnit: "pack (4-ct)",
      section: "bakery",
    },
    {
      name: "pie",
      unitPrice: 13.99,
      speechUnit: "",
      displayUnit: "each",
      section: "bakery",
    },
  ],
};

export default inventory;
