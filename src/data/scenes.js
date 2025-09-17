const scenes = [
  {
    name: "intro",
    mode: "tutorial", // Show "Next" button on narration bar
    background: "storefront",
    script: ["I'm at Green Goods.", "I'm grocery shopping."],
    // If no more lines, increment scene index to go to next scene
  },
  {
    name: "shopping",
    mode: "free", // Hide "Next button on narration bar"
    background: "lobby",
    script: ["Where will I go first?"], // Scene index gets incremented by checkout button
  },
];

export default scenes;
