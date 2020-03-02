export default function cheesyInfo(ingredients) {
  const cheeseCount = ingredients.filter(i => i === "cheese").length;
  const table = ["", "", "double", "triple", "quadrubble"];
  if (cheeseCount < 2) {
    return "";
  } else if (table[cheeseCount]) {
    return `${table[cheeseCount]} cheese`;
  } else {
    return "maxium cheese";
  }
}
// leave this function outside  easy to test, outside as global function
