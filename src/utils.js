// Capitalize every word in phrase
function capitalize(phrase) {
  let words = phrase.split(/ |_/);
  words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return words.join(" ");
}

// Determine proper article ('a', 'an', 'the') to precede noun
function getArticle(noun) {
  let vowels = ["a", "e", "i", "o", "u"];
  let firstChar = noun.charAt(0);
  if (vowels.includes(firstChar)) {
    return "an";
  }
  return "a";
}

// Format path to image
function getImagePath(name) {
  return `/${name.replace(/ |_/, "-")}.png`;
}

export { capitalize, getArticle, getImagePath };
