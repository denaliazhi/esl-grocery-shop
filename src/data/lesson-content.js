const images = [
  "storefront",
  "lobby",
  "parking-lot",
  "produce",
  "bakery",
  "dairy",
  "meat",
  "frozen-foods",
];

const script = {
  intro: ["I'm at Green Goods.", "I'm grocery shopping."],
  end: ["I'm finished shopping. I'll go home now.", "This lesson is over."],
};

const tabs = {
  overview: [
    {
      heading: "Topic",
      content: "In this lesson, the student will go grocery shopping.",
    },
    {
      heading: "Objective",
      content: `The student will learn to
  - Identify common sections in the grocery store
  - Associate items with their units of count / measurement
  - Describe items in their singular and plural forms
  - Describe shopping in the future and past tense`,
    },
    {
      heading: "Prerequisites",
      content: `Before this lesson, the student should review
  - Simple sentence structure
  - Simple verb tenses
  - Question words
  - Prepositions`,
    },
  ],
  credits: [
    {
      heading: "External sites",
      content: `- Google Gemini: AI generated images
      - Remove.bg: image background removal tool
      - Icons8: intuitive vector icons`,
    },
    {
      heading: "Creative Commons License",
      content: `Grocery Shopping © 2025 by Denalia Zhi is licensed under CC BY NC SA 4.0`,
    },
  ],
};

export { images, script, tabs };
