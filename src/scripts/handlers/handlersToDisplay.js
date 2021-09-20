import {
  addition,
  division,
  multiplication,
  radicalExtraction,
  subtraction,
} from "../helpers/mathFunctions";
import { displayCurrentValues } from "../helpers/displayValues";
import { parserValues } from "../helpers/displayValues";
import {
  previousOperand,
  currentOperand,
  memoryContainer,
  radicalCustomBtnHelper,
} from "../index";
export const handlerClickNumber = (number) => {
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
    radicalCustomBtnHelper.innerText = "";
  }
};

export const handlerCountResult = () => {
  if (radicalCustomBtnHelper.textContent.includes("√")) {
    currentOperand.innerText = radicalExtraction(
      +radicalCustomBtnHelper.textContent.substring(
        0,
        radicalCustomBtnHelper.innerText.length - 1
      ),
      +currentOperand.textContent
    );
    radicalCustomBtnHelper.innerText = "";
    previousOperand.innerText = "";
    return;
  }

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
      break;
    case "^":
      if (currentOperand.textContent == 0) {
        alert("Can't division number to 0");
        return;
      }
      currentOperand.innerText = Math.pow(
        +previousOperand.textContent.substring(
          0,
          previousOperand.innerText.length - 2
        ),
        +currentOperand.textContent
      );
      previousOperand.innerText = "";
  }
};

export const handlerChangeMemory = (btn) => {
  switch (btn.target.innerText) {
    case "mc":
      memoryContainer.innerText = "";
      break;
    case "mr":
      if (memoryContainer.innerText) {
        currentOperand.innerText = memoryContainer.innerText.substring(3);
      }
      break;
    case "m+":
      if (currentOperand.innerText) {
        memoryContainer.innerText =
          "M: " +
          (+memoryContainer.innerText.substring(3) + +currentOperand.innerText);
      }
      break;
    case "m-":
      if (currentOperand.innerText) {
        memoryContainer.innerText =
          "M: " +
          (+memoryContainer.innerText.substring(3) - +currentOperand.innerText);
      }
  }
};


