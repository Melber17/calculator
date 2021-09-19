import { getDisplayNumber } from "../helpers/getDisplayNumber";
import {
  addition,
  division,
  multiplication,
  subtraction,
} from "../helpers/mainMathFunctions";
import { parserValues } from "../helpers/parserValues";
import { previousOperand, currentOperand } from "../index";

const displayCurrentValues = (value1, value2) => {
  previousOperand.innerText = `${value1} ${value2}`;
  currentOperand.textContent = "";
};

export const handlerClickNumber = (number) => {
  console.log("number", number.target.textContent);
  if (
    currentOperand.textContent.includes(".") &&
    number.target.textContent === "."
  )
    return;
  if (
    currentOperand.textContent &&
    currentOperand.textContent.slice(-1) == 0 &&
    !currentOperand.textContent.includes(".") &&
    +number.target.textContent === 0
  )
    return;
  const textContent = currentOperand.textContent + number.target.textContent;
  // currentOperand.innerText = getDisplayNumber(textContent);
  currentOperand.innerText = textContent;
};

export const handlerClickDelete = (btn) => {
  if (btn.target.innerText === "AC") {
    currentOperand.innerText = currentOperand.textContent.substring(
      0,
      currentOperand.innerText.length - 1
    );
  } else {
    currentOperand.innerText = "";
    previousOperand.innerText = "";
  }
};

export const handlerClickMainOperation = (btn) => {
  if (!currentOperand.textContent) return;

  if (
    (currentOperand.textContent.split("(").length > 1 &&
      currentOperand.textContent.split("(").length - 1) !==
    (currentOperand.textContent.split(")").length > 1 &&
      currentOperand.textContent.split(")").length - 1)
  ) {
    alert("Expression isn't written correctly. Probably mistake is in ( or )");
    return;
  }
  if (
    previousOperand.textContent.includes("(") ||
    currentOperand.textContent.includes(")")
  ) {
    console.log(
      "value",
      previousOperand.textContent + currentOperand.textContent
    );
    const result = parserValues(
      previousOperand.textContent + currentOperand.textContent
    );
    displayCurrentValues(result, btn.target.innerText);
    return;
  }
  if (previousOperand.textContent.includes("*")) {
    const result = multiplication(
      +previousOperand.textContent.substring(
        0,
        previousOperand.innerText.length - 2
      ),
      +currentOperand.textContent
    );
    displayCurrentValues(result, btn.target.innerText);
    return;
  }

  if (previousOperand.textContent.includes("+")) {
    const result = addition(
      +previousOperand.textContent.substring(
        0,
        previousOperand.innerText.length - 2
      ),
      +currentOperand.textContent
    );
    displayCurrentValues(result, btn.target.innerText);
    return;
  }
  if (previousOperand.textContent.includes("-")) {
    const result = subtraction(
      +previousOperand.textContent.substring(
        0,
        previousOperand.innerText.length - 2
      ),
      +currentOperand.textContent
    );
    displayCurrentValues(result, btn.target.innerText);
    return;
  }

  if (previousOperand.textContent.includes("÷")) {
    console.log("current", currentOperand.textContent);
    if (currentOperand.textContent == 0) {
      alert("Can't division number to 0");
      return;
    }
    const result = division(
      +previousOperand.textContent.substring(
        0,
        previousOperand.innerText.length - 2
      ),
      +currentOperand.textContent
    );
    displayCurrentValues(result, btn.target.innerText);
    return;
  }

  previousOperand.innerText = `${currentOperand.textContent} ${btn.target.innerText}`;
  currentOperand.textContent = "";
};

export const handlerCountResult = () => {
  if (!previousOperand.textContent || !currentOperand.textContent) return;
  if (
    previousOperand.textContent.includes("(") ||
    currentOperand.textContent.includes(")")
  ) {
    currentOperand.innerText = parserValues(
      previousOperand.textContent + currentOperand.textContent
    );
    previousOperand.innerText = "";
    return;
  }
  switch (previousOperand.textContent.slice(-1)) {
    case "+":
      currentOperand.innerText = addition(
        +previousOperand.textContent.substring(
          0,
          previousOperand.textContent.length - 2
        ),
        +currentOperand.textContent
      );
      previousOperand.innerText = "";
      break;
    case "-":
      currentOperand.innerText = subtraction(
        +previousOperand.textContent.substring(
          0,
          previousOperand.innerText.length - 2
        ),
        +currentOperand.textContent
      );
      previousOperand.innerText = "";
      break;
    case "*":
      currentOperand.innerText = multiplication(
        +previousOperand.textContent.substring(
          0,
          previousOperand.innerText.length - 2
        ),
        +currentOperand.textContent
      );
      previousOperand.innerText = "";
      break;
    case "÷":
      if (currentOperand.textContent == 0) {
        alert("Can't division number to 0");
        return;
      }
      currentOperand.innerText = division(
        +previousOperand.textContent.substring(
          0,
          previousOperand.innerText.length - 2
        ),
        +currentOperand.textContent
      );
      previousOperand.innerText = "";
  }
};

export const handleClickSymbol = (symbol) => {
  currentOperand.innerText += symbol.target.innerText;
};



export const handlerClickPercent = () => {
  currentOperand.innerText /= 100
}
