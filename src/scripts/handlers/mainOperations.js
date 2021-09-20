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
  radicalCustomBtnHelper,
} from "../index";

export const handlerClickMainOperation = (btn) => {
  console.log(
    "if ",
    Number.isInteger(
      +currentOperand.textContent[currentOperand.textContent.length - 1]
    )
  );
  if (
    !currentOperand.textContent ||
    currentOperand.textContent[currentOperand.textContent.length - 1] ===
      btn.target.innerText
  )
    return;

  const checkForCorrectExpression =
    (currentOperand.textContent.includes(")") ||
      currentOperand.textContent.includes("(")) &&
    currentOperand.textContent.split("(").length - 1 !==
      currentOperand.textContent.split(")").length - 1;

  if (checkForCorrectExpression) {
    currentOperand.textContent += btn.target.innerText;
    return;
  }

  if (
    currentOperand.textContent.split("(").length > 1 &&
    checkForCorrectExpression &&
    currentOperand.textContent.split(")").length - 1
  ) {
    alert("Expression isn't written correctly. Probably mistake is in ( or )");
    return;
  }

  if (
    previousOperand.textContent.includes("(") ||
    currentOperand.textContent.includes(")")
  ) {
    const result = parserValues(
      previousOperand.textContent + currentOperand.textContent
    );
    displayCurrentValues(result, btn.target.innerText);
    return;
  }
  if (radicalCustomBtnHelper.textContent.includes("√")) {
    const result = radicalExtraction(
      +radicalCustomBtnHelper.textContent.substring(
        0,
        radicalCustomBtnHelper.innerText.length - 1
      ),
      +currentOperand.textContent
    );
    displayCurrentValues(result, btn.target.innerText);
    radicalCustomBtnHelper.innerText = "";
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
  if (previousOperand.textContent.includes("^")) {
    const result = Math.pow(
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

export const handleClickSymbol = (symbol) => {
  currentOperand.innerText += symbol.target.innerText;
};

export const handlerClickPercent = () => (currentOperand.innerText /= 100);

export const handlerChangeSign = () => {
  if (currentOperand.innerText) currentOperand.innerText *= -1;
};

export const handlerCLickDegree = (btn) => {
  if (!currentOperand.innerText) return;
  switch (btn.target.innerText) {
    case "x2":
      currentOperand.innerText = Math.pow(+currentOperand.innerText, 2);
      break;
    case "2":
      currentOperand.innerText = Math.pow(+currentOperand.innerText, 2);
      break;
    case "x3":
      currentOperand.innerText = Math.pow(+currentOperand.innerText, 3);
      break;
    case "3":
      currentOperand.innerText = Math.pow(+currentOperand.innerText, 3);
      break;
    case "xy":
      previousOperand.innerText = `${currentOperand.innerText} ^`;
      currentOperand.innerText = "";
      break;
    case "y":
      previousOperand.innerText = `${currentOperand.innerText} ^`;
      currentOperand.innerText = "";
  }
};

export const handlerClickRadical = (btn) => {
  if (!currentOperand.innerText) return;
  switch (btn.target.innerText) {
    case "√x":
      currentOperand.innerText = Math.sqrt(+currentOperand.innerText);
    case "∛x":
      currentOperand.innerText = Math.cbrt(currentOperand.innerText);
  }
};

export const handlerClickCustomRadical = () => {
  if (!currentOperand.innerText) return;
  radicalCustomBtnHelper.innerText = currentOperand.innerText + "√";
  currentOperand.innerText = "";
};

export const handlerClickSecondFunction = () => {
  if (!currentOperand.innerText) return;
  currentOperand.innerText = Math.pow(2, currentOperand.innerText);
};

export const handlerClickLog = () => {
  if (!currentOperand.innerText) return;
  currentOperand.innerText = Math.log(currentOperand.innerText);
};
