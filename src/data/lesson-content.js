const backgroundImages = [
  "bakery",
  "checkout",
  "dairy",
  "frozen-foods",
  "lobby",
  "meat",
  "produce",
  "storefront",
];

const script = {
  intro: ["I'm at Green Goods.", "I'm grocery shopping."],
  end: ["I'm finished shopping. I'll go home now.", "This lesson is over."],
};

const tabs = {
  overview: [
    {
      heading: "Topic",
      content: "This lesson is about grocery shopping.",
    },
    {
      heading: "Concepts",
      content: `Students will learn to 
  - Identify common sections in the grocery store
  - Associate items with units of count / measurement
  - Describe items in their singular and plural forms
  - Describe shopping in the future and past tense`,
    },
    {
      heading: "Prerequisites",
      content: `Before this lesson, students should be familiar with
  - Simple sentence structure
  - Pronouns ("I", "my", "it")
  - Prepositions ("at", "in", "of")
  - Question words ("Where...?", "Should...?")`,
    },
    {
      heading: "Teaching Notes",
      content: `
      - This lesson is intended for beginner to intermediate ESL students.
      - Teachers are encouraged to read the content aloud to help students practice their pronunciation. 
      - If necessary, students may use their browser's native translation feature to translate the page.`,
    },
  ],
  transcript: [],
  credits: [
    {
      heading: "External sites",
      content: `- Google Gemini: AI generated images
      - Remove.bg: image background removal tool
      - Icons8: intuitive vector icons`,
    },
    {
      heading: "Creative Commons License",
      content: `Grocery Shopping © 2025 by Denalia Zhi is licensed under CC BY NC SA 4.0.`,
    },
  ],
};

export { backgroundImages, script, tabs };
