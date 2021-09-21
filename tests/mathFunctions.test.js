import { describe } from "jest-circus";
import { addition, division, multiplication, radicalExtraction, subtraction } from "../src/scripts/helpers/mathFunctions";

describe("Math function:", () => {
  test("should return multiplication of two numbers", () => {
    expect(multiplication(2, 4)).toBe(8);
  });
  test("should return addition of two numbers", () => {
    expect(addition(2,4)).toEqual(6)
  })
  test("should return subtraction of two numbers", () => {
    expect(subtraction(4,2)).toEqual(2)
  })
  test("should return division of two numbers", () => {
    expect(division(8,2)).toEqual(4)
  })
  test("should return radical expression of two numbers", () => {
    expect(radicalExtraction(1, 1/10)).toEqual(1)
  })
});
