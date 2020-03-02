import cheesyInfo from "./cheesyInfo";
test("no cheese", () => {
  expect(cheesyInfo([])).toBe("");
});
test("2 layers cheese", () => {
  expect(cheesyInfo(["cheese", "cheese"])).toBe("double cheese");
});
test("4 layers ingredients with 3 layers of cheese", () => {
  expect(cheesyInfo(["tomato", "cheese", "cheese", "cheese"])).toBe(
    "triple cheese"
  );
});
