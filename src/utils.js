function Capitalize(name) {
  let words = name.split(/ |_/);
  words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return words.join(" ");
}

function IsPlural(word) {
  let lastChar = word[word.length - 1];
  return lastChar === "s";
}

export { Capitalize, IsPlural };
