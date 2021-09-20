import { describe } from "jest-circus";
import { multiplication } from "../src/scripts/helpers/mathFunctions";

describe("Math function:", () => {
  test("Function should return multiplication of two numbers", () => {
    expect(multiplication(2, 4)).toBe(8);
  });
});

